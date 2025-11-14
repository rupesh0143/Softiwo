import { useState, useEffect } from 'react';
import { BREAKPOINTS, MediaQueries } from '@/lib/responsive-utils';

/**
 * Custom hook for responsive design utilities
 * Provides current breakpoint, screen size information, and responsive helpers
 */
export function useResponsive() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });

      // Determine current breakpoint
      if (width >= parseInt(BREAKPOINTS['2xl'])) {
        setCurrentBreakpoint('2xl');
      } else if (width >= parseInt(BREAKPOINTS.xl)) {
        setCurrentBreakpoint('xl');
      } else if (width >= parseInt(BREAKPOINTS.lg)) {
        setCurrentBreakpoint('lg');
      } else if (width >= parseInt(BREAKPOINTS.md)) {
        setCurrentBreakpoint('md');
      } else if (width >= parseInt(BREAKPOINTS.sm)) {
        setCurrentBreakpoint('sm');
      } else if (width >= parseInt(BREAKPOINTS.xs)) {
        setCurrentBreakpoint('xs');
      } else {
        setCurrentBreakpoint('base');
      }
    };

    // Set initial values
    updateScreenSize();

    // Add event listener
    window.addEventListener('resize', updateScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Breakpoint checks
  const isXs = screenSize.width >= parseInt(BREAKPOINTS.xs);
  const isSm = screenSize.width >= parseInt(BREAKPOINTS.sm);
  const isMd = screenSize.width >= parseInt(BREAKPOINTS.md);
  const isLg = screenSize.width >= parseInt(BREAKPOINTS.lg);
  const isXl = screenSize.width >= parseInt(BREAKPOINTS.xl);
  const is2Xl = screenSize.width >= parseInt(BREAKPOINTS['2xl']);

  // Device type detection
  const isMobile = screenSize.width < parseInt(BREAKPOINTS.md);
  const isTablet = screenSize.width >= parseInt(BREAKPOINTS.md) && screenSize.width < parseInt(BREAKPOINTS.lg);
  const isDesktop = screenSize.width >= parseInt(BREAKPOINTS.lg);

  // Orientation detection
  const isLandscape = screenSize.width > screenSize.height;
  const isPortrait = screenSize.height > screenSize.width;

  // Touch device detection (approximation)
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return {
    // Screen dimensions
    screenSize,
    currentBreakpoint,
    
    // Breakpoint flags
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    
    // Device type flags
    isMobile,
    isTablet,
    isDesktop,
    
    // Orientation flags
    isLandscape,
    isPortrait,
    
    // Device capability flags
    isTouchDevice,
    
    // Utility functions
    breakpoint: {
      up: (bp) => screenSize.width >= parseInt(BREAKPOINTS[bp]),
      down: (bp) => screenSize.width < parseInt(BREAKPOINTS[bp]),
      only: (bp) => {
        const bpValue = parseInt(BREAKPOINTS[bp]);
        const nextBp = getNextBreakpoint(bp);
        const nextBpValue = nextBp ? parseInt(BREAKPOINTS[nextBp]) : Infinity;
        
        return screenSize.width >= bpValue && screenSize.width < nextBpValue;
      },
      between: (startBp, endBp) => {
        const startValue = parseInt(BREAKPOINTS[startBp]);
        const endValue = parseInt(BREAKPOINTS[endBp]);
        
        return screenSize.width >= startValue && screenSize.width < endValue;
      },
    },
  };
}

/**
 * Hook for media query matching
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/**
 * Hook for detecting mobile devices
 * @returns {boolean} - Whether the current device is mobile
 */
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${parseInt(BREAKPOINTS.md) - 1}px)`);
}

/**
 * Hook for detecting touch devices
 * @returns {boolean} - Whether the current device supports touch
 */
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouch();
    
    // Re-check when window resizes (for responsive testing)
    window.addEventListener('resize', checkTouch);
    
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  return isTouch;
}

/**
 * Hook for responsive values
 * Returns different values based on current breakpoint
 * @param {Object} values - Object with breakpoint keys and corresponding values
 * @returns {any} - Value for current breakpoint
 */
export function useResponsiveValue(values) {
  const { currentBreakpoint, screenSize } = useResponsive();

  // Order breakpoints from largest to smallest
  const breakpointOrder = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 'base'];
  
  // Find the appropriate value for current screen size
  for (const bp of breakpointOrder) {
    if (values[bp] !== undefined) {
      if (bp === 'base' || screenSize.width >= parseInt(BREAKPOINTS[bp] || 0)) {
        return values[bp];
      }
    }
  }
  
  // Return default value if no matching breakpoint found
  return values.default || values.base || Object.values(values)[0];
}

/**
 * Hook for responsive grid columns
 * @param {Object} columns - Object with breakpoint keys and column counts
 * @returns {number} - Number of columns for current breakpoint
 */
export function useResponsiveColumns(columns) {
  return useResponsiveValue(columns);
}

// Helper function to get next breakpoint
function getNextBreakpoint(currentBp) {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const currentIndex = breakpoints.indexOf(currentBp);
  
  return currentIndex !== -1 && currentIndex < breakpoints.length - 1 
    ? breakpoints[currentIndex + 1] 
    : null;
}

// Export common media queries for convenience
export const commonQueries = {
  isMobile: MediaQueries.maxMd,
  isTablet: `${MediaQueries.md} and ${MediaQueries.maxLg}`,
  isDesktop: MediaQueries.lg,
  isTouch: MediaQueries.touch,
  isDarkMode: MediaQueries.darkMode,
  isPrint: 'print',
  isLandscape: MediaQueries.landscape,
  isPortrait: MediaQueries.portrait,
  prefersReducedMotion: MediaQueries.reducedMotion,
};

export default useResponsive;