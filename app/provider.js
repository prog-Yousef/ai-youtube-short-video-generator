"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

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
  return (
    <div>
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
    </div>
  )
}

export default Provider