import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Calendar, Users, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';
import videoBg from '../pages/video.mp4';

const HeroTabs = () => {
  const [activeTab, setActiveTab] = useState("Retreats");
  const navigate = useNavigate();
  const tabs = ["Retreats", "Incentives", "Events"];

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto mt-16 px-4"
    >
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 flex flex-col md:flex-row items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Left Side: Mock Search Input */}
        <div 
          onClick={() => navigate('/ai-planner')}
          className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between w-full group hover:bg-white/10 transition-colors cursor-pointer"
        >
           <div className="flex items-center gap-3">
             <Search className="w-5 h-5 text-brand-gold-end group-hover:scale-110 transition-transform" />
             <span className="text-white/60 font-medium tracking-wide">Where is your team going next?</span>
           </div>
           <div className="w-8 h-8 rounded-full bg-brand-gold-end flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
             <Sparkles className="w-4 h-4 text-brand-navy" />
           </div>
        </div>

        {/* Right Side: Tabs */}
        <div className="flex gap-1.5 bg-black/20 p-1.5 rounded-2xl w-full md:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2.5 rounded-xl font-bold transition-all duration-300 text-xs uppercase tracking-widest flex-1 md:flex-none",
                activeTab === tab 
                  ? "bg-brand-gold-end text-brand-navy shadow-lg" 
                  : "text-white/70 hover:bg-white/5 active:scale-95"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[110vh] w-full flex flex-col items-center justify-center pt-32 pb-40 px-6 overflow-hidden bg-brand-dark-sky text-center hero-gradient">
      
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-sky via-brand-dark-sky/20 to-brand-dark-sky pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-sky/60 via-brand-navy/30 to-brand-dark-sky/60 pointer-events-none" />
        
        {/* Lush Green Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0%,transparent_70%)] pointer-events-none mix-blend-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-end animate-pulse" />
            <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-[10px]">
              Trusted Travel Partner • Since Day One
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-[92px] lg:text-[110px] font-normal leading-[0.85] tracking-[-0.04em] text-white">
            <span className="font-sans font-black block">See The</span>
            <span className="font-serif italic -mt-2 block">World,</span>
            <span className="font-sans font-extralight opacity-80 block tracking-tight">Your Way.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl max-w-3xl mt-10 leading-relaxed text-white/70 font-sans"
        >
          From the misty hills of Northeast India to the turquoise lagoons of the Maldives — EV Holidays crafts journeys that stay with you forever. Every detail. Every destination. Every dream.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-12"
        >
          <button 
            onClick={() => navigate('/ai-planner')}
            className="bg-brand-gold-end text-brand-navy rounded-full px-12 py-5 text-sm font-black uppercase tracking-widest hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-brand-gold-end/40 flex items-center gap-3 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Plan with AI
              <Sparkles className="w-4 h-4" />
            </span>
          </button>
        </motion.div>

        {/* Integrated Hero Tabs */}
        <HeroTabs />
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
