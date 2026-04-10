import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4" style={{ color: '#1a2744' }}>404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8">Sorry, we could not find the page you are looking for.</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-lg"
        style={{ backgroundColor: '#2563eb' }}
      >
        Return Home
      </Link>
    </div>
  );
}
