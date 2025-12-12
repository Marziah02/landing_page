import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  FileText,
  CheckSquare,
  Users,
  Send,
  CheckCircle,
  Activity,
  Calendar,
  Clock,
} from "lucide-react";

// --- Particle Background Component (Shared 10x Galaxy Style) ---
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.1;
        this.speedX = Math.random() * 0.3 - 0.15; // Slower for "slowly moving" request
        this.speedY = Math.random() * 0.3 - 0.15;
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
        ctx.fillStyle = `rgba(165, 124, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        // Slightly fewer particles for a cleaner look
        particles.push(new Particle());
      }
    };

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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50"
    />
  );
};

// --- Main App Component ---
export default function MeetingPilotPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans selection:bg-[#5AE3FF] selection:text-black overflow-x-hidden relative">
      {/* Background Elements */}
      <ParticleBackground />

      {/* Ambient Glows - Adjusted for #5AE3FF -> #A57CFF theme */}
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#5AE3FF] rounded-full blur-[130px] opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#A57CFF] rounded-full blur-[130px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation / Header */}
        <header className="px-6 py-6 flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#5AE3FF] to-[#A57CFF] flex items-center justify-center shadow-[0_0_15px_rgba(90,227,255,0.3)]">
              <Users className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              MeetingPilot.ai
            </span>
          </div>
          <div className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#A57CFF] tracking-wider uppercase">
            Beta Access
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center px-4 pt-10 pb-20 text-center max-w-5xl mx-auto w-full">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#A57CFF] animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">
              Coming Soon
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up delay-100 relative z-10">
            <span className="bg-gradient-to-r from-[#5AE3FF] via-[#7D8FFF] to-[#A57CFF] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(90,227,255,0.25)]">
              MeetingPilot.ai
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up delay-200">
            AI that listens, understands, and transforms every meeting into{" "}
            <br className="hidden md:block" />
            <span className="text-white font-medium">instant clarity.</span>
          </p>

          {/* Holographic Meeting Icon Visualization */}
          <div className="relative w-full max-w-lg h-64 md:h-80 mb-16 mx-auto animate-fade-in-up delay-300 flex items-center justify-center">
            {/* Center Core */}
            <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-[#1A1A24] to-[#05050A] border border-white/10 shadow-[0_0_60px_rgba(90,227,255,0.15)] flex items-center justify-center animate-pulse-slow">
              <div className="absolute inset-0 rounded-full border border-[#5AE3FF]/30 animate-spin-slow-reverse border-t-transparent border-l-transparent"></div>
              <div className="absolute inset-2 rounded-full border border-[#A57CFF]/30 animate-spin-slow border-b-transparent border-r-transparent"></div>
              <Mic className="text-[#5AE3FF] w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_10px_rgba(90,227,255,0.5)]" />
            </div>

            {/* Static Floating Elements (Replaced Orbiting Elements) */}
            <div className="absolute inset-0">
              {/* Top - Transcription */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-[#12121A]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3 shadow-lg animate-float">
                <Activity className="w-4 h-4 text-[#A57CFF]" />
                <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#A57CFF] w-2/3 animate-pulse"></div>
                </div>
              </div>

              {/* Bottom Right - Tasks */}
              <div className="absolute bottom-10 right-0 md:right-10 bg-[#12121A]/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-lg flex items-center gap-2 animate-float-delayed">
                <div className="w-3 h-3 rounded-full border border-[#5AE3FF] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#5AE3FF] rounded-full"></div>
                </div>
                <div className="w-20 h-1.5 bg-white/10 rounded-full"></div>
              </div>

              {/* Bottom Left - Calendar */}
              <div className="absolute bottom-10 left-0 md:left-10 bg-[#12121A]/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-lg animate-float">
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Floating Avatars (Static positions relative to container) */}
            <div className="absolute top-10 left-10 md:left-20 w-10 h-10 rounded-full bg-[#1A1A24] border border-white/10 flex items-center justify-center animate-float-delayed">
              <Users className="w-4 h-4 text-gray-400" />
            </div>
            <div className="absolute bottom-28 right-10 md:right-10 w-12 h-12 rounded-full bg-[#1A1A24] border border-[#5AE3FF]/30 flex items-center justify-center shadow-[0_0_15px_rgba(90,227,255,0.15)] animate-float">
              <Clock className="w-5 h-5 text-[#5AE3FF]" />
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <circle
                cx="50%"
                cy="50%"
                r="30%"
                fill="none"
                stroke="#5AE3FF"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#A57CFF"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            </svg>
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            A powerful AI meeting assistant that captures notes, tasks,
            decisions, and follow-ups -{" "}
            <span className="text-[#5AE3FF]">automatically.</span>
          </p>

          {/* Email Capture */}
          <div className="w-full max-w-md mx-auto mb-24">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5AE3FF] to-[#A57CFF] rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
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
                  Join our early-access list and unlock exclusive launch
                  benefits.
                </p>
              </form>
            ) : (
              <div className="bg-[#5AE3FF]/10 border border-[#5AE3FF]/30 p-6 rounded-xl flex flex-col items-center animate-fade-in">
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
                icon: <FileText className="w-6 h-6 text-[#5AE3FF]" />,
                title: "Smart Meeting Notes",
                desc: "Accurate, structured notes generated in seconds after every meeting.",
              },
              {
                icon: <CheckSquare className="w-6 h-6 text-[#A57CFF]" />,
                title: "Task & Follow-Up Automation",
                desc: "Creates tasks, assigns owners, and sends follow-up messages automatically.",
              },
              {
                icon: <Mic className="w-6 h-6 text-[#8B9CFF]" />,
                title: "Speaker Insights",
                desc: "Identifies speakers, tracks key points, and highlights decisions made.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors text-left group"
              >
                <div className="w-12 h-12 bg-[#1A1A24] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
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
              Why MeetingPilot.ai
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Forget manual notes, typing summaries, or missing action items.
              <br />
              <span className="text-[#A57CFF]">
                MeetingPilot automates the entire post-meeting workflow so teams
                stay aligned and efficient.
              </span>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-white/5 bg-[#020205]">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-bold text-white mb-1">MeetingPilot.ai</div>
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

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-veryslow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(0.98); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; animation-delay: 1s; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-spin-veryslow { animation: spin-veryslow 30s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }

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
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
