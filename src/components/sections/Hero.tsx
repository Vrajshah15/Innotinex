"use client";

import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6"
          >
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary-text sm:text-5xl lg:text-6xl leading-[1.1]">
              We Help Small Businesses <br className="hidden sm:block"/> Get More Customers & Automate Their Work
            </h1>
            
            <p className="text-lg text-secondary-text max-w-xl leading-relaxed">
              Custom websites, digital marketing, and AI-powered automation built to grow your business — not just look good.
            </p>
            
            <div className="flex flex-col w-full sm:flex-row gap-4 mt-4">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Visual (Minimal/Abstract shape placeholder) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none h-[400px] bg-gradient-to-tr from-primary/10 to-accent/20 rounded-3xl flex items-center justify-center border border-gray-100"
          >
            {/* A simple geometric abstraction of growth/system */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-accent/20 blur-3xl absolute top-1/4 right-1/4"></div>
              <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl absolute bottom-1/4 left-1/4"></div>
            </div>
            <div className="relative z-10 w-32 h-32 bg-white shadow-xl rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
