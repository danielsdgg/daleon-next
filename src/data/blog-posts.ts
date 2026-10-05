// src/data/blog-posts.ts

export interface BlogFaq {
  q: string;
  a: string;
}

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
  faqs?: BlogFaq[];
}

const posts: BlogPost[] = [
  /* ------------------------------------------------------------------ */
  {
    id: 1,
    title: "Custom Software vs. Off-the-Shelf: What's Right for Your Kenyan Business in 2026?",
    excerpt:
      "Off-the-shelf tools are fast and cheap to start with. Custom software costs more upfront but fits your business exactly. Here's how to actually decide, not just guess.",
    date: 'April 5, 2026',
    dateISO: '2026-04-05',
    category: 'Custom Software',
    // Slug kept as-is so any indexed or shared URL keeps working.
    slug: 'custom-software-2025',
    image: '/blog1.jpg',
    content: `
      <blockquote><strong>Quick answer:</strong> Off-the-shelf software is faster and cheaper to start with, which suits standard needs like invoicing or team chat. Custom software costs more upfront but fits your exact workflow, avoids per-user fees piling up, and is the better call once your business has outgrown generic tools or depends heavily on things like M-Pesa. Below is how to tell which situation you are in.</blockquote>

      <h2>This Isn't a Technical Decision. It's a Business One.</h2>
      <p>Every growing Kenyan business eventually hits the same wall: the spreadsheet, the WhatsApp-based order tracking, or the generic CRM stops fitting how the business actually works. At that point the question isn't "what software should we buy". It is whether to buy something built for everyone, or build something built for you.</p>

      <h2>What Off-the-Shelf Software Actually Gets You</h2>
      <p>Tools like Slack, QuickBooks, or a generic CRM exist because most businesses share the same basic problems: invoicing, communication, task tracking. Off-the-shelf software solves those cheaply and quickly, with little or no development time, a short onboarding period, and predictable monthly costs. The trade-off is fit. You adapt your workflow to the software, not the other way around, and as your team grows, per-user subscription costs can climb faster than expected.</p>

      <h2>What Custom Software Solves Instead</h2>
      <p>Custom software is built around your actual processes: your approval chains, your reporting needs, your customer journey. For Kenyan businesses that often means things generic tools weren't built for, such as M-Pesa payment flows, mobile-friendly experiences for patchy connectivity, or dashboards structured around how you actually report.</p>
      <ul>
        <li><strong>You control the product.</strong> No sudden pricing changes, no forced upgrades, and no vendor deciding to retire the tool you depend on. Ownership terms, including source code access, should be agreed in writing before the build starts.</li>
        <li><strong>It grows with you.</strong> Add a module, change a workflow, or integrate a new payment provider without waiting on someone else's product roadmap.</li>
        <li><strong>It fits from day one.</strong> No working around a tool that was never built with your business in mind.</li>
      </ul>

      <h2>Side by Side</h2>
      <table>
        <thead>
          <tr><th>Factor</th><th>Off-the-Shelf</th><th>Custom Software</th></tr>
        </thead>
        <tbody>
          <tr><td>Upfront cost</td><td>Low (subscription)</td><td>Higher, one-time build</td></tr>
          <tr><td>Time to launch</td><td>Days</td><td>Weeks to months</td></tr>
          <tr><td>Fit to your workflow</td><td>You adapt to it</td><td>Built around you</td></tr>
          <tr><td>Control</td><td>Rented: access ends if you stop paying</td><td>You control the finished product, on terms agreed in writing</td></tr>
          <tr><td>Cost as you scale</td><td>Grows per user, per month</td><td>No per-user licence fees; hosting and maintenance still apply</td></tr>
          <tr><td>M-Pesa and local integrations</td><td>Rarely built in</td><td>Built to your spec</td></tr>
        </tbody>
      </table>

      <h2>Why This Decision Matters in Kenya</h2>
      <p>Digital payments are already central to how Kenyan small businesses operate. <a href="https://www.mastercard.com/news/eemea/en/newsroom/press-releases/en/2025-1/february/mastercard-sme-confidence-index-kenyan-smes-embrace-digital-payments-and-innovation-to-drive-business-growth/" target="_blank" rel="noopener noreferrer">Mastercard's SME Confidence Index</a>, published in February 2025, reported that 91% of Kenyan SMEs are adopting digital payments. That is why "does this software handle M-Pesa properly" is not a minor feature request here. It is often central to whether a tool works for your business at all, and generic international software frequently treats mobile money as an afterthought.</p>

      <h2>A Real Example</h2>
      <p>We built a custom Learning Management System for <strong>Morgan Learning Academy</strong> after they outgrew a mix of spreadsheets and a generic school app that didn't match how the school tracked students, assessments, and parent communication. The custom build reduced their administrative workload by roughly 65%, because it was designed around their actual process. You can see more on our <a href="/projects">projects page</a>.</p>

      <h2>So, Which One Is Right for You?</h2>
      <p>If your needs are standard, such as basic invoicing, simple team communication, or a generic CRM, a good off-the-shelf tool is usually the smarter early move. Custom software earns its higher upfront cost when your workflow is genuinely specific, when integrations like M-Pesa are central to how you operate, or when a subscription tool is starting to hold your business back rather than help it.</p>

      <h2>Talk to Us Before You Decide</h2>
      <p>We build <a href="/services/custom-web-apps">custom web applications</a> for Kenyan businesses that have outgrown generic tools, and we will tell you honestly if a custom build isn't what you need yet. <a href="/contact">Get in touch</a> for a free consultation.</p>
    `,
    faqs: [
      {
        q: 'Is custom software more expensive than off-the-shelf in the long run?',
        a: 'Not necessarily. Off-the-shelf tools charge per user, per month, indefinitely, so costs compound as your team grows. Custom software has a higher one-time cost and no per-user licence fees, although hosting and maintenance still apply. Depending on your team size and needs, the total cost can cross over in favour of custom software within a few years.',
      },
      {
        q: 'Can I start with off-the-shelf and move to custom later?',
        a: 'Yes, and many businesses do exactly this. Starting with generic tools while you validate your process, then commissioning custom software once your workflow is proven and stable, is a completely reasonable path.',
      },
      {
        q: 'How long does custom software take to build in Kenya?',
        a: 'For a typical business application, expect roughly 12 to 20 weeks, depending on scope, modules, and integrations.',
      },
      {
        q: 'Does custom software handle M-Pesa better than off-the-shelf tools?',
        a: "Generally yes. Many international platforms weren't built with M-Pesa in mind and support it poorly or not at all. Custom software can integrate M-Pesa's Daraja API directly into your checkout or invoicing flow.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 2,
    title: 'The Ultimate Guide to Building High-Converting Websites in Kenya',
    excerpt:
      'The key principles of mobile-first design, speed, local SEO, and conversion strategy that make a Kenyan business website bring in enquiries instead of just looking good.',
    date: 'March 28, 2026',
    dateISO: '2026-03-28',
    category: 'Web Development',
    slug: 'high-converting-websites-kenya',
    image: '/blog2.jpg',
    content: `
      <blockquote><strong>Quick answer:</strong> A high-converting website is one built to make visitors take a specific action, such as calling you, messaging you on WhatsApp, or placing an order. It does that through speed, clear calls to action, visible trust signals, and search visibility. Looks matter, but they are the smaller part.</blockquote>

      <h2>Why Conversion Matters More Than Looks</h2>
      <p>Most visitors to a Kenyan business website arrive on a phone, often on a mobile data connection. If the page is slow, confusing, or buries your contact details, they leave and call a competitor instead. A beautiful website that doesn't produce enquiries is an expensive brochure. A high-converting website is built backwards from the action you want visitors to take.</p>

      <h2>1. Give Every Page One Clear Goal</h2>
      <p>Decide what each page is for: get a quote, book a visit, call, or buy. Then make that action obvious, with one primary button above the fold and repeated at the end of the page. Pages that offer five equal choices tend to get none of them.</p>

      <h2>2. Make It Fast on Mobile</h2>
      <p>Speed is both a ranking factor and a conversion factor. Google's Core Web Vitals treat a main content load time of 2.5 seconds or less as "good". The common causes of slow sites are oversized images, too many plugins or third-party scripts, and cheap hosting. Test your site on a mid-range phone on mobile data, not just on your office Wi-Fi.</p>

      <h2>3. Make Contacting You Effortless</h2>
      <ul>
        <li><strong>WhatsApp and click-to-call buttons.</strong> For many Kenyan customers these are easier than any form.</li>
        <li><strong>A short enquiry form.</strong> Name, phone number, and what they need. Every extra field costs you enquiries.</li>
        <li><strong>Visible contact details</strong> on every page, not hidden on a contact page.</li>
        <li><strong>Fast replies.</strong> The business that answers first often wins the customer, so your website is only as good as your response time.</li>
      </ul>

      <h2>4. Build Trust Quickly</h2>
      <p>Visitors decide within seconds whether you look credible. Use real photos instead of generic stock images, show your prices or at least a starting price, name real clients and testimonials (with their permission), and make your location, phone number, and email easy to find. Clear timelines and a plain explanation of how you work reduce hesitation more than slogans do.</p>

      <h2>5. Be Findable: Local SEO Basics</h2>
      <ul>
        <li>Set up and complete your <strong>Google Business Profile</strong>, with photos, services, and reviews.</li>
        <li>Put your location and service in page titles and headings, for example "Web Design in Nairobi", written naturally.</li>
        <li>Give each service its own page, with its own price information and FAQ.</li>
        <li>Add structured data (schema) so Google understands your business, services, and FAQs.</li>
        <li>Keep your name, address, and phone number identical everywhere they appear.</li>
      </ul>
      <p>Be realistic about timing. Google usually indexes a new site within weeks, but meaningful ranking movement typically takes several months and keeps building as you add content and earn links.</p>

      <h2>6. Make Paying Easy (If You Sell Online)</h2>
      <p>If customers pay online, M-Pesa should be a first-class option, not a "send money and forward the message" workaround. Our guide to <a href="/blog/mpesa-integration-guide-kenya">M-Pesa integration for business websites</a> explains what it involves.</p>

      <h2>7. Measure What Happens</h2>
      <p>Install Google Analytics 4 and Google Search Console from day one. Track the actions that matter: form submissions, calls, and WhatsApp clicks. Without that data you are guessing which pages and keywords bring in business.</p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Slow pages caused by heavy images and too many scripts</li>
        <li>No clear call to action, or contact details buried in a footer</li>
        <li>Stock photos and vague copy that could describe any company</li>
        <li>No analytics, so nobody knows what works</li>
        <li>Never answering the enquiries the site generates</li>
      </ul>

      <h2>Quick Checklist</h2>
      <ul>
        <li>One clear action on every page</li>
        <li>Mobile-first layout that loads in under about 2.5 seconds</li>
        <li>WhatsApp, call, and short-form options on every page</li>
        <li>Real photos, real contact details, and visible pricing or price guidance</li>
        <li>Google Business Profile set up, plus titles, headings, and schema written for local search</li>
        <li>Analytics and Search Console installed</li>
      </ul>

      <h2>Ready for Better Results?</h2>
      <p>We build <a href="/services/high-converting-website">high-converting websites</a> for Kenyan businesses, with published starting prices. If you are weighing the budget, read <a href="/blog/website-cost-kenya-2026">how much a website really costs in Kenya</a>, or <a href="/contact">get a free quote</a>.</p>
    `,
    faqs: [
      {
        q: 'What makes a website high-converting?',
        a: 'A high-converting website is built to make visitors take a specific action, such as calling, messaging on WhatsApp, or buying. It combines a fast mobile experience, one clear call to action per page, visible trust signals like real photos and contact details, and search visibility so the right people find it.',
      },
      {
        q: 'How fast should my website load?',
        a: "Google's Core Web Vitals treat a largest content load time of 2.5 seconds or less as good. Aim to hit that on a mid-range phone using mobile data, since that is how most of your visitors will see the site.",
      },
      {
        q: 'How long does it take for a new website to rank on Google in Kenya?',
        a: 'Google usually discovers a new site within a couple of weeks, but meaningful ranking movement typically takes several months and depends on competition, content quality, and links. Anyone promising page-one rankings within days is not being realistic.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 3,
    title: 'How Much Does a Website Really Cost in Kenya? (2026 Honest Pricing Breakdown)',
    excerpt:
      "Most guides give you a vague \"it depends\" range. Here's exactly what we charge, what drives the price up or down, and what other quotes often leave out.",
    date: 'July 22, 2026',
    dateISO: '2026-07-22',
    category: 'Business Strategy',
    slug: 'website-cost-kenya-2026',
    // TODO: this image is also used by the "cost of poor software" post. Give each post its own.
    image: '/blog3.jpg',
    content: `
      <blockquote><strong>Quick answer:</strong> At Daleon Dynamics, a professional high-converting business website starts from KES 55,000, and a custom web application starts from KES 200,000. The final price depends on pages, features, and integrations, and you get a fixed-price quote before any work begins.</blockquote>

      <h2>Why "It Depends" Isn't a Good Enough Answer</h2>
      <p>Search for website costs in Kenya and you will find quotes ranging from a few thousand shillings to well over a million, with very little explanation of where your project lands. Open-ended quotes also let the final number move after you have committed. We'd rather tell you upfront.</p>

      <h2>What Actually Drives the Price</h2>
      <p>Three things move the number more than anything else: how many pages and how custom the design is, whether the site needs to <em>do</em> something beyond display information (bookings, e-commerce, M-Pesa checkout), and how much back-end logic sits behind it, such as user accounts, dashboards, and admin panels.</p>

      <h2>Our Pricing</h2>
      <ul>
        <li><strong>High-Converting Website: from KES 55,000.</strong> A modern, responsive business website (up to 8 pages), mobile-first design, on-page SEO, contact forms, and 1 month of support.</li>
        <li><strong>Custom Web App: from KES 200,000.</strong> Custom design, user authentication, an admin dashboard, M-Pesa integration, and 2 months of support, for businesses that need more than a website.</li>
        <li><strong>Enterprise: custom quote.</strong> Multi-module systems, complex integrations, and full workflow automation, priced after a proper discovery call.</li>
      </ul>
      <p>These starting prices are also published on our <a href="/services">services page</a>. The final fixed price depends on your scope, and you receive it in writing before any work begins.</p>

      <h2>What Other Quotes Often Leave Out</h2>
      <p>Whichever developer you choose, ask for these in writing: domain registration, hosting, SSL certificate, business email, and ongoing maintenance. They are frequently missing from an initial quote and show up later as surprise costs. A website is not a one-time purchase, so ask what working with the developer looks like six months after launch. Your quote from us spells out what is included.</p>

      <h2>How to Get the Most From Your Budget</h2>
      <ul>
        <li>Start with the pages that bring in business: home, services, about, and contact.</li>
        <li>Add content and extra features in later phases, once you see what generates enquiries.</li>
        <li>Choose a website instead of a web app if you only need customers to find and contact you. Our guide to <a href="/blog/custom-software-2025">custom software vs. off-the-shelf</a> helps you decide.</li>
      </ul>

      <h2>Get a Real Number for Your Project</h2>
      <p>The only way to get an accurate quote is a short conversation, because no generic estimate can account for your specific needs. <a href="/contact">Get your free, personalised quote</a> and we will tell you where your project lands and why.</p>
    `,
    faqs: [
      {
        q: 'How much does a website cost in Kenya?',
        a: 'At Daleon Dynamics, professional high-converting business websites start from KES 55,000, and custom web applications start from KES 200,000. The final price depends on the number of pages, features, and integrations, and you receive a fixed-price quote before any work begins.',
      },
      {
        q: 'What does the starting price include?',
        a: 'A website starting at KES 55,000 includes a responsive, mobile-first design for up to 8 pages, on-page SEO, contact forms, and 1 month of support. A custom web app starting at KES 200,000 includes custom design, user authentication, an admin dashboard, M-Pesa integration, and 2 months of support.',
      },
      {
        q: 'What costs do other developers often leave out of a quote?',
        a: 'Domain registration, hosting, SSL, business email, and ongoing maintenance are commonly missing from an initial quote. Ask for all of them in writing, along with what happens after launch.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 4,
    title: 'M-Pesa Integration for Your Business Website: What Kenyan Business Owners Actually Need to Know',
    excerpt:
      'Most M-Pesa integration guides are written for developers. This one is written for the business owner deciding whether, and how, to add it.',
    date: 'July 30, 2026',
    dateISO: '2026-07-30',
    category: 'M-Pesa & Payments',
    slug: 'mpesa-integration-guide-kenya',
    image: '/blog4.jpg',
    content: `
      <blockquote><strong>Quick answer:</strong> M-Pesa integration lets customers pay on your website by approving a prompt on their phone (called STK Push), and your site is told automatically when the payment succeeds. You need a Paybill or Till number, Safaricom Daraja access, and carefully built payment confirmation handling.</blockquote>

      <h2>Why M-Pesa Isn't Optional in Kenya</h2>
      <p>For most Kenyan businesses selling online, M-Pesa isn't one payment option among several. It is the default. A website that makes customers "send money and forward the confirmation message" adds friction at the exact moment someone has decided to buy. That friction is one of the most common, and most fixable, reasons for lost sales on Kenyan business websites.</p>

      <h2>What "M-Pesa Integration" Actually Means</h2>
      <p>In plain terms, your website talks directly to Safaricom's payment system (through what developers call the Daraja API) so a customer can pay without leaving your site. The most common version is <strong>STK Push</strong>: the customer enters their phone number at checkout, a prompt appears on their phone asking them to approve the payment, and your website is notified automatically the moment it is confirmed. No manual confirmation messages, no waiting.</p>

      <h2>What It Takes to Get Live</h2>
      <ul>
        <li>A registered Paybill or Till number for your business</li>
        <li>Developer access to Safaricom's Daraja platform, tested first in a safe "sandbox" environment before going live</li>
        <li>A properly configured system that reliably receives and processes Safaricom's payment confirmations</li>
        <li>Completing Safaricom's go-live process before the integration handles real customer payments</li>
      </ul>

      <h2>Where Most Integrations Break</h2>
      <p>The technical setup itself usually isn't the hard part. What matters is what happens after a customer pays. If confirmation handling isn't built carefully, you can end up with a customer who was charged but whose order never updates on your side. That is a worse experience than not having M-Pesa at all, which is why this part deserves more care than it usually gets.</p>

      <h2>Do You Need a Developer for This?</h2>
      <p>The documentation is public, and a competent developer can build it. In practice, most business owners are better served by a team that has done this integration before, knows where it usually goes wrong, and can test it properly before real customer money is involved.</p>

      <h2>Get M-Pesa Working on Your Site</h2>
      <p>M-Pesa integration is included in our <a href="/services/custom-web-apps">custom web application</a> packages, and we can add it to a <a href="/services/high-converting-website">website</a> as an add-on where you need online payments. <a href="/contact">Talk to us</a> about adding it to yours.</p>
    `,
    faqs: [
      {
        q: 'What is STK Push?',
        a: "STK Push is the M-Pesa flow where a customer enters their phone number on your website and receives a prompt on their phone asking them to approve the payment. Your website is notified automatically when the payment is confirmed.",
      },
      {
        q: 'What do I need to accept M-Pesa on my website?',
        a: "You need a registered Paybill or Till number, developer access to Safaricom's Daraja platform, a system built to receive and process payment confirmations reliably, and to complete Safaricom's go-live process.",
      },
      {
        q: 'Can any website accept M-Pesa payments?',
        a: 'Not on its own. Accepting M-Pesa needs server-side logic to talk to Safaricom securely and to handle payment confirmations, so a purely static website needs that added through secure back-end functions or a payment link.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 5,
    title: 'How to Choose a Web Developer in Kenya: 7 Red Flags to Watch For',
    excerpt:
      "Your website is a business asset, not a one-off purchase. Here's what actually separates a developer worth hiring from one that will cost you more later.",
    date: 'August 12, 2026',
    dateISO: '2026-08-12',
    category: 'Business Strategy',
    slug: 'how-to-choose-web-developer-kenya',
    image: '/blog5.png',
    content: `
      <blockquote><strong>Quick answer:</strong> Before hiring a web developer in Kenya, make sure you get a written scope and price, milestone-based payments, a preview of the work in progress, real access to your site at handover, a post-launch plan, and verifiable examples of past work. Their absence is the red flag.</blockquote>

      <h2>Treat This Hiring Decision Like the Business Decision It Is</h2>
      <p>Search "web developer Nairobi" and you will find a flood of agencies, freelancers, and WhatsApp contacts, most with similar-looking portfolios and identical promises: fast, modern, affordable. The real differences only show up weeks into the project, which is why it pays to know the warning signs before you sign anything.</p>

      <h2>1. No Written Contract or Scope</h2>
      <p>If everything is agreed over WhatsApp voice notes with nothing in writing, you have no real recourse if the project changes shape halfway through. A short written agreement covering scope, timeline, and payment terms should be standard, not a special request.</p>

      <h2>2. Vague, Unbroken-Down Pricing</h2>
      <p>"We'll figure out the cost as we go" is not a quote. A serious developer can tell you what is included in a price and what isn't (hosting, domain, revisions, support) before you commit.</p>

      <h2>3. Pressure to Pay 100% Upfront</h2>
      <p>A deposit followed by milestone payments (for example deposit, midpoint, and final on delivery) is standard practice and protects both sides. Full payment demanded before any work is visible is a real risk signal.</p>

      <h2>4. No Staging Link or Preview During the Build</h2>
      <p>You should be able to see your website taking shape before launch day, not just be told to trust the process. If a developer won't share progress, ask why.</p>

      <h2>5. They Won't Hand Over Real Access</h2>
      <p>After final payment you should receive real access to your hosting, domain, and admin logins, not just a live link you don't control. If source code is not included, that should be stated clearly and agreed in writing. If a developer is vague about who controls the site after launch, push on it directly.</p>

      <h2>6. No Plan for What Happens After Launch</h2>
      <p>A website needs security updates, monitoring, and occasional content changes. Ask explicitly: "What does working with you look like six months after launch?" A confident, specific answer tells you more than any portfolio will.</p>

      <h2>7. Can't Show Real, Verifiable Work</h2>
      <p>A portfolio of screenshots proves little. Ask for a live site you can visit, a live demo, or a client you can speak to. Be wary of a developer who can provide none of these.</p>

      <h2>What We Do Differently</h2>
      <p>Published starting prices, written quotes, milestone-based payments, hosting access handed over at completion, and support and maintenance options after launch. Browse our <a href="/projects">client work</a>, see our <a href="/services">services and pricing</a>, or <a href="/contact">start a conversation</a> to see how it works in practice.</p>
    `,
    faqs: [
      {
        q: 'How do I know if a web developer in Kenya is legitimate?',
        a: 'Look for a written scope and price, milestone-based payments, a way to preview work in progress, real access to your site at handover, a clear post-launch plan, and verifiable examples such as live sites, demos, or clients you can contact.',
      },
      {
        q: 'Should I pay a web developer 100% upfront?',
        a: 'No. A deposit followed by milestone payments, for example deposit, midpoint, and final payment on delivery, is standard practice and protects both sides. Full payment before any work is visible is a risk signal.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 6,
    title: 'The Cost of Poor Software vs Investing in Quality Development',
    excerpt:
      'Outdated or poorly built software costs more than it appears to. Here are the hidden costs, a simple way to put a number on them, and when investing in better software pays off.',
    date: 'February 20, 2026',
    dateISO: '2026-02-20',
    category: 'Business Strategy',
    slug: 'cost-of-poor-software',
    // TODO: this image is also used by the website cost post. Give each post its own.
    image: '/blog3.jpg',
    content: `
      <blockquote><strong>Quick answer:</strong> Poor software rarely shows up as one big bill. It shows up as lost staff time, errors, downtime, security risk, and an inability to change. You can estimate what it costs by multiplying the hours your team loses by what those hours are worth, then comparing that with the cost of fixing the problem properly.</blockquote>

      <h2>The Real Price of Bad Software</h2>
      <p>Cheap or poorly built systems rarely fail loudly. They quietly drain money in small amounts every day, which makes the loss easy to ignore and hard to see on any single invoice.</p>

      <h2>Where the Hidden Costs Come From</h2>
      <ul>
        <li><strong>Lost staff time.</strong> Every workaround, double entry, and manual report adds up across a team and across a month.</li>
        <li><strong>Errors and rework.</strong> Data copied between systems by hand gets mistyped, and fixing it costs more than preventing it.</li>
        <li><strong>Downtime.</strong> A slow or unreliable system that goes down at a busy hour costs sales and customer trust.</li>
        <li><strong>Security risk.</strong> Outdated, unpatched systems are easier to attack, and a breach costs far more than maintenance would have.</li>
        <li><strong>Rigidity.</strong> If changing a simple workflow takes weeks, or isn't possible, your business is slowed by its own tools.</li>
      </ul>

      <h2>A Quick Way to Put a Number on It</h2>
      <p>Multiply the number of people affected by the hours each loses per day, the value of an hour, and the working days in a month. For example (illustrative figures, so replace them with your own): 5 staff, losing 1 hour a day, with an hour worth KES 400, over 22 working days comes to 5 × 1 × 400 × 22 = KES 44,000 a month, or KES 528,000 a year. Add the cost of errors and downtime on top, and you can compare the total with the cost of a proper fix.</p>

      <h2>When Investing in Better Software Pays Off</h2>
      <ul>
        <li>The same manual process is repeated daily by several people.</li>
        <li>Errors or delays are visibly costing you customers or money.</li>
        <li>You depend on a system nobody can maintain or update.</li>
        <li>Your tools can't handle M-Pesa or other integrations your business relies on.</li>
      </ul>

      <h2>When It Doesn't</h2>
      <p>If the problem is small, a well-chosen off-the-shelf tool or a small change to your process may be enough. Our guide to <a href="/blog/custom-software-2025">custom software vs. off-the-shelf</a> helps you work out which side you are on.</p>

      <h2>Work Out What Your Software Is Costing You</h2>
      <p>If the numbers suggest a proper fix is worth it, we build <a href="/services/custom-web-apps">custom web applications</a> for Kenyan businesses, and we will tell you honestly whether a custom build makes sense. <a href="/contact">Get in touch</a> for a free conversation and a fixed-price quote.</p>
    `,
    faqs: [
      {
        q: 'How do I calculate the cost of poor software?',
        a: 'Multiply the number of people affected by the hours each loses per day, the value of an hour, and the working days in a month. Then add the cost of errors, downtime, and security risk, and compare the total with the cost of a proper fix.',
      },
      {
        q: 'What are the hidden costs of outdated software?',
        a: 'The main hidden costs are lost staff time on workarounds, errors and rework, downtime, security risk from unpatched systems, and the inability to change workflows when your business changes.',
      },
    ],
  },
];

// Newest first, so the blog list and "Keep reading" show the latest articles.
export const blogPosts: BlogPost[] = [...posts].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
);