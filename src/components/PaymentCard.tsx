interface PaymentCardProps {
  title: string;
  monthlyFrom: number;
  totalFrom: number;
  term: number;
  popular?: boolean;
}

export default function PaymentCard({ title, monthlyFrom, totalFrom, term, popular }: PaymentCardProps) {
  return (
    <div
      className={`rounded-xl p-6 border-2 transition-shadow hover:shadow-md relative ${popular ? 'shadow-lg' : 'shadow-sm bg-white border-gray-200'}`}
      style={popular ? { borderColor: '#2563eb', backgroundColor: '#f0f7ff' } : {}}
    >
      {popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-white px-3 py-1 rounded-full"
          style={{ backgroundColor: '#2563eb' }}
        >
          Most Popular
        </div>
      )}
      <h3 className="text-lg font-semibold mb-4" style={{ color: '#1a2744' }}>{title}</h3>
      <div className="mb-2">
        <span className="text-3xl font-bold" style={{ color: '#2563eb' }}>&pound;{monthlyFrom}</span>
        <span className="text-gray-500 text-sm">/month</span>
      </div>
      <p className="text-sm text-gray-500 mb-1">From &pound;{totalFrom.toLocaleString()} total</p>
      <p className="text-sm text-gray-500">Over {term} months</p>
      <p className="text-xs text-gray-400 mt-4">Subject to status. Representative example only.</p>
    </div>
  );
}
