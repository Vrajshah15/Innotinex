"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, LineChart, Bot } from "lucide-react";

export function Solution() {
  const solutions = [
    {
      title: "High-Converting Websites",
      description: "Websites designed to turn visitors into real customers.",
      icon: <LayoutTemplate size={32} className="text-white" />,
      color: "bg-primary"
    },
    {
      title: "Digital Marketing That Brings Leads",
      description: "Strategies focused on actual inquiries — not vanity metrics.",
      icon: <LineChart size={32} className="text-white" />,
      color: "bg-accent"
    },
    {
      title: "AI Automation for Your Business",
      description: "Save time by automating repetitive tasks and workflows.",
      icon: <Bot size={32} className="text-white" />,
      color: "bg-primary"
    }
  ];

  return (
    <section className="bg-white py-20 md:py-24" id="services">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
            We Build Systems That Actually Work
          </h2>
          <p className="text-lg text-secondary-text">
            We don’t just create websites or run ads. We build complete solutions that help your business grow and run efficiently.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col gap-6 rounded-2xl bg-surface p-8 shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${solution.color} shadow-lg`}>
                {solution.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {solution.title}
                </h3>
                <p className="text-secondary-text leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
