"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Send } from "lucide-react"

interface ChatInterfaceProps {
  onSearch?: () => void
}

export function ChatInterface({ onSearch }: ChatInterfaceProps) {
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: query }])

    onSearch?.()

    // TODO: Call AI API
    // Mock response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Searching for professionals matching your criteria...",
        },
      ])
    }, 500)

    setQuery("")
  }

  return (
    <Card className="gradient-border">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" />
          <CardTitle className="font-heading">Find Contacts</CardTitle>
        </div>
        <CardDescription>Ask NetMind to find professionals for you</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Chat Messages */}
        <div className="space-y-3 min-h-[200px] max-h-[300px] overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-muted-foreground text-sm py-8">
              Try: "Find a PM at Meta to connect with"
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg text-sm ${
                  msg.role === "user" ? "bg-primary/20 text-foreground ml-8" : "bg-secondary text-foreground mr-8"
                }`}
              >
                {msg.content}
              </div>
            ))
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="e.g., Find a PM at Meta..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-secondary border-border"
          />
          <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
