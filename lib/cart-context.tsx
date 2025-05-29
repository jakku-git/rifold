"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { Cart, CartItem } from "./cart"
import { getInitialCart, addToCart as addToCartStore, removeFromCart as removeFromCartStore, updateCartItemQuantity as updateCartItemQuantityStore, clearCart as clearCartStore } from "./cart"
import type { Product } from "./products"

interface CartContextType {
  cart: Cart
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string | number) => void
  updateCartItemQuantity: (productId: string | number, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 })
  const [isOpen, setIsOpen] = useState(false)

  // Initialize cart from localStorage
  useEffect(() => {
    setCart(getInitialCart())
  }, [])

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((currentCart) => addToCartStore(currentCart, product, quantity))
    setIsOpen(true)
  }

  const removeFromCart = (productId: string | number) => {
    setCart((currentCart) => removeFromCartStore(currentCart, productId))
  }

  const updateCartItemQuantity = (productId: string | number, quantity: number) => {
    setCart((currentCart) => updateCartItemQuantityStore(currentCart, productId, quantity))
  }

  const clearCart = () => {
    setCart(clearCartStore())
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
} 