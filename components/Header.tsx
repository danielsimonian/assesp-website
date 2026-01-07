"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
    { href: "/torneios", label: "Torneios" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.svg"
                alt="ASSESP Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl text-primary-navy">ASSESP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-blue transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/parcerias"
              className="bg-gradient-to-r from-primary-blue to-primary-coral text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Seja Parceiro
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/parcerias"
              className="block mt-4 text-center bg-gradient-to-r from-primary-blue to-primary-coral text-white px-6 py-3 rounded-full font-medium"
              onClick={() => setIsOpen(false)}
            >
              Seja Parceiro
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
