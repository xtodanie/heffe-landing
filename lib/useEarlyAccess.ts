import { useState } from 'react'

export function useEarlyAccess() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (email: string) => {
    setLoading(true)
    setError(null)

    const res = await fetch('/api/early-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const result = await res.json()
    setLoading(false)

    if (!res.ok) {
      setError(result.error || 'Error inesperado')
    } else {
      setSuccess(true)
    }
  }

  return { submit, loading, success, error }
}
