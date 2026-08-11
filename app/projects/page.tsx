// app/projects/page.tsx
import type { Metadata } from 'next';
import ProjectsGrid from './ProjectsGrid';

export const metadata: Metadata = {
  title: { absolute: 'Projects | Web & Software Portfolio' },
  description:
    'Explore our portfolio of successful projects including insurance platforms, learning management systems, access control solutions, real estate platforms, and ecommerce websites built for Kenyan businesses.',
  keywords: [
    'web development projects kenya',
    'custom software projects nairobi',
    'website design portfolio kenya',
    'high converting websites kenya',
    'custom web applications kenya',
    'access control systems projects',
    'insurance software kenya',
    'learning management system kenya',
    'real estate platform kenya',
    'software development portfolio kenya',
    'daleon dynamics projects',
  ],
  alternates: {
    canonical: 'https://daleondynamics.com/projects',
  },
  openGraph: {
    title: 'Projects - Real Results Delivered | Daleon Dynamics',
    description:
      'See how we deliver high-impact digital solutions for Kenyan businesses — from insurance platforms to real estate and secure access control systems.',
    url: 'https://daleondynamics.com/projects',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics Projects Portfolio',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Real Results Delivered | Daleon Dynamics',
    description: 'Insurance, education, security, e-commerce, and real estate platforms — built for Kenyan businesses.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daleondynamics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://daleondynamics.com/projects' },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Daleon Dynamics Project Portfolio',
        itemListElement: [
          {
            '@type': 'CreativeWork',
            position: 1,
            name: 'Karen Direct Insurance Brokers',
            description:
              'Insurance management platform with policy administration, claims processing, client portal, and analytics.',
            url: 'https://www.karendirectins.com/',
            datePublished: '2026',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
          {
            '@type': 'CreativeWork',
            position: 2,
            name: 'Morgan Learning Academy LMS',
            description: 'Learning Management System with course management, student tracking, assessments, and parent portal.',
            url: 'https://canvas-1-jxo5.onrender.com/',
            datePublished: '2024',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
          {
            '@type': 'CreativeWork',
            position: 3,
            name: 'SecureGate Access Control',
            description: 'Biometric access control system with monitoring, visitor management, and attendance tracking.',
            datePublished: '2025',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
          {
            '@type': 'CreativeWork',
            position: 4,
            name: 'HeroCloth E-commerce Store',
            description: 'Ecommerce platform with product browsing, secure checkout, M-Pesa integration, and order management.',
            url: 'https://herocloth.vercel.app',
            datePublished: '2025',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
          {
            '@type': 'CreativeWork',
            position: 5,
            name: 'My Genesis Fortune',
            description:
              'AI-powered real estate platform connecting buyers, tenants, landlords, and agents to find, buy, rent, and manage property in Kenya.',
            url: 'https://mygenesisfortune.com',
            datePublished: '2026',
            author: { '@type': 'Organization', name: 'Daleon Dynamics' },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectsGrid />
    </>
  );
}