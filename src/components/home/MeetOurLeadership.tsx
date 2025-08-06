'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import leadershipData from '@/data/bengaluru/leaders/leadarShip.json';

const leadership = leadershipData;

const MeetOurLeadership = () => {
  const topLeader = leadership.find((l) => l.isTopLeader);
  const others = leadership.filter((l) => !l.isTopLeader);

  return (
    <section className="bg-cream-warm py-12 sm:py-20 px-5 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-poppins">Meet Our Leadership</h2>
          <p className="text-lg text-secondary font-open-sans">
            Our leadership drives innovation and excellence at PWIOI.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-6 h-[600px]">
          
          {/* Featured Leader - Left side, full height */}
          {topLeader && (
            <div className="w-1/2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="flex flex-col items-center h-full">
                <div className="relative mb-8 w-full">
                  <div className="w-full h-64 relative">
                    <Image
                      src={topLeader.image}
                      alt={topLeader.name}
                      fill
                      className="rounded-xl object-cover shadow-xl"
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-accent-foreground text-sm font-bold">★</span>
                  </div>
                </div>
                
                <div className="text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-3xl font-semibold text-primary mb-3 font-poppins">{topLeader.name}</h3>
                  <p className="font-medium text-secondary mb-6 text-sm">{topLeader.role}</p>
                  <p className="text-primary/80 text-base leading-relaxed mb-8 font-open-sans max-w-md">
                    {topLeader.description}
                  </p>
                </div>
                
                <Button
                  className="border-primary/20 mt-auto bg-accent cursor-pointer text-accent-foreground hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105 px-8 py-3 text-base"
                  onClick={() => window.open(topLeader.linkedin, '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          )}

          {/* Other Leaders - Right side, stacked vertically */}
          <div className="w-1/2 flex flex-col gap-6">
            {others.map((leader, idx) => (
              <div 
                key={idx} 
                className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary/5 group hover:border-accent/20"
              >
                <div className="flex items-start gap-6 h-full">
                  <div className="w-28 h-32 relative flex-shrink-0">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="rounded-lg object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                  </div>
                  <div className="flex-1 flex flex-col h-full">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-primary mb-2 font-poppins transition-colors duration-200">
                        {leader.name}
                      </h4>
                      <p className="text-secondary text-base font-medium mb-3">{leader.role}</p>
                      
                    </div>
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/20 text-primary bg-accent hover:bg-primary hover:text-white transition-all cursor-pointer duration-200 hover:scale-105"
                        onClick={() => window.open(leader.linkedin, '_blank')}
                      >
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Featured Leader - Mobile */}
          {topLeader && (
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-primary/10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 w-full mx-auto">
                  <div className="w-full h-56 relative">
                    <Image
                      src={topLeader.image}
                      alt={topLeader.name}
                      fill
                      className="rounded-xl object-cover shadow-xl"
                      priority
                    />
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-accent-foreground text-xs font-bold">★</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-primary mb-2 font-poppins">{topLeader.name}</h3>
                <p className="text-secondary font-medium mb-4 text-lg">{topLeader.role}</p>
                <p className="text-primary/80 text-sm leading-relaxed mb-6 font-open-sans">
                  {topLeader.description}
                </p>
                
                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent-dark transition-all duration-200"
                  onClick={() => window.open(topLeader.linkedin, '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          )}

          {/* Other Leaders - Mobile */}
          <div className="space-y-6">
            {others.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="rounded-lg object-cover shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary font-poppins">{leader.name}</h4>
                    <p className="text-secondary text-sm font-medium">{leader.role}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-10 h-10 p-0 rounded-full"
                    onClick={() => window.open(leader.linkedin, '_blank')}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurLeadership;