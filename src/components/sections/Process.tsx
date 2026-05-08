"use client";

import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { number: "01", title: "Understand your business & goals" },
    { number: "02", title: "Build a tailored solution" },
    { number: "03", title: "Launch, optimize, and scale" },
  ];

  return (
    <section className="bg-surface py-20 md:py-24 border-y border-gray-100">
      <div className="container mx-auto max-w-[1000px] px-6 md:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Simple Process. Real Results.
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shadow-md border-4 border-surface">
                {step.number}
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mt-4">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
