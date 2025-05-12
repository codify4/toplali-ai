"use client"

import * as React from "react"
import {
  File,
  FilePlus2,
  Home,
  Info,
  LifeBuoy,
  Settings2
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/vercel.svg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Past Conversations",
      url: "/past-conversations",
      icon: File,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
    {
      title: "Help",
      url: "/help",
      icon: LifeBuoy,
    },
    {
      title: "About",
      url: "/about",
      icon: Info,
    },
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
            <h3 className="font-bold text-lg">Chill AI</h3>
            <Button
              variant="ghost"
              size="icon"
              className="size-10"
            >
              <FilePlus2 size={24} />
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-primary">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-primary">
        {/* <Button variant="ghost" className="w-full hover:bg-muted/10 flex items-center justify-start text-start">
          <Trash2 size={16} />
          Clear Chat
        </Button> */}
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
