"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { technologies } from '@/lib/data';
import {
  Search,
  Plus,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Monitor,
  Palette,
  Zap,
  Star,
  TrendingUp,
  Menu,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function TechnologiesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const techCategories = [
    'All',
    'Frontend',
    'Backend', 
    'Mobile',
    'Database',
    'Cloud',
    'DevOps'
  ];

  const techStack = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', description: 'Modern UI library for web applications', experience: '5+ years', projects: 150, color: 'blue', popularity: 95 },
        { name: 'Next.js', description: 'Full-stack React framework', experience: '4+ years', projects: 120, color: 'purple', popularity: 92 },
        { name: 'Vue.js', description: 'Progressive JavaScript framework', experience: '3+ years', projects: 80, color: 'green', popularity: 85 },
        { name: 'Angular', description: 'Enterprise web application platform', experience: '4+ years', projects: 90, color: 'red', popularity: 80 },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework', experience: '3+ years', projects: 200, color: 'cyan', popularity: 90 },
        { name: 'TypeScript', description: 'Typed JavaScript for large applications', experience: '4+ years', projects: 160, color: 'indigo', popularity: 88 }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime for server-side development', experience: '5+ years', projects: 140, color: 'green', popularity: 90 },
        { name: 'Python', description: 'Versatile language for web and AI applications', experience: '4+ years', projects: 100, color: 'yellow', popularity: 85 },
        { name: 'Java', description: 'Enterprise-grade application development', experience: '5+ years', projects: 80, color: 'orange', popularity: 82 },
        { name: 'C#/.NET', description: 'Microsoft stack for robust applications', experience: '3+ years', projects: 60, color: 'purple', popularity: 78 },
        { name: 'PHP', description: 'Popular web development language', experience: '4+ years', projects: 70, color: 'violet', popularity: 75 },
        { name: 'Go', description: 'Fast and efficient backend services', experience: '2+ years', projects: 40, color: 'blue', popularity: 70 }
      ]
    },
    {
      category: 'Mobile',
      technologies: [
        { name: 'React Native', description: 'Cross-platform mobile development', experience: '4+ years', projects: 85, color: 'blue', popularity: 88 },
        { name: 'Flutter', description: 'Google\'s UI toolkit for mobile', experience: '3+ years', projects: 65, color: 'cyan', popularity: 85 },
        { name: 'Swift', description: 'Native iOS development', experience: '4+ years', projects: 50, color: 'orange', popularity: 80 },
        { name: 'Kotlin', description: 'Modern Android development', experience: '3+ years', projects: 45, color: 'purple', popularity: 78 },
        { name: 'Xamarin', description: 'Microsoft cross-platform solution', experience: '2+ years', projects: 30, color: 'indigo', popularity: 65 },
        { name: 'Ionic', description: 'Hybrid mobile app development', experience: '3+ years', projects: 40, color: 'blue', popularity: 70 }
      ]
    },
    {
      category: 'Database',
      technologies: [
        { name: 'MongoDB', description: 'NoSQL document database', experience: '4+ years', projects: 110, color: 'green', popularity: 88 },
        { name: 'PostgreSQL', description: 'Advanced relational database', experience: '5+ years', projects: 95, color: 'blue', popularity: 85 },
        { name: 'MySQL', description: 'Popular relational database', experience: '5+ years', projects: 120, color: 'orange', popularity: 82 },
        { name: 'Redis', description: 'In-memory data structure store', experience: '3+ years', projects: 80, color: 'red', popularity: 80 },
        { name: 'Firebase', description: 'Google\'s app development platform', experience: '3+ years', projects: 70, color: 'yellow', popularity: 78 },
        { name: 'SQLite', description: 'Lightweight embedded database', experience: '4+ years', projects: 60, color: 'gray', popularity: 75 }
      ]
    },
    {
      category: 'Cloud',
      technologies: [
        { name: 'AWS', description: 'Amazon Web Services cloud platform', experience: '4+ years', projects: 90, color: 'orange', popularity: 92 },
        { name: 'Google Cloud', description: 'Google\'s cloud computing services', experience: '3+ years', projects: 65, color: 'blue', popularity: 85 },
        { name: 'Microsoft Azure', description: 'Microsoft\'s cloud platform', experience: '3+ years', projects: 55, color: 'cyan', popularity: 82 },
        { name: 'Vercel', description: 'Frontend deployment and hosting', experience: '3+ years', projects: 100, color: 'black', popularity: 88 },
        { name: 'Netlify', description: 'Modern web development platform', experience: '3+ years', projects: 85, color: 'green', popularity: 80 },
        { name: 'DigitalOcean', description: 'Developer-friendly cloud platform', experience: '4+ years', projects: 70, color: 'blue', popularity: 75 }
      ]
    },
    {
      category: 'DevOps',
      technologies: [
        { name: 'Docker', description: 'Containerization platform', experience: '3+ years', projects: 85, color: 'blue', popularity: 90 },
        { name: 'Kubernetes', description: 'Container orchestration system', experience: '2+ years', projects: 40, color: 'indigo', popularity: 85 },
        { name: 'Git', description: 'Version control system', experience: '5+ years', projects: 200, color: 'orange', popularity: 95 },
        { name: 'Jenkins', description: 'Automation server for CI/CD', experience: '3+ years', projects: 50, color: 'red', popularity: 80 },
        { name: 'GitHub Actions', description: 'CI/CD platform by GitHub', experience: '3+ years', projects: 120, color: 'black', popularity: 88 },
        { name: 'Terraform', description: 'Infrastructure as Code tool', experience: '2+ years', projects: 35, color: 'purple', popularity: 75 }
      ]
    }
  ];

  const filteredTechnologies = selectedCategory === 'All' 
    ? techStack.flatMap(cat => cat.technologies.map(tech => ({...tech, category: cat.category})))
    : techStack.find(cat => cat.category === selectedCategory)?.technologies || [];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-violet-500',
      orange: 'from-orange-500 to-yellow-500',
      red: 'from-red-500 to-pink-500',
      yellow: 'from-yellow-500 to-orange-500',
      cyan: 'from-cyan-500 to-blue-500',
      indigo: 'from-indigo-500 to-purple-500',
      violet: 'from-violet-500 to-purple-500',
      black: 'from-gray-800 to-gray-900',
      gray: 'from-gray-500 to-gray-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const technologiesSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Technologies & Tools Used by Softiwo",
    "description": "Comprehensive overview of cutting-edge technologies, frameworks, and tools used for web, mobile, and desktop application development",
    "author": {
      "@type": "Organization",
      "name": "Softiwo"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Softiwo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://softiwo.com/Softiwo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2025-11-06"
  };

  return (
    <>
      <Head>
        <title>Technologies & Tools - Modern Tech Stack | Softiwo</title>
        <meta name="description" content="Explore our comprehensive technology stack including React, Node.js, Flutter, Python, AWS, and 50+ modern tools for web, mobile & desktop development." />
        <meta name="keywords" content="technology stack, React, Node.js, Flutter, Python, AWS, MongoDB, PostgreSQL, mobile development tools, web development frameworks, desktop application tools, modern programming languages" />
        <meta property="og:title" content="Modern Technology Stack & Tools | Softiwo" />
        <meta property="og:description" content="Discover the cutting-edge technologies and frameworks we use to build exceptional applications across all platforms." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://softiwo.com/technologies" />
        <link rel="canonical" href="https://softiwo.com/technologies" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(technologiesSchema),
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
                  Technologies & Tools
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium">
                  Cutting-edge technologies we use to build exceptional applications
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <div className="hidden lg:block relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 h-4 w-4 transition-colors" />
                <input
                  type="text"
                  placeholder="Search technologies..."
                  className="pl-10 pr-4 py-3 w-48 xl:w-64 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100 dark:focus:border-blue-400"
                />
              </div>
              
              <Button 
                size="sm" 
                className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 rounded-xl"
              >
                <Plus className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Get Quote</span>
                <span className="md:hidden">Quote</span>
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
              Modern Technology Stack
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We leverage the latest and most reliable technologies to build scalable, secure, and high-performance applications. Our expertise spans across multiple platforms and frameworks.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
          >
            {techCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 overflow-hidden cursor-pointer">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(tech.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative pb-3">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColorClasses(tech.color)} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-xs font-medium">{tech.popularity}%</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500 dark:text-gray-400">Experience</span>
                        <span className="font-medium">{tech.experience}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500 dark:text-gray-400">Projects</span>
                        <span className="font-medium">{tech.projects}+</span>
                      </div>
                      
                      {selectedCategory === 'All' && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500 dark:text-gray-400">Category</span>
                          <span className="font-medium text-blue-600 dark:text-blue-400">{tech.category}</span>
                        </div>
                      )}
                      
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(tech.color)}`}
                            style={{ width: `${tech.popularity}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">Popularity</span>
                          <span className="text-xs font-medium">{tech.popularity}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8"
          >
            {[
              { label: 'Technologies Mastered', value: '50+', icon: Code },
              { label: 'Years Experience', value: '5+', icon: TrendingUp },
              { label: 'Projects Delivered', value: '200+', icon: CheckCircle },
              { label: 'Client Satisfaction', value: '98%', icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Don't see the technology you need? We're always learning and adapting to new technologies to meet our clients' requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
                Discuss Your Needs
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                View Case Studies
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
    </>
  );
}