"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { blogData } from '@/lib/blogData';
import {
  Search,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Menu,
  BookOpen,
  TrendingUp,
  Users,
  Eye
} from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState('All');

  // Get all unique tags
  const allTags = ['All', ...new Set(
    Object.values(blogData).flatMap(blog => blog.tags)
  )];

  // Filter blogs by selected tag
  const filteredBlogs = selectedTag === 'All' 
    ? Object.values(blogData)
    : Object.values(blogData).filter(blog => blog.tags.includes(selectedTag));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Softiwo Development Blog",
    "description": "Expert insights on web development, mobile app development, and modern software engineering practices",
    "url": "https://softiwo.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Softiwo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://softiwo.com/logo.png"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Development Blog - Expert Insights & Tutorials | Softiwo</title>
        <meta name="description" content="Read expert insights on web development, mobile app development, UI/UX design, and modern software engineering practices from the Softiwo team." />
        <meta name="keywords" content="development blog, web development tutorials, mobile app guides, UI UX design, software engineering, programming insights, tech articles" />
        <meta property="og:title" content="Softiwo Development Blog - Expert Insights & Tutorials" />
        <meta property="og:description" content="Stay updated with the latest trends and best practices in software development, design, and technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softiwo.com/blog" />
        <link rel="canonical" href="https://softiwo.com/blog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogSchema),
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
                    Development Blog
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium">
                    Expert insights and tutorials on modern software development
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
                <div className="hidden lg:block relative group">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 h-4 w-4 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-3 w-48 xl:w-64 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100 dark:focus:border-blue-400"
                  />
                </div>
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
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Development Insights
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Stay ahead with the latest trends, best practices, and expert insights in software development, design, and technology.
              </p>
            </motion.div>

            {/* Blog Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
              {[
                { label: 'Articles', value: Object.keys(blogData).length, icon: BookOpen },
                { label: 'Categories', value: allTags.length - 1, icon: Tag },
                { label: 'Monthly Readers', value: '10K+', icon: Users },
                { label: 'Expert Authors', value: '5+', icon: TrendingUp }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Tag Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-4"
            >
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                    selectedTag === tag
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>

            {/* Blog Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${blog.slug}`}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 overflow-hidden cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardHeader className="relative">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex flex-wrap gap-2">
                            {blog.tags.slice(0, 2).map((tag) => (
                              <span 
                                key={tag}
                                className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full dark:bg-blue-900/30 dark:text-blue-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                        
                        <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {blog.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed line-clamp-3">
                          {blog.excerpt}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="relative">
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {blog.readTime} min read
                            </div>
                          </div>
                          <Eye className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl"
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest articles and development insights delivered to your inbox. No spam, unsubscribe anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </>
  );
}