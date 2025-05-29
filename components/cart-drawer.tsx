"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateCartItemQuantity, clearCart } = useCart()

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when cart is open
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, setIsOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cart.items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <ShoppingBag className="h-12 w-12 text-neutral-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground mb-4">
                    Looks like you haven't added any products to your cart yet.
                  </p>
                  <Button onClick={() => setIsOpen(false)}>Continue Shopping</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium">{item.product.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          ${item.product.price.toFixed(2)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => updateCartItemQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-neutral-100 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-neutral-100 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.items.length > 0 && (
              <div className="border-t p-4 space-y-4">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${cart.total.toFixed(2)}</span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>
                  <Button variant="outline" className="w-full" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 