"use client"

import React from "react"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { Category } from "@/lib/types"

interface ProductsFilterProps {
  categories: Category[]
  selectedCategory: string
}

export default function ProductsFilter({ categories, selectedCategory }: ProductsFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = React.useState(true)

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", "1") // Reset to first page when changing filters

    if (value) {
      params.set(name, value)
    } else {
      params.delete(name)
    }

    return params.toString()
  }

  const handleCategoryChange = (category: string) => {
    const query = createQueryString("category", category)
    router.push(`${pathname}?${query}`)
  }

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("category")
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Filtres</h3>
        {selectedCategory && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
            Réinitialiser
          </Button>
        )}
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="flex w-full items-center justify-between p-0 font-medium">
            <span>Catégories</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              size="sm"
              className={`flex w-full justify-start ${
                selectedCategory === category.slug ? "bg-muted font-medium" : "font-normal"
              }`}
              onClick={() => handleCategoryChange(category.slug)}
            >
              <span className="flex w-full items-center justify-between">
                {category.name}
                {selectedCategory === category.slug && <Check className="h-4 w-4" />}
              </span>
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
