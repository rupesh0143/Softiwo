"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  User,
  Building,
  Globe,
  Smartphone,
  Monitor,
  DollarSign,
  Calendar,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2
} from 'lucide-react';

export function GetQuoteModal({ isOpen, onClose, onSubmit }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    requirements: []
  });

  const projectTypes = [
    { value: 'web', label: 'Web Application', icon: Globe, description: 'Responsive web apps' },
    { value: 'mobile', label: 'Mobile App', icon: Smartphone, description: 'iOS & Android apps' },
    { value: 'desktop', label: 'Desktop App', icon: Monitor, description: 'Cross-platform desktop' },
    { value: 'fullstack', label: 'Full-Stack Solution', icon: CheckCircle, description: 'End-to-end development' }
  ];

  const budgetRanges = [
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-35k', label: '$15,000 - $35,000' },
    { value: '35k-75k', label: '$35,000 - $75,000' },
    { value: '75k+', label: '$75,000+' }
  ];

  const timelines = [
    { value: '1-2months', label: '1-2 Months' },
    { value: '3-4months', label: '3-4 Months' },
    { value: '5-6months', label: '5-6 Months' },
    { value: '6months+', label: '6+ Months' }
  ];

  const requirements = [
    'UI/UX Design', 'API Development', 'Database Design', 'Cloud Hosting',
    'Mobile Responsive', 'SEO Optimization', 'Payment Integration', 'User Authentication',
    'Admin Panel', 'Real-time Features', 'Third-party Integrations', 'Performance Optimization'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Send email using API
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'quote',
          ...formData
        }),
      });

      if (response.ok) {
        onSubmit?.(formData);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: '',
          requirements: []
        });
        onClose();
        alert('Quote request sent successfully! We\'ll get back to you within 24 hours.');
      } else {
        throw new Error('Failed to send quote request');
      }
    } catch (error) {
      console.error('Error sending quote:', error);
      alert('Failed to send quote request. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRequirementToggle = (requirement) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter(r => r !== requirement)
        : [...prev.requirements, requirement]
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center">
            <MessageSquare className="h-6 w-6 mr-3 text-blue-600" />
            Get Free Quote
          </DialogTitle>
          <DialogDescription>
            Tell us about your project and we'll provide a detailed quote within 24 hours
          </DialogDescription>
        </DialogHeader>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Building className="h-4 w-4 mr-2 text-gray-500" />
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                placeholder="Company Name"
              />
            </div>
          </div>

          {/* Project Type */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Project Type *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <div
                  key={type.value}
                  onClick={() => handleChange('projectType', type.value)}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    formData.projectType === type.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      formData.projectType === type.value
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600'
                    }`}>
                      <type.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{type.label}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
              >
                <option value="">Select Budget</option>
                {budgetRanges.map(budget => (
                  <option key={budget.value} value={budget.value}>{budget.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => handleChange('timeline', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
              >
                <option value="">Select Timeline</option>
                {timelines.map(timeline => (
                  <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Additional Requirements</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto">
              {requirements.map((requirement) => (
                <label key={requirement} className="flex items-center space-x-2 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={formData.requirements.includes(requirement)}
                    onChange={() => handleRequirementToggle(requirement)}
                    className="w-3 h-3 text-blue-600 rounded"
                  />
                  <span>{requirement}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:border-gray-600 dark:bg-gray-800"
              placeholder="Tell us about your project, goals, and any specific requirements..."
            />
          </div>
        </motion.form>

        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-0">
          <Button type="button" variant="outline" onClick={onClose} disabled={loading} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button 
            type="submit" 
            onClick={handleSubmit} 
            disabled={loading}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Get Free Quote
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}