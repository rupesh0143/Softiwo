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
  ArrowLeft,
  Share2,
  BookOpen,
  Menu,
  ArrowRight,
  CheckCircle,
  Zap,
  Link2,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function APIIntegrationBlog() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  
  const blog = blogData['api-integration'];

  const handleGetQuote = (quoteData) => {
    console.log('Quote request:', quoteData);
    setIsModalOpen(false);
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
        <link rel="canonical" href={`https://softiwo.com/blog/${blog.slug}`} />
      </Head>
      
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Sidebar />
        {isSidebarOpen && (
          <Sidebar isMobile={true} onClose={() => setIsSidebarOpen(false)} />
        )}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 px-3 sm:px-6 py-4 dark:bg-gray-950/70 dark:border-gray-800/50 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 shrink-0 transition-all duration-200" onClick={() => setIsSidebarOpen(true)}>
                  <Menu className="h-5 w-5" />
                </button>
                <Link href="/blog" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Back to Blog</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                  <Share2 className="h-4 w-4 mr-2" />Share
                </Button>
                <Button size="sm" onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                  Get Quote
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full dark:bg-green-900/30 dark:text-green-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  {blog.title}
                </h1>
                <div className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center"><Calendar className="h-4 w-4 mr-2" />{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  <div className="flex items-center"><Clock className="h-4 w-4 mr-2" />{blog.readTime} min read</div>
                  <div className="flex items-center"><BookOpen className="h-4 w-4 mr-2" />Guide</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none mb-12">
                <div className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
                  {blog.content.introduction}
                </div>
              </motion.div>

              <div className="space-y-12">
                {blog.content.sections.map((section, index) => (
                  <motion.section key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="prose prose-lg max-w-none">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
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

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="text-center py-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl text-white mt-16">
                <Link2 className="h-16 w-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Connect Everything?</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{blog.content.cta}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)} className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
                    Get Free Quote<ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => router.push('/portfolio')} className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4">
                    View Portfolio
                  </Button>
                </div>
              </motion.div>
            </article>
          </main>
        </div>

        <GetQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleGetQuote} />
      </div>
    </>
  );
}