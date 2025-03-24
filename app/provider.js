"use client"
import React, { useContext, useEffect, useState,createContext} from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { auth } from '@/configs/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthContext } from './_context/AuthContext'
import { useMutation } from "convex/react";
import { api } from '@/convex/_generated/api'


/* /* const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure we only show theme toggle after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-5 w-5 rounded-md p-2"> {/* Empty placeholder */
/*         <div className="h-5 w-3" />
      </div>
    );
  }
  */

/* 
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 w-5/6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
}; */

function Provider({ children }) {

  const [user, setUser] = useState();
  const CreateUser = useMutation(api.users.CreateNewUser);

//for the user to be logged in
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    console.log(user);
  

    setUser(user);
    if (user) {
      const result = await CreateUser({
        name: user?.displayName,
        email: user?.email,
        pictureURL: user?.photoURL
      });
      console.log(result);
      setUser(result);
    }

    const result = CreateUser({
      
      name: user?.displayName,
      email: user?.email,
      pictureURL: user?.photoURL
    
    });
    console.log(result);
  });

  // Cleanup subscription on unmount
  return () => unsubscribe();
}, []); // Empty dependency array ensures this runs only once on mount

  return (
    
      /* fick fel här när jag hade så här  */
      /* <AuthContext.Provider value={user}>
 */
    <div>

   <AuthContext.Provider value={{ user }}>

      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem // automatically update the theme when system changes
        disableTransitionOnChange
      >
        <div className="fixed top-4 right-4">
          {/* <ThemeToggle /> */}
        </div>
        {children}
      </NextThemesProvider>
      </AuthContext.Provider>
     
    </div>
  )
}

export const useAuthContext = () => {
 const context =  useContext(AuthContext);
  return context;
}

export default Provider
