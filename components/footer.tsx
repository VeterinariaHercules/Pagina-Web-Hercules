import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-20 w-20 bg-white rounded-full overflow-hidden">
                <Image
                  src="/LogoHercules.png"
                  alt="Veterinaria Hercules Logo"
                  fill
                  className="object-contain"
                />

              </div>
              <span className="text-xl font-bold">Clinica Veterinaria Hercules</span>
            </div>
            <p className="text-indigo-100 mb-4">
              Estamos comprometidos con la salud y bienestar de tus mascotas. Ofrecemos servicios
              profesionales y productos de calidad.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="rounded-full text-white hover:text-indigo-900 hover:bg-white"
              >
                <Link href="https://www.facebook.com/clinicaveterinariahercules24horas" target="_blank">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="rounded-full text-white hover:text-indigo-900 hover:bg-white"
              >
                <Link href="https://www.instagram.com/clinicaveterinariahercules/" target="_blank">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="rounded-full text-white hover:text-indigo-900 hover:bg-white"
              >
                <Link href="https://www.tiktok.com/@veterinariaherculescali" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
              </Button>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-indigo-100 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-indigo-100 hover:text-white transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-indigo-100 hover:text-white transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-indigo-100 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Consulta
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Vacunación
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Desparasitacion
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Cirugía
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Diagnostico por imagen
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Laboratorio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Profilaxis
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Hospitalizacion
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Urgencias
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Baño y peluquería
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Guarderia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-300 mt-0.5" />
                <span className="text-indigo-100">Av. 2b norte # 73a -26, Cali</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-indigo-300 mt-1" />
                <div className="flex flex-col text-indigo-100 hover:text-white transition-colors">
                  <Link href="tel:+573116370334">+57 311 637 0334</Link>
                  <span>+57 313 748 0706</span>
                  <span>+57 311 771 5475</span>
                  <span>+602 386 1649</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-300" />
                <Link
                  href="mailto:clinicaveterinariahercules@gmail.com"
                  className="text-indigo-100 hover:text-white transition-colors"
                >
                  clinicaveterinariahercules@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-indigo-300 mt-0.5" />
                <div className="text-indigo-100">
                  <p>Lun-Sab: 8am-10pm</p>
                  <p>Dom: 9am-6pm</p>
                  <p>Urgencias 24 horas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-indigo-100 text-sm">
            © {new Date().getFullYear()} Clinica Veterinaria Hercules. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2">
            <Link
              href="https://www.google.com/search?sca_esv=cd2e0a442ffc9e64&rlz=1C1VDKB_esCO1018CO1018&sxsrf=AHTn8zrX9cvhsX4IUEPecz-a52N9SAFLpA:1745965460277&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzdrL-pw0zeUYMH152WGI8kOwRSFCAvlLyyksIHEymx62cHa_QNTEtWOZWgKW8Br6HqICUvcdTqrwRCG-Z-zXbTmAhKyjEvMXzd-U_9b-32-e0y1o-1eXfKRwKwtS37nNj-sC-eI%3D&q=Cl%C3%ADnica+Veterinaria+H%C3%A9rcules+Opiniones&sa=X&ved=2ahUKEwid-rKYpP6MAxUZQzABHbjSE_0Q0bkNegQIIRAD&biw=1366&bih=599&dpr=1"
              target="_blank"
              className="flex items-center gap-1 text-indigo-100 hover:text-white transition-colors"
            >
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" strokeWidth="2" />
              Déjanos una reseña en Google
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
