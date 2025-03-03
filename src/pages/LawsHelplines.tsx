
import React from 'react';
import { PhoneCall, BookOpen, MapPin, AlertTriangle, Heart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Button from '@/components/ui/Button';

const emergencyHelplines = [
  { name: "Animal Rescue Hotline", phone: "1-800-ANIMAL-HELP", available: "24/7" },
  { name: "Wildlife Emergency", phone: "1-877-WILD-SOS", available: "24/7" },
  { name: "Veterinary Poison Control", phone: "1-888-VET-HELP", available: "24/7" },
  { name: "Pet Loss Support Hotline", phone: "1-800-PET-LOSS", available: "Mon-Fri, 9am-5pm" }
];

const regionalLaws = [
  {
    region: "California",
    laws: [
      "AB 485: Pet store operators are only allowed to sell dogs, cats, and rabbits from animal shelters or rescue groups.",
      "AB 797: Good Samaritan law allows breaking into vehicles to rescue animals from dangerous heat.",
      "AB 1825: Requires mandatory spay/neuter for all pit bulls over 4 months old.",
      "SB 1249: Bans the sale of cosmetics tested on animals."
    ]
  },
  {
    region: "New York",
    laws: [
      "NY AGM LAW § 353-d: Prohibits animal fighting and spectating at animal fights.",
      "NY AGM LAW § 353-f: Prohibits the tethering of dogs in extreme weather conditions.",
      "NY AGM LAW § 355: Requires proper shelter for dogs left outdoors.",
      "NY PBH LAW § 1310: Requires rabies vaccinations for all dogs, cats, and ferrets."
    ]
  },
  {
    region: "Texas",
    laws: [
      "TX HEALTH & SAFETY § 821.022: Allows for seizure of cruelly treated animals.",
      "TX PENAL § 42.092: Defines and prohibits animal cruelty.",
      "TX HEALTH & SAFETY § 821.077: Prohibits unlawful restraint of dogs.",
      "TX OCC § 801.004: Regulates veterinary practice and animal treatment."
    ]
  }
];

const LawsHelplines = () => {
  const [selectedRegion, setSelectedRegion] = React.useState("California");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24 flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-pawcare-blue mb-4">Laws & Helplines</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Know your rights and responsibilities as an animal caretaker. Find emergency contacts and understand animal welfare laws in your region.
            </p>
          </div>

          {/* Emergency Helplines Section */}
          <section className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <PhoneCall className="h-6 w-6 text-pawcare-terracotta" />
              <h2 className="text-2xl font-semibold text-pawcare-slate">Emergency Helplines</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyHelplines.map((helpline, index) => (
                <AnimatedCard 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 border border-pawcare-sand"
                  delay={index * 100}
                >
                  <PhoneCall className="h-10 w-10 text-pawcare-blue mb-4" />
                  <h3 className="text-lg font-medium mb-2">{helpline.name}</h3>
                  <a href={`tel:${helpline.phone.replace(/\D/g,'')}`} className="text-xl font-bold text-pawcare-terracotta mb-1 hover:underline">
                    {helpline.phone}
                  </a>
                  <p className="text-sm text-foreground/60">Available {helpline.available}</p>
                  <Button className="mt-4 w-full" size="sm">
                    <PhoneCall className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* Regional Laws Section */}
          <section>
            <div className="flex items-center justify-center gap-2 mb-8">
              <BookOpen className="h-6 w-6 text-pawcare-terracotta" />
              <h2 className="text-2xl font-semibold text-pawcare-slate">Regional Animal Welfare Laws</h2>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {regionalLaws.map((region) => (
                  <Button 
                    key={region.region}
                    variant={selectedRegion === region.region ? "default" : "outline"}
                    onClick={() => setSelectedRegion(region.region)}
                    className="min-w-[120px]"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {region.region}
                  </Button>
                ))}
              </div>

              <AnimatedCard className="border border-pawcare-sand">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-pawcare-blue mr-2" />
                  <h3 className="text-xl font-semibold">{selectedRegion} Animal Welfare Laws</h3>
                </div>
                <ul className="space-y-4">
                  {regionalLaws.find(r => r.region === selectedRegion)?.laws.map((law, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-pawcare-terracotta flex-shrink-0 mt-1">•</span>
                      <p className="text-foreground/80">{law}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-pawcare-cream rounded-lg flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-pawcare-terracotta flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground/70">
                    Disclaimer: These are simplified summaries of selected animal welfare laws. For complete and up-to-date legal information, please consult official government resources or an attorney specializing in animal law.
                  </p>
                </div>
              </AnimatedCard>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-medium mb-4">Need Legal Assistance with an Animal Case?</h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Our network of animal rights attorneys can provide guidance for cases involving animal cruelty, neglect, or other animal welfare concerns.
              </p>
              <Button>
                <Heart className="h-5 w-5 mr-2" />
                Connect with an Animal Rights Attorney
              </Button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LawsHelplines;
