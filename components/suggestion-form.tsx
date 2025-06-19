"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function SuggestionForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    suggestionType: "",
    suggestion: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar el formulario
    if (!formData.name || !formData.suggestionType || !formData.suggestion) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos del formulario.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Enviar los datos a la API
      const response = await fetch("/api/send-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar la sugerencia")
      }

      // Mostrar mensaje de éxito
      setIsSubmitted(true)
      setFormData({
        name: "",
        suggestionType: "",
        suggestion: "",
      })

      // Mostrar notificación de éxito
      toast({
        title: "¡Sugerencia enviada!",
        description: "Hemos recibido tu sugerencia. Gracias por ayudarnos a mejorar.",
      })

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Error:", error)

      // Mostrar notificación de error
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al enviar la sugerencia. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-green-600 mb-2">¡Gracias por tu sugerencia!</h3>
            <p className="text-gray-600 text-center">Hemos recibido tu comentario y lo revisaremos a la brevedad.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tu nombre"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="suggestionType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de sugerencia
              </label>
              <select
                id="suggestionType"
                name="suggestionType"
                value={formData.suggestionType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                disabled={isSubmitting}
              >
                <option value="">Selecciona una opción</option>
                <option value="mejora">Mejora del servicio</option>
                <option value="nuevo-servicio">Nuevo servicio</option>
                <option value="problema">Reporte de problema</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-1">
                Tu sugerencia
              </label>
              <textarea
                id="suggestion"
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Escribe aquí tu sugerencia, comentario o idea..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Sugerencia"
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
