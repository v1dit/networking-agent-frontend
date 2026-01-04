import { Header } from "@/components/header"
import { SignInForm } from "@/components/sign-in-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="gradient-glow min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <SignInForm />
      </div>
    </div>
  )
}
