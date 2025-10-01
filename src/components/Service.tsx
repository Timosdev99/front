import React from 'react';

const services = [
  {
    title: 'COUNSELING',
    backgroundImage: "url('/Card1.png')",
    hoverText: 'Individual & Couple. Disruptive Event Management. Crisis Intervention'
  },
  {
    title: 'COACHING',
    backgroundImage: "url('/Card2.jpg')",
    hoverText: 'Executive & Personal'
  },
  {
    title: 'CONSULTING',
    backgroundImage: "url('/Card3.jpg')",
    hoverText: 'Business Consulting. Contracting Services. Program Development'
  },
  {
    title: 'TRAINING',
    backgroundImage: "url('/Card4.jpg')",
    hoverText: 'Executive & Personal. Education Development. Mental Health'
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="text-center text-gray-800 mb-8 max-w-4xl mx-auto">
          <p className=" font-bold">Transformational Living Coaching and Consulting Services, LLC strives to be a company of integrity, professionalism, and reliability to support our clients and customers with meeting their goals.</p>
          <p className="mt-4 text-gray-600">Our Fit for Life Wellness Program® is designed to help companies and business owners implement a proactive mental health and wellness business model. Specifically for those employees in leadership positions and high stress positions. The Fit for Life Wellness Program® will help to reduce burnout, turnover, increase productivity and promote mental wellness, improve psychological safety and self care in the workplace. Additionally we provide mental wellness training and programs, which can be customized and developed to fit the needs of your company.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="group shadow-md hover:shadow-lg transition-shadow duration-300 bg-cover bg-center relative h-80"
              style={{ backgroundImage: service.backgroundImage }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-xl font-bold text-center text-white mb-2">{service.title}</h3>
              </div>
              <div className="absolute mt-32 inset-0  bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center p-4">{service.hoverText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
