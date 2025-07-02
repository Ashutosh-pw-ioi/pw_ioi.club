// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Linkedin } from 'lucide-react';

// interface Mentor {
//   id: number;
//   name: string;
//   title: string;
//   company: string;
//   image: string;
//   linkedin: string;
// }

// const Mentors: React.FC = () => {
//   const mentorsData: Mentor[] = [
//     { id: 1, name: 'Saurabh Moharikar', title: 'AI/ML Mentor', company: 'PW', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/saurabh-min.JPG?updatedAt=1749837457042', linkedin: 'https://www.linkedin.com/in/saurabhmoharikar/' },
//     { id: 2, name: 'Janishar Ali', title: 'Head of Program(SOT)', company: 'PW', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ali-min.JPG?updatedAt=1749631912662', linkedin: 'https://www.linkedin.com/in/janishar-ali/' },
//     { id: 3, name: 'Anurag Tiwari', title: 'PM', company: 'PW', image: 'https://media.licdn.com/dms/image/v2/D5603AQFLWlQYiT0C8A/profile-displayphoto-shrink_400_400/B56ZaHJhemGQAg-/0/1746024143286?e=1756339200&v=beta&t=KI6xR-BHC4w-3Dt8-IYWoERN5KFX4VEXplRzIvnn_30', linkedin: 'https://www.linkedin.com/in/anuragtiwarime/' },
//     { id: 4, name: 'Prakash Nimbalkar', title: 'Head of Program(SOM)', company: 'PW', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/nimbalkar-min.JPG?updatedAt=1749631912481', linkedin: 'https://www.linkedin.com/in/princy-nimbalkar/' },
//     { id: 5, name: 'Satya Sai Neerukonda', title: 'DSA Mentor', company: 'PW', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/satyasai-min.JPG?updatedAt=1749836127534', linkedin: 'https://www.linkedin.com/in/vinay-bharadwaj/' },
//     { id: 6, name: 'Dr. Sapna Nibsaiya', title: 'Strategic Academic Head', company: 'PW', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/sapna-min.JPG?updatedAt=1749837456863', linkedin: 'https://www.linkedin.com/in/sapnanibsaiya/' },
//     { id: 7, name: 'Syed Zabi Ulla', title: 'Java/C++ Mentor', company: 'PW', image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Syed%20Zabi%20-%20Syed%20Zabi%20Ulla%20(1)-min.JPG?updatedAt=1749837457137', linkedin: 'https://www.linkedin.com/in/syedzaabii/' },
//     { id: 8, name: 'Soumen Banerjee', title: 'GM-PW SOS', company: 'PW SOS', image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/dbd25a79-9044-40cb-ab9a-e0f513e43743.png', linkedin: 'https://www.linkedin.com/in/soumen-banerjee23/' },
//     { id: 9, name: 'Raunaq Mustafa', title: 'GM, Program Head', company: 'PW SOS', image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d73443e5-a742-4290-b60c-d469ccc35ae2.png', linkedin: 'https://www.linkedin.com/in/preeti-karn/' },
//     { id: 10, name: 'Gopal Sharma', title: 'COO', company: 'PW', image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/62baf27a-2f8f-4289-93a3-dc9a559d5eaf.png', linkedin: 'https://www.linkedin.com/in/gopal-sharma-344290293/' },
//     { id: 11, name: 'Imran Rashid', title: 'CBO', company: 'PW', image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/af2c7cac-1893-40e2-a1eb-3179a850bc10.png', linkedin: 'https://www.linkedin.com/in/imranrashid003/' },
//     { id: 12, name: 'Vijay Shukla', title: 'Head of PW Foundation', company: 'PW SOS', image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/16128d81-f84e-4e48-9309-de60d5c72300.png', linkedin: 'https://www.linkedin.com/in/vjshukla/' },
//     { id: 13, name: 'Sudhanshu Agarwal', title: 'VP-PW SOS', company: 'PW SOS', image: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/e05a103e-5265-470c-9712-e9c5405652a1.png', linkedin: 'https://www.linkedin.com/in/sudhanshu-agarwal-9b3722a7/' },
//   ];

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => {
//     const [imageError, setImageError] = useState(false);

//     const handleViewProfile = (e: React.MouseEvent) => {
//       e.preventDefault();
//       e.stopPropagation();
//       window.open(mentor.linkedin, '_blank', 'noopener,noreferrer');
//     };

//     const handleLinkedInClick = (e: React.MouseEvent) => {
//       e.preventDefault();
//       e.stopPropagation();
//       window.open(mentor.linkedin, '_blank', 'noopener,noreferrer');
//     };

//     return (
//       <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl overflow-hidden mentor-card flex flex-col
//                       w-[180px] min-w-[180px] mx-2 
//                       sm:w-[200px] sm:min-w-[200px] 
//                       md:w-[220px] md:min-w-[220px]
//                       hover:bg-white/15 hover:border-white/30 hover:shadow-3xl hover:-translate-y-2 
//                       transition-all duration-700 ease-out">
//         <div className="relative overflow-hidden">
//           <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden">
//             {!imageError ? (
//               <Image 
//                 src={mentor.image} 
//                 alt={mentor.name}
//                 fill
//                 className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
//                 style={{
//                   objectPosition: 'center top'
//                 }}
//                 sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 220px"
//                 onError={() => setImageError(true)}
//                 priority={mentor.id <= 6} // Priority loading for first 6 mentors
//                 quality={85}
//               />
//             ) : (
//               <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative z-10">
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
        
//         <div className="flex-1 p-2 sm:p-3 bg-white/10 backdrop-blur-sm relative flex flex-col justify-between">
//           <div className="relative z-10 flex-1 flex flex-col justify-between">
//             <div className="flex-1">
//               <h3 className="font-semibold text-sm sm:text-base text-white mb-1 leading-tight line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
//                 {mentor.name}
//               </h3>
//               <p className="text-xs text-gray-300 mb-0.5 leading-tight line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
//                 {mentor.title}
//               </p>
//               <p className="text-xs text-gray-400 mb-2 sm:mb-3 group-hover:text-gray-300 transition-colors duration-300">
//                 @{mentor.company}
//               </p>
//             </div>
            
//             <div className="flex items-center justify-between mt-auto">
//               <button 
//                 onClick={handleViewProfile}
//                 className="text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors duration-300 relative group/btn cursor-pointer z-20 py-1 px-2 rounded-md hover:bg-blue-500/20"
//               >
//                 View profile
//               </button>
//               <Link 
//                 href={mentor.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-blue-500 p-1.5 rounded-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 group/linkedin z-20"
//                 aria-label={`Visit ${mentor.name}'s LinkedIn profile`}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Linkedin className="w-3 h-3 text-white group-hover/linkedin:animate-pulse" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const CarouselRow: React.FC<{ mentors: Mentor[], direction: 'left' | 'right' }> = ({ mentors, direction }) => {
//     const scrollRef = useRef<HTMLDivElement>(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);

//     const handleStart = (clientX: number) => {
//       setIsDragging(true);
//       setIsPaused(true);
//       setStartX(clientX - (scrollRef.current?.offsetLeft || 0));
//       setScrollLeft(scrollRef.current?.scrollLeft || 0);
//     };

//     const handleMove = (clientX: number) => {
//       if (!isDragging) return;
//       const x = clientX - (scrollRef.current?.offsetLeft || 0);
//       const walk = (x - startX) * (isMobile ? 1.5 : 2);
//       if (scrollRef.current) {
//         scrollRef.current.scrollLeft = scrollLeft - walk;
//       }
//     };

//     const handleEnd = () => {
//       setIsDragging(false);
//       setTimeout(() => setIsPaused(false), 300);
//     };

//     // Mouse events
//     const handleMouseDown = (e: React.MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (target.closest('button') || target.closest('a')) return;
//       handleStart(e.pageX);
//     };

//     const handleMouseMove = (e: React.MouseEvent) => {
//       if (!isDragging) return;
//       e.preventDefault();
//       handleMove(e.pageX);
//     };

//     // Touch events
//     const handleTouchStart = (e: React.TouchEvent) => {
//       const target = e.target as HTMLElement;
//       if (target.closest('button') || target.closest('a')) return;
//       handleStart(e.touches[0].clientX);
//     };

//     const handleTouchMove = (e: React.TouchEvent) => {
//       if (!isDragging) return;
//       e.preventDefault();
//       handleMove(e.touches[0].clientX);
//     };

//     const cardWidth = isMobile ? 180 : 220;
//     const cardMargin = 16;
//     const totalWidth = (cardWidth + cardMargin) * mentors.length;

//     return (
//       <div className="overflow-hidden mb-6 sm:mb-8 relative carousel-row">
//         {/* Left shadow for larger screens */}
//         <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>
        
//         {/* Right shadow for larger screens */}
//         <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>
        
//         <div 
//           ref={scrollRef}
//           className={`flex cursor-grab active:cursor-grabbing select-none transition-transform duration-300 ease-out ${
//             !isPaused ? `animate-scroll-${direction}` : ''
//           } hover:pause-animation`}
//           style={{
//             width: `${totalWidth * 2}px`,
//           }}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleEnd}
//           onMouseLeave={handleEnd}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleEnd}
//         >
//           {mentors.map((mentor) => (
//             <MentorCard key={mentor.id} mentor={mentor} />
//           ))}
//           {mentors.map((mentor) => (
//             <MentorCard key={`${mentor.id}-duplicate`} mentor={mentor} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isVerticalDragging, setIsVerticalDragging] = useState(false);
//   const [startY, setStartY] = useState(0);
//   const [scrollTop, setScrollTop] = useState(0);

//   const handleVerticalStart = (clientY: number) => {
//     setIsVerticalDragging(true);
//     setStartY(clientY - (containerRef.current?.offsetTop || 0));
//     setScrollTop(window.pageYOffset);
//     document.body.style.cursor = 'grabbing';
//     document.body.style.userSelect = 'none';
//   };

//   const handleVerticalMove = (clientY: number) => {
//     if (!isVerticalDragging) return;
//     const y = clientY - (containerRef.current?.offsetTop || 0);
//     const walk = (y - startY) * 1.5;
//     window.scrollTo(0, scrollTop - walk);
//   };

//   const handleVerticalEnd = () => {
//     setIsVerticalDragging(false);
//     document.body.style.cursor = '';
//     document.body.style.userSelect = '';
//   };

//   const handleVerticalMouseDown = (e: React.MouseEvent) => {
//     const target = e.target as HTMLElement;
//     if (target.closest('button') || target.closest('a') || target.closest('.flex') || target.closest('.mentor-card')) {
//       return;
//     }
//     handleVerticalStart(e.pageY);
//   };

//   const handleVerticalTouchStart = (e: React.TouchEvent) => {
//     const target = e.target as HTMLElement;
//     if (target.closest('button') || target.closest('a') || target.closest('.flex') || target.closest('.mentor-card')) {
//       return;
//     }
//     handleVerticalStart(e.touches[0].clientY);
//   };

//   return (
//     <section 
//       ref={containerRef}
//       className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden cursor-grab active:cursor-grabbing"
//       onMouseDown={handleVerticalMouseDown}
//       onMouseMove={(e) => isVerticalDragging && handleVerticalMove(e.pageY)}
//       onMouseUp={handleVerticalEnd}
//       onMouseLeave={handleVerticalEnd}
//       onTouchStart={handleVerticalTouchStart}
//       onTouchMove={(e) => isVerticalDragging && handleVerticalMove(e.touches[0].clientY)}
//       onTouchEnd={handleVerticalEnd}
//     >
//       <div className="absolute inset-0 [background-size:15px_15px] sm:[background-size:20px_20px] [background-image:radial-gradient(circle,rgba(148,163,184,0.4)_1px,transparent_1px)] pointer-events-none z-0"></div>
      
//       <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
//       <div className="max-w-7xl mx-auto px-0 sm:px-1 lg:px-1 relative z-10">
//         <div className="text-center mb-8 sm:mb-12 md:mb-16 relative">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-4">
//             Meet Our Expert Mentors
//           </h2>
        
//           <div className="relative inline-block">
//             <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
//               Backed by Industry Experts who have walked the path and are ready to guide your execution           
//             </p>
//           </div>
//         </div>

//         <div className="space-y-2 sm:space-y-4">
//           <CarouselRow 
//             mentors={mentorsData.slice(7, 13)} 
//             direction="left" 
//           />
          
//           <CarouselRow 
//             mentors={mentorsData.slice(0, 7)} 
//             direction="right" 
//           />
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-right {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         @keyframes scroll-left {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }

//         .animate-scroll-right {
//           animation: scroll-right 60s linear infinite;
//         }

//         .animate-scroll-left {
//           animation: scroll-left 60s linear infinite;
//         }

//         @media (max-width: 767px) {
//           .animate-scroll-right {
//             animation: scroll-right 45s linear infinite;
//           }

//           .animate-scroll-left {
//             animation: scroll-left 45s linear infinite;
//           }
//         }

//         .hover\\:pause-animation:hover {
//           animation-play-state: paused;
//         }

//         .hover\\:pause-animation:hover .mentor-card {
//           animation-play-state: paused;
//         }

//         .line-clamp-1 {
//           display: -webkit-box;
//           -webkit-line-clamp: 1;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .bg-grid-pattern {
//           background-image: 
//             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
//           background-size: 30px 30px;
//         }

//         @media (max-width: 767px) {
//           .bg-grid-pattern {
//             background-size: 20px 20px;
//           }
//         }

//         .shadow-3xl {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
//         }

//         * {
//           -webkit-tap-highlight-color: transparent;
//         }

//         .mentor-card {
//           touch-action: pan-y;
//         }

//         @media (hover: none) and (pointer: coarse) {
//           .cursor-grab {
//             cursor: default;
//           }
//           .active\\:cursor-grabbing:active {
//             cursor: default;
//           }
//         }

//         .transition-transform {
//           transition-property: transform;
//           transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//           transition-duration: 300ms;
//         }

//         @supports (-webkit-overflow-scrolling: touch) {
//           .overflow-hidden {
//             -webkit-overflow-scrolling: touch;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };  

// export default Mentors;