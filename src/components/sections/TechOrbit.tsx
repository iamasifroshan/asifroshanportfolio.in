"use client";

const techStack = [
  "React.js", "Next.js", "JavaScript", "TypeScript",
  "Node.js", "Express.js", "Flutter", "Dart",
  "MongoDB", "Firebase", "MySQL", "PostgreSQL",
  "Docker", "GitHub"
];

export default function TechOrbit() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
      <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full border border-cyan-500/10" style={{ animation: 'spin 60s linear infinite' }}>
        {techStack.map((tech, i) => {
          const angle = (i / techStack.length) * Math.PI * 2;
          const left = 50 + Math.cos(angle) * 50;
          const top = 50 + Math.sin(angle) * 50;

          return (
            <div
              key={tech}
              className="absolute flex items-center justify-center"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div 
                className="text-[10px] md:text-sm font-mono text-cyan-300 glass-panel px-3 py-1 rounded-full whitespace-nowrap"
                style={{ animation: 'spin 60s linear reverse infinite' }}
              >
                {tech}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Inner orbit */}
      <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] rounded-full border border-red-500/10" style={{ animation: 'spin 40s linear reverse infinite' }}>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
