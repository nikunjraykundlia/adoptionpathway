
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Activity, Filter, Heart, Map, Search, Calendar, ArrowRight } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Button from '@/components/ui/Button';

// Mock data for rescue animals
const rescues = [
  {
    id: 'R1001',
    name: 'Max',
    species: 'Dog',
    breed: 'Golden Retriever Mix',
    age: '~3 years',
    status: 'Treatment',
    location: 'Bay Animal Hospital',
    description: 'Found injured on Highway 101. Suffering from a broken leg and dehydration. Currently receiving treatment.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    updates: [
      { date: '2023-05-15', text: 'Rescued from highway and brought to shelter' },
      { date: '2023-05-15', text: 'Initial medical assessment completed' },
      { date: '2023-05-16', text: 'Surgery scheduled for broken leg' },
    ],
    urgent: false,
  },
  {
    id: 'R1002',
    name: 'Luna',
    species: 'Cat',
    breed: 'Tabby',
    age: '~1 year',
    status: 'Critical Care',
    location: 'Central Emergency Vet',
    description: 'Found in abandoned building with severe malnutrition and respiratory infection. Receiving intensive care.',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    updates: [
      { date: '2023-05-14', text: 'Rescued from abandoned building' },
      { date: '2023-05-14', text: 'Admitted to emergency care for severe dehydration' },
      { date: '2023-05-15', text: 'Started on IV fluids and antibiotics' },
    ],
    urgent: true,
  },
  {
    id: 'R1003',
    name: 'Rocky',
    species: 'Dog',
    breed: 'Pit Bull Mix',
    age: '~4 years',
    status: 'Stable',
    location: 'Sunshine Shelter',
    description: 'Rescued from fighting ring. Multiple wounds and scars. Responding well to treatment and showing friendly demeanor.',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    updates: [
      { date: '2023-05-10', text: 'Rescued from alleged fighting situation' },
      { date: '2023-05-10', text: 'Wounds cleaned and treated' },
      { date: '2023-05-12', text: 'Behavioral assessment shows no aggression' },
      { date: '2023-05-13', text: 'Started on antibiotics for infection prevention' },
    ],
    urgent: false,
  },
  {
    id: 'R1004',
    name: 'Kittens (5)',
    species: 'Cat',
    breed: 'Mixed',
    age: '~3 weeks',
    status: 'Foster Needed',
    location: 'Midtown Shelter',
    description: 'Five kittens found abandoned in a box. Mother cat recovering from surgery. Emergency foster needed.',
    image: 'https://images.unsplash.com/photo-1570824104453-508955ab713e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    updates: [
      { date: '2023-05-13', text: 'Kittens and mother brought to shelter' },
      { date: '2023-05-13', text: 'Mother cat requires emergency surgery' },
      { date: '2023-05-13', text: 'Bottle feeding started for kittens' },
      { date: '2023-05-14', text: 'Foster home needed urgently' },
    ],
    urgent: true,
  },
];

const RescueCard = ({ rescue, index }: { rescue: typeof rescues[0]; index: number }) => {
  const getStatusBadgeClass = () => {
    switch (rescue.status) {
      case 'Critical Care':
        return 'bg-pawcare-terracotta/10 text-pawcare-terracotta';
      case 'Treatment':
        return 'bg-pawcare-amber/10 text-pawcare-amber';
      case 'Stable':
        return 'bg-pawcare-moss/10 text-pawcare-moss';
      case 'Foster Needed':
        return 'bg-pawcare-blue/10 text-pawcare-blue';
      default:
        return 'bg-pawcare-teal/10 text-pawcare-teal';
    }
  };

  return (
    <AnimatedCard className="h-full flex flex-col" delay={index * 100}>
      <div className="flex flex-col md:flex-row md:items-start gap-4 h-full">
        <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
          <img 
            src={rescue.image} 
            alt={rescue.name}
            className="w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass()}`}>
              {rescue.status}
            </span>
            {rescue.urgent && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-pawcare-terracotta text-white flex items-center">
                <Activity className="h-3.5 w-3.5 mr-1.5" />
                Urgent
              </span>
            )}
            <span className="text-xs text-foreground/60 ml-auto">ID: {rescue.id}</span>
          </div>
          
          <h3 className="text-xl font-semibold mb-1">
            {rescue.name} <span className="text-foreground/60 text-sm">({rescue.species})</span>
          </h3>
          
          <div className="text-sm text-foreground/70 mb-2">
            {rescue.breed} • {rescue.age} • {rescue.location}
          </div>
          
          <p className="text-sm mb-4 flex-grow">{rescue.description}</p>
          
          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-medium">Latest Updates:</h4>
            <div className="space-y-1.5 max-h-24 overflow-y-auto text-sm">
              {rescue.updates.slice(0, 2).map((update, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Calendar className="h-3.5 w-3.5 text-pawcare-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-foreground/60 mr-1.5">{update.date}:</span>
                    {update.text}
                  </div>
                </div>
              ))}
              {rescue.updates.length > 2 && (
                <div className="text-xs text-pawcare-blue">+ {rescue.updates.length - 2} more updates</div>
              )}
            </div>
          </div>
          
          <div className="flex space-x-2 mt-auto pt-3 border-t border-border">
            <Button size="sm" className="bg-pawcare-terracotta hover:bg-pawcare-terracotta/90">
              <Heart className="h-4 w-4 mr-1.5" /> Donate
            </Button>
            <Button size="sm" variant="outline">
              View Details <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

const RescueTracker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-pawcare-cream relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pawcare-sage/20 rounded-full blur-3xl -z-10" />
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Rescue Tracker</h1>
              <p className="text-foreground/70 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
                Follow real-time updates on animal rescues, their medical progress, and how you can help with their care and recovery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                  <input
                    type="text"
                    placeholder="Search rescues by ID, name, or location..."
                    className="w-full bg-white pl-10 pr-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-pawcare-blue/20 focus:border-pawcare-blue/30 transition-all"
                  />
                </div>
                <Button variant="outline" className="shrink-0">
                  <Filter className="h-4 w-4 mr-1.5" /> Filters
                </Button>
                <Button variant="outline" className="shrink-0">
                  <Map className="h-4 w-4 mr-1.5" /> Map View
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white shadow-sm cursor-pointer hover:bg-pawcare-cream transition-colors">
                  All Rescues
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-pawcare-terracotta/10 text-pawcare-terracotta cursor-pointer hover:bg-pawcare-terracotta/20 transition-colors">
                  Critical Care
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-pawcare-amber/10 text-pawcare-amber cursor-pointer hover:bg-pawcare-amber/20 transition-colors">
                  Treatment
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-pawcare-moss/10 text-pawcare-moss cursor-pointer hover:bg-pawcare-moss/20 transition-colors">
                  Stable
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-pawcare-blue/10 text-pawcare-blue cursor-pointer hover:bg-pawcare-blue/20 transition-colors">
                  Foster Needed
                </span>
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white shadow-sm text-pawcare-terracotta border border-pawcare-terracotta/20 cursor-pointer hover:bg-pawcare-terracotta/10 transition-colors flex items-center">
                  <Activity className="h-3.5 w-3.5 mr-1.5" />
                  Urgent Cases
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rescues List Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recent Rescues</h2>
              <span className="text-sm text-foreground/60">{rescues.length} rescues</span>
            </div>
            
            <div className="space-y-6">
              {rescues.map((rescue, index) => (
                <RescueCard key={rescue.id} rescue={rescue} index={index} />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg">
                Load More Rescues
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RescueTracker;
