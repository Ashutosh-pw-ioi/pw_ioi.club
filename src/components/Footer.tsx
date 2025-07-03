// components/Footer.tsx

'use client';

import React from 'react';
import { Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About PWIOI */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">About PWIOI</h3>
            <p className="font-open-sans text-white/80 leading-relaxed">
              Empowering innovation and leadership through excellence in education, research, and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/academics" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/holidays" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">Holidays</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://drive.google.com/file/d/1GJRLD1LiBNI0-kN9IHBKNRToOCdYjtNw/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1lv3-vPzostvvHCLLhooXRIl4pd5lEXfw/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Attendance Policy
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1yZnQDkKua2D1oWQBtHU_xRq8auXrKtGu/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Scholarship Policy
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1wxkUKD_MFo22ZPpxEDy8CgKdTuHN16wP/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Examination Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Policies */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">Other Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://drive.google.com/file/d/1TN_2XOzlgvgFMcewR_LnYdMRfuY0KGOv/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Library Policy
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/14XRHr6I1h8oHipR9tbdXJdahoN21Almb/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Klib Rules
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1rwl0LJtZlq9W_LsKuJ6tmKDbA8YyiHle/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Sexual Harassment Policy
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1K8Z4nVVk6_Py8ja_uC3gmYEtNP9owuYM/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Anti-Ragging Policy
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1dSdkRn0HPCpyjITGtBvvrYjrNe1icvEj/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Social Media Policy
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1mf76AtfWKcxtYJJIjedBTXR5XHreT49L/view?usp=sharing" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Career Services Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">Contact</h3>
            <div className="space-y-3">
              <p className="font-open-sans text-white/80">
                PWIOI Campus, Bengaluru
              </p>
              <p className="font-open-sans text-white/80">
                12th Floor, Brigade Signature Tower,
                Old Madras Rd, Sannatammanahalli,
                Bengaluru, Karnataka 560049
              </p>
              <div className="flex items-center space-x-2 ">
                <span className='inline-block h-5 w-8'><Mail className="text-white/80 " /></span>
                <span className="font-open-sans text-white/80">studentsuccess@pwioi.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-10 text-center">
          {/* Social media handles */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com/PWIOI" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-white/80 hover:text-accent transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/pw_ioi" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-white/80 hover:text-accent transition-colors duration-300" />
            </a>
            <a href="https://youtube.com/@pw-ioi" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 text-white/80 hover:text-accent transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/school/pw-ioi/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-white/80 hover:text-accent transition-colors duration-300" />
            </a>
          </div>

          <p className="font-open-sans text-white/60">
            © 2025 PW Institute of Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;