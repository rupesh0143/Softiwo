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
        <header className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 px-4 sm:px-6 lg:px-12 py-3 sm:py-4 dark:bg-gray-950/70 dark:border-gray-800/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 min-w-0 flex-1">
              <button
                className="lg:hidden p-1.5 sm:p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 shrink-0 transition-all duration-200 touch-target"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </button>
              
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300 truncate">
                  Portfolio
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium mt-0.5">
                  Explore our application development projects and expertise
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 shrink-0">
              {/* Search - Hidden on small screens */}
              <div className="hidden xl:block relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 h-4 w-4 transition-colors" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2.5 w-48 2xl:w-64 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100 dark:focus:border-blue-400 text-sm"
                />
              </div>
              
              <Button 
                onClick={() => setIsModalOpen(true)} 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 rounded-xl touch-target"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                <span className="hidden sm:inline text-xs sm:text-sm">Get Quote</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 xl:p-12 space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
                  
                  <CardContent className="relative p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider truncate">
                          {stat.title}
                        </p>
                        <div className="flex items-baseline space-x-1 sm:space-x-2">
                          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
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
                      
                      <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${
                        stat.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                        stat.color === 'green' ? 'from-green-500 to-emerald-500' :
                        stat.color === 'purple' ? 'from-purple-500 to-violet-500' :
                        'from-orange-500 to-yellow-500'
                      } shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 sm:mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 dark:bg-gray-700">
                        <div 
                          className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Performance Chart - Larger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-0">
                    <div>
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Project Development
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
                        Monthly project completion across platforms
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-400">Web Apps</span>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-400">Mobile Apps</span>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-400">Desktop Apps</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-4 sm:pb-6">
                  <div className="h-48 sm:h-64 lg:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={portfolio.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl font-bold">Project Types</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    Development focus distribution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 sm:h-56 lg:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={portfolio.projectTypes}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={70}
                          paddingAngle={3}
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
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    {portfolio.projectTypes.map((item, index) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                          <div 
                            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-sm flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100">
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
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                  <div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">Recent Projects</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      Latest application development projects
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/50 border-gray-200 hover:bg-gray-50 dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-800 rounded-xl text-xs sm:text-sm w-full sm:w-auto touch-target"
                  >
                    <span className="sm:hidden">View All</span>
                    <span className="hidden sm:inline">View All Projects</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {projects.slice(0, 4).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="group relative p-3 sm:p-4 border border-gray-100 rounded-xl hover:shadow-lg hover:border-gray-200 transition-all duration-300 bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700"
                    >
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:justify-between">
                        <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                          <div className="relative flex-shrink-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                              {project.name.charAt(0)}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white dark:border-gray-800 ${
                              project.status === 'Completed' ? 'bg-green-500' : 
                              project.status === 'In Development' ? 'bg-yellow-500' : 'bg-gray-500'
                            }`} />
                          </div>
                          
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.name}
                            </h3>
                            <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 space-y-1 xs:space-y-0">
                              <span className="flex items-center">
                                <Target className="h-3 w-3 mr-1 flex-shrink-0" />
                                <span className="truncate">{project.type}</span>
                              </span>
                              <span className="hidden xs:inline">•</span>
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                                <span className="truncate">{project.duration}</span>
                              </span>
                              <span className="hidden xs:inline">•</span>
                              <span className="font-medium text-gray-700 dark:text-gray-300 truncate">
                                {project.client}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-end sm:space-x-3 lg:space-x-4 shrink-0">
                          {/* Budget - Hidden on mobile, shown on larger screens */}
                          <div className="text-right hidden lg:block">
                            <div className="text-sm lg:text-lg font-bold text-gray-900 dark:text-gray-100">
                              {project.budget}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Budget
                            </div>
                          </div>
                          
                          {/* Status Badge */}
                          <div className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                            project.status === 'Completed' 
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg'
                              : project.status === 'In Development'
                              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                              : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg'
                          }`}>
                            <span className="sm:hidden">{project.status === 'In Development' ? 'Dev' : project.status === 'Completed' ? 'Done' : project.status}</span>
                            <span className="hidden sm:inline">{project.status}</span>
                          </div>
                          
                          {/* Action Button */}
                          <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-200 touch-target">
                            <MoreVertical className="h-3 w-3 sm:h-4 sm:w-4" />
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
            className="sm:hidden fixed bottom-4 right-4 z-40 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 touch-target"
            size="icon"
          >
            <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
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