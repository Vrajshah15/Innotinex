"use client";

import React from "react";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-2">
              Next-Gen Business Solutions
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-heading text-4xl font-extrabold tracking-tight text-primary-text sm:text-5xl lg:text-6xl leading-[1.1]">
              We Help Small Businesses <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Get More Customers</span> & Automate Work
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-secondary-text max-w-xl leading-relaxed">
              Custom websites, digital marketing, and AI-powered automation built to grow your business — not just look good.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col w-full sm:flex-row gap-4 mt-4">
              <Button size="lg" variant="primary" className="w-full sm:w-auto hover:scale-105 transition-transform">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-primary/5">
                Chat on WhatsApp
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4 text-sm text-secondary-text">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-surface flex items-center justify-center text-[10px] font-bold text-primary shadow-sm z-10`}>
                    ★
                  </div>
                ))}
              </div>
              <p>Trusted by 100+ businesses</p>
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Abstraction */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none h-[400px] md:h-[500px] rounded-[2rem] flex items-center justify-center perspective-[1000px]"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/10 rounded-[2rem] transform-style-3d border border-white/20 backdrop-blur-sm shadow-2xl">
               {/* Decorative grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-[2rem]"></div>
             </div>

            <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40"
              ></motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-primary/30"
              ></motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div
                   animate={{ y: [-10, 10, -10] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="w-24 h-24 sm:w-32 sm:h-32 bg-white shadow-2xl rounded-2xl flex items-center justify-center border border-gray-100"
                 >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-xl shadow-inner flex items-center justify-center">
                       <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                    </div>
                 </motion.div>
              </div>

               {/* Floating elements */}
               <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-50 flex items-center justify-center"
               >
                 <div className="w-8 h-8 rounded bg-accent/20"></div>
               </motion.div>

               <motion.div
                  animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-10 -left-6 w-20 h-12 bg-white rounded-xl shadow-lg border border-gray-50 flex items-center justify-center"
               >
                 <div className="w-12 h-4 rounded-full bg-primary/20"></div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
