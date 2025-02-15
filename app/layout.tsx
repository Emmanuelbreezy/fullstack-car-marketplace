import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/context/query-provider";
import RegisterDialog from "@/components/auth/RegisterDialog";
import LoginDialog from "@/components/auth/LoginDialog";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Auto Hunt",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`!bg-[#EBF2F7] antialiased`}>
        <QueryProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <NuqsAdapter>
              <div>
                <RegisterDialog />
                <LoginDialog />
                {children}
              </div>
              <Toaster />
            </NuqsAdapter>
          </Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}
