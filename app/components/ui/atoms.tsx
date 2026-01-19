'use client';

import React, { useRef, useState } from 'react';

// --- UI ATOMS ---

export const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "glow" }) => {

    const base = "relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm overflow-hidden group touch-manipulation z-10";

    const variants = {
        primary: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95",
        outline: "bg-transparent border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:text-white hover:border-indigo-400 active:scale-95",
        glow: "bg-white text-indigo-950 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(165,180,252,0.6)] hover:scale-105 active:scale-95",
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
};

export const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
);

export const SpotlightCard = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#0B1221] transition-all duration-300 hover:border-indigo-500/30 ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
                }}
            />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
};
