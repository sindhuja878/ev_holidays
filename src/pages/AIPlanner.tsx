import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight, 
  X,
  MessageSquare,
  ChevronRight,
  Briefcase,
  Award,
  Presentation,
  CheckCircle2,
  Undo2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  type?: 'text' | 'options' | 'summary';
  options?: string[];
  data?: any;
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'assistant',
  content: 'Welcome to EV Holidays AI Concierge. I am here to assist you in planning a premium corporate travel experience. What type of corporate journey are we looking to organize today?',
  type: 'options',
  options: [
    'Corporate Retreat',
    'Employee Incentive Tour',
    'MICE Event',
    'Team Outing',
    'Annual Planner Trip'
  ]
};

export default function AIPlanner() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(1);
  const [planData, setPlanData] = useState<any>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI Concierge Logic
    setTimeout(() => {
      let response: Message;
      
      if (step === 1) {
        setPlanData({ ...planData, service: content });
        response = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Excellent choice. A ${content} is a great way to align your team. Approximately how many participants are you planning for?`,
          type: 'options',
          options: ['10-50', '50-100', '100-500', '500+']
        };
        setStep(2);
      } else if (step === 2) {
        setPlanData({ ...planData, participants: content });
        response = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Noted. For ${content} participants, would you prefer a domestic mountain retreat or an international beach destination?`,
          type: 'options',
          options: ['Domestic (Mountains)', 'Domestic (Beach)', 'International (SE Asia)', 'International (Europe)']
        };
        setStep(3);
      } else if (step === 3) {
        setPlanData({ ...planData, destination: content });
        response = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'What is the estimated budget per participant for this premium experience?',
          type: 'options',
          options: ['$500 - $1,000', '$1,000 - $3,000', '$3,000+', 'Custom Budget']
        };
        setStep(4);
      } else {
        response = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Thank you for these details. I have drafted a preliminary itinerary that prioritizes both relaxation and productivity. Would you like me to send this proposal to your corporate email?',
          type: 'summary',
          data: planData
        };
      }

      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-navy/5 pt-24 pb-12 flex flex-col items-center">
      {/* Header Area */}
      <div className="w-full max-w-4xl px-6 mb-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
            <Sparkles className="w-8 h-8 text-brand-gold-end" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-brand-navy mb-4 tracking-tight">
            Plan with <span className="gold-text italic">AI</span>
          </h1>
          <p className="text-brand-navy/60 max-w-lg mx-auto font-medium leading-relaxed">
            Experience the future of corporate travel planning. Our bespoke AI concierge understands your business objectives.
          </p>
        </motion.div>
      </div>

      {/* Chat Container */}
      <div className="w-full max-w-3xl px-4 flex-1 flex flex-col">
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl flex-1 flex flex-col overflow-hidden relative">
          
          {/* Chat Header */}
          <div className="px-8 py-4 border-b border-gray-50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-gold-end/10 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-brand-gold-end" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-navy">EV Concierge</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-600/70 uppercase tracking-widest leading-none">Always online</span>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-brand-navy transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-8 py-10 space-y-8 min-h-[500px]">
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn(
                  "flex items-end gap-3",
                  msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
                  msg.role === 'assistant' ? "bg-brand-navy" : "bg-brand-gold-end"
                )}>
                  {msg.role === 'assistant' ? <Bot className="w-4 h-4 text-brand-gold-end" /> : <User className="w-4 h-4 text-brand-navy" />}
                </div>

                <div className="flex flex-col gap-2 max-w-[85%]">
                  <div className={cn(
                    "p-4 px-6 rounded-[1.5rem] text-sm leading-relaxed",
                    msg.role === 'assistant' 
                      ? "bg-gray-50 text-brand-navy rounded-bl-none shadow-sm" 
                      : "bg-brand-navy text-white rounded-br-none shadow-xl"
                  )}>
                    {msg.content}
                  </div>

                  {msg.type === 'options' && msg.options && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.options.map((opt) => (
                        <motion.button
                          key={opt}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSend(opt)}
                          className="px-4 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-brand-navy bg-white hover:border-brand-gold-end hover:bg-brand-gold-end/5 transition-all shadow-sm"
                        >
                          {opt}
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {msg.type === 'summary' && (
                    <div className="mt-4 p-6 rounded-3xl bg-brand-navy/5 border border-brand-navy/5 space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy">Draft Itinerary Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Service</span>
                          <p className="text-sm font-bold text-brand-navy">Corporate Retreat</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Destination</span>
                          <p className="text-sm font-bold text-brand-navy">Vietnam (Elite)</p>
                        </div>
                      </div>
                      <button className="w-full gold-gradient py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-brand-navy shadow-lg">
                        View Detailed Proposal
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-brand-gold-end" />
                </div>
                <div className="bg-gray-50 p-4 px-6 rounded-[1.5rem] rounded-bl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="px-8 pb-8 pt-4 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Type your requirements here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
                className="w-full bg-gray-50 border border-gray-100 rounded-full py-5 px-8 pr-16 focus:outline-none focus:ring-2 focus:ring-brand-gold-end/30 focus:bg-white transition-all text-sm font-medium text-brand-navy shadow-inner"
              />
              <button 
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim()}
                className="absolute right-3 w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-gold-end hover:text-brand-navy transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg"
              >
                <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Secure Concierge</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>Real-time Guidance</span>
                </div>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-gold-end hover:underline">
                Clear Session
              </button>
            </div>
          </div>
        </div>

        {/* Action Suggestion Bar */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <div className="px-4 py-2 bg-white rounded-full border border-gray-100 text-[10px] font-bold text-brand-navy flex items-center gap-2 shadow-sm">
            <Award className="w-3.5 h-3.5 text-brand-gold-end" />
            Top Choice: Premium Retreats in Meghalaya
          </div>
          <div className="px-4 py-2 bg-white rounded-full border border-gray-100 text-[10px] font-bold text-brand-navy flex items-center gap-2 shadow-sm">
            <Presentation className="w-3.5 h-3.5 text-brand-gold-end" />
            Upcoming: Vietnam MICE Expo May 2026
          </div>
        </div>
      </div>
    </div>
  );
}
