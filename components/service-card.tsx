import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
  expanded?: boolean
}

export default function ServiceCard({ title, description, imageUrl, expanded = false }: ServiceCardProps) {
  return (
    <Card className={`border-none shadow-sm transition-all overflow-hidden ${expanded ? "" : "hover:shadow-md"}`}>
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg?height=200&width=300"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="font-medium text-white text-lg mb-1">{title}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
