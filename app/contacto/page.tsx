import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SuggestionForm from "@/components/suggestion-form"

export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-6">
          Estamos aquí para responder tus preguntas y atender a tu mascota. Contáctanos por WhatsApp para una respuesta
          rápida.
        </p>
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
          <Link href="https://wa.me/573116370334" target="_blank" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar por WhatsApp
          </Link>
        </Button>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-600"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Respuesta rápida a tus consultas</p>
            <Link href="https://wa.me/573116370334" target="_blank" className="text-indigo-600 hover:underline">
              +57 311 637 0334
            </Link>
            <p className="text-sm text-gray-500 mt-1">+57 313 748 0706</p>
            <p className="text-sm text-gray-500 mt-1">+57 311 771 5475</p>
            <p className="text-sm text-gray-500 mt-1">+602 386 1640</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Dirección</h3>
            <p className="text-gray-600 mb-4">Visítanos en nuestra clínica</p>
            <p className="text-gray-600">Av 2b norte # 73a -26 , Cali</p>
            <p className="text-gray-600">Brisas de los Alamos</p>
            <Link href="https://www.google.com/maps/place/Cl%C3%ADnica+Veterinaria+H%C3%A9rcules/@3.492575,-76.5062012,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a997aa17475f:0xd88bb2d00e4d12be!8m2!3d3.4925696!4d-76.5036263!16s%2Fg%2F11k51ggr95?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-indigo-600 hover:underline text-sm">
              Ver en Google Maps
            </Link>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Horario</h3>
            <p className="text-gray-600 mb-4">Estamos para atenderte</p>
            <p className="text-gray-600">Lun-Sab: 8am-10pm</p>
            <p className="text-gray-600">Dom: 9am-6pm</p>
            <p className="text-gray-600">Urgencias 24 horas</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Reseñas</h3>
            <p className="text-gray-600 mb-4">Comparte tu experiencia</p>
            <Link href="https://www.google.com/search?sca_esv=cd2e0a442ffc9e64&rlz=1C1VDKB_esCO1018CO1018&sxsrf=AHTn8zrX9cvhsX4IUEPecz-a52N9SAFLpA:1745965460277&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzdrL-pw0zeUYMH152WGI8kOwRSFCAvlLyyksIHEymx62cHa_QNTEtWOZWgKW8Br6HqICUvcdTqrwRCG-Z-zXbTmAhKyjEvMXzd-U_9b-32-e0y1o-1eXfKRwKwtS37nNj-sC-eI%3D&q=Cl%C3%ADnica+Veterinaria+H%C3%A9rcules+Opiniones&sa=X&ved=2ahUKEwid-rKYpP6MAxUZQzABHbjSE_0Q0bkNegQIIRAD&biw=1366&bih=599&dpr=1" target="_blank" className="text-indigo-600 hover:underline">
              Ver y dejar reseñas en Google
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Suggestion Box Section */}
      <section className="mb-16 bg-indigo-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Buzón de Sugerencias</h2>
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

      {/* Map Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Nuestra Ubicación</h2>
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

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Necesito cita previa para una consulta?</h3>
              <p className="text-gray-600">
                No, en la clínica veterinaria hércules no necesitas pedir cita previa. Atendemos a tu peludito por orden de llegada, con el cariño y la dedicación que se merece.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Cada cuento debo desparasitar a mi mascota?</h3>
              <p className="text-gray-600">
                La desparasitacion se debe realizar cada 3 meses.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Despues de cuantos meses de nacido puedo esterilizar mi mascota?</h3>
              <p className="text-gray-600">
                La esterilización se puede realizar a partir de los 7 meses, tanto en perros como en gatos, antes del primer celo en hembras o cuando ya han alcanzado un desarrollo adecuado.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Cómo puedo pagar por los servicios?</h3>
              <p className="text-gray-600">
                Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias a Bancolombia y Nequi.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Horario de Atención</h2>
        <div className="bg-red-50 border border-red-400 rounded-lg p-5 mb-10 flex flex-col items-center shadow-md">
          <p className="text-xl font-bold text-red-700 uppercase tracking-wide mb-2 text-center">
            Urgencias 24 Horas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-4">Horario Regular</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Lunes</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Martes</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Miércoles</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Jueves</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Viernes</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Sábado</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Domingo</td>
                    <td className="py-3 text-right">9:00 AM - 6:00 PM</td>
                  </tr>
                  
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-4">Información Adicional</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <p className="text-gray-600">
                    Para urgencias fuera del horario regular, contactanos al numero de celular 311 637 0334

                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <p className="text-gray-600">
                    La tienda de productos está abierta durante los horarios regulares de atención de la clínica.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <p className="text-gray-600">
                    Para programar la recogida de tu mascota a domicilio, ya sea para baño, peluquería o la entrega de un producto, llámanos o escríbenos al número de celular 311 637 0334.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
