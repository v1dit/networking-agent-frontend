import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold text-foreground font-heading">NetMind</span>
        </div>
        <div className="text-sm text-muted-foreground">Powered by NVIDIA NIM</div>
      </div>
    </header>
  )
}
