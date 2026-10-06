// app/terms/page.tsx

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const LAST_UPDATED = 'October 6, 2026';
const EMAIL = 'daleondynamics@gmail.com';

export const metadata: Metadata = {
  title: { absolute: 'Terms of Service | Daleon Dynamics' },
  description:
    'The terms that apply when you engage Daleon Dynamics for a website or custom web application: ownership, payment, support, and liability.',
  alternates: { canonical: '/terms' },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-[#F2F1F7]">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 leading-relaxed text-[#C9C8D6]">{children}</p>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-[#C9C8D6] marker:text-[#7B5CFF]">
    {children}
  </ul>
);
const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-[#F2F1F7]">{children}</strong>
);

const Terms: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F2F1F7]">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-[#38E1C6] transition-colors hover:text-[#5EEBD4]"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          <span className="font-medium">Back to homepage</span>
        </Link>

        <div className="rounded-3xl border border-[#232330] bg-[#0F141B] p-8 md:p-12 lg:p-16">
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-[#8E8CA3]">Last updated: {LAST_UPDATED}</p>

          <H2>1. Agreement to terms</H2>
          <P>
            These Terms of Service apply when you engage Daleon Dynamics (&quot;we&quot;, &quot;us&quot;) to
            design or build a website, web application, or related service. By accepting a quote or
            proposal, paying a deposit, or otherwise engaging us, you (&quot;the Client&quot;) agree to
            these terms. If a signed proposal or contract sets out different terms for your project, the
            signed document applies where it differs from this page.
          </P>

          <H2>2. Our services</H2>
          <P>
            Daleon Dynamics designs and builds high-converting websites, custom web applications, and
            business automation systems. We primarily build with Next.js, TypeScript, and Tailwind CSS, and
            can work with WordPress or other platforms on request. The scope, deliverables, price, and
            timeline of each project are set out in the quote or proposal we send you.
          </P>

          <H2>3. Intellectual property and code ownership</H2>
          <P>Please read this section carefully.</P>
          <UL>
            <li>
              <B>Final product:</B> on full and final payment, the Client owns the finished working product
              (the website, application, or system) as delivered, and receives access to the hosting and
              admin accounts set up for it.
            </li>
            <li>
              <B>Source code:</B> the source code is <B>not</B> included in the standard project price, and
              we retain the rights to it unless transferred under the next point.
            </li>
            <li>
              <B>Source code transfer:</B> if the Client wants the complete source code and the right to
              modify it independently, this must be agreed in writing in the contract before the project
              starts. It is charged at <B>5 times</B> the original project cost.
            </li>
            <li>
              <B>Portfolio:</B> we may show the project in our portfolio and marketing materials, unless a
              Non-Disclosure Agreement (NDA) is signed or the Client objects in writing. We publish client
              names, logos, testimonials, and performance results only with the Client&apos;s approval.
            </li>
            <li>
              <B>Third-party tools:</B> open-source libraries, fonts, stock media, and other third-party
              components remain subject to their own licences.
            </li>
          </UL>

          <H2>4. Client responsibilities</H2>
          <UL>
            <li>Provide accurate, complete, and timely content, assets, and feedback.</li>
            <li>Make sure all materials you provide do not infringe any third-party copyright or trademark.</li>
            <li>Make payments on time, as set out in the agreed schedule.</li>
            <li>Provide access to hosting, domains, and third-party accounts when needed.</li>
            <li>
              Complete any approvals required from third parties, such as a Paybill or Till number and
              go-live approval from Safaricom for M-Pesa payments.
            </li>
          </UL>

          <H2>5. Scope, timeline, and revisions</H2>
          <P>
            We work from the scope in the agreed quote or proposal. Timelines are estimates, and they depend
            on the Client supplying content and feedback promptly. We include the number of revisions
            stated in the proposal. Additional revisions and changes to the agreed scope may be charged
            separately, and we will confirm any extra cost with you before doing the work.
          </P>

          <H2>6. Payment terms</H2>
          <UL>
            <li>A non-refundable deposit, usually 40 to 50% of the project price, is required before work begins.</li>
            <li>Milestone payments are due as the project progresses, as set out in the proposal.</li>
            <li>Final payment is due on completion and before live deployment.</li>
            <li>Late payments may attract interest and may lead to work being paused until payment is made.</li>
            <li>
              Costs for third-party services, such as domain registration, hosting, SMS or email services,
              and payment gateway fees, are separate from the project price unless the proposal says
              otherwise.
            </li>
          </UL>

          <H2>7. Support and maintenance</H2>
          <P>
            Every project includes a free post-launch support period for bug fixes, as stated in your
            proposal. Unless the proposal says otherwise, this is <B>30 days</B> for websites and{' '}
            <B>2 months</B> for custom web application packages. Ongoing maintenance, hosting, updates, and
            additional support are available under a separate agreement.
          </P>

          <H2>8. Warranties and disclaimers</H2>
          <P>
            We warrant that the delivered work will substantially match the agreed specifications. We do not
            guarantee that a website or application will be completely error-free, will achieve specific
            business results such as search rankings, enquiries, or sales, or will remain compatible with
            future technologies or third-party services.
          </P>

          <H2>9. Limitation of liability</H2>
          <P>
            To the extent permitted by law, Daleon Dynamics&apos; total liability for any claim relating to a
            project is limited to the total amount the Client has paid us for that project. We are not
            liable for indirect, consequential, or punitive damages, including loss of profit, revenue, or
            data.
          </P>

          <H2>10. Termination</H2>
          <P>
            Either party may end a project by giving written notice. The Client will be billed for all work
            completed up to the date of termination, and the deposit is not refundable.
          </P>

          <H2>11. Governing law and disputes</H2>
          <P>
            These terms are governed by the laws of the Republic of Kenya. If a dispute arises, we will first
            try to resolve it through good-faith discussion. If that fails, the courts of Nairobi, Kenya
            have jurisdiction.
          </P>

          <H2>12. Changes to these terms</H2>
          <P>
            We may update these terms from time to time. The version in force when you accept a quote or
            proposal applies to that project. We will post any update on this page and change the
            &quot;Last updated&quot; date.
          </P>

          <H2>13. Contact us</H2>
          <P>For questions about these terms, contact us:</P>
          <ul className="space-y-1 text-[#C9C8D6]">
            <li>
              Email:{' '}
              <a href={`mailto:${EMAIL}`} className="text-[#38E1C6] hover:underline">
                {EMAIL}
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href="tel:+254142021359" className="text-[#38E1C6] hover:underline">
                +254 142 021 359
              </a>
            </li>
          </ul>
          <P>
            <span className="mt-6 inline-block text-sm text-[#8E8CA3]">
              See also our{' '}
              <Link href="/privacy" className="text-[#38E1C6] hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </P>
        </div>

        <p className="mt-12 text-center text-sm text-[#8E8CA3]">
          © {currentYear} Daleon Dynamics. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Terms;