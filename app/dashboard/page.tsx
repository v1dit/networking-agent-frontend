"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProfileInput } from "@/components/profile-input"
import { ChatInterface } from "@/components/chat-interface"
import { ContactResults } from "@/components/contact-results"
import { EmailDrafts } from "@/components/email-drafts"

export default function DashboardPage() {
  const [profileSaved, setProfileSaved] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="gradient-glow">
        <div className="container mx-auto p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Panel - Profile & Chat */}
            <div className="lg:col-span-1 space-y-6">
              <ProfileInput onSave={() => setProfileSaved(true)} />

              {profileSaved && <ChatInterface onSearch={() => setHasSearched(true)} />}
            </div>

            {/* Center Panel - Contact Results */}
            {hasSearched && (
              <div className="lg:col-span-1">
                <ContactResults onSelectContacts={setSelectedContacts} />
              </div>
            )}

            {/* Right Panel - Email Drafts */}
            {selectedContacts.length > 0 && (
              <div className="lg:col-span-1">
                <EmailDrafts selectedContacts={selectedContacts} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
