'use client';

import { Calendar, Clock, MapPin, Users, ChevronRight, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';

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
  // Explicitly type the empty array
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
    //   description: 'Join industry leaders for cutting-edge tech discussions',
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
    //   description: 'Hands-on workshop with AI experts',
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
    //   description: 'Watch startups pitch to investors',
    //   status: 'open'
    // },
    // {
    //   id: 4,
    //   title: 'Cloud Computing Masterclass',
    //   date: '2025-07-25',
    //   time: '10:00 AM',
    //   location: 'Virtual Event',
    //   attendees: 200,
    //   category: 'workshop',
    //   image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    //   description: 'Deep dive into cloud technologies',
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

  const renderPastEventCard = (event: Event) => {
    const baseClasses = "group bg-white/70 backdrop-blur-sm relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-cream-warm/30";
    
    switch(event.cardType) {
      case 'featured':
        return (
          <div key={event.id} className={`${baseClasses} md:col-span-2 lg:col-span-2`}>
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
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
              <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-cream-base/80 to-cream-warm/60">
                <Calendar size={48} className="text-primary/60" />
              </div>
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <Star className="w-3 h-3" />
                Featured
              </div>
              
              <div className="absolute top-4 left-4 text-xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                {getCategoryIcon(event.category)}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-primary/60 mb-4">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="font-open-sans">{event.date}</span>
                <span>•</span>
                <span className="text-secondary font-medium font-open-sans">{event.category}</span>
                <span>•</span>
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-open-sans">{event.location}</span>
              </div>
              
              <h3 className="font-poppins font-bold text-2xl text-primary mb-3">{event.title}</h3>
              <p className="font-open-sans text-primary/80 mb-6 leading-relaxed">{event.description}</p>
              
              <div className="flex items-center gap-8">
                <div className="text-center p-4 bg-gradient-to-br from-cream-base/40 to-cream-warm/20 rounded-xl border border-cream-warm/30">
                  <div className="font-poppins font-bold text-2xl text-secondary">{event.actualAttendees}</div>
                  <div className="font-open-sans text-xs text-primary/60">Attendees</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-cream-base/40 to-cream-warm/20 rounded-xl border border-cream-warm/30">
                  <div className="font-poppins font-bold text-2xl text-accent flex items-center justify-center gap-1">
                    <Star className="w-5 h-5" /> {event.feedback}
                  </div>
                  <div className="font-open-sans text-xs text-primary/60">Rating</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div key={event.id} className={`${baseClasses}`}>
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
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
              <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-cream-base/80 to-cream-warm/60">
                <Calendar size={32} className="text-primary/60" />
              </div>
              
              <div className="absolute top-4 left-4 text-lg bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                {getCategoryIcon(event.category)}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-primary/60 mb-3">
                <Calendar className="w-3 h-3 text-accent" />
                <span className="font-open-sans">{event.date}</span>
                <span>•</span>
                <span className="text-secondary font-medium font-open-sans">{event.category}</span>
              </div>
              
              <h3 className="font-poppins font-bold text-lg text-primary mb-3">{event.title}</h3>
              <p className="font-open-sans text-sm text-primary/80 mb-4 leading-relaxed">{event.description}</p>
              
              <div className="flex items-center gap-1 text-sm text-primary/60 mb-4">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-open-sans">{event.location}</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-primary">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="font-open-sans font-medium">{event.actualAttendees}</span>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-4 h-4" />
                  <span className="font-open-sans font-medium">{event.feedback}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'stats':
        return (
          <div key={event.id} className={`${baseClasses}`}>
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
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
              <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-cream-base/80 to-cream-warm/60">
                <Calendar size={32} className="text-primary/60" />
              </div>
              
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <TrendingUp className="w-3 h-3" />
                Top Rated
              </div>
              
              <div className="absolute top-4 left-4 text-lg bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                {getCategoryIcon(event.category)}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-primary/60 mb-3">
                <Calendar className="w-3 h-3 text-accent" />
                <span className="font-open-sans">{event.date}</span>
                <span>•</span>
                <span className="font-medium font-open-sans text-secondary">{event.category}</span>
              </div>
              
              <h3 className="font-poppins font-bold text-lg text-primary mb-3">{event.title}</h3>
              <p className="font-open-sans text-primary/80 text-sm mb-4 leading-relaxed">{event.description}</p>
              
              <div className="flex items-center gap-1 text-sm text-primary/60 mb-4">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-open-sans">{event.location}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg p-3 text-center border border-cream-warm/30">
                  <div className="font-poppins font-bold text-lg text-secondary">{event.actualAttendees}</div>
                  <div className="font-open-sans text-xs text-primary/60">Attendees</div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-3 text-center border border-cream-warm/30">
                  <div className="font-poppins font-bold text-lg text-accent flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" /> {event.feedback}
                  </div>
                  <div className="font-open-sans text-xs text-primary/60">Rating</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-3 text-center border border-cream-warm/30">
                  <div className="font-poppins font-bold text-lg text-primary">{event.highlights?.length || 0}</div>
                  <div className="font-open-sans text-xs text-primary/60">Highlights</div>
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
    <div className="min-h-screen bg-gradient-to-br from-cream-base to-cream-warm">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-warm/30 to-cream-base/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Campus Events at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-4xl mx-auto">
              Experience the vibrant campus life through our diverse events. From technical workshops to cultural celebrations, 
              there&apos;s always something exciting happening at PWIOI.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Annual Events' },
              { number: '1000+', label: 'Participants' },
              { number: '5', label: 'Event Categories' },
              { number: '4.8', label: 'Average Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-cream-warm/30 shadow-lg">
                <div className="font-poppins font-bold text-2xl md:text-3xl text-secondary mb-1">
                  {stat.number}
                </div>
                <div className="font-open-sans text-sm text-primary/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upcoming Events Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">Upcoming Events</h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Join us for these exciting upcoming events
            </p>
          </div>

          {/* Show message when no upcoming events */}
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-cream-warm/30">
              <div className="text-6xl mb-6">📅</div>
              <h3 className="font-poppins font-bold text-xl text-primary mb-3">No Upcoming Events</h3>
              <p className="font-open-sans text-primary/60">Stay tuned for exciting events coming soon!</p>
            </div>
          ) : (
            /* Upcoming Events Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`group bg-white/70 backdrop-blur-sm relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-cream-warm/30 ${
                    index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Event Image */}
                  <div className={`relative ${index === 0 ? 'h-64' : 'h-48'} overflow-hidden rounded-t-2xl`}>
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
                    <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-cream-base/80 to-cream-warm/60">
                      <Calendar size={48} className="text-primary/60" />
                    </div>
                    
                    {event.status && (
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${getStatusColor(event.status)}`}>
                        {event.status === 'filling-fast' ? 'Filling Fast' : 'Open'}
                      </div>
                    )}

                    <div className="absolute top-4 left-4 text-lg bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                      {getCategoryIcon(event.category)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-primary/60 mb-4">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="font-open-sans">{event.date}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="font-open-sans">{event.time}</span>
                      <span>•</span>
                      <span className="text-secondary font-medium font-open-sans">{event.category}</span>
                    </div>
                    
                    <h3 className={`font-poppins font-bold text-primary mb-3 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {event.title}
                    </h3>
                    <p className="font-open-sans text-primary/80 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-1 text-sm text-primary/60 mb-6">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="font-open-sans">{event.location}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-secondary">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="font-open-sans font-medium">{event.attendees} spots</span>
                      </div>
                      <button className="bg-accent hover:bg-accent-dark text-accent-foreground px-4 py-2 rounded-xl text-sm font-poppins font-medium transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2">
                        Register <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past Events Section */}
        <div className="pb-16">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">Past Events</h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Relive the memories and see what made these events special
            </p>
          </div>

          {/* Past Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => renderPastEventCard(event))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;