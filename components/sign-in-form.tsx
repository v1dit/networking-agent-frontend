"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function SignInForm() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <Card className="w-full max-w-md gradient-border">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold text-balance">Welcome to NetMind</CardTitle>
        <CardDescription className="text-base text-muted-foreground">Your AI-powered networking agent</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-secondary border-border"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Continue
          </Button>
        </form>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          By continuing, you agree to our Terms of Service
        </div>
      </CardContent>
    </Card>
  )
}
