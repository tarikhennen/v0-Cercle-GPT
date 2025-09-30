import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cercle GPT - Plateforme Multi-IA pour IHECS",
  description: "Accélérez vos recherches avec Cercle GPT. Bêta exclusive pour les étudiants IHECS Master 2.",
  generator: "v0.app",
  icons: {
    icon: "/cercle-gpt-logo.png",
    shortcut: "/cercle-gpt-logo.png",
    apple: "/cercle-gpt-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
