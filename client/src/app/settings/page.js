"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import {
  User,
  Mail,
  Building2,
  Phone,
  Globe,
  Key,
  Bell,
  Shield,
  Palette,
  Save,
  Eye,
  EyeOff,
  Menu
} from 'lucide-react';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [showApiKey, setShowApiKey] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    company: 'MarketPro Inc',
    phone: '+1 (555) 123-4567',
    website: 'https://marketpro.com',
    notifications: {
      email: true,
      push: false,
      sms: true,
      marketing: false
    }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    console.log('Saving settings:', formData);
    // Here you would typically save to your backend
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <Sidebar />
      {isSidebarOpen && (
        <Sidebar 
          isMobile={true} 
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-6 sm:px-12 py-3 sm:py-4 dark:bg-gray-950/50 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
              <button
                className="lg:hidden p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 shrink-0"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </button>
              
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100 truncate">
                  Settings
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                  Manage your account and application preferences
                </p>
              </div>
            </div>
            
            <Button onClick={handleSaveSettings} size="sm">
              <Save className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Save Changes</span>
              <span className="sm:hidden">Save</span>
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 sm:p-12">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-8">
            
            {/* Profile Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal information and contact details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center">
                        <Building2 className="h-4 w-4 mr-2" />
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Appearance Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="h-5 w-5 mr-2" />
                    Appearance
                  </CardTitle>
                  <CardDescription>
                    Customize how the application looks and feels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">Dark Mode</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Switch between light and dark themes
                      </div>
                    </div>
                    <Switch
                      checked={theme === 'dark'}
                      onCheckedChange={toggleTheme}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Notification Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notifications
                  </CardTitle>
                  <CardDescription>
                    Choose what notifications you want to receive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Receive updates via email
                      </div>
                    </div>
                    <Switch
                      checked={formData.notifications.email}
                      onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">Push Notifications</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Receive push notifications in your browser
                      </div>
                    </div>
                    <Switch
                      checked={formData.notifications.push}
                      onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">SMS Notifications</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Receive important updates via SMS
                      </div>
                    </div>
                    <Switch
                      checked={formData.notifications.sms}
                      onCheckedChange={(checked) => handleNotificationChange('sms', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">Marketing Updates</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Receive product news and marketing tips
                      </div>
                    </div>
                    <Switch
                      checked={formData.notifications.marketing}
                      onCheckedChange={(checked) => handleNotificationChange('marketing', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* API & Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 mr-2" />
                    API & Integrations
                  </CardTitle>
                  <CardDescription>
                    Manage your API keys and third-party integrations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">API Key</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type={showApiKey ? "text" : "password"}
                        value="mk_live_1234567890abcdef"
                        readOnly
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button variant="outline">
                        Regenerate
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                      <h3 className="font-medium mb-2">Google Ads</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        Connect your Google Ads account
                      </p>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                      <h3 className="font-medium mb-2">Facebook Ads</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        Connect your Facebook Ads account
                      </p>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                      <h3 className="font-medium mb-2">Mailchimp</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        Sync your email campaigns
                      </p>
                      <Button variant="outline" size="sm" className="bg-green-50 border-green-200 text-green-700">
                        Connected
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                      <h3 className="font-medium mb-2">Slack</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        Get notifications in Slack
                      </p>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Security Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Security
                  </CardTitle>
                  <CardDescription>
                    Manage your account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Add an extra layer of security to your account
                      </div>
                    </div>
                    <Button variant="outline">
                      Enable 2FA
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div>
                      <div className="font-medium">Change Password</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Update your account password
                      </div>
                    </div>
                    <Button variant="outline">
                      Change
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div>
                      <div className="font-medium">Active Sessions</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Manage your active login sessions
                      </div>
                    </div>
                    <Button variant="outline">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </main>
      </div>
    </div>
  );
}