import React from 'react';
import { Award, Users, Target, Eye, Heart, TrendingUp, Globe, Shield } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '1991', event: 'Company Founded', description: 'CS Construction established with a vision for excellence' },
    { year: '2000', event: 'First Major Project', description: 'Secured first defense infrastructure contract' },
    { year: '2010', event: 'Tunneling Expertise', description: 'Expanded into strategic tunnel construction' },
    { year: '2015', event: '₹500 Cr Revenue', description: 'Crossed major revenue milestone' },
    { year: '2020', event: 'Digital Transformation', description: 'Integrated AI and IoT in project management' },
    { year: '2024', event: '₹800+ Cr Revenue', description: 'Leading infrastructure contractor in India' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical business practices and transparency in all our operations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Pursuing the highest standards of quality and innovation in every project we undertake.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients, vendors, and communities for mutual success.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Creating infrastructure that serves present needs while preserving resources for future generations.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 - Quality Management',
    'ISO 14001:2015 - Environmental Management',
    'ISO 45001:2018 - Occupational Health & Safety',
    'MSME Certified',
    'GST Registered',
    'Defense Contractor License'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About CS Construction
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Three decades of engineering excellence, building India's strategic infrastructure 
              and defense capabilities with innovation, integrity, and unwavering commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Building India's Future, One Project at a Time
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 1991, CS Construction Company Pvt. Ltd. has been at the forefront of India's 
                infrastructure development, specializing in complex engineering projects that demand 
                precision, innovation, and unwavering commitment to quality.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expertise spans defense infrastructure, strategic tunneling, highways, bridges, 
                and specialized buildings. We serve prestigious clients including DRDO, BRO, NHAI, 
                NTPC, and other leading government and enterprise organizations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹800+ Cr</div>
                  <div className="text-gray-600">Annual Revenue</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">240+</div>
                  <div className="text-gray-600">Engineers & Staff</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-yellow-500" />
                  <div>
                    <div className="font-bold text-gray-900">30+ Years</div>
                    <div className="text-gray-600 text-sm">of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be India's most trusted and innovative infrastructure development partner, 
                setting new benchmarks in engineering excellence while contributing to the 
                nation's strategic capabilities and sustainable development.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver world-class infrastructure solutions through cutting-edge technology, 
                skilled workforce, and unwavering commitment to quality, safety, and environmental 
                sustainability, while creating value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped CS Construction into the industry leader it is today
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20">
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
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-900">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Chairman's Message
            </h2>
            <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8 italic">
              "At CS Construction, we don't just build infrastructure; we build the foundation 
              of India's future. Our commitment to excellence, innovation, and integrity has 
              enabled us to contribute to the nation's strategic capabilities while creating 
              sustainable value for all our stakeholders."
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold">Rohit Bhuchar</div>
              <div className="text-blue-200">Chairman & Managing Director</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;