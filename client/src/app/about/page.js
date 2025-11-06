"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Search,
  Plus,
  Users,
  Target,
  Award,
  Globe,
  Code,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Coffee,
  Lightbulb
} from 'lucide-react';

export default function AboutUsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Shashank Meena',
      role: 'Founder & CEO',
      expertise: 'Strategic Leadership, Business Development',
      experience: '5+ years',
      image: '/api/placeholder/120/120',
      bio: 'Visionary leader and founder of Softiwo. Passionate about transforming innovative ideas into successful digital solutions that make a real impact.',
      skills: ['Leadership', 'Strategy', 'Business Development', 'Vision Planning'],
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'Piyush Singh',
      role: 'Managing Director',
      expertise: 'Operations Management, Strategic Planning',
      experience: '5+ years',
      image: '/api/placeholder/120/120',
      bio: 'Strategic operations leader ensuring seamless project execution and organizational excellence. Drives growth and operational efficiency across all departments.',
      skills: ['Operations', 'Management', 'Strategy', 'Process Optimization'],
      social: { linkedin: '#', github: '#', dribbble: '#' }
    },
    {
      name: 'Anurag Kaushik',
      role: 'Senior Backend Engineer',
      expertise: 'Node.js, Python, Cloud Architecture',
      experience: '5+ years',
      image: '/api/placeholder/120/120',
      bio: 'Expert backend architect specializing in scalable systems and cloud infrastructure. Passionate about solving complex technical challenges and performance optimization.',
      skills: ['Node.js', 'Python', 'AWS', 'MongoDB'],
      social: { linkedin: '#', github: '#', medium: '#' }
    },
    {
      name: 'Gazal Behl',
      role: 'Human Resource',
      expertise: 'Talent Management, Employee Relations',
      experience: '5+ years',
      image: '/api/placeholder/120/120',
      bio: 'Dedicated HR professional focused on building a thriving workplace culture. Ensures our team has the support and resources needed for professional growth.',
      skills: ['Recruitment', 'Employee Relations', 'Performance Management', 'Training'],
      social: { linkedin: '#', github: '#', twitter: '#' }
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex problems.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We build lasting partnerships through exceptional service.',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in code quality, security, and performance.',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'We love what we do and it shows in every project we deliver.',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'Fast, iterative development with continuous feedback and improvement.',
      color: 'yellow'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and multilingual capabilities.',
      color: 'cyan'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to revolutionize app development' },
    { year: '2020', title: 'First 10 Projects', description: 'Delivered our first 10 successful applications' },
    { year: '2021', title: 'Team Expansion', description: 'Grew to 10+ talented developers and designers' },
    { year: '2022', title: 'International Reach', description: 'Expanded services to clients across 15+ countries' },
    { year: '2023', title: '50+ Projects', description: 'Celebrated 50+ successful project deliveries' },
    { year: '2024', title: 'Innovation Awards', description: 'Recognition for excellence in mobile app development' }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: CheckCircle },
    { label: 'Happy Clients', value: '150+', icon: Users },
    { label: 'Years Experience', value: '5+', icon: Calendar },
    { label: 'Team Members', value: '15+', icon: Coffee },
    { label: 'Countries Served', value: '20+', icon: Globe },
    { label: 'Client Satisfaction', value: '98%', icon: Star }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-violet-500',
      red: 'from-red-500 to-pink-500',
      yellow: 'from-yellow-500 to-orange-500',
      cyan: 'from-cyan-500 to-blue-500'
    };
    return colorMap[color] || colorMap.blue;
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Softiwo",
      "description": "Professional application development company founded in 2019, specializing in web, mobile, and desktop applications with 200+ successful projects",
      "foundingDate": "2019",
      "numberOfEmployees": "15+",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "Silicon Valley",
        "addressRegion": "CA", 
        "postalCode": "94000",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <Head>
        <title>About Us - Professional Development Team | Softiwo</title>
        <meta name="description" content="Meet the Softiwo team - passionate developers with 5+ years experience, 200+ successful projects, and 98% client satisfaction. Learn our story and values." />
        <meta name="keywords" content="about Softiwo, development team, company history, our story, experienced developers, app development company, team members, company values, mission" />
        <meta property="og:title" content="About Softiwo - Professional Application Development Team" />
        <meta property="og:description" content="Discover our journey from startup to trusted development partner. Meet our talented team and learn about our commitment to excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softiwo.com/about" />
        <link rel="canonical" href="https://softiwo.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutSchema),
          }}
        />
      </Head>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Sidebar />
      {isSidebarOpen && (
        <Sidebar 
          isMobile={true} 
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 px-3 sm:px-6 py-4 dark:bg-gray-950/70 dark:border-gray-800/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
              <button
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 shrink-0 transition-all duration-200"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </button>
              
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300 truncate">
                  About Us
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium">
                  Passionate developers building the future of applications
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <Button 
                size="sm" 
                className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 rounded-xl"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Contact Us</span>
                <span className="md:hidden">Contact</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-3 sm:p-6 space-y-6 sm:space-y-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8 sm:py-12"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Building Digital Excellence
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              We are a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences. 
              Since 2019, we've been helping businesses transform their ideas into powerful applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
                Join Our Team
                <Users className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Our Work
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="py-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                These principles guide everything we do and help us deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(value.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <CardHeader className="relative text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(value.color)} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative text-center">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="py-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                From a small startup to a trusted development partner - here's how we've grown.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 shadow-lg">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{milestone.year}</span>
                            <Award className="h-5 w-5 text-yellow-500" />
                          </div>
                          <CardTitle className="text-xl font-bold">{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="py-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Talented individuals who make the magic happen. Each bringing unique skills and passion to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 overflow-hidden">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Expertise:</span>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{member.expertise}</p>
                        </div>
                        
                        <div>
                          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Experience:</span>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{member.experience}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-3">
                          {member.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl"
          >
            <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality. We're here to help you create exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
                Start Your Project
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                <Phone className="h-4 w-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
    </>
  );
}