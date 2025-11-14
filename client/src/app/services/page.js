"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services, technologies } from '@/lib/data';
import { blogData } from '@/lib/blogData';
import {
  Search,
  Globe,
  Smartphone,
  Apple,
  Monitor,
  Palette,
  Cloud,
  Code,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Menu,
  Star,
  Clock,
  DollarSign,
  Users,
  Target,
  Activity
} from 'lucide-react';
import { useRouter } from 'next/navigation';


const iconMap = {
  Globe,
  Smartphone,
  Apple,
  Monitor,
  Palette,
  Cloud,
  Code,
  Database
};

export default function ServicesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  // Map services to their corresponding blog slugs
  const serviceToBlogMap = {
    'Web Applications': 'web-application-development',
    'Android Development': 'mobile-app-development',
    'iOS Development': 'mobile-app-development', 
    'Desktop Applications': 'desktop-application-development',
    'UI/UX Design': 'ui-ux-design',
    'DevOps & Deployment': 'cloud-solutions',
    'API Integration': 'api-integration'
  };

  const handleLearnMore = (service) => {
    const blogSlug = serviceToBlogMap[service.title];
    if (blogSlug) {
      router.push(`/blog/${blogSlug}`);
    } else {
      // Fallback to general blog page if no specific blog exists
      router.push('/blog');
    }
  };
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Application Development Services",
    "description": "Professional web, mobile, and desktop application development services",
    "provider": {
      "@type": "Organization",
      "name": "Softiwo",
      "url": "https://softiwo.com"
    },
    "serviceType": [
      "Web Application Development",
      "Mobile App Development (iOS & Android)", 
      "Desktop Application Development",
      "Custom Software Development",
      "UI/UX Design Services",
      "API Development & Integration"
    ],
    "areaServed": "Worldwide",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Package",
        "description": "Perfect for small businesses and MVPs",
        "price": "5000",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "5000",
          "maxPrice": "15000",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer", 
        "name": "Professional Package",
        "description": "Advanced features for growing businesses",
        "price": "15000",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "15000", 
          "maxPrice": "35000",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "name": "Enterprise Package", 
        "description": "Complex solutions for large organizations",
        "price": "35000",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "35000",
          "priceCurrency": "USD"
        }
      }
    ]
  };



  const pricingPlans = [
    {
      name: "Starter",
      price: "$5,000",
      duration: "2-4 weeks",
      description: "Perfect for small businesses and MVPs",
      features: [
        "Responsive web application",
        "Basic functionality",
        "Mobile-friendly design",
        "Basic SEO optimization",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      duration: "6-8 weeks",
      description: "Advanced features for growing businesses",
      features: [
        "Full-stack web application",
        "Advanced functionality",
        "Custom UI/UX design",
        "API integration",
        "Database optimization",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$35,000+",
      duration: "10-16 weeks",
      description: "Complex solutions for large organizations",
      features: [
        "Multi-platform application",
        "Advanced integrations",
        "Custom architecture",
        "Performance optimization",
        "Security implementation",
        "6 months support",
        "Team training"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Professional App Development | Softiwo</title>
        <meta name="description" content="Comprehensive application development services including web apps, mobile apps (iOS/Android), desktop software, and custom solutions. Flexible pricing from $5K to $75K+." />
        <meta name="keywords" content="app development services, web application development, mobile app development, iOS app development, Android app development, desktop software, custom development, software consulting, Softiwo services" />
        <meta property="og:title" content="Professional Application Development Services | Softiwo" />
        <meta property="og:description" content="Transform your ideas into powerful applications. Web, mobile & desktop app development with flexible pricing and expert team." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://softiwo.com/services" />
        <link rel="canonical" href="https://softiwo.com/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
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
                  Our Services
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium">
                  Professional application development services tailored to your needs
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <div className="hidden lg:block relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 h-4 w-4 transition-colors" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="pl-10 pr-4 py-3 w-48 xl:w-64 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100 dark:focus:border-blue-400"
                />
              </div>
              
              <Button 
                onClick={() => router.push('/contact')} 
                size="sm" 
                className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 rounded-xl"
              >
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
              Complete Development Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From web applications to mobile apps and desktop software, we bring your ideas to life with cutting-edge technology and exceptional design.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const colorClasses = {
                blue: 'from-blue-500 to-cyan-500',
                green: 'from-green-500 to-emerald-500', 
                purple: 'from-purple-500 to-violet-500',
                orange: 'from-orange-500 to-yellow-500',
                pink: 'from-pink-500 to-rose-500',
                indigo: 'from-indigo-500 to-blue-600'
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleLearnMore(service)}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[service.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <CardHeader className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[service.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
                          <Button 
                            className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLearnMore(service);
                            }}
                          >
                            Read Detailed Guide
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="py-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Flexible Pricing Plans</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the perfect plan for your project needs. All plans include our quality guarantee and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`relative ${plan.popular ? 'scale-105 mt-8' : 'mt-8'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <Card className={`h-full ${plan.popular ? 'border-blue-500 shadow-xl' : ''} bg-white/80 backdrop-blur-sm dark:bg-gray-900/80`}>
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-blue-600">{plan.price}</div>
                        <div className="text-sm text-gray-500 flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {plan.duration}
                        </div>
                      </div>
                      <CardDescription className="mt-4">{plan.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        onClick={() => router.push('/contact')}
                        className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' : ''}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
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
            transition={{ delay: 0.8 }}
            className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => router.push('/contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
              >
                Contact Us
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => router.push('/portfolio')}
                className="px-8 py-4"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Mobile FAB */}
          <Button
            onClick={() => router.push('/contact')}
            className="sm:hidden fixed bottom-4 right-4 z-40 h-14 w-14 rounded-full shadow-lg"
            size="icon"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </main>
      </div>


    </div>
    </>
  );
}