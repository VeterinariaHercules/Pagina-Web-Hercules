import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Star, Phone, Mail, Network } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SuggestionForm from "@/components/suggestion-form"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"


export default function Contacto() {
  // ✅ Mover 'locations' fuera del return
  const locations = [
    {
      id: "sede1",
      name: "Sede Principal - Clínica Veterinaria Hércules",
      address: "Avenida 2B Norte # 73A - 26, Cali, Valle del Cauca",
      phones: ["311 637 0334", "313 748 0706", "311 771 5475"],
      email: "clinicaveterinariahercules@gmail.com",
      hours: {
        weekdays: "Lunes a Domingo: 24 horas",
      },
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.408059139075!2d-76.50620658959687!3d3.4925695964671206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a888098efbbb%3A0x310b4ec3aca4e62d!2sAv%202b%20Nte.%20%2373%20A%2026%2C%20Acopi%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1759884412586!5m2!1ses!2sco",
    },
    {
      id: "sede2",
      name: "Sede Norte - Clínica Veterinaria Hércules",
      address: "Carrera 1D # 68A - 38, Cali, Valle del Cauca",
      phones: ["324 267 6234", "313 748 0706", "311 771 5475"],
      email: "clinicaveterinariahercules@gmail.com",
      hours: {
        weekdays: "Lunes a Domingo: 24 horas",
      },
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4789513877586!2d-76.49137528959704!3d3.475817996483969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a7da4f7078d9%3A0x6850c0ed61ed9504!2sCra%201D%20%23%2068A-38%2C%20Comuna%205%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1759884542537!5m2!1ses!2sco",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 🏥 SECCIÓN: NUESTRAS SEDES */}
      <section id="sedes" className="bg-white py-6 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-indigo-800 md:text-4xl -mt-8">Nuestras Sedes</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Dos ubicaciones estratégicas en Cali para brindarte un mejor servicio.
            </p>
          </div>

          <Tabs defaultValue="sede1" className="mx-auto max-w-5xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sede1">Sede Brisas de los Alamos</TabsTrigger>
              <TabsTrigger value="sede2">Sede la Rivera</TabsTrigger>
            </TabsList>

            {locations.map((location) => (
              <TabsContent key={location.id} value={location.id} className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* ℹ️ INFORMACIÓN DE LA SEDE */}
                  <Card className="bg-white border-0 shadow-none">
                    <CardContent className="p-6">
                      <h3 className="mb-6 text-2xl font-bold text-indigo-800">{location.name}</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-1 h-5 w-5 text-indigo-600" />
                          <div>
                            <p className="font-medium">Dirección</p>
                            <p className="text-gray-600">{location.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="mt-1 h-5 w-5 text-indigo-600" />
                          <div>
                            <p className="font-medium">Teléfono</p>
                            {location.phones ? (
                              <div className="text-gray-600 flex flex-col space-y-1">
                                {location.phones.map((phone, index) => (
                                  <p key={index}>{phone}</p>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-600">{location.phones}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="mt-1 h-5 w-5 text-indigo-600" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-gray-600">{location.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="mt-1 h-5 w-5 text-indigo-600" />
                          <div>
                            <p className="font-medium">Horario de Atención</p>
                            <p className="text-gray-600">{location.hours.weekdays}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>


                  {/* 🗺️ MAPA CON PIN */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "400px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa de ${location.name}`}
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
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

      {/* 💌 BUZÓN DE SUGERENCIAS */}
      <section className="mt-8 mb-16 bg-white rounded-lg p-8 border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Buzón de Sugerencias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tu opinión es muy importante para nosotros. Ayúdanos a mejorar nuestros servicios compartiendo tus ideas,
            comentarios o sugerencias.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <SuggestionForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Gracias por ayudarnos a mejorar. Valoramos todas las sugerencias y las revisamos periódicamente.
            </p>
          </div>
        </div>
      </section>


      {/* ❓ PREGUNTAS FRECUENTES */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Necesito cita previa para una consulta?</h3>
              <p className="text-gray-600">
                No, en la Clínica Veterinaria Hércules no necesitas pedir cita previa. Atendemos por orden de llegada,
                con el cariño y la dedicación que tu peludito merece.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Cada cuánto debo desparasitar a mi mascota?</h3>
              <p className="text-gray-600">La desparasitación se debe realizar cada 3 meses.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">
                ¿Desde qué edad puedo esterilizar mi mascota?
              </h3>
              <p className="text-gray-600">
                La esterilización se puede realizar a partir de los 7 meses, tanto en perros como en gatos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Cómo puedo pagar por los servicios?</h3>
              <p className="text-gray-600">
                Aceptamos efectivo, tarjetas débito/crédito y transferencias bancarias (Bancolombia o Nequi).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* HORARIO DE ATENCIÓN */}
      <section className="mb-20 relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-indigo-800 mb-3 tracking-tight">
            Horario de Atención
          </h2>
          <p className="text-gray-600 text-lg">
            ¡Estamos disponibles para ti y tu mascota las 24 horas del día, todos los días del año! 🐶🐱
          </p>
        </div>

        {/* 🌈 Contenedor principal */}
        <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-10 shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto overflow-hidden">
          {/* Decoración de fondo con huellitas */}
          <div className="absolute inset-0 bg-[url('/paw-pattern.svg')] opacity-5 pointer-events-none rounded-2xl"></div>

          {/* 🕒 Contenido */}
          <div className="relative z-10 text-center space-y-8">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-800 tracking-wide mb-2">
                🕒 Atención Permanente
              </p>
              <p className="text-xl text-gray-700">Lunes a Domingo</p>
              <p className="text-lg text-indigo-700 font-semibold">24 Horas — Sin excepción</p>
            </div>

            {/* 🚨 Urgencias */}
            <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-6 py-4 rounded-xl shadow-md animate-pulse">
              <p className="text-xl font-bold uppercase tracking-wide">
                🚨 Urgencias 24 Horas
              </p>
            </div>

            <p className="text-gray-500 text-sm italic">
              Siempre listos para cuidar a tu peludo cuando más lo necesite 💖
            </p>
          </div>
        </div>
      </section> 
    </div>
  )
}
