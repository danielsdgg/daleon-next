// app/contact/ContactClient.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);

    formDataToSend.append('access_key', 'cdda325c-9fb8-4ccc-8b6f-a0e8d79e981c');
    formDataToSend.append('subject', 'New Contact Form Submission - Daleon Dynamics');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been received.' });
        setShowSuccessToast(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showSuccessToast) {
      const timer = setTimeout(() => setShowSuccessToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessToast]);

  const inputClasses =
    'w-full px-5 py-3.5 text-base bg-[#0A0A0F] border border-[#232330] rounded-lg text-[#F2F1F7] focus:outline-none focus:border-[#7B5CFF] focus:ring-4 focus:ring-[#7B5CFF]/15 transition-all placeholder:text-[#5C5A6E]';

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      {/* Compact page header — no oversized hero */}
      <section className="pt-32 pb-4 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-[#7B5CFF] mb-4">
            <span>{'//'}</span>
            <span>get-in-touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Build Something Great Together
          </h1>
          <p className="text-lg text-[#8E8CA3] max-w-2xl mx-auto">
            Your vision deserves exceptional execution. Tell us about your project — we personally review
            every inquiry.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div className="lg:col-span-3 bg-[#0F141B] border border-[#232330] rounded-2xl shadow-2xl shadow-black/30 p-8 lg:p-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Start Your Project</h2>
          <p className="text-[#8E8CA3] mb-10">We typically respond within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-7">
            <input type="hidden" name="from_name" value="Daleon Dynamics Website" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#8E8CA3] mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#8E8CA3] mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="+254 712 345 678"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#8E8CA3] mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#8E8CA3] mb-2">Interested Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="">Choose a service</option>
                  <option value="website">High-Converting Websites</option>
                  <option value="web-apps">Custom Web Apps & Systems</option>
                  <option value="access-control">Access Control Systems</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#8E8CA3] mb-2">
                Project Details / Requirements *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`${inputClasses} resize-y`}
                placeholder="Tell us about your project goals, timeline, budget range, or any specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#7B5CFF] hover:bg-[#8E73FF] disabled:bg-[#7B5CFF]/40 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-[#7B5CFF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38E1C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F141B]"
            >
              {isSubmitting ? (
                <>Sending Your Message...</>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {submitStatus && submitStatus.type === 'error' && (
              <div className="text-center p-4 rounded-lg text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/30">
                {submitStatus.message}
              </div>
            )}

            <p className="text-center text-sm text-[#5C5A6E]">
              We respect your time. Every inquiry is personally reviewed.
            </p>
          </form>
        </div>

        {/* Contact Information Sidebar */}
        <div id="lets-connect" className="lg:col-span-2 space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Let&apos;s Connect</h3>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-[#7B5CFF]/10 text-[#38E1C6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#F2F1F7] mb-1">Email</p>
                  <a
                    href="mailto:daleondynamics@gmail.com"
                    className="text-[#7B5CFF] hover:text-[#8E73FF] transition-colors"
                  >
                    daleondynamics@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-[#7B5CFF]/10 text-[#38E1C6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#F2F1F7] mb-1">Phone / WhatsApp</p>
                  <a
                    href="https://wa.me/254142021359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7B5CFF] hover:text-[#8E73FF] transition-colors"
                  >
                    +254 142 021 359
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-[#7B5CFF]/10 text-[#38E1C6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#F2F1F7] mb-1">Based In</p>
                  <p className="text-[#8E8CA3] leading-relaxed">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0F141B] border border-[#232330] rounded-2xl p-8">
            <p className="italic text-lg leading-relaxed text-[#8E8CA3]">
              &ldquo;We personally review every inquiry. No bots. No generic responses.&rdquo;
            </p>
            <p className="mt-4 text-[#5C5A6E] font-medium text-sm">— The Daleon Dynamics Team</p>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none px-6">
          <div className="bg-[#0F0F14] border border-[#38E1C6]/40 text-[#F2F1F7] px-8 py-5 rounded-2xl shadow-2xl shadow-black/50 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <div className="w-10 h-10 bg-[#38E1C6]/10 text-[#38E1C6] rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Message Sent Successfully!</p>
              <p className="text-[#8E8CA3] mt-0.5 text-sm">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactClient;