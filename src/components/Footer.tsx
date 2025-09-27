import React from 'react'

const Footer = () => {
  const naicsCodes = ["541611", "624190", "541612", "611710", "621330", "621420", "923120", "624110"];

  return (
    <footer className="bg-black text-white">

      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">COMPANY</h3>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">TLCCS, LLC</p>
              <p>4499 S Cobb Dr. SE</p>
              <p>Ste D #118</p>
              <p>Smyrna, GA 30080</p>
              <p>Phone: 404-450-0212</p>
              <p>Email: info@tlccs.net</p>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">SITE MAP</h3>
            <div className="space-y-3 text-sm">
              <div><a href="#home" className="hover:text-emerald-400 transition-colors">HOME</a></div>
              <div><a href="#about" className="hover:text-emerald-400 transition-colors">ABOUT</a></div>
              <div><a href="#services" className="hover:text-emerald-400 transition-colors">SERVICES</a></div>
              <div><a href="#performances" className="hover:text-emerald-400 transition-colors">PAST PERFORMANCES</a></div>
              <div><a href="#privacy" className="hover:text-emerald-400 transition-colors underline">PRIVACY POLICY</a></div>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">INFO</h3>
            <div className="space-y-2 text-sm">
              <p>DUNS: 17407992</p>
              <p>CAGE code: 8J2R7</p>
              <p>PRIMARY NAICS code: 611430</p>
              <p>Woman-owned (WOSB)</p>
            </div>
          </div>
        </div>


        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">NAICS Codes:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              {naicsCodes.map((code, index) => (
                <span key={index}>{code}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs text-gray-400 tracking-widest">
            TLCCS, LLC. COPYRIGHT © 2021 ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
