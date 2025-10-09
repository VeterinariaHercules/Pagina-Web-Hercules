"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import ContactSection from "@/components/contact-section"
import galeria from "@/data/galeria/galeria"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { pacientes, servicios, publicidad, instalaciones } = galeria

  // Imágenes de ejemplo para cada categoría
  const images = {
    instalaciones: Array.from({ length: 8 }, (_, i) => ({
      id: `instalacion-${i + 1}`,
      src: `/img-galeria/i${i + 1}.jpg`, // Ruta correcta
      alt: `Instalaciones ${i + 1}`,
      caption: `Nuestras modernas instalaciones diseñadas para el confort de tu mascota.`,
    })),
    servicios: Array.from({ length: 6 }, (_, i) => ({
      id: `servicio-${i + 1}`,
      src: `/img-galeria/sv-${i + 1}.jpg`, // Ruta correcta
      alt: `Servicio ${i + 1}`,
      caption: `Servicios profesionales realizados por nuestro equipo de expertos.`,
    })),
    pacientes: Array.from({ length: 10 }, (_, i) => ({
      id: `paciente-${i + 1}`,
      src: `/img-galeria/p${i + 1}.jpg`, // Ruta correcta
      alt: `Paciente ${i + 1}`,
      caption: `Nuestros adorables pacientes felices y saludables.`,
    })),
    publicidad: Array.from({ length: 10 }, (_, i) => ({
      id: `publicidad-${i + 1}`,
      src: `/img-galeria/pb${i + 1}.jpg`, // Ruta correcta
      alt: `Paciente ${i + 1}`,
      caption: `Anuncios importantes.`,
    })),
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Galería Multimedia</h1>
        <p className="text-lg text-gray-600">
          Conoce nuestras instalaciones, servicios y a algunos de nuestros pacientes a través de nuestra galería de
          fotos.
        </p>
      </div>

      <Tabs defaultValue="pacientes" className="mb-16">
        <TabsList className="w-full flex flex-wrap justify-center mb-8 bg-transparent">
          <TabsTrigger
            value="pacientes"
            className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
          >
            Pacientes
          </TabsTrigger>
          <TabsTrigger
            value="servicios"
            className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
          >
            Servicios
          </TabsTrigger>
          <TabsTrigger
            value="instalaciones"
            className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
          >
            Instalaciones
          </TabsTrigger>
          <TabsTrigger 
            value="publicidad"
            className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
          >
            Publicidad
          </TabsTrigger>
        </TabsList>

        {/* Pacientes */}
        <TabsContent value="pacientes">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pacientes.map((image) => (
              <button
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
              </button>
            ))}
          </div>
        </TabsContent>

        {/* Servicios */}
        <TabsContent value="servicios">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((image) => (
              <button
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
              </button>
            ))}
          </div>
        </TabsContent>

        {/* Instalaciones */}
        <TabsContent value="instalaciones">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {instalaciones.map((image) => (
              <button
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
              </button>
            ))}
          </div>
        </TabsContent>

        {/* Publicidad */}
        <TabsContent value="publicidad">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {publicidad.map((image) => (
              <button
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-1"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar</span>
          </button>
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Imagen ampliada" fill className="object-contain" loading="lazy" />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="bg-indigo-50 py-16 rounded-lg shadow-sm text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Contáctanos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Estamos aquí para responder tus preguntas y atender a tu mascota.
          Contáctanos por WhatsApp para una respuesta rápida y personalizada.
        </p>

        <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg shadow-md transition-all transform hover:-translate-y-1"
            >
              <Link href="https://wa.me/573116370334" target="_blank" className="flex items-center gap-3 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </Link>
            </Button>

        <p className="text-gray-500 text-sm mt-6">
          📍 Disponible las 24 horas — Clínica Veterinaria Hércules
        </p>
      </div>
    </div>
    
  )
}
