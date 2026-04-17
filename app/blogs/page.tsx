import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Daleon Dynamics - Custom Software & Web Development Insights',
  description: 'Expert articles on custom software development, web development in Kenya, access control systems, digital transformation, and business growth strategies.',
  keywords: 'custom software Kenya, web development Kenya, access control systems, business software, digital transformation Kenya, website development Nairobi',
  openGraph: {
    title: 'Blog | Daleon Dynamics',
    description: 'Insights on custom software, websites, web apps, and security systems for Kenyan businesses.',
    images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200'],
  },
};

const blogPosts = [
  {
    id: 1,
    title: "How Custom Software Development Can Transform Your Business in 2025",
    excerpt: "Discover how tailored software solutions can automate processes, reduce costs, and give your business a competitive advantage in today's digital economy.",
    date: "April 5, 2026",
    readTime: "8 min read",
    category: "Custom Software",
    slug: "custom-software-2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Building High-Converting Websites in Kenya",
    excerpt: "Learn the key principles of modern web design, performance optimization, and conversion strategies that actually work for Kenyan businesses.",
    date: "March 28, 2026",
    readTime: "12 min read",
    category: "Web Development",
    slug: "high-converting-websites-kenya",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
  },
  {
    id: 3,
    title: "Why Your Business Needs a Professional Access Control System",
    excerpt: "Explore the benefits of modern access control systems, from biometric security to cloud-based management, and how they protect your organization.",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Security",
    slug: "access-control-systems",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
  },
  {
    id: 4,
    title: "The Cost of Poor Software vs Investing in Quality Development",
    excerpt: "A detailed breakdown of hidden costs of using outdated or poorly built software and why investing in professional development pays off long-term.",
    date: "February 20, 2026",
    readTime: "10 min read",
    category: "Business Strategy",
    slug: "cost-of-poor-software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-950 to-blue-950 text-white py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            KNOWLEDGE HUB
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
            Insights &amp; Strategies<br />
            <span className="text-blue-400">for Growing Businesses</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Expert articles on custom software, web development in Kenya, access control systems, 
            and practical digital growth strategies.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-100 hover:border-blue-200 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-9 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <span className="ml-auto bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight mb-5 group-hover:text-blue-600 transition-colors line-clamp-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-8 flex-1 line-clamp-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all mt-auto">
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-zinc-950 py-24 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-6">Stay Updated with Industry Insights</h2>
          <p className="text-xl text-gray-400 mb-12">Get monthly tips on software development, web technologies, and business growth strategies.</p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-blue-500 text-white placeholder:text-gray-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl font-semibold transition-all whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-5">Zero spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;