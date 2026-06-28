"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  description: z.string().min(1, "Project description is required"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", description: "" },
  });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind: "call" }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
      reset();
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Submission failed. Please retry."
      );
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center justify-center rounded-lg border border-brand-accent/40 bg-brand-muted p-8 text-center">
        <CheckCircle2 className="mb-3 h-10 w-10 text-brand-accent" aria-hidden />
        <h3 className="text-lg font-semibold text-brand-white">Request received.</h3>
        <p className="mt-2 max-w-sm text-sm text-brand-text">
          We&rsquo;ll reach out within one business day to schedule your discovery call.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-5 text-sm font-medium text-brand-accent underline-offset-4 hover:underline">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4 rounded-lg border border-brand-border bg-brand-muted p-6">
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-brand-white">
          Name <span className="text-brand-accent">*</span>
        </label>
        <input id="cf-name" type="text" autoComplete="name" {...register("name")} className="w-full rounded-md border border-brand-border bg-brand-black px-4 py-2.5 text-sm text-brand-white outline-none transition-colors focus:border-brand-accent" />
        {errors.name && <p className="mt-1 text-xs text-brand-accent">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-brand-white">
          Email <span className="text-brand-accent">*</span>
        </label>
        <input id="cf-email" type="email" autoComplete="email" {...register("email")} className="w-full rounded-md border border-brand-border bg-brand-black px-4 py-2.5 text-sm text-brand-white outline-none transition-colors focus:border-brand-accent" />
        {errors.email && <p className="mt-1 text-xs text-brand-accent">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="cf-company" className="mb-1.5 block text-sm font-medium text-brand-white">
          Company <span className="text-brand-text/60">(optional)</span>
        </label>
        <input id="cf-company" type="text" autoComplete="organization" {...register("company")} className="w-full rounded-md border border-brand-border bg-brand-black px-4 py-2.5 text-sm text-brand-white outline-none transition-colors focus:border-brand-accent" />
      </div>

      <div>
        <label htmlFor="cf-desc" className="mb-1.5 block text-sm font-medium text-brand-white">
          Brief project description <span className="text-brand-accent">*</span>
        </label>
        <textarea id="cf-desc" rows={4} {...register("description")} className="w-full resize-y rounded-md border border-brand-border bg-brand-black px-4 py-2.5 text-sm text-brand-white outline-none transition-colors focus:border-brand-accent" />
        {errors.description && <p className="mt-1 text-xs text-brand-accent">{errors.description.message}</p>}
      </div>

      {serverError && <p className="rounded-md border border-brand-accent/40 bg-brand-accent/10 px-3 py-2 text-xs text-brand-accent">{serverError}</p>}

      <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-brand-accent px-8 text-base font-semibold text-brand-black transition-opacity hover:opacity-90 disabled:opacity-60">
        {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending&hellip;</>) : ("Book a Discovery Call")}
      </button>
    </form>
  );
}
