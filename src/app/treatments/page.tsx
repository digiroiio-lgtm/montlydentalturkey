import type { Metadata } from 'next';
import TreatmentCard from '@/components/TreatmentCard';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Dental Treatments Abroad - DentalMonthly',
  description: 'Explore our full range of dental treatments available at partner clinics abroad. Implants, veneers, whitening and more with monthly payment options.',
};

const treatments = [
  {
    title: 'Dental Implants',
    imageEmoji: '🦷',
    priceFrom: 4800,
    description: 'Single tooth replacement with a titanium implant and ceramic crown. A permanent, natural-looking solution for missing teeth.',
    popular: false,
  },
  {
    title: 'Composite Veneers',
    imageEmoji: '✨',
    priceFrom: 1200,
    description: 'Affordable smile enhancement using composite resin applied directly to your teeth. Great for minor cosmetic improvements.',
    popular: false,
  },
  {
    title: 'Porcelain Veneers',
    imageEmoji: '💎',
    priceFrom: 2400,
    description: 'Premium ceramic veneers custom-crafted for a flawless, long-lasting smile transformation.',
    popular: true,
  },
  {
    title: 'Teeth Whitening',
    imageEmoji: '🌟',
    priceFrom: 400,
    description: 'Professional whitening treatment for a noticeably brighter smile. Safe, fast and effective.',
    popular: false,
  },
  {
    title: 'Full Mouth Restoration',
    imageEmoji: '🏆',
    priceFrom: 8000,
    description: 'A complete smile transformation combining multiple treatments, tailored to your specific needs.',
    popular: true,
  },
  {
    title: 'Dental Crowns',
    imageEmoji: '🔧',
    priceFrom: 600,
    description: 'Restore damaged or decayed teeth with custom-made crowns that look and feel natural.',
    popular: false,
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>Dental Treatments Available Abroad</h1>
          <p className="text-lg text-gray-600">Browse our range of treatments and discover how affordable your smile transformation can be.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
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

      <CTABand
        title="Find Your Payment Plan"
        subtitle="See estimated monthly payments for any of our treatments."
        ctaText="Use Our Calculator"
        ctaHref="/monthly-plans"
      />
    </>
  );
}
