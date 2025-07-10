'use client';

import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import holidays from '@/data/holidays/holidays.json';




const Holidays: React.FC = () => {
  

  // Simple styling for all holidays
  const getCardStyles = (index: number) => {
    const gradients = [
      'from-secondary/15 to-secondary/5',
      'from-accent/15 to-accent/5', 
      'from-primary/15 to-primary/5'
    ];
    return {
      gradient: gradients[index % gradients.length],
      badge: 'bg-accent text-accent-foreground'
    };
  };

  // Format date for display
  const formatDate = (dateString: string): { month: string; day: string; year: string } => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      day: date.getDate().toString(),
      year: date.getFullYear().toString()
    };
  };

  // Get current and upcoming holidays
  const currentDate = new Date();
  const upcomingHolidays = holidays.filter(holiday => new Date(holiday.date) >= currentDate);
  const nextHoliday = upcomingHolidays[0];

  return (
    <>
      <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-base to-cream-warm">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-base/95 to-cream-warm/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3">
              <Calendar className="w-5 h-5 text-secondary" />
              <span className="font-open-sans text-primary/80 font-medium">Academic Year 2025</span>
            </div>
            
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Holiday <span className="text-secondary">Calendar</span>
            </h1>
            
            <p className="font-open-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-3xl mx-auto">
              Plan your academic year with our comprehensive holiday schedule. Stay updated with national holidays, 
              religious festivals, and academic breaks.
            </p>
            
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Next Holiday Highlight */}
          {nextHoliday && (
            <div className="mb-12 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 border border-secondary/20">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 text-secondary font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Next Holiday</span>
                </div>
                <h3 className="font-poppins font-bold text-2xl text-primary">
                  {nextHoliday.name}
                </h3>
                <p className="text-primary/70">{nextHoliday.date}</p>
              </div>
            </div>
          )}

          {/* Holidays Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {holidays.map((holiday, index) => {
              const cardStyles = getCardStyles(index);
              const formattedDate = formatDate(holiday.date);
              
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${cardStyles.gradient} backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 hover:shadow-xl transition-all duration-500 border border-primary/10`}
                >
                  <div className="p-6 space-y-4">
                    {/* Date Display */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-cream-base rounded-xl p-3 shadow-sm">
                          <div className="text-center">
                            <div className="text-xs font-semibold text-primary/60 uppercase tracking-wide">
                              {formattedDate.month}
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              {formattedDate.day}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-poppins font-bold text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                            {holiday.name}
                          </h3>
                          <p className="font-open-sans text-primary/70 text-sm">
                            {formattedDate.year}
                          </p>
                        </div>
                      </div>
                      
                      {/* Holiday Badge */}
                      <div className={`${cardStyles.badge} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm`}>
                        <Calendar className="w-4 h-4" />
                        <span>Holiday</span>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                label: 'Total Holidays', 
                value: holidays.length.toString(),
                color: 'text-secondary' 
              },
              { 
                label: 'Upcoming', 
                value: upcomingHolidays.length.toString(),
                color: 'text-accent' 
              },
              { 
                label: 'This Year', 
                value: new Date().getFullYear().toString(),
                color: 'text-primary' 
              }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-cream-base/50 rounded-xl p-4 border border-primary/10">
                <div className={`font-poppins font-bold text-2xl md:text-3xl ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="font-open-sans text-sm text-primary/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center bg-primary/5 rounded-xl p-6 border border-primary/10">
            <p className="font-open-sans text-sm text-primary/70 leading-relaxed">
              <span className="text-secondary font-semibold">* Important Note:</span> All holiday dates are subject to change based on government announcements 
              and official notifications. Please check the latest updates from the academic office.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Holidays;