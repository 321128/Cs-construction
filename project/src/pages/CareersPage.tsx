import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  DollarSign,
  Search,
  Filter,
  ArrowRight,
  Building2,
  GraduationCap,
  Award,
  Heart,
  Shield,
  TrendingUp,
} from "lucide-react";

const CareersPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    "All",
    "Engineering",
    "Management",
    "Operations",
    "Safety",
    "Admin",
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Civil Engineer - Tunneling",
      department: "Engineering",
      location: "New Delhi / Site Locations",
      experience: "8-12 years",
      type: "Full Time",
      salary: "₹15-25 LPA",
      description:
        "Lead tunneling projects using TBM and NATM techniques. Experience in strategic tunnel construction preferred.",
      requirements: [
        "B.Tech/M.Tech in Civil Engineering",
        "Minimum 8 years in tunneling projects",
        "Experience with TBM operations",
        "Knowledge of NATM techniques",
        "Strong project management skills",
      ],
      benefits: [
        "Health Insurance",
        "Performance Bonus",
        "Site Allowances",
        "Career Growth",
      ],
    },
    {
      id: 2,
      title: "Project Manager - Defense Infrastructure",
      department: "Management",
      location: "Multiple Locations",
      experience: "10-15 years",
      type: "Full Time",
      salary: "₹20-35 LPA",
      description:
        "Manage complex defense infrastructure projects including EMP shelters and strategic facilities.",
      requirements: [
        "Engineering degree with MBA preferred",
        "Minimum 10 years project management experience",
        "Defense sector experience mandatory",
        "PMP certification preferred",
        "Security clearance eligible",
      ],
      benefits: [
        "Comprehensive Insurance",
        "Stock Options",
        "Flexible Work",
        "Leadership Training",
      ],
    },
    {
      id: 3,
      title: "Quality Control Engineer",
      department: "Engineering",
      location: "Site Locations (Pan India)",
      experience: "5-8 years",
      type: "Full Time",
      salary: "₹8-15 LPA",
      description:
        "Ensure quality standards across construction projects with focus on concrete and structural work.",
      requirements: [
        "B.Tech in Civil Engineering",
        "Minimum 5 years QC experience",
        "Knowledge of IS codes and standards",
        "Experience in concrete testing",
        "Willingness to work at site locations",
      ],
      benefits: [
        "Site Allowances",
        "Health Insurance",
        "Annual Bonus",
        "Training Programs",
      ],
    },
    {
      id: 4,
      title: "Safety Officer - Construction Sites",
      department: "Safety",
      location: "Site Locations",
      experience: "3-6 years",
      type: "Full Time",
      salary: "₹6-12 LPA",
      description:
        "Implement and monitor safety protocols across construction sites ensuring zero accident goals.",
      requirements: [
        "Diploma/Degree in Safety Engineering",
        "NEBOSH/IOSH certification",
        "Minimum 3 years site safety experience",
        "Knowledge of safety regulations",
        "First aid certification",
      ],
      benefits: [
        "Site Allowances",
        "Insurance Coverage",
        "Safety Training",
        "Career Development",
      ],
    },
    {
      id: 5,
      title: "BIM Specialist - Digital Construction",
      department: "Engineering",
      location: "New Delhi Office",
      experience: "4-7 years",
      type: "Full Time",
      salary: "₹10-18 LPA",
      description:
        "Lead BIM implementation across projects with focus on 4D/5D modeling and clash detection.",
      requirements: [
        "B.Tech/M.Tech in Civil Engineering",
        "Proficiency in Revit, Navisworks, AutoCAD",
        "Experience in BIM coordination",
        "Knowledge of 4D/5D modeling",
        "Strong visualization skills",
      ],
      benefits: [
        "Flexible Hours",
        "Technology Allowance",
        "Health Insurance",
        "Skill Development",
      ],
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "Management",
      location: "New Delhi / Client Locations",
      experience: "8-12 years",
      type: "Full Time",
      salary: "₹18-30 LPA",
      description:
        "Drive business growth through client acquisition and relationship management in government sector.",
      requirements: [
        "MBA/Engineering with business experience",
        "Minimum 8 years BD experience",
        "Government sector exposure",
        "Strong presentation skills",
        "Network in defense/infrastructure sector",
      ],
      benefits: [
        "Performance Incentives",
        "Car Allowance",
        "Health Insurance",
        "Stock Options",
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Comprehensive Healthcare",
      description:
        "Medical insurance for employee and family with top-up coverage",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear progression paths with regular skill development programs",
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Stable employment with industry-leading retention rates",
    },
    {
      icon: Award,
      title: "Performance Rewards",
      description:
        "Annual bonuses and recognition programs for outstanding performance",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Sponsored training, certifications, and higher education support",
    },
    {
      icon: Building2,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and generous leave policies",
    },
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesFilter =
      activeFilter === "All" || job.department === activeFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
              Join India's leading infrastructure company and contribute to
              building the nation's strategic capabilities while advancing your
              professional growth.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  240+
                </div>
                <div className="text-blue-100 text-sm">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  95%
                </div>
                <div className="text-blue-100 text-sm">Retention Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  15+
                </div>
                <div className="text-blue-100 text-sm">Avg. Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  30+
                </div>
                <div className="text-blue-100 text-sm">Years Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search & Filters */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-3">
              <Filter className="h-5 w-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeFilter === filter
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeFilter === "All"
                ? "All Open Positions"
                : `${activeFilter} Positions`}
            </h2>
            <p className="text-gray-600">
              {filteredJobs.length} positions available
            </p>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Building2 className="h-4 w-4 mr-2" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Requirements:
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Benefits:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No positions found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Join CS Construction?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team members can
              thrive professionally while maintaining a healthy work-life
              balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at CS Construction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Life at CS Construction
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We foster a culture of innovation, collaboration, and continuous
                learning. Our team works on challenging projects that make a
                real difference to India's infrastructure development.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Collaborative Environment
                    </h3>
                    <p className="text-gray-600">
                      Work with experienced professionals and learn from
                      industry experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Growth Opportunities
                    </h3>
                    <p className="text-gray-600">
                      Clear career progression paths with opportunities to lead
                      major projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Recognition & Rewards
                    </h3>
                    <p className="text-gray-600">
                      Performance-based incentives and recognition programs for
                      excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    95%
                  </div>
                  <div className="text-gray-600 text-sm">
                    Employee Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Take the next step in your career journey with CS Construction.
            Apply for open positions or submit your resume for future
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              Apply for Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Submit Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
