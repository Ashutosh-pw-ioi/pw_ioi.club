

'use client';
import React from 'react';
import { ArrowLeft, Mail, LucideIcon } from 'lucide-react';
import Image from 'next/image';

// Define interfaces for type safety
interface ClubHead {
  name: string;
  position: string;
  email: string;
  phone?: string;
}

interface CoreMember {
  name: string;
  position: string;
  specialty?: string;
}

interface ClubData {
  id: string;
  name: string;
  icon: LucideIcon;
  image: string;
  logo?: string;
  bgColor: string;
  color: string;
  description: string;
  head: ClubHead;
  coreMembers: CoreMember[];
  activities: string[];
  recentEvents: string[];
  activityImages?: string[];
}

interface ClubDetailProps {
  club: ClubData;
  onBack: () => void;
}

const ClubDetail: React.FC<ClubDetailProps> = ({ club, onBack }) => {
  const IconComponent = club.icon;

  const handleBackClick = () => {
    onBack();
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-base to-cream-warm">
      {/* Header */}
      <div className={`bg-gradient-to-r ${club.color} text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <button 
            onClick={handleBackClick}
            className="flex items-center gap-2 mb-6 sm:mb-8 text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span className="font-open-sans">Back to Clubs</span>
          </button>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
            <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg flex items-center justify-center">
              {club.logo ? (
                <Image 
                  src={club.logo} 
                  alt={`${club.name} Logo`}
                  width={56}
                  height={56}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg"
                />
              ) : (
                <IconComponent size={48} className="text-white sm:w-14 sm:h-14" />
              )}
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">{club.name}</h1>
              <p className="font-open-sans text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                {club.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Club Head */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-cream-warm/30">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary">Club Leadership</h2>
              <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-cream-warm/30">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-lg sm:text-2xl font-bold text-white">
                      {club.head.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl text-primary">{club.head.name}</h3>
                    <p className="font-open-sans text-base sm:text-lg text-secondary font-medium">{club.head.position}</p>
                    <div className="space-y-2 text-secondary">
                      <div className="flex items-center gap-3">
                        <Mail size={16} className=" flex-shrink-0" />
                        <span className="font-open-sans text-sm sm:text-base break-all">{club.head.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Members */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-cream-warm/30">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary">Core Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {club.coreMembers.map((member, index) => (
                  <div key={index} className="p-4 sm:p-6 bg-gradient-to-br from-cream-base/50 to-cream-warm/30 backdrop-blur-sm rounded-xl border border-cream-warm/30  transition-all duration-300 ">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1 space-y-1 sm:space-y-2">
                        <h4 className="font-poppins font-semibold text-base sm:text-lg text-primary">{member.name}</h4>
                        <p className="font-open-sans text-sm sm:text-base text-secondary font-medium">{member.position}</p>
                        {member.specialty && (
                          <p className="font-open-sans text-xs sm:text-sm text-primary/60">{member.specialty}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-cream-warm/30">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl mb-6 sm:mb-8 text-primary">Our Activities</h2>
              <div className="space-y-3 sm:space-y-4">
                {club.activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-cream-base/40 to-cream-warm/20 backdrop-blur-sm rounded-lg border border-cream-warm/30  transition-all duration-300">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${club.color} mt-2 shadow-sm flex-shrink-0`}></div>
                    <span className="font-open-sans text-sm sm:text-base text-secondary leading-relaxed">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Recent Events */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-cream-warm/30">
              <h3 className="font-poppins font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-primary">Recent Events</h3>
              <div className="space-y-3 sm:space-y-4">
                {club.recentEvents.map((event, index) => (
                  <div key={index} className="p-3 sm:p-4  backdrop-blur-sm rounded-lg border border-cream-warm/30">
                    {/* <div className="flex items-center gap-2 text-xs sm:text-sm text-accent mb-2">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span className="font-open-sans">Recent Event</span>
                    </div> */}
                    <p className="font-poppins font-medium text-sm sm:text-base text-secondary">{event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Gallery */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-cream-warm/30">
              <h3 className="font-poppins font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-primary">Activity Gallery</h3>
              {club.activityImages && club.activityImages.length > 0 ? (
                <div className="space-y-4">
                  <div className={`grid gap-2 sm:gap-3 ${
                    club.activityImages.length === 1 ? 'grid-cols-1' :
                    club.activityImages.length === 2 ? 'grid-cols-2' :
                    club.activityImages.length === 3 ? 'grid-cols-2' :
                    'grid-cols-2'
                  }`}>
                    {club.activityImages.slice(0, 4).map((image, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden rounded-lg border border-cream-warm/30 hover:shadow-md transition-all duration-300 ${
                          club.activityImages?.length === 3 && index === 2 ? 'col-span-2' : 'aspect-square'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Activity ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  {club.activityImages.length > 4 && (
                    <div className="text-center">
                      <span className="font-open-sans text-xs sm:text-sm text-primary/70">
                        +{club.activityImages.length - 4} more photos
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-cream-base/40 to-cream-warm/20 backdrop-blur-sm border border-cream-warm/30 rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300">
                        <span className="font-open-sans text-primary/60 text-xs text-center">Activity Photo {i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <p className="font-open-sans text-xs sm:text-sm text-secondary mt-3 sm:mt-4 text-center">
                Memories from our recent events and activities
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-cream-warm/30">
              <h3 className="font-poppins font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-primary">Club Statistics</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cream-base/40 to-cream-warm/20 backdrop-blur-sm rounded-lg">
                  <span className="font-open-sans text-sm sm:text-base text-secondary">Active Members</span>
                  <span className="font-poppins font-bold text-sm sm:text-base text-secondary">180+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cream-base/40 to-cream-warm/20 backdrop-blur-sm rounded-lg">
                  <span className="font-open-sans text-sm sm:text-base text-secondary">Events This Year</span>
                  <span className="font-poppins font-bold text-sm sm:text-base text-secondary">10+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cream-base/40 to-cream-warm/20 backdrop-blur-sm rounded-lg">
                  <span className="font-open-sans text-sm sm:text-base text-secondary">Established</span>
                  <span className="font-poppins font-bold text-sm sm:text-base text-secondary">2023</span>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;