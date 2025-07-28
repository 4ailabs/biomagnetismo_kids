
import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const { root = null, rootMargin = '0px', threshold = 0.1, triggerOnce = true } = options;
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
            setIntersecting(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, root, rootMargin, threshold, triggerOnce]);

  return isIntersecting;
}

export default useIntersectionObserver;
