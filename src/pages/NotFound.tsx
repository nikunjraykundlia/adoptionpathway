
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PawPrint, Home, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pawcare-cream/50 p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="relative">
            <PawPrint className="h-24 w-24 text-pawcare-blue" />
            <span className="absolute flex h-32 w-32 -top-4 -left-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pawcare-blue/10 opacity-75"></span>
            </span>
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 text-pawcare-slate animate-slide-up">Oops!</h1>
        <h2 className="text-2xl font-medium mb-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
          Page not found
        </h2>
        <p className="text-foreground/70 mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
          We've lost this page like a curious kitten in a new home. Let's get you back on track.
        </p>
        
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <Button asChild size="lg" className="w-full">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <button onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
