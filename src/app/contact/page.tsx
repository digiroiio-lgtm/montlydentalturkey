import type { Metadata } from 'next';
import CTABand from '@/components/CTABand';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - DentalMonthly',
  description: 'Get in touch with the DentalMonthly team. UK-based support available to help with your dental treatment journey.',
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>Contact Us</h1>
          <p className="text-lg text-gray-600">Our UK-based team is here to help with any questions about treatments, finance, or your journey.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a2744' }}>Send Us a Message</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a2744' }}>Get in Touch</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium" style={{ color: '#1a2744' }}>Email</p>
                  <a href="mailto:hello@dentalmonthly.co.uk" className="text-blue-600 hover:underline">hello@dentalmonthly.co.uk</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium" style={{ color: '#1a2744' }}>Phone</p>
                  <p>0800 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇬🇧</span>
                <div>
                  <p className="font-medium" style={{ color: '#1a2744' }}>UK-Based Support</p>
                  <p>Our team is based in the UK and available Monday to Friday, 9am to 5pm GMT.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-lg text-sm text-gray-500" style={{ backgroundColor: '#f0f7ff' }}>
              <p>DentalMonthly is a credit broker, not a lender. We are unable to provide financial advice. Finance is subject to status and affordability checks.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Transform Your Smile?"
        subtitle="Check your estimated monthly payments today."
        ctaText="See Monthly Plans"
        ctaHref="/monthly-plans"
      />
    </>
  );
}
