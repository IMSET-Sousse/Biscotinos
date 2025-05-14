import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { getCategoryBySlug, getProductsByCategory } from "@/lib/api"
import ProductsList from "@/components/products-list"
import ProductsPagination from "@/components/products-pagination"

interface CategoryPageProps {
  params: {
    slug: string
  }
  searchParams: {
    page?: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    return {
      title: "Catégorie non trouvée | Délices Authentiques",
    }
  }

  return {
    title: `${category.name} | Délices Authentiques`,
    description: category.description,
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const page = Number(searchParams.page) || 1
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    notFound()
  }

  const { products, totalPages } = await getProductsByCategory(category.id, page)

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center space-x-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Accueil
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/categories" className="hover:text-foreground">
          Catégories
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{category.name}</span>
      </div>

      {/* Category Header */}
      <div className="relative mb-8 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src={category.image || "/placeholder.svg?height=300&width=1200"}
          alt={category.name}
          width={1200}
          height={300}
          className="h-[200px] w-full object-cover md:h-[300px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
          <h1 className="text-3xl font-bold md:text-4xl">{category.name}</h1>
          <p className="mt-2 max-w-lg text-white/90">{category.description}</p>
        </div>
      </div>

      {/* Products */}
      <div className="space-y-8">
        <ProductsList products={products} />
        <ProductsPagination currentPage={page} totalPages={totalPages} />
      </div>
    </div>
  )
}
