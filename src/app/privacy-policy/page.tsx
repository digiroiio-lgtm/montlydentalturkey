import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - DentalMonthly',
  description: 'DentalMonthly privacy policy - how we collect, use and protect your personal data in accordance with UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1a2744' }}>Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>1. Who We Are</h2>
            <p>DentalMonthly Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a credit broker registered in England and Wales. Our website is dentalmonthly.co.uk. This policy explains how we collect, use and protect your personal data.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>2. What Data We Collect</h2>
            <p>We may collect the following personal data when you use our website or contact us:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name, email address, and telephone number</li>
              <li>Details about the dental treatment you are enquiring about</li>
              <li>Financial information where you apply for finance</li>
              <li>Technical data such as IP address, browser type, and pages visited</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>3. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to your enquiries and provide information about treatments and finance options</li>
              <li>Introduce you to our panel of FCA-authorised lenders where you request a finance introduction</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>4. Sharing with Lenders</h2>
            <p>Where you request a finance introduction, we will share your personal data with lenders on our panel. Each lender has its own privacy policy. We will only share data that is necessary to facilitate your finance application.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure of your data in certain circumstances</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability in certain circumstances</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>6. Contact Our Data Protection Officer</h2>
            <p>To exercise any of your rights or to ask questions about this policy, please contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> privacy@dentalmonthly.co.uk</p>
            <p>You also have the right to lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at ico.org.uk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
