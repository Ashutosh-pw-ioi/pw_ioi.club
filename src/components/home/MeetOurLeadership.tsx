'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

const leadership = [
  {
    name: 'Gopal Sharma',
    role: 'Chief Operating Officer',
    description:
      'Gold Medalist from IIT-BHU, COO at Physics Wallah, passionate about learning, growth, and revolutionizing education.',
    image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/gopal-min.jpg?updatedAt=1749632398507',
    linkedin: 'https://www.linkedin.com/in/gopal-sharma-344290293',
    isTopLeader: true,
  },
  {
    name: 'Janishar Ali',
    role: 'Head, School of Technology',
    description:
      'AVP at PhysicsWallah, ex-founder of CuriousJr (acquired by PW) and MindOrks, passionate innovator.',
    image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ali-min.JPG?updatedAt=1749631912662',
    linkedin: 'https://www.linkedin.com/in/janishar-ali/',
  },
  {
    name: 'Prakash Nimbalkar',
    role: 'Head, School of Management',
    description:
      'Marketing Consultant, GTM & Startup Advisor, Mentor @ MeitY, NASSCOM, and Visiting Faculty.',
    image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/nimbalkar-min.JPG?updatedAt=1749631912481',
    linkedin: 'https://www.linkedin.com/in/prakash-nimbalkar/',
  },
  {
    name: 'Dr Satishpuri Gosavi',
    role: 'Head, School of Healthcare',
    description: 'TO_BE_ADDED',
    image: '/satishpuri.jpeg',
    linkedin: 'https://www.linkedin.com/in/dr-satishpuri-gosavi-88352656/',
  },
];

const MeetOurLeadership = () => {
  const topLeader = leadership.find((l) => l.isTopLeader);
  const others = leadership.filter((l) => !l.isTopLeader);

  return (
    <section className="bg-cream-warm py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-poppins">Meet Our Leadership</h2>
          <p className="text-lg text-primary/70 font-open-sans">
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
                  <p className="text-accent font-medium text-secondary mb-6 text-sm">{topLeader.role}</p>
                  <p className="text-primary/80 text-base leading-relaxed mb-8 font-open-sans max-w-md">
                    {topLeader.description}
                  </p>
                </div>
                
                <Button
                  className="mt-auto bg-accent cursor-pointer text-accent-foreground hover:bg-accent-dark transition-all duration-200 hover:scale-105 px-8 py-3 text-base"
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
                        className="border-primary/20 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer duration-200 hover:scale-105"
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
                  <div>
                    <h4 className="text-lg font-semibold text-primary font-poppins">{leader.name}</h4>
                    <p className="text-secondary text-sm font-medium">{leader.role}</p>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                  onClick={() => window.open(leader.linkedin, '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurLeadership;