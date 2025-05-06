'use client'

import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

function Provider({children}: {children: React.ReactNode}) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default Provider