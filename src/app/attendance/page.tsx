// app/google-form/page.tsx
'use client'
import { useEffect } from 'react'


export default function GoogleFormRedirectPage() {
  

  useEffect(() => {
    window.location.href = 'https://script.google.com/a/macros/pw.live/s/AKfycbzJk2GH9ekPqeKnYPEjMFQ9cwr85lG1h5dul1zR8SstNHyJp_yp6sOeuIi0fwtUR1f5/exec'
  }, [])

  return <p className='m-10 text-center'>Redirecting you to the form...</p>
}
