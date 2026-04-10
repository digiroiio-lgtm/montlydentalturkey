import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import HowItWorksSection from '@/components/HowItWorksSection';
import TreatmentCard from '@/components/TreatmentCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import PaymentCard from '@/components/PaymentCard';

export const metadata: Metadata = {
  title: 'DentalMonthly - Premium Dental Treatment Abroad. Pay Monthly.',
  description: 'Access premium dental care at leading clinics abroad with flexible monthly payment plans. FCA authorised finance partners. UK-based support.',
};

const treatments = [
  { title: 'Dental Implants', imageEmoji: '🦷', priceFrom: 4800, description: 'Single tooth replacement with titanium implant for a natural-looking result.' },
  { title: 'Composite Veneers', imageEmoji: '✨', priceFrom: 1200, description: 'Affordable smile enhancement using composite resin.' },
  { title: 'Porcelain Veneers', imageEmoji: '💎', priceFrom: 2400, description: 'Premium ceramic veneers for a flawless, long-lasting smile.', popular: true },
  { title: 'Teeth Whitening', imageEmoji: '🌟', priceFrom: 400, description: 'Professional whitening treatment for a brighter smile.' },
  { title: 'Full Mouth Restoration', imageEmoji: '🏆', priceFrom: 8000, description: 'Complete smile transformation using multiple treatments.', popular: true },
  { title: 'Dental Crowns', imageEmoji: '🔧', priceFrom: 600, description: 'Restore damaged or decayed teeth with custom crowns.' },
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Manchester',
    treatment: 'Porcelain Veneers',
    quote: 'An absolutely amazing experience from start to finish. My veneers look completely natural and the monthly payments made it so affordable.',
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'London',
    treatment: 'Dental Implants',
    quote: 'I saved thousands compared to UK prices and the quality of care was outstanding. The DentalMonthly team supported me every step of the way.',
    rating: 5,
  },
  {
    name: 'Emma R.',
    location: 'Bristol',
    treatment: 'Full Mouth Restoration',
    quote: 'This has genuinely changed my life. I never thought I could afford a full mouth restoration, but the monthly payment plan made it possible.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'Is dental treatment abroad safe?',
    answer: 'Yes. Our partner clinics are thoroughly vetted and must meet strict clinical standards. We regularly audit and review all clinics in our network to ensure consistent quality and safety.',
  },
  {
    question: 'Am I eligible for finance?',
    answer: 'Finance is subject to status and affordability checks. Most UK residents aged 18 or over may apply. Approval depends on your credit history and individual circumstances.',
  },
  {
    question: 'How does the monthly payment work?',
    answer: 'We are a credit broker, not a lender. We introduce you to a panel of FCA-authorised lenders who will assess your application. If approved, you repay your lender directly each month.',
  },
  {
    question: 'Which countries do partner clinics operate in?',
    answer: 'Our partner clinics are based in Turkey, Hungary, Spain, and Portugal - all popular destinations for high-quality, affordable dental care.',
  },
  {
    question: 'What treatments are available?',
    answer: 'We offer a wide range of treatments including dental implants, porcelain and composite veneers, teeth whitening, crowns, and full mouth restorations.',
  },
  {
    question: 'What if I have a problem after treatment?',
    answer: 'All partner clinics provide full aftercare support. Our UK-based team is also on hand to assist you before, during and after your treatment journey.',
  },
];

const benefits = [
  { icon: '🏥', title: 'Expert Clinic Network', text: 'Thoroughly vetted clinics in top European destinations.' },
  { icon: '💷', title: 'Transparent Pricing', text: 'Clear cost breakdowns with no hidden charges.' },
  { icon: '📅', title: 'Flexible Finance', text: 'Monthly plans from 12 to 60 months to suit your budget.' },
  { icon: '🇬🇧', title: 'UK Support Team', text: 'Our team is based in the UK and available throughout your journey.' },
  { icon: '✅', title: 'Quality Assurance', text: 'Clinics meet strict clinical standards we verify regularly.' },
  { icon: '🛡️', title: 'Aftercare Guarantee', text: 'Full aftercare support before, during and after treatment.' },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1a2744' }}>
            Flexible Plans for Every Treatment
          </h2>
          <p className="text-center text-gray-600 mb-10">Representative examples for illustration only. Subject to status.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PaymentCard title="Smile Makeover" monthlyFrom={129} totalFrom={3096} term={24} />
            <PaymentCard title="Dental Implants" monthlyFrom={189} totalFrom={6804} term={36} popular />
            <PaymentCard title="Full Mouth Restoration" monthlyFrom={249} totalFrom={11952} term={48} />
          </div>
        </div>
      </section>

      <TrustStrip />
      <HowItWorksSection />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a2744' }}>
            Why Choose DentalMonthly
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-4">
                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1a2744' }}>{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: '#f0f7ff' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a2744' }}>
            Featured Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <TreatmentCard
                key={t.title}
                title={t.title}
                imageEmoji={t.imageEmoji}
                priceFrom={t.priceFrom}
                description={t.description}
                popular={t.popular}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a2744' }}>
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                location={t.location}
                treatment={t.treatment}
                quote={t.quote}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: '#f0f7ff' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#1a2744' }}>
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
          <p className="text-xs text-center text-gray-400 mt-6">
            DentalMonthly is a credit broker, not a lender.
          </p>
        </div>
      </section>

      <CTABand
        title="Ready to Transform Your Smile?"
        subtitle="Join thousands of UK patients who have achieved their dream smile with DentalMonthly."
        ctaText="Check Your Plan Today"
        ctaHref="/monthly-plans"
      />
    </>
  );
}
