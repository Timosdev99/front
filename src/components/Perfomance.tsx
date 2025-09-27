import React from 'react'

const PastPerformancesSection = () => {
  const companies = [
    { name: "Delta", logo: "🔺", color: "text-red-600" },
    { name: "Walmart", logo: "⭐", color: "text-blue-500" },
    { name: "T-Mobile", logo: "T", color: "text-pink-500" },
    { name: "American Airlines", logo: "✈️", color: "text-red-500" },
    { name: "Georgia Power", logo: "⚡", color: "text-blue-600" }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Past Performances</h2>


        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">

          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl">{companies[0].logo}</div>
            <div className={`text-3xl font-bold ${companies[0].color}`}>DELTA</div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl text-yellow-500">⭐</div>
            <div className="text-3xl font-bold text-blue-600">Walmart</div>
            <div className="text-sm text-blue-600">Save money. Live better.</div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl text-pink-500">T</div>
            <div className="text-3xl font-bold text-pink-500">T-Mobile</div>
          </div>


          <div className="flex flex-col items-center space-y-4 md:col-start-1">
            <div className="text-4xl text-red-500">✈️</div>
            <div className="text-2xl font-bold text-gray-700">American Airlines</div>
          </div>

          <div className="flex flex-col items-center space-y-4 md:col-start-3">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded-sm flex items-center justify-center">
              <div className="text-white font-bold text-xl">GP</div>
            </div>
            <div className="text-2xl font-bold text-gray-700 text-center">
              Georgia<br />Power
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastPerformancesSection;
