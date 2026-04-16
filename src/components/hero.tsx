"use client";

import { motion } from "framer-motion";
import { Smartphone, Shield, Users, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,rgba(234,88,12,0.06)_40%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/[0.08] bg-white/[0.03]"
        >
          <span className="text-xs text-[#A1A1AA]">
            Screen time, reimagined
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          Your phone{" "}
          <span className="gradient-text">doesn&apos;t have</span>
          <br />
          to win.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[#A1A1AA] max-w-xl mx-auto leading-relaxed"
        >
          Block distracting apps, compete with friends to stay off your phone,
          and build healthier habits — together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-black rounded-full transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)",
              boxShadow: "0 4px 24px -4px rgba(245, 158, 11, 0.4)",
            }}
          >
            Download for iOS
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white rounded-full border border-white/[0.12] hover:bg-white/[0.05] transition-all duration-200"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Phone mockup area */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-16 mx-auto max-w-sm"
        >
          {/* Phone frame */}
          <div
            className="relative mx-auto w-[280px] h-[560px] rounded-[3rem] border-2 border-white/[0.1] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #141516 0%, #0E1011 100%)",
              boxShadow:
                "0 0 80px 20px rgba(245, 158, 11, 0.08), 0 0 160px 40px rgba(234, 88, 12, 0.04)",
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#08090A] rounded-b-2xl" />

            {/* Screen content mockup */}
            <div className="flex flex-col items-center justify-center h-full px-6 pt-10">
              <div className="text-4xl font-bold gradient-text mb-1">2h 14m</div>
              <div className="text-xs text-[#71717A] mb-8">Screen Time Today</div>

              {/* Mini stats */}
              <div className="w-full space-y-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Trophy size={16} className="text-[#F59E0B]" />
                  <span className="text-sm text-[#A1A1AA]">1st Place</span>
                  <span className="ml-auto text-sm font-medium text-white">
                    You
                  </span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Users size={16} className="text-[#EA580C]" />
                  <span className="text-sm text-[#A1A1AA]">2nd Place</span>
                  <span className="ml-auto text-sm font-medium text-[#71717A]">
                    Alex
                  </span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <Shield size={16} className="text-[#F59E0B]/60" />
                  <span className="text-sm text-[#A1A1AA]">Apps Blocked</span>
                  <span className="ml-auto text-sm font-medium text-white">
                    12
                  </span>
                </div>
              </div>

              {/* Active session indicator */}
              <div className="mt-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-[#71717A]">
                  Challenge Active — 42m left
                </span>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute -left-16 top-24 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <Smartphone size={14} className="text-[#F59E0B]" />
              <span className="text-xs text-[#A1A1AA]">Apps blocked</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-12 top-48 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="flex items-center gap-2">
              <Trophy size={14} className="text-[#EA580C]" />
              <span className="text-xs text-[#A1A1AA]">You&apos;re winning!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08090A] to-transparent pointer-events-none" />
    </section>
  );
}
