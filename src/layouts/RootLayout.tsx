import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useEffect, useRef, useState } from "react";

export default function RootLayout() {
  const nav = useNavigation();
  const location = useLocation();

  const [showSpinner, setShowSpinner] = useState(false);
  const minTimer = useRef<number | null>(null);
  const navigating = nav.state !== "idle";

  useEffect(() => {
    setShowSpinner(true);
    if (minTimer.current) window.clearTimeout(minTimer.current);
    minTimer.current = window.setTimeout(() => {
      if (!navigating) setShowSpinner(false);
    }, 350);
    return () => {
      if (minTimer.current) window.clearTimeout(minTimer.current);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!navigating) {
      const id = window.setTimeout(() => setShowSpinner(false), 50);
      return () => window.clearTimeout(id);
    } else {
      setShowSpinner(true);
    }
  }, [navigating]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f6f7] text-[#1f2937]">
      <Header />

      {showSpinner && (
        <div className="px-4 sm:px-6 md:px-8">
          <Loading label="Loading..." />
        </div>
      )}

      <main className="flex-1 container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
