import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET(request: Request) {
  // Manejar la solicitud GET si es necesario
  return NextResponse.json({ message: "Endpoint para enviar sugerencias" }) 
}

export async function POST(request: Request) {
  try {
    // Obtener los datos del formulario
    const data = await request.json()
    const { name, suggestionType, suggestion } = data

    // Validar los datos
    if (!name || !suggestionType || !suggestion) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
    }

    // Configurar el transporte de correo
    const transporter = nodemailer.createTransport({
      service: "gmail", // Puedes cambiar esto según tu proveedor de correo
      auth: {
        user: process.env.EMAIL_USER || "tu-correo@gmail.com", // Reemplazar con variables de entorno en producción
        pass: process.env.EMAIL_PASSWORD || "tu-contraseña", // Reemplazar con variables de entorno en producción
      },
    })

    console.log("✅" )
    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASSWORD)

    // Tipos de sugerencia en español
    const suggestionTypes: Record<string, string> = {
      mejora: "Mejora del servicio",
      "nuevo-servicio": "Nuevo servicio",
      problema: "Reporte de problema",
      otro: "Otro",
    }

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER || "tu-correo@gmail.com",
      to: process.env.EMAIL_RECIPIENT || "destinatario@ejemplo.com", // Correo del destinatario
      subject: `Nueva sugerencia: ${suggestionTypes[suggestionType] || suggestionType}`,
      html: `
        <h1>Nueva sugerencia recibida</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Tipo de sugerencia:</strong> ${suggestionTypes[suggestionType] || suggestionType}</p>
        <p><strong>Sugerencia:</strong></p>
        <p>${suggestion.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Este correo fue enviado desde el formulario de sugerencias de la web de Veterinaria Hercules.</p>
      `,
    }

    // Enviar el correo en producción
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Sugerencia enviada correctamente" })
  } catch (error) {
    console.error("Error al enviar la sugerencia:", error)
    return NextResponse.json({ error: "Error al enviar la sugerencia" }, { status: 500 })
  }
}
