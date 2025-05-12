import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function Alert({ type = "info", message }: { type?: "info" | "error" | "success"; message: string }) {
  const icon = type === "success" ? <CheckCircle2 className="text-green-500" /> : <AlertCircle className="text-red-500" />
  const color = type === "success" ? "border-green-500" : type === "error" ? "border-red-500" : "border-brand-gold"

  return (
    <div className={cn("flex items-center gap-3 rounded border px-4 py-3 text-sm", color)}>
      {icon}
      <span>{message}</span>
    </div>
  )
}
