'use client';

import { Badge } from '@/components/ui/badge';
import { Building2 } from 'lucide-react';
import Image from 'next/image';

// Define the Student type
interface Student {
  id: number;
  name: string;
  image: string;
  company: string;
  role: string;
  joiningMonth: string;
  joiningYear: number;
}

const InternshipAndPlacements = () => {
  const placedStudents: Student[] = [
    {
      id: 1,
      name: 'Rishabh Jain',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      company: 'Growth School',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 2,
      name: 'Raj Aggrawal',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3cb?w=300&h=400&fit=crop&crop=face',
      company: 'GEMSCAP Global Analyst Pvt Ltd',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 4,
      name: 'Nimish Agrawal',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'Brand strategist',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 5,
      name: 'Deepali Kumari',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 6,
      name: 'Harsh Bharwani',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 7,
      name: 'Parv Manglani',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'march',
      joiningYear: 2024,
    },
    {
      id: 8,
      name: 'Vivek Shelke',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face',
      company: 'Prephub',
      role: 'Operations',
      joiningMonth: 'Sep',
      joiningYear: 2024,
    },
    {
      id: 9,
      name: 'Abhinav Jain',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&crop=face',
      company: 'COMMUNITY 55',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 10,
      name: 'Rijurjatra Mondal',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&crop=face',
      company: 'Ampifi Solar',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 11,
      name: 'Saket Kumar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 12,
      name: 'Ankit Raj',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah',
      role: 'Frontend Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 13,
      name: 'Nishchay Bhatia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah Central Office',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 14,
      name: 'Arman Raj Gupta',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah Central Office',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 15,
      name: 'Niharika Singh',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 16,
      name: 'Harsh Tiwari',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 17,
      name: 'Harish Kumar',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'Placement Coordinator',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 18,
      name: 'Shreyash Pateriya',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&crop=face',
      company: 'Flobiz',
      role: 'Content Creation and Marketing',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 19,
      name: 'Ganesh Agarwal',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&crop=face',
      company: 'Zidio Development',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 20,
      name: 'Miteshkumar Agrawal',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 21,
      name: 'Rohit Makani',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 22,
      name: 'Aryan Chauhan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'Frontend Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 23,
      name: 'Jivan Jamdar',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 24,
      name: 'Ashutosh Tiwari',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 25,
      name: 'Karthikeya Bendi',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
      company: 'Advait',
      role: 'n8n Specialist',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-4">
            Internships & Placements
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-3xl mx-auto px-4">
            We are dedicated to providing our students with exceptional
            internship and placement opportunities, ensuring they gain
            real-world experience and are well-prepared for their careers.
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
          animation: marquee 120s linear infinite;
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