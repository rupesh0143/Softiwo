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
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  DollarSign,
  User,
  Building,
  Globe,
  Smartphone,
  Monitor,
  Menu,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Award,
  Loader2
} from 'lucide-react';

export default function ContactPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    requirements: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRequirementToggle = (requirement) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter(r => r !== requirement)
        : [...prev.requirements, requirement]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
          requirements: []
        });
        alert('Message sent successfully! We\'ll get back to you within 24 hours.');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = [
    { value: 'web', label: 'Web Application', icon: Globe, description: 'Responsive web apps and websites' },
    { value: 'mobile', label: 'Mobile App', icon: Smartphone, description: 'iOS and Android applications' },
    { value: 'desktop', label: 'Desktop Application', icon: Monitor, description: 'Windows, Mac, and Linux apps' },
    { value: 'fullstack', label: 'Full-Stack Solution', icon: Zap, description: 'Complete end-to-end development' }
  ];

  const budgetRanges = [
    { value: '5k-15k', label: '$5,000 - $15,000', description: 'Small to medium projects' },
    { value: '15k-35k', label: '$15,000 - $35,000', description: 'Medium to large projects' },
    { value: '35k-75k', label: '$35,000 - $75,000', description: 'Large enterprise projects' },
    { value: '75k+', label: '$75,000+', description: 'Complex enterprise solutions' }
  ];

  const timelines = [
    { value: '1-2months', label: '1-2 Months', description: 'Quick turnaround projects' },
    { value: '3-4months', label: '3-4 Months', description: 'Standard development timeline' },
    { value: '5-6months', label: '5-6 Months', description: 'Complex feature-rich projects' },
    { value: '6months+', label: '6+ Months', description: 'Long-term development projects' }
  ];

  const availableRequirements = [
    'UI/UX Design', 'API Development', 'Database Design', 'Cloud Hosting',
    'Mobile Responsive', 'SEO Optimization', 'Payment Integration', 'User Authentication',
    'Admin Panel', 'Real-time Features', 'Third-party Integrations', 'Performance Optimization'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'softiwo01@gmail.com',
      description: 'Send us an email anytime',
      action: 'mailto:softiwo01@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 8800677345',
      description: 'Mon-Fri from 9am to 6pm IST',
      action: 'tel:+918800677345'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Cybercity Hatana, Phase 1, kosi kalan, Mathura, Uttar Pradesh, India',
      description: 'Come say hello at our office',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Mon-Fri: 8am-5pm PST',
      description: 'We\'re here when you need us',
      action: '#'
    }
  ];

  const features = [
    { icon: CheckCircle, title: 'Free Consultation', description: '30-minute strategy session' },
    { icon: Zap, title: 'Quick Response', description: 'Response within 24 hours' },
    { icon: Shield, title: 'NDA Protection', description: 'Your ideas are safe with us' },
    { icon: Award, title: 'Quality Guarantee', description: '100% satisfaction guarantee' }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Softiwo",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service",
          "email": "hello@softiwo.com",
          "availableLanguage": ["English"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification", 
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us & Get Quote - Start Your Project | Softiwo</title>
        <meta name="description" content="Ready to start your project? Contact Softiwo for a free quote on web, mobile, or desktop app development. Response within 24 hours guaranteed." />
        <meta name="keywords" content="contact Softiwo, get quote, free consultation, project estimate, app development quote, contact form, phone number, email, start project" />
        <meta property="og:title" content="Contact Softiwo - Get Your Free Project Quote Today" />
        <meta property="og:description" content="Ready to transform your idea into a powerful application? Get in touch for a free consultation and detailed project quote." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softiwo.com/contact" />
        <link rel="canonical" href="https://softiwo.com/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactSchema),
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
                  Get Quote & Contact
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium">
                  Let's discuss your project and bring your ideas to life
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <Button 
                size="sm" 
                onClick={() => window.open('tel:+918800677345', '_self')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 rounded-xl"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Call Now</span>
                <span className="md:hidden">Call</span>
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
              Let's Start Building Together
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your idea into a powerful application? Get a personalized quote and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          {/* Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-blue-600" />
                    Project Details
                  </CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll provide a detailed quote within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Project Type *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <div
                          key={type.value}
                          onClick={() => handleInputChange('projectType', type.value)}
                          className={`p-4 border rounded-xl cursor-pointer transition-all ${
                            formData.projectType === type.value
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              formData.projectType === type.value
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}>
                              <type.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{type.label}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{type.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3">Budget Range</label>
                      <div className="space-y-2">
                        {budgetRanges.map((budget) => (
                          <label key={budget.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="budget"
                              value={budget.value}
                              checked={formData.budget === budget.value}
                              onChange={(e) => handleInputChange('budget', e.target.value)}
                              className="w-4 h-4 text-blue-600"
                            />
                            <div>
                              <span className="font-medium">{budget.label}</span>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{budget.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3">Timeline</label>
                      <div className="space-y-2">
                        {timelines.map((timeline) => (
                          <label key={timeline.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="timeline"
                              value={timeline.value}
                              checked={formData.timeline === timeline.value}
                              onChange={(e) => handleInputChange('timeline', e.target.value)}
                              className="w-4 h-4 text-blue-600"
                            />
                            <div>
                              <span className="font-medium">{timeline.label}</span>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{timeline.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Additional Requirements</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {availableRequirements.map((requirement) => (
                        <label key={requirement} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.requirements.includes(requirement)}
                            onChange={() => handleRequirementToggle(requirement)}
                            className="w-4 h-4 text-blue-600 rounded"
                          />
                          <span className="text-sm">{requirement}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Description</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach us for your convenience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.action}
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">{contact.title}</h4>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{contact.info}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{contact.description}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-gray-200/50 dark:border-gray-800/50 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-center">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Response Time</span>
                      <span className="font-bold text-blue-600">&lt; 24 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Project Success Rate</span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Client Satisfaction</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Ongoing Support</span>
                      <span className="font-bold text-purple-600">Lifetime</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-sm mb-4 text-blue-100">
                    Schedule a free 30-minute consultation call
                  </p>
                  <Button 
                    variant="secondary" 
                    onClick={() => window.open('tel:+918800677345', '_self')}
                    className="w-full"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}