'use client';
import React, { useState } from 'react';
import { Users, Trophy, Heart, Code, Palette, Calendar, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import ClubDetail from '@/app/clubs/ClubDetail'; // Adjust import path as needed

// Define club key type
type ClubKey = 'tech' | 'social' | 'cultural' | 'creators' | 'sports';

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
  activityImages?: string[]; // Optional field for activity images
}

const ClubPage = () => {
  const [selectedClub, setSelectedClub] = useState<ClubKey | null>(null);

  // Function to handle club selection with scroll to top
  const handleClubSelection = (clubKey: ClubKey) => {
    setSelectedClub(clubKey);
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle back button with scroll to top
  const handleBackToClubs = () => {
    setSelectedClub(null);
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const clubsData: Record<ClubKey, ClubData> = {
    tech: {
      id: 'tech',
      name: 'Tech Club (Qubit)',
      icon: Code,
      image: '/techclub.avif',
      logo: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/techclublogo.jpg?updatedAt=1751290850316",
      bgColor: 'bg-cream-warm/20',
      color: 'from-blue-600 to-blue-800',
      description: 'Innovating the future through technology and programming excellence',
      head: {
        name: 'Mohammad Shoyeb Ansari',
        position: 'Club President',
        email: 'shoyeb.sot010069@pwioi.com',
      },
      coreMembers: [
        { name: 'Aman Raj Gupta', position: 'Core Member' },
        { name: 'Rohit Makhani', position: 'Core Member' },
        { name: 'Saiyam Kumar', position: 'Core Member' },
        { name: 'Jivan Jamdar', position: 'Core Member' }
      ],
      activities: [
        'Annual hackathons and coding competitions',
        'Technical workshops and industry seminars',
        'Open source project contributions',
        'Industry mentor sessions and networking',
        'Innovation lab and research projects'
      ],
      recentEvents: [
        'SQL PowerBI Contest',
        'CP Mentorship Program',
        'Tech Industry Meetup'
      ],
      activityImages:['https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Coding_Contest-min.png?updatedAt=1752137532524','https://ik.imagekit.io/s0kb1s3cx3/PWIOI/DSC02575%20(1).JPG?updatedAt=1752137410877']
    },
    social: {
      id: 'social',
      name: 'Social Welfare Club (Ehsaas)',
      icon: Heart,
      image: '/socialwelfare.avif',
      logo: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ehsaas.jpg?updatedAt=1751273652766',
      bgColor: 'bg-cream-warm/20',
      color: 'from-green-600 to-green-800',
      description: 'Creating positive impact through community service and social responsibility',
      head: {
        name: 'Harish Sharma',
        position: 'Club President',
        email: 'harish.sot010042@pwioi.com',
      },
      coreMembers: [
        { name: 'Parv Manglani', position: 'Core Member' },
        { name: 'Abhinav Jain', position: 'Core Member' },
        { name: 'Aditi', position: 'Core Member' },
        { name: 'Harshit Raj', position: 'Core Member' },
        { name: 'MVS Gayathri', position: 'Core Member' },
        { name: 'Samruddhi Gujarathi', position: 'Core Member' },
        { name: 'Sushrut Kaviskar', position: 'Core Member' },
       
      ],
      activities: [
        'Community development and service projects',
        'Educational support for underprivileged children',
        'Environmental conservation initiatives',
        'Senior citizen care and support programs',
        'Disaster relief and emergency response'
      ],
      recentEvents: [
        'Festival for All',
        'Education Drive',
        'Periods of Change'
      ]
    },
    cultural: {
      id: 'cultural',
      name: 'Cultural Club',
      icon: Palette,
      image: '/cultural.avif',
      bgColor: 'bg-cream-warm/20',
      color: 'from-pink-600 to-pink-800',
      description: 'Celebrating diversity and fostering artistic expression through vibrant cultural events',
      head: {
        name: 'Raman Kumar Pandey',
        position: 'Club President',
        email: 'raman.sot010093@pwioi.com',
      },
      coreMembers: [
        { name: 'Juhi Dugar', position: 'Core Member' },
        { name: 'Rishit Kumar', position: 'Core Member' },
        { name: 'Nandini Bais', position: 'Core Member' },
        { name: 'Harsh Bharwani', position: 'Core Member' }
      ],
      activities: [
        'Grand cultural festivals and celebrations',
        'Traditional and contemporary dance performances',
        'Art exhibitions and creative showcases',
        'Music concerts and cultural recitals',
        'International heritage and food festivals'
      ],
      recentEvents: [
        'Under 25 Summit',
        'SOT 24 & SOM 24 Freshers Party - VIBESTA’25',
        'SOM’23 Freshers Party',
        'DJ Night in Hostel'
      ]
    },
    creators: {
      id: 'creators',
      name: 'Creators Club',
      icon: Users,
      image: '/creators.avif',
      bgColor: 'bg-cream-warm/20',
      color: 'from-orange-600 to-orange-800',
      description: 'Nurturing creative minds through digital innovation and multimedia excellence',
      head: {
        name: 'Taylor Brooks',
        position: 'Club President',
        email: 'taylor.brooks@pwioi.edu',
        phone: '+91 65432 10987'
      },
      coreMembers: [
        { name: 'Jordan Lee', position: 'Creative Director', specialty: 'Video Production & Editing' },
        { name: 'Casey Morgan', position: 'Content Manager', specialty: 'Digital Marketing' },
        { name: 'Alex Rivera', position: 'Design Lead', specialty: 'Graphic & UI/UX Design' },
        { name: 'Sam Parker', position: 'Tech Support', specialty: 'Audio Engineering' }
      ],
      activities: [
        'Professional video production workshops',
        'Photography masterclasses and exhibitions',
        'Podcast creation and digital storytelling',
        'Design thinking and creative competitions',
        'Content creation and social media bootcamps'
      ],
      recentEvents: [
        'PWIOI Student Film Festival',
        'Creative Excellence Awards',
        'Digital Innovation Summit'
      ]
    },
    sports: {
      id: 'sports',
      name: 'Sports Club',
      icon: Trophy,
      image: '/sports.avif',
      bgColor: 'bg-cream-warm/20',
      color: 'from-red-600 to-red-800',
      description: 'Building champions through athletic excellence, teamwork, and sportsmanship',
      head: {
        name: 'Abhyudaya',
        position: 'Club President',
        email: 'abhyudaya.sot010007@pwioi.com',
      },
      coreMembers: [
        { name: 'Anuj Kumar', position: 'Core Member' },
        { name: 'Alok Kumar', position: 'Core Member', specialty: 'Basketball & Team Sports' },
        { name: 'Manshi Sharma', position: 'Core Member' },
        { name: 'Niraj Roy', position: 'Core Member' }
      ],
      activities: [
        'Inter-collegiate tournaments and championships',
        'Professional fitness training programs',
        'Sports camps and skill development clinics',
        'Marathon events and endurance challenges',
        'Team building and leadership activities'
      ],
      recentEvents: [
        'PWIOI Annual Sports Meet',
        'Inter-College Championship',
        'Fitness Challenge Series'
      ]
    }
  };

  // If a club is selected, show the detail view
  if (selectedClub) {
    const club = clubsData[selectedClub];
    return <ClubDetail club={club} onBack={handleBackToClubs} />;
  }

  // Otherwise, show the clubs overview
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-warm/30 to-cream-base/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Student Clubs at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-4xl mx-auto">
              Discover your passion, build lifelong connections, and make a meaningful impact. 
              Join our vibrant student community and become part of something extraordinary.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: '5', label: 'Active Clubs' },
              { number: '300+', label: 'Student Members' },
              { number: '50+', label: 'Annual Events' },
              { number: '10+', label: 'Awards Won' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-cream-warm/30 shadow-lg">
                <div className="font-poppins font-bold text-2xl md:text-3xl text-secondary mb-1">
                  {stat.number}
                </div>
                <div className="font-open-sans text-sm text-primary/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Object.entries(clubsData) as [ClubKey, ClubData][]).map(([key, club]) => {
              const IconComponent = club.icon;
              return (
                <div
                  key={key}
                  onClick={() => handleClubSelection(key)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-cream-warm/30 h-[480px] flex flex-col">
                    {/* Card Header - Fixed Height */}
                    <div className="relative h-40 overflow-hidden rounded-t-2xl flex-shrink-0">
                      <Image
                        src={club.image}
                        alt={`${club.name} Banner`}
                        className="object-cover"
                        fill
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.nextSibling) {
                            (target.nextSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-cream-base/80 to-cream-warm/60">
                        <IconComponent size={48} className="text-primary/60" />
                      </div>
                    </div>

                    {/* Card Content - Flexible Height */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        {club.logo ? (
                          <Image 
                            src={club.logo} 
                            alt={`${club.name} Logo`}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              if (target.nextSibling) {
                                (target.nextSibling as HTMLElement).style.display = 'block';
                              }
                            }}
                          />
                        ) : null}
                        <IconComponent 
                          size={32} 
                          className={`text-primary ${club.logo ? 'hidden' : 'block'}`} 
                        />
                        <h3 className="font-poppins font-bold text-xl text-primary transition-colors leading-tight">
                          {club.name}
                        </h3>
                      </div>
                      
                      {/* Description - Fixed Height with Ellipsis */}
                      <p className="font-open-sans text-primary/80 mb-6 leading-relaxed flex-1 overflow-hidden">
                        <span className="line-clamp-3">
                          {club.description}
                        </span>
                      </p>

                      {/* Quick Info - Fixed Height */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-primary/60">
                          <Calendar size={18} className="text-accent" />
                          <span className="font-open-sans">Regular Events & Activities</span>
                        </div>
                      </div>

                      {/* Action Button - Fixed Position */}
                      <button className="w-full bg-accent hover:bg-accent-dark text-primary font-poppins font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-md mt-auto">
                        Explore Club Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPage;