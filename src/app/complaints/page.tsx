import type { Metadata } from 'next';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Complaints Procedure - DentalMonthly',
  description: 'How to make a complaint to DentalMonthly, our complaints procedure and escalation to the Financial Ombudsman Service.',
};

export default function ComplaintsPage() {
  return (
    <>
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>Complaints Procedure</h1>
          <p className="text-lg text-gray-600">We take all complaints seriously and aim to resolve them quickly and fairly.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>How to Make a Complaint</h2>
            <p>If you are unhappy with any aspect of our service, please contact us by:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Email: <a href="mailto:complaints@dentalmonthly.co.uk" className="text-blue-600 hover:underline">complaints@dentalmonthly.co.uk</a></li>
              <li>Post: Complaints Team, DentalMonthly Ltd, England</li>
            </ul>
            <p className="mt-3">Please include your name, contact details, a description of your complaint, and any relevant reference numbers.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>What Happens Next</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">Day 1-5:</span>
                <p>We will acknowledge your complaint within 5 business days of receiving it.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">Week 1-8:</span>
                <p>We will investigate your complaint and aim to provide a full written response within 8 weeks.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">Resolution:</span>
                <p>We will explain our findings and any action we will take to resolve the matter.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#1a2744' }}>Escalation to the Financial Ombudsman Service</h2>
            <p>If you are not satisfied with our response, or if we have not resolved your complaint within 8 weeks, you may refer your complaint to the Financial Ombudsman Service (FOS):</p>
            <div className="mt-3 p-4 rounded-lg" style={{ backgroundColor: '#f0f7ff' }}>
              <p><strong>Financial Ombudsman Service</strong></p>
              <p>Exchange Tower, London, E14 9SR</p>
              <p>Website: <a href="https://www.financial-ombudsman.org.uk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.financial-ombudsman.org.uk</a></p>
              <p>Telephone: 0800 023 4567</p>
            </div>
            <p className="mt-3 text-sm text-gray-500">The FOS is a free, independent service for resolving disputes between financial businesses and their customers.</p>
          </div>
        </div>
      </section>

      <CTABand
        title="Need Help?"
        subtitle="Our UK-based team is here to assist you."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
