"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white/50 backdrop-blur-sm border-b border-transparent"}`}>
      <div className="container mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-heading text-2xl font-bold tracking-tight text-primary transition-transform group-hover:scale-105">
            IONNETIX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="relative text-sm font-medium text-secondary-text transition-colors hover:text-accent group py-2">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#projects" className="relative text-sm font-medium text-secondary-text transition-colors hover:text-accent group py-2">
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="relative text-sm font-medium text-secondary-text transition-colors hover:text-accent group py-2">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Action */}
        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden md:block">
            <Button variant="primary" size="default">Get Quote</Button>
          </Link>
          {/* Mobile Menu Toggle could go here later */}
        </div>

      </div>
    </header>
  );
}
