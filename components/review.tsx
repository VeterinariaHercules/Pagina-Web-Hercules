"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export default function Review() {
  return (
    <Card className="relative overflow-hidden my-12 border-2 border-indigo-100 hover:border-indigo-200 transition-colors">
      <CardContent className="p-8">
        {/* 🌈 Decoración de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-transparent rounded-full -mr-16 -mt-16 opacity-50" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-50 to-transparent rounded-full -ml-12 -mb-12 opacity-50" />

        <div className="relative text-center">
          {/* ⭐ Estrellas */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
            ))}
          </div>

          <h3 className="font-bold text-2xl mb-2 text-gray-900">
            ¿Qué te pareció nuestro servicio?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Tu opinión nos ayuda a mejorar y ayuda a otros dueños de mascotas a conocernos mejor.
          </p>

          {/* 🔗 Botón de reseña */}
          <Link
            href="https://www.google.com/search?q=Cl%C3%ADnica+Veterinaria+H%C3%A9rcules+Opiniones"
            target="_blank"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Star className="h-5 w-5" />
            Dejar una reseña en Google
          </Link>

          {/* 🐾 Texto final */}
          <p className="text-sm text-gray-500 mt-4">
            ¡Gracias por confiar en nosotros! 🐾
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
