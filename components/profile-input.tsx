"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { User, Upload } from "lucide-react"

interface ProfileInputProps {
  onSave?: () => void
}

export function ProfileInput({ onSave }: ProfileInputProps) {
  const [profile, setProfile] = useState("")
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    onSave?.()
    console.log("Profile saved:", profile)
  }

  return (
    <Card className="gradient-border">
      <CardHeader>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          <CardTitle className="font-heading">Your Profile</CardTitle>
        </div>
        <CardDescription>Paste your LinkedIn profile or resume</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste your LinkedIn profile text or resume here..."
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          className="min-h-[200px] bg-secondary border-border resize-none"
          disabled={saved}
        />
        <Button
          onClick={handleSave}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={!profile.trim() || saved}
        >
          <Upload className="w-4 h-4 mr-2" />
          {saved ? "Profile Saved ✓" : "Save Profile"}
        </Button>
      </CardContent>
    </Card>
  )
}
