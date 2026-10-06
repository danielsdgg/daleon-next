// app/contact/ContactClient.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Web3Forms access keys are public by design (they ship to the browser).
const WEB3FORMS_KEY = "cdda325c-9fb8-4ccc-8b6f-a0e8d79e981c";
const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycby3SzjjASBWBEK_4wdqCPriHNuZldeG-TOL9bKNEj5kfGgom4JIqetKmE5QZgX9gIAy/exec";
const WHATSAPP_URL = "https://wa.me/254142021359";
const EMAIL = "daleondynamics@gmail.com";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const serviceOptions = [
  "High-Converting Website",
  "Custom Web App or System",
  "Not sure yet / General consultation",
];

const budgetOptions = [
  "Under KES 55,000",
  "KES 55,000 – 150,000",
  "KES 150,000 – 500,000",
  "KES 500,000+",
  "Not sure yet",
];

const nextSteps = [
  "We reply within 24 hours to confirm the details.",
  "A short discovery call to understand your goals and scope.",
  "You receive a fixed-price quote and timeline before any work begins.",
];

const inputClasses =
  "w-full px-5 py-3.5 text-base bg-[#0A0A0F] border border-[#232330] rounded-lg text-[#F2F1F7] focus:outline-none focus:border-[#7B5CFF] focus:ring-4 focus:ring-[#7B5CFF]/15 transition-all placeholder:text-[#7F7D93]";
const labelClasses = "block text-sm font-semibold text-[#C9C8D6] mb-2";

const ContactClient = () => {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const payload = new FormData(e.currentTarget);
    payload.append("access_key", WEB3FORMS_KEY);
    payload.append("subject", "New enquiry from daleondynamics.com");
    const snapshot = { ...formData };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData(emptyForm);

        // Conversion event (works once GA4 is installed on the site)
        window.gtag?.("event", "generate_lead", {
          form: "contact",
          service: snapshot.service || "unspecified",
        });

        // Best-effort log to Google Sheets and confirmation email.
        // Fire-and-forget: the enquiry is already safely delivered above.
        fetch(SHEETS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(snapshot),
          keepalive: true,
        }).catch(() => {});
      } else {
        setError(data.message || "Something went wrong. Please try again, or message us on WhatsApp.");
      }
    } catch {
      setError("Failed to send your message. Please check your connection, or message us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      {/* Page header */}
      <section className="pt-28 pb-4 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-4">
            <span>{"//"}</span>
            <span>get-in-touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get a Free Quote for Your Website or Web App
          </h1>
          <p className="text-lg text-[#8E8CA3] max-w-2xl mx-auto">
            Tell us what you need. We reply within 24 hours, and you get a fixed-price quote and
            timeline before any work begins.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Form card */}
        <div className="lg:col-span-3 bg-[#0F141B] border border-[#232330] rounded-2xl shadow-2xl shadow-black/30 p-8 lg:p-12">
          {submitted ? (
            <div role="status" className="py-8 text-center fade-in-up">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#38E1C6]/10 text-[#38E1C6]">
                <CheckCircle className="h-8 w-8" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-3">Message received</h2>
              <p className="text-[#8E8CA3] mb-8 max-w-md mx-auto">
                Thank you. We&apos;ll get back to you within 24 hours. For a faster reply, message us
                on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7B5CFF] px-6 py-3 font-semibold text-white transition-all hover:bg-[#8E73FF]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-lg border border-[#232330] px-6 py-3 font-semibold transition-colors hover:border-[#38E1C6] hover:text-[#38E1C6]"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Tell us about your project</h2>
              <p className="text-[#8E8CA3] mb-10">Fields marked * are required.</p>

              <form onSubmit={handleSubmit} className="space-y-7" noValidate={false}>
                <input type="hidden" name="from_name" value="Daleon Dynamics Website" />

                {/* Spam trap: real visitors never see or tick this */}
                <div className="hidden" aria-hidden="true">
                  <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>Full name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClasses}>Phone / WhatsApp *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="+254 712 345 678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>Email address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className={labelClasses}>What do you need?</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">Choose a service</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className={labelClasses}>Budget range (optional)</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">Select a range</option>
                      {budgetOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>Project details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClasses} resize-y`}
                    placeholder="What do you need, what is your timeline, and are there any must-have features?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full bg-[#7B5CFF] hover:bg-[#8E73FF] disabled:bg-[#7B5CFF]/40 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-[#7B5CFF]/20"
                >
                  {isSubmitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </button>

                {error && (
                  <div
                    role="alert"
                    className="text-center p-4 rounded-lg text-sm font-medium bg-red-500/10 text-red-300 border border-red-500/30"
                  >
                    {error}
                  </div>
                )}

                <p className="text-center text-sm text-[#8E8CA3]">
                  We use your details only to respond to your enquiry. See our{" "}
                  <Link href="/privacy" className="underline underline-offset-4 hover:text-[#38E1C6]">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-2 space-y-8">
          {/* WhatsApp: fastest route */}
          <div className="rounded-2xl border border-[#38E1C6]/30 bg-[#0F141B] p-8">
            <h2 className="text-xl font-semibold mb-2">Prefer to chat?</h2>
            <p className="text-sm text-[#8E8CA3] mb-5">
              Message us on WhatsApp for the quickest reply.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-[#0A0A0F] transition-colors hover:bg-[#20BD5A]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact details</h2>
            <ul className="space-y-6">
              <li className="flex gap-5">
                <div className="w-12 h-12 bg-[#7B5CFF]/10 text-[#38E1C6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-[#F2F1F7] mb-1">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-[#7B5CFF] hover:text-[#8E73FF] transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 bg-[#7B5CFF]/10 text-[#38E1C6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-[#F2F1F7] mb-1">Phone / WhatsApp</p>
                  <a
                    href="tel:+254142021359"
                    className="text-[#7B5CFF] hover:text-[#8E73FF] transition-colors"
                  >
                    +254 142 021 359
                  </a>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 bg-[#7B5CFF]/10 text-[#38E1C6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-[#F2F1F7] mb-1">Based in</p>
                  <p className="text-[#8E8CA3] leading-relaxed">
                    Nairobi, Kenya. Serving clients nationwide and remotely.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* What happens next */}
          <div className="bg-[#0F141B] border border-[#232330] rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-5">What happens next</h2>
            <ol className="space-y-4">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-4 text-sm text-[#C9C8D6]">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-[#232330] font-mono text-xs text-[#7B5CFF]">
                    {i + 1}
                  </span>
                  <span className="pt-1">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactClient;