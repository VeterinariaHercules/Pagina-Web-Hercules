"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MapPin, Clock, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/tienda", label: "Tienda" },
    { href: "/galeria", label: "Galería" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-20 w-20">
                <Image
                  src="/LogoHercules.png"
                  alt="Veterinaria Hercules Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center text-indigo-700 font-bold text-lg">
  ¡Cuidamos lo que amas!
</div>




          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative h-10 w-10">
                      <Image
                        src="/LogoHercules.png"
                        alt="Veterinaria Hercules Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xl font-bold text-indigo-700">Veterinaria Hercules</span>
                  </Link>
                  
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-gray-600 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-indigo-600" />
                      <div className="text-gray-600">
                        <p>Lunes-Domingo: 24 Horas</p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-indigo-600" />
                        <Link
                          href="https://www.google.com/maps/place/Av+2b+Nte+%2373+A+26,+Acopi,+Cali,+Valle+del+Cauca"
                          target="_blank"
                          className="text-gray-600 hover:text-indigo-600"
                        >
                          Av. 2b norte # 73a -26, Cali
                        </Link>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-indigo-600" />
                        <Link
                          href="https://maps.google.com/?q=Cra.%201D%20%2368A-38,%20Cali"
                          target="_blank"
                          className="text-gray-600 hover:text-indigo-600"
                        >
                          Cra. 1D # 68A-38, Cali
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
