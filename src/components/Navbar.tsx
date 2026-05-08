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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12',
      !isDarkBase ? 'bg-[#010801]/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5 py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-8'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#2ECC71]/20 blur-[25px] rounded-full scale-[1.5] pointer-events-none group-hover:bg-[#2ECC71]/30 transition-all duration-700" />
            <img
              src="/logo_premium.png"
              alt="EV Holidays Premium Logo"
              className="h-16 md:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(20,107,10,0.5)] relative z-10 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col opacity-0 md:opacity-100 transition-opacity duration-500">
            <span className="logo-text text-[#2ECC71] drop-shadow-[0_0_10px_rgba(46,204,113,0.3)] font-black text-2xl md:text-3xl tracking-tight">
              EV Holidays
            </span>
            <span className="text-white/70 leading-none -mt-1 md:-mt-2 text-lg md:text-xl transition-colors group-hover:text-white/90" style={{ fontFamily: '"Brittany Signature", "Great Vibes", cursive', fontWeight: 400 }}>
              Your Experience beyond Imagination
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs uppercase tracking-[0.15em] font-bold text-white/80 transition-all duration-500 hover:text-[#2ECC71] hover:drop-shadow-[0_0_8px_rgba(46,204,113,0.8)] relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#2ECC71] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/ai-planner')}
            className="px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(46,204,113,0.2)] hover:shadow-[0_4px_25px_rgba(46,204,113,0.4)] transition-all duration-500 bg-[#2ECC71] text-[#010801]"
          >
            Plan Trip
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 relative z-10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className="text-white w-7 h-7" />
          ) : (
            <Menu className="text-white w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)", y: -20 }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)", y: 0 }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", y: -20 }}
            className="md:hidden fixed inset-0 top-[88px] bg-[#010801]/95 border-t border-white/5"
          >
            <div className="flex flex-col p-8 gap-8 items-center pt-20">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-2xl font-black uppercase tracking-widest text-white/80 hover:text-[#2ECC71] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="w-12 h-px bg-[#2ECC71]/30 my-4" />
              <button
                onClick={() => {
                  navigate('/ai-planner');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#2ECC71] text-[#010801] px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(46,204,113,0.3)] w-full max-w-xs"
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
