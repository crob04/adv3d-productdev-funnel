"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "How It Works", href: "#process" },
  { label: "Materials", href: "#materials" },
  { label: "Get a Quote", href: "#cta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-brand-border bg-brand-black/70 backdrop-blur-md"
          : "border-transparent bg-brand-black/0 backdrop-blur-0"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Advanc3D home"
          className="text-lg font-bold tracking-tight text-brand-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Advanc3D
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-brand-text transition-colors hover:text-brand-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              className="inline-flex h-9 items-center justify-center rounded-full bg-brand-accent px-5 text-sm font-semibold text-brand-black transition-opacity hover:opacity-90"
            >
              Book a Call
            </a>
          </li>
        </ul>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-border text-brand-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-brand-border bg-brand-black/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-brand-text transition-colors hover:bg-brand-muted hover:text-brand-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-brand-accent px-5 text-base font-semibold text-brand-black"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
