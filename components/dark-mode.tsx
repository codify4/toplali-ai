"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from './ui/button'

function DarkModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <div className="relative inline-flex items-center">
            <Button
                variant="ghost"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center justify-between gap-2 rounded-full p-3"
                aria-label="Toggle theme"
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="text-sm font-medium">Toggle theme</span>
            </Button>
        </div>
    )
}

export default DarkModeToggle