import Link from 'next/link';

interface CTABandProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export default function CTABand({ title, subtitle, ctaText, ctaHref }: CTABandProps) {
  return (
    <section className="py-16 px-4 text-center" style={{ backgroundColor: '#1a2744' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-blue-200 mb-8 text-lg">{subtitle}</p>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg transition-colors hover:opacity-90"
          style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
