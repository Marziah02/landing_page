import React, { useState, useEffect } from "react";
import { Mail, ArrowRight, BookOpen, PenTool, Feather } from "lucide-react";

const StoryMasterPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  // Using a thematic placeholder image since I cannot access the local file directly.
  // This URL can be replaced with your specific image URL.
  const bgImage = "/storymaster.png";

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden font-sans text-white">
      {/* Background Layer with Blur */}
      {/* We scale it up slightly (scale-110) to prevent blurred edges from showing white gaps */}
      <div
        className="absolute inset-0 z-0 scale-110 filter blur-sm bg-cover  bg-no-repeat transition-transform duration-[20s] hover:scale-125"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />

      {/* Dark Overlay for Readability - Using a warm dark brown tint to match StoryMaster vibe */}
      <div className="absolute inset-0 z-0 bg-[#1a0f0a]/80" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a0f0a] to-transparent z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a0f0a] to-transparent z-10 opacity-60" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-12 flex flex-col items-center text-center space-y-8 animate-fade-in-up">
        {/* Logo / Brand Area */}
        <div className="flex items-center space-x-2 text-orange-400 mb-4 animate-bounce-slow">
          <img src="/StoryMaster_color.svg" alt="" className="h-10" />
          <span className="text-2xl font-bold tracking-wide text-orange-100">
            StoryMaster AI<span className="text-orange-500">™</span>
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg ">
          We Are Coming Soon
        </h1>

        <p className="text-xl md:text-2xl text-orange-100/80 max-w-2xl font-light leading-relaxed">
          Write, Edit & Publish Your Book in Minutes.
          <span className="block mt-2 text-base md:text-lg opacity-70">
            The ultimate AI-powered storytelling platform is almost here.
          </span>
        </p>

        {/* CTA / Notify Form */}
        <div className="w-full max-w-md mt-8">
          {isSubmitted ? (
            <div className="flex items-center justify-center p-4 bg-green-500/20 border border-green-500/30 rounded-full text-green-200 animate-fade-in">
              <span className="flex items-center gap-2">
                <BookOpen size={20} />
                You're on the list! We'll verify your chapter one shortly.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex shadow-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-orange-200/50">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="block w-full pl-11 pr-32 py-4 bg-[#2a1c15]/90 border border-orange-900/50 rounded-full text-orange-100 placeholder-orange-200/30 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  Notify Me
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
          <p className="mt-4 text-xs text-orange-200/40">
            Be the first to know when StoryMaster launches. No spam, just
            stories.
          </p>
        </div>

        {/* Feature Teasers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
          {[
            {
              icon: <PenTool className="text-orange-400" />,
              title: "AI Co-Author",
              desc: "Draft chapters in seconds",
            },
            {
              icon: <BookOpen className="text-orange-400" />,
              title: "Publish Everywhere",
              desc: "Export to Kindle & PDF",
            },
            {
              icon: <Feather className="text-orange-400" />,
              title: "Cover Design",
              desc: "Create stunning visuals",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
            >
              <div className="p-3 bg-orange-900/30 rounded-full ring-1 ring-orange-500/20 mb-2">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-orange-100">{feature.title}</h3>
              <p className="text-sm text-orange-200/50">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 z-10 text-orange-200/30 text-sm">
        &copy; {new Date().getFullYear()} StoryMaster AI. All rights reserved.
      </footer>

      {/* Custom Styles for Tailwind config emulation */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default StoryMasterPage;
