import { Suspense } from "react"
import type { Metadata } from "next"
import ProductsList from "@/components/products-list"
import ProductsFilter from "@/components/products-filter"
import ProductsSort from "@/components/products-sort"
import ProductsPagination from "@/components/products-pagination"
import { getProducts, getCategories } from "@/lib/api"

export const metadata: Metadata = {
  title: "Nos Produits | Délices Authentiques",
  description: "Découvrez notre gamme complète de biscuits artisanaux fabriqués avec des ingrédients de qualité.",
}

interface ProductsPageProps {
  searchParams: {
    page?: string
    category?: string
    sort?: string
  }
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const page = Number(searchParams.page) || 1
  const category = searchParams.category || ""
  const sort = searchParams.sort || "newest"

  const categories = await getCategories()
  const { products, totalPages } = await getProducts({ page, category, sort })

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight">Nos Produits</h1>
      <p className="mt-2 text-muted-foreground">
        Découvrez notre sélection de biscuits artisanaux fabriqués avec passion.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
        <div>
          <ProductsFilter categories={categories} selectedCategory={category} />
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{products.length} produits</p>
            <ProductsSort currentSort={sort} />
          </div>

          <Suspense fallback={<div>Chargement des produits...</div>}>
            <ProductsList products={products} />
          </Suspense>

          <ProductsPagination currentPage={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  )
}
