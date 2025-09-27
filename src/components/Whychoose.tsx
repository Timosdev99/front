import React from 'react'

const WhyChooseSection = () => {
  const reasons = [
    "Over 20 years of experience in disruptive event management and mental health training.",
    "Full-Service crisis intervention counseling/Certified Professional Counselor credential.",
    "Innovative approach to crisis prevention and clinical management."
  ];

  return (
    <section className="bg-emerald-400 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="text-yellow-400">Why</span> Choose<br />
              TLCCS?
            </h2>
          </div>


          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-yellow-400 text-2xl mt-1">⭐</div>
                <p className="text-white text-lg leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

