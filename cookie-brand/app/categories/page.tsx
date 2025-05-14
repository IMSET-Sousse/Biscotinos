import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getCategories } from "@/lib/api"

export const metadata: Metadata = {
  title: "Catégories | Délices Authentiques",
  description: "Découvrez nos différentes catégories de biscuits artisanaux.",
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight">Nos Catégories</h1>
      <p className="mt-2 text-muted-foreground">Explorez notre sélection de biscuits par catégorie.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent/50"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg?height=160&width=320"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="font-medium">{category.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
