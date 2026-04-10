import type { Metadata } from 'next';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'About DentalMonthly',
  description: 'Learn about DentalMonthly - helping UK patients access premium dental treatment abroad with flexible monthly payment plans.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>About DentalMonthly</h1>
          <p className="text-lg text-gray-600">Helping UK patients access world-class dental care without the financial burden.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a2744' }}>Our Story</h2>
            <p className="text-gray-600 mb-3">DentalMonthly was founded with a simple mission: to make premium dental treatment accessible to everyone in the UK. We saw thousands of people unable to afford the dental care they needed and deserved, and we set out to change that.</p>
            <p className="text-gray-600">By connecting UK patients with vetted clinics in Europe and beyond, and by offering flexible monthly payment options through our panel of FCA-authorised finance partners, we have helped thousands of people transform their smiles without the financial strain.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a2744' }}>Our Mission</h2>
            <p className="text-gray-600">We believe that everyone deserves access to quality dental care. Our mission is to remove the financial barriers that prevent people from getting the treatment they need, while ensuring the highest standards of safety, quality and transparency.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a2744' }}>Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🔍', title: 'Transparency', text: 'We are always upfront about costs, processes and our role as a credit broker.' },
                { icon: '✅', title: 'Quality', text: 'We only work with clinics that meet our strict clinical standards.' },
                { icon: '🤝', title: 'Trust', text: 'We build long-term relationships with patients and clinics based on trust.' },
                { icon: '💡', title: 'Accessibility', text: 'We make dental care financially accessible to more people across the UK.' },
              ].map((v) => (
                <div key={v.title} className="flex gap-3 p-4 rounded-lg" style={{ backgroundColor: '#f0f7ff' }}>
                  <span className="text-2xl">{v.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: '#1a2744' }}>{v.title}</h3>
                    <p className="text-sm text-gray-600">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-4 pl-4" style={{ borderColor: '#2563eb' }}>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#1a2744' }}>Regulatory Information</h2>
            <p className="text-sm text-gray-600">DentalMonthly Ltd is registered in England and Wales. We are a credit broker, not a lender. We are authorised and regulated for credit broking activities. We introduce customers to a panel of FCA-authorised lenders. Finance is subject to status and affordability checks.</p>
          </div>
        </div>
      </section>

      <CTABand
        title="Start Your Journey Today"
        subtitle="Discover how DentalMonthly can help you achieve your dream smile."
        ctaText="See Monthly Plans"
        ctaHref="/monthly-plans"
      />
    </>
  );
}
