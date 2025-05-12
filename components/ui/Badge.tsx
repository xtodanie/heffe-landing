import { cn } from "@/lib/utils"

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-brand-black", className)}>
      {children}
    </span>
  )
}