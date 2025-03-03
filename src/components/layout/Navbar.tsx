
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Heart, Paw, BellRing, User } from 'lucide-react';
import Button from '@/components/ui/Button';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Rescue Tracker', path: '/rescue-tracker' },
  { name: 'Adoption', path: '/adoption' },
  { name: 'Nearby Helpers', path: '/nearby-helpers' },
  { name: 'Community', path: '/community' },
  { name: 'Laws & Helplines', path: '/laws-helplines' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-pawcare-blue font-semibold text-xl"
          >
            <Paw className="h-6 w-6" />
            <span className="animate-fade-in">PawCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'px-3 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  location.pathname === item.path
                    ? 'text-pawcare-blue'
                    : 'text-foreground/80 hover:text-pawcare-blue hover:bg-pawcare-cream'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 rounded-full text-foreground/70 hover:text-pawcare-blue hover:bg-pawcare-cream transition-colors">
              <BellRing className="h-5 w-5" />
            </button>
            <Button size="sm" variant="ghost">
              <Heart className="h-5 w-5 mr-1.5" /> Donate
            </Button>
            <Button size="sm">
              <User className="h-5 w-5 mr-1.5" /> Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground/70 hover:text-pawcare-blue hover:bg-pawcare-cream transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 pb-6 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'block px-4 py-3 rounded-lg font-medium transition-all duration-200 animate-slide-up',
                location.pathname === item.path
                  ? 'bg-pawcare-cream text-pawcare-blue'
                  : 'text-foreground/80 hover:bg-pawcare-cream/50 hover:text-pawcare-blue'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-border animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Button variant="outline" className="w-full justify-start">
              <Heart className="h-5 w-5 mr-2" /> Donate
            </Button>
            <Button className="w-full justify-start">
              <User className="h-5 w-5 mr-2" /> Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
