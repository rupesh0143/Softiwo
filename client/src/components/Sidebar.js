"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Target,
  BarChart3,
  Users,
  Settings,
  Plus,
  X,
  Zap
} from 'lucide-react';

const sidebarItems = [
  {
    title: 'Portfolio',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Services',
    href: '/campaigns',
    icon: Target,
  },
  {
    title: 'Technologies',
    href: '/technologies',
    icon: BarChart3,
  },
  {
    title: 'About Us',
    href: '/about',
    icon: Users,
  },
  {
    title: 'Get Quote',
    href: '/contact',
    icon: Settings,
  },
];

export function Sidebar({ className, isMobile = false, onClose }) {
  const pathname = usePathname();

  const sidebarContent = (
    <div className="space-y-4 py-4 h-full flex flex-col">
      <div className="px-3 sm:px-4 py-2">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 shrink-0 shadow-lg" />
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent truncate">
              <Link href="/">
              Softiwo
              </Link>
            </h2>
          </div>
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 shrink-0 transition-all duration-200"
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {/* <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 px-4 py-4 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-[-1px]"
        >
          <Plus className="h-5 w-5 shrink-0" />
          <span className="truncate">Start Project</span>
        </motion.button> */}
      </div>
      
      <div className="px-2 space-y-2 flex-1 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.href}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                onClick={isMobile ? onClose : undefined}
                className={cn(
                  "group flex items-center space-x-3 px-4 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 w-full relative overflow-hidden",
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-gray-100"
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />
                )}
                
                <div className={cn(
                  "p-2 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-white/20" 
                    : "bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700"
                )}>
                  <item.icon className={cn(
                    "h-5 w-5 shrink-0 transition-colors",
                    isActive 
                      ? "text-white" 
                      : "text-gray-600 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100"
                  )} />
                </div>
                <span className="truncate relative z-10">{item.title}</span>
                
                {/* Hover effect */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
      
      {/* {!isMobile && (
        <div className="px-4 pt-4 mt-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-indigo-950/30 border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mr-3">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                Upgrade to Pro
              </h3>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Unlock AI-powered insights, advanced automation, and unlimited campaigns.
            </p>
            <button className="w-full px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Upgrade Now
            </button>
          </motion.div>
        </div>
      )} */}
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />
        <div className="fixed left-0 top-0 h-full w-64 sm:w-72 bg-white dark:bg-gray-950 shadow-xl">
          {sidebarContent}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "hidden lg:block pb-12 min-h-screen w-64 bg-white/50 backdrop-blur-sm border-r border-gray-200 dark:bg-gray-950/50 dark:border-gray-800",
      className
    )}>
      {sidebarContent}
    </div>
  );
}