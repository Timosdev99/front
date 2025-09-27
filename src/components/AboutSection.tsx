'use client'
import { useAppContext } from '@/context/AppContext';
import React from 'react'

const AboutSection = () => {
    const { setShowAboutCeo } = useAppContext();
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Company
        </h2>
        <div className="text-gray-700 text-lg leading-relaxed space-y-4">
          <p>
            Transformational Living Coaching and Consulting Services, LLC is a Woman Owned
            Small Business (WOSB) founded by D. Renee Smith, who has over 20 years of
            experience and expertise in mental health training. We provide professional and quality
            services in diverse settings. To assist our clients and customers with increased
            productivity, reduce burnout, turnover, and manage stress. Through the implementation
            of programs, services, training, coaching, and consulting to ensure their employees have
            a safe and healthy work environment.
          </p>
        </div>

        <div className="text-center mt-8">
          <button onClick={() => setShowAboutCeo(true)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection
