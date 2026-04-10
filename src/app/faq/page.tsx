import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'FAQ - DentalMonthly',
  description: 'Frequently asked questions about dental treatment abroad, monthly payment plans, and how DentalMonthly works.',
};

const financeQuestions = [
  { question: 'Is DentalMonthly a lender?', answer: 'No. DentalMonthly is a credit broker, not a lender. We introduce you to a panel of FCA-authorised lenders who may offer you finance.' },
  { question: 'Am I eligible for finance?', answer: 'Finance is subject to status and affordability checks. Most UK residents aged 18 or over may apply. Approval depends on your credit history and personal circumstances.' },
  { question: 'What APR will I pay?', answer: 'Representative APR varies depending on the lender and your personal circumstances. All APR details will be provided in your credit agreement before you sign.' },
  { question: 'How long are the repayment terms?', answer: 'Repayment terms range from 12 to 60 months, depending on the lender and your preference.' },
  { question: 'Can I repay early?', answer: 'Early repayment terms depend on your lender. Check your credit agreement for details. Early repayment fees may apply.' },
  { question: 'Will applying for finance affect my credit score?', answer: 'A full credit application may leave a mark on your credit file. Some lenders offer a soft search first that does not affect your score.' },
  { question: 'How do I apply for finance?', answer: 'Contact our team and we will guide you through the process. We will introduce you to appropriate lenders from our panel based on your treatment and circumstances.' },
  { question: 'What happens if I am declined for finance?', answer: 'If your application is declined, we may be able to introduce you to other lenders from our panel. We will always be transparent about your options.' },
];

const treatmentQuestions = [
  { question: 'What treatments are available?', answer: 'We offer dental implants, composite and porcelain veneers, teeth whitening, dental crowns, and full mouth restorations.' },
  { question: 'How much do treatments cost?', answer: 'Costs vary by treatment and clinic. Teeth whitening starts from around 400, crowns from 600, and full mouth restorations from 8,000. Use our calculator for an estimate.' },
  { question: 'Which countries do partner clinics operate in?', answer: 'Our partner clinics are based in Turkey, Hungary, Spain, and Portugal - all popular destinations for high-quality, affordable dental care.' },
  { question: 'How long will I need to be abroad?', answer: 'Treatment duration varies. Some treatments like whitening can be done in a single visit, while implants may require two visits over a few months.' },
  { question: 'Is the quality of treatment abroad as good as in the UK?', answer: 'Our partner clinics meet strict clinical standards and many dentists hold internationally recognised qualifications. We regularly audit all clinics.' },
  { question: 'What aftercare is provided?', answer: 'All partner clinics provide aftercare plans. Our UK support team is also available if you have questions or concerns after returning home.' },
];

const safetyQuestions = [
  { question: 'Is dental treatment abroad safe?', answer: 'Yes, when using vetted clinics like ours. Our partner clinics are thoroughly checked for clinical standards, qualifications, facilities, and patient safety protocols.' },
  { question: 'How do you vet your clinics?', answer: 'We assess clinical standards, qualifications, patient reviews, facilities and aftercare procedures. We conduct ongoing audits and remove any clinic that does not maintain our standards.' },
  { question: 'What if something goes wrong during treatment?', answer: 'Your clinic will have protocols for managing any clinical issues. Our UK-based team is also available to assist and advise you.' },
  { question: 'Are the dentists qualified?', answer: 'Yes. All dentists in our partner clinics hold recognised dental qualifications and are registered with their national dental authority.' },
  { question: 'Is there a complaints process?', answer: 'Yes. Please visit our Complaints page for details of how to raise a concern and the escalation process, including referral to the Financial Ombudsman Service where relevant.' },
];

export default function FAQPage() {
  return (
    <>
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Find answers to the most common questions about DentalMonthly.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a2744' }}>Finance Questions</h2>
            <FAQAccordion items={financeQuestions} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a2744' }}>Treatment Questions</h2>
            <FAQAccordion items={treatmentQuestions} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a2744' }}>Safety Questions</h2>
            <FAQAccordion items={safetyQuestions} />
          </div>
        </div>
      </section>

      <CTABand
        title="Still Have Questions?"
        subtitle="Our UK-based team is here to help."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
