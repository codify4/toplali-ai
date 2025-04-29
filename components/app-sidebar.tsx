"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  FilePlus2,
  Frame,
  GalleryVerticalEnd,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    
  ],
  navSecondary: [
    
  ],
  projects: [
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="bg-primary">
      <SidebarHeader className="bg-primary">
        <SidebarMenu>
          <SidebarMenuItem className="flex flex-row items-center justify-between gap-2">
            <GalleryVerticalEnd size={20} className="cursor-pointer hover:text-muted" />
            <h3 className="font-bold text-lg">Top Lali AI</h3>
            <FilePlus2 size={20} className="cursor-pointer hover:text-muted" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-primary">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-primary">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
