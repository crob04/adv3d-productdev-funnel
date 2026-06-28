import Link from "next/link";

const NAV = [
  { label: "How It Works", href: "#process" },
  { label: "Materials", href: "#materials" },
  { label: "Book a Call", href: "#cta" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-brand-white" style={{ fontFamily: "var(--font-syne)" }}>Advanc3D</Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-text">Additive manufacturing for teams that move fast.</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2 md:items-center">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-medium text-brand-text transition-colors hover:text-brand-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:text-right">
            <a href="https://advanc3dinc.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-text transition-colors hover:text-brand-accent">
              advanc3dinc.com
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-brand-border pt-6">
          <p className="text-center text-xs text-brand-text/70">&copy; 2026 Advanced 3D Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
