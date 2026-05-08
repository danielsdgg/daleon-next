import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareButton from '@/src/components/ShareButton';

// ==================== BLOG DATA ====================
const blogPosts = [
  {
    id: 1,
    title: "How Custom Software Development Can Transform Your Business in 2025",
    excerpt: "Discover how tailored software solutions can automate processes, reduce costs, and give your business a competitive advantage in today's digital economy.",
    date: "April 5, 2026",
    readTime: "12 min read",
    category: "Custom Software",
    slug: "custom-software-2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
    content: `
      <h2>The Rise of Custom Software Development in Kenya</h2>
      <p>In 2025, Kenyan businesses face global competition. Generic software often fails to address local realities like M-Pesa integration, supply chain complexity, and regulatory changes. This is where <strong>custom software development Kenya</strong> delivers real advantage.</p>
      
      <h2>How Custom Software Transforms Businesses</h2>
      <ul>
        <li><strong>Process Automation</strong> — Save up to 40% operational time by removing manual tasks.</li>
        <li><strong>Seamless Integrations</strong> — Connect CRM, accounting, HR, and payments into one system.</li>
        <li><strong>True Scalability</strong> — Grow from 10 to 500+ users without costly rework.</li>
        <li><strong>Local Market Insights</strong> — Dashboards built for Kenyan business realities.</li>
      </ul>

      <h2>Proven Results in Kenya</h2>
      <p>A Nairobi logistics company cut delivery delays by 65%. A Kisumu retailer boosted online sales by 180% with a custom M-Pesa-ready platform.</p>

      <h2>Why Choose Daleon Dynamics?</h2>
      <p>As a Nairobi-based software company, we combine international standards with deep understanding of the Kenyan market.</p>

      <h2>Take the Next Step in 2026</h2>
      <p>Invest in <strong>custom software development Kenya</strong> that drives real ROI. Contact Daleon Dynamics for a free consultation.</p>
    `
  },
  {
    id: 2,
    title: "The Ultimate Guide to Building High-Converting Websites in Kenya",
    excerpt: "Learn the key principles of modern web design, performance optimization, and conversion strategies that actually work for Kenyan businesses.",
    date: "March 28, 2026",
    readTime: "15 min read",
    category: "Web Development",
    slug: "high-converting-websites-kenya",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    content: `
      <h2>Why High-Converting Websites Are Critical in Kenya</h2>
      <p>With mobile usage dominating, slow or outdated websites cost Kenyan businesses real revenue every day. Professional <strong>web development Nairobi</strong> is now a must-have.</p>

      <h2>Essential Principles for Success</h2>
      <ul>
        <li><strong>Mobile-First Design</strong> — 85%+ traffic comes from phones. Load time under 2 seconds is non-negotiable.</li>
        <li><strong>Blazing Performance</strong> — Optimized Next.js, images, and East Africa CDN delivery.</li>
        <li><strong>Local Payment Solutions</strong> — Smooth M-Pesa, Airtel Money, and card integration.</li>
        <li><strong>SEO for Kenya</strong> — Target location-specific searches like “best [service] Nairobi”.</li>
      </ul>

      <h2>Conversion Strategies That Work Locally</h2>
      <p>Strong CTAs, trust signals, and social proof have helped our clients triple conversion rates.</p>

      <h2>Avoid These Common Mistakes</h2>
      <p>Free templates, ignoring speed, and poor mobile experience remain the top reasons websites fail in Kenya.</p>

      <h2>Ready for Better Results?</h2>
      <p>Let our Nairobi team build you a high-converting website tailored for the Kenyan market.</p>
    `
  },
  {
    id: 3,
    title: "Why Your Business Needs a Professional Access Control System",
    excerpt: "Explore the benefits of modern access control systems, from biometric security to cloud-based management, and how they protect your organization.",
    date: "March 15, 2026",
    readTime: "9 min read",
    category: "Security",
    slug: "access-control-systems",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    content: `
      <h2>The Growing Security Needs in Kenya</h2>
      <p>From Nairobi CBD offices to industrial warehouses, threats are rising. A professional <strong>access control system Kenya</strong> has become essential.</p>

      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Biometric Technology</strong> — Fingerprint and facial recognition for superior security.</li>
        <li><strong>Cloud Management</strong> — Control access remotely from anywhere.</li>
        <li><strong>Real-Time Notifications</strong> — Instant alerts for unauthorized attempts.</li>
        <li><strong>Attendance Tracking</strong> — Automated employee time management.</li>
      </ul>

      <h2>Protect Your Business Today</h2>
      <p>Daleon Dynamics offers advanced, locally supported <strong>access control systems Kenya</strong>.</p>
    `
  },
  {
    id: 4,
    title: "The Cost of Poor Software vs Investing in Quality Development",
    excerpt: "A detailed breakdown of hidden costs of using outdated or poorly built software and why investing in professional development pays off long-term.",
    date: "February 20, 2026",
    readTime: "11 min read",
    category: "Business Strategy",
    slug: "cost-of-poor-software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    content: `
      <h2>The Real Price of Bad Software</h2>
      <p>Cheap or poorly built systems create hidden losses through downtime, low productivity, and security risks.</p>

      <h2>Hidden Costs</h2>
      <ul>
        <li>Downtime can cost hundreds of thousands of shillings in lost revenue.</li>
        <li>Frustrated employees lose up to 35% productivity.</li>
        <li>Increased vulnerability to cyberattacks.</li>
      </ul>

      <h2>The ROI of Quality Custom Software</h2>
      <p>Businesses see 300–500% return within 18 months when choosing professional <strong>software development Kenya</strong>.</p>

      <h2>Make the Smart Investment</h2>
      <p>Contact Daleon Dynamics today and stop paying the high price of poor software.</p>
    `
  }
];

// ==================== SEO METADATA ====================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Daleon Dynamics',
      robots: { index: false },
    };
  }

  // Optimized shorter title (under 65 characters)
  const optimizedTitle = post.title.length > 65 
    ? post.title.substring(0, 62) + "..." 
    : post.title;

  return {
    title: optimizedTitle,
    description: post.excerpt,
    keywords: [
      'custom software Kenya', 'web development Nairobi', 'access control systems Kenya',
      'business automation Kenya', post.category.toLowerCase(), 'software development Kenya'
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.date,
      authors: ['Daleon Dynamics'],
    },
    alternates: {
      canonical: `https://daleondynamics.com/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ==================== MAIN SERVER COMPONENT ====================
const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="relative h-[460px] md:h-[550px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-6 w-full">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Articles
            </Link>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90 mb-6">
              <span className="bg-blue-600 px-5 py-1.5 rounded-full text-xs font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-white">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 md:-mt-14 relative z-10 pb-20">
        <article className="bg-white rounded-3xl shadow-xl p-9 md:p-16 prose prose-zinc prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-strong:font-semibold prose-ul:my-8 prose-li:my-2.5"
          />
        </article>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-4xl mx-auto px-6 pb-24 flex flex-col sm:flex-row items-center justify-between gap-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold group"
        >
          <div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:border-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Browse All Articles
        </Link>

        <ShareButton title={post.title} />
      </div>
    </div>
  );
};

export default BlogPost;