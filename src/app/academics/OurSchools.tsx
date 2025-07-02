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
  icon: any;
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
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl mb-4 text-primary">Our Schools</h2>
            <p className="text-lg text-blue-900 opacity-80">
              Three flagship schools designed to nurture expertise and innovation.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(Object.entries(schools) as [SchoolKey, SchoolData][]).map(([key, school]) => {
              const IconComponent = school.icon;
              const isActive = activeSchool === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSchool(key)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-secondary text-white shadow-lg' 
                      : 'bg-white text-primary hover:shadow-md border border-gray-200'
                  }`}
                >
                  <IconComponent size={20} />
                  {school.title}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-200">
                  {React.createElement(schools[activeSchool].icon, { 
                    size: 32, 
                    className: "text-blue-900" 
                  })}
                </div>
                <h3 className="font-bold text-3xl text-blue-900">
                  {schools[activeSchool].title}
                </h3>
              </div>
              
              <p className="text-lg text-blue-900 opacity-80">
                {schools[activeSchool].description}
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {schools[activeSchool].departments.map((dept, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <ChevronRight size={16} className="text-secondary" />
                    <span className="text-sm text-blue-900">{dept}</span>
                  </div>
                ))}
              </div>

              {/* Our Other Campuses Section */}
              <div className=" space-y-4 ">
               <h4 className="font-bold text-xl text-blue-900">Our Other Campuses</h4>
               <div className="grid grid-cols-2 gap-4">
                {schools[activeSchool].campuses.map((campus, i) => (
                  <div key={i} className="bg- p-4 rounded-lg shadow-sm border border-blue-100">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-secondary" />
                      <span className="text-sm text-blue-700">{campus.location}</span>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Video Thumbnail Section */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {schools[activeSchool].videoId ? (
                  <div 
                    className="aspect-video relative cursor-pointer group"
                    onClick={openVideoModal}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${schools[activeSchool].videoId}/maxresdefault.jpg`}
                      alt={schools[activeSchool].videoTitle}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <PlayCircle size={48} className="text-red-600" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 rounded-t-2xl flex items-center justify-center">
                    <div className="text-center">
                      <PlayCircle size={80} className="text-blue-600 opacity-80 mx-auto mb-4" />
                      <p className="text-blue-900 font-medium">Video Coming Soon</p>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-blue-900">
                    {schools[activeSchool].videoTitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleModalClick}
        >
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            >
              <X size={24} className="text-gray-700" />
            </button>
            
            {/* Video iframe */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${schools[activeSchool].videoId}?autoplay=1`}
                title={schools[activeSchool].videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            
            {/* Video title */}
            <div className="p-4">
              <h4 className="font-semibold text-lg text-blue-900">
                {schools[activeSchool].videoTitle}
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurSchools;