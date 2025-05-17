"use client"

import { AIAnimation } from "./ai-animations"
import { useTheme } from "next-themes"
import GoogleButton from "@/app/signin/components/google-button";
export default function SignInForm() {
  const { theme } = useTheme();

  return (
    <div className="flex h-screen flex-col lg:flex-row w-full">
      {/* Left Section - Sign In */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-background">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <img
              src={theme === "dark" ? "/icon-dark.png" : "/icon-light.png"}
              alt="Chill AI Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-serif font-medium tracking-tight text-black dark:text-white">
                Your ideas,
                <br />
                amplified
              </h1>
              <p className="text-sm text-muted-foreground">
                The AI with the cleanest UI that helps you create in confidence.
              </p>
            </div>

            <div className="space-y-4">
              <GoogleButton />
            </div>

            <p className="text-center text-xs text-muted-foreground">
              By continuing, you agree to our{" "}
              <a href="#" className="underline underline-offset-2">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Animation */}
      <div className="flex h-full py-10 flex-1 bg-primary rounded-3xl items-center justify-center relative overflow-hidden">
        <AIAnimation />
      </div>
    </div>
  )
}
