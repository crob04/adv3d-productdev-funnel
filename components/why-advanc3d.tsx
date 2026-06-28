"use client";

import { motion } from "framer-motion";
import { Users, Layers, Zap } from "lucide-react";

const CARDS = [
  {
    icon: Users,
    title: "We Review the Part, Not Just the File.",
    body: "Our team flags DFM issues, tolerance risks, and material mismatches before we start the machine. You get feedback that makes the next version better \u2014 not just a print of what you submitted.",
  },
  {
    icon: Layers,
    title: "The Right Material for What the Part Has to Do.",
    body: "HP MJF nylon for structural load. TPU at calibrated shore hardness for soft interfaces. SLA resin for fine-detail validation. Biocompatible-grade materials for patient-contact applications.",
  },
  {
    icon: Zap,
    title: "One Prototype or Fifty Pilot Units \u2014 Same Workflow.",
    body: "No minimum order. No gated quote process. When you\u2019re ready to scale, we scale with you.",
  },
];

export function WhyAdvanc3D() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            WHY US
          </p>
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-brand-white sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Built for Iteration. Priced for Early Stage. Ready for Production.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-lg border border-brand-border bg-brand-muted p-6 transition-colors hover:border-brand-accent/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-black">
                  <Icon className="h-6 w-6 text-brand-accent" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-brand-white">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-text">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
