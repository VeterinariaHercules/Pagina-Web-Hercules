"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // No mostrar paginación si solo hay una página
  if (totalPages <= 1) return null

  // Función para generar el rango de páginas a mostrar
  const getPageRange = () => {
    const range = []
    const maxPagesToShow = 5 // Número máximo de botones de página a mostrar

    if (totalPages <= maxPagesToShow) {
      // Si hay menos páginas que el máximo a mostrar, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        range.push(i)
      }
    } else {
      // Siempre mostrar la primera página
      range.push(1)

      // Calcular el rango central
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Ajustar si estamos cerca del inicio o final
      if (currentPage <= 3) {
        end = Math.min(totalPages - 1, 4)
      } else if (currentPage >= totalPages - 2) {
        start = Math.max(2, totalPages - 3)
      }

      // Añadir elipsis si es necesario
      if (start > 2) {
        range.push(-1) // -1 representa elipsis
      }

      // Añadir páginas del rango central
      for (let i = start; i <= end; i++) {
        range.push(i)
      }

      // Añadir elipsis si es necesario
      if (end < totalPages - 1) {
        range.push(-2) // -2 representa elipsis (diferente valor para key)
      }

      // Siempre mostrar la última página
      range.push(totalPages)
    }

    return range
  }

  const pageRange = getPageRange()

  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      {/* Botón Anterior */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Botones de Página */}
      {pageRange.map((page, index) => {
        // Si es elipsis
        if (page < 0) {
          return (
            <span key={`ellipsis-${page}`} className="px-2 text-gray-500">
              ...
            </span>
          )
        }

        // Si es un botón de página normal
        return (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 ${currentPage === page ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
            aria-label={`Ir a página ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </Button>
        )
      })}

      {/* Botón Siguiente */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        aria-label="Página siguiente"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
