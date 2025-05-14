"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">500</h1>
      <h2 className="mt-4 text-2xl font-medium">Une erreur est survenue</h2>
      <p className="mt-2 text-muted-foreground">
        Nous sommes désolés, une erreur s'est produite lors du traitement de votre demande.
      </p>
      <div className="mt-8 flex space-x-4">
        <Button onClick={reset}>Réessayer</Button>
        <Button asChild variant="outline">
          <Link href="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  )
}
