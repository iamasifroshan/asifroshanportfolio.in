"use client";

import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const GlobeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const ContactCard = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) => {
  const content = (
    <div className="glass-panel p-4 rounded-xl flex items-center gap-4 group cursor-pointer border border-white/5 hover:border-cyan-400/50 transition-all hover:bg-white/5 hover:-translate-y-1 box-glow-cyan h-full">
      <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors group-hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] border border-cyan-500/20 shrink-0">
        {icon}
      </div>
      <div className="overflow-hidden">
        <p className="text-gray-400 text-xs font-mono mb-1">{label}</p>
        <p className="text-white font-bold font-mono text-sm group-hover:text-cyan-200 transition-colors truncate">{value}</p>
      </div>
    </div>
  );

  return href !== "#" ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block w-full h-full">
      {content}
    </a>
  ) : (
    <div className="block w-full h-full">{content}</div>
  );
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isHovering, setIsHovering] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 relative z-10 overflow-hidden">
      {/* Decorative background map lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at center, #00f3ff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Social Orbit System */}
        <div className="relative h-[450px] flex items-center justify-center mb-16 mt-4">
          {/* Holographic Earth / Core Placeholder */}
          <div className="absolute w-32 h-32 rounded-full border border-cyan-400/50 bg-cyan-900/20 box-glow-cyan flex items-center justify-center z-10 animate-pulse">
            <div className="text-center">
              <span className="block text-cyan-400 font-bold font-mono text-xl">ASIF</span>
              <span className="block text-red-400 font-bold font-mono text-xs">HQ</span>
            </div>
          </div>

          {/* Inner Orbit (250px) */}
          <div className="absolute w-[250px] h-[250px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none">
            <a 
              href="https://github.com/iamasifroshan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyan-400 hover:text-white box-glow-cyan hover:!shadow-[0_0_25px_rgba(0,243,255,0.8),inset_0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300 animate-[spin_20s_linear_reverse_infinite] group cursor-pointer pointer-events-auto"
            >
              <GithubIcon />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-cyan-500/50 text-cyan-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-mono shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                GitHub
              </span>
            </a>
            <a 
              href="https://www.linkedin.com/in/asif-roshan-462426358/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="absolute bottom-0 left-1/2 -ml-6 -mb-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-red-400 hover:text-white box-glow-red hover:!shadow-[0_0_25px_rgba(255,42,95,0.8),inset_0_0_15px_rgba(255,42,95,0.4)] transition-all duration-300 animate-[spin_20s_linear_reverse_infinite] group cursor-pointer pointer-events-auto"
            >
              <LinkedinIcon />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-red-500/50 text-red-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-mono shadow-[0_0_10px_rgba(255,42,95,0.3)]">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Outer Orbit (350px) */}
          <div className="absolute w-[350px] h-[350px] border border-cyan-500/10 rounded-full animate-[spin_30s_linear_reverse_infinite] pointer-events-none">
            <a 
              href="https://asifroshanportfolio.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="absolute top-1/2 -left-6 -mt-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyan-400 hover:text-white box-glow-cyan hover:!shadow-[0_0_25px_rgba(0,243,255,0.8),inset_0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300 animate-[spin_30s_linear_infinite] group cursor-pointer pointer-events-auto"
            >
              <GlobeIcon />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-cyan-500/50 text-cyan-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-mono shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                Portfolio
              </span>
            </a>
            <a 
              href="mailto:asifroshanasif52@gmail.com"
              aria-label="Email"
              className="absolute top-1/2 -right-6 -mt-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-red-400 hover:text-white box-glow-red hover:!shadow-[0_0_25px_rgba(255,42,95,0.8),inset_0_0_15px_rgba(255,42,95,0.4)] transition-all duration-300 animate-[spin_30s_linear_infinite] group cursor-pointer pointer-events-auto"
            >
              <Mail className="w-5 h-5" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-red-500/50 text-red-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-mono shadow-[0_0_10px_rgba(255,42,95,0.3)]">
                Email
              </span>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-10">
              <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-12 h-[2px] bg-cyan-400 box-glow-cyan"></span>
                GET IN TOUCH
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-400">great together.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Have a project in mind, a startup idea, freelance opportunity, internship, or collaboration? Feel free to reach out. I'm always excited to work on innovative web, mobile, and AI-powered solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactCard icon={<Mail className="w-5 h-5" />} label="EMAIL ME" value="asifroshanasif52@gmail.com" href="mailto:asifroshanasif52@gmail.com" />
              <ContactCard icon={<Phone className="w-5 h-5" />} label="CALL ME" value="+91 9444468014" href="tel:+919444468014" />
              <ContactCard icon={<GithubIcon />} label="GITHUB" value="iamasifroshan" href="https://github.com/iamasifroshan" />
              <ContactCard icon={<LinkedinIcon />} label="LINKEDIN" value="asif-roshan-462426358" href="https://www.linkedin.com/in/asif-roshan-462426358/" />
              <ContactCard icon={<GlobeIcon />} label="PORTFOLIO" value="asifroshanportfolio.in" href="https://asifroshanportfolio.in" />
              <ContactCard icon={<MapPin className="w-5 h-5" />} label="LOCATION" value="Dharmapuri, Tamil Nadu" href="#" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Holographic Contact Form */}
          <div className="relative">
            {/* Holographic Earth Placeholder gently floating behind the form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-cyan-400/10 bg-cyan-900/5 box-glow-cyan flex items-center justify-center z-0 animate-[spin_40s_linear_infinite] pointer-events-none blur-3xl opacity-50">
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-cyan-500/20 z-10 backdrop-blur-xl bg-black/60 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-red-400"></div>

              <h3 className="text-2xl font-bold text-white mb-8 font-mono flex items-center gap-2">
                <span className="text-cyan-400 animate-ping">_</span> SECURE_CHANNEL
              </h3>

              <form className="space-y-8 mt-4" onSubmit={async (e) => {
                e.preventDefault();
                
                try {
                  const response = await fetch('https://formspree.io/f/xaqkgdeo', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formState)
                  });
                  
                  if (response.ok) {
                    setIsSubmitted(true);
                    setTimeout(() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }, 3000);
                  }
                } catch (error) {
                  console.error("Form submission error:", error);
                }
              }}>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder=" "
                    className="w-full bg-black/20 border-b-2 border-white/20 focus:border-cyan-400 outline-none py-3 text-white transition-colors peer font-mono text-sm"
                    required
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-3 text-gray-400 font-mono text-sm pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan-400"
                  >
                    IDENTIFIER [NAME]
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder=" "
                    className="w-full bg-black/20 border-b-2 border-white/20 focus:border-red-400 outline-none py-3 text-white transition-colors peer font-mono text-sm"
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-3 text-gray-400 font-mono text-sm pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-red-400 peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-red-400"
                  >
                    COMM_LINK [EMAIL]
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    placeholder=" "
                    className="w-full bg-black/20 border-b-2 border-white/20 focus:border-cyan-400 outline-none py-3 text-white transition-colors peer font-mono text-sm"
                    required
                  />
                  <label 
                    htmlFor="subject" 
                    className="absolute left-0 top-3 text-gray-400 font-mono text-sm pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan-400"
                  >
                    SUBJECT [TOPIC]
                  </label>
                </div>

                <div className="relative">
                  <textarea 
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder=" "
                    rows={4}
                    className="w-full bg-black/20 border-b-2 border-white/20 focus:border-cyan-400 outline-none py-3 text-white transition-colors peer font-mono text-sm resize-none"
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 top-3 text-gray-400 font-mono text-sm pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan-400"
                  >
                    TRANSMISSION [MESSAGE]
                  </label>
                </div>

                <motion.button
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold font-mono tracking-widest text-white relative overflow-hidden group/btn flex items-center justify-center gap-3 border transition-colors ${isSubmitted ? 'border-green-400 box-glow-green text-green-400' : 'border-cyan-400/50 hover:border-cyan-400 box-glow-cyan'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 to-red-900/50 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">{isSubmitted ? 'TRANSMISSION SENT' : 'INITIATE TRANSFER'}</span>
                  {!isSubmitted && <Send className={`w-5 h-5 relative z-10 transition-transform ${isHovering ? 'translate-x-2 -translate-y-2' : ''}`} />}
                </motion.button>
              </form>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
