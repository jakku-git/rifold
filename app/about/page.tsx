"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function AboutPage() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const processRef = useRef(null)

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px" })

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Chief Scientific Officer",
      bio: "Ph.D in Biochemistry with 15+ years of research experience in nutritional science.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & CEO",
      bio: "Former pharmaceutical executive with a passion for natural wellness solutions.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Research",
      bio: "Specializes in botanical medicine and natural compound extraction techniques.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=800&fit=crop",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-4">About <span className="font-rifold tracking-tight font-bold">RIFOLD</span></h1>
          <p className="max-w-2xl text-emerald-100">
            Discover our journey of blending nature's wisdom with scientific excellence since 2004.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <span className="font-rifold tracking-tight font-bold">RIFOLD</span> began in 2004 with a clear purpose: to empower healthier, more beautiful lives by blending the best of nature with modern science. What started as a vision has become a trusted name in wellness, with our products now reaching homes across Australia and beyond.
                </p>
                <p>
                  From our earliest days, we set out to create health and beauty supplements that people could genuinely rely on—crafted with integrity, rigorously tested, and always inspired by nature's purest ingredients. Over the years, our dedication has earned <span className="font-rifold tracking-tight font-bold">RIFOLD</span> a reputation as one of the most respected brands within Australia's Asian community.
                </p>
                <p>
                  We're proud that our story is written not just by us, but by the customers who share their real results and satisfaction every day. Their loyalty and feedback drive us to keep innovating, improving, and delivering supplements that make a true difference.
                </p>
                <p>
                  Today, RIFOLD is expanding its reach, sharing our philosophy of natural wellbeing and scientific excellence with markets across Asia and Europe. Wherever you are, our promise remains the same: to support your journey towards health and beauty, with supplements you can trust.
                </p>
              </div>
            </div>
            <motion.div 
              className="relative h-[600px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&h=800&fit=crop" 
                alt="RIFOLD's journey of natural wellness and scientific innovation" 
                fill 
                className="object-cover" 
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg mb-8">
              At RIFOLD, we combine traditional wisdom with cutting-edge science to create supplements that truly make a difference in people's lives. Our commitment to quality, transparency, and customer satisfaction drives everything we do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Natural Excellence</h3>
                <p className="text-muted-foreground">
                  We source only the finest natural ingredients, carefully selected for their purity and potency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Scientific Innovation</h3>
                <p className="text-muted-foreground">
                  Our research-driven approach ensures every product meets the highest standards of efficacy and safety.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Customer Trust</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships through transparency, quality, and genuine care for our customers' wellbeing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Team</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Behind <span className="font-rifold tracking-tight font-bold">RIFOLD</span>'s success is a dedicated team of experts who share a common vision: to create supplements that truly make a difference. Our team combines decades of experience in nutritional science, traditional medicine, and product development.
                </p>
                <p>
                  From our research scientists who carefully select and test each ingredient, to our quality control specialists who ensure every product meets our exacting standards, every member of the <span className="font-rifold tracking-tight font-bold">RIFOLD</span> team is committed to excellence.
                </p>
                <p>
                  What sets our team apart is our deep understanding of both traditional wellness practices and modern scientific methods. This unique perspective allows us to create products that honor the wisdom of nature while meeting the highest standards of scientific validation.
                </p>
                <p>
                  Together, we're not just making supplements—we're building a legacy of trust, innovation, and genuine care for our customers' health and wellbeing. Our team's dedication to quality and customer satisfaction is what makes <span className="font-rifold tracking-tight font-bold">RIFOLD</span> a trusted name in natural wellness.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative h-[600px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop" 
                alt="RIFOLD's dedicated team of experts working in our state-of-the-art facility" 
                fill 
                className="object-cover" 
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processRef} className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-playfair font-bold mb-4">Our Process</h2>
            <p className="max-w-2xl mx-auto text-emerald-100">
              From research to your doorstep, we maintain the highest standards at every step of creating <span className="font-rifold tracking-tight font-bold">RIFOLD</span> supplements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "Research",
                description:
                  "We start with extensive research into natural compounds and their effects on human health, combining traditional wisdom with modern science.",
              },
              {
                step: "Formulation",
                description:
                  "Our scientists develop optimal formulations that maximize bioavailability and effectiveness, ensuring each ingredient works in harmony.",
              },
              {
                step: "Testing",
                description: "Every batch undergoes rigorous testing for purity, potency, and safety, meeting the highest industry standards.",
              },
              {
                step: "Delivery",
                description: "Our products are carefully packaged and delivered fresh to your door, maintaining their quality and efficacy.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-emerald-800 p-6 rounded-xl h-full">
                  <div className="text-4xl font-bold text-emerald-400 mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{item.step}</h3>
                  <p className="text-emerald-100">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-emerald-400 transform rotate-45"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Global Impact</h2>
            <p className="text-lg mb-8 text-emerald-100">
              From our roots in Australia to our growing presence across Asia and Europe, <span className="font-rifold tracking-tight font-bold">RIFOLD</span> continues to expand its reach while maintaining our commitment to quality and customer satisfaction. Our products are now trusted by customers worldwide who value the perfect blend of natural wisdom and scientific excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-emerald-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Australia</h3>
                <p className="text-emerald-100">
                  Our home market and foundation of success, serving the Australian community since 2004.
                </p>
              </div>
              <div className="bg-emerald-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Asia</h3>
                <p className="text-emerald-100">
                  Growing presence across Asian markets, sharing our commitment to natural wellness.
                </p>
              </div>
              <div className="bg-emerald-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Europe</h3>
                <p className="text-emerald-100">
                  Expanding our reach to European customers who value quality and scientific validation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
