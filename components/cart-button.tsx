"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartButton() {
  const { cart, setIsOpen } = useCart()
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors"
      aria-label="Open cart"
    >
      <ShoppingBag className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-emerald-600 text-white text-xs font-medium flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  )
} 