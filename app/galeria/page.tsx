"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import ContactSection from "@/components/contact-section"
import galeria from "@/data/galeria/galeria"

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

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
