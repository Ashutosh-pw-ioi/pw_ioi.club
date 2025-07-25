
'use client'; // if you're using app directory (Next.js 13+)

import { useEffect } from 'react';

export default function CalendarlyPage() {
  useEffect(() => {
    window.location.href = 'https://production.dpmxxm8elkdko.amplifyapp.com/interviewee';
  }, []);

  return <p className='m-10 text-center'>Redirecting...</p>; 
}
