'use client'
import { Briefcase } from 'lucide-react';


export default function SohPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-cream-base via-cream-light to-accent/10">
        <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                School of Healthcare
              </h1>
            </div>
            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Discover the future of healthcare through our innovative programs and exceptional faculty.
            </p>
          </div>
        </div>
      </div>
    </>
    
  );
}