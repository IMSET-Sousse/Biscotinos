export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image: string
  category: string
  categoryId: string
  categorySlug: string
  ingredients: string
  isNew: boolean
  inStock: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
}
