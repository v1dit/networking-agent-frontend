"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Building2, Briefcase } from "lucide-react"

// Mock data
const mockContacts = [
  {
    id: "1",
    name: "Alice Chen",
    title: "Senior Product Manager",
    company: "Meta",
    email: "alice.chen@meta.com",
  },
  {
    id: "2",
    name: "Ben Rodriguez",
    title: "Product Manager",
    company: "Stripe",
    email: "ben.rodriguez@stripe.com",
  },
  {
    id: "3",
    name: "Carla Johnson",
    title: "Lead Product Manager",
    company: "Brex",
    email: "carla.johnson@brex.com",
  },
]

interface ContactResultsProps {
  onSelectContacts?: (contactIds: string[]) => void
}

export function ContactResults({ onSelectContacts }: ContactResultsProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const handleSelectContact = (contactId: string) => {
    const newSelected = selectedIds.includes(contactId)
      ? selectedIds.filter((id) => id !== contactId)
      : [...selectedIds, contactId]

    setSelectedIds(newSelected)
    onSelectContacts?.(newSelected)
  }

  return (
    <Card className="gradient-border h-full">
      <CardHeader>
        <CardTitle className="font-heading">Suggested Contacts</CardTitle>
        <CardDescription>Top matches based on your search</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockContacts.map((contact) => (
          <Card
            key={contact.id}
            className={`bg-secondary border-border hover:border-primary/50 transition-colors cursor-pointer ${
              selectedIds.includes(contact.id) ? "border-primary ring-2 ring-primary/20" : ""
            }`}
            onClick={() => handleSelectContact(contact.id)}
          >
            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-foreground text-lg font-heading">{contact.name}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Briefcase className="w-3 h-3" />
                  <span>{contact.title}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Building2 className="w-3 h-3" />
                  <span>{contact.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{contact.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                  Match Score: 95%
                </Badge>
                {selectedIds.includes(contact.id) && (
                  <Badge className="bg-primary text-primary-foreground">Selected</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
