// app/contact/page.tsx
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact us | Daleon Dynamics',
  description: 'Get a free quote for professional websites, custom web applications, business automation systems, or biometric access control solutions in Nairobi, Kenya.',
  
  keywords: [
    'web design nairobi contact', 'custom software development kenya quote',
    'website development nairobi', 'access control systems kenya', 
    'software company nairobi contact', 'hire web developers nairobi',
    'daleon dynamics contact'
  ],

  alternates: {
    canonical: 'https://daleondynamics.com/contact',
  },

  openGraph: {
    title: 'Get a Free Quote - Web Design & Custom Software Nairobi',
    description: 'Ready to transform your business? Contact Daleon Dynamics in Nairobi today.',
    url: 'https://daleondynamics.com/contact',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Contact Daleon Dynamics Nairobi'
      }
    ],
    locale: 'en_KE',
    type: 'website'
  }
};

// Structured Data (Server-side)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Daleon Dynamics",
      "url": "https://daleondynamics.com",
      "telephone": "+254142021359",
      "email": "info@daleondynamics.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    },
    {
      "@type": "ContactPage",
      "url": "https://daleondynamics.com/contact"
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}