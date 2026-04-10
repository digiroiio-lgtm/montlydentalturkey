export default function TrustStrip() {
  const items = [
    { icon: '✅', label: 'FCA Authorised Finance Partners' },
    { icon: '🇬🇧', label: 'UK-Based Customer Support' },
    { icon: '🏥', label: 'Vetted Clinic Network' },
    { icon: '💰', label: 'No Hidden Fees' },
    { icon: '📅', label: 'Flexible Repayment Terms' },
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
