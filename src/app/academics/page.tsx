'use client';
import React from 'react';
import { 
  BookOpen, Users, Award, Lightbulb, ExternalLink
} from 'lucide-react';
import OurSchools from '@/app/academics/OurSchools'; // Import the component

const AcademicsPage = () => {
  const stats = [
    { icon: BookOpen, number: '3', label: 'Programs', color: 'text-primary' },
    { icon: Users, number: '30+', label: 'Faculty', color: 'text-primary' },
  ];

  const projects = [
    { title: 'Minli', school: 'Technology', description:"Minli is a powerful URL shortener that lets you create, customize, and manage links with features like password protection, expiry control, QR codes, analytics, and one-click shortening—all in one place." ,link:'https://minli.info' },
    { title: 'IndieCode', school: 'Technology', description:"IndieCode is a DSA learning platform offering curated problems, AI guidance, video solutions, student profiles, achievement tracking, and upcoming contest schedules to help learners stay consistent and improve.",link:"https://indiecode.vercel.app/" },
    // { title: 'LeapX', school: 'Technology', description:"",link:" https://www.pwleapx.com/"},
    { title: 'Space Invader Game', school:"Technology" ,description:"This is a fun space shooting game where you control a spaceship. Move left or right, shoot aliens, and try to survive. The more aliens you destroy, the higher your score!",link:"https://space-invader-45.vercel.app/"}
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-poppins leading-tight">
            Academic Excellence at <span className="text-secondary">PWIOI</span>
          </h1>
          <p className="text-lg max-w-4xl mx-auto text-secondary opacity-80">
            Empowering minds through innovative education, cutting-edge research, and industry-relevant curriculum.
          </p>
          
          
            <div className="grid grid-cols-2 md:grid-cols-2   gap-4 sm:gap-6 mt-6 sm:mt-12 max-w-4xl mx-auto ">
              {stats.map((stat, i) => {
                
                return (
                  <div
                    key={i}
                    className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-cream-warm/30 shadow-lg"
                  >
                   
                    <div className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-secondary mb-1">{stat.number}</div>
                    <div className="font-open-sans text-xs sm:text-sm text-primary/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          
        </div>
      </section>

      {/* Our Schools Component */}
      <OurSchools />

      {/* Student Projects Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl mb-4 text-primary">Student Projects</h2>
            <p className="text-lg text-secondary opacity-80">
              Groundbreaking projects solving real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-200 text-primary rounded-full text-xs font-medium">
                    {project.school}
                  </span>
                  <div className="flex items-center gap-2">
                    <Lightbulb size={20} className="text-primary" />
                    <ExternalLink size={16} className="text-primary opacity-70" />
                  </div>
                </div>
                <h4 className="font-semibold text-xl mb-3 text-primary">
                  {project.title}
                </h4>
                <p className="text-sm mb-4 text-secondary leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                  <Award size={16} className="text-green-600" />
                  <span className="text-sm text-green-700 font-medium">Click to view live project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;