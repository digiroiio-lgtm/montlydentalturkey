import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-white mb-2">DentalMonthly</div>
            <p className="text-sm text-gray-400">Premium Dental Treatment Abroad. Pay Monthly.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/partner-clinics" className="hover:text-white transition-colors">Partner Clinics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Treatments</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/treatments" className="hover:text-white transition-colors">Implants</Link></li>
              <li><Link href="/treatments" className="hover:text-white transition-colors">Veneers</Link></li>
              <li><Link href="/treatments" className="hover:text-white transition-colors">Whitening</Link></li>
              <li><Link href="/treatments" className="hover:text-white transition-colors">Full Mouth</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/complaints" className="hover:text-white transition-colors">Complaints</Link></li>
              <li><Link href="/finance-disclosure" className="hover:text-white transition-colors">Finance Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-500 mb-3">
            DentalMonthly is a credit broker, not a lender. We introduce customers to a panel of lenders and finance partners. Finance is subject to status and affordability checks. Representative examples are for illustration only. DentalMonthly Ltd is registered in England and Wales. dentalmonthly.co.uk
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} DentalMonthly Ltd. All rights reserved. Registered in England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
