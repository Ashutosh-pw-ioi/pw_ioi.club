import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const DiningMessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="font-bold text-3xl text-gray-900">
              Dining & Mess Facilities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nutritious, hygienic, and delicious meals prepared with care. Our mess facilities
              cater to diverse dietary preferences and cultural cuisines.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <Star className="text-green-600" size={15} />
                <span className="text-gray-900 text-sm">Multi-cuisine options daily</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <Star className="text-green-600" size={15} />
                <span className="text-gray-900 text-sm">Special dietary accommodations</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <Star className="text-green-600" size={15} />
                <span className="text-gray-900 text-sm">Hygienic preparation standards</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  fill
                  src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/mess.webp?updatedAt=1752228510793"
                  alt="Dining mess facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="aspect-video rounded-xl overflow-hidden relative">
                  <Image
                    fill
                    src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/mess1.webp?updatedAt=1752228510752"
                    alt="Mess dining area"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Meal Timings</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Breakfast: 7:00 AM - 8:00 AM</p>
                    <p>Lunch: 12:15 PM - 2:30 PM</p>
                    <p>Dinner: 7:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningMessSection;