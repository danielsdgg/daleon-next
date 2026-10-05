// app/projects/data.ts
export type Project = {
  slug: string;
  title: string;
  client?: string;
  tag: string;
  year?: string;
  description: string;
  result?: string; // only add results you can back up
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: 'morgan-technical-training-website',
    title: 'Morgan Technical Training Website',
    client: 'Morgan Technical Training',
    tag: 'Business Website',
    image:'/Mtt.jpg',
    description:
      'Marketing website for a Kenyan tech training school, built to rank for course searches and turn visitors into applications.',
    liveUrl: 'https://www.morgantechnicaltraining.co.ke',
    // TODO: add `result` once you have real Search Console / enquiry numbers,
    // for example: result: 'Organic clicks up X% in Y months'
  },
  {
    slug: 'morgan-learning-academy-lms',
    title: 'Morgan Learning Academy LMS',
    client: 'Morgan Learning Academy',
    tag: 'Learning Management System',
    year: '2024',
    description:
      'Learning platform with course management, student tracking, assessments, and a parent portal.',
    result: 'Reduced admin workload by 65%',
    image: '/morgan.webp',
    // liveUrl left out until the demo sits on a proper subdomain
  },
  {
    slug: 'herocloth-ecommerce-store',
    title: 'HeroCloth E-commerce Store',
    tag: 'Fashion E-commerce',
    year: '2025',
    description:
      'Online fashion store with product browsing, checkout, M-Pesa payment integration, and order management.',
    liveUrl: 'https://herocloth.vercel.app',
    image: '/fashions.png',
  },
  // My Genesis Fortune stays hidden until we confirm what it is (client work or
  // your own product) and exactly what the "AI-powered" part does:
  // {
  //   slug: 'my-genesis-fortune',
  //   title: 'My Genesis Fortune',
  //   tag: 'Real Estate Platform',
  //   year: '2026',
  //   description: '...',
  //   liveUrl: 'https://mygenesisfortune.com',
  // },
];