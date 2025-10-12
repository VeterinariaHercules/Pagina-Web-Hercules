"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  const sedes = [
    { nombre: "Sede 1", numero: "573116370334" },
    { nombre: "Sede 2", numero: "573242676234" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Menú de opciones */}
      {open && (
        <div className="bg-green-100 border border-green-300 text-gray-800 shadow-2xl rounded-2xl p-4 mb-2 w-56 animate-in fade-in zoom-in duration-200">
          <p className="text-gray-800 font-semibold text-sm mb-3 text-center flex items-center justify-center gap-2">
            ¿Con qué sede te quieres contactar?
          </p>
          <div className="flex flex-col gap-2">
            {sedes.map((sede) => (
              <Link
                key={sede.numero}
                href={`https://wa.me/${sede.numero}`}
                target="_blank"
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-gray-700 hover:text-green-600 bg-green-50 hover:bg-green-100 py-2 rounded-lg text-center transition-all shadow-sm"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-green-500 h-4 w-4" />
                  {sede.nombre}
                </span>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="w-full mt-3 text-gray-500 hover:text-red-500 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4 mr-1" /> Cerrar
          </Button>
        </div>
      )}

      {/* Botón flotante principal */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all hover:scale-110"
        onClick={() => setOpen(!open)}
      >
        <FaWhatsapp className="h-10 w-10 text-white" /> {/* Ícono grande dentro de botón */}
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </div>
  )
}

