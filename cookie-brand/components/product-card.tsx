import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background">
      <Link href={`/produits/${product.slug}`} className="relative block h-60 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg?height=240&width=240"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNew && <Badge className="absolute right-2 top-2">Nouveau</Badge>}
      </Link>
      <div className="p-4">
        <Link href={`/produits/${product.slug}`}>
          <h3 className="font-medium">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <p className="font-medium">{product.price.toFixed(2)} €</p>
        </div>
        <Button className="mt-4 w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Ajouter au panier
        </Button>
      </div>
    </div>
  )
}
