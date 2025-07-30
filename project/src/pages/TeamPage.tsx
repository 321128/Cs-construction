import React from 'react';
import { 
  Users, 
  Award, 
  GraduationCap, 
  Building, 
  MapPin, 
  Phone,
  Mail,
  Linkedin,
  Star,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const TeamPage = () => {
  const leadership = [
    {
      name: 'Rohit Bhuchar',
      position: 'Chairman & Managing Director',
      experience: '25+ Years',
      education: 'B.Tech Civil Engineering, IIT Delhi',
      specialization: 'Strategic Planning, Defense Projects',
      achievements: [
        'Led company to ₹800+ Cr revenue',
        'Pioneered defense infrastructure segment',
        'Industry recognition for innovation'
      ],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Rahul Bhuchar',
      position: 'Executive Director - Operations',
      experience: '22+ Years',
      education: 'M.Tech Structural Engineering, IIT Bombay',
      specialization: 'Project Management, Tunneling',
      achievements: [
        'Successfully delivered 50+ major projects',
        'Expert in complex tunneling operations',
        'Implemented digital transformation'
      ],
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Rishi Bhuchar',
      position: 'Director - Business Development',
      experience: '18+ Years',
      education: 'MBA Finance, XLRI + B.Tech Civil',
      specialization: 'Client Relations, Strategic Partnerships',
      achievements: [
        'Secured contracts worth ₹1000+ Cr',
        'Established key government partnerships',
        'Expanded business across 15+ states'
      ],
      image: 'https://images.pexels.com/photos/2182976/pexels-photo-2182976.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const departments = [
    {
      name: 'Engineering & Design',
      head: 'Dr. Priya Sharma',
      teamSize: 45,
      expertise: ['Structural Design', 'Geotechnical Analysis', 'BIM Modeling', 'CAD Design'],
      icon: Building,
      projects: '80+ Projects'
    },
    {
      name: 'Project Management',
      head: 'Rajesh Kumar',
      teamSize: 25,
      expertise: ['Schedule Management', 'Resource Planning', 'Quality Control', 'Risk Management'],
      icon: TrendingUp,
      projects: '60+ Projects'
    },
    {
      name: 'Defense & Strategic',
      head: 'Col. (Retd.) Vikram Singh',
      teamSize: 20,
      expertise: ['Defense Infrastructure', 'Security Systems', 'Strategic Planning', 'Compliance'],
      icon: Shield,
      projects: '25+ Projects'
    },
    {
      name: 'Technology & Innovation',
      head: 'Amit Patel',
      teamSize: 15,
      expertise: ['IoT Integration', 'AI Analytics', 'Digital Solutions', 'Automation'],
      icon: Zap,
      projects: '30+ Projects'
    }
  ];

  const stats = [
    { label: 'Total Team Members', value: '240+', icon: Users },
    { label: 'Engineers', value: '180+', icon: GraduationCap },
    { label: 'Average Experience', value: '12+ Years', icon: Award },
    { label: 'PhD & M.Tech', value: '35+', icon: Star },
  ];

  const teamStats = [
    { category: 'Civil Engineers', count: 85, percentage: 85 },
    { category: 'Structural Engineers', count: 35, percentage: 70 },
    { category: 'Geotechnical Engineers', count: 25, percentage: 60 },
    { category: 'Project Managers', count: 30, percentage: 75 },
    { category: 'Quality Engineers', count: 20, percentage: 50 },
    { category: 'Safety Officers', count: 15, percentage: 40 }
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
              Our Expert Team
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
              Meet the talented professionals driving innovation and excellence 
              in infrastructure development across India.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders with decades of experience in engineering excellence 
              and strategic business development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-blue-200">{leader.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <Award className="h-4 w-4 mr-2" />
                        <span className="font-medium">Experience</span>
                      </div>
                      <div className="text-gray-900 font-semibold">{leader.experience}</div>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span className="font-medium">Education</span>
                      </div>
                      <div className="text-gray-900 text-sm">{leader.education}</div>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <Star className="h-4 w-4 mr-2" />
                        <span className="font-medium">Specialization</span>
                      </div>
                      <div className="text-gray-900 text-sm">{leader.specialization}</div>
                    </div>
                    
                    <div>
                      <div className="text-gray-600 text-sm mb-2 font-medium">Key Achievements:</div>
                      <ul className="space-y-1">
                        {leader.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-100">
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Department Structure
            </h2>
            <p className="text-xl text-gray-600">
              Specialized teams working in harmony to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4">
                    <dept.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <div className="text-blue-600 font-semibold">{dept.head}</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Team Size</span>
                    <span className="font-bold text-gray-900">{dept.teamSize} Members</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-bold text-gray-900">{dept.projects}</span>
                  </div>
                  
                  <div>
                    <div className="text-gray-600 text-sm mb-2 font-medium">Core Expertise:</div>
                    <div className="space-y-1">
                      {dept.expertise.map((skill, idx) => (
                        <div key={idx} className="text-gray-700 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Composition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Team Composition & Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our diverse team of engineers, project managers, and specialists brings 
                together decades of combined experience in delivering complex infrastructure 
                projects across India.
              </p>
              
              <div className="space-y-6">
                {teamStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{stat.category}</span>
                      <span className="text-gray-600">{stat.count} Members</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Average Years Experience</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Employee Retention</div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Certified Professionals</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Project Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Work Culture
            </h2>
            <p className="text-xl text-gray-600">
              Building a collaborative environment that fosters innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Fostering teamwork and knowledge sharing across all departments to achieve 
                exceptional results on every project.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Investing in our team's growth through training programs, certifications, 
                and exposure to cutting-edge technologies.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recognition & Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Celebrating achievements and providing clear career advancement paths 
                for all team members to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Our Team of Experts
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Be part of India's leading infrastructure development company and contribute 
            to building the nation's strategic capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;