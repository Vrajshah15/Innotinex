import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-heading text-2xl font-bold tracking-tight">
              IONNETIX
            </span>
            <p className="text-sm text-gray-300 max-w-xs">
              Custom websites, digital marketing, and AI-powered automation built to grow your business.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <Link href="#services" className="text-sm text-gray-300 hover:text-accent transition-colors">Services</Link>
            <Link href="#projects" className="text-sm text-gray-300 hover:text-accent transition-colors">Projects</Link>
            <Link href="#contact" className="text-sm text-gray-300 hover:text-accent transition-colors">Contact</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-lg">Contact Info</h3>
            <a href="mailto:hello@ionnetix.com" className="text-sm text-gray-300 hover:text-accent transition-colors">hello@ionnetix.com</a>
            <p className="text-sm text-gray-300">+91 000 000 0000</p>
            <a href="#" className="text-sm text-accent font-medium hover:text-white transition-colors mt-2">Chat on WhatsApp &rarr;</a>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ionnetix Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
