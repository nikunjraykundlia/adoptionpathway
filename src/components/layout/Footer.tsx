import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Facebook, Twitter, Instagram, Mail, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const footerLinks = [
  {
    title: 'About',
    links: [
      { name: 'Our Mission', href: '/about' },
      { name: 'Impact', href: '/impact' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Rescue Guide', href: '/guides/rescue' },
      { name: 'Animal Care', href: '/guides/care' },
      { name: 'Adoption Process', href: '/guides/adoption' },
      { name: 'Legal Resources', href: '/resources/legal' },
      { name: 'FAQs', href: '/faqs' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Forums', href: '/community' },
      { name: 'Events', href: '/events' },
      { name: 'Volunteer', href: '/volunteer' },
      { name: 'Success Stories', href: '/stories' },
      { name: 'Newsletter', href: '/newsletter' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-pawcare-beige border-t border-pawcare-sand">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-pawcare-blue mb-4">
              <PawPrint className="h-7 w-7" />
              <span className="text-xl font-semibold">PawCare</span>
            </Link>
            <p className="text-foreground/80 mb-6 max-w-md">
              Connecting animal lovers, rescuers, shelters, adopters, volunteers, and donors to create
              a better world for our furry friends.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white text-pawcare-slate hover:text-pawcare-blue transition-colors shadow-sm">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white text-pawcare-slate hover:text-pawcare-blue transition-colors shadow-sm">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white text-pawcare-slate hover:text-pawcare-blue transition-colors shadow-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white text-pawcare-slate hover:text-pawcare-blue transition-colors shadow-sm">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-pawcare-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-pawcare-sand mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} PawCare. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-foreground/60">
            <Link to="/privacy" className="hover:text-pawcare-blue">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-pawcare-blue">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-pawcare-blue">
              Cookie Policy
            </Link>
            <div className="flex items-center">
              <span>Made with</span>
              <Heart className="h-3 w-3 mx-1 text-pawcare-terracotta" />
              <span>for animals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
