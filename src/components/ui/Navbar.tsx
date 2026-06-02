"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 glass-panel border-b border-cyan-500/20 bg-black/40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-glow-cyan hover:scale-105 transition-transform">
          ASIF ROSHAN
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-wider font-mono text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full shadow-[0_0_8px_#00f3ff]"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button could be added here later if needed */}
        <div className="md:hidden">
          <span className="text-cyan-400 font-mono text-sm">MENU</span>
        </div>
      </div>
    </motion.header>
  );
}
