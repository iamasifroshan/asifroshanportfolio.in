"use client";

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
import { useRef } from 'react';

const projects = [
  {
    title: "Ghost Buster",
    category: "FinTech + OCR",
    description: "An intelligent subscription management platform that uses OCR technology to detect free-trial subscriptions from screenshots and automatically remind users before auto-renewal charges occur.",
    features: ["OCR text extraction", "Subscription tracking", "Smart reminders", "Calendar integration", "FinTech automation"],
    tech: ["Flutter", "Firebase", "OCR", "Dart"],
    repoUrl: "https://github.com/iamasifroshan/ghost-buster",
    color: "cyan"
  },
  {
    title: "Skill Sync",
    category: "AI Learning Platform",
    description: "An AI-assisted peer-to-peer learning platform that connects learners through intelligent skill matching and real-time collaboration.",
    features: ["AI Skill Matching", "Real-time Collaboration", "User Profiles", "Learning Communities"],
    tech: ["Next.js", "Node.js", "Express.js", "Firebase", "SQLite"],
    repoUrl: "https://github.com/iamasifroshan/skill-sync",
    color: "red"
  },
  {
    title: "Clinical Appointment Scheduling",
    category: "Healthcare Technology",
    description: "A clinic management solution that automates appointment booking, patient scheduling, and doctor management through a real-time system.",
    features: ["Appointment Booking", "Doctor Scheduling", "Patient Records", "Real-Time Updates"],
    tech: ["React", "Node.js", "Database Management"],
    repoUrl: "https://github.com/iamasifroshan/clinical-appointment-scheduling",
    color: "cyan"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative z-10 w-full perspective-1000"
    >
      <div 
        className={`glass-panel p-8 rounded-3xl h-full flex flex-col border border-white/10 relative overflow-hidden group
        ${project.color === 'cyan' ? 'hover:border-cyan-400/50 hover:box-glow-cyan' : 'hover:border-red-400/50 hover:box-glow-red'} transition-colors duration-500`}
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <span className={`text-xs font-mono px-3 py-1 rounded-full border ${project.color === 'cyan' ? 'text-cyan-400 border-cyan-400/30' : 'text-red-400 border-red-400/30'}`}>
              {project.category}
            </span>
            <div className="flex gap-3">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`transition-colors ${project.color === 'cyan' ? 'text-cyan-400 hover:text-cyan-300' : 'text-red-400 hover:text-red-300'}`}>
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`transition-colors ${project.color === 'cyan' ? 'text-cyan-400 hover:text-cyan-300' : 'text-red-400 hover:text-red-300'}`}><ExternalLink className="w-5 h-5" /></a>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4 font-mono tracking-wide">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.title}</a>
          </h3>
          
          <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-sm text-gray-500 font-bold mb-3 uppercase tracking-wider">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map(feature => (
                <li key={feature} className="text-sm text-gray-300 flex items-center gap-2">
                  <ArrowRight className={`w-3 h-3 ${project.color === 'cyan' ? 'text-cyan-400' : 'text-red-400'}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
            {project.tech.map(tech => (
              <span key={tech} className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 inline-block mb-4">
            SYSTEM.PROJECTS()
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-red-400 mx-auto rounded-full box-glow-red"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={project.title} className={index === 2 ? "lg:col-span-2 lg:w-1/2 lg:mx-auto" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
