import { useEffect, useRef, useState } from 'react';

export function useScrollVisibility(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
