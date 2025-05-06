"use client"

import { ChevronDown, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'

function DarkModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className='w-full flex flex-row bg-primary text-start py-5 rounded-lg hover:bg-muted/10'>
                    {theme === "light" ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> : <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
                    <span className="ml-2">Toggle theme</span>
                    <ChevronDown className="ml-auto size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='bg-primary rounded-lg'>
                <DropdownMenuItem className='py-2 cursor-pointer dark:hover:text-black' onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem className='py-2 cursor-pointer dark:hover:text-black' onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem className='py-2 cursor-pointer dark:hover:text-black' onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DarkModeToggle