import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">
                CS
              </div>
              <div>
                <div className="font-bold text-xl">CS Construction</div>
                <div className="text-sm text-gray-400">Company Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading infrastructure contractor with 30+ years of excellence in defense projects, 
              tunneling, and strategic construction across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Team', href: '/team' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white flex items-center group transition-colors duration-200"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Domains</h3>
            <ul className="space-y-3">
              {[
                'Strategic Tunnels',
                'Roads & Highways',
                'Defense Infrastructure',
                'Bridges & Culverts',
                'Specialized Buildings',
                'EMP Shelters',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-white flex items-center group transition-colors duration-200">
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium">Head Office</div>
                  <div>New Delhi, India - 110001</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">+91-11-4567-8900</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">info@csconstruction.com</div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-3">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-blue-400 font-bold">₹800+ Cr</div>
                  <div className="text-gray-400">Annual Revenue</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold">240+</div>
                  <div className="text-gray-400">Engineers</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold">30+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold">100+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 CS Construction Company Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link to="/legal" className="text-gray-400 hover:text-white transition-colors duration-200">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;