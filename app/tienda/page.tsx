"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Pagination from "@/components/pagination"
import ContactSection from "@/components/contact-section"
import alimentos from "@/data/productos/alimentos/alimentos"
import accesorios from "@/data/productos/accesorios/accesorios"
import juguetes from "@/data/productos/juguetes/juguetes"
import medicamentos from "@/data/productos/medicamentos/medicamentos"
import arenas from "@/data/productos/arenas/arenas"

// Tipo para los productos
interface Product {
  id: string
  name: string
  description: string
  image: string
  category?: string
}

export default function Tienda() {
  // Estado para la búsqueda
  const [searchTerm, setSearchTerm] = useState("")
  // Estado para el ordenamiento
  const [sortOrder, setSortOrder] = useState("name-asc")
  // Estado para los productos filtrados
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  // Estado para la categoría activa
  const [activeCategory, setActiveCategory] = useState("todos")
  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(8) // Número de productos por página
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([])
  const [totalPages, setTotalPages] = useState(1)

  // Categorías de productos
  const categories = [
    { id: "alimentos", name: "Alimentos" },
    { id: "juguetes", name: "Juguetes" },
    { id: "medicamentos", name: "Medicamentos" },
    { id: "accesorios", name: "Accesorios" },
    { id: "arenas", name: "Arenas" },
  ]

  // Productos de ejemplo para cada categoría
  const generateProducts = (category: string, count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${category}-${i + 1}`,
      name: `${category.charAt(0).toUpperCase() + category.slice(1)} Premium ${i + 1}`,
      description: `Producto de alta calidad para tu mascota en la categoría de ${category}.`,
      image: `/placeholder.svg?height=200&width=300`,
      category: category,
    }))
  }

  const productsByCategory = {
    alimentos: alimentos.map((item) => ({
      ...item,
    })),
    juguetes: juguetes.map((item) => ({
      ...item,
    })),
    medicamentos:medicamentos.map((item) => ({
      ...item,
    })),
    accesorios: accesorios.map((item) => ({
      ...item,
    })),
    arenas: arenas.map((item) => ({
      ...item,
    })),
  }

// Función para manejar el cambio en la búsqueda
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Resetear a la primera página cuando se busca
  }

  // Función para manejar el cambio en el ordenamiento
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value)
    setCurrentPage(1) // Resetear a la primera página cuando se cambia el orden
  }

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category) // Actualizar la categoría activa
    setCurrentPage(1) // Resetear a la primera página cuando se cambia la categoría
  }

  // Función para manejar el cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll suave hacia arriba cuando se cambia de página
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Efecto para filtrar y ordenar productos cuando cambia la búsqueda, el orden o la categoría
  useEffect(() => {
    let products: Product[] = []

    // Obtener productos según la categoría seleccionada
    if (activeCategory === "todos") {
      products = Object.values(productsByCategory).flat()
    } else {
      products = productsByCategory[activeCategory as keyof typeof productsByCategory] || []
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTermLower) ||
          product.description.toLowerCase().includes(searchTermLower),
      )
    }

    // Ordenar productos
    switch (sortOrder) {
      case "name-desc":
        products = [...products].sort((a, b) => b.name.localeCompare(a.name))
        break
      case "name-asc":
      default:
        products = [...products].sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    setFilteredProducts(products)

    // Calcular el número total de páginas
    const calculatedTotalPages = Math.ceil(products.length / productsPerPage)
    setTotalPages(calculatedTotalPages)

    // Asegurarse de que la página actual no sea mayor que el total de páginas
    if (currentPage > calculatedTotalPages) {
      setCurrentPage(calculatedTotalPages || 1)
    }
  }, [searchTerm, sortOrder, activeCategory, productsPerPage, currentPage])

  // Efecto para paginar los productos cuando cambia la página actual o los productos filtrados
  useEffect(() => {
    // Calcular los índices de los productos a mostrar
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage

    // Obtener los productos de la página actual
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    setPaginatedProducts(currentProducts)
  }, [currentPage, filteredProducts, productsPerPage])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Tienda de Productos</h1>
        <p className="text-lg text-gray-600">
          Encuentra todo lo que tu mascota necesita: alimentos, juguetes, medicamentos y accesorios de calidad.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Buscar productos..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-gray-600 whitespace-nowrap">Ordenar por:</span>
            <select
              className="border rounded-md p-2 bg-white w-full md:w-auto"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="name-asc">Alfabético: A-Z</option>
              <option value="name-desc">Alfabético: Z-A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <Tabs defaultValue={activeCategory} value={activeCategory} onValueChange={handleCategoryChange} className="mb-8">
        <TabsList className="w-full flex flex-wrap justify-start mb-6 bg-transparent">
          <TabsTrigger value="todos" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800">
            Todos
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="min-h-[600px]">
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Información de paginación */}
              <div className="text-center text-gray-500 mt-4">
                Mostrando {paginatedProducts.length} de {filteredProducts.length} productos
              </div>

              {/* Componente de paginación */}
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
              <p className="text-gray-500">Intenta con otros términos o categorías.</p>
            </div>
          )}
        </div>
      </Tabs>

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

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full transition-all hover:shadow-md relative">
      <Link href={`/tienda/${product.id}`} className="block">
        <div className="relative w-full h-48">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain rounded-t-lg" // Ajusta la imagen sin recortarla
          />
        </div>
        <CardContent className="p-4 pb-14 text-center">
          <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
        </CardContent>
      </Link>
      <div className="absolute bottom-4 left-4 right-4"></div>
    </Card>
  )
}
