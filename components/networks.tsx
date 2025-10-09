"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram } from "lucide-react"
import { SiTiktok } from "react-icons/si"
import Link from "next/link"

export default function Networks() {
  return (
    <Card className="relative overflow-hidden my-12 bg-white border-0 shadow-none">
      <CardContent className="p-8">
        {/* Decoraciones removidas para fondo blanco limpio */}
        {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 opacity-50" /> */}
        {/* <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 rounded-full -ml-12 -mb-12 opacity-50" /> */}

        <div className="relative text-center">
          <h3 className="text-3xl font-bold text-indigo-800 mb-4">
            ¡Síguenos en redes sociales!
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Descubre tips, promociones y momentos adorables de nuestros pacientes peludos.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Link
                href="https://www.facebook.com/clinicaveterinariahercules24horas"
                target="_blank"
              >
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </Link>
            </Button>

            <Button
              asChild
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Link
                href="https://www.instagram.com/clinicaveterinariahercules/"
                target="_blank"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </Link>
            </Button>

            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Link
                href="https://www.tiktok.com/@veterinariaherculescali"
                target="_blank"
              >
                <SiTiktok className="h-5 w-5 mr-2" />
                TikTok
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
