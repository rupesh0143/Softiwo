"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { GetQuoteModal } from '@/components/GetQuoteModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getPersonalBlogBySlug, getRelatedPersonalBlogs, getPersonalBlogPosts } from '@/lib/personalBlogData';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  Menu,
  ArrowRight,
  User,
  Tag,
  ThumbsUp,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  Heart,
  Eye,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

export default function PersonalBlogPost() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();
  const params = useParams();
  
  const blogSlug = params?.slug;
  const blog = blogSlug ? getPersonalBlogBySlug(blogSlug) : null;
  
  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedPersonalBlogs(blogSlug, 3);
  
  const handleGetQuote = (quoteData) => {
    console.log('Quote request:', quoteData);
    setIsModalOpen(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  const shareUrl = `https://softiwo.com/blog/personal/${blog.slug}`;
  
  const handleShare = (platform) => {
    const text = `Check out this blog post: ${blog.title}`;
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    let url;
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      default:
        navigator.clipboard.writeText(shareUrl);
        return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <>
      <Head>
        <title>{blog.title} | Personal Blog | Softiwo</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.tags.join(", ")} />
        <meta name="author" content={blog.author.name} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://softiwo.com/blog/personal/${blog.slug}`} />
        <meta property="og:image" content={blog.image?.url || 'https://softiwo.com/default-blog-image.jpg'} />
        <meta property="article:author" content={blog.author.name} />
        <meta property="article:published_time" content={blog.publishedAt} />
        <meta property="article:modified_time" content={blog.updatedAt} />
        <meta property="article:section" content={blog.category} />
        {blog.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.image?.url || 'https://softiwo.com/default-blog-image.jpg'} />
        <link rel="canonical" href={blog.seo.canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blog.seo.structuredData),
          }}
        />
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
                <div className="flex items-center space-x-2 text-sm">
                  <Link href="/blog" className="text-gray-500 hover:text-gray-700 transition-colors">
                    Blog
                  </Link>
                  <span className="text-gray-300">/</span>
                  <Link href="/blog/personal" className="text-purple-600 hover:text-purple-700 transition-colors">
                    Personal
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex" onClick={() => handleShare()}>
                  <Share2 className="h-4 w-4 mr-2" />Share
                </Button>
                <Button size="sm" onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get Quote
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
              
              {/* Article Header */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full dark:bg-purple-900/30 dark:text-purple-400">
                    {blog.category}
                  </span>
                  {blog.featured && (
                    <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400">
                      Featured
                    </span>
                  )}
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  {blog.title}
                </h1>
                
                {/* Author and Meta Info */}
                <div className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">{blog.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(blog.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {blog.readTime} min read
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                      isLiked 
                        ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' 
                        : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 dark:bg-gray-800 dark:text-gray-400'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span>Like</span>
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Featured Image Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }} 
                className="mb-12"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center border border-gray-200/50 dark:border-gray-800/50">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">Featured image placeholder</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Add your blog image here</p>
                  </div>
                </div>
              </motion.div>

              {/* Article Introduction */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="prose prose-lg max-w-none mb-12">
                <div className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
                  {blog.content.introduction}
                </div>
              </motion.div>

              {/* Article Sections */}
              <div className="space-y-12">
                {blog.content.sections.map((section, index) => (
                  <motion.section 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.4 + index * 0.1 }} 
                    className="prose prose-lg max-w-none"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
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

              {/* Article Conclusion */}
              {blog.content.conclusion && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.8 }} 
                  className="prose prose-lg max-w-none mt-12"
                >
                  <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-900/50 dark:to-purple-950/20 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Conclusion</h3>
                    {blog.content.conclusion}
                  </div>
                </motion.div>
              )}

              {/* Author Bio */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.9 }} 
                className="mt-12"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shrink-0">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {blog.author.name}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {blog.author.bio}
                        </p>
                        <div className="flex items-center space-x-4">
                          {blog.author.social.twitter && (
                            <a 
                              href={`https://twitter.com/${blog.author.social.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-600 transition-colors"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          )}
                          {blog.author.social.linkedin && (
                            <a 
                              href={`https://linkedin.com${blog.author.social.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {blog.author.social.github && (
                            <a 
                              href={`https://github.com/${blog.author.social.github}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1.0 }} 
                className="text-center py-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl text-white mt-16"
              >
                <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Enjoyed This Post?</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  {blog.content.cta}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)} className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
                    Get Free Quote<ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Link href="/blog/personal">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4">
                      More Posts
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Related Posts */}
              {relatedBlogs.length > 0 && (
                <motion.section 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 1.1 }}
                  className="mt-16"
                >
                  <h3 className="text-2xl font-bold mb-8 text-center">Related Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedBlogs.map((relatedBlog) => (
                      <Card key={relatedBlog.slug} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 dark:bg-gray-900/80 dark:border-gray-800/50">
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
                          <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {relatedBlog.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                            {relatedBlog.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-3">
                            <span>{formatDate(relatedBlog.publishedAt)}</span>
                            <span>{relatedBlog.readTime} min read</span>
                          </div>
                          <Link href={`/blog/personal/${relatedBlog.slug}`}>
                            <Button size="sm" variant="outline" className="w-full">
                              Read More
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.section>
              )}
            </article>
          </main>
        </div>

        <GetQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleGetQuote} />
      </div>
    </>
  );
}