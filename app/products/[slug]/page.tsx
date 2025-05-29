"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Truck, Shield, ArrowRight, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductBySlug, getRelatedProducts, type Product } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { useCart } from "@/lib/cart-context"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  const relatedProducts = product ? getRelatedProducts(product.id) : []
  const [selectedImage, setSelectedImage] = useState(product?.image || "")
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-emerald-600">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/products/${product.category}`} className="hover:text-emerald-600 capitalize">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-50">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[product.image, ...product.gallery].map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-square rounded-lg overflow-hidden ${
                      selectedImage === image ? "ring-2 ring-emerald-600" : ""
                    }`}
                  >
                    <Image src={image} alt={`${product.name} - Image ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.reviews.averageRating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({product.reviews.totalReviews} reviews)
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.reviews.verifiedPurchases} verified purchases
                  </span>
                </div>
              </div>

              <div className="flex items-baseline space-x-4">
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                {product.compareAtPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground">{product.longDescription}</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="quantity" className="text-sm font-medium">
                      Quantity:
                    </label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.quantity} units available
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={() => addToCart(product, quantity)}
                  >
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-b">
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-medium">Secure Payment</p>
                    <p className="text-xs text-muted-foreground">100% protected</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-medium">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">30 day returns</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">SKU:</span> {product.sku}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Category:</span>{" "}
                  <Link href={`/products/${product.category}`} className="text-emerald-600 hover:underline capitalize">
                    {product.category}
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/products/tag/${tag}`}
                      className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="ingredients" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients" className="mt-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Supplement Facts</h3>
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <p className="text-sm text-muted-foreground">Serving Size: {product.usage.servingSize}</p>
                    <p className="text-sm text-muted-foreground">
                      Servings Per Container: {product.usage.servingsPerContainer}
                    </p>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium">Ingredient</th>
                        <th className="text-right py-2 font-medium">Amount</th>
                        <th className="text-right py-2 font-medium">Daily Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.ingredients.map((ingredient, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2">{ingredient.name}</td>
                          <td className="text-right py-2">{ingredient.amount}</td>
                          <td className="text-right py-2">{ingredient.dailyValue || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="benefits" className="mt-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-emerald-600 text-sm font-medium">{index + 1}</span>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="usage" className="mt-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Usage Instructions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Directions</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {product.usage.directions.map((direction, index) => (
                        <li key={index}>{direction}</li>
                      ))}
                    </ul>
                  </div>
                  {product.usage.warnings && (
                    <div>
                      <h4 className="font-medium mb-2">Warnings</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {product.usage.warnings.map((warning, index) => (
                          <li key={index}>{warning}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Weight</p>
                      <p className="text-sm text-muted-foreground">{product.shipping.weight}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Dimensions</p>
                      <p className="text-sm text-muted-foreground">{product.shipping.dimensions}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Shipping Options</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center justify-between text-sm">
                        <span>Standard Shipping</span>
                        <span className="text-emerald-600">Free</span>
                      </li>
                      <li className="flex items-center justify-between text-sm">
                        <span>Express Shipping</span>
                        <span>$9.99</span>
                      </li>
                      <li className="flex items-center justify-between text-sm">
                        <span>Overnight Shipping</span>
                        <span>$19.99</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
} 