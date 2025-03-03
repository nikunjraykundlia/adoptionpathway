
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Calendar, ArrowUpRight } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';
import { Link } from 'react-router-dom';

// Mock data for updates
const updates = [
  {
    id: 1,
    type: 'rescue',
    title: 'Injured dog rescued from highway',
    description: 'A golden retriever mix found injured on Highway 101 is now receiving treatment at Bay Animal Hospital.',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    status: 'Treatment',
    link: '/rescue-tracker/r1001',
  },
  {
    id: 2,
    type: 'adoption',
    title: 'Meet Luna, looking for a home',
    description: 'This sweet 2-year-old tabby cat is playful, affectionate, and ready to find her forever family.',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    status: 'Available',
    link: '/adoption/a2045',
  },
  {
    id: 3,
    type: 'success',
    title: 'Rocky found his forever home',
    description: 'After 3 months in foster care, Rocky the pit bull mix has been adopted by the Johnson family!',
    time: '1 day ago',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    link: '/success-stories/s3012',
  },
  {
    id: 4,
    type: 'urgent',
    title: 'Emergency foster needed',
    description: 'Five kittens need temporary fostering while their mother recovers from surgery.',
    time: '3 hours ago',
    image: 'https://images.unsplash.com/photo-1570824104453-508955ab713e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    status: 'Urgent',
    link: '/urgent-needs/u4023',
  }
];

interface UpdateCardProps {
  update: typeof updates[0];
  delay: number;
}

const UpdateCard = ({ update, delay }: UpdateCardProps) => {
  // Set badge color based on update type
  const getBadgeStyles = () => {
    switch (update.type) {
      case 'rescue':
        return 'bg-pawcare-sage/10 text-pawcare-moss';
      case 'adoption':
        return 'bg-pawcare-blue/10 text-pawcare-blue';
      case 'success':
        return 'bg-pawcare-amber/10 text-pawcare-amber';
      case 'urgent':
        return 'bg-pawcare-terracotta/10 text-pawcare-terracotta';
      default:
        return 'bg-pawcare-teal/10 text-pawcare-teal';
    }
  };

  return (
    <AnimatedCard
      className="overflow-hidden group h-full flex flex-col"
      delay={delay}
    >
      <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={update.image} 
          alt={update.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {update.status && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-foreground shadow-sm">
            {update.status}
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex items-center">
          <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium", getBadgeStyles())}>
            {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
          </span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{update.title}</h3>
      <p className="text-sm text-foreground/70 mb-4 line-clamp-3 flex-grow">{update.description}</p>
      
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
        <span className="text-xs text-foreground/60 flex items-center">
          <Calendar className="h-3 w-3 mr-1.5" />
          {update.time}
        </span>
        <Link
          to={update.link}
          className="inline-flex items-center text-xs font-medium text-pawcare-blue hover:text-pawcare-teal transition-colors"
        >
          Read more
          <ArrowUpRight className="h-3 w-3 ml-1" />
        </Link>
      </div>
    </AnimatedCard>
  );
};

interface LatestUpdatesProps {
  className?: string;
}

const LatestUpdates = ({ className }: LatestUpdatesProps) => {
  return (
    <section className={cn('py-16 bg-pawcare-beige/50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 animate-fade-in">Latest Updates</h2>
            <p className="text-foreground/70 max-w-2xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              Stay informed with the latest rescues, adoptions, and success stories from our community
            </p>
          </div>
          <Link
            to="/updates"
            className="inline-flex items-center text-sm font-medium text-pawcare-blue hover:text-pawcare-teal animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            View all updates
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {updates.map((update, index) => (
            <UpdateCard key={update.id} update={update} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
