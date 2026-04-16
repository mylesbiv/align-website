"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, Server } from "lucide-react";

const points = [
  {
    icon: Eye,
    title: "Screen time stays on your device",
    description:
      "Your usage data is processed locally using Apple's DeviceActivityReport. We never see it, store it, or transmit it.",
  },
  {
    icon: Lock,
    title: "No tracking, no ads",
    description:
      "We don't track you across apps. We don't sell your data. We don't show ads. Ever.",
  },
  {
    icon: Server,
    title: "Encrypted & secured",
    description:
      "Account data is stored with row-level security — you can only access your own data.",
  },
  {
    icon: ShieldCheck,
    title: "Delete anytime",
    description:
      "Full account deletion from the app. Your data is permanently removed — no retention, no backups.",
  },
];

export function PrivacySection() {
  return (
    <section id="privacy" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[#71717A] mb-4">
            Privacy First
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Your data is{" "}
            <span className="gradient-text">yours alone</span>
          </h2>
          <p className="mt-4 text-lg text-[#A1A1AA] max-w-xl mx-auto">
            We built Align to help you — not to harvest your data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.05] border border-white/[0.08]">
                <point.icon size={20} className="text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
