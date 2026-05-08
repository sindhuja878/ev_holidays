import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Calendar, Users, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

const HeroTabs = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [microcopyIndex, setMicrocopyIndex] = useState(0);
  const navigate = useNavigate();
  
  const microcopies = [
    "Know Your Soul's Destination",
    "Reveal My Destination",
    "Discover My Escape",
    "Find My Matching Destination"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMicrocopyIndex((prev) => (prev + 1) % microcopies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/soul-destination');
    }, 1500); // Time to finish full-screen blur transition
  };

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#010801]/95 pointer-events-none flex flex-col items-center justify-center"
          >
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
               className="flex flex-col items-center"
             >
                <div className="w-16 h-16 rounded-full bg-[#2ECC71]/20 flex items-center justify-center mb-8 mx-auto animate-pulse shadow-[0_0_30px_rgba(46,204,113,0.3)] border border-[#2ECC71]/30">
                  <Sparkles className="w-8 h-8 text-[#2ECC71]" />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif italic text-white tracking-tight drop-shadow-2xl font-light">
                  Aligning with your soul...
                </h2>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto mt-16 px-4"
      >
        <motion.div 
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-2xl border border-[#2ECC71]/30 rounded-[3rem] p-3 flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 w-full"
        >
          {/* Ambient Inner Glow Pulse */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,204,113,0.1)_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite] pointer-events-none rounded-[3rem]" />
          
          {/* Interactive Search Input (Expanded to full width) */}
          <motion.div 
            onClick={handleSearchClick}
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.99 }}
            className="flex-1 bg-black/40 border border-[#2ECC71]/20 hover:border-[#2ECC71]/60 rounded-full px-8 py-5 flex items-center justify-between w-full group transition-all duration-700 cursor-pointer relative overflow-hidden shadow-[0_0_0_rgba(46,204,113,0)] hover:shadow-[0_0_40px_rgba(46,204,113,0.3)] hover:bg-[#2ECC71]/5"
          >
            {/* Elegant organic motion loop / Energy reflection */}
            <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-[#2ECC71]/10 to-transparent group-hover:animate-[spin_8s_linear_infinite] transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100" />
            
            {/* Glass sweep reflection effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[sweep_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Faint drifting particles */}
            <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none overflow-hidden z-0">
              <motion.div className="absolute top-[20%] left-[10%] w-1 h-1 bg-[#2ECC71] rounded-full blur-[1px]" animate={{ y: [-5, 5, -5], opacity: [0, 0.8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 bg-[#2ECC71]/70 rounded-full blur-[1px]" animate={{ y: [5, -5, 5], opacity: [0, 0.6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
              <motion.div className="absolute top-[50%] left-[60%] w-1 h-1 bg-white/50 rounded-full" animate={{ y: [-3, 3, -3], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
            </div>

            <div className="flex items-center gap-4 relative z-10 w-full">
              <Search className="w-6 h-6 text-[#2ECC71] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(46,204,113,0.5)]" />
              <span className="text-white/60 font-medium tracking-wide group-hover:text-white/90 transition-colors text-lg flex-1">
                Where should your next unforgettable story begin?
              </span>
            </div>
            
            <div className="w-10 h-10 rounded-full bg-[#2ECC71] flex items-center justify-center shadow-[0_0_20px_rgba(46,204,113,0.5)] group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-700 relative z-10 animate-[pulse_3s_ease-in-out_infinite]">
              <Sparkles className="w-5 h-5 text-[#010801]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Elegant Rotating Microcopy */}
        <div className="mt-4 h-6 relative flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={microcopyIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute text-sm font-medium tracking-widest text-[#2ECC71]/90 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {microcopies[microcopyIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-[#010801] text-center pt-24">
      
      {/* Image Background Layer with Cinematic Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=2000"
          alt="Lush green forest stream cinematic"
          className="w-full h-full object-cover opacity-90"
        />
        
        {/* Cinematic Emerald & Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-emerald-950/20 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        
        {/* Floating Ambient Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-white/30 rounded-full blur-[1px]"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 6 + 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <motion.div
           initial={{ opacity: 0, y: 40, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
           className="flex flex-col items-center"
        >
          <h1 className="text-[12vw] sm:text-[90px] md:text-[110px] lg:text-[130px] font-bold leading-[1.0] tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <span className="font-sans block drop-shadow-2xl">See the</span>
            <span className="font-serif italic block font-normal drop-shadow-2xl text-[#f4fcf6]">World,</span>
            <span className="font-sans block drop-shadow-2xl">Your Way</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-2xl max-w-4xl mt-12 leading-relaxed text-white/95 font-sans font-medium drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] flex flex-col gap-2 items-center text-center"
        >
          <p>From the misty hills of Northeast India to the turquoise lagoons of Mauritius, EV Holidays crafts journeys that stay with you forever.</p>
          <p className="text-white/70 mt-2 font-light tracking-wide">Every detail. Every destination. Every dream.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-12"
        >
          <button 
            onClick={() => navigate('/ai-planner')}
            className="relative group overflow-hidden bg-gradient-to-r from-[#2ECC71]/90 to-[#1e9650]/90 backdrop-blur-md border border-white/20 text-white rounded-full px-10 py-4 md:px-12 md:py-5 text-lg md:text-xl font-bold hover:scale-[1.02] active:scale-95 transition-all duration-500 shadow-[0_10px_40px_rgba(46,204,113,0.4)] hover:shadow-[0_15px_50px_rgba(46,204,113,0.6)] flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:animate-[sweep_2.5s_ease-in-out_infinite]" />
            <span className="relative z-10 tracking-wide drop-shadow-md">Plan with AI</span>
            <Sparkles className="w-5 h-5 relative z-10 drop-shadow-md group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
