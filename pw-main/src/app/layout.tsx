// app/layout.tsx
import './globals.css';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: "PW Institute of Innovation",
  description: "Official website of Physics Wallah Institute of Innovation",
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}