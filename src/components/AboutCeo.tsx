import React from 'react';
import Footer from '@/components/Footer';

const CEOHeroSection = ({
  name = "D.Renee Smith",
  title = "Licensed Professional Counselor (LPC)",
  description = "D.Renee Smith is a Licensed Professional Counselor (LPC) who has experience in numerous settings including but not limited to schools, hospitals, community, residential. She worked with different populations such as HIV and AIDS, Veterans, Military Sexual Abuse (MST), PTSD, Children and Adolescents, Marriage and Family, Substance Abuse and Mental Illness. She is an author, mother, and an entrepreneur who owns a successful coaching and consulting business. She was a media personality for 18-months at 41NBC News providing advice on different topics. In addition, she has been featured in Sheen and Voyager Atlanta magazine for the work she does in her business and community.",
  communityLeadership = [
    "Founder of TLC Family Life Center, Inc, a non-profit organization mentoring young mothers through life challenges and obstacles.",
    "Creator of Noble Ladies in Waiting Program to support young women pursuing higher education, scholarships, leadership, life skills and parenting."
  ],
  certifications = [
    "Certified Green Belt Lean Six Sigma",
    "Licensed Professional Counselor (LPC)",
    "Certified Professional Counselor Supervisor (CPCS)",
    "Certified Transformational Life Coach (CTC)",
    "Certified Anger Management Specialist-II (CAMS-II)",
    "Certified Transformational and Solution Focused Life Coach"
  ],
  certificationImages = [
    "/UCI-Life-Coach-Logo-225.png",
    "/UCI-Solution-Focused-Coach-Logo-225.png",
    "/UCI-Transformatinal-Coach-Logo-Big.png"
  ]
}) => {
  return (
    <>
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MEET THE CEO
            </h1>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div className="flex justify-center lg:justify-start">
              <div className="w-96 h-[30rem] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/Ceo.jpg"
                  alt={`${name} - CEO`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


            <div className="space-y-8">

              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {description}
                </p>
              </div>


              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-wider">
                  COMMUNITY LEADER
                </h2>
                <ul className="space-y-3">
                  {communityLeadership.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-wider">
                  CERTIFICATIONS
                </h2>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="flex flex-wrap gap-6 mt-8">
                {certificationImages.map((image, index) => (
                  <div key={index} className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={image}
                      alt={`Certification Badge ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CEOHeroSection;
