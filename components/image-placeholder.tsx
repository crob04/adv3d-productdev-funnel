import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
}

/**
 * Styled placeholder for photography slots — see brief.md §9.
 * Every image slot is a dark card with dashed border + descriptive label.
 * Replace with <Image /> (next/image) once photography is sourced.
 */
export function ImagePlaceholder({
  label,
  aspect = "4/3",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-dashed border-brand-border bg-brand-muted",
        "flex items-center justify-center text-center",
        className
      )}
      style={{ aspectRatio: aspect }}
    >
      <div className="px-6">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-black/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-text"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <p className="text-xs font-medium uppercase tracking-widest text-brand-text">
          {label}
        </p>
      </div>
    </div>
  );
}
