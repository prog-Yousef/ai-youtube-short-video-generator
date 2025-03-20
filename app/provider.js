"use client"
import React, { useContext, useEffect, useState,createContext} from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { auth } from '@/configs/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthContext } from './_context/AuthContext'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  )
}

function Provider({ children }) {

  const [user, setUser] = useState();

//for the user to be logged in
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log(user);
    // You can also set the user state or perform other actions here
    setUser(user);
    
  });

  // Cleanup subscription on unmount
  return () => unsubscribe();
}, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {/* fick fel här när jag hade så här  */}
      {/* <AuthContext.Provider value={user}>
 */} 
   <AuthContext.Provider value={{ user }}>

      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="fixed top-4 right-4">
          <ThemeToggle />
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