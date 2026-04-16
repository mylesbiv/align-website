"use client";

import { motion } from "framer-motion";

export function FooterCTA() {
  return (
    <section className="py-24 sm:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1)_0%,rgba(236,72,153,0.05)_40%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
        >
          Take back your time.
          <br />
          <span className="gradient-text">Together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-[#A1A1AA] max-w-md mx-auto"
        >
          Join the community building healthier screen time habits through
          friendly competition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 text-lg font-medium text-black rounded-full transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)",
              boxShadow: "0 4px 24px -4px rgba(245, 158, 11, 0.4)",
            }}
          >
            Download for iOS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
