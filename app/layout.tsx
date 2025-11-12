import type React from "react"
import type { Metadata } from "next"
import { geist } from "@/lib/fonts"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "ZalesMachine - Transform Your Revenue Operations",
  description: "AI-powered revenue operations platform that automates sales, marketing, and growth processes for B2B companies.",
  generator: "ZalesMachine",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${jetbrainsMono.variable} dark`}>{children}</body>
    </html>
  )
}
