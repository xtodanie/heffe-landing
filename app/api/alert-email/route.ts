// ✅ /app/api/alert-email/route.ts – Endpoint de alerta con Resend y logging de errores
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email, created_at } = await req.json()

  try {
    const data = await resend.emails.send({
      from: "HEFFE <notificaciones@heffe.org>",
      to: ["contacto@heffe.org"],
      subject: "📥 Nuevo lead de acceso anticipado",
      html: `
        <h2>Nuevo registro en HEFFE</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Fecha:</strong> ${created_at}</p>
      `
    })

    if (data.error) {
      console.error("[Resend ERROR]", data.error)
      return NextResponse.json({ status: "error", message: "Falló el envío" }, { status: 500 })
    }

    console.info("[Resend OK]", email)
    return NextResponse.json({ status: "ok" })
  } catch (error) {
    console.error("[Resend CATCH]", error)
    return NextResponse.json({ status: "error", message: "Error interno" }, { status: 500 })
  }
}