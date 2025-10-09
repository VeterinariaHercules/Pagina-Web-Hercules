import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Image
                  src="/Logo-footer.png"
                  alt="Veterinaria Hercules Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-bold">
                Clínica Veterinaria Hércules
              </span>
            </div>
            <p className="text-indigo-100 mb-4">
              Estamos comprometidos con la salud y bienestar de tus mascotas.
              Ofrecemos servicios profesionales y productos de calidad.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="rounded-full text-white hover:text-indigo-900 hover:bg-white"
              >
                <Link
                  href="https://www.facebook.com/clinicaveterinariahercules24horas"
                  target="_blank"
                >
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
                <Link
                  href="https://www.instagram.com/clinicaveterinariahercules/"
                  target="_blank"
                >
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
                <Link
                  href="https://www.tiktok.com/@veterinariaherculescali"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
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

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/sobre-nosotros", label: "Sobre Nosotros" },
                { href: "/tienda", label: "Tienda" },
                { href: "/galeria", label: "Galería" },
                { href: "/contacto", label: "Contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-indigo-100 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Consulta",
                "Vacunación",
                "Desparasitación",
                "Cirugía",
                "Diagnóstico por imagen",
                "Laboratorio",
                "Profilaxis",
                "Hospitalización",
                "Urgencias",
                "Baño y peluquería",
                "Tienda",
                "Guardería",
              ].map((servicio) => (
                <li key={servicio}>
                  <Link
                    href="/sobre-nosotros"
                    className="text-indigo-100 hover:text-white transition-colors"
                  >
                    {servicio}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>

            {/* Sede Norte */}
            <div className="mb-6">
              <h4 className="text-base font-semibold text-indigo-200 mb-2">
                Sede Brisas de los Alamos
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-indigo-300 mt-0.5" />
                  <span className="text-indigo-100">
                    Av. 2B Norte #73A-26, Cali
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-indigo-300 mt-1" />
                  <div className="flex flex-col text-indigo-100 hover:text-white transition-colors">
                    <Link href="tel:+57311 637 0334">+57 311 637 0334</Link>
                    <Link href="tel:+573137480706">+57 313 748 0706</Link>
                    <Link href="tel:+573117715475">+57 311 771 5475</Link>
                    <span>+602 386 1640</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-indigo-300 mt-0.5" />
                  <span className="text-indigo-100">Atención 24 horas</span>
                </li>
              </ul>
            </div>

            {/* Sede Sur */}
            <div className="mb-6">
              <h4 className="text-base font-semibold text-indigo-200 mb-2">
                Sede la Rivera
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-indigo-300 mt-0.5" />
                  <span className="text-indigo-100">
                    Cra 1D # 68A - 38, Cali
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-indigo-300 mt-1" />
                  <div className="flex flex-col text-indigo-100 hover:text-white transition-colors">
                    <Link href="tel:+573242676234">+57 324 267 6234</Link>
                    <Link href="tel:+573137480706">+57 313 748 0706</Link>
                    <Link href="tel:+573117715475">+57 311 771 5475</Link>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-indigo-300 mt-0.5" />
                  <span className="text-indigo-100">Atención 24 horas</span>
                </li>
              </ul>
            </div>

            {/* Correo compartido */}
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-indigo-300 shrink-0" />
              <Link
                href="mailto:clinicaveterinariahercules@gmail.com"
                className="text-indigo-100 hover:text-white transition-colors break-all"
              >
                clinicaveterinariahercules@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM (fuera del grid) */}
        <div className="mt-12 pt-8 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-indigo-100 text-sm">
            © {new Date().getFullYear()} Clínica Veterinaria Hércules. Todos los
            derechos reservados.
          </p>

          <div className="flex items-center gap-2">
            <Link
              href="https://www.google.com/search?q=Cl%C3%ADnica+Veterinaria+H%C3%A9rcules+Opiniones"
              target="_blank"
              className="flex items-center gap-1 text-indigo-100 hover:text-white transition-colors"
            >
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
              Déjanos una reseña en Google
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

