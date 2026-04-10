interface TestimonialCardProps {
  name: string;
  location: string;
  treatment: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({ name, location, treatment, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
        ))}
      </div>
      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-sm" style={{ color: '#1a2744' }}>{name}</p>
        <p className="text-xs text-gray-500">{location} &middot; {treatment}</p>
      </div>
    </div>
  );
}
