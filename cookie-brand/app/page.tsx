import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/api"

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=1920"
            alt="Délices Authentiques - Biscuits artisanaux"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Délices Authentiques</h1>
          <p className="mt-6 max-w-lg text-xl">
            Des biscuits artisanaux fabriqués avec passion et des ingrédients de qualité
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/produits">Découvrir nos produits</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
              <Link href="/a-propos">Notre histoire</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Nos produits populaires</h2>
          <Link href="/produits" className="flex items-center text-sm font-medium text-primary">
            Voir tous les produits
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight">Nos valeurs</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium">Qualité</h3>
              <p className="mt-2 text-muted-foreground">
                Nous sélectionnons les meilleurs ingrédients pour nos biscuits artisanaux.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium">Tradition</h3>
              <p className="mt-2 text-muted-foreground">Nos recettes sont transmises de génération en génération.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium">Authenticité</h3>
              <p className="mt-2 text-muted-foreground">
                Nous restons fidèles aux méthodes artisanales pour préserver le goût authentique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="rounded-lg bg-primary px-6 py-12 text-center text-primary-foreground md:px-12">
          <h2 className="text-3xl font-bold tracking-tight">Prêt à découvrir nos délices ?</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/90">
            Commandez dès maintenant et recevez vos biscuits artisanaux directement chez vous.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/produits">Découvrir nos produits</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
