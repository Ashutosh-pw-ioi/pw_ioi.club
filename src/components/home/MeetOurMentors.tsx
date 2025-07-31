'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const MeetOurMentors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mentors = [
    
    {
      id: 2,
      name: 'Saurabh Moharikar',
      role: 'AI/ML',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/saurabh-min.JPG?updatedAt=1749837457042',
      company: 'Red Hat',
      companyLogo: '🎩'
    },
    {
      id: 3,
      name: 'Shubham Gautam',
      role: 'Operating System',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/shubham-min.JPG?updatedAt=1749837456962',
      company: 'Navi',
      companyLogo: '🚀'
    },
    {
      id: 4,
      name: 'Kinjal Sengupta',
      role: 'Career Excellence',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/kinjal-min.JPG?updatedAt=1749837456280',
      company: 'J.P.Morgan',
      companyLogo: '🏦'
    },
  
    {
      id: 6,
      name: 'Nitin M',
      role: 'Web Development',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/nitin-min.JPG?updatedAt=1749837457049',
      company: 'Google',
      companyLogo: '🔍'
    },
    {
      id: 7,
      name: 'Anisha Koshy',
      role: 'English',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/anisha-min.JPG?updatedAt=1749837456915',
      company: 'Amazon',
      companyLogo: '📦'
    },
    {
      id: 8,
      name: 'Satya Sai Neerukonda',
      role: 'DSA',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/satyasai-min.JPG?updatedAt=1749836127534',
      company: 'Google',
      companyLogo: '🔍'
    },
    {
      id: 10,
      name: 'Kaibalya Biswal',
      role: 'Python',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/KB-min.JPG?updatedAt=1749837638557',
      company: 'Google',
      companyLogo: '🔍'
    },
      {
      id: 5,
      name: 'Syed Zabi Ulla',
      role: 'Java/C++',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Syed%20Zabi%20-%20Syed%20Zabi%20Ulla%20(1)-min.JPG?updatedAt=1749837457137',
      company: 'Decentro',
      companyLogo: '💼'
    },
       {
      id: 11,
      name: 'Janishar Ali Anwar',
      role: 'Web Development',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ali-min.JPG?updatedAt=1749631912662',
      company: 'Decentro',
      companyLogo: '💼'
    },
    {
      id:12,
      name:"Dr. Sapna Nibsaiya",
      role:"Cunsumer Behaviour/Economics",
      image:"https://ik.imagekit.io/s0kb1s3cx3/PWIOI/sapna-min.JPG?updatedAt=1749837456863",
    },{
      id:13,
      name:"Prakash Nimbalar",
      role:"Retail Management",
      image:"https://ik.imagekit.io/s0kb1s3cx3/PWIOI/nimbalkar-min.JPG?updatedAt=1749631912481",

    },
    {
      id:14,
      name:"Gopal Sharma",
      role:"Critical Thinking",
      image:"https://ik.imagekit.io/s0kb1s3cx3/PWIOI/gopalSir.jpg?updatedAt=1749828781191"
    },
    {
      id:15,
      name:"Saran S",
      role:"Business Communication/Career Excellence",
      image:"https://ik.imagekit.io/s0kb1s3cx3/PWIOI/SARAN%20S%20B.jpg?updatedAt=1753869671237"
    }
  ];

  // Dynamic items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 768) return 2; // tablet
    if (window.innerWidth < 1024) return 3; // small desktop
    if (window.innerWidth < 1280) return 4; // medium desktop
    return 5; // large desktop
  };

  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(getItemsPerView());
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, mentors.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  const visibleMentors = mentors.slice(currentIndex, currentIndex + itemsPerView);

  // Calculate grid columns based on items per view
  const getGridCols = () => {
    switch (itemsPerView) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-2';
      case 3: return 'grid-cols-3';
      case 4: return 'grid-cols-4';
      case 5: return 'grid-cols-5';
      default: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
    }
  };

  // Check if we're on mobile for conditional rendering
  const isMobileView = itemsPerView === 1;

  return (
    <section className="py-12 sm:py-20 bg-background text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-poppins">
              Our Mentors
            </h2>
          </div>
          
          {/* Navigation Buttons - Hide on mobile, show swipe hint instead */}
          <div className="hidden sm:flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer text-primary bg-accent rounded-full border border-primary flex items-center justify-center hover:text-white hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer text-primary bg-accent rounded-full border border-primary flex items-center justify-center hover:text-white hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>

        {/* Mentors Grid with touch support */}
        <div 
          className={`grid ${getGridCols()} gap-4 sm:gap-6`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {visibleMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="group"
            >
              {/* Mentor Card */}
              <div className="relative overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="relative h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden">
                  {/* Background Image using Next.js Image component */}
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-accent mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-white text-xs sm:text-sm mb-3">
                      {mentor.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        {maxIndex > 0 && (
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex 
                    ? 'bg-white w-6 sm:w-8' 
                    : 'bg-primary w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile navigation buttons at bottom */}
        {isMobileView && (
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 text-primary bg-accent rounded-full border border-primary flex items-center justify-center active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 text-primary bg-accent rounded-full border border-primary flex items-center justify-center active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetOurMentors;