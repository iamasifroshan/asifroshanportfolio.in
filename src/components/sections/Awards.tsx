"use client";

import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const certifications = [
  "SSC NASSCOM Digital 101",
  "Programming in C – Infosys Springboard",
  "Artificial Intelligence & Machine Learning",
  "Claude Code in Action",
  "Google Certified Student"
];

const achievements = [
  "Developed multiple award-winning Hackathon projects",
  "Top performer in AI & Data Science coursework",
  "Contributed to cutting-edge Open Source repositories",
  "Recognized for innovative solutions in UI/UX design"
];

export default function Awards() {
  return (
    <section id="awards" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Certifications */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white mb-4">
                CERTIFICATIONS
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  animate={{ y: [-5, 5, -5] }}
                  style={{ animationDuration: `${3 + index % 2}s` }}
                  className="glass-panel p-5 rounded-2xl border border-cyan-500/20 hover:box-glow-cyan transition-all flex items-center gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-950/50 border border-cyan-400/50 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg text-white font-mono">{cert}</h3>
                  
                  {/* Holographic scanning line effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_10px_#00f3ff]"
                      animate={{ left: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-right"
            >
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-l from-red-400 to-white mb-4 flex justify-end">
                ACHIEVEMENTS
              </h2>
              <div className="h-1 w-16 bg-gradient-to-l from-red-400 to-transparent rounded-full ml-auto"></div>
            </motion.div>

            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-6 rounded-2xl border border-red-500/20 hover:box-glow-red transition-all relative overflow-hidden group"
                >
                  <div className="flex gap-4">
                    <Trophy className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 font-medium text-lg leading-relaxed">{achievement}</p>
                  </div>

                  {/* Particle effects on hover (CSS implementation) */}
                  <div className="absolute top-0 left-1/2 w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-700 ease-out flex justify-center items-center opacity-0 group-hover:opacity-10 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400 via-transparent to-transparent blur-md"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
