
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Check, Heart, ArrowRight, Circle, Activity } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedCard from '@/components/ui/AnimatedCard';

// Mock data for adoption animals
const animals = [
  {
    id: 'A1001',
    name: 'Luna',
    species: 'Cat',
    breed: 'Tabby',
    age: '2 years',
    gender: 'Female',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    location: 'Sunshine Shelter',
    description: 'Luna is a playful and affectionate tabby who loves to cuddle. She gets along well with other cats and would make a wonderful companion.',
    goodWith: ['cats', 'adults', 'seniors'],
    vaccinated: true,
    neutered: true,
    urgent: false,
  },
  {
    id: 'A1002',
    name: 'Bruno',
    species: 'Dog',
    breed: 'German Shepherd Mix',
    age: '4 years',
    gender: 'Male',
    size: 'Large',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    location: 'Happy Paws Rescue',
    description: 'Bruno is a loyal and intelligent dog who loves to learn new tricks. He needs an active family with a fenced yard where he can play and exercise.',
    goodWith: ['dogs', 'adults'],
    vaccinated: true,
    neutered: true,
    urgent: false,
  },
  {
    id: 'A1003',
    name: 'Daisy',
    species: 'Dog',
    breed: 'Beagle Mix',
    age: '1 year',
    gender: 'Female',
    size: 'Small',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    location: 'Central City Shelter',
    description: 'Daisy is a sweet and energetic young dog who loves to play fetch and go for walks. She\'s good with children and would make a great family pet.',
    goodWith: ['dogs', 'children', 'adults'],
    vaccinated: true,
    neutered: true,
    urgent: true,
  },
  {
    id: 'A1004',
    name: 'Oscar',
    species: 'Cat',
    breed: 'Maine Coon Mix',
    age: '5 years',
    gender: 'Male',
    size: 'Large',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    location: 'Feline Friends',
    description: 'Oscar is a majestic Maine Coon mix with a gentle personality. He enjoys lounging in sunny spots and getting gentle pets. Would do best in a quiet home.',
    goodWith: ['adults', 'seniors'],
    vaccinated: true,
    neutered: true,
    urgent: false,
  },
  {
    id: 'A1005',
    name: 'Bella',
    species: 'Dog',
    breed: 'Pit Bull Mix',
    age: '3 years',
    gender: 'Female',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    location: 'Second Chance Rescue',
    description: 'Bella is a sweet and affectionate dog who loves people. She\'s been waiting for her forever home for over a year and would make a loyal companion.',
    goodWith: ['adults'],
    vaccinated: true,
    neutered: true,
    urgent: true,
  },
  {
    id: 'A1006',
    name: 'Charlie',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: '6 years',
    gender: 'Male',
    size: 'Large',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    location: 'Golden Hearts Rescue',
    description: 'Charlie is a gentle and loyal golden retriever who loves swimming and playing fetch. He\'s great with children and would make an excellent family dog.',
    goodWith: ['dogs', 'cats', 'children', 'adults', 'seniors'],
    vaccinated: true,
    neutered: true,
    urgent: false,
  },
];

const AnimalCard = ({ animal, index }: { animal: typeof animals[0]; index: number }) => {
  return (
    <AnimatedCard className="h-full flex flex-col" delay={index * 100}>
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={animal.image} 
          alt={animal.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {animal.urgent && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-pawcare-terracotta text-white shadow-sm flex items-center">
            <Activity className="h-3.5 w-3.5 mr-1.5" />
            Urgent
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-foreground shadow-sm">
            {animal.species}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{animal.name}</h3>
        <span className="text-xs text-foreground/60">ID: {animal.id}</span>
      </div>
      
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/70 mb-2">
        <div>{animal.breed}</div>
        <div>{animal.gender}</div>
        <div>{animal.age}</div>
        <div>{animal.size}</div>
      </div>
      
      <p className="text-sm mb-4 line-clamp-3 flex-grow">{animal.description}</p>
      
      <div className="space-y-3 mb-4">
        <div className="flex flex-wrap gap-1.5">
          {animal.goodWith.map((type) => (
            <span key={type} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-pawcare-sage/10 text-pawcare-moss">
              <Check className="h-3 w-3 mr-1" />
              Good with {type}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 text-xs">
          <span className="inline-flex items-center text-foreground/70">
            <Circle className={`h-3 w-3 mr-1 ${animal.vaccinated ? 'fill-pawcare-moss text-pawcare-moss' : 'text-foreground/30'}`} />
            Vaccinated
          </span>
          <span className="inline-flex items-center text-foreground/70">
            <Circle className={`h-3 w-3 mr-1 ${animal.neutered ? 'fill-pawcare-moss text-pawcare-moss' : 'text-foreground/30'}`} />
            Spayed/Neutered
          </span>
        </div>
      </div>
      
      <div className="pt-3 border-t border-border flex justify-between items-center">
        <div className="text-xs text-foreground/70">{animal.location}</div>
        
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="w-10 p-0">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm">
            Details <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
          </Button>
        </div>
      </div>
    </AnimatedCard>
  );
};

const filters = [
  { name: 'Species', options: ['Dogs', 'Cats', 'Other'] },
  { name: 'Age', options: ['Puppy/Kitten', 'Young', 'Adult', 'Senior'] },
  { name: 'Size', options: ['Small', 'Medium', 'Large'] },
  { name: 'Gender', options: ['Male', 'Female'] },
  { name: 'Good with', options: ['Dogs', 'Cats', 'Children', 'Seniors'] },
  { name: 'Care & Behavior', options: ['House Trained', 'Special Needs', 'Vaccinated', 'Spayed/Neutered'] },
];

const Adoption = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-pawcare-blue/5 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pawcare-blue/10 rounded-full blur-3xl -z-10" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-pawcare-amber/10 rounded-full blur-3xl -z-10" />
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Find Your Perfect Companion</h1>
              <p className="text-foreground/70 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
                Browse through our adoptable animals and find your new best friend. Every adoption helps us save more lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                  <input
                    type="text"
                    placeholder="Search by name, breed, or location..."
                    className="w-full bg-white pl-10 pr-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-pawcare-blue/20 focus:border-pawcare-blue/30 transition-all"
                  />
                </div>
                <Button className="shrink-0 bg-pawcare-blue hover:bg-pawcare-blue/90">
                  <Search className="h-4 w-4 mr-1.5" /> Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <AnimatedCard className="lg:sticky lg:top-24">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button className="text-xs text-pawcare-blue hover:text-pawcare-teal">Reset all</button>
                  </div>
                  
                  <div className="space-y-6">
                    {filters.map((filter) => (
                      <div key={filter.name} className="space-y-3">
                        <h3 className="text-sm font-medium">{filter.name}</h3>
                        <div className="space-y-2">
                          {filter.options.map((option) => (
                            <label key={option} className="flex items-center cursor-pointer">
                              <input type="checkbox" className="rounded text-pawcare-blue focus:ring-pawcare-blue/20 border-pawcare-slate/20" />
                              <span className="ml-2 text-sm">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button className="w-full bg-pawcare-blue hover:bg-pawcare-blue/90">
                      <Filter className="h-4 w-4 mr-1.5" /> Apply Filters
                    </Button>
                  </div>
                </AnimatedCard>
              </div>
              
              {/* Animals Grid */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Available for Adoption</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-foreground/60">{animals.length} animals</span>
                    <select className="bg-white text-sm rounded-md border border-border p-1.5 focus:outline-none focus:ring-2 focus:ring-pawcare-blue/20 focus:border-pawcare-blue/30">
                      <option>Most Recent</option>
                      <option>Oldest</option>
                      <option>Urgent First</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {animals.map((animal, index) => (
                    <AnimalCard key={animal.id} animal={animal} index={index} />
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <Button variant="outline" size="lg">
                    Load More Animals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Adoption Process Section */}
        <section className="py-16 bg-pawcare-sage/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Adoption Process</h2>
              <p className="text-foreground/70">
                Following these simple steps to welcome a new family member into your home
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Browse Animals',
                  description: 'Search through our available animals to find your perfect match.'
                },
                {
                  step: 2,
                  title: 'Submit Application',
                  description: 'Fill out our adoption application form with your information and preferences.'
                },
                {
                  step: 3,
                  title: 'Meet & Greet',
                  description: 'Schedule a time to meet your potential new family member in person.'
                },
                {
                  step: 4,
                  title: 'Welcome Home',
                  description: 'Complete the adoption process and welcome your new pet into your home!'
                }
              ].map((step, index) => (
                <AnimatedCard key={step.step} className="text-center" delay={index * 100}>
                  <div className="w-12 h-12 bg-pawcare-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </AnimatedCard>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg">
                Start Your Adoption Journey
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Adoption;
