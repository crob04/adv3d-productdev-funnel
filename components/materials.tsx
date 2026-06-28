"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/image-placeholder";

const MATERIALS = [
  {
    name: "HP MJF Nylon (PA12)",
    use: "Structural components, housings",
    property: "High tensile strength, isotropic",
    /* Replace with: macro shot of MJF nylon surface texture */
    imageLabel: "MJF Nylon — Surface Macro",
  },
  {
    name: "TPU",
    use: "Soft interfaces, gaskets, liners",
    property: "Shore A 85–95, flexible",
    /* Replace with: TPU sample at shore A hardness */
    imageLabel: "TPU — Calibrated Shore Hardness",
  },
  {
    name: "SLA Resin",
    use: "Fine-detail validation models",
    property: "High resolution, smooth surface",
    /* Replace with: SLA resin fine-detail model */
    imageLabel: "SLA Resin — Fine-Detail Model",
  },
  {
    name: "Biocompatible Resin",
    use: "Patient-contact applications",
    property: "ISO 10993 compatible",
    /* Replace with: biocompatible resin sample */
    imageLabel: "Biocompatible Resin Sample",
  },
];

export function Materials() {
  return (
    <section id="materials" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            MATERIALS
          </p>
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-brand-white sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Material Matched to Function &mdash; Not to What&rsquo;s Loaded in the Machine.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIALS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col overflow-hidden rounded-lg border border-brand-border bg-brand-muted transition-colors hover:border-brand-accent/40"
            >
              <ImagePlaceholder label={m.imageLabel} aspect="4/3" />
              <div className="flex flex-1 flex-col p-5">
                <h3
                  className="text-lg font-bold text-brand-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {m.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-text">
                  {m.use}
                </p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full bg-brand-accent/15 px-3 py-1 text-xs font-medium text-brand-accent">
                  {m.property}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
