import { useEffect, useRef, useState } from 'react';

export default function useAppear({
  threshold = 0,
  rootMargin = '0px',
  once = true
} = {}) {
  const [isAppear, setIsAppear] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAppear(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setIsAppear(false);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isAppear];
}