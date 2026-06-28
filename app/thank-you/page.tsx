import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank you — Advanc3D",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-black px-6 text-center">
      <CheckCircle2 className="mb-5 h-14 w-14 text-brand-accent" aria-hidden />
      <h1 className="text-4xl font-bold text-brand-white sm:text-5xl" style={{ fontFamily: "var(--font-syne)" }}>
        We&rsquo;ll be in touch.
      </h1>
      <p className="mt-4 max-w-md text-base text-brand-text">
        Thanks for reaching out. The Advanc3D team will follow up within one business day with next steps for your project.
      </p>
      <Link href="/" className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-brand-white/30 px-6 text-sm font-semibold text-brand-white transition-colors hover:border-brand-white hover:bg-brand-white/5">
        Back to home
      </Link>
    </main>
  );
}
