import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clinica Veterinaria Hercules - Cuidamos de tus mascotas",
  icons: {
    icon: "/favicon.svg",
  },
  description: "Clínica veterinaria con servicios completos para el cuidado y bienestar de tus mascotas",
    generator: 'v0.dev'
}

export const viewport = {
  themeColor: "#2e3092"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}
