"use client";

import { motion } from "framer-motion";
import { Clock, Package, AlertTriangle, XCircle } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: Clock,
    title: "Long quoting processes",
    body: "that assume finalized engineering drawings",
  },
  {
    icon: Package,
    title: "MOQ requirements",
    body: "forcing 500-unit orders when you need 5 to validate",
  },
  {
    icon: AlertTriangle,
    title: "Material limitations",
    body: "that compromise mechanical properties during testing",
  },
  {
    icon: XCircle,
    title: "No design feedback",
    body: "vendors who print what you sent, even when a wall change would prevent failure",
  },
];

export function Problem() {
  return (
    <section className="border-y border-brand-border bg-brand-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            THE BOTTLENECK
          </p>
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-brand-white sm:text-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Most Contract Manufacturers Are Built for Volume.
            <br />
            Your Prototype Isn&rsquo;t.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-text">
            Early-stage medical device development doesn&rsquo;t follow a linear path &mdash; it cycles.
            You validate a concept, find a flaw, redesign overnight, and need the next
            iteration in your hands before your investor meeting or IRB submission.
            Standard contract manufacturers quote in weeks, require production-level
            drawings, and charge tooling fees before they&rsquo;ve touched your file.
            That&rsquo;s not a manufacturing partner. That&rsquo;s a delay.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PAIN_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-lg border-l-4 border-l-brand-accent border border-brand-border bg-brand-muted p-6 transition-colors hover:border-brand-border hover:bg-brand-muted/80"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-black">
                    <Icon className="h-5 w-5 text-brand-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-white">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-text">
                      {point.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
