"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const averageRating = product.reviews?.averageRating || 0
  const totalReviews = product.reviews?.totalReviews || 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-neutral-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            onClick={(e) => {
              e.preventDefault()
              // TODO: Add to wishlist functionality
            }}
          >
            <Heart className="h-5 w-5 text-neutral-600" />
          </button>
          {product.compareAtPrice && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                Save ${(product.compareAtPrice - product.price).toFixed(2)}
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          {totalReviews > 0 && (
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                ({totalReviews})
              </span>
            </div>
          )}
          <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-baseline justify-between">
            <div className="space-x-2">
              <span className="font-medium">${product.price.toFixed(2)}</span>
              {product.compareAtPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>
            <Button
              size="sm"
              onClick={(e) => {
                e.preventDefault()
                addToCart(product)
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
