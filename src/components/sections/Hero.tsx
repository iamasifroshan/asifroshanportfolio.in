"use client";

import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, Check } from 'lucide-react';
import TechOrbit from './TechOrbit';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';

// Optional: Keep Spline if we need it later, otherwise it's removed for the image.

export default function Hero() {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const [resumeDownloaded, setResumeDownloaded] = useState(false);
  const titleLetters = "ASIF ROSHAN".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <TechOrbit />
      
      <style>{`
        @keyframes sweep-bg {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh]">
        
        {/* Main Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center gap-6 max-w-4xl z-20"
        >
          <motion.p 
            className="text-sm md:text-lg text-cyan-400 font-mono tracking-[0.2em] uppercase font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            FULL STACK DEVELOPER &bull; MOBILE APP DEVELOPER &bull; AI ENTHUSIAST
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative group cursor-pointer"
          >
            <div className="relative transition-transform duration-500 ease-out group-hover:scale-[1.06]">
              {/* Base Cyan Text */}
              <h1 className="py-8 text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-red-400 drop-shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-opacity duration-500 group-hover:opacity-0 relative z-10 flex justify-center">
                {titleLetters.map((char, i) => (
                  <span 
                    key={i} 
                    className={`inline-block transition-transform duration-300 ease-out ${hoveredLetter === i ? '-translate-y-6 scale-[1.15]' : ''}`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              
              {/* Hover Gold Text */}
              <h1 className="py-8 absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#F7DC6F] to-[#FFD700] drop-shadow-[0_0_40px_rgba(255,215,0,0.6)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20 flex justify-center">
                {titleLetters.map((char, i) => (
                  <span 
                    key={i} 
                    className={`inline-block transition-transform duration-300 ease-out ${hoveredLetter === i ? '-translate-y-6 scale-[1.15]' : ''}`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>

              {/* Cinematic Shine Text Overlay */}
              <h1 
                className="py-8 absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30 flex justify-center pointer-events-auto"
                style={{
                  backgroundImage: 'linear-gradient(120deg, transparent 40%, rgba(255, 255, 255, 0.9) 50%, transparent 60%)',
                  backgroundSize: '200% auto',
                  animation: 'sweep-bg 2.5s ease-in-out infinite'
                }}
              >
                {titleLetters.map((char, i) => (
                  <span 
                    key={i} 
                    onMouseEnter={() => setHoveredLetter(i)}
                    onMouseLeave={() => setHoveredLetter(null)}
                    className={`inline-block transition-transform duration-300 ease-out ${hoveredLetter === i ? '-translate-y-6 scale-[1.15]' : ''}`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-white max-w-3xl leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            "Building Intelligent Digital Experiences For The Future"
          </motion.h2>

          <motion.p 
            className="text-gray-400 text-lg md:text-xl max-w-2xl glass-panel p-6 rounded-2xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Full Stack and Mobile Developer with experience building scalable web applications, mobile apps, AI-powered solutions, and modern digital products.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link href="#projects" className="glass-panel px-8 py-4 rounded-full font-bold text-cyan-400 hover:bg-cyan-950/30 transition-all flex items-center gap-2 box-glow-cyan group">
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Explore Projects
            </Link>
            <motion.a 
              href="/Asif%20Roshan%20Resume.pdf" 
              download="Asif_Roshan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Asif Roshan Resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setResumeDownloaded(true);
                setTimeout(() => setResumeDownloaded(false), 2500);
              }}
              className={`glass-panel px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center min-w-[230px] gap-2 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] ${resumeDownloaded ? 'text-green-400 border border-green-400/50 shadow-[0_0_20px_rgba(74,222,128,0.2)]' : 'text-white'}`}
            >
              {resumeDownloaded ? <Check className="w-5 h-5" /> : <Download className="w-5 h-5" />}
              {resumeDownloaded ? <span>Downloaded!</span> : <span>Download Resume</span>}
            </motion.a>
            <Link href="#contact" className="glass-panel px-8 py-4 rounded-full font-bold text-red-400 hover:bg-red-950/30 transition-all flex items-center gap-2 box-glow-red group">
              <Mail className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
