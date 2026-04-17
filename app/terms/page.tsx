import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Homepage</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 lg:p-16">
          
          <h1 className="text-5xl font-bold tracking-tighter text-gray-900 mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-16">
            Last updated: April 08, 2026
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using any services provided by Daleon Dynamics, you agree to be bound by these Terms of Service. 
              If you do not agree with any part of these terms, you may not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">2. Our Services</h2>
            <p>
              Daleon Dynamics provides custom software development, website and web application development, 
              and access control systems. All services are delivered with professionalism, modern technology, 
              and a focus on long-term value for our clients.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">3. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Provide accurate and complete information required for the project.</li>
              <li>Make timely decisions and provide feedback when requested.</li>
              <li>Ensure all content, materials, and assets provided do not infringe third-party rights.</li>
              <li>Pay invoices according to the agreed payment terms.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">4. Intellectual Property</h2>
            <p>
              Upon full payment, you will receive ownership of the final deliverables (website, software, etc.). 
              However, Daleon Dynamics retains the right to display the work in our portfolio and marketing materials 
              unless a separate Non-Disclosure Agreement states otherwise.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">5. Payment &amp; Pricing</h2>
            <p>
              All projects require a deposit before work begins. Final payment is due upon project completion and client approval. 
              Late payments may result in suspension of work and additional fees.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">6. Warranties and Disclaimers</h2>
            <p>
              We warrant that our deliverables will substantially conform to the agreed specifications. 
              We do not guarantee that our services will be error-free or uninterrupted. All warranties not expressly stated are disclaimed.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">7. Limitation of Liability</h2>
            <p>
              Daleon Dynamics shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">8. Termination</h2>
            <p>
              Either party may terminate the agreement with written notice. Upon termination, you will be billed for all work completed up to the termination date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">11. Contact Us</h2>
            <p className="mb-3">If you have any questions about these Terms of Service, please contact us at:</p>
            <p className="font-medium text-lg">info@daleondynamics.com</p>
            <p className="font-medium text-lg">+254 707 319 080</p>
            
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Daleon Dynamics. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Terms;