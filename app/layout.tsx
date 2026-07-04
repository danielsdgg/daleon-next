import type { Metadata, Viewport } from 'next';
import "./globals.css";
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://daleondynamics.com'),

  title: {
    default: 'Web Design Company Nairobi | Custom Software Development Kenya',
    template: '%s | Daleon Dynamics',
  },

  description: 'Leading web design and custom software development company in Nairobi, Kenya. We build high-converting websites, powerful web applications, business automation systems, and biometric access control solutions.',

  keywords: [
    'web design nairobi', 'website development nairobi', 'custom software development nairobi',
    'web application development kenya', 'high converting websites nairobi',
    'business automation kenya', 'access control systems nairobi', 'biometric access control kenya',
    'm-pesa integration kenya', 'software company nairobi', 'ecommerce website kenya', 'daleon dynamics'
  ],

  authors: [{ name: 'Daleon Dynamics' }],
  creator: 'Daleon Dynamics',
  publisher: 'Daleon Dynamics',

  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
    shortcut: '/icon.png',
  },

  openGraph: {
    title: 'Web Design Company Nairobi | Custom Software Development Kenya',
    description: 'Professional websites, custom web apps, automation systems and biometric access control solutions in Nairobi, Kenya.',
    url: 'https://daleondynamics.com',
    siteName: 'Daleon Dynamics',
    images: [
      {
        url: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png',
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics - Web Design & Custom Software Nairobi',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company Nairobi | Custom Software Kenya',
    description: 'High-performance websites and custom systems for Kenyan businesses.',
    images: ['https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://daleondynamics.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-KE">
      <body className="antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />

        {/* Organization + LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://daleondynamics.com/#organization",
                  "name": "Daleon Dynamics",
                  "url": "https://daleondynamics.com",
                  "logo": "https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png",
                  "description": "Leading web design and custom software development company in Nairobi, Kenya.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nairobi",
                    "addressCountry": "KE"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+254142021359",
                    "contactType": "customer service",
                    "availableLanguage": "English"
                  },
                  "areaServed": "Kenya"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://daleondynamics.com/#localbusiness",
                  "name": "Daleon Dynamics",
                  "image": "https://res.cloudinary.com/ddei3mzex/image/upload/v1777973406/logo_ztwhc2.png",
                  "url": "https://daleondynamics.com",
                  "telephone": "+254142021359",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nairobi",
                    "addressCountry": "KE"
                  },
                  "priceRange": "$$",
                  "description": "Web design, custom software development, and access control systems company in Nairobi, Kenya.",
                  "serviceType": [
                    "Web Design", 
                    "Custom Web Applications", 
                    "Business Automation", 
                    "Access Control Systems"
                  ],
                  "areaServed": "Kenya"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://daleondynamics.com/#website",
                  "url": "https://daleondynamics.com/",
                  "name": "Daleon Dynamics"
                }
              ]
            })
          }}
        />
        

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/254142021359"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
          aria-label="Chat with us on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.65 1.43 5.14L2 22l4.86-1.43C8.35 21.475 10.11 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.74 0-3.36-.48-4.72-1.31L4 20l1.31-3.28C4.48 15.36 4 13.74 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}