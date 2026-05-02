import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-tight text-primary">
            IONNETIX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-secondary-text transition-colors hover:text-accent">
            Services
          </Link>
          <Link href="#projects" className="text-sm font-medium text-secondary-text transition-colors hover:text-accent">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium text-secondary-text transition-colors hover:text-accent">
            Contact
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
