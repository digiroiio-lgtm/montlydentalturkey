import type { Metadata } from 'next';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'How It Works - DentalMonthly',
  description: 'Learn how DentalMonthly helps you access affordable dental treatment abroad with flexible monthly payment plans.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Treatment',
      detail: 'Browse our full range of dental treatments. Whether you need implants, veneers, or a full mouth restoration, our treatment guides will help you understand your options and estimated costs.',
    },
    {
      number: 2,
      title: 'Check Your Finance',
      detail: 'Use our finance calculator to get an illustration of your potential monthly payments. Enter your treatment cost and choose a term from 12 to 60 months. This is for illustration only and does not constitute an offer of credit.',
    },
    {
      number: 3,
      title: 'Get Matched',
      detail: 'As a credit broker, we introduce you to our panel of FCA-authorised lenders. You will complete a finance application and, if approved, your lender will fund your treatment directly.',
    },
    {
      number: 4,
      title: 'Travel and Transform',
      detail: 'Once finance is arranged, your chosen clinic coordinates everything. From initial consultations to final fittings, your clinical team handles all appointments. Our UK-based support team is available throughout.',
    },
  ];

  return (
    <>
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>How DentalMonthly Works</h1>
          <p className="text-lg text-gray-600">Four simple steps to your dream smile, with flexible finance to suit your budget.</p>
        </div>
      </section>

      <HowItWorksSection />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1"
                style={{ backgroundColor: '#2563eb' }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a2744' }}>{step.title}</h3>
                <p className="text-gray-600">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Ready to Get Started?"
        subtitle="Check your estimated monthly payments in minutes."
        ctaText="See Monthly Plans"
        ctaHref="/monthly-plans"
      />
    </>
  );
}
