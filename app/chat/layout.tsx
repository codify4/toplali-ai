import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import Provider from "../provider";

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Provider>
                <AppSidebar />
                <SidebarInset>
                    <SidebarTrigger className="ml-2 mt-2 sticky top-4 z-10" />
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-background rounded-lg">
                        {children}
                    </div>
                </SidebarInset>
            </Provider>
        </div>
    );
  }
  