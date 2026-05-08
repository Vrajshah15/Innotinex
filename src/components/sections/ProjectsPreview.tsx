"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function ProjectsPreview() {
  const projects = [
    "Smart business automation systems",
    "Real-time communication platforms",
    "Custom tools for local businesses",
  ];

  return (
    <section className="bg-surface py-20 md:py-24" id="projects">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
              What We&apos;re Building
            </h2>
            <p className="text-secondary-text text-lg">
              We&apos;re currently working on innovative solutions. Here is a sneak peek at what&apos;s coming:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline">View Projects (Coming Soon)</Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
                <span className="font-heading font-medium text-gray-400 group-hover:text-accent transition-colors z-10">Concept Showcase</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-primary">{project}</h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-accent font-medium opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <span>Learn more</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
