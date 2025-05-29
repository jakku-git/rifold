"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
    }, 1500)
  }
  
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl text-emerald-100">
            Have questions about our products or need assistance? We're here to help.
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about our products, need help with an order, 
                or want to explore partnership opportunities, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-muted-foreground">
                      26 Artisan Road<br />
                      Seven Hills NSW 2147<br />
                      Australia
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@rifold.com.au" className="hover:text-emerald-600 transition-colors">
                        info@rifold.com.au
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <div className="grid grid-cols-2 gap-1">
                      <Facebook className="h-3 w-3 text-emerald-600" />
                      <Instagram className="h-3 w-3 text-emerald-600" />
                      <Linkedin className="h-3 w-3 text-emerald-600" />
                      <Youtube className="h-3 w-3 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Connect With Us</h3>
                    <div className="flex gap-4 mt-2">
                      <a 
                        href="https://facebook.com/rifold" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-emerald-600 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://instagram.com/rifold" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-emerald-600 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://linkedin.com/company/rifold" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-emerald-600 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://youtube.com/@rifold" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-emerald-600 transition-colors"
                      >
                        <Youtube className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formStatus === 'success' ? (
                  <motion.div 
                    className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Inquiry Type</Label>
                      <RadioGroup defaultValue="product">
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="product" id="product" />
                            <Label htmlFor="product">Product Question</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="order" id="order" />
                            <Label htmlFor="order">Order Support</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="partnership" id="partnership" />
                            <Label htmlFor="partnership">Partnership</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
