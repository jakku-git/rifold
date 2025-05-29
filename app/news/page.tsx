"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { articles } from "./articles"

const categories = ["All", "Research", "Wellness", "Product News", "Company News"]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredArticles =
    activeCategory === "All" ? articles : articles.filter((article) => article.category === activeCategory)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">News & Articles</h1>
          <p className="max-w-2xl text-emerald-100">
            Stay updated with the latest research, product launches, and wellness insights from RIFOLD.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image 
                src={articles[0].image}
                alt={typeof articles[0].title === 'string' ? articles[0].title : 'Featured article image'} 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded mb-4">
                Featured
              </span>
              <h2 className="text-3xl font-playfair font-bold mb-4">
                {articles[0].title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {articles[0].date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {articles[0].readTime}
                </div>
              </div>
              <Button asChild>
                <Link href={`/news/${articles[0].slug}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category ? "bg-emerald-600 text-white" : "bg-white hover:bg-emerald-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image 
                    src={article.image} 
                    alt={typeof article.title === 'string' ? article.title : 'Article image'} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white text-emerald-800 text-xs font-medium px-2.5 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 p-0" asChild>
                    <Link href={`/news/${article.slug}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest research, wellness tips, and product updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
