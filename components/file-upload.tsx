"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileText, X, Loader2, CheckCircle2 } from "lucide-react";

const ACCEPTED = {
  "model/stl": [".stl"],
  "application/step": [".step", ".stp"],
  "application/pdf": [".pdf"],
  "application/zip": [".zip"],
};

export function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((accepted: File[]) => {
    setFiles((prev) => [...prev, ...accepted]);
    setError(null);
    setSubmitted(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED,
    multiple: true,
  });

  const remove = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      setError("Add at least one file before submitting.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        kind: "upload",
        fileNames: files.map((f) => f.name),
        fileSizes: files.map((f) => f.size),
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please retry.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center justify-center rounded-lg border border-brand-accent/40 bg-brand-muted p-8 text-center">
        <CheckCircle2 className="mb-3 h-10 w-10 text-brand-accent" aria-hidden />
        <h3 className="text-lg font-semibold text-brand-white">Files received.</h3>
        <p className="mt-2 max-w-sm text-sm text-brand-text">
          You&rsquo;ll get a quote with material recommendations and lead time within 24 hours.
        </p>
        <button type="button" onClick={() => { setSubmitted(false); setFiles([]); }} className="mt-5 text-sm font-medium text-brand-accent underline-offset-4 hover:underline">
          Upload more files
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-brand-border bg-brand-muted p-6">
      <div {...getRootProps()} className={[
        "flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed px-6 py-10 text-center transition-colors",
        isDragActive ? "border-brand-accent bg-brand-accent/5" : "border-brand-border bg-brand-black/40 hover:border-brand-accent/50"
      ].join(" ")}>
        <input {...getInputProps()} aria-label="Upload project files" />
        <UploadCloud className="mb-3 h-8 w-8 text-brand-accent" aria-hidden />
        <p className="text-sm font-medium text-brand-white">{isDragActive ? "Release to add files" : "Drag files here or click to browse"}</p>
        <p className="mt-1 text-xs text-brand-text">STL &middot; STEP &middot; PDF &middot; ZIP accepted</p>
      </div>

      {files.length > 0 && (
        <ul className="flex flex-col gap-2">
          {files.map((f, i) => (
            <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-3 rounded-md border border-brand-border bg-brand-black/40 px-3 py-2 text-sm">
              <span className="flex min-w-0 items-center gap-2">
                <FileText className="h-4 w-4 flex-shrink-0 text-brand-accent" aria-hidden />
                <span className="overflow-hidden text-ellipsis whitespace-nowrap text-brand-white">{f.name}</span>
                <span className="flex-shrink-0 text-xs text-brand-text/70">{(f.size / 1024).toFixed(1)} KB</span>
              </span>
              <button type="button" onClick={() => remove(i)} aria-label={`Remove ${f.name}`} className="flex-shrink-0 text-brand-text transition-colors hover:text-brand-accent">
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="rounded-md border border-brand-accent/40 bg-brand-accent/10 px-3 py-2 text-xs text-brand-accent">{error}</p>}

      <button type="button" onClick={handleSubmit} disabled={submitting} className="mt-2 inline-flex h-12 items-center justify-center rounded-full border border-brand-white/30 px-8 text-base font-semibold text-brand-white transition-colors hover:border-brand-white hover:bg-brand-white/5 disabled:opacity-60">
        {submitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting&hellip;</>) : ("Submit for 24hr Quote")}
      </button>
    </div>
  );
}
