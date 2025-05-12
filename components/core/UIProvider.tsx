"use client"

import { Toaster } from "@/components/ui/Toaster"

export function UIProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
