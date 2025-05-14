import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingCart, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProductBySlug, getRelatedProducts } from "@/lib/api"
import ProductsList from "@/components/products-list"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Produit non trouvé | Délices Authentiques",
    }
  }

  return {
    title: `${product.name} | Délices Authentiques`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.id, product.categoryId)

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center space-x-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Accueil
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/produits" className="hover:text-foreground">
          Produits
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/categories/${product.categorySlug}`} className="hover:text-foreground">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.image || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.isNew && <Badge className="absolute right-2 top-2">Nouveau</Badge>}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 flex items-center space-x-2">
            <Badge variant="outline">{product.category}</Badge>
            {product.inStock ? (
              <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                En stock
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                Rupture de stock
              </Badge>
            )}
          </div>

          <div className="mt-6 text-2xl font-bold">{product.price.toFixed(2)} €</div>

          <div className="mt-6 space-y-4">
            <h3 className="font-medium">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="font-medium">Ingrédients</h3>
            <p className="text-muted-foreground">{product.ingredients}</p>
          </div>

          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="flex-1" disabled={!product.inStock}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ajouter au panier
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Acheter maintenant
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Produits similaires</h2>
          <div className="mt-6">
            <ProductsList products={relatedProducts} />
          </div>
        </div>
      )}
    </div>
  )
}
