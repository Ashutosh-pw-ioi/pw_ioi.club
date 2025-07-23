'use client';

import React, { useState } from 'react';
import { CheckCircle, Users, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const StartupGrantsPage = () => {
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const startupGrants = [
    {
      id: 1,
      name: "ICICI Knowledge Park (IKP)",
      description: "Early-stage funding up to $50,000 for tech startups with innovative solutions. Includes 6 months of mentorship and access to our accelerator network.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&crop=center",
      features: ["Mentorship", "Network Access", "Legal Support"],
      link: "https://ikpknowledgepark.com/grant-funding/"
    },
    {
      id: 2,
      name: "Indo-U.S. Science and Technology Forum (IUSSTF)",
      description: "Empowering women-led startups with funding up to $75,000, plus exclusive access to female founder networks and specialized business coaching.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop&crop=center",
      features: ["Coaching", "Network", "PR Support"],
      link: "https://iusstf.org/"
    },
    {
      id: 3,
      name: "NIDHI Seed Support Program",
      description: "Supporting climate-focused startups with grants up to $100,000. Includes access to sustainability experts and green technology partnerships.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      features: ["Expert Mentors", "Partnerships", "Market Access"],
      link: "https://nidhi.dst.gov.in/"
    },
    {
      id: 4,
      name: "Microsoft Global Social Enterpreneurship",
      description: "Fueling AI innovation with grants up to $120,000 for startups developing cutting-edge AI solutions. Includes access to computing resources and AI experts.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
      features: ["Computing Credits", "AI Mentors", "Research Access"],
      link: "https://www.microsoft.com/en-in/startups"
    },
    {
      id: 5,
      name: "Innovation Grant",
      description: "Supporting startups solving social problems with grants up to $60,000. Focused on education, healthcare, and community development solutions.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop&crop=center",
      features: ["Impact Metrics", "NGO Network", "Media Coverage"],
      link: "https://sites.google.com/startupmission.in/innovationgrant/home"
    },
    {
      id: 6,
      name: "Atal New India Challenge",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://aim.gov.in/atal-new-india-challenge.php"
    },
    {
      id: 7,
      name: "Aatmanirbhar Bharat ARISE",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://aim.gov.in/pdf/ARISE-ANIC_Guidelines.pdf"
    },
     {
      id: 8,
      name: "Atal Innovation Mission",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://aim.gov.in/atal-new-india-challenge.php"
    },
      {
      id: 9,
      name: "Credit Guarantee Fund Trust for Micro and Small Enterprise",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://www.cgtmse.in/"
    },
       
       {
      id: 10,
      name: "Prime Minister Employment Generation Programme (PMEGP)",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://msme.gov.in/1-prime-ministers-employment-generation-programme-pmegp"
    },
      {
      id: 11,
      name: "Pradhan Mantri Mudra Yojana (PMMY)",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://www.mudraloancapital.com/?gad_source=1&gad_campaignid=22782214961&gbraid=0AAAABAkW88Nc24OigWU1uEC5vhl6OJm9U&gclid=Cj0KCQjwyvfDBhDYARIsAItzbZGS8Dkl-_vRlWJiVr8kMNGddaxxiiwuo3mmqBQ14fInGV3z5dh1PskaArQ7EALw_wcB"
    },
     {
      id: 12,
      name: "Startup India Seed Fund",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://seedfund.startupindia.gov.in/"
    },
     {
      id: 13,
      name: "Standup India Scheme",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://www.myscheme.gov.in/schemes/sui"
    },
    {
      id: 14,
      name: "Credit Guarantee scheme for startups",
      description: "Empowering rural entrepreneurs with funding up to $40,000 and resources to build sustainable businesses in underserved communities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop&crop=center",
      features: ["Local Mentors", "Market Access", "Infrastructure"],
      link: "https://www.startupindia.gov.in/content/sih/en/credit-guarantee-scheme-for-startups.html"
    },

  ];

  const handleApplyClick = (grantId: number, link: string) => {
    setLoadingStates(prev => ({ ...prev, [grantId]: true }));
    
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [grantId]: false }));
      window.open(link, '_blank');
    }, 1000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % startupGrants.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + startupGrants.length) % startupGrants.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 bg-gray-100">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-poppins leading-tight">
              Fuel Your{' '}
              <span className="text-secondary">Startup</span>
            </h1>
            <p className="text-lg text-secondary font-open-sans leading-relaxed max-w-4xl mx-auto">
              Transform your innovative ideas into thriving businesses with comprehensive grants and mentorship programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>50+ Active Grants</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-5 h-5 text-blue-500" />
                <span>$10M+ Distributed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-5 h-5 text-purple-500" />
                <span>500+ Startups Accelerated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grants Section */}
      <div className="container mx-auto bg-white px-5 sm:px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Available Startup Grants
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Discover funding opportunities tailored for entrepreneurs at every stage 
            of their startup journey.
          </p>
        </div>

        {/* Mobile Carousel (visible on screens smaller than md) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {startupGrants.map((grant) => (
                <div key={grant.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 min-h-[300px] flex flex-col">
                    <div className="relative h-40">
                      <Image
                        src={grant.image}
                        alt={grant.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&crop=center';
                        }}
                      />
                    </div>
                    
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-3 leading-tight">
                          {grant.name}
                        </h3>
                       
                        
                        
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <button
                          onClick={() => handleApplyClick(grant.id, grant.link)}
                          disabled={loadingStates[grant.id]}
                          className="w-full inline-flex items-center justify-center px-4 py-3 bg-primary text-white rounded-lg transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed hover:bg-primary/90"
                        >
                          {loadingStates[grant.id] ? (
                            <>
                              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                              Processing...
                            </>
                          ) : (
                            <>
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {startupGrants.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (visible on md screens and larger) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {startupGrants.map((grant) => (
            <div
              key={grant.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 min-h-[400px] lg:min-h-[400px] flex flex-col"
            >
              <div className="relative h-56 lg:h-64">
                <Image
                  src={grant.image}
                  alt={grant.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&crop=center';
                  }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4 leading-tight">
                    {grant.name}
                  </h3>
                 
                  
                  
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleApplyClick(grant.id, grant.link)}
                    disabled={loadingStates[grant.id]}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed hover:bg-primary/90"
                  >
                    {loadingStates[grant.id] ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupGrantsPage;