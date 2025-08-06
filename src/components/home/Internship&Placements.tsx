'use client';

import { Badge } from '@/components/ui/badge';
import { Building2 } from 'lucide-react';
import Image from 'next/image';
import Intern from "@/data/bengaluru/students/interns.json"

// Define the Student type
interface Student {
  id: number;
  name: string;
  image: string;
  company: string;
  role: string;
 
}

const InternshipAndPlacements = () => {
  
  const placedStudents:Student[]=Intern;

  const StudentCard = ({ student }: { student: Student }) => (
    <div className="flex-shrink-0 w-64 sm:w-70 mx-2 sm:mx-4">
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-72 sm:h-80">
        {/* Background Image */}
        <Image
          src={student.image}
          alt={student.name}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <div className="backdrop-blur-sm bg-black/30 rounded-lg p-3 sm:p-4 border border-white/20 space-y-2 sm:space-y-3">
              {/* Name and Company */}
              <div className="text-center space-y-1 sm:space-y-2">
                <h3 className="font-bold text-accent text-base sm:text-lg leading-tight">
                  {student.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-white/90 text-xs sm:text-sm">
                  <Building2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="font-semibold text-center leading-tight">
                    {student.company}
                  </span>
                </div>
              </div>
              
              {/* Role */}
              <div className="flex justify-center">
                <Badge className="bg-primary text-white  transition-colors duration-200 text-xs sm:text-sm px-2 py-1">
                  {student.role}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-poppins">
            Internships & Placements
          </h2>
          <p className="text-lg text-secondary font-open-sans">
           Empowering students with top career opportunities.
          </p>
        </div>

        {/* Marquee Section - No gradient fade */}
        <div className="overflow-hidden">
          {/* Actual Marquee */}
          <div className="whitespace-nowrap animate-marquee">
            <div className="flex inline-flex">
              {placedStudents.map((student, index) => (
                <StudentCard key={`main-${index}`} student={student} />
              ))}
              {placedStudents.map((student, index) => (
                <StudentCard key={`duplicate-${index}`} student={student} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 80s;
          }
        }
      `}</style>
    </section>
  );
};

export default InternshipAndPlacements;