import React, { useState } from "react";
import {
  Hexagon,
  Send,
  Zap,
  Rocket,
  BarChart3,
  CheckCircle,
  Target,
  Layers,
} from "lucide-react";

export default function FunnelBee() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => setIsSubmitted(true), 500);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-x-hidden overflow-y-auto bg-[#0A0A0A] font-sans text-white">
      {/* --- BACKGROUND LAYER ---
          Changed to fixed to prevent it from scrolling away or causing layout issues
      */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 blur-lg opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=2532&auto=format&fit=crop')",
        }}
      ></div>

      {/* Hexagon Pattern Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#F59E0B 1.5px, transparent 1.5px), radial-gradient(#F59E0B 1.5px, #0A0A0A 1.5px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      ></div>

      {/* Scrollable Content Wrapper 
          min-h-full ensures it fills the screen for centering, 
          but allows expansion for scrolling without double bars.
      */}
      <div className="relative z-10 flex min-h-full w-full flex-col items-center justify-center py-12 md:py-0">
        <div className="w-full max-w-5xl px-4 sm:px-6 flex flex-col items-center text-center">
          {/* Brand Badge */}
          <div className="animate-fade-in-down mb-8 md:mb-10 inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-[#1A1A1A]/80 border border-amber-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Hexagon
              size={16}
              className="text-amber-500 fill-amber-500/20 md:w-[18px] md:h-[18px]"
            />
            <span className="text-xs md:text-sm font-bold tracking-widest text-amber-50 uppercase">
              FunnelBee
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight">
            <span className="block text-white mb-1 md:mb-2 drop-shadow-xl">
              Launch. Distribute.
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 drop-shadow-sm">
              Scale Faster.
            </span>
          </h1>

          <p className="animate-fade-in delay-100 text-base sm:text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl leading-relaxed font-light px-2">
            The{" "}
            <span className="text-amber-400 font-semibold">
              AI-powered GTM engine
            </span>{" "}
            that automates your funnel from buzz to business.
          </p>

          {/* Replacement for Countdown: COMING SOON Text */}
          <div className="animate-fade-in delay-200 mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
              COMING SOON
            </h2>
          </div>

          {/* Email Capture Form */}
          <div className="animate-fade-in delay-300 w-full max-w-xs sm:max-w-md relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <div className="relative bg-[#0A0A0A] border border-amber-500/30 p-2 rounded-xl shadow-2xl">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <input
                    type="email"
                    placeholder="Enter your work email..."
                    className="flex-grow bg-[#171717] text-white placeholder-gray-500 px-4 py-3 outline-none rounded-lg border border-[#2A2A2A] focus:border-amber-500/50 transition-colors font-medium text-sm md:text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] whitespace-nowrap text-sm md:text-base"
                  >
                    Join Hive
                    <Send
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-2 py-3 text-amber-500 font-bold bg-[#171717] rounded-lg animate-pulse text-sm md:text-base">
                  <CheckCircle size={20} />
                  <span>You're in the hive!</span>
                </div>
              )}
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 mt-4 text-center font-medium tracking-wide">
              Get early access to the automation engine.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 w-full max-w-5xl opacity-90">
            {[
              {
                title: "GTM Automation",
                desc: "Launch campaigns instantly",
                icon: <Rocket size={20} />,
              },
              {
                title: "Smart Funnels",
                desc: "Optimize conversion paths",
                icon: <Layers size={20} />,
              },
              {
                title: "Rapid Scale",
                desc: "Distribute across channels",
                icon: <BarChart3 size={20} />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="animate-fade-in delay-500 flex flex-col items-center p-5 md:p-6 rounded-2xl bg-[#171717]/60 border border-white/5 backdrop-blur-md hover:bg-[#171717]/80 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-900/10 flex items-center justify-center text-amber-500 mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-1 font-sans text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer (Desktop Fixed) */}
        <footer className="absolute bottom-4 md:bottom-6 w-full text-center z-10 hidden md:block">
          <p className="text-[10px] md:text-xs text-gray-600 uppercase tracking-[0.2em] font-bold hover:text-amber-500 transition-colors cursor-default">
            © 2025 FunnelBee. All Rights Reserved.
          </p>
        </footer>

        {/* Footer (Mobile Scrolling) */}
        <footer className="mt-12 w-full text-center z-10 md:hidden pb-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
            © 2025 FunnelBee. All Rights Reserved.
          </p>
        </footer>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
}
