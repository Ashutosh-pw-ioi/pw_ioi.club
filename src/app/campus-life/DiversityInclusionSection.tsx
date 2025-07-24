import React from 'react';
import { Heart } from 'lucide-react';

const DiversityInclusionSection = () => {
  const diversityStats = [
    { percentage: '45%', label: 'Female Students', color: 'bg-accent' },
    { percentage: '60%', label: 'Scholarship Recipients', color: 'bg-accent' },
    { percentage: '100%', label: 'First-Generation College', color: 'bg-accent' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary">
                Diversity & Inclusion
              </h2>
              <p className="font-open-sans text-lg text-primary/80 leading-relaxed">
                Our campus is a melting pot of cultures, ideas, and perspectives. Students from across 
                India and around the world come together to create a truly global learning environment.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {diversityStats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 ${stat.color} rounded-full`}></div>
                    <span className="font-poppins font-bold text-2xl text-secondary">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="font-open-sans text-primary/70">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cream-base to-cream-warm rounded-xl">
              <Heart className="text-accent" size={24} />
              <span className="font-open-sans text-primary">
                <strong>Cultural Unity at PWIOI - </strong>  cultural organizations celebrating diversity
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl shadow-lg bg-black overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xL8op-oqRTg?si=Rj6aRrLMUNqHDy7t"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>
            <p className="font-open-sans text-center text-primary/70 mt-4">
              Campus Diversity Showcase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiversityInclusionSection;