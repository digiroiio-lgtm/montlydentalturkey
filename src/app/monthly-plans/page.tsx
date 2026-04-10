import type { Metadata } from 'next';
import FinanceCalculator from '@/components/FinanceCalculator';
import PaymentCard from '@/components/PaymentCard';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Monthly Payment Plans - DentalMonthly',
  description: 'Flexible monthly payment plans for dental treatment abroad. Use our calculator to estimate your payments. DentalMonthly is a credit broker, not a lender.',
};

export default function MonthlyPlansPage() {
  return (
    <>
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>Flexible Monthly Payment Plans</h1>
          <p className="text-lg text-gray-600">Spread the cost of your dental treatment with terms from 12 to 60 months. Subject to status and affordability checks.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto mb-16">
          <FinanceCalculator />
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#1a2744' }}>Representative Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <PaymentCard title="Smile Makeover" monthlyFrom={129} totalFrom={3096} term={24} />
            <PaymentCard title="Dental Implants" monthlyFrom={189} totalFrom={6804} term={36} popular />
            <PaymentCard title="Full Mouth Restoration" monthlyFrom={249} totalFrom={11952} term={48} />
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-2">
            <p className="font-semibold text-gray-800">Finance Disclosure</p>
            <p>DentalMonthly is a credit broker, not a lender. We introduce customers to a panel of FCA-authorised lenders.</p>
            <p>Finance is subject to status and affordability checks. Representative APR will vary depending on your circumstances and the lender.</p>
            <p>Monthly payment figures shown are for illustration only and do not constitute an offer of credit.</p>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Apply for Finance?"
        subtitle="Get in touch and we will match you with a suitable lender from our panel."
        ctaText="Contact Us Today"
        ctaHref="/contact"
      />
    </>
  );
}
