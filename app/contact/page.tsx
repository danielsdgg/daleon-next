// app/contact/page.tsx
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: { absolute: 'Contact Us | Daleon Dynamics' },
  description:
    'Get a free quote for professional websites, custom web applications, business automation systems, or biometric access control solutions in Nairobi, Kenya.',
  keywords: [
    'web design nairobi contact', 'custom software development kenya quote',
    'website development nairobi', 'access control systems kenya',
    'software company nairobi contact', 'hire web developers nairobi',
    'daleon dynamics contact',
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/contact',
  },
  openGraph: {
    title: 'Get a Free Quote - Web Design & Custom Software Nairobi',
    description: 'Ready to transform your business? Contact Daleon Dynamics in Nairobi today.',
    url: 'https://daleondynamics.com/contact',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Contact Daleon Dynamics Nairobi',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Free Quote - Web Design & Custom Software Nairobi',
    description: 'Ready to transform your business? Contact Daleon Dynamics in Nairobi today.',
    images: ['/icon.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://daleondynamics.com/contact',
      url: 'https://daleondynamics.com/contact',
      name: 'Contact Daleon Dynamics',
      description:
        'Get a free quote for web design, custom software, business automation, or access control systems in Nairobi, Kenya.',
      about: {
        '@type': 'Organization',
        '@id': 'https://daleondynamics.com/#organization',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://daleondynamics.com/contact' },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactClient />
    </>
  );
}