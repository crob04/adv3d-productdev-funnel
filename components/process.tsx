"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/image-placeholder";

const STEPS = [
  {
    n: "01",
    title: "Upload Files or a Design Brief",
    body: "STL, STEP, or a plain description of what the part needs to do. We meet teams where their design actually is.",
    /* Replace with: file upload UI mockup */
    imageLabel: "Process Step 1 \u2014 Upload UI",
  },
  {
    n: "02",
    title: "Review and Response Within 24 Hours",
    body: "DFM feedback, material recommendation, lead time, and quote. No black-box pricing.",
    /* Replace with: team reviewing on-screen design */
    imageLabel: "Process Step 2 \u2014 Team Review",
  },
  {
    n: "03",
    title: "Approve and We Build",
    body: "Production runs in 3\u20137 business days. Progress updates provided \u2014 not silence.",
    /* Replace with: HP MJF / SLA machine running */
    imageLabel: "Process Step 3 \u2014 Machine Running",
  },
  {
    n: "04",
    title: "Parts Arrive Ready for Testing",
    body: "Post-processed, finished, and documented. Ready for bench testing, clinical validation, or investor demonstration.",
    /* Replace with: finished part in output tray */
    imageLabel: "Process Step 4 \u2014 Finished Part",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-brand-border bg-brand-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            HOW IT WORKS
          </p>
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-brand-white sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Four Steps From Concept to Production-Intent Part
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex flex-col"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="text-2xl font-bold text-brand-accent"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {step.n}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-brand-border to-transparent" />
              </div>

              <ImagePlaceholder
                label={step.imageLabel}
                aspect="4/3"
                className="mb-4"
              />

              <h3 className="text-base font-semibold leading-snug text-brand-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
