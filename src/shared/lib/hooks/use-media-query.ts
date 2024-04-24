import { useEffect, useState } from 'react';

export const useMediaQuery = (breakpoint: number): boolean => {
  const [isCurrentBreakpoint, setCurrentBreakpoint] = useState(window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches);
  useEffect(() => {
    const handleResize = () => setCurrentBreakpoint(window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);// Added dependency
  return isCurrentBreakpoint;
};
