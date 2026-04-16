import { useEffect, useRef, useState } from 'react';

function useIntersection(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [options]);

  return [targetRef, isIntersecting];
}

export default useIntersection;