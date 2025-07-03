'use client';

import React, { useState } from 'react';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { MapPin, Users, GraduationCap } from 'lucide-react';
import Image from 'next/image';

// Import your JSON data
import BengaluruBatch23SOT from '@/data/bengaluru/students/batch23sot.json';
import BengaluruBatch24SOT from '@/data/bengaluru/students/batch24sot.json';

// TypeScript interfaces
interface Student {
  name: string;
  city?: string;
  state?: string;
  linkedIn: string;
  Male?: string;
}

interface LocationData {
  id: string;
  name: string;
  available: boolean;
  batches: string[];
}

const girlPhotos = [
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Artboard%201%20(1).png?updatedAt=1749838410416",
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Artboard%204%20(1).png?updatedAt=1749838410372",
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Avatar2_Female.png?updatedAt=1749838250715"
];

const boyPhotos = [
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Artboard%203%20(1).png?updatedAt=1749838410369",
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Artboard%207%20(1).png?updatedAt=1749838410343",
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Artboard%208%20(1).png?updatedAt=1749838410201",
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Avatar3_Male.png?updatedAt=1749838291196",
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Avatar2_Male.png?updatedAt=1749838272188",
  "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/Avatar.png?updatedAt=1749838221202"
];

const locations: LocationData[] = [
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    available: true,
    batches: ['2023', '2024', '2025']
  },
  {
    id: 'pune',
    name: 'Pune',
    available: false,
    batches: ['2025']
  },
  {
    id: 'noida',
    name: 'Noida',
    available: false,
    batches: ['2025']
  }
];

const STUDENTS_PER_PAGE = 12; // Adjust this number as needed

const TechnologyPage: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string>('bengaluru');
  const [activeBatch, setActiveBatch] = useState<string>('2023');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Type the imported JSON data
  const batch23SOT = BengaluruBatch23SOT as Student[];
  const batch24SOT = BengaluruBatch24SOT as Student[];

  const sortedBatch23SOT = [...batch23SOT].sort((a, b) => a.name.localeCompare(b.name));
  const sortedBatch24SOT = [...batch24SOT].sort((a, b) => a.name.localeCompare(b.name));

  const getCurrentStudents = (): Student[] => {
    if (activeLocation !== 'bengaluru') {
      return []; // No data for other locations yet
    }

    switch (activeBatch) {
      case '2023':
        return sortedBatch23SOT;
      case '2024':
        return sortedBatch24SOT;
      case '2025':
        return []; // No 2025 batch data yet
      default:
        return [];
    }
  };

  const allStudents = getCurrentStudents();
  
  // Pagination logic
  const totalPages = Math.ceil(allStudents.length / STUDENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * STUDENTS_PER_PAGE;
  const endIndex = startIndex + STUDENTS_PER_PAGE;
  const currentStudents = allStudents.slice(startIndex, endIndex);

  // Reset to page 1 when location or batch changes
  const handleLocationChange = (locationId: string) => {
    setActiveLocation(locationId);
    setCurrentPage(1);
    const location = locations.find(loc => loc.id === locationId);
    if (location) {
      setActiveBatch(location.batches[0]);
    }
  };

  const handleBatchChange = (batch: string) => {
    setActiveBatch(batch);
    setCurrentPage(1);
  };

  const currentLocation = locations.find(loc => loc.id === activeLocation);
  const availableBatches = currentLocation?.batches || [];

  let boyIndex = 0;
  let girlIndex = 0;

  const getStudentPhoto = (student: Student): string => {
    const gender = student.Male?.toLowerCase();
    if (gender === "true") {
      const photo = boyPhotos[boyIndex % boyPhotos.length];
      boyIndex++;
      return photo;
    } else {
      const photo = girlPhotos[girlIndex % girlPhotos.length];
      girlIndex++;
      return photo;
    }
  };

  // Pagination component
  const Pagination = () => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const maxVisiblePages = 5;
      
      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1);
          pages.push('...');
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        }
      }
      
      return pages;
    };

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        {/* Previous button */}
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white/80 text-primary hover:bg-primary/10 shadow-md hover:shadow-lg'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page numbers */}
        <div className="flex gap-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              disabled={typeof page !== 'number'}
              className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                page === currentPage
                  ? 'bg-primary text-white shadow-lg'
                  : typeof page === 'number'
                  ? 'bg-white/80 text-primary hover:bg-primary/10 shadow-md hover:shadow-lg'
                  : 'bg-transparent text-secondary cursor-default'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white/80 text-primary hover:bg-primary/10 shadow-md hover:shadow-lg'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-cream-base via-cream-light to-accent/10">
        <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                School of Technology
              </h1>
            </div>
            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Meet our talented students from the School of Technology across different campuses and batches
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Location Selection */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-secondary" />
              <h2 className="text-xl font-semibold text-primary">Select Campus</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationChange(location.id)}
                  disabled={!location.available}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeLocation === location.id
                      ? 'bg-accent text-accent-foreground shadow-lg transform scale-105'
                      : location.available
                      ? 'bg-white/80 text-primary hover:bg-accent/20 hover:scale-105 shadow-md'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{location.name}</span>
                    {!location.available && (
                      <span className="text-xs bg-gray-300 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Batch Selection */}
          {currentLocation?.available && (
            <div className="mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-5 h-5 text-secondary" />
                <h3 className="text-lg font-semibold text-primary">Select Batch</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {availableBatches.map((batch) => (
                  <button
                    key={batch}
                    onClick={() => handleBatchChange(batch)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeBatch === batch
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white/80 text-primary hover:bg-primary/10 shadow-md'
                    }`}
                  >
                    {batch} Batch
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Students Grid */}
          {currentLocation?.available ? (
            allStudents.length > 0 ? (
              <>
                <div className="text-center mb-8">
                  <p className="text-secondary">
                    Showing {startIndex + 1}-{Math.min(endIndex, allStudents.length)} of {allStudents.length} students from {currentLocation.name} - {activeBatch} Batch
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentStudents.map((student, index) => {
                    const photo = getStudentPhoto(student);

                    return (
                      <a
                        key={startIndex + index}
                        href={student.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:bg-white border border-white/50 hover:border-accent/30"
                      >
                        <div className="relative">
                          {/* Image Container */}
                          <div className="relative mb-4">
                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-accent/20 shadow-lg group-hover:border-accent transition-all duration-300 group-hover:shadow-xl">
                              <Image
                                src={photo}
                                fill
                                alt={student.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            {/* LinkedIn Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center shadow-lg">
                                <Linkedin className="text-white text-sm" />
                              </div>
                            </div>
                          </div>

                          {/* Student Info */}
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                              {student.name}
                            </h3>
                            {student.city && student.state && (
                              <p className="text-sm text-secondary/80 flex items-center justify-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {student.city}, {student.state}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Hover Effect Gradient */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </a>
                    );
                  })}
                </div>

                {/* Pagination */}
                <Pagination />
              </>
            ) : (
              <div className="text-center py-16">
                <div className="bg-white/80 rounded-2xl p-8 max-w-md mx-auto shadow-lg">
                  <Users className="w-16 h-16 text-secondary/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    No Students Yet
                  </h3>
                  <p className="text-secondary">
                    Students data for {currentLocation.name} - {activeBatch} batch will be available soon.
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/80 rounded-2xl p-8 max-w-md mx-auto shadow-lg">
                <MapPin className="w-16 h-16 text-secondary/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Campus Coming Soon
                </h3>
                <p className="text-secondary">
                  {locations.find(loc => loc.id === activeLocation)?.name} campus will be launching soon. 
                  Stay tuned for updates!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
};

export default TechnologyPage;