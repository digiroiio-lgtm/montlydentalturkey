import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - DentalMonthly',
  description: 'Terms and conditions for using the DentalMonthly website and services.',
};

export default function TermsPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1a2744' }}>Terms and Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>1. Use of Website</h2>
            <p>By using this website, you agree to these terms and conditions. If you do not agree, please do not use the site. We reserve the right to update these terms at any time.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>2. Our Services</h2>
            <p>DentalMonthly Ltd is a credit broker, not a lender. We introduce customers to a panel of FCA-authorised lenders. We do not provide dental treatment directly. All dental services are provided by independent partner clinics.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>3. Finance Applications</h2>
            <p>Any finance illustrations on this website are for illustrative purposes only and do not constitute an offer of credit. Finance is subject to status and affordability checks. We cannot guarantee that you will be approved for finance. Your lender&rsquo;s terms and conditions will govern your credit agreement.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>4. Disclaimers</h2>
            <p>While we take care to ensure information on this website is accurate, we make no warranties about its completeness or accuracy. Treatment prices are indicative and may vary. Always obtain a formal quote from your chosen clinic.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>5. Limitation of Liability</h2>
            <p>To the extent permitted by law, DentalMonthly Ltd shall not be liable for any indirect or consequential loss arising from use of this website or reliance on its content. Our total liability shall not exceed the fees paid by you to us, if any.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>6. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
