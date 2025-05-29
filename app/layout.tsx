import type React from "react"
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/lib/cart-context"
import CartDrawer from "@/components/cart-drawer"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "RIFOLD - Premium Supplements",
  description: "Premium supplements crafted with the finest natural ingredients, scientifically formulated to enhance your wellbeing.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
