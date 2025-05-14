import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "À Propos | Délices Authentiques",
  description: "Découvrez l'histoire et les valeurs de Délices Authentiques, fabricant de biscuits artisanaux.",
}

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight">À Propos de Nous</h1>

      {/* Our Story */}
      <section className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-2xl font-bold">Notre Histoire</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Fondée en 2010 par Marie et Pierre Dupont, Délices Authentiques est née d'une passion partagée pour la
              pâtisserie traditionnelle et les saveurs authentiques.
            </p>
            <p>
              Ce qui a commencé comme une petite boulangerie familiale dans le sud de la France s'est transformé en une
              entreprise artisanale reconnue pour la qualité exceptionnelle de ses biscuits et son engagement envers les
              méthodes de fabrication traditionnelles.
            </p>
            <p>
              Aujourd'hui, nous continuons à créer des biscuits artisanaux en utilisant les recettes transmises de
              génération en génération, tout en innovant pour proposer de nouvelles saveurs qui ravissent les palais
              modernes.
            </p>
          </div>
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
          <Image src="/placeholder.svg?height=600&width=800" alt="Notre histoire" fill className="object-cover" />
        </div>
      </section>

      {/* Our Values */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Nos Valeurs</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium">Qualité</h3>
            <p className="mt-2 text-muted-foreground">
              Nous sélectionnons uniquement les meilleurs ingrédients pour nos biscuits, en privilégiant les produits
              locaux et de saison.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
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
              Nous restons fidèles aux méthodes artisanales pour préserver le goût authentique de nos biscuits et
              honorer notre héritage.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium">Passion</h3>
            <p className="mt-2 text-muted-foreground">
              Chaque biscuit est fabriqué avec amour et passion, reflétant notre dévouement à l'art de la pâtisserie
              artisanale.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium">Durabilité</h3>
            <p className="mt-2 text-muted-foreground">
              Nous nous engageons à réduire notre impact environnemental en utilisant des emballages écologiques et en
              minimisant les déchets.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium">Communauté</h3>
            <p className="mt-2 text-muted-foreground">
              Nous soutenons les producteurs locaux et nous nous impliquons activement dans notre communauté à travers
              diverses initiatives.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium">Innovation</h3>
            <p className="mt-2 text-muted-foreground">
              Tout en respectant la tradition, nous explorons constamment de nouvelles saveurs et techniques pour
              surprendre et ravir nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Notre Équipe</h2>
        <p className="mt-2 text-muted-foreground">
          Rencontrez les artisans passionnés derrière nos délicieux biscuits.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=160&width=160" alt="Marie Dupont" fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Marie Dupont</h3>
            <p className="text-sm text-muted-foreground">Fondatrice & Chef Pâtissière</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=160&width=160" alt="Pierre Dupont" fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Pierre Dupont</h3>
            <p className="text-sm text-muted-foreground">Co-Fondateur & Directeur</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=160&width=160" alt="Sophie Martin" fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Sophie Martin</h3>
            <p className="text-sm text-muted-foreground">Chef de Production</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=160&width=160" alt="Thomas Bernard" fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Thomas Bernard</h3>
            <p className="text-sm text-muted-foreground">Responsable Qualité</p>
          </div>
        </div>
      </section>
    </div>
  )
}
