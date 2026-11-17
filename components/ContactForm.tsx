"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { INQUIRY_CATEGORIES, SITE } from "@/lib/site";

interface Values {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "preparing" | "opened";

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  category: INQUIRY_CATEGORIES[0],
  subject: "",
  message: "",
};

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^\+?[\d\s-]{7,16}$/.test(v.phone.trim()))
    e.phone = "Use digits only, e.g. 071 234 5678 or +94 71 234 5678.";
  if (v.subject.trim().length < 3) e.subject = "Please add a short subject.";
  if (v.message.trim().length < 10) e.message = "Please write at least 10 characters.";
  return e;
}

/**
 * No backend or email service is configured for this site yet, so this form
 * does not send anything itself. On a valid submit it opens the visitor's own
 * email app with the message pre-filled, and says so plainly.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof Values) => (ev: { target: { value: string } }) => {
    setValues((s) => ({ ...s, [k]: ev.target.value }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("idle");
      const first = Object.keys(found)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("preparing");
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
      `Category: ${values.category}`,
      "",
      values.message.trim(),
    ]
      .filter((l) => l !== null)
      .join("\n");
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `[${values.category}] ${values.subject.trim()}`,
    )}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => {
      window.location.href = href;
      setStatus("opened");
    }, 450);
  };

  const field =
    "mt-2 w-full rounded-xl border bg-white px-4 py-3.5 text-night outline-none transition focus:border-forest focus:ring-4 focus:ring-leaf/30";
  const border = (k: keyof Values) => (errors[k] ? "border-red-600" : "border-forest/25");
  const label = "text-sm font-bold text-forest";

  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`e-${k}`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-700">
        <AlertCircle size={15} aria-hidden /> {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-forest/15 bg-white/70 p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className={label}>Full name</label>
          <input id="f-name" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} className={`${field} ${border("name")}`} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="f-email" className={label}>Email address</label>
          <input id="f-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} className={`${field} ${border("email")}`} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="f-phone" className={label}>Phone number <span className="font-normal text-night/55">(optional)</span></label>
          <input id="f-phone" type="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined} className={`${field} ${border("phone")}`} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="f-category" className={label}>Inquiry category</label>
          <select id="f-category" value={values.category} onChange={set("category")} className={`${field} ${border("category")}`}>
            {INQUIRY_CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="f-subject" className={label}>Subject</label>
        <input id="f-subject" value={values.subject} onChange={set("subject")} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "e-subject" : undefined} className={`${field} ${border("subject")}`} />
        {err("subject")}
      </div>
      <div>
        <label htmlFor="f-message" className={label}>Message</label>
        <textarea id="f-message" rows={6} value={values.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-message" : undefined} className={`${field} ${border("message")} resize-y`} />
        {err("message")}
      </div>

      <button
        type="submit"
        disabled={status === "preparing"}
        className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-night disabled:cursor-wait disabled:opacity-70"
      >
        {status === "preparing" ? <Loader2 size={18} className="animate-spin" aria-hidden /> : <Send size={18} aria-hidden />}
        {status === "preparing" ? "Preparing your email…" : "Send message"}
      </button>

      <div aria-live="polite" className="space-y-3">
        {Object.keys(errors).length > 0 && (
          <p className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-800" role="alert">
            <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
            Please fix the highlighted fields and try again.
          </p>
        )}
        {status === "opened" && (
          <p className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-900">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden />
            <span>
              <strong>Your email app should now be open with your message ready.</strong> Your
              message has not been sent until you press send there. If nothing opened, email us at{" "}
              <a className="font-semibold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
              or use WhatsApp.
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
