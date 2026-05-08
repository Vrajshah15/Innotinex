"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Clock, SearchX } from "lucide-react";

const points = [
  { text: "Not getting enough leads or inquiries?", icon: <TrendingDown className="text-accent" /> },
  { text: "Managing work manually and wasting time?", icon: <Clock className="text-accent" /> },
  { text: "No proper system to track customers or operations?", icon: <AlertCircle className="text-accent" /> },
  { text: "Tried marketing but didn’t see real results?", icon: <SearchX className="text-accent" /> },
];

export function Problem() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="container mx-auto max-w-[800px] px-6 md:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Struggling to Grow Your Business Online?
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-col gap-6 text-left">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                {point.icon}
              </div>
              <p className="text-lg font-medium text-primary-text">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 border-t border-gray-200 pt-8"
        >
          <p className="font-heading text-xl font-bold text-primary">
            You don’t need more tools — you need the right system.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
