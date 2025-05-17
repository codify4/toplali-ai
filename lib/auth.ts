import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import { nextCookies } from "better-auth/next-js";
import { user, session, account, verification } from "@/db/schemas/auth-schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user: user,
            session: session,
            account: account,
            verification: verification
        }
    }),
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }, 
    },
    plugins: [nextCookies()],
    trustedOrigins: [
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
        "/signin",
        "/chat"
    ]
});