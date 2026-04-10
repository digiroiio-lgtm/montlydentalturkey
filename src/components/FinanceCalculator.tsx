'use client';

import { useState } from 'react';

const treatments = [
  { label: 'Dental Implants', value: 4800 },
  { label: 'Composite Veneers', value: 1200 },
  { label: 'Porcelain Veneers', value: 2400 },
  { label: 'Teeth Whitening', value: 400 },
  { label: 'Full Mouth Restoration', value: 8000 },
  { label: 'Dental Crowns', value: 600 },
];

const terms = [12, 24, 36, 48, 60];

export default function FinanceCalculator() {
  const [totalCost, setTotalCost] = useState<number>(4800);
  const [term, setTerm] = useState<number>(24);

  const monthly = totalCost > 0 && term > 0 ? Math.ceil(totalCost / term) : 0;

  const handleTreatmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) setTotalCost(val);
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) setTotalCost(val);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) setTerm(val);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 max-w-lg mx-auto">
      <h3 className="text-xl font-bold mb-6" style={{ color: '#1a2744' }}>Estimate Your Monthly Payments</h3>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Treatment</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleTreatmentChange}
          >
            {treatments.map((t) => (
              <option key={t.label} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Cost (&pound;)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={totalCost}
            onChange={handleCostChange}
            min={0}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Repayment Term</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={term}
            onChange={handleTermChange}
          >
            {terms.map((t) => (
              <option key={t} value={t}>{t} months</option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-xl p-5 text-center mb-4" style={{ backgroundColor: '#f0f7ff' }}>
        <p className="text-sm text-gray-500 mb-1">Estimated Monthly Payment</p>
        <p className="text-4xl font-bold" style={{ color: '#2563eb' }}>
          &pound;{monthly.toLocaleString()}
          <span className="text-base font-normal text-gray-500">/mo</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">Over {term} months</p>
      </div>

      <p className="text-xs text-gray-400">
        This is an illustration only. Representative APR will vary. Finance is subject to status and affordability checks. DentalMonthly is a credit broker, not a lender.
      </p>
    </div>
  );
}
