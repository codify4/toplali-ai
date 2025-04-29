import { ChevronDown, Moon, Sun } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'

function DarkModeToggle() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"className='w-full bg-primary text-start py-5 rounded-lg hover:bg-muted/10'>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span>Toggle theme</span>
                    <ChevronDown className="ml-auto size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='bg-primary max-w-xl rounded-lg'>
                <DropdownMenuItem className='py-2'>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem className='py-2'>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem className='py-2'>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DarkModeToggle