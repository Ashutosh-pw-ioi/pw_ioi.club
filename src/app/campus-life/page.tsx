'use client';
import React from 'react';
import DiversityInclusionSection from './DiversityInclusionSection';
import HostelLifeSection from './HostelLifeSection';
import DiningMessSection from './DiningMessSection';
import { 
  Play, 
  Users, 
  Trophy, 
  Building, 
  PlayCircle,
  Globe,
  Music,
  Gamepad2,
  Dumbbell,
} from 'lucide-react';

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
    { title: 'Smart Classrooms', description: 'Interactive digital learning environments', image: 'classroom' },
    { title: 'Modern Studios', description: 'Cutting-edge facilities for innovation', image: 'lab' },
    { title: 'Library', description: 'A treasure trove of knowledge', image: 'library' },
    { title: 'Modern Study Room', description: 'Modern study spaces for creative learning', image: 'innovation' }
  ];

 

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-15 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Campus Life at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-4xl mx-auto">
              Experience a vibrant community where learning extends beyond classrooms. 
              Discover world-class facilities, diverse cultures, and lifelong friendships.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
              {campusStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-cream-warm/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <IconComponent size={32} className={`${stat.color} mx-auto mb-3`} />
                    <div className="font-poppins font-bold text-2xl text-secondary mb-1">
                      {stat.number}
                    </div>
                    <div className="font-open-sans text-sm text-primary/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Diversity Section */}
      <DiversityInclusionSection/>

      {/* Hostel Life Section */}
      <HostelLifeSection />

      {/* Mess & Dining Section */}
      <DiningMessSection />

      {/* Sports Facilities Section */}
      <section className="py-20 bg-gray-100 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
            Sports Facilities
            </h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-3xl mx-auto">
              Stay fit, competitive, and healthy with our comprehensive sports infrastructure and professional coaching.
            </p>
          </div>
          
            <div className="flex justify-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sportsFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center">
                <div className="bg-blue-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <IconComponent size={32} className="text-primary" />
                </div>
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
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Modern Infrastructure
            </h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-3xl mx-auto">
              State-of-the-art facilities designed to enhance learning and foster innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureHighlights.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 mb-4">
                  <Building size={50} className="text-primary opacity-80" />
                </div>
                <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                  {item.title}
                </h4>
                <p className="font-open-sans text-primary/70 text-sm">
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