"use client";

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Python Developer Intern",
    company: "Arttifai Tech",
    date: "July 2025 – August 2025",
    color: "cyan",
    responsibilities: [
      "Developed Python applications",
      "Automated workflows",
      "Worked with APIs",
      "Improved system performance",
      "Database integration"
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Code Bonding",
    date: "May 2026 – June 2026",
    color: "red",
    responsibilities: [
      "Built responsive web applications",
      "Developed REST APIs",
      "Optimized databases",
      "Collaborated using Git/GitHub"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white inline-block mb-4">
            SYSTEM.EXPERIENCE()
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-white mx-auto rounded-full box-glow-cyan"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[20px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-red-400 to-cyan-400 opacity-50"
          ></motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`absolute left-[13px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full z-10 
                      ${exp.color === 'cyan' ? 'bg-cyan-400 box-glow-cyan' : 'bg-red-400 box-glow-red'}`}
                  ></motion.div>

                  {/* Desktop Date (Left or Right) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="inline-block glass-panel px-4 py-2 rounded-full text-sm font-mono text-gray-300"
                    >
                      {exp.date}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12 md:-order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                      className={`glass-panel p-8 rounded-3xl border border-white/10 group relative overflow-hidden
                        ${exp.color === 'cyan' ? 'hover:box-glow-cyan' : 'hover:box-glow-red'} transition-all duration-500`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Mobile Date */}
                      <div className="md:hidden inline-block glass-panel px-3 py-1 rounded-full text-xs font-mono text-gray-300 mb-4">
                        {exp.date}
                      </div>

                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className={`w-6 h-6 ${exp.color === 'cyan' ? 'text-cyan-400' : 'text-red-400'}`} />
                        <h3 className={`text-2xl font-bold font-mono ${exp.color === 'cyan' ? 'text-cyan-400' : 'text-red-400'}`}>
                          {exp.role}
                        </h3>
                      </div>
                      
                      <h4 className="text-xl text-white font-semibold mb-6 flex items-center gap-2">
                        <span className="text-gray-500">@</span> {exp.company}
                      </h4>

                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, rIndex) => (
                          <motion.li 
                            key={rIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + rIndex * 0.1 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-red-400'}`}></span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
