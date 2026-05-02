"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-primary py-24 relative overflow-hidden" id="contact">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary to-[#0f3d7a] opacity-50"></div>
      
      <div className="container mx-auto max-w-[800px] px-6 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl">
            Let’s build something that actually works for you. Stop wasting time with generic solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Get Free Consultation
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/20 border">
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
