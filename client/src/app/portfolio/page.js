"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { GetQuoteModal } from '@/components/GetQuoteModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolio, projects } from '@/lib/data';
import {
  Bell,
  Search,
  Plus,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  User,
  Calendar,
  MoreVertical
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area
} from 'recharts';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleGetQuote = (quoteData) => {
    console.log('Quote request:', quoteData);
    setIsModalOpen(false);
    // Quote request will be handled by the modal component
  };

  const stats = [
    {
      title: "Total Projects",
      value: portfolio.overview.totalProjects,
      change: "+12%",
      trending: "up",
      icon: Target,
      color: "blue"
    },
    {
      title: "Active Projects",
      value: portfolio.overview.activeProjects,
      change: "+25%",
      trending: "up", 
      icon: Activity,
      color: "green"
    },
    {
      title: "Client Satisfaction",
      value: portfolio.overview.clientSatisfaction,
      change: "+2%",
      trending: "up",
      icon: Users,
      color: "purple"
    },
    {
      title: "Total Revenue",
      value: portfolio.overview.totalRevenue,
      change: "+18%",
      trending: "up",
      icon: DollarSign,
      color: "orange"
    }
  ];

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
                  Portfolio
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium">
                  Explore our application development projects and expertise
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              {/* Search - Hidden on small screens */}
              <div className="hidden lg:block relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 h-4 w-4 transition-colors" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-3 w-48 xl:w-64 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100 dark:focus:border-blue-400"
                />
              </div>
              
              <Button 
                onClick={() => setIsModalOpen(true)} 
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
        <main className="flex-1 overflow-auto p-3 sm:p-6 space-y-4 sm:space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    stat.color === 'blue' ? 'from-blue-500/10 to-cyan-500/10' :
                    stat.color === 'green' ? 'from-green-500/10 to-emerald-500/10' :
                    stat.color === 'purple' ? 'from-purple-500/10 to-violet-500/10' :
                    'from-orange-500/10 to-yellow-500/10'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="relative p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                          {stat.title}
                        </p>
                        <div className="flex items-baseline space-x-2">
                          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                            {stat.value}
                          </p>
                          <div className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                            stat.trending === 'up' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {stat.trending === 'up' ? (
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3 mr-1" />
                            )}
                            {stat.change}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${
                        stat.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                        stat.color === 'green' ? 'from-green-500 to-emerald-500' :
                        stat.color === 'purple' ? 'from-purple-500 to-violet-500' :
                        'from-orange-500 to-yellow-500'
                      } shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${
                            stat.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                            stat.color === 'green' ? 'from-green-500 to-emerald-500' :
                            stat.color === 'purple' ? 'from-purple-500 to-violet-500' :
                            'from-orange-500 to-yellow-500'
                          } transition-all duration-500 ease-out`}
                          style={{ width: `${Math.abs(parseFloat(stat.change))}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Performance Chart - Larger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="xl:col-span-2"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Project Development
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                        Monthly project completion across platforms
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-400">Web Apps</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-400">Mobile Apps</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-3 h-3 bg-purple-500 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-400">Desktop Apps</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={portfolio.chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorWebApps" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorMobileApps" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorDesktopApps" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.3} />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false}
                          tickLine={false}
                          className="text-gray-600 dark:text-gray-400"
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          className="text-gray-600 dark:text-gray-400"
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                            border: '1px solid #E5E7EB',
                            borderRadius: '12px',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                            fontSize: '14px'
                          }}
                          labelStyle={{ color: '#374151', fontWeight: '600' }}
                        />
                        <Area
                          type="monotone"
                          dataKey="webApps"
                          stroke="#3B82F6"
                          strokeWidth={3}
                          fill="url(#colorWebApps)"
                          dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, fill: '#3B82F6' }}
                        />
                        <Area
                          type="monotone"
                          dataKey="mobileApps"
                          stroke="#10B981"
                          strokeWidth={3}
                          fill="url(#colorMobileApps)"
                          dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, fill: '#10B981' }}
                        />
                        <Area
                          type="monotone"
                          dataKey="desktopApps"
                          stroke="#8B5CF6"
                          strokeWidth={3}
                          fill="url(#colorDesktopApps)"
                          dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, fill: '#8B5CF6' }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Engagement Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">Project Types</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Development focus distribution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={portfolio.projectTypes}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {portfolio.projectTypes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Projects']}
                          contentStyle={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            fontSize: '14px'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Project Types Breakdown */}
                  <div className="mt-4 space-y-3">
                    {portfolio.projectTypes.map((item, index) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full shadow-sm"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                            {item.value}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recent Campaigns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                  <div>
                    <CardTitle className="text-2xl font-bold">Recent Projects</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Latest application development projects
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    className="bg-white/50 border-gray-200 hover:bg-gray-50 dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-800 rounded-xl"
                  >
                    View All Projects
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.slice(0, 4).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="group relative p-4 border border-gray-100 rounded-xl hover:shadow-lg hover:border-gray-200 transition-all duration-300 bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700"
                    >
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4 min-w-0 flex-1">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                              {project.name.charAt(0)}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${
                              project.status === 'Completed' ? 'bg-green-500' : 
                              project.status === 'In Development' ? 'bg-yellow-500' : 'bg-gray-500'
                            }`} />
                          </div>
                          
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.name}
                            </h3>
                            <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
                              <span className="flex items-center">
                                <Target className="h-3 w-3 mr-1" />
                                {project.type}
                              </span>
                              <span>•</span>
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {project.duration}
                              </span>
                              <span>•</span>
                              <span className="font-medium text-gray-700 dark:text-gray-300">
                                {project.client}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 shrink-0">
                          {/* Budget */}
                          <div className="text-right hidden sm:block">
                            <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                              {project.budget}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Budget
                            </div>
                          </div>
                          
                          {/* Status Badge */}
                          <div className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                            project.status === 'Completed' 
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg'
                              : project.status === 'In Development'
                              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                              : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg'
                          }`}>
                            {project.status}
                          </div>
                          
                          {/* Action Button */}
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-200">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Mobile FAB */}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="sm:hidden fixed bottom-4 right-4 z-40 h-14 w-14 rounded-full shadow-lg"
            size="icon"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </main>
      </div>

      <GetQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleGetQuote}
      />
    </div>
  );
}