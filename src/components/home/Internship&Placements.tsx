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
    // {
    //   id: 1,
    //   name: 'Rishabh Jain',
    //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
    //   company: 'Growth School',
    //   role: 'Corporate Outreach Associate',
    //   joiningMonth: 'TBD',
    //   joiningYear: 2024,
    // },
    // {
    //   id: 2,
    //   name: 'Raj Aggrawal',
    //   image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
    //   company: 'GEMSCAP Global Analyst Pvt Ltd',
    //   role: 'Equity Analyst & System Trader',
    //   joiningMonth: 'TBD',
    //   joiningYear: 2024,
    // },
    {
      id: 4,
      name: 'Nimish Agrawal',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Nimish%20mishra-min-min.jpg?updatedAt=1753709233509',
      company: 'Physics Wallah IOI',
      role: 'Brand strategist',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 5,
      name: 'Deepali Kumari',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/deepali%20(3)-min.jpg?updatedAt=1753709763763',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 6,
      name: 'Harsh Bharwani',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/IMG_20241231_153905%20-%20Harsh%20Bharwani.jpg?updatedAt=1753708567506',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 7,
      name: 'Parv Manglani',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/parv.jpeg?updatedAt=1753870795557',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'march',
      joiningYear: 2024,
    },
    // {
    //   id: 8,
    //   name: 'Vivek Shelke',
    //   image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face',
    //   company: 'Prephub',
    //   role: 'Operations',
    //   joiningMonth: 'Sep',
    //   joiningYear: 2024,
    // },
    {
      id: 9,
      name: 'Abhinav Jain',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Abhinav%20Jain-min.JPG?updatedAt=1753707745122',
      company: 'COMMUNITY 55',
      role: 'Strategy Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
   
    // {
    //   id: 11,
    //   name: 'Saket Kumar',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
    //   company: 'Physics Wallah IOI',
    //   role: 'Marketing & Strategy',
    //   joiningMonth: 'TBD',
    //   joiningYear: 2024,
    // },
    {
      id: 12,
      name: 'Ankit Raj',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ankit.jpeg?updatedAt=1753871291869',
      company: 'Physics Wallah IOI',
      role: 'Frontend Developer',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 13,
      name: 'Nishchay Bhatia',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/20250626_224106_0000%20-%20Nishchay%20Bhatia.png?updatedAt=1752220016989',
      company: 'Physics Wallah Central Office',
      role: 'Frontend Developer',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 14,
      name: 'Aman Raj Gupta',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/me%20(1)%20-%20Aman%20Raj%20Gupta%20(1).png?updatedAt=1753708489959',
      company: 'Physics Wallah Central Office',
      role: 'Backend Developer',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    // {
    //   id: 15,
    //   name: 'Niharika Singh',
    //   image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face',
    //   company: 'Physics Wallah IOI',
    //   role: 'Marketing Media',
    //   joiningMonth: 'TBD',
    //   joiningYear: 2024,
    // },
    {
      id: 16,
      name: 'Harsh Tiwari',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/IMG_20250708_18535540%20(1).jpeg?updatedAt=1753710816573',
      company: 'Physics Wallah IOI',
      role: 'Brand strategist',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 17,
      name: 'Harish Kumar',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/harish.jpeg?updatedAt=1753870669728',
      company: 'Physics Wallah IOI',
      role: 'Placement Coordinator',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    // {
    //   id: 18,
    //   name: 'Shreyash Pateriya',
    //   image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&crop=face',
    //   company: 'Flobiz',
    //   role: 'Content Creation and Marketing',
    //   joiningMonth: 'TBD',
    //   joiningYear: 2024,
    // },
    {
      id: 19,
      name: 'Ganesh Agarwal',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/DSC02846.JPG?updatedAt=1753710954594',
      company: 'Zidio Development',
      role: 'Web Developer',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    // {
    //   id: 20,
    //   name: 'Miteshkumar Agrawal',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
    //   company: 'Physics Wallah IOI',
    //   role: 'Backend Developer',
    //   joiningMonth: 'TBD',
    //   joiningYear: 2024,
    // },
    {
      id: 21,
      name: 'Rohit Makani',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/DSC02868-min.JPG?updatedAt=1753712042962',
      company: 'Physics Wallah IOI',
      role: 'AI Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
     {
      id: 22,
      name: 'Aryan Chauhan',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/120A7487%20-%20Aryan%20Chauhan-min.JPG?updatedAt=1752248876938',
      company: 'Physics Wallah IOI',
      role: 'Frontend Developer',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 23,
      name: 'Jivan Jamdar',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/jivan.jpeg?updatedAt=1752220249286',
      company: 'Physics Wallah IOI',
      role: 'Product Manager',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    // {
    //   id: 24,
    //   name: 'Ashutosh Tiwari',
    //   image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
    //   company: 'Physics Wallah IOI',
    //   role: 'Corporate Outreach Associate',
    //   joiningMonth: 'TBD',
    //   joiningYear: 2024,
    // },
    {
      id: 25,
      name: 'Karthikeya Bendi',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/karthikeya%20-%20karthikeya%20bendi%20(1)-min.jpg?updatedAt=1753712245834',
      company: 'Advait',
      role: 'n8n Specialist',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
   
    {
      id:26,
      name: 'Mohammad Shoyeb Ansari',
      image:'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/shyebh.jpeg?updatedAt=1753698435882',
      company:'Physics Wallah IOI',
      role:'Backend Developer',
      joiningMonth:'TBD',
      joiningYear:2024,
    }
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