
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full glass-effect p-8 rounded-sm text-center animate-scale-in">
        <h1 className="text-7xl font-serif font-semibold mb-6">404</h1>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-flex items-center text-sm font-medium tracking-wider uppercase py-3 px-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
