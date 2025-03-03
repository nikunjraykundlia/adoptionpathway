
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import QuickAccess from '@/components/home/QuickAccess';
import LatestUpdates from '@/components/home/LatestUpdates';
import DonationHighlights from '@/components/home/DonationHighlights';
import { Heart, ArrowRight, Users, Medal, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedCard from '@/components/ui/AnimatedCard';

const stats = [
  { label: 'Animals Rescued', value: '15,000+', icon: <Heart className="h-6 w-6 text-pawcare-terracotta" /> },
  { label: 'Adoptions', value: '8,500+', icon: <Users className="h-6 w-6 text-pawcare-blue" /> },
  { label: 'Volunteers', value: '2,300+', icon: <Medal className="h-6 w-6 text-pawcare-amber" /> },
  { label: 'Success Stories', value: '12,700+', icon: <Sparkles className="h-6 w-6 text-pawcare-teal" /> },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <Hero />
        
        {/* Quick Access Section */}
        <QuickAccess />
        
        {/* Stats Section */}
        <section className="py-16 bg-pawcare-sage/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <AnimatedCard
                  key={stat.label}
                  className="text-center"
                  delay={index * 100}
                >
                  <div className="inline-flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Latest Updates Section */}
        <LatestUpdates />
        
        {/* Donation Highlights Section */}
        <DonationHighlights />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-pawcare-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(82,165,181,0.8),_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,108,129,0.8),_transparent_70%)]"></div>
          
          <div className="container relative mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to make a difference?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
              Join our community of animal lovers and help create a better world for our furry friends through rescue, adoption, and support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Button size="lg" className="bg-white text-pawcare-blue hover:bg-white/90">
                Explore Adoptions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Heart className="mr-2 h-4 w-4" /> Make a Donation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
