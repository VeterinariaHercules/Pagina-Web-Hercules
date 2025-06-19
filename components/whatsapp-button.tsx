import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button asChild size="icon" className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
        <Link href="https://wa.me/573116370334" target="_blank">
          <MessageCircle className="h-7 w-7" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </Link>
      </Button>
    </div>
  )
}
