import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-pink-900 mb-6">
            Next.js Data Fetching
          </h1>
          <p className="text-xl text-pink-700 mb-8 max-w-2xl mx-auto">
            Explore client-side data fetching in Next.js with elegant, professional design
          </p>
        </div>

        {/* Navigation Card */}
        <div className="max-w-md mx-auto">
          <Link href="/client-data" className="group block">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 p-8">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-pink-900">Client-Side Fetching</h2>
              </div>
              
              <p className="text-pink-700 mb-6 leading-relaxed">
                Fetch data directly in React components after page load. Perfect for dynamic content with loading states and error handling.
              </p>
              
              <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
                <span>Explore Client Data</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
