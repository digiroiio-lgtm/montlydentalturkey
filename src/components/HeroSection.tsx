import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#1a2744' }}>
          Get Your Dream Smile From Affordable Monthly Payments
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Access premium dental care at leading clinics abroad, with flexible monthly payment plans tailored to your budget. No compromise on quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/monthly-plans"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white rounded-lg transition-colors hover:opacity-90"
            style={{ backgroundColor: '#2563eb' }}
          >
            See Monthly Plans
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg border-2 transition-colors hover:bg-blue-50"
            style={{ borderColor: '#2563eb', color: '#2563eb' }}
          >
            How It Works
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span>🔒</span> SSL Secure
          </span>
          <span className="flex items-center gap-1">
            <span>✅</span> FCA Authorised Partners
          </span>
          <span className="flex items-center gap-1">
            <span>🇬🇧</span> UK Based Support
          </span>
        </div>
      </div>
    </section>
  );
}
