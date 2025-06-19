
"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Phone, Star } from "lucide-react"
import ServiceCard from "@/components/service-card"
import ContactSection from "@/components/contact-section"
import { useState, useEffect } from "react";
import productosDestacados from "@/data/productos/productosDestacados/productosDestacados"


export default function Home() {

  const images = [
    "/img-pagina-principal/c-1.jpg",
    "/img-pagina-principal/c-2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
              Cuidamos de tus mascotas como si fueran nuestras
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              En la Clinica Veterinaria Hercules ofrecemos atención médica de calidad, productos especializados y todo lo que tu
              mascota necesita.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/contacto">Contactar ahora</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                <Link href="/sobre-nosotros">Conocer más</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              fill
              className="object-cover object-center transition-opacity duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 px-8 bg-indigo-50 rounded-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Horario de atención</h3>
                <p className="text-gray-600">Lun-Sab: 8am-10pm | Dom: 9am-6pm Urgencias 24 horas</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Contacto</h3>
                <p className="text-gray-600">+57 311 637 0334<br />
                  +57 313 748 0706 <br />
                  +57 311 771 5475 <br />
                  +602 386 1640 </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Ubicación</h3>
                <p className="text-gray-600">Av. 2b norte # 73a -26, Cali<br /> Brisas de los Alamos</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Consultas generales y especializadas"
            description="Atención preventiva, diagnóstica y de tratamiento adaptada a cada necesidad."
            imageUrl="/img-servicios/consulta.jpg?height=200&width=300"
          />
          <ServiceCard
            title="Vacunación y desparasitación"
            description="Planes efectivos para mantener a tu mascota protegida y saludable."
            imageUrl="/img-servicios/vacunacion.jpg?height=200&width=300"
          />
          <ServiceCard
            title="Cirugías"
            description="Intervenciones programadas o de emergencia, con equipos profesionales y seguros."
            imageUrl="/img-servicios/cirugia.jpg?height=200&width=300"
          />
          <ServiceCard
            title="Laboratorio Clinico"
            description="Pruebas rápidas y confiables para tratamientos oportunos."
            imageUrl="/img-servicios/laboratorio.jpg?height=200&width=300" />

          <ServiceCard
            title="Peluquería y baño medicado"
            description="Higiene y estética a cargo de profesionales."
            imageUrl="/img-servicios/peluqueria.jpg?height=200&width=300"
          />
          <ServiceCard
            title="Tienda"
            description="Alimentos y productos seleccionados para el cuidado diario de tu mascota."
            imageUrl="/img-servicios/tienda.jpeg?height=200&width=300"
          />
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/sobre-nosotros">Ver todos los servicios</Link>
          </Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="p-10 bg-indigo-50 rounded-lg mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            La satisfacción de nuestros clientes y sus mascotas es nuestra mayor recompensa.
          </p>
          <Button asChild variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
            <Link href="https://www.google.com/search?sca_esv=cd2e0a442ffc9e64&rlz=1C1VDKB_esCO1018CO1018&sxsrf=AHTn8zrX9cvhsX4IUEPecz-a52N9SAFLpA:1745965460277&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzdrL-pw0zeUYMH152WGI8kOwRSFCAvlLyyksIHEymx62cHa_QNTEtWOZWgKW8Br6HqICUvcdTqrwRCG-Z-zXbTmAhKyjEvMXzd-U_9b-32-e0y1o-1eXfKRwKwtS37nNj-sC-eI%3D&q=Cl%C3%ADnica+Veterinaria+H%C3%A9rcules+Opiniones&sa=X&ved=2ahUKEwid-rKYpP6MAxUZQzABHbjSE_0Q0bkNegQIIRAD&biw=1366&bih=599&dpr=1"
              target="_blank" className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
              Ver reseñas en Google
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Super recomendados, excelente servicio , calidad humana, lo mejor es que encuentras todo lo que uno necesite para nuestras mascotas.
                Me encantó todo!! Gracias por el servicio prestado 🐶🐱"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src="/img-pagina-principal/p-1.png"
                    alt="Cliente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Martha Lopez</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Un veterinario súper atento y receptivo a las necesidades del paciente. Mi perrita ingreso bastante malita, pero ellos se encargaron de regresarla a su alegría normal. Siempre estuve enterado del proceso con ella!!! Son los mejores!!!!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src="/img-pagina-principal/p-2.png"
                    alt="Cliente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Diego Campo</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Gracias por recibir a mi Rocky y cuidarlo los dos días que estuvo, lamentablemente tenia muchas complicaciones y su avanzada edad no ayudo y tuvo que partir al cielo de los perritos, fueron muy humanos en ese momento y permitieron pudiéramos estar todos con él y nunca nos molestaron por tener el consultorio ocupado mientras lo recogían"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src="/img-pagina-principal/p-3.png"
                    alt="Cliente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Andreita Rincon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Productos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos de alta calidad para el cuidado de tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosDestacados.map((product) => (
            <Link href={`/tienda/${product.id}`} key={product.id}>
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-40 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/tienda">Ver todos los productos</Link>
          </Button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nuestra Ubicación</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos ubicados en una zona céntrica y de fácil acceso. ¡Ven a visitarnos!
          </p>
        </div>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.754180833525!2d-76.5062012!3d3.492575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a997aa17475f%3A0xd88bb2d00e4d12be!2sCl%C3%ADnica%20Veterinaria%20H%C3%A9rcules!5e0!3m2!1ses-419!2sco!4v1689638940143!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Link
              href="https://www.google.com/maps/place/Cl%C3%ADnica+Veterinaria+H%C3%A9rcules/@3.492575,-76.5062012,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a997aa17475f:0xd88bb2d00e4d12be!8m2!3d3.4925696!4d-76.5036263!16s%2Fg%2F11k51ggr95?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
                Abrir en Google Maps
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
