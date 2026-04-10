'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <span className="text-4xl">✅</span>
        <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: '#1a2744' }}>Message Sent</h3>
        <p className="text-gray-600">Thank you for getting in touch. We will respond within 1 business day.</p>
      </div>
    );
  }

  const inputClass = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
        <input type="text" name="name" required className={inputClass} value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input type="email" name="email" required className={inputClass} value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input type="tel" name="phone" className={inputClass} value={formData.phone} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea name="message" required rows={4} className={inputClass} value={formData.message} onChange={handleChange} />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-6 text-sm font-semibold text-white rounded-lg transition-colors hover:opacity-90"
        style={{ backgroundColor: '#2563eb' }}
      >
        Send Message
      </button>
    </form>
  );
}
