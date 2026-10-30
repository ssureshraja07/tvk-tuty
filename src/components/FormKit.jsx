import { useState } from "react";

/* Shared helpers for forms (used by Employment page) */

// Forms are emailed here through FormSubmit. Same address you activated for complaints.
export const NOTIFY_EMAIL = "sureshraja6969@gmail.com";

export const FONT = { fontFamily: "'Anek Tamil', system-ui, sans-serif" };

export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c83b]";

export const inputCls = (err) =>
  `w-full rounded-xl border-2 bg-white px-4 text-base text-[#2b0a07] placeholder:text-[#8c1a10]/45 focus:outline-none focus:ring-4 focus:ring-[#f5c83b]/70 ${
    err ? "border-[#b42318]" : "border-[#8c1a10]/25 focus:border-[#8c1a10]"
  }`;

export const aria = (id, error, hint) => ({
  id,
  "aria-invalid": error ? true : undefined,
  "aria-describedby": error ? `${id}-err` : hint ? `${id}-hint` : undefined,
});

export function makeRef(prefix) {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(
    d.getDate()
  ).padStart(2, "0")}`;
  return `${prefix}-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function sendForm(payload) {
  const res = await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  const ok = data.success === true || data.success === "true";
  if (!res.ok || !ok) throw new Error(data.message || `Send failed (${res.status})`);
}

/* Shows `fallback` when there is no src or the image file is missing */
export function SmartImage({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(!src);
  if (failed) return fallback;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export function Field({ id, label, required = true, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-base font-semibold text-[#5e0f08]">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-[#5e0f08]/75">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm font-semibold text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}