"use client";

import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-tight"
        >
          <span className="text-white">5 to 6 hours.</span>{" "}
          <span className="text-[#71717A]">
            That&apos;s the average time you spend on your phone every day.
            What if your friends could hold you{" "}
          </span>
          <span className="gradient-text">accountable?</span>
        </motion.p>
      </div>
    </section>
  );
}
