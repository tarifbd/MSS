'use client';

import { useState, useEffect, useRef } from 'react';

// Hook for mouse position (Global)
export const useMousePosition = () => {
    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', updateMouse);
        return () => window.removeEventListener('mousemove', updateMouse);
    }, []);
};

// Hook for scroll-triggered animations
export const useScrollReveal = (threshold = 0.1) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    return [ref, isVisible] as const;
};
