"use client"

import type React from "react"

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

      {/* Contact Section */}
      <ContactSection />
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
