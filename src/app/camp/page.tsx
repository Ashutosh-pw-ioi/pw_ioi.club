'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image as PDFImage } from '@react-pdf/renderer';
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log(baseUrl)
interface StudentData {
  studentName: string;
  courseName: string;
  contactNumber: string;
}

// PDF Certificate Component
const CertificatePDF = ({ studentData }: { studentData: StudentData }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#f59524',
      padding: 20,
    },
    container: {
      backgroundColor: '#f9fafb',
      borderRadius: 12,
      padding: 60,
      height: '100%',
      position: 'relative',
      border: '2px solid #fed7aa',
    },
    innerBorder: {
      position: 'absolute',
      top: 16,
      left: 16,
      right: 16,
      bottom: 16,
      border: '2px solid #fdba74',
      borderRadius: 8,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    logoContainer: {
      width: 300,
      height: 100,
    },
    logo: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    badgeContainer: {
      width: 150,
      height: 150,
    },
    badge: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    mainContent: {
      textAlign: 'center',
      flex: 1,
      justifyContent: 'center',
      paddingVertical: 0,
    },
    courseTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#713400',
      marginBottom: 40,
      letterSpacing: 2,
    },
    certificationText: {
      fontSize: 18,
      color: '#374151',
      marginBottom: 10,
      lineHeight: 1.6,
    },
    studentName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#1f2937',
      marginHorizontal: 10,
      borderBottom: '2px solid #374151',
      paddingBottom: 4,
      paddingHorizontal: 20,
    },
    completedText: {
      fontSize: 18,
      color: '#374151',
      marginTop: 10,
      marginBottom: 20,
    },
    courseName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1f2937',
      letterSpacing: 1,
    },
    footer: {
      position: 'absolute',
      bottom: 80,
      right: 80,
      textAlign: 'right',
    },
    signature: {
      borderTop: '2px solid #6b7280',
      paddingTop: 8,
      marginTop: 40,
    },
    founderName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: 2,
    },
    founderTitle: {
      fontSize: 10,
      color: '#6b7280',
      fontWeight: 'medium',
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: 0,
    }
  });

  return (
    <Document>
      <Page size={[794, 1123]} orientation="landscape" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.innerBorder} />
          
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <PDFImage
                style={styles.logo}
                src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/pwlogo-removebg-preview.png?updatedAt=1753187258819"
              />
            </View>
            <View style={styles.badgeContainer}>
              <PDFImage
                style={styles.badge}
                src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/badge.png?updatedAt=1753185233828"
              />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            <Text style={styles.courseTitle}>
              {studentData.courseName || "Backend Development Course"}
            </Text>

            <View style={styles.textRow}>
              <Text style={styles.certificationText}>
                This is to certify that Mr./Mrs./Ms.{' '}
              </Text>
              <Text style={styles.studentName}>
                {studentData.studentName || "{Student's Name}"}
              </Text>
            </View>
            
            <Text style={styles.completedText}>
              has successfully completed the
            </Text>
            
            <Text style={styles.courseName}>
              {studentData.courseName || "Backend Development Course"}
            </Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.signature}>
              <Text style={styles.founderName}>Mr. Alakh Pandey</Text>
              <Text style={styles.founderTitle}>(Founder)</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default function CampPage() {
  
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const name = nameRef.current?.value.trim() || '';
    const phone = phoneRef.current?.value.trim() || '';

    if (!name || !phone) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number must be exactly 10 digits.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/schemaBatchCamp/certificate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contactNumber: phone }),
      });

      const data = await response.json();

      if (response.ok && data.studentName) {
        setStudentData(data);
        setIsVerified(true);
      } else {
        setError(data.message || 'Mobile number not found in our records');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('API call error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Show greeting if verified
  if (isVerified && studentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
        
        {/* Download Button */}
        <div className="mb-6">
          <PDFDownloadLink
            document={<CertificatePDF studentData={studentData} />}
            fileName={`${studentData.studentName.replace(/\s+/g, '_')}_Certificate.pdf`}
            className="flex items-center gap-2 bg-primary  text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg no-underline"
          >
            {({ loading }) => (
              loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating PDF...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Certificate
                </>
              )
            )}
          </PDFDownloadLink>
        </div>

        {/* Certificate Preview - Mobile Responsive */}
        <div className="w-full max-w-7xl mx-auto bg-[#f59524] p-2 sm:p-5 rounded-xl shadow-2xl overflow-hidden">
          {/* Main Certificate Container */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-8 lg:p-16 relative overflow-hidden w-full h-auto min-h-[400px] sm:min-h-[600px] lg:min-h-[794px] flex flex-col shadow-inner">

            {/* Elegant border design */}
            <div className="absolute inset-2 sm:inset-4 border-2 border-orange-200 rounded-lg opacity-30"></div>
            <div className="absolute inset-3 sm:inset-6 border border-orange-100 rounded-lg opacity-50"></div>

            {/* Header - Mobile Responsive */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start relative z-20 mb-4 sm:mb-0">
              {/* Logo Section */}
              <div className="flex items-center mb-4 sm:mb-0 sm:mt-6">
                <Image
                  src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/pwlogo-removebg-preview.png?updatedAt=1753187258819"
                  alt="Physics Wallah Logo"
                  width={160}
                  height={53}
                  className="sm:w-[200px] sm:h-[67px] lg:w-[240px] lg:h-[80px]"
                />
              </div>
              <div className="sm:mr-10">
                <Image
                  src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/badge.png?updatedAt=1753185233828"
                  alt="Badge"
                  width={80}
                  height={40}
                  className="sm:w-[100px] sm:h-[50px] lg:w-[120px] lg:h-[130px]"
                />
              </div>
            </div>

            {/* Main Content - Mobile Responsive */}
            <div className="text-center flex-1 flex flex-col justify-center relative z-20 py-4 sm:py-8 px-2 sm:px-4">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#713400] mb-6 sm:mb-10 lg:mb-16 tracking-wide leading-tight">
                {studentData.courseName || "Backend Development Course"}
              </h3>

              <div className="mb-4 sm:mb-8 space-y-2 sm:space-y-4">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center flex-wrap">
                  <div className="text-sm sm:text-lg lg:text-2xl text-gray-700 font-light leading-relaxed">
                    This is to certify that Mr./Mrs./Ms.
                  </div>
                  <div className="relative inline-block">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 border-b-2 border-gray-800 px-3 sm:px-6 py-1 sm:py-2 break-words max-w-[280px] sm:max-w-none">
                      {studentData.studentName || "{Student's Name}"}
                    </span>
                  </div>
                </div>
                <div className="text-sm sm:text-lg lg:text-2xl text-gray-700 font-light">
                  has successfully completed the
                </div>
                <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 tracking-wide mt-2 sm:mt-4 leading-tight">
                  {studentData.courseName || "Backend Development Course"}
                </p>
              </div>
            </div>

            {/* Footer - Mobile Responsive */}
            <div className="flex justify-center sm:justify-end items-end relative z-20 mt-4 sm:mt-8 mb-2 sm:mb-4">
              <div className="text-center sm:text-right sm:mr-8">
                <div className="relative sm:absolute sm:-top-20 sm:right-10 border-t-2 border-gray-300 pt-2 px-4 sm:px-0">
                  <p className="text-base sm:text-lg font-bold text-gray-800">Mr. Alakh Pandey</p>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">(Founder)</p>
                </div>
              </div>
            </div>

            {/* Decorative corner elements - Hidden on mobile */}
            <div className="hidden sm:block absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 transform rotate-45 -translate-x-8 -translate-y-8 opacity-20"></div>
            <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-300 to-orange-400 transform -rotate-45 translate-x-8 -translate-y-8 opacity-20"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-300 to-orange-400 transform -rotate-45 -translate-x-8 translate-y-8 opacity-20"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-300 to-orange-400 transform rotate-45 translate-x-8 translate-y-8 opacity-20"></div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm max-w-md w-full mx-auto">
            {error}
          </div>
        )}
      </div>
    );
  }

  // Show form if not verified yet
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Camp Certificate</h1>
          <p className="text-gray-600">Login to download your Certificate</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              ref={phoneRef}
              type="tel"
              id="phone"
              name="phone"
              pattern="\d{10}"
              inputMode="numeric"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
  type="submit"
  disabled={isLoading}
  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
  <span className="flex items-center justify-center">
    {isLoading ? (
      <>
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Verifying...
      </>
    ) : (
      'Get Certificate'
    )}
  </span>
</button>

        </form>
      </div>
    </div>
  );
}