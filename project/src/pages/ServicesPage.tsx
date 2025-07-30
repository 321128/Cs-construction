import React from 'react';
import { Shield, Mountain, Loader as Road, Grid as Bridge, Building2, Zap, CheckCircle, ArrowRight, Settings, Award, Users, Clock } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Defense Infrastructure',
      description: 'Specialized construction for defense establishments, strategic facilities, and security infrastructure.',
      features: [
        'EMP Shielding & Protection',
        'Strategic Underground Facilities',
        'High-Security Installations',
        'DRDO Specialized Buildings',
        'Military Base Infrastructure',
        'Communication Centers'
      ],
      projects: ['DRDO Facilities', 'Military Installations', 'Strategic Command Centers'],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Mountain,
      title: 'Tunneling Excellence',
      description: 'Advanced tunneling solutions for transport, strategic, and utility applications using cutting-edge technology.',
      features: [
        'TBM (Tunnel Boring Machine) Operations',
        'NATM (New Austrian Tunneling Method)',
        'Strategic Tunnel Construction',
        'Transport Tunnels',
        'Utility Tunnels',
        'Complex Geology Handling'
      ],
      projects: ['Sungal Tunnel (₹508 Cr)', 'Sivok-Rangpo Railway Tunnel', 'Strategic Border Tunnels'],
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Road,
      title: 'Roads & Highways',
      description: 'Comprehensive highway construction and maintenance services for national and state transportation networks.',
      features: [
        '4-Lane Highway Construction',
        'Expressway Development',
        'Border Road Construction',
        'Bridge Integration',
        'Toll Plaza Development',
        'Smart Highway Features'
      ],
      projects: ['NHAI Highway Projects', 'Border Roads (BRO)', 'State Highway Development'],
      image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Bridge,
      title: 'Bridges & Structures',
      description: 'Design and construction of bridges, flyovers, and specialized structural engineering solutions.',
      features: [
        'Pre-stressed Concrete Bridges',
        'Steel Composite Bridges',
        'Flyover Construction',
        'Pedestrian Bridges',
        'Railway Over-bridges',
        'Seismic Resistant Design'
      ],
      projects: ['Major River Crossings', 'Urban Flyovers', 'Railway Infrastructure'],
      image: 'https://images.pexels.com/photos/3825880/pexels-photo-3825880.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Building2,
      title: 'Specialized Buildings',
      description: 'Construction of specialized facilities including industrial, commercial, and institutional buildings.',
      features: [
        'Industrial Facilities',
        'Office Complexes',
        'Institutional Buildings',
        'Green Building Solutions',
        'HVAC Systems',
        'Smart Building Integration'
      ],
      projects: ['NTPC Eco Park', 'Corporate Offices', 'Government Buildings'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Digital Solutions',
      description: 'Integration of modern technology and digital solutions in construction and project management.',
      features: [
        'BIM (Building Information Modeling)',
        'IoT Monitoring Systems',
        'AI-Powered Analytics',
        'Drone Surveying',
        'Digital Project Management',
        'Real-time Quality Control'
      ],
      projects: ['Smart Infrastructure', 'Digital Twin Implementation', 'Automated Monitoring'],
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const capabilities = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '30+ years of successful project delivery with 100% client satisfaction',
      stats: '100+ Projects'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '240+ skilled engineers and construction professionals',
      stats: '240+ Experts'
    },
    {
      icon: Settings,
      title: 'Advanced Equipment',
      description: 'State-of-the-art machinery and modern construction equipment',
      stats: '₹50+ Cr Equipment'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Consistent track record of meeting project deadlines',
      stats: '95% On-Time'
    }
  ];

  const certifications = [
    'ISO 9001:2015 - Quality Management System',
    'ISO 14001:2015 - Environmental Management',
    'ISO 45001:2018 - Occupational Health & Safety',
    'MSME Registered Enterprise',
    'Defense Contractor Certification',
    'Green Building Council Membership'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Service Domains
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
              Comprehensive engineering solutions across defense, infrastructure, 
              and specialized construction with cutting-edge technology and proven expertise.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">6</div>
                <div className="text-blue-100 text-sm">Service Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">₹800+ Cr</div>
                <div className="text-blue-100 text-sm">Annual Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-blue-100 text-sm">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-blue-100 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From defense infrastructure to digital solutions, we deliver excellence 
              across diverse engineering domains with unmatched expertise.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Recent Projects:</h4>
                    <div className="space-y-1">
                      {service.projects.map((project, idx) => (
                        <div key={idx} className="text-gray-600 text-sm">• {project}</div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CS Construction
            </h2>
            <p className="text-xl text-gray-600">
              Our competitive advantages that set us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6">
                  <capability.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{capability.description}</p>
                <div className="text-2xl font-bold text-blue-600">{capability.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Equipment & Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our investment in modern equipment and cutting-edge technology enables us to 
                deliver projects with precision, efficiency, and the highest quality standards.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">Advanced Tunnel Boring Machines (TBM)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">Modern Earthmoving & Construction Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">BIM & Digital Project Management Tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">IoT Monitoring & Quality Control Systems</span>
                </div>
              </div>
              
              <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                View Equipment List
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction equipment"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹50+ Cr</div>
                  <div className="text-gray-600">Equipment Investment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Maintaining the highest standards of quality, safety, and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border-l-4 border-blue-600 p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="font-medium text-gray-900">{cert}</span>
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
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let our experts help you choose the right solution for your infrastructure needs. 
            Contact us for a detailed consultation and proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              Get Detailed Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;