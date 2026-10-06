// app/contact/page.tsx

import type { Metadata } from 'next';
import ContactClient from './ContactClient';

const SITE_URL = 'https://daleondynamics.com';
const PAGE_PATH = '/contact';

const TITLE = 'Contact Daleon Dynamics | Free Quote for Websites & Web Apps';
const DESCRIPTION =
  'Get a free, fixed-price quote for a website from KES 55,000 or a custom web app from KES 200,000. Nairobi web design and software company. Reply within 24 hours.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Daleon Dynamics',
    images: [{ url: '/icon.png', alt: 'Daleon Dynamics logo' }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/icon.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${SITE_URL}${PAGE_PATH}#page`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: 'Contact Daleon Dynamics',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}${PAGE_PATH}` },
      ],
    },
  ],
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