import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Planner', href: '/ai-planner' },
    { name: 'Services', href: '/#services' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const id = href.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isDarkBase = location.pathname === '/' && !isScrolled;

  return (
    <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-12 py-6',
        isScrolled ? 'bg-black/80 backdrop-blur-2xl shadow-2xl py-4 border-b border-white/5' : 'bg-transparent shadow-[inset_0_80px_60px_-60px_rgba(0,0,0,0.5)]'
      )}>
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 md:gap-4 transition-all group">
          <img 
            src="/logo.png" 
            alt="EV Holidays Logo" 
            className="h-14 md:h-24 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col pr-4">
            <span className="logo-text logo-glow text-[#156d0a] text-xl md:text-3xl">
              EV Holidays
            </span>
            <span className="text-white leading-none -mt-1 md:-mt-2 text-lg md:text-2xl text-center md:text-left transition-opacity group-hover:text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ fontFamily: '"Brittany Signature", "Great Vibes", cursive', fontWeight: 400 }}>
              Your Experience beyond Imagination
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-xs uppercase tracking-widest font-bold transition-all duration-500 hover:text-brand-gold-end",
                item.name === 'Home' ? 'text-brand-gold-end' : 'text-white/80'
              )}
            >
              {item.name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/ai-planner')}
            className={cn(
              "px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all duration-500 bg-brand-gold-end text-brand-navy hover:shadow-brand-gold-end/20"
            )}
          >
            Plan Trip
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden bg-brand-navy mt-4 rounded-3xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-3xl absolute top-full left-4 right-4"
          >
            <div className="flex flex-col p-8 gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-black uppercase tracking-widest text-white/70 hover:text-brand-gold-end transition-colors flex items-center justify-between group"
                >
                  {item.name}
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button 
                onClick={() => {
                  navigate('/ai-planner');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-brand-gold-end text-brand-navy py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl"
              >
                Plan Your Journey
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
