"use client";

import { motion } from "framer-motion";
import { Users, Swords, ShieldBan, Trophy } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Create a Group",
    description: "Invite up to 3 friends. Your squad, your rules.",
    accent: "#8B5CF6",
  },
  {
    icon: Swords,
    title: "Set a Challenge",
    description: "Pick the duration. 10 minutes or 2 hours — you decide.",
    accent: "#EC4899",
  },
  {
    icon: ShieldBan,
    title: "Apps Get Blocked",
    description:
      "Distracting apps are locked. No workarounds, no escape hatch.",
    accent: "#8B5CF6",
  },
  {
    icon: Trophy,
    title: "Compete & Win",
    description: "Lowest screen time wins. Real-time leaderboard, live results.",
    accent: "#EC4899",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[#71717A] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Four steps to{" "}
            <span className="gradient-text">less screen time</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-xs font-mono text-[#71717A]">
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${step.accent}15`,
                  border: `1px solid ${step.accent}25`,
                }}
              >
                <step.icon size={22} style={{ color: step.accent }} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
