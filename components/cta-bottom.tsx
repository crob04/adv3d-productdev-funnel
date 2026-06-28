"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ContactForm } from "@/components/contact-form";
import { FileUpload } from "@/components/file-upload";

export function CtaBottom() {
  return (
    <section id="cta" className="border-y border-brand-border bg-brand-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }} className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-brand-white sm:text-4xl" style={{ fontFamily: "var(--font-syne)" }}>
            Your Next Iteration Shouldn&rsquo;t Take 6 Weeks.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-text">
            Tell us what you&rsquo;re building. We&rsquo;ll tell you what&rsquo;s possible &mdash; and when we can have it in your hands.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-white">Book a Discovery Call</h3>
            <ContactForm />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-white">Upload Project Files</h3>
            <FileUpload />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }} className="mt-10">
          <div className="mx-auto max-w-3xl">
            <ImagePlaceholder label="CTA — Wearable Device on Desk" aspect="16/6" className="mb-6" />
            <p className="text-center text-xs uppercase tracking-[0.2em] text-brand-text/80">
              US-based &middot; HP MJF + SLA + FDM + TPU &middot; NDA-ready &middot; Short-run &amp; pilot production &middot; Biocompatible materials available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
