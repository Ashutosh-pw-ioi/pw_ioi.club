'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import images from '@/data/bengaluru/gallery/images.json'


const LifeAtPWIOI = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  // Define different card sizes for modern masonry layout
  const cardSizes = [
    'col-span-1 row-span-2', // tall
    'col-span-2 row-span-1', // wide
    'col-span-1 row-span-1', // normal
    'col-span-2 row-span-2', // large
    'col-span-1 row-span-1', // normal  
    'col-span-1 row-span-2', // tall
    'col-span-1 row-span-1', // normal
    'col-span-2 row-span-1', // wide
    'col-span-1 row-span-1', // normal
  ];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageTransition = (newIndex: number, slideDirection: string) => {
    if (isAnimating) return;

    setDirection(slideDirection);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const showPreviousImage = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    handleImageTransition(newIndex, 'left');
  };

  const showNextImage = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    handleImageTransition(newIndex, 'right');
  };

  const getSlideAnimation = () => {
    if (!isAnimating) return 'translate-x-0 scale-100 opacity-100';
    return direction === 'right'
      ? '-translate-x-full scale-90 opacity-0'
      : 'translate-x-full scale-90 opacity-0';
  };

  return (
    <>
      <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-base to-cream-warm">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-base/95 to-cream-warm/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary">
              Life at <span className="text-secondary">PWIOI</span>
            </h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-2xl mx-auto">
              Experience the vibrant campus life, innovative learning environments, and memorable moments that define our community.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Modern Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  cardSizes[index % cardSizes.length]
                }`}
                onClick={() => handleImageClick(index)}
              >
                {/* Image with Next.js optimization */}
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center border border-accent-foreground/20 shadow-lg">
                        <span className="text-accent-foreground text-2xl font-bold">+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Number Badge */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-secondary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-primary/95 backdrop-blur-xl" />

          {/* Modal Content Wrapper */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              {/* Navigation and Controls Container */}
              <div className="relative w-full max-w-7xl mx-auto">
                {/* Navigation Buttons */}
                <button
                  onClick={showPreviousImage}
                  className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-cream-base/70 hover:text-cream-base bg-primary/50 rounded-full hover:bg-primary/70 transition-all transform hover:scale-110 duration-200 focus:outline-none z-[102] backdrop-blur-sm"
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  onClick={showNextImage}
                  className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-cream-base/70 hover:text-cream-base bg-primary/50 rounded-full hover:bg-primary/70 transition-all transform hover:scale-110 duration-200 focus:outline-none z-[102] backdrop-blur-sm"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="fixed top-4 right-4 md:top-8 md:right-8 p-3 text-cream-base/70 hover:text-cream-base bg-primary/50 rounded-full hover:bg-primary/70 transition-all duration-200 focus:outline-none z-[102] backdrop-blur-sm"
                >
                  <X size={24} />
                </button>

                {/* Image Counter */}
                <div className="fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary/50 rounded-full text-cream-base text-sm backdrop-blur-sm z-[102]">
                  {currentImageIndex + 1} / {images.length}
                </div>

                {/* Image Container */}
                <div className="relative z-[101]">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Gallery Image ${currentImageIndex + 1}`}
                    width={1200}
                    height={800}
                    className={`max-w-full max-h-[85vh] mx-auto object-contain rounded-xl shadow-2xl transform transition-all duration-500 ${getSlideAnimation()}`}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </>
  );
};

export default LifeAtPWIOI;