'use client';
export default function Custom404() {
  const goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  const goBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-2xl font-semibold text-primary mb-2">
          Page Not Found
        </h2>
        <p className="text-secondary mb-8 max-w-md">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goHome}
            className="px-6 py-3 bg-background text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Go Home
          </button>
          <button
            onClick={goBack}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-gray-100 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}