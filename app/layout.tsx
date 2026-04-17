import type { Metadata } from 'next';
import "./globals.css";
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.daleondynamics.com'),
  
  title: {
    default: 'Daleon Dynamics | Custom Software & Web Development',
    template: '%s | Daleon Dynamics'
  },
  
  description: 'Daleon Dynamics creates powerful custom software, high-performance websites, and web applications for small businesses, growing companies, and large institutions across Kenya and beyond.',
  
  keywords: [
    'custom software development',
    'web development Kenya',
    'web applications',
    'website design Kenya',
    'software company Kenya',
    'mobile app development',
    'cloud solutions',
    'business software',
    'Daleon Dynamics',
    'Kikuyu software company',
    'access control systems Kenya',
    'digital transformation Kenya'
  ],
  
  authors: [{ name: 'Daleon Dynamics' }],
  creator: 'Daleon Dynamics',

  // === FAVICON & ICONS SETUP (Most Important Part) ===
  icons: {
    icon: [
      { url: '/favicon.ico' },          
      { url: '/icon.png', type: 'image/png' },   
    ],
    apple: '/apple-icon.png',          
    shortcut: '/favicon.ico',
  },

  openGraph: {
    title: 'Daleon Dynamics | Custom Software & Web Development',
    description: 'We build scalable custom software, modern websites, and powerful web applications that help businesses grow.',
    images: [
      {
        url: '/assets/logo.png',     
        width: 1200,
        height: 630,
        alt: 'Daleon Dynamics Logo',
      },
    ],
    siteName: 'Daleon Dynamics',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Daleon Dynamics | Custom Software & Web Development',
    description: 'Professional custom software, websites & web apps for businesses in Kenya.',
    images: ['/assets/logo.png'],
    creator: '@daleondynamics',       
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://www.daleondynamics.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/254707319080"
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