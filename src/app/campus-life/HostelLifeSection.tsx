'use client';
import React from 'react';
import Image from 'next/image';
import {
   Wifi,
  Car,
  Shield,
  Coffee
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
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Hostel Life - Your Home Away From Home
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
                    <IconComponent size={32} className="text-blue-600 mb-4" />
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="relative aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                fill
                  src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/yello.webp?updatedAt=1752226594635"
                  alt="PWIOI Hostel Life"
                  className=" rounded-2xl object-cover w-full h-full"
                />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Hostel Facilities Include:
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
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