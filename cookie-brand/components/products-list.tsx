import type { Product } from "@/lib/types"
import ProductCard from "@/components/product-card"

interface ProductsListProps {
  products: Product[]
}

export default function ProductsList({ products }: ProductsListProps) {
  if (products.length === 0) {
    return (
      <div className="flex h-60 items-center justify-center rounded-lg border bg-muted/40 p-8 text-center">
        <div>
          <p className="text-lg font-medium">Aucun produit trouvé</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Essayez de modifier vos filtres ou de rechercher un autre terme.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
