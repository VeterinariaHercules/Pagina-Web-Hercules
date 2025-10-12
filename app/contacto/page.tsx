import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Star, Phone, Mail, Network } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SuggestionForm from "@/components/suggestion-form"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import WhatsappContact from "@/components/whatsapp-contact"


export default function Contacto() {
  // ✅ Mover 'locations' fuera del return
  const locations = [
    {
      id: "sede1",
      name: "Sede 1 - Clínica Veterinaria Hércules",
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
      name: "Sede 2 - Clínica Veterinaria Hércules",
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

       {/* Contact Section */}
      <WhatsappContact />

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
