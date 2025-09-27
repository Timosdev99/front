import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "D.Renee, D.Renee, D.Renee, I am praying for you because I know there is a life change after your group about selfcare. Your presentation was so inspiring, genuine, and provided a clear approach to transformation and selfcare. I have never heard the breakdown of 'true' self-care and speaking manifestations into existence. My life has honestly not been the same since your message. As a matter of fact, my self-love increased after your presentation. Thank you!"
    },
    {
      text: "Before I met Renee I was lost, unsure, provided a framework that included unconditional support, thought provoking questions, and valuable insight that I was able to implement into my business. Renee has been invaluable and instrumental to the success of my business. Working with her has enabled me to set a clear and concise action plan. She is truly the transformation specialist. She was able to help me overcome my challenges and elevate my business to the next level."
    },
    {
      text: "She is a powerful speaker and combination approach coaching focuses on where you are and provide step by step activities you can take daily to get to where you want to be. She can be trusted to help you get to where you want to be in life."
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white p-8 rounded-lg shadow-sm">
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-emerald-400 text-4xl font-bold">&quot;</div>
              <div className="text-gray-600 text-sm leading-relaxed italic pr-8">
                {testimonial.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
