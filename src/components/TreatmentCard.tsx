import Link from 'next/link';

interface TreatmentCardProps {
  title: string;
  description: string;
  priceFrom: number;
  imageEmoji: string;
  popular?: boolean;
}

export default function TreatmentCard({ title, description, priceFrom, imageEmoji, popular }: TreatmentCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow relative">
      {popular && (
        <div className="absolute top-3 right-3 text-xs font-semibold text-white px-2 py-1 rounded-full" style={{ backgroundColor: '#0891b2' }}>
          Popular
        </div>
      )}
      <div className="flex items-center justify-center h-24 text-5xl" style={{ backgroundColor: '#f0f7ff' }}>
        {imageEmoji}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1" style={{ color: '#1a2744' }}>{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold" style={{ color: '#2563eb' }}>From &pound;{priceFrom.toLocaleString()}</span>
          <Link href="/treatments" className="text-sm font-medium hover:underline" style={{ color: '#0891b2' }}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
