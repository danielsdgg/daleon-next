import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Go to Homepage</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 lg:p-16">
          
          <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-16">
            &ldquo;Last updated: May 05, 2026&rdquo;
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">1. Introduction</h2>
            <p>
              At Daleon Dynamics, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
              engage our services, or communicate with us.
            </p>
            <p>
              We comply with the Kenya Data Protection Act, 2018 and other applicable data protection laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and physical address.</li>
              <li><strong>Project Information:</strong> Details about your business, requirements, goals, and project specifications.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data collected through cookies.</li>
              <li><strong>Communication Data:</strong> Records of emails, calls, and messages exchanged with us.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>To respond to your inquiries and provide quotes</li>
              <li>To deliver and manage our services (website development, custom software, access control systems, etc.)</li>
              <li>To communicate with you about projects and updates</li>
              <li>To improve our website and services</li>
              <li>To send important notices and updates</li>
              <li>For legal and regulatory compliance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">4. Sharing of Your Information</h2>
            <p>We do not sell your personal data. We may share your information only in the following cases:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>With trusted service providers (hosting providers, payment processors, etc.) who help us deliver our services</li>
              <li>When required by law or government authorities</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance user experience, analyze website traffic, and understand 
              how visitors use our site. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">7. Your Data Rights</h2>
            <p>Under the Kenya Data Protection Act, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">8. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, 
              or as required by law. Project-related data may be kept longer for record-keeping and legal protection.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
              the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, 
              please contact us:
            </p>
            <p className="font-medium">Email: daleondynamics@gmail.com</p>
            <p className="font-medium">Phone: +254 142 021 359</p>
            <p className="font-medium">Address: Nairobi, Kenya</p>
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          © {currentYear} Daleon Dynamics. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Privacy;