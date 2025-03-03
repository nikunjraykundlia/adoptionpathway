
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { HeartPulse, Home, MapPin, Stethoscope, Dog, BookOpen, Users } from 'lucide-react';

interface QuickAccessItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  color: string;
  delay: number;
}

const QuickAccessItem = ({ icon, title, description, to, color, delay }: QuickAccessItemProps) => (
  <Link
    to={to}
    className={cn(
      'relative group rounded-2xl p-6 bg-white shadow-soft border border-transparent',
      'transition-all duration-300 hover:shadow-medium hover:border-pawcare-sage/30',
      'flex flex-col items-center text-center animate-slide-up'
    )}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={cn('p-4 rounded-xl mb-4', color)}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-foreground/70">{description}</p>
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-pawcare-teal/30" />
  </Link>
);

interface QuickAccessProps {
  className?: string;
}

const QuickAccess = ({ className }: QuickAccessProps) => {
  const items = [
    {
      icon: <HeartPulse className="h-6 w-6 text-white" />,
      title: 'Rescue Tracker',
      description: 'Track animal rescues and their care status in real-time',
      to: '/rescue-tracker',
      color: 'bg-pawcare-terracotta',
      delay: 0,
    },
    {
      icon: <Dog className="h-6 w-6 text-white" />,
      title: 'Adoption',
      description: 'Find animals looking for their forever homes',
      to: '/adoption',
      color: 'bg-pawcare-blue',
      delay: 100,
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: 'Nearby Helpers',
      description: 'Locate animal services and volunteer help in your area',
      to: '/nearby-helpers',
      color: 'bg-pawcare-moss',
      delay: 200,
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      title: 'Treatment Tracker',
      description: 'Follow medical treatments and recovery progress',
      to: '/treatment-tracker',
      color: 'bg-pawcare-teal',
      delay: 300,
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: 'Laws & Helplines',
      description: 'Find legal resources and emergency contact information',
      to: '/laws-helplines',
      color: 'bg-pawcare-slate',
      delay: 400,
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Community',
      description: 'Connect with other animal lovers and share experiences',
      to: '/community',
      color: 'bg-pawcare-amber',
      delay: 500,
    },
  ];

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Quick Access</h2>
          <p className="text-foreground/70">
            Everything you need to help animals in one place - easily access our key features
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <QuickAccessItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
