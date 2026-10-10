"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";

type ContactSubmissionProps = {
  action: string;
  contactEmail: string;
  children: ReactNode;
};

/** Enhances native POST without bypassing the provider's verification page. */
export function ContactSubmission({ action, contactEmail, children }: ContactSubmissionProps) {
  const [pending, setPending] = useState(false);

  useEffect(() => {
    // Re-enable the form when returning from the provider via browser Back.
    const handlePageShow = () => setPending(false);
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (pending) {
      event.preventDefault();
      return;
    }

    const form = event.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement | null;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement | null;

    name?.setCustomValidity(name.value.trim().length < 2 ? "Please enter at least 2 characters for your name." : "");
    message?.setCustomValidity(message.value.trim().length < 10 ? "Please enter a message with at least 10 characters." : "");

    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }

    setPending(true);
  };

  const clearValidity = (event: FormEvent<HTMLFormElement>) => {
    const field = event.target;
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.setCustomValidity("");
    }
  };

  return (
    <form action={action} method="POST" onSubmit={handleSubmit} onInput={clearValidity} aria-busy={pending} className="rounded-xl border border-border-hairline bg-sand-surface p-4 sm:p-6 lg:p-8" aria-labelledby="contact-form-title">
      {children}
      <div className="mt-4 space-y-4">
        <button className="motion-control inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-label-caps font-bold uppercase tracking-wider text-canvas-white transition-colors duration-300 ease-out hover:bg-studio-teal-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto" type="submit" disabled={pending}>
          <span className="material-symbols-outlined text-base" aria-hidden="true">{pending ? "hourglass_top" : "send"}</span>
          {pending ? "Opening verification…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="text-body-sm text-charcoal-muted">{pending ? "Continue on the verification page to send your message." : ""}</p>
        <p className="text-body-sm text-charcoal-muted">You can also <a href={`mailto:${contactEmail}`} className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-2">email us directly</a>.</p>
      </div>
    </form>
  );
}
