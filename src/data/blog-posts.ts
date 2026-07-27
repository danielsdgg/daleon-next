// src/data/blog-posts.ts

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string; // human-readable display date
  dateISO: string; // ISO 8601 for structured data
  category: string;
  slug: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How Custom Software Development Can Transform Your Business in 2025',
    excerpt:
      "Discover how tailored software solutions can automate processes, reduce costs, and give your business a competitive advantage in today's digital economy.",
    date: 'April 5, 2026',
    dateISO: '2026-04-05',
    category: 'Custom Software',
    slug: 'custom-software-2025',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200',
    content: `
      <h2>The Rise of Custom Software Development in Kenya</h2>
      <p>In 2025, Kenyan businesses face global competition. Generic software often fails to address local realities like M-Pesa integration, supply chain complexity, and regulatory changes. This is where <strong>custom software development Kenya</strong> delivers real advantage.</p>

      <h2>How Custom Software Transforms Businesses</h2>
      <ul>
        <li><strong>Process Automation</strong> — Save time by removing manual, repetitive tasks.</li>
        <li><strong>Seamless Integrations</strong> — Connect CRM, accounting, HR, and payments into one system.</li>
        <li><strong>True Scalability</strong> — Grow your user base without costly rework.</li>
        <li><strong>Local Market Insights</strong> — Dashboards built for Kenyan business realities.</li>
      </ul>

      <h2>Why Choose Daleon Dynamics?</h2>
      <p>As a Nairobi-based software company, we combine international standards with deep understanding of the Kenyan market.</p>

      <h2>Take the Next Step in 2026</h2>
      <p>Invest in <strong>custom software development Kenya</strong> that drives real ROI. Contact Daleon Dynamics for a free consultation.</p>
    `,
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Building High-Converting Websites in Kenya',
    excerpt:
      'Learn the key principles of modern web design, performance optimization, and conversion strategies that actually work for Kenyan businesses.',
    date: 'March 28, 2026',
    dateISO: '2026-03-28',
    category: 'Web Development',
    slug: 'high-converting-websites-kenya',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    content: `
      <h2>Why High-Converting Websites Are Critical in Kenya</h2>
      <p>With mobile usage dominating, slow or outdated websites cost Kenyan businesses real revenue every day. Professional <strong>web development Nairobi</strong> is now a must-have.</p>

      <h2>Essential Principles for Success</h2>
      <ul>
        <li><strong>Mobile-First Design</strong> — Most traffic comes from phones, so fast load times are non-negotiable.</li>
        <li><strong>Blazing Performance</strong> — Optimized Next.js, images, and East Africa CDN delivery.</li>
        <li><strong>Local Payment Solutions</strong> — Smooth M-Pesa, Airtel Money, and card integration.</li>
        <li><strong>SEO for Kenya</strong> — Target location-specific searches like "best [service] Nairobi".</li>
      </ul>

      <h2>Avoid These Common Mistakes</h2>
      <p>Free templates, ignoring speed, and poor mobile experience remain the top reasons websites fail in Kenya.</p>

      <h2>Ready for Better Results?</h2>
      <p>Let our Nairobi team build you a high-converting website tailored for the Kenyan market.</p>
    `,
  },
  {
    id: 3,
    title: 'Why Your Business Needs a Professional Access Control System',
    excerpt:
      'Explore the benefits of modern access control systems, from biometric security to cloud-based management, and how they protect your organization.',
    date: 'March 15, 2026',
    dateISO: '2026-03-15',
    category: 'Security',
    slug: 'access-control-systems',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
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
    `,
  },
  {
    id: 4,
    title: 'The Cost of Poor Software vs Investing in Quality Development',
    excerpt:
      'A detailed breakdown of hidden costs of using outdated or poorly built software and why investing in professional development pays off long-term.',
    date: 'February 20, 2026',
    dateISO: '2026-02-20',
    category: 'Business Strategy',
    slug: 'cost-of-poor-software',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    content: `
      <h2>The Real Price of Bad Software</h2>
      <p>Cheap or poorly built systems create hidden losses through downtime, low productivity, and security risks.</p>

      <h2>Hidden Costs</h2>
      <ul>
        <li>Downtime can cost significant lost revenue, even for a short outage.</li>
        <li>Frustrated employees working around clunky systems lose real productivity.</li>
        <li>Outdated systems carry increased vulnerability to cyberattacks.</li>
      </ul>

      <h2>Make the Smart Investment</h2>
      <p>Contact Daleon Dynamics today and stop paying the hidden price of poor software.</p>
    `,
  },
];