import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Awards from '@/components/sections/Awards';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
      
      <footer className="w-full py-6 border-t border-white/5 relative z-10 bg-black/20 backdrop-blur-sm mt-10">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="text-white font-bold text-lg font-sans">
            Asif Roshan
          </div>
          <p className="text-gray-500 font-mono text-sm">© 2026 Asif Roshan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/iamasifroshan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:-translate-y-1 transition-all bg-white/5 p-2.5 rounded-full border border-white/5 hover:border-cyan-400/50 group">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/asif-roshan-462426358/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,42,95,0.4)] hover:-translate-y-1 transition-all bg-white/5 p-2.5 rounded-full border border-white/5 hover:border-red-400/50 group">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:asifroshanasif52@gmail.com" aria-label="Email" className="text-gray-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:-translate-y-1 transition-all bg-white/5 p-2.5 rounded-full border border-white/5 hover:border-cyan-400/50 group">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
