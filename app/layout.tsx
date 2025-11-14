import type React from "react"
import type { Metadata } from "next"
import { geist, geistMono } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "ZalesMachine - Transform Your Revenue Operations",
  description: "AI-powered revenue operations platform that automates sales, marketing, and growth processes for B2B companies.",
  generator: "ZalesMachine",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  other: {
    "format-detection": "telephone=no",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans dark`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
