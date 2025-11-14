/**
 * Responsive Utility Classes and Configurations
 * Centralized responsive design utilities for consistent mobile-first approach
 */

// Breakpoint definitions matching Tailwind config
export const BREAKPOINTS = {
  xs: '475px',
  sm: '640px', 
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Common responsive spacing patterns
export const RESPONSIVE_SPACING = {
  // Padding patterns
  padding: {
    section: 'py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-12 xl:px-20 2xl:px-32',
    container: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32',
    page: 'p-4 sm:p-6 lg:p-8 xl:p-12',
    card: 'p-4 sm:p-6',
    header: 'px-4 py-3 sm:px-6 sm:py-4 lg:px-12',
  },
  
  // Margin patterns
  margin: {
    section: 'mb-8 sm:mb-12 lg:mb-16',
    element: 'mb-4 sm:mb-6',
    small: 'mb-2 sm:mb-3',
  },

  // Gap patterns for grids and flex
  gap: {
    grid: 'gap-3 sm:gap-4 lg:gap-6',
    flex: 'space-x-2 sm:space-x-3 lg:space-x-4',
    stack: 'space-y-4 sm:space-y-6 lg:space-y-8',
  }
};

// Typography responsive patterns
export const RESPONSIVE_TYPOGRAPHY = {
  heading: {
    hero: 'text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight',
    h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
    h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold',
    h3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold',
    h4: 'text-base sm:text-lg md:text-xl font-semibold',
    subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
  },
  
  body: {
    large: 'text-base sm:text-lg lg:text-xl',
    normal: 'text-sm sm:text-base',
    small: 'text-xs sm:text-sm',
  },
  
  button: {
    large: 'text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6',
    normal: 'text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3',
    small: 'text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2',
  }
};

// Grid patterns for different content types
export const RESPONSIVE_GRIDS = {
  cards: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  features: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  stats: 'grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4',
  testimonials: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  services: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  portfolio: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  form: 'grid grid-cols-1 md:grid-cols-2',
};

// Interactive element sizing for touch-friendly design
export const TOUCH_TARGETS = {
  minimum: 'min-h-[44px] min-w-[44px]', // Apple's recommended minimum
  button: 'min-h-[44px] min-w-[80px]',
  icon: 'min-h-[40px] min-w-[40px]',
  nav: 'min-h-[48px]',
};

// Container max-widths for different breakpoints
export const RESPONSIVE_CONTAINERS = {
  narrow: 'max-w-2xl mx-auto',
  normal: 'max-w-4xl mx-auto',
  wide: 'max-w-6xl mx-auto',
  full: 'max-w-7xl mx-auto',
  responsive: 'w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto',
};

// Commonly used responsive component patterns
export const RESPONSIVE_PATTERNS = {
  // Mobile menu patterns
  mobileMenu: {
    overlay: 'fixed inset-0 z-50 lg:hidden',
    backdrop: 'fixed inset-0 bg-black/50 backdrop-blur-sm',
    panel: 'fixed left-0 top-0 h-full w-72 xs:w-80 sm:w-84 bg-white dark:bg-gray-950 shadow-2xl',
  },
  
  // Header patterns
  header: {
    sticky: 'sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-950/80',
    height: 'h-12 xs:h-14 sm:h-16',
    nav: 'hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8',
  },
  
  // Card patterns
  card: {
    base: 'rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80',
    hover: 'hover:shadow-xl transition-all duration-300',
    padding: 'p-4 sm:p-6',
  },
  
  // Button patterns
  button: {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200',
    sizes: {
      sm: 'h-8 px-3 text-xs min-w-[60px]',
      default: 'h-10 px-4 py-2 min-w-[80px]',
      lg: 'h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base min-w-[120px]',
    }
  },
  
  // Layout patterns
  layout: {
    sidebar: 'hidden lg:block pb-12 min-h-screen w-56 xl:w-64 2xl:w-72',
    main: 'flex-1 flex flex-col overflow-hidden',
    content: 'flex-1 overflow-auto p-4 sm:p-6 lg:p-8 xl:p-12',
  },
};

// Utility functions for responsive design
export const ResponsiveUtils = {
  // Get appropriate spacing class based on size
  getSpacing: (type, size = 'normal') => {
    return RESPONSIVE_SPACING[type]?.[size] || '';
  },
  
  // Get appropriate typography class
  getTypography: (type, size = 'normal') => {
    return RESPONSIVE_TYPOGRAPHY[type]?.[size] || '';
  },
  
  // Get appropriate grid class
  getGrid: (type) => {
    return RESPONSIVE_GRIDS[type] || 'grid grid-cols-1';
  },
  
  // Get touch-friendly sizing
  getTouchTarget: (type = 'minimum') => {
    return TOUCH_TARGETS[type] || TOUCH_TARGETS.minimum;
  },
  
  // Get container class
  getContainer: (size = 'normal') => {
    return RESPONSIVE_CONTAINERS[size] || RESPONSIVE_CONTAINERS.normal;
  },
  
  // Get responsive pattern
  getPattern: (category, type) => {
    return RESPONSIVE_PATTERNS[category]?.[type] || '';
  },
};

// Media query helpers for use in JavaScript
export const MediaQueries = {
  xs: `(min-width: ${BREAKPOINTS.xs})`,
  sm: `(min-width: ${BREAKPOINTS.sm})`,
  md: `(min-width: ${BREAKPOINTS.md})`,
  lg: `(min-width: ${BREAKPOINTS.lg})`,
  xl: `(min-width: ${BREAKPOINTS.xl})`,
  '2xl': `(min-width: ${BREAKPOINTS['2xl']})`,
  
  // Max-width queries
  maxXs: `(max-width: ${parseInt(BREAKPOINTS.xs) - 1}px)`,
  maxSm: `(max-width: ${parseInt(BREAKPOINTS.sm) - 1}px)`,
  maxMd: `(max-width: ${parseInt(BREAKPOINTS.md) - 1}px)`,
  maxLg: `(max-width: ${parseInt(BREAKPOINTS.lg) - 1}px)`,
  maxXl: `(max-width: ${parseInt(BREAKPOINTS.xl) - 1}px)`,
  
  // Orientation and special queries
  landscape: '(orientation: landscape)',
  portrait: '(orientation: portrait)',
  touch: '(hover: none) and (pointer: coarse)',
  mouse: '(hover: hover) and (pointer: fine)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  darkMode: '(prefers-color-scheme: dark)',
};

export default ResponsiveUtils;