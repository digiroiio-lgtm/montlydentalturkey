import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance Disclosure - DentalMonthly',
  description: 'Important finance disclosure information for DentalMonthly customers, including credit broker status, FCA authorisation and representative examples.',
};

export default function FinanceDisclosurePage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1a2744' }}>Finance Disclosure</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>Credit Broker Statement</h2>
            <p>DentalMonthly Ltd is a credit broker, not a lender. This means we do not lend money ourselves. Instead, we introduce customers to a panel of carefully selected lenders who may offer finance for dental treatment.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>Lender Panel Disclosure</h2>
            <p>We work with a panel of FCA-authorised lenders. The lenders we work with are independent third parties and have their own terms and conditions. We do not have exclusive arrangements with any single lender. We will introduce you to lenders whose products may be suitable based on the information you provide.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>FCA Authorisation</h2>
            <p>All lenders in our panel are authorised and regulated by the Financial Conduct Authority (FCA). You can check the FCA register at register.fca.org.uk.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>Representative Example</h2>
            <div className="p-4 rounded-lg border border-gray-200" style={{ backgroundColor: '#f0f7ff' }}>
              <p className="font-medium mb-2">Representative Example (for illustration only)</p>
              <p>Amount of credit: &pound;4,800 over 36 months at a representative APR of 14.9% (fixed). Monthly repayment: &pound;166. Total amount repayable: &pound;5,976. Total cost of credit: &pound;1,176.</p>
              <p className="text-sm text-gray-500 mt-2">Representative APR will vary based on your circumstances and the lender.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>How We Are Paid</h2>
            <p>We may receive a commission from lenders when we successfully introduce a customer who takes out a finance product. The amount of commission may vary between lenders. This commission does not affect the interest rate or terms you are offered. You may ask us to disclose the amount of commission receivable before you proceed with a finance application.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>Your Rights</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You have the right to seek finance from other sources</li>
              <li>You are not obliged to use the lenders we introduce you to</li>
              <li>You may withdraw from a credit agreement within 14 days of signing (cooling-off period)</li>
              <li>Finance is subject to status and affordability checks</li>
              <li>If you are unhappy with our service, please see our Complaints page</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
