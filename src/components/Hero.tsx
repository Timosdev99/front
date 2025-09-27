import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-200 py-16 px-6">
      <div className="container mx-auto text-center">

        <div className="flex items-center justify-center mb-8">

          <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mr-6 shadow-lg">
            <div className="text-emerald-600 font-bold text-2xl">
              TLCCS
              <div className="text-xs text-emerald-600 font-normal">LLC</div>
            </div>
          </div>


          <div className="text-left">
            <h1 className="text-5xl font-bold text-emerald-500 mb-2">
              Transformational Living
            </h1>
            <p className="text-emerald-500 text-lg font-semibold tracking-wider">
              COACHING & CONSULTING SERVICES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero
