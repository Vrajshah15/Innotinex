"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Trust() {
  const points = [
    "Custom solutions (not templates)",
    "Fast execution",
    "Focused on results, not just design",
    "Direct communication & support",
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-[800px] px-6 md:px-8">
        
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          
          {/* Decorative background circle */}
          <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-10 text-center">
              Built for Small Businesses Like Yours
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
              >
                <CheckCircle2 className="text-accent shrink-0" size={24} />
                <span className="font-medium">{point}</span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
