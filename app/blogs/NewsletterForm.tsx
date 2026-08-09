// app/blogs/NewsletterForm.tsx
"use client";

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData();
    formData.append('access_key', 'cdda325c-9fb8-4ccc-8b6f-a0e8d79e981c');
    formData.append('subject', 'Newsletter Signup - Daleon Dynamics Blog');
    formData.append('from_name', 'Daleon Dynamics Blog Newsletter');
    formData.append('email', email);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: "You're subscribed! We'll be in touch." });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to subscribe. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {status?.type === 'success' ? (
        <div className="flex items-center justify-center gap-3 text-accent bg-accent/10 border border-accent/30 rounded-lg py-4 px-6">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">{status.message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 rounded-lg bg-surface border border-line focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 text-ink placeholder:text-ink-dim transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary-hover disabled:bg-primary/40 px-8 py-3.5 rounded-lg font-semibold text-white transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>
      )}

      {status?.type === 'error' && (
        <p className="text-red-400 text-sm mt-3 text-center">{status.message}</p>
      )}

      <p className="text-xs text-ink-dim mt-5">Zero spam. Unsubscribe anytime.</p>
    </div>
  );
};

export default NewsletterForm;