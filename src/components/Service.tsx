import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      title: "COUNSELING",
      bgColor: "bg-gray-600",
      overlay: "bg-black bg-opacity-40"
    },
    {
      title: "COACHING",
      bgColor: "bg-emerald-500",
      overlay: "bg-emerald-900 bg-opacity-40"
    },
    {
      title: "CONSULTING",
      bgColor: "bg-gray-400",
      overlay: "bg-black bg-opacity-30"
    },
    {
      title: "TRAINING",
      bgColor: "bg-yellow-400",
      overlay: "bg-yellow-800 bg-opacity-40"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>

        <div className="text-gray-700 text-lg leading-relaxed space-y-4 mb-12">
          <p>
            Transformational Living Coaching and Consulting Services, LLC strives to be a company
            of integrity, professionalism, and reliability to support our clients and customers with
            meeting their goals.
          </p>
          <p>
            Our Fit for Life Wellness Program® is designed to help companies and business owners
            implement a proactive mental health and wellness business model. Specifically for those
            employees in leadership positions and high stress positions. The Fit for Life Wellness
            Program® will help to reduce burnout, turnover, increase productivity and promote
            mental wellness, improve psychological safety and self care in the workplace.
          </p>
          <p>
            Additionally we provide mental wellness trainings and programs, which can be
            customized and developed to fit the needs of your company.
          </p>
        </div>


        <div className="grid grid-cols-4 gap-0 h-64">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative ${service.bgColor} group cursor-pointer transition-transform hover:scale-105`}
            >

              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-transparent to-black"></div>
              </div>


              <div className={`absolute inset-0 ${service.overlay} flex items-center justify-center`}>
                <h3 className="text-white font-bold text-xl md:text-2xl tracking-wider text-center">
                  {service.title}
                </h3>
              </div>


              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ServicesSection;
