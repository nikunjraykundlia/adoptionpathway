
import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      className={cn(
        'relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden',
        className
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pawcare-cream to-white" />
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-pawcare-sage/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-48 w-96 h-96 bg-pawcare-amber/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-pawcare-terracotta/10 text-pawcare-terracotta mb-5">
              <Heart className="h-3.5 w-3.5 mr-1.5" /> Animal Welfare Platform
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 animate-slide-up">
            <span className="text-foreground">Creating a better world for our </span>
            <span className="text-pawcare-blue relative">
              furry friends
              <span className="absolute bottom-1 left-0 w-full h-2 bg-pawcare-amber/30 -z-10 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            PawCare connects animal lovers, rescuers, shelters, adopters, and donors on a
            single platform to help more animals find homes and receive the care they need.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Button size="lg" className="bg-pawcare-blue hover:bg-pawcare-blue/90">
              Explore Adoptions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-pawcare-terracotta text-pawcare-terracotta hover:bg-pawcare-terracotta/10">
              <Heart className="mr-2 h-4 w-4" /> Make a Donation
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col items-center space-y-2 animate-fade-in opacity-90" style={{ animationDelay: '300ms' }}>
            <p className="text-sm text-foreground/60 font-medium">Trusted by animal welfare organizations</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {/* Placeholder for partner logos */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-8 w-32 bg-foreground/5 rounded animate-pulse-gentle" style={{ animationDelay: `${i * 200}ms` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full text-white"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C190,0,321.39,56.44,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
