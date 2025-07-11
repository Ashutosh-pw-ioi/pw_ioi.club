'use client';
import React from 'react';
import { 
  Wifi,
  Car,
  Shield,
  Coffee,
  Star
} from 'lucide-react';

const HostelLifeSection = () => {
  const hostelFeatures = [
    { icon: Wifi, title: 'High-Speed WiFi', description: '24/7 unlimited internet access' },
    { icon: Shield, title: 'Security', description: 'Round-the-clock security with CCTV monitoring' },
    { icon: Coffee, title: 'Common Areas', description: 'Study lounges, recreation rooms, and cafeterias' },
    { icon: Car, title: 'Transportation', description: 'Regular shuttle service to academic blocks' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
            Hostel Life - Your Home Away From Home
          </h2>
          <p className="font-open-sans text-lg text-primary/80 max-w-3xl mx-auto">
            Experience comfortable living with modern amenities, fostering friendships and academic excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hostelFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <IconComponent size={32} className="text-accent mb-4" />
                    <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-open-sans text-primary/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/yello.webp?updatedAt=1752226594635"
                  alt="PWIOI Hostel Life"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                  Hostel Facilities Include:
                </h4>
                <ul className="font-open-sans text-primary/70 space-y-1 text-sm">
                  <li>• Twin sharing rooms with attached bathrooms</li>
                  <li>• 24/7 power backup and water supply</li>
                  <li>• Laundry facilities and housekeeping services</li>
                  <li>• Recreation rooms with games and entertainment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelLifeSection;