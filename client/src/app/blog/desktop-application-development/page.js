"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { GetQuoteModal } from '@/components/GetQuoteModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogData } from '@/lib/blogData';
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  BookOpen,
  Menu,
  ArrowRight,
  CheckCircle,
  Monitor,
  Code,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DesktopApplicationDevelopmentBlog() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  
  const blog = blogData['desktop-application-development'];

  const handleGetQuote = (quoteData) => {
    console.log('Quote request:', quoteData);
    setIsModalOpen(false);
  };

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Softiwo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Softiwo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://softiwo.com/logo.png"
      }
    },
    "datePublished": blog.publishedAt,
    "dateModified": blog.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://softiwo.com/blog/${blog.slug}`
    },
    "keywords": blog.tags.join(", ")
  };

  return (
    <>
      <Head>
        <title>{blog.title} | Softiwo Development Blog</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.tags.join(", ")} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://softiwo.com/blog/${blog.slug}`} />
        <meta name="article:published_time" content={blog.publishedAt} />
        <meta name="article:author" content="Softiwo" />
        <meta name="article:tag" content={blog.tags.join(", ")} />
        <link rel="canonical" href={`https://softiwo.com/blog/${blog.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPostSchema),
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
          <header className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 px-6 sm:px-12 py-4 dark:bg-gray-950/70 dark:border-gray-800/50 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <button
                  className="lg:hidden p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 shrink-0 transition-all duration-200"
                  onClick={() => setIsSidebarOpen(true)}
                  aria-label="Open sidebar"
                >
                  <Menu className="h-5 w-5" />
                </button>
                
                <Link 
                  href="/blog"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Back to Blog</span>
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
                <Button 
                  variant="outline"
                  size="sm"
                  className="hidden sm:inline-flex"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button 
                  size="sm"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <article className="max-w-4xl mx-auto px-8 sm:px-12 py-8 sm:py-12">
              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {blog.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-sm font-medium bg-orange-100 text-orange-700 rounded-full dark:bg-orange-900/30 dark:text-orange-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  {blog.title}
                </h1>
                
                <div className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {blog.readTime} min read
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Guide
                  </div>
                </div>
              </motion.div>

              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none mb-12"
              >
                <div className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
                  {blog.content.introduction}
                </div>
              </motion.div>

              {/* Content Sections */}
              <div className="space-y-12">
                {blog.content.sections.map((section, index) => (
                  <motion.section
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="prose prose-lg max-w-none"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      {section.title}
                    </h2>
                    <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 pl-12">
                      {section.content}
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Technology Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="my-16"
              >
                <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-gray-200/50 dark:border-gray-800/50">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Desktop Development Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { name: 'Electron', icon: Code, description: 'Cross-platform apps' },
                        { name: 'Tauri', icon: Monitor, description: 'Rust-based framework' },
                        { name: 'Qt', icon: Code, description: 'Native performance' },
                        { name: 'WPF', icon: Monitor, description: 'Windows applications' }
                      ].map((tech, index) => (
                        <div key={tech.name} className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <tech.icon className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="font-semibold mb-1">{tech.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="prose prose-lg max-w-none mb-12"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Conclusion</h2>
                <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {blog.content.conclusion}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-center py-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl text-white"
              >
                <Monitor className="h-16 w-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Build Your Desktop Application?</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  {blog.content.cta}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg"
                    variant="secondary"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4"
                  >
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => router.push('/portfolio')}
                    className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4"
                  >
                    View Portfolio
                  </Button>
                </div>
              </motion.div>

              {/* Related Articles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(blogData)
                    .filter(([key]) => key !== 'desktop-application-development')
                    .slice(0, 2)
                    .map(([key, relatedBlog]) => (
                      <Link key={key} href={`/blog/${relatedBlog.slug}`}>
                        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                          <CardContent className="p-6">
                            <h4 className="font-semibold mb-2 line-clamp-2">{relatedBlog.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{relatedBlog.excerpt}</p>
                            <div className="flex items-center mt-4 text-sm text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {relatedBlog.readTime} min read
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </motion.div>
            </article>
          </main>
        </div>

        <GetQuoteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleGetQuote}
        />
      </div>
    </>
  );
}