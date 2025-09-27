import React from 'react'

const PastPerformancesSection = () => {
  const companies = [
    { name: "Delta", logo: "/Delta.png" },
    { name: "Walmart", logo: "/Walmart.png" },
    { name: "T-Mobile", logo: "/Tmob.jpg" },
    { name: "American Airlines", logo: "/America.png" },
    { name: "Georgia Power", logo: "/GP.gif" }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Past Performances</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {companies.slice(0, 3).map((company, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <img src={company.logo} alt={company.name} className="h-32 object-contain" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
            {companies.slice(3).map((company, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <img src={company.logo} alt={company.name} className="h-32 object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PastPerformancesSection;
