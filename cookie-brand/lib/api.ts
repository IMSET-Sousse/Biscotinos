import type { Product, Category } from "@/lib/types"

// Mock data for products
const products: Product[] = [
  {
    id: "1",
    name: "Sablés Tradition",
    slug: "sables-tradition",
    description:
      "Nos sablés traditionnels, fabriqués selon une recette ancestrale avec du beurre AOP et de la vanille de Madagascar.",
    price: 6.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Sablés",
    categoryId: "1",
    categorySlug: "sables",
    ingredients: "Farine de blé, beurre AOP (22%), sucre, œufs frais, vanille de Madagascar, sel de Guérande.",
    isNew: false,
    inStock: true,
  },
  {
    id: "2",
    name: "Cookies aux Pépites de Chocolat",
    slug: "cookies-pepites-chocolat",
    description: "De délicieux cookies moelleux garnis de généreuses pépites de chocolat noir 70% de cacao.",
    price: 7.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Cookies",
    categoryId: "2",
    categorySlug: "cookies",
    ingredients: "Farine de blé, beurre, sucre roux, œufs frais, pépites de chocolat noir 70% (18%), vanille, sel.",
    isNew: true,
    inStock: true,
  },
  {
    id: "3",
    name: "Macarons Assortis",
    slug: "macarons-assortis",
    description:
      "Un assortiment de nos macarons les plus populaires : vanille, chocolat, pistache, framboise, citron et caramel.",
    price: 12.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Macarons",
    categoryId: "3",
    categorySlug: "macarons",
    ingredients: "Amandes, sucre glace, blanc d'œufs, sucre, colorants naturels, arômes naturels.",
    isNew: false,
    inStock: true,
  },
  {
    id: "4",
    name: "Financiers aux Amandes",
    slug: "financiers-amandes",
    description: "De délicats financiers aux amandes, légers et moelleux, avec une texture fondante et un goût subtil.",
    price: 8.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Financiers",
    categoryId: "4",
    categorySlug: "financiers",
    ingredients: "Amandes, beurre noisette, sucre glace, blanc d'œufs, farine de blé, miel.",
    isNew: false,
    inStock: true,
  },
  {
    id: "5",
    name: "Madeleines à la Vanille",
    slug: "madeleines-vanille",
    description: "Nos madeleines à la vanille, moelleuses à l'intérieur et légèrement croustillantes à l'extérieur.",
    price: 6.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Madeleines",
    categoryId: "5",
    categorySlug: "madeleines",
    ingredients: "Farine de blé, beurre, sucre, œufs frais, miel, vanille de Madagascar, levure.",
    isNew: false,
    inStock: true,
  },
  {
    id: "6",
    name: "Tuiles aux Amandes",
    slug: "tuiles-amandes",
    description: "Des tuiles fines et croustillantes aux amandes, parfaites pour accompagner un café ou un thé.",
    price: 7.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Tuiles",
    categoryId: "6",
    categorySlug: "tuiles",
    ingredients: "Amandes effilées, sucre, blanc d'œufs, farine de blé, beurre, miel.",
    isNew: true,
    inStock: false,
  },
  {
    id: "7",
    name: "Sablés au Citron",
    slug: "sables-citron",
    description: "Des sablés rafraîchissants au citron, avec un équilibre parfait entre acidité et douceur.",
    price: 6.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Sablés",
    categoryId: "1",
    categorySlug: "sables",
    ingredients:
      "Farine de blé, beurre AOP, sucre, œufs frais, zeste de citron bio, jus de citron bio, sel de Guérande.",
    isNew: false,
    inStock: true,
  },
  {
    id: "8",
    name: "Cookies aux Noix",
    slug: "cookies-noix",
    description: "Des cookies croustillants aux noix de Grenoble et pépites de chocolat au lait.",
    price: 7.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Cookies",
    categoryId: "2",
    categorySlug: "cookies",
    ingredients:
      "Farine de blé, beurre, sucre roux, œufs frais, noix de Grenoble (15%), pépites de chocolat au lait (10%), vanille, sel.",
    isNew: false,
    inStock: true,
  },
]

// Mock data for categories
const categories: Category[] = [
  {
    id: "1",
    name: "Sablés",
    slug: "sables",
    description: "Nos sablés traditionnels et leurs variantes gourmandes.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "2",
    name: "Cookies",
    slug: "cookies",
    description: "Des cookies moelleux aux saveurs variées.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "3",
    name: "Macarons",
    slug: "macarons",
    description: "Nos macarons aux couleurs et saveurs délicates.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "4",
    name: "Financiers",
    slug: "financiers",
    description: "De délicats financiers aux amandes et autres saveurs.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "5",
    name: "Madeleines",
    slug: "madeleines",
    description: "Nos madeleines moelleuses à la vanille et autres parfums.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "6",
    name: "Tuiles",
    slug: "tuiles",
    description: "Des tuiles fines et croustillantes aux amandes.",
    image: "/placeholder.svg?height=300&width=600",
  },
]

// API functions
export async function getProducts({
  page = 1,
  category = "",
  sort = "newest",
}: {
  page?: number
  category?: string
  sort?: string
}) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const itemsPerPage = 6

  // Filter by category if provided
  let filteredProducts = [...products]
  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.categorySlug === category)
  }

  // Sort products
  switch (sort) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "name-asc":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "name-desc":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
      break
    case "newest":
    default:
      // Assuming the array is already sorted by newest
      break
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  return {
    products: paginatedProducts,
    totalPages,
  }
}

export async function getFeaturedProducts() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Return first 4 products as featured
  return products.slice(0, 4)
}

export async function getProductBySlug(slug: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return products.find((product) => product.slug === slug) || null
}

export async function getRelatedProducts(productId: string, categoryId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Find products in the same category, excluding the current product
  return products.filter((product) => product.categoryId === categoryId && product.id !== productId).slice(0, 3)
}

export async function getCategories() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return categories
}

export async function getCategoryBySlug(slug: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return categories.find((category) => category.slug === slug) || null
}

export async function getProductsByCategory(categoryId: string, page = 1) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const itemsPerPage = 6

  // Filter products by category
  const filteredProducts = products.filter((product) => product.categoryId === categoryId)

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  return {
    products: paginatedProducts,
    totalPages,
  }
}
