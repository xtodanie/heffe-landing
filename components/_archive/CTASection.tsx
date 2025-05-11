'use client'

import { useState } from 'react'
import { useEarlyAccess } from '@/lib/useEarlyAccess'

export default function CTASection() {
  const { submit, loading, success, error } = useEarlyAccess()
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submit(email)
  }

  return (
    <section className="py-12 px-4 bg-heffe-gold text-heffe-dark text-center space-y-6">
      <h2 className="text-2xl font-bold">📬 ¿Quieres ser de los primeros en probar la versión PRO?</h2>
      <p>Déjanos tu correo y te avisamos en cuanto esté lista.</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="email"
          required
          placeholder="tu@email.com"
          className="w-full px-4 py-2 rounded text-heffe-dark"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-heffe-dark text-heffe-white py-2 rounded font-semibold hover:bg-heffe-gray transition"
        >
          {loading ? 'Enviando...' : 'Solicitar acceso'}
        </button>
      </form>

      {success && <p className="text-green-800 text-sm">✅ Registro recibido. Te avisaremos.</p>}
      {error && <p className="text-red-800 text-sm">⚠️ {error}</p>}

      <div className="text-xs text-heffe-dark/80 mt-6 space-y-1">
        <p>📨 Contacto general: <a href="mailto:contacto@heffe.org" className="underline">contacto@heffe.org</a></p>
        <p>👤 CEO: <a href="mailto:tommy@heffe.org" className="underline">tommy@heffe.org</a></p>
      </div>
    </section>
  )
}
