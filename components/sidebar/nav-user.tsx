"use client"

import {
  BadgeCheck,
  ChevronRight,
  CircleUser,
  LogOut,
  Moon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import DarkModeToggle from "@/components/dark-mode"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Dialog>
          <DialogTrigger asChild>
            <SidebarMenuButton
              className="bg-primary py-3 hover:text-muted cursor-pointer"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarFallback className="rounded-lg bg-transparent">
                  <CircleUser />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronRight className="ml-auto size-4" />
            </SidebarMenuButton>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg bg-primary rounded-2xl">
            <DialogHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <DialogTitle>User Profile</DialogTitle>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg bg-transparent">
                    <CircleUser className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Account Settings</h4>
                <div className="space-y-2">
                  <Button className="flex w-full items-center justify-start gap-3 rounded-lg px-2 py-5 border hover:bg-muted/10"> 
                    <BadgeCheck className="h-4 w-4 text-black dark:text-white" />
                    <span className="text-sm text-black dark:text-white">Account</span>
                  </Button>
                  <DarkModeToggle />
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button className="flex w-full items-center gap-3 rounded-lg px-2 py-5 text-sm text-destructive hover:bg-destructive/10">
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
