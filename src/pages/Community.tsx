
import React from 'react';
import { Users, Calendar, MessageSquare, MapPin, HeartHandshake, Award } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Button from '@/components/ui/Button';

const upcomingEvents = [
  {
    id: 1,
    title: "Adoption Drive at Central Park",
    date: "June 15, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "Central Park, New York",
    description: "Join us for a day of matching rescued animals with forever homes. Meet over 50 dogs and cats looking for loving families.",
    type: "Adoption"
  },
  {
    id: 2,
    title: "Pet First Aid Workshop",
    date: "June 22, 2023",
    time: "1:00 PM - 4:00 PM",
    location: "Community Center, Boston",
    description: "Learn essential first aid skills for pets. This hands-on workshop will teach you how to handle common pet emergencies.",
    type: "Workshop"
  },
  {
    id: 3,
    title: "Fundraising Gala: Paws for a Cause",
    date: "July 8, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "Grand Hotel, Chicago",
    description: "A glamorous evening to raise funds for our animal hospital. Tickets include dinner, entertainment, and auction.",
    type: "Fundraiser"
  },
  {
    id: 4,
    title: "Beach Cleanup for Wildlife",
    date: "July 15, 2023",
    time: "8:00 AM - 12:00 PM",
    location: "Sunset Beach, San Francisco",
    description: "Help clean up trash that endangers marine life and coastal animals. Equipment and refreshments provided.",
    type: "Volunteer"
  }
];

const discussionTopics = [
  {
    id: 1,
    title: "Introducing a new pet to your existing pets",
    posts: 28,
    lastActive: "2 hours ago",
    responses: 156
  },
  {
    id: 2,
    title: "Best low-cost spay/neuter resources",
    posts: 42,
    lastActive: "5 hours ago",
    responses: 213
  },
  {
    id: 3,
    title: "Help with anxious rescue dog",
    posts: 35,
    lastActive: "1 day ago",
    responses: 124
  },
  {
    id: 4,
    title: "Feeding stray cats in your neighborhood",
    posts: 19,
    lastActive: "3 days ago",
    responses: 87
  }
];

const volunteerOpportunities = [
  {
    title: "Foster Parent",
    description: "Provide temporary care for animals awaiting permanent homes.",
    commitment: "Varies: 2 weeks to 3 months",
    location: "Your home"
  },
  {
    title: "Animal Transport Volunteer",
    description: "Drive animals to vet appointments or between shelters.",
    commitment: "Flexible: 4-5 hours per week",
    location: "Various locations"
  },
  {
    title: "Shelter Assistant",
    description: "Help with daily care, cleaning, and socialization of animals.",
    commitment: "Regular: 4-8 hours per week",
    location: "PawCare Shelters"
  },
  {
    title: "Event Volunteer",
    description: "Assist with adoption events, fundraisers, and education programs.",
    commitment: "Occasional: 3-6 hours per event",
    location: "Various locations"
  }
];

const Community = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24 flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-pawcare-blue mb-4">PawCare Community</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Connect with fellow animal lovers, share experiences, find events, and discover volunteer opportunities.
            </p>
          </div>

          {/* Events Section */}
          <section className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Calendar className="h-6 w-6 text-pawcare-terracotta" />
              <h2 className="text-2xl font-semibold text-pawcare-slate">Upcoming Events</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <AnimatedCard 
                  key={event.id} 
                  className="border border-pawcare-sand"
                  delay={index * 100}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium">{event.title}</h3>
                    <span className="px-3 py-1 bg-pawcare-cream text-pawcare-blue text-sm font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-pawcare-terracotta mr-2" />
                      <span className="text-sm text-foreground/70">{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-pawcare-terracotta mr-2" />
                      <span className="text-sm text-foreground/70">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-4">{event.description}</p>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">More Info</Button>
                    <Button size="sm" className="flex-1">RSVP</Button>
                  </div>
                </AnimatedCard>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button variant="outline">
                View All Events
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* Forum Section */}
          <section className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <MessageSquare className="h-6 w-6 text-pawcare-terracotta" />
              <h2 className="text-2xl font-semibold text-pawcare-slate">Discussion Forum</h2>
            </div>
            
            <AnimatedCard className="border border-pawcare-sand mb-6">
              <div className="divide-y divide-pawcare-sand">
                {discussionTopics.map((topic) => (
                  <div key={topic.id} className="py-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-lg text-pawcare-blue hover:text-pawcare-terracotta cursor-pointer transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {topic.posts} posts • Last activity {topic.lastActive}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="block text-lg font-semibold text-pawcare-slate">{topic.responses}</span>
                      <span className="text-xs text-foreground/60">responses</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
            
            <div className="text-center">
              <Button>
                Join the Discussion
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* Volunteer Section */}
          <section>
            <div className="flex items-center justify-center gap-2 mb-8">
              <HeartHandshake className="h-6 w-6 text-pawcare-terracotta" />
              <h2 className="text-2xl font-semibold text-pawcare-slate">Volunteer Opportunities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <AnimatedCard 
                  key={index} 
                  className="border border-pawcare-sand"
                  delay={index * 100}
                >
                  <h3 className="text-xl font-medium text-pawcare-blue mb-3">{opportunity.title}</h3>
                  <p className="text-foreground/80 mb-4">{opportunity.description}</p>
                  
                  <div className="flex items-center mb-2">
                    <Users className="h-4 w-4 text-pawcare-terracotta mr-2" />
                    <span className="text-sm text-foreground/70">Commitment: {opportunity.commitment}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <MapPin className="h-4 w-4 text-pawcare-terracotta mr-2" />
                    <span className="text-sm text-foreground/70">Location: {opportunity.location}</span>
                  </div>
                  
                  <Button size="sm" className="w-full">Apply Now</Button>
                </AnimatedCard>
              ))}
            </div>
            
            <div className="bg-pawcare-cream rounded-xl p-6 mt-12 text-center">
              <Award className="h-12 w-12 text-pawcare-terracotta mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Become a PawCare Volunteer Today</h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Make a difference in the lives of animals in need. Whether you have a few hours a month or several days a week, 
                there's a volunteer role that's perfect for you.
              </p>
              <Button size="lg">
                Register as a Volunteer
                <HeartHandshake className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
