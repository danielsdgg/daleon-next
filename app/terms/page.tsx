import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
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
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-16">
            Last updated: May 05, 2026
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">1. Agreement to Terms</h2>
            <p>
              By engaging Daleon Dynamics for any services, you agree to be bound by these Terms of Service. 
              These terms form a legally binding agreement between you (the Client) and Daleon Dynamics.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">2. Our Services</h2>
            <p>
              Daleon Dynamics specializes in <strong>custom-coded</strong> software solutions, websites, web applications, 
              business automation systems, and access control systems. We primarily build solutions from scratch using 
              modern programming languages and frameworks (Next.js, React, Node.js, Python, etc.). We rarely use 
              template-based platforms like WordPress unless specifically requested.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">3. Intellectual Property & Code Ownership</h2>
            <p>
              This is one of the most important sections. Please read carefully:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-6">
              <li>
                <strong>Final Deliverables:</strong> Upon full and final payment, the client receives ownership of the 
                final working product (website, application, system, etc.).
              </li>
              <li>
                <strong>Source Code:</strong> The source code is <strong>NOT</strong> included in the standard project price.
              </li>
              <li>
                <strong>Code Transfer Option:</strong> If the client wishes to receive the complete source code and full 
                ownership rights to modify it independently, this must be explicitly agreed upon in the contract and will 
                be charged at <strong>5 times</strong> the original project cost.
              </li>
              <li>
                Daleon Dynamics retains the right to display the project in our portfolio, website, and marketing materials 
                unless a separate Non-Disclosure Agreement (NDA) is signed.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">4. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Provide accurate, complete, and timely content, assets, and feedback.</li>
              <li>Ensure all materials provided do not violate any third-party copyrights or trademarks.</li>
              <li>Make timely payments as per the agreed schedule.</li>
              <li>Provide necessary access (hosting, servers, third-party accounts) when required.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">5. Project Timeline & Revisions</h2>
            <p>
              Timelines are estimates and may be affected by client feedback speed. We include a reasonable number of revisions 
              as specified in the project proposal. Additional revisions or major scope changes may incur extra charges.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">6. Payment Terms</h2>
            <p>
              • A non-refundable deposit (usually 40-50%) is required to begin work.<br />
              • Milestone payments are required as the project progresses.<br />
              • Final payment is due upon project completion and before live deployment.<br />
              • Late payments may attract interest and may result in suspension of work.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">7. Support & Maintenance</h2>
            <p>
              All projects include <strong>30 days</strong> of free post-launch support for bug fixes. 
              Ongoing maintenance, hosting, updates, and additional support are available under a separate agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">8. Warranties and Disclaimers</h2>
            <p>
              We warrant that the delivered work will substantially match the agreed specifications. 
              We do not guarantee that the website or software will be completely error-free, 
              generate specific business results, or be compatible with all future technologies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">9. Limitation of Liability</h2>
            <p>
              Daleon Dynamics’s total liability shall not exceed the total amount paid by the client. 
              We are not liable for any indirect, consequential, or punitive damages.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">10. Termination</h2>
            <p>
              Either party may terminate the project with written notice. The client will be billed for all work completed up to the date of termination.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Nairobi, Kenya.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued engagement with us after such changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">13. Contact Us</h2>
            <p className="mb-4">For any questions regarding these Terms of Service, please contact us:</p>
            <p className="font-medium">Email: daleondynamics@gmail.com</p>
            <p className="font-medium">Phone: +254 142 021 359</p>
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          © {currentYear} Daleon Dynamics. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Terms;