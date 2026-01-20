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
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (currentRef) observer.unobserve(currentRef);
                }
            },
            { threshold }
        );

        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [threshold]);

    return [ref, isVisible] as const;
};
