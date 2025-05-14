import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-medium">Page non trouvée</h2>
      <p className="mt-2 text-muted-foreground">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Button asChild className="mt-8">
        <Link href="/">Retour à l'accueil</Link>
      </Button>
    </div>
  )
}
