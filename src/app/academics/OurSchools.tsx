'use client';
import React, { useState } from 'react';

import { 
  Code, PieChart, Stethoscope, PlayCircle, ChevronRight, MapPin, X
} from 'lucide-react';

type SchoolKey = 'technology' | 'management' | 'healthcare';

interface CampusData {
  location: string;
}

interface SchoolData {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  departments: string[];
  recruiters: string[];
  videoId: string;
  videoTitle: string;
  campuses: CampusData[];
}

const OurSchools = () => {
  const [activeSchool, setActiveSchool] = useState<SchoolKey>('technology');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const schools: Record<SchoolKey, SchoolData> = {
    technology: {
      title: 'School of Technology',
      icon: Code,
      description: 'Leading innovation in engineering and technology education with cutting-edge research.',
      departments: ['Computer Science', 'System Design', 'Cloud computing & DevOps', 'Tech Product Management', 'Information Technology', 'AI & Data Science'],
      recruiters: ['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys'],
      videoId: 'WQ3AMbRGMFo',
      videoTitle: 'School of Technology Overview',
      campuses: [
        {
          location: 'Bangalore',
        },
        {
          location: 'Noida',
        },
        {
          location: 'Pune',
        },
        {
          location: 'Lucknow',
        }
      ]
    },
    management: {
      title: 'School of Management',
      icon: PieChart,
      description: 'Developing future business leaders with comprehensive management education.',
      departments: ['BBA', 'International Business', 'Digital Marketing', 'Finance', 'HR Management'],
      recruiters: ['Deloitte', 'KPMG', 'Accenture', 'Wipro', 'HCL'],
      videoId: 'VcDavaC5Swk',
      videoTitle: 'School of Management Overview',
      campuses: [
        {
          location: 'Bangalore',
        },
        {
          location: 'Noida',
        },
        {
          location: 'Pune',
        },
        {
          location: 'Lucknow',
        }
      ]
    },
    healthcare: {
      title: 'School of Healthcare',
      icon: Stethoscope,
      description: 'Advancing healthcare education with modern medical facilities and research.',
      departments: ['B.Voc. in Medical Lab Technology', 'B.Voc. in Medical Theatre Technology', 'B.Voc. in Radiology & Medical Imaging Technology', 'B.Voc. in Dialysis Care Technology'],
      recruiters: [],
      videoId: '-57McjqhLyM',
      videoTitle: 'School of Healthcare Overview',
      campuses: [
        {
          location: 'Pune',
        },
        {
          location: 'Noida',
        },
        {
          location: 'Lucknow',
        },
        {
          location: 'Indore',
        }
      ]
    }
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeVideoModal();
    }
  };

  return (
    <>
      <section className="max-w-7xl pt-12 mx-auto px-5 sm:px-6 lg:px-12 bg-white">
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-poppins">Our Schools</h2>
            <p className="text-base sm:text-lg text-secondary font-open-sans max-w-2xl mx-auto leading-relaxed px-4">
              Three flagship schools designed to nurture expertise and innovation.
            </p>
          </div>

          {/* School Selector - Sticky only on mobile */}
          <div className="sticky top-16 z-10 bg-background sm:bg-white py-4 mb-8 sm:relative sm:top-auto sm:z-auto sm:mb-12 sm:pb-6 lg:pb-8 shadow-sm sm:shadow-none">
            <div className="flex justify-center gap-2 sm:gap-4 flex-wrap sm:px-0">
              {(Object.entries(schools) as [SchoolKey, SchoolData][]).map(([key, school]) => {
                const IconComponent = school.icon;
                const isActive = activeSchool === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSchool(key)}
                    className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      isActive 
                        ? 'bg-secondary text-white shadow-lg' 
                        : 'bg-white text-primary hover:shadow-md border border-gray-200'
                    }`}
                  >
                    <IconComponent size={16} className="sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">{school.title}</span>
                    <span className="sm:hidden">
                      {school.title.split(' ')[2] || school.title.split(' ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-accent">
                  {React.createElement(schools[activeSchool].icon, { 
                    size: 24, 
                    className: "text-blue-900 sm:w-8 sm:h-8" 
                  })}
                </div>
                <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-blue-900">
                  {schools[activeSchool].title}
                </h3>
              </div>
              
              <p className="text-base sm:text-lg text-blue-900 opacity-80 leading-relaxed">
                {schools[activeSchool].description}
              </p>

              <div className="grid gap-3 sm:gap-4">
                {schools[activeSchool].departments.map((dept, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-blue-50 rounded-lg">
                    <ChevronRight size={14} className="text-secondary flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-sm sm:text-base text-blue-900">{dept}</span>
                  </div>
                ))}
              </div>

              {/* Our Other Campuses Section */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg sm:text-xl text-blue-900">Our Other Campuses</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {schools[activeSchool].campuses.map((campus, i) => (
                    <div key={i} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-blue-100">
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-secondary flex-shrink-0 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm text-blue-700">{campus.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              {/* Video Section with Iframe */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {schools[activeSchool].videoId ? (
                  <div className="aspect-video relative">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${schools[activeSchool].videoId}?rel=0&modestbranding=1&controls=1&showinfo=0`}
                      title={schools[activeSchool].videoTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-t-2xl"
                    />
                    {/* Optional: Add a subtle fullscreen button overlay */}
                    <button
                      onClick={openVideoModal}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1.5 sm:p-2 rounded-lg transition-all duration-200 opacity-80 hover:opacity-100"
                      title="Open in fullscreen"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-4 sm:h-4">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 rounded-t-2xl flex items-center justify-center">
                    <div className="text-center">
                      <PlayCircle size={60} className="text-blue-600 opacity-80 mx-auto mb-4 sm:w-20 sm:h-20" />
                      <p className="text-blue-900 font-medium text-sm sm:text-base">Video Coming Soon</p>
                    </div>
                  </div>
                )}
                <div className="p-3 sm:p-4">
                  <h4 className="font-semibold text-base sm:text-lg text-blue-900">
                    {schools[activeSchool].videoTitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal - For fullscreen viewing */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={handleModalClick}
        >
          <div className="relative bg-black rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            >
              <X size={20} className="text-gray-700 sm:w-6 sm:h-6" />
            </button>
            
            {/* Video iframe */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${schools[activeSchool].videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
                title={schools[activeSchool].videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurSchools;