import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-zinc-950/80 backdrop-blur border-b border-zinc-800/60 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 rounded-full shadow-lg" />
          <span>InCorp</span>
        </Link>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-white transition-colors text-sm font-medium px-2 py-1 rounded"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:from-blue-400 hover:via-cyan-400 hover:to-blue-500 transition-all">
            Get Started
          </Button>
        </div>
        {/* Mobile menu button (not functional yet) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </Button>
        </div>
      </div>
    </header>
  );
} 