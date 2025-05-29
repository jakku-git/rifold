"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import CartButton from "@/components/cart-button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-rifold text-4xl md:text-5xl tracking-tight">RIFOLD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="scale-125">
              <CartButton />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-8">
            <div className="scale-125">
              <CartButton />
            </div>
            <button className="p-3 hover:bg-neutral-100 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 pt-28"
          >
            <nav className="container mx-auto px-4 py-12 flex flex-col space-y-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-medium hover:text-emerald-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-10 border-t">
                <div className="scale-150">
                  <CartButton />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
