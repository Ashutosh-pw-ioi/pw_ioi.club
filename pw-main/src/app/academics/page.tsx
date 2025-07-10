'use client';
import React from 'react';
import { 
  BookOpen, Users, Award, Lightbulb
} from 'lucide-react';
import OurSchools from '@/app/academics/OurSchools'; // Import the component

const AcademicsPage = () => {
  const stats = [
    { icon: BookOpen, number: '3', label: 'Programs', color: 'text-primary' },
    { icon: Users, number: '30+', label: 'Faculty', color: 'text-primary' },
  ];

  const projects = [
    { title: 'AI Healthcare Diagnostics', school: 'Technology', team: '', impact: '' },
    { title: 'Rural Business Model', school: 'Management', team: '', impact: '' },
    { title: 'Telemedicine Platform', school: 'Technology', team: '', impact: '' },
    { title: 'Smart City Solutions', school: 'Technology', team: '', impact: '' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-15">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h1 className="font-bold text-3xl lg:text-6xl text-primary">
            Academic Excellence at <span className="text-secondary">PWIOI</span>
          </h1>
          <p className="text-lg max-w-4xl mx-auto text-blue-800 opacity-80">
            Empowering minds through innovative education, cutting-edge research, and industry-relevant curriculum.
          </p>
          
          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-1 justify-center sm:grid-cols-2 gap-6 w-xl ">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-6 bg-white/70 rounded-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center text-center"
                  >
                    <IconComponent size={32} className={`${stat.color} mb-3`} />
                    <div className="font-bold text-2xl mb-1 text-primary">{stat.number}</div>
                    <div className="text-sm text-primary opacity-70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Schools Component */}
      <OurSchools />

      {/* Student Projects Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl mb-4 text-primary">Student Projects</h2>
            <p className="text-lg text-secondary opacity-80">
              Groundbreaking projects solving real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-200 text-primary rounded-full text-xs font-medium">
                    {project.school}
                  </span>
                  <Lightbulb size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  {project.title}
                </h4>
                <p className="text-sm mb-4 text-blue-600">{project.team}</p>
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                  <Award size={16} className="text-green-600" />
                  <span className="text-sm text-green-700 font-medium">{project.impact}</span>
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