"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
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
        setSubmitStatus({
          type: 'success',
          message: "Thank you! Your message has been received."
        });
        
        // Show big centered success notification
        setShowSuccessToast(true);
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide success toast after 5 seconds
  useEffect(() => {
    if (showSuccessToast) {
      const timer = setTimeout(() => {
        setShowSuccessToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessToast]);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-zinc-950 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#3b82f610_0%,transparent_60%)]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            GET IN TOUCH
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
            Let&apos;s Build Something<br />
            <span className="text-blue-400">Great Together</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Your vision deserves exceptional execution. Tell us about your project — 
            we personally review every inquiry.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-5 gap-16 lg:gap-20">
        
        {/* Contact Form */}
        <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl shadow-2xl p-10 lg:p-16">
          <h2 className="text-4xl font-bold tracking-tighter text-gray-900 mb-3">
            Start Your Project
          </h2>
          <p className="text-gray-600 mb-12">We typically respond within 24 hours.</p>
          
          <form onSubmit={handleSubmit} className="space-y-9">
            <input type="hidden" name="from_name" value="Daleon Dynamics Website" />

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-7 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-7 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-400"
                  placeholder="+254 712 345 678"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-7 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-400"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Interested Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-7 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all bg-white"
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
              <label className="block text-sm font-semibold text-gray-700 mb-3">Project Details / Requirements *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                className="w-full px-7 py-5 text-lg border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all resize-y placeholder:text-gray-400"
                placeholder="Tell us about your project goals, timeline, budget range, or any specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-7 rounded-3xl font-semibold text-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-blue-200 hover:shadow-xl"
            >
              {isSubmitting ? (
                <>Sending Your Message...</>
              ) : (
                <>
                  Send Message
                  <Send className="w-6 h-6" />
                </>
              )}
            </button>

            {submitStatus && submitStatus.type === 'error' && (
              <div className="text-center p-5 rounded-2xl text-sm font-medium bg-red-100 text-red-700 border border-red-200">
                {submitStatus.message}
              </div>
            )}

            <p className="text-center text-sm text-gray-500">
              We respect your time. Every inquiry is personally reviewed.
            </p>
          </form>
        </div>

        {/* Contact Information Sidebar */}
        <div className="lg:col-span-2 space-y-12 lg:pt-8">
          <div>
            <h3 className="text-3xl font-semibold mb-10 text-gray-900">Let&apos;s Connect</h3>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Email</p>
                  <a href="mailto:info@daleondynamics.com" className="text-blue-600 hover:underline text-xl">
                    info@daleondynamics.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Phone / WhatsApp</p>
                  <a href="tel:+254707319080" className="text-blue-600 hover:underline text-xl">
                    +254 707 319 080
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Office Location</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Note */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10">
            <p className="italic text-xl leading-relaxed text-gray-700">
              &ldquo;We personally review every inquiry. No bots. No generic responses.&rdquo;
            </p>
            <p className="mt-6 text-gray-500 font-medium">— The Daleon Dynamics Team</p>
          </div>
        </div>
      </div>

      {/* SUCCESS NOTIFICATION - Center of Screen */}
      {showSuccessToast && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <div className="bg-emerald-600 text-white px-10 py-6 rounded-3xl shadow-2xl flex items-center gap-5 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight">Message Sent Successfully!</p>
              <p className="text-emerald-100 mt-1 text-lg">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;