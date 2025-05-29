"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products, categories, type Product } from "@/lib/products"

type SortOption = "featured" | "price-low" | "price-high" | "rating"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>("featured")
  const [showFilters, setShowFilters] = useState(false)

  const CategoryButton = ({ className = "", isMobile = false }: { className?: string; isMobile?: boolean }) => (
    <Button
      variant={selectedCategory === null ? "default" : "outline"}
      size="sm"
      onClick={() => setSelectedCategory(null)}
      className={`min-w-[120px] ${className}`}
    >
      {isMobile ? "All Products" : "Popular Products"}
    </Button>
  )

  const filteredProducts = products.filter((product) => {
    if (!selectedCategory) return true
    return product.category === selectedCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.reviews.averageRating - a.reviews.averageRating
      default:
        return 0
    }
  })

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of high-quality supplements, carefully formulated to support your health and
            wellness journey.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              {/* Desktop Category Filters */}
              <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-2 min-h-[36px]">
                <CategoryButton />
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    className="min-w-[120px]"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-md border border-input bg-background px-3 py-1 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 sm:hidden"
            >
              <div className="space-y-4 p-4 bg-neutral-50 rounded-lg">
                <div>
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    <CategoryButton className="w-full justify-start" isMobile={true} />
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        className="w-full justify-start capitalize min-w-[120px]"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search to find what you're looking for.
            </p>
            <Button variant="outline" onClick={() => setSelectedCategory(null)}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
