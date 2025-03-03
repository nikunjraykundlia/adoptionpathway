
import React from 'react';
import { cn } from '@/lib/utils';
import { DollarSign, Heart, Activity, ArrowUpRight, CircleDashed } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedCard from '../ui/AnimatedCard';
import { Link } from 'react-router-dom';

// Mock data for donation campaigns
const campaigns = [
  {
    id: 1,
    title: 'Emergency Surgery Fund',
    description: 'Help cover the costs of emergency surgeries for injured rescue animals',
    raised: 8750,
    goal: 10000,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    urgent: true,
    daysLeft: 3,
  },
  {
    id: 2,
    title: 'Shelter Renovation',
    description: 'We\'re upgrading our shelter facilities to improve living conditions for our rescues',
    raised: 15000,
    goal: 25000,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    urgent: false,
    daysLeft: 14,
  },
  {
    id: 3,
    title: 'Rescue Transport Vehicle',
    description: 'Help us purchase a dedicated vehicle for animal rescues and medical transports',
    raised: 12500,
    goal: 35000,
    image: 'https://images.unsplash.com/photo-1583511655826-05700a52f0ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    urgent: false,
    daysLeft: 30,
  }
];

interface DonationCardProps {
  campaign: typeof campaigns[0];
  delay: number;
}

const DonationCard = ({ campaign, delay }: DonationCardProps) => {
  const percentRaised = (campaign.raised / campaign.goal) * 100;
  
  return (
    <AnimatedCard
      className="overflow-hidden h-full flex flex-col"
      delay={delay}
    >
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={campaign.image} 
          alt={campaign.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10" />
        {campaign.urgent && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-pawcare-terracotta text-white shadow-sm flex items-center">
            <Activity className="h-3.5 w-3.5 mr-1.5" />
            Urgent
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
      <p className="text-sm text-foreground/70 mb-4 flex-grow">{campaign.description}</p>
      
      <div className="space-y-3 mt-auto">
        <div className="flex justify-between text-sm">
          <span className="font-medium">${campaign.raised.toLocaleString()} raised</span>
          <span className="text-foreground/70">of ${campaign.goal.toLocaleString()}</span>
        </div>
        
        <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full", 
              percentRaised >= 90 ? "bg-pawcare-moss" : "bg-pawcare-blue"
            )}
            style={{ width: `${percentRaised}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-foreground/70">
          <span>{Math.round(percentRaised)}% complete</span>
          <span>{campaign.daysLeft} days left</span>
        </div>
        
        <div className="pt-4 flex space-x-2">
          <Button className="flex-1 bg-pawcare-terracotta hover:bg-pawcare-terracotta/90">
            <Heart className="h-4 w-4 mr-1.5" /> Donate
          </Button>
          <Link 
            to={`/donations/${campaign.id}`} 
            className="p-2 rounded-lg border border-border hover:bg-foreground/5 transition-colors"
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </AnimatedCard>
  );
};

interface DonationHighlightsProps {
  className?: string;
}

const DonationHighlights = ({ className }: DonationHighlightsProps) => {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-pawcare-terracotta/10 text-pawcare-terracotta rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Heart className="h-4 w-4 mr-2" fill="currentColor" /> Make a difference today
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Support Our Ongoing Campaigns</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
            Your donations directly impact the lives of animals in need. Choose a campaign below or donate to our general fund.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {campaigns.map((campaign, index) => (
            <DonationCard key={campaign.id} campaign={campaign} delay={index * 100} />
          ))}
        </div>
        
        <div className="flex flex-col items-center text-center max-w-xl mx-auto pt-8 border-t border-border">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pawcare-cream mb-6 animate-pulse-gentle">
            <DollarSign className="h-8 w-8 text-pawcare-blue" />
          </div>
          <h3 className="text-xl font-semibold mb-3 animate-fade-in">Can't decide? Donate to our general fund</h3>
          <p className="text-foreground/70 mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Your donation will be allocated to the areas of greatest need, helping us respond quickly to emergencies and provide ongoing care.
          </p>
          <Button size="lg" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Heart className="h-5 w-5 mr-2" /> Make a General Donation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationHighlights;
