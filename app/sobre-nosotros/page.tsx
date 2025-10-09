import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactSection from "@/components/contact-section"
import ServiceCard from "@/components/service-card"
import Veterinarians from "@/data/veterinarios/veterinary-equipment"
import Review from "@/components/Review"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Networks from "@/components/networks"

export default function SobreNosotros() {

  const images = [
    "/img-galeria/instalaciones/i-1.jpg",
    "/img-galeria/instalaciones/i-2.jpg",
    "/img-galeria/instalaciones/i-3.jpg",
    "/img-galeria/instalaciones/i-4.jpg"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-gray-600">
          Conoce más de la Clínica Veterinaria Hercules y los servicios que ofrecemos para el cuidado de tus mascotas.
        </p>
      </div>

      {/* About Us Tabs */}
      <Tabs defaultValue="quienes-somos" className="max-w-4xl mx-auto mb-16">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="quienes-somos">Quiénes Somos</TabsTrigger>
          <TabsTrigger value="mision-vision">Misión y Visión</TabsTrigger>
          <TabsTrigger value="equipo">Nuestro Equipo</TabsTrigger>
        </TabsList>

        <TabsContent value="quienes-somos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4 text-justify" >
                La Clínica Veterinaria Hércules fue fundada en el año 2023 con la misión de brindar atención médica de calidad a las mascotas, 
                guiados por una profunda vocación y amor hacia los animales.

              </p>
              <p className="text-gray-600 mb-4 text-justify">
                Desde muy joven, nuestro fundador —hoy médico principal de la clínica— sintió una conexión especial con los animalitos, 
                lo que lo llevó a transformar su pasión en un compromiso de vida al servicio del bienestar animal.
              </p>
              <p className="text-gray-600 mb-4 text-justify">
                El nombre de nuestra clínica es un homenaje a Hércules, un compañero entrañable que dejó una huella imborrable en nuestra historia y nos inspiró a crear un espacio donde cada paciente sea atendido con respeto, profesionalismo y amor.
              </p>
              <p className="text-gray-600 text-justify">
                Con un enfoque cercano y especializado, hemos crecido de la mano de nuestros clientes, quienes confían en nosotros el cuidado de sus seres más queridos. 
                Ese crecimiento no solo se refleja en la confianza depositada, sino también en la expansión de nuestras instalaciones y en la conformación de un equipo profesional cada vez más capacitado y comprometido.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/img-sobre-nosotros/hercules.jpg" alt="Nuestra clínica" fill className="object-contain" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mision-vision" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestra Misión</h2>
                <p className="text-gray-600 text-justify">
                  Brindar atención médica veterinaria de alta calidad, con amor, respeto y compromiso, 
                  protegiendo la salud y el bienestar de los animales. Nos esforzamos por ofrecer un servicio humano y profesional, 
                  tratando a cada paciente como un miembro más de nuestra familia.

                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 mb-4 text-justify">
                    Ser reconocidos como una clínica veterinaria líder en nuestra comunidad, destacándonos por nuestra atención en urgencias 24 horas al día, 7 días a la semana, el trato cercano, la excelencia médica y la pasión genuina que sentimos por los animales. Aspiramos a crecer y expandir nuestros servicios, 
                    sin perder jamás la esencia de amor y compromiso que dio vida a la Clínica Veterinaria Hércules.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestros Valores</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <li className="flex flex-col items-center text-center p-4 bg-indigo-50 rounded-lg">
                    <span className="font-medium text-indigo-700 mb-2">Compromiso</span>
                    <p className="text-gray-600 text-sm">Dedicación total al bienestar de cada paciente</p>
                  </li>
                  <li className="flex flex-col items-center text-center p-4 bg-indigo-50 rounded-lg">
                    <span className="font-medium text-indigo-700 mb-2">Profesionalismo</span>
                    <p className="text-gray-600 text-sm">Excelencia y ética en cada servicio</p>
                  </li>
                  <li className="flex flex-col items-center text-center p-4 bg-indigo-50 rounded-lg">
                    <span className="font-medium text-indigo-700 mb-2">Empatía</span>
                    <p className="text-gray-600 text-sm">Comprensión y respeto hacia mascotas y propietarios</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="equipo" className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Nuestro Equipo Profesional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {Veterinarians.map((miembro, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-indigo-700 mb-1">{miembro.nombre}</h3>
                  <p className="text-gray-500 mb-3">{miembro.cargo}</p>
                  <p className="text-gray-600 text-sm text-justify">{miembro.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>


      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Consulta General y especializada"
            description="Atención preventiva, diagnóstica y de tratamiento adaptada a cada necesidad."
            imageUrl="/img-servicios/consulta.jpg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Vacunación y desparasitacion"
            description="Planes efectivos para mantener a tu mascota protegida y saludable."
            imageUrl="/img-servicios/vacunacion.jpg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Cirugías"
            description="Intervenciones programadas o de emergencia, con equipos profesionales y seguros."
            imageUrl="/img-servicios/cirugia.jpg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Diagnóstico por imagen"
            description=" Ecografías y radiografías con tecnología avanzada para diagnósticos precisos."
            imageUrl="/img-servicios/diagnostico.jpg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Laboratorio clínico"
            description="Pruebas rápidas y confiables para tratamientos oportunos."
            imageUrl="/img-servicios/laboratorio.jpg?height=200&width=300"
            expanded
          />
           <ServiceCard
            title="Profilaxis dental"
            description="Limpieza y cuidado bucal para prevenir enfermedades dentales."
            imageUrl="/img-servicios/profilaxis.jpg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Peluquería y baño"
            description="Higiene y estética a cargo de profesionales."
            imageUrl="/img-servicios/peluqueria.jpg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Tienda"
            description="Alimentos y productos seleccionados para el cuidado diario de tu mascota."
            imageUrl="/img-servicios/tienda.jpeg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Hospitalización y cuidados intensivos"
            description="Supervisión constante para casos que requieren atención especial."
            imageUrl="/img-servicios/hospitalizacion.jpg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Urgencias"
            description="Atención inmediata en situaciones críticas."
            imageUrl="/img-servicios/urg.jpg?height=200&width=300"
            expanded
          />
          <ServiceCard
            title="Guarderia"
            description="Cuidamos a tu perro con amor y dedicación."
            imageUrl="/img-servicios/guarderia.jpg?height=200&width=300"
            expanded
          />
        </div>
      </section>
    
       

      {/* Facilities Gallery Preview */}
      <section className="mb-16 bg-white rounded-lg py-12 shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nuestras Instalaciones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Contamos con instalaciones modernas y equipadas para ofrecer el mejor servicio a tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          {images.map((src, i) => (
            <div key={i} className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Instalación ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/galeria"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Ver galería completa →
          </a>
        </div>
      </section>

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
