import { Product } from "./products"

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

// Initialize cart from localStorage or create empty cart
export function getInitialCart(): Cart {
  if (typeof window === "undefined") return { items: [], total: 0 }
  
  const savedCart = localStorage.getItem("cart")
  if (savedCart) {
    try {
      return JSON.parse(savedCart)
    } catch {
      return { items: [], total: 0 }
    }
  }
  return { items: [], total: 0 }
}

// Save cart to localStorage
export function saveCart(cart: Cart) {
  if (typeof window === "undefined") return
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Calculate cart total
export function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
}

// Add item to cart
export function addToCart(cart: Cart, product: Product, quantity: number = 1): Cart {
  const existingItem = cart.items.find((item) => item.product.id.toString() === product.id.toString())
  
  let newItems: CartItem[]
  if (existingItem) {
    newItems = cart.items.map((item) =>
      item.product.id.toString() === product.id.toString()
        ? { ...item, quantity: item.quantity + quantity }
        : item
    )
  } else {
    newItems = [...cart.items, { product, quantity }]
  }

  const newCart = {
    items: newItems,
    total: calculateTotal(newItems),
  }
  
  saveCart(newCart)
  return newCart
}

// Remove item from cart
export function removeFromCart(cart: Cart, productId: string | number): Cart {
  const newItems = cart.items.filter((item) => item.product.id.toString() !== productId.toString())
  const newCart = {
    items: newItems,
    total: calculateTotal(newItems),
  }
  
  saveCart(newCart)
  return newCart
}

// Update item quantity
export function updateCartItemQuantity(cart: Cart, productId: string | number, quantity: number): Cart {
  if (quantity <= 0) return removeFromCart(cart, productId)
  
  const newItems = cart.items.map((item) =>
    item.product.id.toString() === productId.toString() ? { ...item, quantity } : item
  )
  
  const newCart = {
    items: newItems,
    total: calculateTotal(newItems),
  }
  
  saveCart(newCart)
  return newCart
}

// Clear cart
export function clearCart(): Cart {
  const newCart = { items: [], total: 0 }
  saveCart(newCart)
  return newCart
} 