// app/privacy/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const LAST_UPDATED = 'October 5, 2026';
const EMAIL = 'daleondynamics@gmail.com';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Daleon Dynamics' },
  description:
    'How Daleon Dynamics collects, uses, and protects your personal data when you visit our website, send an enquiry, or work with us.',
  alternates: { canonical: '/privacy' },
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

const Privacy: React.FC = () => {
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
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-[#8E8CA3]">Last updated: {LAST_UPDATED}</p>

          <H2>1. Who we are</H2>
          <P>
            Daleon Dynamics is a web design and software development company based in Nairobi, Kenya. For the
            personal data described in this policy, Daleon Dynamics is the data controller. You can reach us
            at {EMAIL}.
          </P>
          <P>
            This policy explains what personal data we collect when you visit our website, send us an
            enquiry, or work with us, how we use it, and the choices you have. We aim to handle personal
            data in line with the Kenya Data Protection Act, 2019.
          </P>

          <H2>2. Information we collect</H2>
          <UL>
            <li>
              <strong className="text-[#F2F1F7]">Enquiry form details:</strong> your name, email address,
              phone number, the service you are interested in, your budget range (if you choose to give
              one), and the message you write.
            </li>
            <li>
              <strong className="text-[#F2F1F7]">Direct communication:</strong> emails, calls, and WhatsApp
              messages you send us, and our replies.
            </li>
            <li>
              <strong className="text-[#F2F1F7]">Project information:</strong> if we work together, details
              about your business, requirements, and project materials you share with us.
            </li>
            <li>
              <strong className="text-[#F2F1F7]">Newsletter:</strong> your email address, if you subscribe to
              our blog updates.
            </li>
            <li>
              <strong className="text-[#F2F1F7]">Technical data:</strong> your IP address, browser type,
              device information, and pages viewed, collected through cookies and similar technologies.
            </li>
          </UL>

          <H2>3. How we use your information</H2>
          <UL>
            <li>To respond to your enquiry, discuss your project, and prepare a quote</li>
            <li>
              To confirm receipt of your enquiry (the form sends an automatic confirmation email) and keep a
              record of it so we can follow up
            </li>
            <li>To deliver and manage our services (website development, custom web applications, and related support)</li>
            <li>To communicate with you about your project, including updates and important notices</li>
            <li>To send you articles and updates, only if you subscribed, until you unsubscribe</li>
            <li>To understand how visitors use our website and improve it</li>
            <li>To meet legal, accounting, and regulatory obligations</li>
          </UL>
          <P>
            We process your data because you asked us to (when you send an enquiry or request a quote),
            because we need it to carry out a contract with you, because you gave your consent (for example
            to receive our newsletter), because we are legally required to, or because it is in our
            legitimate interest to run and improve our website.
          </P>

          <H2>4. Who we share it with</H2>
          <P>We do not sell your personal data. We use a small number of service providers to run our website and handle enquiries:</P>
          <UL>
            <li>
              <strong className="text-[#F2F1F7]">Web3Forms:</strong> delivers the contents of our enquiry form
              to us by email.
            </li>
            <li>
              <strong className="text-[#F2F1F7]">Google:</strong> we use Google Sheets and Google Apps Script
              to log enquiries and send the confirmation email, and may use Google Analytics to understand
              website traffic.
            </li>
            <li>
              <strong className="text-[#F2F1F7]">Our website hosting and newsletter providers:</strong> to
              serve the website and send newsletter emails.
            </li>
          </UL>
          <P>
            We may also share information when required by law or by a government authority, or to protect
            our rights, safety, or property.
          </P>

          <H2>5. Transfers outside Kenya</H2>
          <P>
            Some of the providers above process data on servers outside Kenya. Where that happens, we take
            reasonable steps to make sure your data is handled with appropriate safeguards, as the Data
            Protection Act requires.
          </P>

          <H2>6. How long we keep your data</H2>
          <UL>
            <li>
              <strong className="text-[#F2F1F7]">Enquiries that don&apos;t lead to a project:</strong> up to 24
              months, then deleted.
            </li>
            <li>
              <strong className="text-[#F2F1F7]">Client project and billing records:</strong> for as long as
              the project runs and as required for accounting and legal purposes.
            </li>
            <li>
              <strong className="text-[#F2F1F7]">Newsletter subscriptions:</strong> until you unsubscribe.
            </li>
          </UL>

          <H2>7. Data security</H2>
          <P>
            We use appropriate technical and organisational measures to protect your personal data against
            unauthorised access, alteration, disclosure, or loss. No method of transmission over the internet
            is completely secure, so we cannot guarantee absolute security.
          </P>

          <H2>8. Cookies and analytics</H2>
          <P>
            We use cookies and similar technologies to keep the website working and to understand how
            visitors use it. You can control or delete cookies through your browser settings, and you can
            block analytics cookies without affecting your ability to use the site.
          </P>

          <H2>9. Your rights</H2>
          <P>Under the Kenya Data Protection Act, 2019, you have the right to:</P>
          <UL>
            <li>Be informed about how your data is used</li>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data, subject to legal obligations</li>
            <li>Object to or restrict the processing of your data</li>
            <li>Withdraw consent at any time, where we rely on it</li>
          </UL>
          <P>
            To use any of these rights, email us at {EMAIL}. If you are not satisfied with how we handle
            your data, you can also lodge a complaint with the Office of the Data Protection Commissioner
            of Kenya (odpc.go.ke).
          </P>

          <H2>10. Children</H2>
          <P>
            Our website and services are intended for businesses and adults. We do not knowingly collect
            personal data from children.
          </P>

          <H2>11. Changes to this policy</H2>
          <P>
            We may update this policy from time to time. We will post the new version on this page and
            update the &quot;Last updated&quot; date above.
          </P>

          <H2>12. Contact us</H2>
          <P>If you have questions or requests about this policy or your personal data, contact us:</P>
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
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-[#8E8CA3]">
          © {currentYear} Daleon Dynamics. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Privacy;