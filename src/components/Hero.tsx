import React from 'react'

const Hero = () => {
  return (
    <section
      className="py-16 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/Hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <img src="/TLCCS header v2_2.png" alt="TLCCS Header" className="max-w-full h-autp sm:h-64" />
        </div>
      </div>
    </section>
  );
};


export default Hero
