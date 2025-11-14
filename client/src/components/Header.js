"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-12 xs:h-14 sm:h-16 items-center justify-between px-3 xs:px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
            src="/Softiwo01.png"
            width={100}
            height={38}
            alt='Softiwo logo'
            className="w-20 h-auto xs:w-24 sm:w-32 lg:w-36"
            priority
            />

          {/* <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate">
            Softiwo
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {/* Theme Toggle - Hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
            <Moon className="h-4 w-4" />
          </div>

          <Button aschild className="hidden lg:inline-flex" size="sm">
            <Link href="/settings">Get Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors touch-target"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/95 shadow-lg"
        >
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-3 px-2 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors touch-target"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-between py-3 px-2 sm:hidden border-t border-gray-200/50 dark:border-gray-700/50 mt-2 pt-4">
              <span className="text-base font-medium text-gray-600 dark:text-gray-300">Dark Mode</span>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch 
                  className="touch-target h-6 w-10"
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                />
                <Moon className="h-4 w-4" />
              </div>
            </div>
            
            <div className="pt-4">
              <Button aschild className="w-full touch-target">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}