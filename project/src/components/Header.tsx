import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91-11-4567-8900</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@csconstruction.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>30+ Years of Excellence</span>
            <span>•</span>
            <span>₹800+ Cr Revenue</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-brand-600 to-brand-700 text-white p-2 rounded-lg font-bold text-xl shadow-lg">
                CS
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">CS Construction</div>
                <div className="text-sm text-gray-600">Company Pvt. Ltd.</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-brand-600'
                      : 'text-gray-700 hover:text-brand-600'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-6 py-2 rounded-lg font-medium hover:from-brand-700 hover:to-brand-800 transition-all duration-300 btn-animate hover:shadow-lg transform hover:scale-105"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 transform ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  } ${
                    location.pathname === item.href
                      ? 'text-brand-600 bg-accent-50'
                      : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                  } rounded-lg hover:scale-105`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`block w-full text-center bg-gradient-to-r from-brand-600 to-brand-700 text-white px-6 py-3 rounded-lg font-medium hover:from-brand-700 hover:to-brand-800 transition-all duration-300 mt-6 btn-animate transform hover:scale-105 ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${navigation.length * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;