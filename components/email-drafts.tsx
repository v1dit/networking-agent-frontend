"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mail, RefreshCw, Send, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const mockDraft = `Hi Alice,

I came across your profile and was impressed by your work on Meta's product initiatives. I'm currently exploring opportunities in product management and would love to connect.

I have 5 years of experience in product strategy and have led several successful launches in the fintech space. I'd appreciate the chance to learn from your experience at Meta.

Would you be open to a brief chat?

Best regards`

interface EmailDraftsProps {
  selectedContacts: string[]
}

export function EmailDrafts({ selectedContacts }: EmailDraftsProps) {
  const [draft, setDraft] = useState(mockDraft)
  const [sent, setSent] = useState(false)
  const { toast } = useToast()

  const handleRegenerate = () => {
    toast({
      title: "Regenerating draft...",
      description: "AI is creating a new version",
    })
    // TODO: Call AI API to regenerate
  }

  const handleSend = () => {
    setSent(true)
    toast({
      title: "Email sent!",
      description: "Your message has been delivered via InboxPilot",
    })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <Card className="gradient-border h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          <CardTitle className="font-heading">Email Draft</CardTitle>
        </div>
        <CardDescription>AI-generated outreach message</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">To: Alice Chen</label>
          <Textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="min-h-[300px] bg-secondary border-border resize-none text-sm leading-relaxed"
          />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleRegenerate}
            variant="outline"
            className="flex-1 border-border hover:bg-secondary bg-transparent"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Regenerate
          </Button>
          <Button
            onClick={handleSend}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={sent}
          >
            {sent ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Sent
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send
              </>
            )}
          </Button>
        </div>

        <div className="text-xs text-muted-foreground text-center pt-2">Powered by NVIDIA Nemotron + InboxPilot</div>
      </CardContent>
    </Card>
  )
}
