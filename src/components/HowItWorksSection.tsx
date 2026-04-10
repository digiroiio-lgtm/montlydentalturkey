export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Treatment',
      description: 'Browse our treatments and get an estimated cost for the dental work you need.',
    },
    {
      number: 2,
      title: 'Check Your Finance',
      description: 'Use our calculator to see estimated monthly payments that fit your budget.',
    },
    {
      number: 3,
      title: 'Get Matched',
      description: 'We introduce you to our panel of FCA-authorised lenders to find the right plan.',
    },
    {
      number: 4,
      title: 'Travel and Transform',
      description: 'Your clinic handles all appointments and aftercare so you can focus on your results.',
    },
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f0f7ff' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1a2744' }}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
                style={{ backgroundColor: '#2563eb' }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1a2744' }}>{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
