import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "./provider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chill AI",
  description: "The AI with the cleanest UI",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon-light.png',
        href: '/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-dark.png',
        href: '/icon-dark.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            <AppSidebar />
            <SidebarInset>
              <SidebarTrigger className="ml-2 mt-2" />
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-background rounded-lg">
                {children}
              </div>
            </SidebarInset>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
