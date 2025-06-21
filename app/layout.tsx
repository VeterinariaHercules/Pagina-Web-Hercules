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
  title: "Veterinaria Hércules | Clínica veterinaria en Cali – Servicios, productos y bienestar animal",
  description: "Veterinaria Hércules es una clínica veterinaria en Cali que ofrece servicios médicos, estética canina, vacunas, desparasitación y productos para el bienestar de tus mascotas.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: ["veterinaria en Cali", "clínica veterinaria", "servicios veterinarios", "productos para mascotas", "Veterinaria Hércules"],
  openGraph: {
    title: "Veterinaria Hércules – Cuidamos de tus mascotas como en casa",
    description: "Conoce todos nuestros servicios veterinarios y productos. Atención profesional para perros, gatos y otras mascotas.",
    url: "https://www.veterinariahercules.com.co/",
    siteName: "Veterinaria Hércules",
    locale: "es_CO",
    type: "website",
  }
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
       <head>
        {/* Meta tag para verificación de Google Search Console */}
        <meta name="google-site-verification" content="kmz6IcdLfNYsuafkWJkYSwueJLp1zMpGNrzY8M5t5W0" />
      </head>
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
