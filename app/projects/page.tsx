// app/projects/page.tsx

import type { Metadata } from 'next';
import ProjectsGrid from './ProjectsGrid';
import { projects } from './data';

const SITE_URL = 'https://daleondynamics.com';
const PAGE_PATH = '/projects';

const TITLE = 'Client Work & Web Projects in Kenya | Daleon Dynamics';
const DESCRIPTION =
  'Selected websites and web applications built by Daleon Dynamics for Kenyan businesses and organisations. Browse our client work, then get a free quote.';

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
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}${PAGE_PATH}#page`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: 'Daleon Dynamics client work',
      description: DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.title,
          ...(p.liveUrl ? { url: p.liveUrl } : {}),
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}${PAGE_PATH}` },
      ],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsGrid />
    </>
  );
}