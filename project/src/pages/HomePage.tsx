import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Users, 
  Building, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  Play,
  Star
} from 'lucide-react';

const HomePage = () => {
  const stats = [
    { label: 'Annual Revenue', value: '₹800+ Cr', icon: TrendingUp },
    { label: 'Years of Excellence', value: '30+', icon: Award },
    { label: 'Engineers & Staff', value: '240+', icon: Users },
    { label: 'Projects Completed', value: '100+', icon: Building },
  ];

  const keyProjects = [
    {
      title: 'Sungal Tunnel Project',
      client: 'BRO, J&K',
      value: '₹508 Cr',
      description: 'Strategic tunnel construction in challenging terrain',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Sivok-Rangpo Railway Tunnel',
      client: 'IRCON International',
      value: '₹513 Cr',
      description: 'Critical railway infrastructure development',
      status: 'Ongoing',
      image: 'https://images.pexels.com/photos/3825880/pexels-photo-3825880.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'NTPC Eco Park Development',
      client: 'NTPC Limited',
      value: '₹79 Cr', 
      description: 'Sustainable infrastructure development',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const clients = [
    { name: 'DRDO', logo: 'DRDO' },
    { name: 'BRO', logo: 'BRO' },
    { name: 'NHAI', logo: 'NHAI' },
    { name: 'NTPC', logo: 'NTPC' },
    { name: 'L&T', logo: 'L&T' },
    { name: 'IRCON', logo: 'IRCON' },
  ];

  const capabilities = [
    {
      title: 'Defense Infrastructure',
      description: 'Specialized construction for DRDO and strategic defense projects',
      icon: Shield,
      features: ['EMP Shelters', 'Strategic Facilities', 'Security Infrastructure']
    },
    {
      title: 'Tunneling Excellence',
      description: 'Advanced tunneling solutions for transport and strategic applications',
      icon: Building,
      features: ['TBM Operations', 'NATM Techniques', 'Complex Geology']
    },
    {
      title: 'Digital Transformation',
      description: 'Modern project management and execution methodologies',
      icon: Zap,
      features: ['BIM Integration', 'IoT Monitoring', 'AI-Powered Analytics']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              30+ Years of Engineering Excellence
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Building India's
              <span className="block text-yellow-400">Strategic Infrastructure</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl">
              Leading EPC contractor specializing in defense projects, strategic tunnels, 
              and critical infrastructure for government and enterprise clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Marquee of Key Achievements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-sm text-blue-200 mb-2">Recent Milestones</div>
              <div className="overflow-hidden">
                <div className="animate-pulse space-y-2">
                  <div className="text-white font-medium">✓ Sungal Tunnel (₹508 Cr) - Successfully Completed</div>
                  <div className="text-white/80">✓ DRDO Strategic Facility - Under Construction</div>
                  <div className="text-white/80">✓ NHAI Highway Project - Ongoing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-xl mb-4 group-hover:bg-blue-700 transition-colors duration-200">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flagship Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in complex engineering projects across defense, 
              infrastructure, and strategic construction domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {keyProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="text-blue-600 font-semibold mb-2">{project.client}</div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{project.value}</span>
                    <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence across diverse engineering domains with advanced technology 
              and proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6">
                  <capability.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600">
              Partnership with India's premier government and enterprise clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group hover-lift">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                    <span className="font-bold text-blue-600">{client.logo}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-600">{client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Partner with CS Construction for your next strategic infrastructure project. 
            Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;