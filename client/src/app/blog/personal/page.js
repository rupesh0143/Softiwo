"use client";

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPersonalBlogPosts, getFeaturedPersonalPosts, getAllPersonalBlogTags, getPersonalBlogCategories } from '@/lib/personalBlogData';
import {
  Calendar,
  Clock,
  User,
  BookOpen,
  Search,
  Filter,
  ArrowRight,
  Menu,
  Star,
  Tag,
  Eye,
  Share2,
  Heart,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PersonalBlogPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const allPosts = getPersonalBlogPosts();
  const featuredPosts = getFeaturedPersonalPosts();
  const allTags = getAllPersonalBlogTags();
  const categories = getPersonalBlogCategories();

  const filteredPosts = useMemo(() => {
    let filtered = allPosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    // Sort posts
    switch (sortBy) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
        break;
      case 'readTime':
        filtered.sort((a, b) => a.readTime - b.readTime);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        break;
    }

    return filtered;
  }, [allPosts, searchTerm, selectedCategory, selectedTag, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    setSortBy('newest');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>Personal Blog - Insights, Stories & Tech Journey | Softiwo</title>
        <meta name="description" content="Personal blog featuring development insights, career journey, tech stories, and thoughts on modern software development. Follow my journey as a full-stack developer." />
        <meta name="keywords" content="personal blog, developer blog, tech insights, programming stories, career journey, full-stack development, software engineering, coding tips" />
        <meta property="og:title" content="Personal Blog - Developer Insights & Tech Journey | Softiwo" />
        <meta property="og:description" content="Personal thoughts, experiences, and insights from a full-stack developer's journey in the tech industry." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://softiwo.com/blog/personal" />
        <link rel="canonical" href="https://softiwo.com/blog/personal" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Softiwo Personal Blog",
              "description": "Personal blog featuring development insights, career journey, and tech stories",
              "url": "https://softiwo.com/blog/personal",
              "author": {
                "@type": "Person",
                "name": "Rupesh Kumar"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Softiwo"
              }
            })
          }}
        />
      </Head>

      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Sidebar />
        {isSidebarOpen && (
          <Sidebar isMobile={true} onClose={() => setIsSidebarOpen(false)} />
        )}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 px-6 sm:px-12 py-4 dark:bg-gray-950/70 dark:border-gray-800/50 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <button
                  className="lg:hidden p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 shrink-0 transition-all duration-200"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </button>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-2">
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Blog
                    </Link>
                    <span className="text-gray-300">/</span>
                    <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Personal Blog
                    </h1>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium">
                    Personal insights, stories, and tech journey
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Blog
                </Button>
                <Link href="/blog">
                  <Button size="sm" variant="outline">
                    All Blogs
                  </Button>
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 py-8 sm:py-12">
              
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  My Personal Journey
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Welcome to my personal space where I share insights, experiences, and stories from my journey as a developer. 
                  Join me as I explore the ever-evolving world of technology and share lessons learned along the way.
                </p>
              </motion.div>

              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Star className="h-6 w-6 text-yellow-500 mr-2" />
                    Featured Posts
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredPosts.slice(0, 2).map((post) => (
                      <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
                          <BookOpen className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                        </div>
                        <CardHeader>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full dark:bg-purple-900/30 dark:text-purple-400">
                              {post.category}
                            </span>
                            <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400">
                              Featured
                            </span>
                          </div>
                          <CardTitle className="text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {formatDate(post.publishedAt)}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {post.readTime} min read
                              </div>
                            </div>
                          </div>
                          <Link href={`/blog/personal/${post.slug}`}>
                            <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                              Read More
                              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Filters and Search */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 rounded-2xl p-6">
                  <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 flex-1">
                      {/* Search */}
                      <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                          type="text"
                          placeholder="Search posts..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100 dark:focus:border-purple-400"
                        />
                      </div>

                      {/* Category Filter */}
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100"
                      >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>

                      {/* Sort */}
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-100"
                      >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="readTime">By Read Time</option>
                      </select>
                    </div>

                    <Button
                      onClick={clearFilters}
                      variant="outline"
                      size="sm"
                      className="whitespace-nowrap"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Clear Filters
                    </Button>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Tags:</span>
                      {allTags.slice(0, 8).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                          className={`px-3 py-1 text-sm rounded-full transition-colors ${
                            selectedTag === tag
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-purple-900/30 dark:hover:text-purple-400'
                          }`}
                        >
                          <Tag className="h-3 w-3 mr-1 inline" />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Blog Posts Grid */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">
                    All Posts ({filteredPosts.length})
                  </h3>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      No posts found
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500">
                      Try adjusting your search criteria or filters.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Card className="h-full group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50 overflow-hidden">
                          <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
                            <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                          </div>
                          <CardHeader>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full dark:bg-purple-900/30 dark:text-purple-400">
                                {post.category}
                              </span>
                              {post.featured && (
                                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400">
                                  Featured
                                </span>
                              )}
                            </div>
                            <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                              {post.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {formatDate(post.publishedAt)}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {post.readTime} min
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full dark:bg-gray-800 dark:text-gray-400"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <Link href={`/blog/personal/${post.slug}`}>
                              <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors" variant="outline">
                                Read More
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}