'use client';
import React, { useState } from 'react';
import {  CheckCircle, Users, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const ScholarshipPage = () => {
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const scholarships = [
    {
      id: 1,
      name: "Buddy4Study Scholarship Support Programme 2025-26",
      description: "Supports meritorious students with early access to scholarships, financial aid, and fee waivers to help them pursue higher education despite financial challenges.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&crop=center",
      link: "https://www.buddy4study.com/page/buddy4study-scholarship-support-programme"
    },
    {
      id: 2,
      name: "National Scholarship Scheme",
      description: "Supports bright, low-income students entering professional undergraduate courses with up to ₹30,000 per year, renewable for good performance.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
      link: "https://scholarshipstatuscheck.com/vidyadhan-scholarship/#google_vignette"
    },
    {
      id: 3,
      name: "North South Foundation Scholarship",
      description: "Provides scholarships to academically bright students facing financial constraints.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center",
      link: "https://www.collegesearch.in/articles/north-south-foundation-scholarship"
    },
    {
      id: 4,
      name: "Dr APJ Abdul Kalam Ignite Awards",
      description: "Encourages students to submit creative ideas; selected students receive scholarships to help complete their education.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
      link: "https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/school/dr-p-j-abdul-kalam-ignite-awards-nif"
    },
    {
      id: 5,
      name: "Combined Counselling Board Scholarship",
      description: "Merit-based financial aid for students pursuing higher education in CCB-affiliated colleges, covering ₹60,000–₹2,50,000 per annum.",
      image: "https://images.unsplash.com/photo-1581092795442-8674ba2e3dab?w=400&h=250&fit=crop&crop=center",
      link: "https://theglobalscholarship.org/internships/combined-counselling-board-scholarship-2025?source=main#google_vignette"
    },
    {
      id: 6,
      name: "HDFC Bank Educational Crisis Scholarship Support",
      description: "Offers interim support for students facing personal or economic crises to help them continue their education.",
      image: "https://images.unsplash.com/photo-1559081842-5c3f08866c61?w=400&h=250&fit=crop&crop=center",
      link: "https://v.hdfcbank.com/content/dam/hdfc-aem-microsites/common-pdfs/pdf/ECSS_ApplicationForm.pdf"
    },
    {
      id: 7,
      name: "College Board Indian Scholarship Program",
      description: "Awards top SAT scorers with 100% fee waivers at member universities and significant SAT fee discounts, supporting meritorious students financially.",
      image: "https://images.unsplash.com/photo-1559081842-5c3f08866c61?w=400&h=250&fit=crop&crop=center",
      link: "https://www.buddy4study.com/article/sat-scholarships-college-board-india-scholars-program"
    },
    {
      id: 8,
      name: "IET India Scholarship Award",
      description: "Recognizes outstanding undergraduate engineering students for creativity, innovation, academic excellence, and leadership, empowering future engineering leaders.",
      image: "https://images.unsplash.com/photo-1559081842-5c3f08866c61?w=400&h=250&fit=crop&crop=center",
      link: "https://www.buddy4study.com/page/iet-india-scholarship-awards"
    }
  ];

  const handleApplyClick = (scholarshipId: number, link: string) => {
    setLoadingStates(prev => ({ ...prev, [scholarshipId]: true }));
    
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [scholarshipId]: false }));
      window.open(link, '_blank');
    }, 1000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % scholarships.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + scholarships.length) % scholarships.length);
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
              Unlock Your{' '}
              <span className="text-secondary">Future</span>
            </h1>
            <p className="text-lg text-secondary font-open-sans leading-relaxed max-w-4xl mx-auto">
              Discover scholarships that turn your dreams into achievements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Active Scholarships</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-5 h-5 text-blue-500" />
                <span>Verified & Trusted</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-5 h-5 text-purple-500" />
                <span>50,000+ Students Helped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <div className="container mx-auto bg-white px-5 sm:px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Available Scholarships
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Explore our curated selection of scholarships designed to support students 
            at every level of their academic journey.
          </p>
        </div>

        {/* Mobile Carousel (visible on screens smaller than md) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {scholarships.map((scholarship) => (
                <div key={scholarship.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 min-h-[450px] flex flex-col">
                    <div className="relative h-40">
                      <Image
                        src={scholarship.image}
                        alt={scholarship.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&crop=center';
                        }}
                      />
                    </div>
                    
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-3 leading-tight">
                          {scholarship.name}
                        </h3>
                        <p className="text-secondary text-sm leading-relaxed mb-4">
                          {scholarship.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <button
                          onClick={() => handleApplyClick(scholarship.id, scholarship.link)}
                          disabled={loadingStates[scholarship.id]}
                          className="w-full inline-flex items-center justify-center px-4 py-3 bg-primary text-white rounded-lg transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed hover:bg-primary/90"
                        >
                          {loadingStates[scholarship.id] ? (
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
            {scholarships.map((_, index) => (
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
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 min-h-[520px] lg:min-h-[580px] flex flex-col"
            >
              <div className="relative h-56 lg:h-64">
                <Image
                  src={scholarship.image}
                  alt={scholarship.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&crop=center';
                  }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4 leading-tight">
                    {scholarship.name}
                  </h3>
                  <p className="text-secondary mb-6 leading-relaxed text-base">
                    {scholarship.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleApplyClick(scholarship.id, scholarship.link)}
                    disabled={loadingStates[scholarship.id]}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed hover:bg-primary/90"
                  >
                    {loadingStates[scholarship.id] ? (
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

export default ScholarshipPage;