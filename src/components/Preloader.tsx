import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("ev_preloader_seen");
    }
    return true;
  });

  useEffect(() => {
    if (showPreloader) {
      sessionStorage.setItem("ev_preloader_seen", "true");
      document.body.style.overflow = "hidden";

      // Hold for exactly 3 seconds then begin exit animation
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPreloader]);

  useEffect(() => {
    if (!showPreloader) {
      // Re-enable scroll after exit animation completes (0.8s)
      const scrollTimer = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 800);
      return () => clearTimeout(scrollTimer);
    }
  }, [showPreloader]);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          key="ev-preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          {/* Ambient emerald glow bloom behind video */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "55vw",
              height: "55vw",
              maxWidth: 550,
              maxHeight: 550,
              background:
                "radial-gradient(ellipse at center, rgba(20,107,10,0.25) 0%, transparent 70%)",
              filter: "blur(70px)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Video — centered, aspect-ratio preserved, responsive */}
          <motion.div
            className="relative z-10 w-[85vw] md:max-w-[500px] lg:max-w-[700px]"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <video
              src="/video11.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(20,107,10,0.2)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
