'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, CircleUser, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudentsDropdownOpen, setIsStudentsDropdownOpen] = useState(false);
  const [isMobileStudentsOpen, setIsMobileStudentsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: 'Events', href: '/events' },
    { name: 'Academics', href: '/academics' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Clubs', href: '/clubs' },
  ];

  const schools = [
    { 
      id: 'sot', 
      name: 'School of Technology', 
      href: '/students/sot',
      shortName: 'SOT' 
    },
    { 
      id: 'som', 
      name: 'School of Management', 
      href: '/students/som',
      shortName: 'SOM' 
    },
    { 
      id: 'soh', 
      name: 'School of Healthcare', 
      href: '/students/soh',
      shortName: 'SOH' 
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStudentsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when menu is opened
  useEffect(() => {
    if (isMenuOpen) {
      setIsMobileStudentsOpen(false);
    }
  }, [isMenuOpen]);

  const handleSchoolClick = () => {
    setIsStudentsDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileStudentsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-2 border-accent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link href="/">
    <Image 
      src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/pwioi.webp?updatedAt=1749631481920" 
      alt="PWIOI logo" 
      width={100} 
      height={30} 
      className="font-poppins font-bold text-2xl text-primary"
    />
  </Link>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-open-sans text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium relative group ${
                    pathname === item.href ? 'text-secondary font-semibold' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
              
              {/* Students Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="font-open-sans text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium relative group flex items-center"
                  type="button"
                  onMouseEnter={() => setIsStudentsDropdownOpen(true)}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsStudentsDropdownOpen(!isStudentsDropdownOpen);
                  }}
                >
                  Students
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isStudentsDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>

                {/* Desktop Dropdown Menu - Simplified */}
                {isStudentsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-background border border-gray-200 rounded-lg shadow-lg z-50"
                    onMouseLeave={() => setIsStudentsDropdownOpen(false)}
                  >
                    <div className="p-3">
                      
                      <div className="space-y-1">
                        {schools.map((school) => (
                          <Link
                            key={school.id}
                            href={school.href}
                            onClick={handleSchoolClick}
                            className="flex items-center justify-between px-3 py-3 rounded-md text-sm text-gray-700 hover:bg-accent/30 hover:text-accent-foreground transition-colors duration-200 group"
                          >
                            <span className="font-medium">{school.name}</span>
                            
                          </Link>
                        ))}
                      </div>
                      
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Student Login Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-medium transition-colors duration-200">
              <CircleUser className="w-4 h-4 mr-2" />
              Student Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-cream-base rounded-lg mt-2 max-h-[calc(100vh-80px)] overflow-y-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-open-sans text-primary hover:text-secondary px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Students Menu */}
              <div className="border-t border-gray-200 pt-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileStudentsOpen(!isMobileStudentsOpen);
                  }}
                  type="button"
                  className="w-full flex items-center justify-between font-open-sans text-primary px-3 py-3 text-base font-semibold hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Students
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileStudentsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mobile Students Dropdown Content */}
                {isMobileStudentsOpen && (
                  <div className="mt-2 space-y-2 px-3">
                    
                    {schools.map((school) => (
                      <Link
                        key={school.id}
                        href={school.href}
                        onClick={handleSchoolClick}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg hover:bg-accent/10 hover:border-accent transition-colors duration-200"
                      >
                        <span className="font-medium text-gray-700">{school.name}</span>
                        
                      </Link>
                    ))}
                    
                  </div>
                )}
              </div>

              {/* Mobile Login Button */}
              <div className="border-t border-gray-200 pt-3">
                <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-medium py-3">
                  <CircleUser className="w-4 h-4 mr-2" />
                  Student Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;