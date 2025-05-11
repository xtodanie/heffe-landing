# HEFFE Landing Page

Landing page oficial para **HEFFE** — el sistema operativo para equipos de hostelería.

Sitio en producción: [https://heffe.org](https://heffe.org)

---

## 🛠️ Stack Técnico

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** App Router (Next.js)
- **Hosting:** [Vercel](https://vercel.com)
- **Dominio:** `heffe.org`

---

## ✨ Funcionalidad

- Hero con propuesta de valor y CTA
- Sección de beneficios
- Explicación de funcionamiento (onboarding)
- Comparativa de planes Free vs PRO
- Footer con datos legales

---

## 🚀 Deploy

Automático vía Vercel:
1. Push a rama `main`
2. Vercel detecta y publica (`npm run build` + `next start`)

---

## 📁 Estructura

app/
page.tsx # Landing principal
globals.css # Tailwind base
public/ # Assets (futuros logos, íconos)
tailwind.config.ts # Configuración Tailwind
next.config.mjs # Configuración de build

yaml

---

## 📌 Dominio

Para conectar `heffe.org`:
- A: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

Configura en tu panel DNS (ej. Namecheap, GoDaddy, etc.)

---

## 🧠 Autor

HEFFE Technologies S.L.  
Contacto: contacto@heffe.org
