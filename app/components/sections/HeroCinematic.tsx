'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, Button } from '../ui/atoms';

export const HeroCinematic = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20
            }
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        // Subtle parallax effect
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setMousePos({ x, y });
    };

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-[#020617] to-[#020617] z-0"></div>

            {/* Animated Orbs with Parallax */}
            <div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] transition-transform duration-100 ease-out z-0"
                style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
            ></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] transition-transform duration-100 ease-out z-0"
                style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
            ></div>

            <Container className="relative z-10">
                <motion.div
                    className="flex flex-col items-center text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Status Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism text-indigo-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-10 hover:bg-white/10 transition-colors duration-300 cursor-default border-indigo-500/20"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        System Operational • Global Compliance Active
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] md:leading-[0.95] tracking-tight max-w-5xl mx-auto"
                    >
                        Accelerate Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-indigo-500">Financial Clarity.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light tracking-wide"
                    >
                        We merge Big-4 rigor with modern agility. Transform your compliance from a burden into a strategic growth engine.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 sm:gap-6 px-4 md:px-0"
                    >
                        <Button variant="glow" className="w-full sm:min-w-[220px] rounded-full h-14 text-sm tracking-widest">
                            Start Your Audit <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="w-full sm:min-w-[220px] rounded-full h-14 text-sm tracking-widest">
                            Explore Services
                        </Button>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-24 md:mt-32 w-full max-w-5xl"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-white/5 glass-morphism rounded-3xl p-8 border border-white/5 bg-[#0A0F1E]/50">
                            {[
                                { label: "MNCs Served", val: "50+" },
                                { label: "Capital Audited", val: "$2B+" },
                                { label: "Compliance", val: "100%" },
                                { label: "Experience", val: "25Y+" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center group cursor-default">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors duration-500">{stat.val}</div>
                                    <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold group-hover:text-white transition-colors">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};
