import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Wrench,
  Bot,
  Send,
  CheckCircle,
  Chrome,
  Cpu,
  Puzzle,
} from "lucide-react";

// --- Particle Background Component ---
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(165, 124, 255, ${this.opacity})`; // Using the brand purple for stars
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Init particles
    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

// --- Main App Component ---
export default function ExtensionLabPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans selection:bg-[#A57CFF] selection:text-white overflow-x-hidden relative">
      {/* Background Elements */}
      <ParticleBackground />

      {/* Ambient Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#A57CFF] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#5AE3FF] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation / Header */}
        <header className="px-6 py-6 flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A57CFF] to-[#5AE3FF] flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              ExtensionLab.ai
            </span>
          </div>
          <div className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#5AE3FF] tracking-wider uppercase">
            Beta Access
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center px-4 pt-10 pb-20 text-center max-w-5xl mx-auto w-full">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#5AE3FF] animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">
              Coming Soon
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up delay-100">
            <span className="bg-gradient-to-r from-[#A57CFF] via-[#8B9CFF] to-[#5AE3FF] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(165,124,255,0.3)]">
              ExtensionLab.ai
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up delay-200">
            Build AI-powered browser extensions in minutes -{" "}
            <br className="hidden md:block" />
            <span className="text-white font-medium">
              without writing a single line of code.
            </span>
          </p>

          {/* Abstract Browser Window Visual */}
          <div className="relative w-full max-w-4xl h-64 md:h-80 mb-16 mx-auto perspective-1000 animate-fade-in-up delay-300 group">
            {/* The Window */}
            <div className="absolute inset-0 bg-[#0A0A12]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:border-[#A57CFF]/30">
              {/* Browser Header */}
              <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 mx-4 h-6 bg-white/5 rounded flex items-center px-3 text-xs text-gray-500 font-mono">
                  extensionlab.ai/builder
                </div>
              </div>
              {/* Browser Content Mockup */}
              <div className="p-8 flex flex-col items-center justify-center h-full relative">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full opacity-50 blur-[1px] group-hover:blur-0 transition-all duration-500">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-20 bg-white/5 rounded-lg border border-white/5"
                    ></div>
                  ))}
                </div>

                {/* Floating "Magic" Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-[#A57CFF] to-[#5AE3FF] p-[1px] rounded-2xl shadow-[0_0_50px_rgba(165,124,255,0.4)] animate-float">
                    <div className="bg-[#12121A] px-6 py-4 rounded-2xl flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#A57CFF]/20 flex items-center justify-center text-[#A57CFF]">
                        <Bot size={20} />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-gray-400">Status</div>
                        <div className="text-white font-medium">
                          Generating Extension...
                        </div>
                      </div>
                      <div className="h-1 w-12 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-[#5AE3FF] animate-progress w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons around browser */}
            <div className="absolute -top-6 -right-6 md:-right-12 p-3 bg-[#1A1A24] border border-white/10 rounded-xl shadow-xl animate-float-delayed">
              <Chrome className="text-[#5AE3FF]" size={24} />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 p-3 bg-[#1A1A24] border border-white/10 rounded-xl shadow-xl animate-float">
              <Puzzle className="text-[#A57CFF]" size={24} />
            </div>
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            Your AI Extension Factory - create automation tools, research
            assistants, productivity boosters, and custom extensions instantly.
          </p>

          {/* Email Capture */}
          <div className="w-full max-w-md mx-auto mb-24">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#A57CFF] to-[#5AE3FF] rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex p-1 bg-[#0A0A12] rounded-lg border border-white/10">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-white px-4 py-3 outline-none placeholder:text-gray-600"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 whitespace-nowrap disabled:opacity-70"
                    >
                      {loading ? (
                        "Joining..."
                      ) : (
                        <>
                          Notify Me <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Join our exclusive beta list and unlock extension templates.
                </p>
              </form>
            ) : (
              <div className="bg-[#A57CFF]/10 border border-[#A57CFF]/30 p-6 rounded-xl flex flex-col items-center animate-fade-in">
                <CheckCircle className="text-[#5AE3FF] w-10 h-10 mb-2" />
                <h3 className="text-white font-bold text-lg">
                  You're on the list!
                </h3>
                <p className="text-gray-400 text-sm">
                  We'll notify you as soon as we launch.
                </p>
              </div>
            )}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-4 mb-32">
            {[
              {
                icon: <Zap className="w-6 h-6 text-[#5AE3FF]" />,
                title: "AI-Generated Extensions",
                desc: "Describe what you want - ExtensionLab builds the browser extension instantly.",
              },
              {
                icon: <Wrench className="w-6 h-6 text-[#A57CFF]" />,
                title: "Automate Daily Tasks",
                desc: "Create auto-fillers, scrapers, research tools, sidebars, and more.",
              },
              {
                icon: <Bot className="w-6 h-6 text-[#8B9CFF]" />,
                title: "No Coding Required",
                desc: "Drag-and-generate system powered by complex AI logic blocks.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors text-left group"
              >
                <div className="w-12 h-12 bg-[#1A1A24] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary Section */}
          <div className="w-full max-w-4xl mx-auto text-center border-t border-white/5 pt-20 mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why ExtensionLab.ai
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              The fastest way for founders, developers, and productivity lovers
              to create powerful Chrome extensions.
              <br />
              <span className="text-[#5AE3FF]">
                AI handles the code - you focus on the idea.
              </span>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-white/5 bg-[#020205]">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              {/* <div className="font-bold text-white mb-1">ExtensionLab.ai™</div> */}
              <div className="font-bold text-white mb-1">ExtensionLab.ai</div>
              <div className="text-xs text-gray-600">All Rights Reserved.</div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="text-[#5AE3FF] font-semibold text-sm mb-1">
                Launching in 2025
              </div>
              <div className="text-xs text-gray-500">
                Built by 10x Galaxy - AI Venture Studio
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Styles for custom animations not in default Tailwind */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
