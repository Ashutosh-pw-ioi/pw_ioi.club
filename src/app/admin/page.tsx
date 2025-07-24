
'use client'; // if you're using app directory (Next.js 13+)

import { useEffect } from 'react';

export default function CalendarlyPage() {
  useEffect(() => {
    window.location.href = 'https://production.dx14u5jslysdl.amplifyapp.com/auth/login/admin';
  }, []);

  return <p className='m-10 text-center'>Redirecting...</p>; 
}
