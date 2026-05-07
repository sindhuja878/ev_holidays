/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView, useMotionValue, useMotionTemplate } from 'motion/react';
import { 
  Plane, 
  Users, 
  MapPin, 
  Calendar, 
  ChevronRight,
  ChevronDown,
  Phone, 
  Mail, 
  Globe, 
  Award, 
  ShieldCheck, 
  Clock, 
  Briefcase, 
  Gift, 
  Presentation, 
  Palmtree, 
  Menu, 
  X,
  Star,
  Quote,
  Building2,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Target,
  FileCheck,
  Send,
  Handshake,
  Moon,
  Gem,
  Repeat,
  Sparkles
} from 'lucide-react';
import { cn } from './lib/utils';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Link, useNavigate } from 'react-router-dom';

// --- Components ---

// --- Proposal Modal Component ---
const ProposalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 rounded-full bg-gray-50 text-brand-navy hover:bg-gray-100 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="p-10 md:p-16">
              <div className="mb-10 text-center">
                <span className="text-brand-navy/40 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block text-brand-navy">Request a Custom Proposal</span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-navy">Elevate Your Team's Journey</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/60 flex items-center gap-2">
                      <Building2 className="w-3 h-3 text-brand-gold-end" />
                      Company Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Global Tech Solutions"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-gold-end/30 transition-all text-sm font-medium text-brand-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/60 flex items-center gap-2">
                      <Users className="w-3 h-3 text-brand-gold-end" />
                      Group Size
                    </label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-gold-end/30 transition-all text-sm font-medium appearance-none text-brand-navy">
                      <option>10 - 25 Participants</option>
                      <option>25 - 50 Participants</option>
                      <option>50 - 100 Participants</option>
                      <option>100+ Participants</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/60 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-brand-gold-end" />
                    Preferred Destination
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Vietnam, Bali, or Europe"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-gold-end/30 transition-all text-sm font-medium text-brand-navy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/60 flex items-center gap-2">
                      <Mail className="w-3 h-3 text-brand-gold-end" />
                      Work Email
                    </label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-gold-end/30 transition-all text-sm font-medium text-brand-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/60 flex items-center gap-2">
                      <Phone className="w-3 h-3 text-brand-gold-end" />
                      Contact Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 999 999 9999"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-gold-end/30 transition-all text-sm font-medium text-brand-navy"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy text-brand-gold-end py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-brand-navy/20 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-brand-gold-end/30 border-t-brand-gold-end rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          ) : (
            <div className="p-16 text-center">
              <div className="w-20 h-20 bg-brand-gold-end/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-brand-gold-end" />
              </div>
              <h2 className="text-3xl font-serif text-brand-navy mb-4">Request Received</h2>
              <p className="text-gray-500 font-medium mb-10">
                Thank you for choosing EV Holidays. One of our corporate travel specialists will review your requirements and reach out within 24 hours.
              </p>
              <button 
                onClick={onClose}
                className="bg-brand-navy text-white px-12 py-4 rounded-2xl font-bold text-sm shadow-xl"
              >
                Return to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// --- Testimonials Carousel Component ---
const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: "Mark Dawson",
      role: "Digital Nomad",
      destination: "Bali, Indonesia",
      category: "Solo",
      categoryColor: "bg-brand-gold-end",
      comment: "As a solo traveler, I appreciate the safety and curated local experiences EV Holidays provided. It felt truly personalized and authentic.",
      avatar: "https://picsum.photos/seed/markd/200/200"
    },
    {
      name: "Rahul Mehta",
      role: "Corporate Strategy Head",
      destination: "Global Tech Solutions",
      category: "Corporate",
      categoryColor: "bg-brand-navy",
      comment: "EV Holidays transformed our annual retreat into a seamless experience. Every detail from logistics to luxury stays was handled with precision and care.",
      avatar: "https://picsum.photos/seed/rahulm/200/200"
    },
    {
      name: "Sarah Jenkins",
      role: "HR Director",
      destination: "Global Tech",
      category: "Retreat",
      categoryColor: "bg-brand-gold-end",
      comment: "The team retreat in Vietnam was flawlessly organized. Every detail from the luxury stay to the team-building activities was perfect.",
      avatar: "https://picsum.photos/seed/sj/200/200"
    }
  ];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[index];

  return (
    <div className="max-w-5xl mx-auto relative px-4 md:px-20">
      <div className="relative py-10 min-h-[400px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <div className="bg-brand-navy/60 border border-white/5 p-8 md:p-16 rounded-[3rem] relative backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Avatar with Badge */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className={cn(
                  "absolute -bottom-2 right-2 px-4 py-1.5 rounded-full shadow-lg border border-white/10",
                  item.categoryColor
                )}>
                   <span className="text-[10px] font-black uppercase tracking-widest text-white">{item.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-6">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} className="w-5 h-5 fill-brand-gold-end text-brand-gold-end" />
                  ))}
                </div>
                
                <h3 className="text-xl md:text-3xl text-white/90 leading-snug font-medium italic mb-10 relative">
                  &ldquo;{item.comment}&rdquo;
                  <Quote className="absolute -top-10 -right-4 md:-right-10 w-24 h-24 text-white/5 pointer-events-none" />
                </h3>

                <div className="space-y-2 pt-6 border-t border-white/5">
                  <h4 className="text-white font-serif text-2xl tracking-tight">{item.name}</h4>
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                    <span className="text-brand-gold-end text-[11px] font-black uppercase tracking-[0.15em]">{item.role}</span>
                    <span className="text-white/20 text-xs font-light">|</span>
                    <span className="text-brand-gold-end text-[11px] font-black uppercase tracking-[0.15em]">{item.destination}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Positioned relative to the card container */}
        <button 
          onClick={prev}
          className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all border border-white/10 z-30 group backdrop-blur-md"
        >
          <ChevronRight className="w-5 h-5 rotate-180 opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>
        <button 
          onClick={next}
          className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all border border-white/10 z-30 group backdrop-blur-md"
        >
          <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 transition-all duration-500 rounded-full",
              index === i ? "w-8 bg-brand-gold-end" : "w-1.5 bg-white/20"
            )}
          />
        ))}
      </div>
    </div>
  );
};

// --- Search Bar Tab Component ---
const HeroTabs = () => {
  const [activeTab, setActiveTab] = useState("Retreats");
  const tabs = ["Retreats", "Incentives", "Events"];

  return (
    <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-40 flex justify-center">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        className="w-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2rem] p-4 flex flex-col md:flex-row items-center gap-4 shadow-xl"
      >
        {/* Left Side: Mock Search Input */}
        <div className="flex-1 bg-white/80 border border-black/5 rounded-full px-6 py-4 flex items-center justify-between w-full shadow-inner">
           <span className="text-brand-dark-sky/60 font-medium tracking-wide">Where to next?</span>
           <div className="w-8 h-8 rounded-full bg-brand-gold-end flex items-center justify-center shadow">
             <MapPin className="w-4 h-4 text-brand-navy" />
           </div>
        </div>

        {/* Right Side: Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm tracking-wide",
                activeTab === tab 
                  ? "bg-brand-dark-sky text-white shadow-md" 
                  : "text-brand-dark-sky/70 hover:bg-black/5"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const WhoWeAreSection = () => {
  const tags = [
    { label: "Domestic India", icon: <Globe className="w-3.5 h-3.5" /> },
    { label: "Southeast Asia", icon: <Plane className="w-3.5 h-3.5" /> },
    { label: "Island Escapes", icon: <Palmtree className="w-3.5 h-3.5" /> },
    { label: "Corporate Travel", icon: <Briefcase className="w-3.5 h-3.5" /> },
    { label: "Women's Tours", icon: <Users className="w-3.5 h-3.5" /> },
    { label: "Family Packages", icon: <Users className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#0a1a0a]">
      {/* Background with dense foliage */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20 scale-110" 
          alt="Jungle Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0a] via-[#0a1a0a]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Cinematic Visuals */}
          <div className="relative group">
            {/* Main Visual Frame */}
            <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Cinematic Travel" 
                className="w-full h-full object-cover brightness-[0.6] contrast-125 group-hover:scale-105 transition-transform duration-[6s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0a]/90 via-[#0a1a0a]/30 to-transparent" />
              <div className="absolute inset-0 bg-brand-navy/20 mix-blend-overlay" />
              
              {/* Pin point and line */}
              <div className="absolute bottom-16 right-20">
                <div className="relative">
                  <div className="w-4 h-4 bg-white/80 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    <div className="w-1.5 h-1.5 bg-[#146b0a] rounded-full" />
                  </div>
                  <svg className="absolute bottom-2 right-2 w-32 h-24 pointer-events-none" viewBox="0 0 100 100" fill="none">
                    <path d="M90,90 C70,70 30,30 10,10" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ delay: 0.2, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -top-10 left-4 lg:-left-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl min-w-[180px] text-center z-20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-4xl font-black text-[#146b0a] mb-2 tracking-tighter drop-shadow-md">1500+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Trips Completed</div>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ delay: 0.4, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute top-1/2 -right-6 lg:-right-12 -translate-y-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl min-w-[180px] text-center z-20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-4xl font-black text-[#146b0a] mb-2 tracking-tighter drop-shadow-md">100%</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Personalised</div>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ delay: 0.6, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -bottom-10 -left-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl min-w-[180px] text-center z-20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-4xl font-black text-[#146b0a] mb-2 tracking-tighter drop-shadow-md">500+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Happy Customers</div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="relative">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#22c55e]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#22c55e]">Who We Are</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-10 text-white">
              We Don't Sell Tours.<br />
              We Create <span className="font-script text-[#22c55e] italic font-normal normal-case">Memories.</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed max-w-xl mb-12">
              <p>
                EV Holidays Private Limited is a professionally registered travel agency born from a deep love for exploration and a heartfelt commitment to every traveller we serve. We are not just an agency — <strong className="text-white font-bold">we are your journey partners.</strong>
              </p>
              <p>
                With over <strong className="text-white font-bold">1,500 trips</strong> arranged for more than <strong className="text-white font-bold">500+ happy customers</strong>, we bring meticulous planning, strong hospitality networks, and genuine personal care to every single adventure — domestic or international.
              </p>
            </div>

            {/* Tags Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {tags.map((tag, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  className="px-5 py-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 transition-colors cursor-default"
                >
                  <span className="text-[#22c55e]">{tag.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{tag.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const BenefitSection = () => {
  const benefits = [
    {
      id: "01",
      title: "End-to-End Planning",
      desc: "Flights, hotels, transport, sightseeing — every single detail handled so you travel completely worry-free.",
      icon: <Target className="w-10 h-10 text-rose-400" />,
      tag: "🎯"
    },
    {
      id: "02",
      title: "Personalised Itineraries",
      desc: "No two trips are the same. Every journey is crafted around your preferences, budget, pace, and dreams.",
      icon: <Sparkles className="w-10 h-10 text-brand-gold-end" />,
      tag: "👏"
    },
    {
      id: "03",
      title: "24/7 On-Trip Support",
      desc: "With you every step of the way — day and night — ensuring your journey is smooth, safe, and memorable.",
      icon: <Moon className="w-10 h-10 text-amber-200" />,
      tag: "🌙"
    },
    {
      id: "04",
      title: "Trusted Partnerships",
      desc: "Strong tie-ups with premium hotels, airlines, and local operators across every destination we serve.",
      icon: <Handshake className="w-10 h-10 text-yellow-400" />,
      tag: "🤝"
    },
    {
      id: "05",
      title: "Transparent Pricing",
      desc: "No hidden charges, no surprises. Crystal-clear quotes and honest communication — always.",
      icon: <Gem className="w-10 h-10 text-sky-400" />,
      tag: "💎"
    },
    {
      id: "06",
      title: "High Repeat Rate",
      desc: "Our proudest metric — travellers who trust us again and again with their most precious holidays.",
      icon: <Repeat className="w-10 h-10 text-blue-400" />,
      tag: "🔄"
    }
  ];

  return (
    <section className="bg-[#021a02] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative group hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl">{item.tag}</span>
                <span className="text-5xl font-black text-white/5 group-hover:text-brand-gold-end/10 transition-colors duration-500">{item.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DestinationAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const destinations = [
    {
      name: "Taj Mahal",
      location: "Agra, India",
      img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200",
      desc: "Experience the eternal symbol of love and architectural perfection."
    },
    {
      name: "Tiger's Nest",
      location: "Paro, Bhutan",
      img: "https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=1200",
      desc: "A sacred monastery perched dramatically on a cliffside."
    },
    {
      name: "Vietnam",
      location: "Southeast Asia",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200",
      desc: "Sail through the limestone karsts of Ha Long Bay and explore the ancient charm of Hoi An."
    },
    {
      name: "Ubud",
      location: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200",
      desc: "Rejuvenate amidst lush terraced rice fields and Balinese spirit."
    },
    {
       name: "Everest Base Camp",
       location: "Solukhumbu, Nepal",
       img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200",
       desc: "The ultimate trek to the foot of the world's highest peak."
    }
  ];

  return (
    <section id="destinations-accordion" className="py-24 md:py-32 bg-brand-dark-sky overflow-hidden relative">
      {/* Dark Green Block Background Container */}
      <div className="absolute inset-0 m-4 md:m-8 rounded-[3rem] bg-gradient-to-br from-[#021a02] to-[#010801] border border-white/5 shadow-2xl z-0" />
      
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-brand-gold-end" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-gold-end">Curated Escapes</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[0.9]">
                Define the Destination.<br />
                <span className="font-serif italic serif gold-text font-normal text-3xl md:text-5xl lg:text-6xl block mt-4">EV Holidays Will Craft the Experience.</span>
              </h2>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/destinations" 
                className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all backdrop-blur-sm group shadow-xl"
              >
                View All Destinations
                <ArrowRight className="w-4 h-4 text-brand-gold-end group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row h-[700px] lg:h-[650px] gap-3 px-6 max-w-[1600px] mx-auto relative z-10">
        {destinations.map((dest, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{ 
              flex: expandedIndex === idx ? 4 : 1,
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
            }}
            onMouseEnter={() => setExpandedIndex(idx)}
            className="relative h-full rounded-[2.5rem] overflow-hidden cursor-pointer group border border-white/5"
          >
            <img 
              src={dest.img} 
              alt={dest.name} 
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-transform duration-[3s]",
                expandedIndex === idx ? "scale-105" : "scale-125"
              )}
              referrerPolicy="no-referrer"
            />
            <div className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              expandedIndex === idx ? "bg-black/10" : "bg-black/50 group-hover:bg-black/40"
            )} />

            {/* Vertical Title (when collapsed) */}
            <AnimatePresence>
              {expandedIndex !== idx && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                   <span className="text-white/60 font-black uppercase tracking-[0.6em] text-[10px] [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
                     {dest.name}
                   </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded Content */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-14 flex flex-col items-start overflow-hidden pointer-events-none">
               <motion.div
                 animate={{ 
                   y: expandedIndex === idx ? 0 : 60,
                   opacity: expandedIndex === idx ? 1 : 0
                 }}
                 transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                 className="space-y-6"
               >
                 <div className="bg-brand-gold-end text-black px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] inline-block shadow-xl">
                    {dest.location}
                 </div>
                 <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-2xl">{dest.name}</h3>
                 <p className="text-white/80 max-w-sm text-base leading-relaxed drop-shadow-lg">{dest.desc}</p>
               </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-gold-end selection:text-white relative bg-brand-dark-sky">
      <div className="noise" />
      <Navbar />
      <Hero />
      
      <ProposalModal isOpen={isProposalModalOpen} onClose={() => setIsProposalModalOpen(false)} />

      <WhoWeAreSection />
      <DestinationAccordion />

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-32 relative overflow-hidden border-y border-white/5 bg-brand-dark-sky">
        {/* Vibrant Background Landscape */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-90" 
            alt="Scenic Travel Destination" 
            referrerPolicy="no-referrer" 
          />
          {/* Soft dark gradient to blend top/bottom and ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-sky via-brand-dark-sky/40 to-brand-dark-sky" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-gold-end font-bold uppercase tracking-[0.2em] text-[11px] mb-4 block drop-shadow-lg"
            >
              OUR EXPERTISE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-[44px] leading-tight font-extrabold mb-6 tracking-tight text-white drop-shadow-2xl"
            >
              Bespoke Solutions for Every<br/>Corporate Need
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", icon: Target, title: "End-to-End Planning", path: "#", desc: "Flights, hotels, transport, sightseeing — every single detail handled so you travel completely worry-free." },
              { id: "02", icon: Sparkles, title: "Personalised Itineraries", path: "#", desc: "No two trips are the same. Every journey is crafted around your preferences, budget, pace, and dreams." },
              { id: "03", icon: Moon, title: "24/7 On-Trip Support", path: "#", desc: "With you every step of the way — day and night — ensuring your journey is smooth, safe, and memorable." },
              { id: "04", icon: Handshake, title: "Trusted Partnerships", path: "#", desc: "Strong tie-ups with premium hotels, airlines, and local operators across every destination we serve." },
              { id: "05", icon: Gem, title: "Transparent Pricing", path: "#", desc: "No hidden charges, no surprises. Crystal-clear quotes and honest communication — always." },
              { id: "06", icon: Repeat, title: "High Repeat Rate", path: "#", desc: "Our proudest metric — travellers who trust us again and again with their most precious holidays." }
            ].map((service, idx) => {
              const mouseX = useMotionValue(0);
              const mouseY = useMotionValue(0);

              const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
                const { left, top } = currentTarget.getBoundingClientRect();
                mouseX.set(clientX - left);
                mouseY.set(clientY - top);
              };

              return (
                <Link to={service.path} key={idx} className="block group">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onMouseMove={handleMouseMove}
                    className="p-8 md:p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-500 relative overflow-hidden h-full flex flex-col bg-brand-navy/85 backdrop-blur-xl border border-white/10 group-hover:border-white/20"
                  >
                    {/* Default subtle warm glow for the background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.05),_transparent_60%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

                    <motion.div
                      className="pointer-events-none absolute -inset-px rounded-[2.5rem] transition duration-300 opacity-0 group-hover:opacity-100"
                      style={{
                        background: useMotionTemplate`
                          radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            rgba(34, 197, 94, 0.15),
                            transparent 70%
                          )
                        `,
                      }}
                    />

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="w-14 h-14 bg-white/5 rounded-[1.1rem] flex items-center justify-center border border-white/5 group-hover:bg-brand-gold-end group-hover:border-brand-gold-end transition-all duration-500">
                        <motion.div
                          initial={{ scale: 1 }}
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: [0, -10, 10, -5, 5, 0],
                            filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.6))"
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <service.icon className="text-white w-6 h-6 group-hover:text-black transition-colors" />
                        </motion.div>
                      </div>
                      <span className="text-4xl font-black text-white/5 group-hover:text-brand-gold-end/10 transition-colors duration-500">{service.id}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white transition-all duration-500 relative z-10 tracking-tight">{service.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed relative z-10 font-medium flex-1 group-hover:text-white/80 transition-colors">{service.desc}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>




      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-32 relative overflow-hidden">
        {/* Seashore Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=2000" 
            alt="Seashore aerial view" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Cinematic Dark Overlay - Ensures text readability while showing the seashore */}
          <div className="absolute inset-0 bg-brand-dark-sky/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-sky via-transparent to-brand-dark-sky opacity-90" />
        </div>

        {/* Colorful Glow Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold-end/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 z-1" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-deep-blue/30 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/3 z-1" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-gold-end font-extrabold uppercase tracking-[0.3em] text-[10px] mb-4 block"
            >
              WHAT OUR CLIENTS SAY
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Stories of <span className="gold-text italic serif font-normal">Meaningful</span> Journeys
            </h2>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-brand-dark-sky px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl bg-brand-navy/80 backdrop-blur-2xl rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold-end/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Ready to <span className="gold-text">Elevate</span> Your Team's Journey?
            </h2>
            <p className="text-text-muted text-lg mb-12">
              Join 500+ global organizations that trust EV Holidays for their incentive tours, retreats, and business travel.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsProposalModalOpen(true)}
                className="gold-gradient text-black px-12 py-5 rounded-lg font-extrabold flex items-center gap-3 shadow-2xl shadow-brand-gold-end/20"
              >
                Request Proposal
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
