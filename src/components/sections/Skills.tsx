"use client";

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    color: "cyan",
    borderGlow: "box-glow-cyan",
    textColor: "text-cyan-400",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    title: "Backend Development",
    color: "red",
    borderGlow: "box-glow-red",
    textColor: "text-red-400",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 90 },
    ]
  },
  {
    title: "Mobile Development",
    color: "cyan",
    borderGlow: "box-glow-cyan",
    textColor: "text-cyan-400",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 90 },
      { name: "React Native", level: 75 },
      { name: "Android Studio", level: 85 },
    ]
  },
  {
    title: "Database & Cloud",
    color: "red",
    borderGlow: "box-glow-red",
    textColor: "text-red-400",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 95 },
    ]
  },
  {
    title: "Tools",
    color: "cyan",
    borderGlow: "box-glow-cyan",
    textColor: "text-cyan-400",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 95 },
      { name: "Docker", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Netlify", level: 85 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400 inline-block mb-4">
            SYSTEM.SKILLS()
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-400 to-cyan-400 mx-auto rounded-full box-glow-red"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              animate={{ y: [0, -10, 0] }}
              style={{ animationDuration: `${3 + index % 2}s` }}
              className={`glass-panel p-8 rounded-3xl border border-white/10 hover:${category.borderGlow} transition-all duration-500 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <h3 className={`text-2xl font-bold mb-6 font-mono tracking-wider ${category.textColor} flex items-center gap-2`}>
                <span className="text-white opacity-50">&lt;</span>
                {category.title}
                <span className="text-white opacity-50">/&gt;</span>
              </h3>

              <div className="space-y-5 relative z-10">
                {category.skills.map((skill, sIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className={`text-sm font-mono ${category.textColor}`}>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + sIndex * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full ${category.color === 'cyan' ? 'bg-cyan-400 shadow-[0_0_10px_#00f3ff]' : 'bg-red-400 shadow-[0_0_10px_#ff2a5f]'}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
