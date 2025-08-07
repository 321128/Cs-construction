import React, { useState } from 'react';
import { Filter, MapPin, Calendar, DollarSign, Building2, ArrowRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Completed', 'Ongoing', 'Defense', 'Tunnels', 'Highways', 'Buildings'];

  const projects = [
    {
      id: 1,
      title: 'Sungal Tunnel Project',
      client: 'Border Roads Organisation (BRO)',
      location: 'Jammu & Kashmir',
      value: 508,
      duration: '2019-2023',
      status: 'Completed',
      category: 'Tunnels',
      type: 'Defense',
      description: 'Strategic tunnel construction in challenging Himalayan terrain for enhanced connectivity to border areas.',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyFeatures: ['3.5 km tunnel length', 'Extreme weather conditions', 'Strategic importance', 'Advanced TBM technology']
    },
    {
      id: 2,
      title: 'Sivok-Rangpo Railway Tunnel',
      client: 'IRCON International Limited',
      location: 'West Bengal - Sikkim',
      value: 513,
      duration: '2020-2025',
      status: 'Ongoing',
      category: 'Tunnels',
      type: 'Infrastructure',
      description: 'Critical railway infrastructure development connecting West Bengal to Sikkim for improved transportation.',
      image: 'https://images.pexels.com/photos/3825880/pexels-photo-3825880.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyFeatures: ['Twin tube design', 'NATM construction', 'Complex geology', 'Environmental compliance']
    },
    {
      id: 3,
      title: 'NTPC Eco Park Development',
      client: 'NTPC Limited',
      location: 'New Delhi',
      value: 79,
      duration: '2022-2024',
      status: 'Completed',
      category: 'Buildings',
      type: 'Infrastructure',
      description: 'Sustainable infrastructure development with focus on environmental conservation and green building practices.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyFeatures: ['LEED certified', 'Solar integration', 'Water conservation', 'Smart building systems']
    },
    {
      id: 4,
      title: 'DRDO Strategic Facility',
      client: 'Defence Research and Development Organisation',
      location: 'Rajasthan',
      value: 125,
      duration: '2023-2025',
      status: 'Ongoing',
      category: 'Buildings',
      type: 'Defense',
      description: 'Specialized defense facility with EMP protection and advanced security infrastructure.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyFeatures: ['EMP shielding', 'Security infrastructure', 'Specialized HVAC', 'Underground facilities']
    },
    {
      id: 5,
      title: 'NHAI Highway Project - Phase II',
      client: 'National Highways Authority of India',
      location: 'Madhya Pradesh',
      value: 284,
      duration: '2021-2024',
      status: 'Ongoing',
      category: 'Highways',
      type: 'Infrastructure',
      description: '4-lane highway construction with modern safety features and sustainable design principles.',
      image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyFeatures: ['4-lane divided carriageway', '6 major bridges', 'Toll plaza integration', 'Smart highway features']
    },
    {
      id: 6,
      title: 'Border Infrastructure Project',
      client: 'Border Roads Organisation (BRO)',
      location: 'Arunachal Pradesh',
      value: 156,
      duration: '2022-2024',
      status: 'Ongoing',
      category: 'Highways',
      type: 'Defense',
      description: 'Strategic border road construction enhancing connectivity to remote border areas.',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
      keyFeatures: ['High altitude construction', 'All-weather accessibility', 'Strategic importance', 'Challenging terrain']
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Defense') return project.type === 'Defense';
    return project.category === activeFilter || project.status === activeFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Ongoing':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const totalValue = filteredProjects.reduce((sum, project) => sum + project.value, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/csc4.png)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Projects Portfolio
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
              Showcasing our expertise across defense infrastructure, strategic tunnels, 
              highways, and specialized construction projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">₹{totalValue}+ Cr</div>
                <div className="text-blue-100">Portfolio Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-blue-100">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-900">Filter Projects:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeFilter === 'All' ? 'All Projects' : `${activeFilter} Projects`}
            </h2>
            <p className="text-gray-600">
              Showing {filteredProjects.length} projects with total value of ₹{totalValue} Cr
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Building2 className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.keyFeatures.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">₹{project.value} Cr</div>
                      <div className="text-xs text-gray-500">Project Value</div>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      {getStatusIcon(project.status)}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your filter criteria to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us bring our expertise and proven track record to your infrastructure project. 
            Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
              Request Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;