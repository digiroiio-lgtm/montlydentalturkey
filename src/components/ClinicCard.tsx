interface ClinicCardProps {
  name: string;
  location: string;
  country: string;
  specialisms: string[];
  rating: number;
  imageEmoji: string;
}

export default function ClinicCard({ name, location, country, specialisms, rating, imageEmoji }: ClinicCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center h-24 text-5xl" style={{ backgroundColor: '#f0f7ff' }}>
        {imageEmoji}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1" style={{ color: '#1a2744' }}>{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{location}, {country}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {specialisms.map((s) => (
            <span key={s} className="text-xs px-2 py-1 rounded-full text-blue-700" style={{ backgroundColor: '#dbeafe' }}>
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}
