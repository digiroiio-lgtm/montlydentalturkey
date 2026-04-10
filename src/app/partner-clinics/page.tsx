import type { Metadata } from 'next';
import ClinicCard from '@/components/ClinicCard';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Partner Clinics - DentalMonthly',
  description: 'Our vetted network of partner dental clinics in Turkey, Hungary, Spain, and Portugal. Quality care at affordable prices.',
};

const clinics = [
  {
    name: 'Istanbul Dental Centre',
    location: 'Istanbul',
    country: 'Turkey',
    specialisms: ['Implants', 'Veneers', 'Full Mouth'],
    rating: 4.9,
    imageEmoji: '🏥',
  },
  {
    name: 'Budapest Smile Clinic',
    location: 'Budapest',
    country: 'Hungary',
    specialisms: ['Veneers', 'Crowns', 'Whitening'],
    rating: 4.8,
    imageEmoji: '🦷',
  },
  {
    name: 'Lisbon Dental Spa',
    location: 'Lisbon',
    country: 'Portugal',
    specialisms: ['Implants', 'Cosmetic', 'Orthodontics'],
    rating: 4.7,
    imageEmoji: '✨',
  },
  {
    name: 'Marbella Dental Studio',
    location: 'Marbella',
    country: 'Spain',
    specialisms: ['Veneers', 'Whitening', 'Implants'],
    rating: 4.8,
    imageEmoji: '💎',
  },
];

export default function PartnerClinicsPage() {
  return (
    <>
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>Our Partner Clinic Network</h1>
          <p className="text-lg text-gray-600">Every clinic in our network has been thoroughly vetted to ensure you receive exceptional care.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {clinics.map((clinic) => (
              <ClinicCard
                key={clinic.name}
                name={clinic.name}
                location={clinic.location}
                country={clinic.country}
                specialisms={clinic.specialisms}
                rating={clinic.rating}
                imageEmoji={clinic.imageEmoji}
              />
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a2744' }}>How We Vet Our Clinics</h2>
            <div className="space-y-4 text-gray-600">
              <p>Every clinic in the DentalMonthly network undergoes a rigorous vetting process before being accepted as a partner. We assess clinical standards, qualifications, patient reviews, facilities, and aftercare procedures.</p>
              <p>We conduct ongoing audits and collect patient feedback after each treatment. Any clinic that does not maintain our standards is removed from the network immediately.</p>
              <p>Our clinical advisors visit partner clinics regularly and review all patient outcomes to ensure consistent quality.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Find Your Perfect Clinic"
        subtitle="Tell us your treatment needs and we will match you with the right partner clinic."
        ctaText="Get Matched Today"
        ctaHref="/contact"
      />
    </>
  );
}
