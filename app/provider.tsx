import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

function provider({children}: {children: React.ReactNode}) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default provider