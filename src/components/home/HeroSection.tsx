'use client';

import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video - Full screen on mobile */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/PW%20IOI%20Snippet%20F1%20(1).mp4?updatedAt=1751352519382"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-base/80 to-cream-warm/10" />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Main heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-poppins font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight sm:leading-[1.1]">
                Empowering Innovation & Leadership at{' '}
                <span className="text-secondary">PWIOI</span>
              </h1>
              
              {/* Optional subtitle - uncomment if needed */}
              {/* <p className="font-open-sans text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                A modern institution shaping future technologists, leaders, and creators
                through excellence in education, innovation, and community.
              </p> */}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 sm:px-10 py-4 text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
              >
                Explore Campus
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator for mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce sm:hidden">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;