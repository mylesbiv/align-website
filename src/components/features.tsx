"use client";

import { motion } from "framer-motion";
import { Timer, Brain, Flame, RotateCcw } from "lucide-react";

const modes = [
  {
    icon: Timer,
    name: "Align Mode",
    tagline: "The balanced session",
    description:
      "Block distracting apps for a set time with optional breaks. The default mode for everyday focus.",
    accent: "#8B5CF6",
  },
  {
    icon: Brain,
    name: "Deep Focus",
    tagline: "Zero distractions",
    description:
      "No breaks, no exits. Pure uninterrupted focus for your most important work.",
    accent: "#3B82F6",
  },
  {
    icon: Flame,
    name: "Discipline",
    tagline: "Build the habit",
    description:
      "Strict mode with accountability. Break your session and your group gets notified.",
    accent: "#EF4444",
  },
  {
    icon: RotateCcw,
    name: "Reset",
    tagline: "Start fresh",
    description:
      "A gentle re-entry. Short sessions to rebuild your relationship with your phone.",
    accent: "#10B981",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[#71717A] mb-4">
            Four Modes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            One app,{" "}
            <span className="gradient-text">four ways to focus</span>
          </h2>
          <p className="mt-4 text-lg text-[#A1A1AA] max-w-xl mx-auto">
            Whether you need a gentle nudge or total lockdown — there&apos;s a mode
            for that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top right, ${mode.accent}08 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon + badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${mode.accent}15`,
                      border: `1px solid ${mode.accent}25`,
                    }}
                  >
                    <mode.icon size={20} style={{ color: mode.accent }} />
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      color: mode.accent,
                      background: `${mode.accent}12`,
                    }}
                  >
                    {mode.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {mode.name}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {mode.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
