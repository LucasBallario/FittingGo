export default function HowItWorks() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
        <header className="bg-white border-b border-green-100">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">
              Fitting<span className="text-green-600">Go</span>
            </h1>
          </div>
        </header>
  
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How FittingGo Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find the perfect golf clubs for your game in just 5 minutes. Our system analyzes your profile and swing
            characteristics to recommend the ideal equipment for you.
          </p>
        </section>
  
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your age, handicap, height, and dominant hand to personalize recommendations.
              </p>
            </div>
  
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Club Type</h3>
              <p className="text-gray-600 leading-relaxed">
                Select what type of club youa re looking for: driver, irons, or wedges.
              </p>
            </div>
  
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Swing Characteristics</h3>
              <p className="text-gray-600 leading-relaxed">
                Provide information about your distances and ball flight pattern.
              </p>
            </div>
  
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Preferences</h3>
              <p className="text-gray-600 leading-relaxed">Choose your favorite brands, priorities, and budget range.</p>
            </div>
          </div>
        </section>
  
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Use FittingGo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Easy</h3>
              <p className="text-gray-600">Complete the process in less than 5 minutes from anywhere.</p>
            </div>
  
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized</h3>
              <p className="text-gray-600">Recommendations based on your unique profile and playing style.</p>
            </div>
  
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save Money</h3>
              <p className="text-gray-600">Find the perfect equipment within your budget.</p>
            </div>
          </div>
        </section>
  
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Improve Your Game?</h2>
            <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
              Start your personalized fitting now and discover the perfect clubs for you.
            </p>
            <a
              href="/fitting"
              className="inline-block bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Fitting
            </a>
          </div>
        </section>
  
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">© 2025 FittingGo. Find your perfect equipment.</p>
          </div>
        </footer>
      </div>
    )
  }
  