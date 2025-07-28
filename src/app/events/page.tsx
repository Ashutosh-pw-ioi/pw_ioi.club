'use client';

import { Calendar, Clock, MapPin, Users, ChevronRight, Star, TrendingUp, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { useState, } from 'react';

// Define the Event interface
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  actualAttendees?: number;
  category: string;
  image: string;
  description: string;
  status?: string;
  highlights?: string[];
  feedback?: number;
  cardType?: string;
}

const EventsComponent = () => {
  const [currentUpcoming, setCurrentUpcoming] = useState(0);
  const [currentPast, setCurrentPast] = useState(0);

  // Sample upcoming events for demo
  const upcomingEvents: Event[] = [
    // {
    //   id: 1,
    //   title: 'Tech Innovation Summit 2025',
    //   date: '2025-07-15',
    //   time: '09:00 AM',
    //   location: 'Convention Center, Bengaluru',
    //   attendees: 500,
    //   category: 'conference',
    //   image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    //   description: 'Join industry leaders for cutting-edge tech discussions and networking',
    //   status: 'filling-fast'
    // },
    // {
    //   id: 2,
    //   title: 'AI & Machine Learning Workshop',
    //   date: '2025-07-08',
    //   time: '02:00 PM',
    //   location: 'Tech Hub, HSR Layout',
    //   attendees: 50,
    //   category: 'workshop',
    //   image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    //   description: 'Hands-on workshop with AI experts and practical sessions',
    //   status: 'open'
    // },
    // {
    //   id: 3,
    //   title: 'Startup Pitch Night',
    //   date: '2025-07-20',
    //   time: '06:00 PM',
    //   location: 'Innovation Lab, Koramangala',
    //   attendees: 100,
    //   category: 'networking',
    //   image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
    //   description: 'Watch promising startups pitch to top investors',
    //   status: 'open'
    // }
  ];

  const pastEvents: Event[] = [
    {
      id: 5,
      title: 'D2C Hackathon 2024',
      date: '27-28 Dec 2024',
      time: '24 hours',
      location: 'PWIOI Bengaluru Campus',
      attendees: 150,
      actualAttendees: 142,
      category: 'hackathon',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1740',
      description: 'Join us for an exciting hackathon focused on Direct-to-Consumer innovations. Build the next generation of D2C solutions and compete for amazing prizes!',
      highlights: ['Built 5 projects', '95% completion rate', 'Industry mentors'],
      feedback: 4.8,
      cardType: 'featured'
    },
    {
      id: 6,
      title: 'The Last Mile 2025',
      date: '26-27 March 2025',
      time: '02:00 PM-10:00 PM(Both Days)',
      location: 'PWIOI Bengaluru Hostel (Yellow Living)',
      attendees: 300,
      actualAttendees: 500,
      category: 'conference',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/DSC00521-min.JPG?updatedAt=1749622039884',
      description: 'Get ready for a flavorful experience at The Last Mile 2025 — an unforgettable two-day food fiesta by SOM students, serving up tasty delights and vibrant vibes for all!',
      highlights: ['20+ speakers', 'Live case studies', 'Networking sessions'],
      feedback: 4.6,
      cardType: 'minimal'
    },
    {
      id: 7,
      title: 'Ethnic Day 2025',
      date: '28th Feb 2025',
      time: '09:00 AM - 06:00 PM',
      location: 'PWIOI Bengaluru Campus',
      attendees: 80,
      actualAttendees: 285,
      category: 'networking',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/120A8707-min.JPG?updatedAt=1749622041102',
      description: 'Join us for a vibrant ethnic day celebration at PWIOI Bengaluru Campus. Enjoy a day filled with delicious food, cultural performances, and networking opportunities for all!',
      highlights: ['Expert panels', 'Demo sessions', 'Q&A with founders'],
      feedback: 4.9,
      cardType: 'stats'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'filling-fast': return 'bg-red-100 text-red-700 border-red-200';
      case 'open': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-cream-warm/20 text-primary border-cream-warm/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'conference': return '🎯';
      case 'workshop': return '🛠️';
      case 'networking': return '🤝';
      case 'hackathon': return '💻';
      default: return '📅';
    }
  };

  const nextUpcoming = () => {
    setCurrentUpcoming((prev) => (prev + 1) % upcomingEvents.length);
  };

  const prevUpcoming = () => {
    setCurrentUpcoming((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const nextPast = () => {
    setCurrentPast((prev) => (prev + 1) % pastEvents.length);
  };

  const prevPast = () => {
    setCurrentPast((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
  };

  const renderUpcomingCard = (event: Event) => {
    return (
      <div
        key={event.id}
        className="group bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-200/50 min-w-0 flex-shrink-0 w-full sm:w-72"
      >
        {/* Event Image */}
        <div className="relative h-32 sm:h-40 overflow-hidden rounded-t-2xl">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.nextSibling) {
                (target.nextSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
            <Calendar size={32} className="text-blue-600" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {event.status && (
            <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold shadow-md ${getStatusColor(event.status)}`}>
              {event.status === 'filling-fast' ? 'Filling Fast' : 'Open'}
            </div>
          )}

          <div className="absolute top-3 left-3 text-sm bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            {getCategoryIcon(event.category)}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs text-secondary mb-2">
            <Calendar className="w-3 h-3" />
            <span className="font-open-sans">{event.date}</span>
            <span>•</span>
            <Clock className="w-3 h-3" />
            <span className="font-open-sans">{event.time}</span>
          </div>
          
          <h3 className="font-poppins font-bold text-lg text-primary mb-2 line-clamp-2">
            {event.title}
          </h3>
          <p className="font-open-sans text-secondary text-sm mb-3 leading-relaxed line-clamp-2">
            {event.description}
          </p>
          
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
            <MapPin className="w-3 h-3 text-blue-500" />
            <span className="font-open-sans text-xs truncate">{event.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-primary">
              <Users className="w-3 h-3" />
              <span className="font-open-sans font-medium text-xs">{event.attendees} spots</span>
            </div>
            <button className="bg-accent  text-primary px-3 py-2 rounded-xl text-xs font-poppins font-medium transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-1">
              Register <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPastEventCard = (event: Event) => {
    const baseClasses = "group bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-amber-200/50 min-w-0 flex-shrink-0 w-full sm:w-72";
    
    switch(event.cardType) {
      case 'featured':
        return (
          <div key={event.id} className={`${baseClasses} sm:w-80`}>
            <div className="relative h-36 sm:h-44 overflow-hidden rounded-t-2xl">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextSibling) {
                    (target.nextSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                <Calendar size={32} className="text-amber-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <Star className="w-3 h-3" />
                Featured
              </div>
              
              <div className="absolute top-3 left-3 text-sm bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                {getCategoryIcon(event.category)}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-amber-600 mb-2">
                <Calendar className="w-3 h-3" />
                <span className="font-open-sans">{event.date}</span>
                <span>•</span>
                <span className="text-orange-600 font-medium font-open-sans">{event.category}</span>
              </div>
              
              <h3 className="font-poppins font-bold text-lg text-gray-800 mb-2 line-clamp-2">{event.title}</h3>
              <p className="font-open-sans text-gray-600 mb-3 leading-relaxed text-sm line-clamp-2">{event.description}</p>
              
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                <MapPin className="w-3 h-3 text-amber-500" />
                <span className="font-open-sans text-xs truncate">{event.location}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-center p-2 bg-amber-100 rounded-lg border border-amber-200 flex-1">
                  <div className="font-poppins font-bold text-lg text-amber-700">{event.actualAttendees}</div>
                  <div className="font-open-sans text-xs text-gray-600">Attendees</div>
                </div>
                <div className="text-center p-2 bg-orange-100 rounded-lg border border-orange-200 flex-1">
                  <div className="font-poppins font-bold text-lg text-orange-600 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" /> {event.feedback}
                  </div>
                  <div className="font-open-sans text-xs text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div key={event.id} className={`${baseClasses}`}>
            <div className="relative h-32 sm:h-40 overflow-hidden rounded-t-2xl">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextSibling) {
                    (target.nextSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                <Calendar size={32} className="text-amber-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 text-sm bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                {getCategoryIcon(event.category)}
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-amber-600 mb-2">
                <Calendar className="w-3 h-3" />
                <span className="font-open-sans">{event.date}</span>
                <span>•</span>
                <span className="text-orange-600 font-medium font-open-sans">{event.category}</span>
              </div>
              
              <h3 className="font-poppins font-bold text-lg text-gray-800 mb-2 line-clamp-2">{event.title}</h3>
              <p className="font-open-sans text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">{event.description}</p>
              
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                <MapPin className="w-3 h-3 text-amber-500" />
                <span className="font-open-sans text-xs truncate">{event.location}</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-amber-600">
                  <Users className="w-3 h-3" />
                  <span className="font-open-sans font-medium text-xs">{event.actualAttendees}</span>
                </div>
                <div className="flex items-center gap-1 text-orange-600">
                  <Star className="w-3 h-3" />
                  <span className="font-open-sans font-medium text-xs">{event.feedback}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'stats':
        return (
          <div key={event.id} className={`${baseClasses}`}>
            <div className="relative h-32 sm:h-40 overflow-hidden rounded-t-2xl">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextSibling) {
                    (target.nextSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                <Calendar size={32} className="text-amber-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              <div className="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <TrendingUp className="w-3 h-3" />
                <span className="hidden sm:inline">Top Rated</span>
                <span className="sm:hidden">Top</span>
              </div>
              
              <div className="absolute top-3 left-3 text-sm bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                {getCategoryIcon(event.category)}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-amber-600 mb-2">
                <Calendar className="w-3 h-3" />
                <span className="font-open-sans">{event.date}</span>
                <span>•</span>
                <span className="font-medium font-open-sans text-orange-600">{event.category}</span>
              </div>
              
              <h3 className="font-poppins font-bold text-lg text-gray-800 mb-2 line-clamp-2">{event.title}</h3>
              <p className="font-open-sans text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{event.description}</p>
              
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                <MapPin className="w-3 h-3 text-amber-500" />
                <span className="font-open-sans text-xs truncate">{event.location}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-amber-100 rounded-lg p-2 text-center border border-amber-200">
                  <div className="font-poppins font-bold text-sm text-amber-700">{event.actualAttendees}</div>
                  <div className="font-open-sans text-xs text-gray-600">Attendees</div>
                </div>
                <div className="bg-orange-100 rounded-lg p-2 text-center border border-orange-200">
                  <div className="font-poppins font-bold text-sm text-orange-600 flex items-center justify-center gap-1">
                    <Star className="w-3 h-3" /> {event.feedback}
                  </div>
                  <div className="font-open-sans text-xs text-gray-600">Rating</div>
                </div>
                <div className="bg-yellow-100 rounded-lg p-2 text-center border border-yellow-200">
                  <div className="font-poppins font-bold text-sm text-yellow-700">{event.highlights?.length || 0}</div>
                  <div className="font-open-sans text-xs text-gray-600">Highlights</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-8 sm:py-12">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-poppins leading-tight">
              Campus Events at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            <p className="text-lg text-secondary font-open-sans leading-relaxed max-w-4xl mx-auto">
              Exciting events make our campus vibrant.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-12 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Annual Events' },
              { number: '1000+', label: 'Participants' },
              { number: '5', label: 'Event Categories' },
              { number: '4.8', label: 'Average Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-cream-warm/30 shadow-lg">
                <div className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-secondary mb-1">
                  {stat.number}
                </div>
                <div className="font-open-sans text-xs sm:text-sm text-primary/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl pt-12 mx-auto px-5 sm:px-6 lg:px-12 bg-white">
        
        {/* Upcoming Events Section */}
        <div className="mb-16 sm:mb-20 ">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-poppins">Upcoming Events</h2>
            <p className="text-lg text-secondary font-open-sans max-w-2xl mx-auto leading-relaxed">
              Join us for these exciting upcoming events
            </p>
          </div>


          {/* Desktop Grid */}
          {upcomingEvents.length==0 &&
            <div className="text-center text-primary">No upcoming events found.</div>
          }
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event) => renderUpcomingCard(event))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentUpcoming * 100}%)` }}
                >
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="w-full flex-shrink-0 px-2">
                      {renderUpcomingCard(event)}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevUpcoming}
                  className="bg-primary text-white p-2 rounded-full shadow-lg transition-colors"
                  disabled={upcomingEvents.length <= 1}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {upcomingEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentUpcoming(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentUpcoming ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextUpcoming}
                  className="bg-primary text-white p-2 rounded-full shadow-lg  transition-colors"
                  disabled={upcomingEvents.length <= 1}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="pb-12 sm:pb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-poppins">Past Events</h2>
            <p className="text-lg text-secondary font-open-sans max-w-2xl mx-auto leading-relaxed">
              Relive the memories and see what made these events special
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pastEvents.map((event) => renderPastEventCard(event))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentPast * 100}%)` }}
                >
                  {pastEvents.map((event) => (
                    <div key={event.id} className="w-full flex-shrink-0 px-2">
                      {renderPastEventCard(event)}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevPast}
                  className="bg-primary text-white p-2 rounded-full shadow-lg transition-colors"
                  disabled={pastEvents.length <= 1}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {pastEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPast(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentPast ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextPast}
                  className="bg-primary text-white p-2 rounded-full shadow-lg  transition-colors"
                  disabled={pastEvents.length <= 1}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;