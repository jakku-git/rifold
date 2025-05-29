import Link from "next/link"
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl tracking-tight"><span className="font-rifold">RIFOLD</span></h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Inspired by nature. Backed by science. Premium supplements for your optimal wellbeing.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products/vitamins"
                  className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  Vitamins
                </Link>
              </li>
              <li>
                <Link
                  href="/products/minerals"
                  className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  Minerals
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bundles"
                  className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  Bundles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} <span className="font-rifold">RIFOLD</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
