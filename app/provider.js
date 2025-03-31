"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/configs/firebaseConfig'
import { useMutation } from "convex/react"
import { api } from '@/convex/_generated/api'

// Create context in this file instead of importing
const AuthContext = createContext()

function Provider({ children }) {
    const [user, setUser] = useState(null)
    const CreateUser = useMutation(api.users.CreateNewUser)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const result = await CreateUser({
                    name: user?.displayName,
                    email: user?.email,
                    pictureURL: user?.photoURL
                })
                setUser(result)
            }
        })
        return () => unsubscribe()
    }, [CreateUser]) // Added dependency

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </NextThemesProvider>
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuthContext must be used within Provider')
    return context
}

export default Provider