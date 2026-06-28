"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/image-placeholder";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(249,115,22,0.10), transparent 55%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-center"
        >
          <h1
            className="text-4xl font-bold leading-[1.05] tracking-tight text-brand-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            From CAD File to Functional Prototype &mdash;
            <br className="hidden sm:block" />
            Without the 6-Week Wait.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-text">
            Advanc3D is the additive manufacturing partner for medical device teams
            that need design iteration at the speed of a startup. Design collaboration,
            short-run production, material flexibility, and accelerated iteration &mdash;
            from first concept to production-intent part.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-accent px-8 text-base font-semibold text-brand-black transition-opacity hover:opacity-90"
            >
              Book a Discovery Call
            </a>
            <a
              href="#cta"
              className="inline-flex h-12 items-center justify-center rounded-full border border-brand-white/30 px-8 text-base font-semibold text-brand-white transition-colors hover:border-brand-white hover:bg-brand-white/5"
            >
              Upload Project Files &rarr; 24hr Quote
            </a>
          </div>

          <p className="mt-6 text-sm text-brand-text/80">
            NDA-ready &middot; US-based &middot; HP MJF, SLA, FDM &amp; TPU in-house
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center"
        >
          {/* Replace with: close-up nylon/resin prototype in engineer\u2019s hand next to CAD laptop, warm workshop lighting */}
          <ImagePlaceholder
            label="Hero Product Photo"
            aspect="4/3"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
