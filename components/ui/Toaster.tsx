// ✅ components/ui/Toaster.tsx – HEFFE style
"use client"

import { Toaster as HotToaster } from "react-hot-toast"

export function Toaster() {
  return (
    <HotToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#26282A",
          color: "#DDD960",
          border: "1px solid #9246D0",
          fontSize: "14px",
          padding: "12px 16px",
          fontFamily: "'Inter', sans-serif",
          borderRadius: "0.75rem",
        },
        success: {
          iconTheme: {
            primary: "#DDD960",
            secondary: "#26282A"
          }
        },
        error: {
          iconTheme: {
            primary: "#FF4D4D",
            secondary: "#26282A"
          }
        }
      }}
    />
  )
}
