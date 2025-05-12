"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export type Variant = "default" | "outline" | "ghost" | "link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: Variant
  size?: "sm" | "md" | "lg"
}

const base = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

const variants: Record<Variant, string> = {
  default: "bg-brand-gold text-brand-black hover:brightness-90",
  outline: "border border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold/10",
  ghost: "text-brand-gold hover:bg-brand-gold/10",
  link: "text-brand-gold underline-offset-4 hover:underline",
}

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(base, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
export { Button }
