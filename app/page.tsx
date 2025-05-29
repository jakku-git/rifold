"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, Leaf, FlaskRoundIcon as Flask, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const productsRef = useRef(null)
  const storyRef = useRef(null)

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" })
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Get the first 3 products as featured products
  const featuredProducts = products.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroScale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/rifoldhero.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 relative z-10 text-white"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-lime-300/90 font-light tracking-[0.2em] uppercase text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Premium Supplements
            </motion.span>
            <motion.h1
              className="font-playfair font-light leading-[1.1] tracking-tight mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block text-4xl md:text-6xl lg:text-7xl mb-3 text-white/90">Inspired by</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-lime-300 to-lime-400/90 bg-clip-text text-transparent">
                NATURE
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl mt-6 text-white/90">Backed by</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-lime-300 to-lime-400/90 bg-clip-text text-transparent">
                SCIENCE
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="mt-12 text-base md:text-lg max-w-xl font-light leading-relaxed text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Premium supplements crafted with the finest natural ingredients, 
            <span className="font-normal text-white"> scientifically formulated </span>
            to enhance your wellbeing.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300" 
              asChild
            >
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="px-8 py-6 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-medium mb-2">Scroll to discover</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ArrowRight className="h-5 w-5 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section ref={productsRef} className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-xl">
                Discover our most popular supplements, formulated for optimal health and wellbeing.
              </p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0" asChild>
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-rifold font-bold mb-4">The <span className="font-rifold tracking-tight font-bold">RIFOLD</span> Difference</h2>
            <p className="text-muted-foreground whitespace-nowrap">
              We combine the wisdom of nature with cutting-edge scientific research to create supplements that truly work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Naturally Sourced</h3>
              <p className="text-muted-foreground">
                We carefully select the finest natural ingredients from sustainable sources around the world.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Flask className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scientifically Proven</h3>
              <p className="text-muted-foreground">
                Every formula is backed by rigorous scientific research and clinical studies.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Our supplements exceed industry standards with rigorous quality control and testing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section ref={storyRef} className="py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 text-emerald-100">
                <span className="font-rifold">RIFOLD</span> was born from a simple belief: that nature provides everything we need for optimal health, but
                modern science can help us harness its power more effectively.
              </p>
              <p className="mb-8 text-emerald-100">
                Founded by a team of nutritionists and biochemists, we've spent years researching the perfect balance
                between natural ingredients and scientific innovation. The result is a range of supplements that deliver
                real results, backed by research and crafted with care.
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&h=800&fit=crop"
                alt="RIFOLD's state-of-the-art research laboratory"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for health tips, product updates, and exclusive offers.
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
    </>
  )
}
