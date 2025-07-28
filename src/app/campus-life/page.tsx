import React from 'react';
import Image from 'next/image';
import { 
  Users, 
  Trophy, 
  Building, 
  Globe,
  Music,
  Gamepad2,
  Dumbbell,
} from 'lucide-react';
import DiningMessSection from './DiningMessSection';
import DiversityInclusionSection from './DiversityInclusionSection';
import HostelLifeSection from './HostelLifeSection';

const CampusLifePage = () => {
  const campusStats = [
    { icon: Users, number: '300+', label: 'Students', color: 'text-secondary' },
    { icon: Globe, number: '6+', label: 'States Represented', color: 'text-secondary' },
    { icon: Building, number: '3', label: 'Hostel', color: 'text-secondary' },
    { icon: Trophy, number: '5+', label: 'Sports Facilities', color: 'text-secondary' }
  ];

  const sportsFeatures = [
    { icon: Dumbbell, title: 'Modern Gym', description: 'State-of-the-art equipment and fitness programs' },
    { icon: Gamepad2, title: 'Indoor Sports', description: 'badminton, table tennis, pool , and more' },
    { icon: Music, title: 'Outdoor Grounds', description: 'Football, cricket, Badminton, and more' }

  ];

  const infrastructureHighlights = [
    { title: 'Smart Classrooms', description: 'Interactive digital learning environments', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/classroom.jpeg?updatedAt=1753700923252' },
    { title: 'Modern Studios', description: 'Cutting-edge facilities for innovation', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/studio.jpeg?updatedAt=1753700943398' },
    { title: 'Library', description: 'A treasure trove of knowledge', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/liberary.jpeg?updatedAt=1753700904161' },
    { title: 'Modern Study Room', description: 'Modern study spaces for creative learning', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/studyroom-min.jpg?updatedAt=1753700853994' }
  ];

 

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-8 sm:py-12">
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-poppins leading-tight">
              Campus Life at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            <p className="text-lg text-secondary font-open-sans leading-relaxed max-w-4xl mx-auto">
              Experience a vibrant community where learning extends beyond classrooms. 
              Discover world-class facilities, diverse cultures, and lifelong friendships.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-12 max-w-4xl mx-auto">
              {campusStats.map((stat, index) => {
                
                return (
                  <div key={index} className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-cream-warm/30 shadow-lg">
                    
                    <div className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-secondary mb-1">
                      {stat.number}
                    </div>
                    <div className="font-open-sans text-xs sm:text-sm text-primary/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Dining and Mess Section */}
      
      {/* Diversity and Inclusion Section */}
      <DiversityInclusionSection />
      {/* Hostel Life Section */}
      <HostelLifeSection />
      <DiningMessSection />

      {/* Sports Facilities Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-900 mb-3 sm:mb-4">
            Sports Facilities
            </h2>
            <p className="text-base sm:text-lg text-blue-800 max-w-3xl mx-auto px-4 sm:px-0">
              Stay fit, competitive, and healthy with our comprehensive sports infrastructure and professional coaching.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto max-w-4xl">
              {sportsFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center"
                  >
                    <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <IconComponent size={24} className="text-blue-900 sm:w-8 sm:h-8" />
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-blue-700 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-900 mb-3 sm:mb-4">
              Modern Infrastructure
            </h2>
            <p className="text-base sm:text-lg text-blue-800 max-w-3xl mx-auto px-4 sm:px-0">
              State-of-the-art facilities designed to enhance learning and foster innovation.
            </p>
          </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
  {infrastructureHighlights.map((item, index) => (
    <div key={index} className="group cursor-pointer">
      <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 mb-3 sm:mb-4">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <h4 className="font-semibold text-base sm:text-lg text-blue-900 mb-2">
        {item.title}
      </h4>
      <p className="text-blue-700 text-sm sm:text-base">
        {item.description}
      </p>
    </div>
  ))}
</div>
        </div>
      </section>

      
      
    </div>
  );
};

export default CampusLifePage;