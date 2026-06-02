"use client";

import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Terminal, Code2, Cpu, Award } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: 1, suffix: "+", icon: Terminal, color: "text-cyan-400", shadow: "box-glow-cyan" },
  { label: "Major Projects", value: 3, suffix: "+", icon: Code2, color: "text-red-400", shadow: "box-glow-red" },
  { label: "Technologies", value: 10, suffix: "+", icon: Cpu, color: "text-white", shadow: "shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
  { label: "Certifications", value: 5, suffix: "+", icon: Award, color: "text-cyan-400", shadow: "box-glow-cyan" },
];

function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.floor(value).toString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-400 inline-block mb-4">
            SYSTEM.ABOUT()
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-red-400 mx-auto rounded-full box-glow-cyan"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-400 rounded-br-3xl"></div>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400 animate-pulse">●</span> INITIALIZING PROFILE
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-mono">
              I am <span className="text-cyan-400 font-bold">Asif Roshan</span>, a passionate Full Stack and Mobile Developer currently pursuing B.Tech in Artificial Intelligence and Data Science.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-mono">
              I enjoy building scalable applications, solving real-world problems through technology, and creating seamless digital experiences.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed font-mono">
              My interests include <span className="text-red-400">AI-powered products</span>, web development, mobile applications, automation, and innovative software solutions.
            </p>

            {/* Education Timeline (Simplified inside About) */}
            <div className="mt-10 border-l-2 border-cyan-500/30 pl-6 space-y-6 relative">
              <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-cyan-400 via-red-400 to-transparent"></div>
              
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-400 box-glow-cyan"></div>
                <h4 className="text-cyan-400 font-bold text-lg">B.Tech in AI & Data Science</h4>
                <p className="text-gray-400 text-sm">Present</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className={`glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-white/5 group relative overflow-hidden`}
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <stat.icon className={`w-10 h-10 mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                <h4 className={`text-4xl md:text-5xl font-black mb-2 ${stat.color} ${stat.shadow} font-mono`}>
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
