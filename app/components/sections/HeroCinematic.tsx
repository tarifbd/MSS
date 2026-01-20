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
            className="relative min-h-[100dvh] flex items-center justify-center overflow-x-hidden bg-[#020617] pt-32 md:pt-20"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-[#020617] to-[#020617] z-0"></div>

            {/* Animated Orbs with Parallax - Shrunk for mobile */}
            <div
                className="absolute top-1/4 left-1/4 w-[150px] md:w-[500px] h-[150px] md:h-[500px] bg-indigo-600/20 rounded-full blur-[60px] md:blur-[120px] transition-transform duration-100 ease-out z-0"
                style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
            ></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-[120px] md:w-[400px] h-[120px] md:h-[400px] bg-violet-600/20 rounded-full blur-[50px] md:blur-[100px] transition-transform duration-100 ease-out z-0"
                style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
            ></div>

            <Container className="relative z-10">
                <motion.div
                    className="flex flex-col items-center text-center w-full max-w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Status Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass-morphism text-indigo-300 text-[9px] md:text-xs font-bold uppercase tracking-widest mb-8 md:mb-10 hover:bg-white/10 transition-colors duration-300 cursor-default border border-indigo-500/20"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        System Operational • Global Compliance Active
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-5xl md:text-8xl font-serif font-bold text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tight w-full max-w-[95vw] sm:max-w-5xl mx-auto px-4 text-balance"
                    >
                        Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-indigo-500 whitespace-nowrap sm:whitespace-normal">Financial Clarity.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-xl text-slate-400 w-full max-w-[90vw] md:max-w-2xl mb-10 md:mb-12 leading-relaxed font-light tracking-wide px-2 md:px-0"
                    >
                        We merge Big-4 rigor with modern agility. Transform your compliance from a burden into a strategic growth engine.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row items-center justify-center gap-2 sm:gap-6 px-4 sm:px-0 w-full"
                    >
                        <Button variant="glow" className="w-[165px] sm:w-[280px] h-[64px] sm:h-[72px] rounded-sm py-0 px-2 sm:px-4">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-col text-left leading-tight font-sans font-black">
                                    <span className="text-[10px] sm:text-[14px] opacity-80">START YOUR</span>
                                    <span className="text-[16px] sm:text-[20px]">AUDIT</span>
                                </div>
                                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-1 sm:ml-4 flex-shrink-0" />
                            </div>
                        </Button>
                        <Button variant="outline" className="w-[165px] sm:w-[280px] h-[64px] sm:h-[72px] rounded-sm border-indigo-500/50 p-2">
                            <span className="font-sans font-black text-[11px] sm:text-[16px] tracking-[0.05em] sm:tracking-[0.1em]">EXPLORE SERVICES</span>
                        </Button>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-20 md:mt-32 w-full max-w-[95vw] md:max-w-5xl px-0"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-0 md:divide-x divide-white/5 glass-morphism rounded-xl md:rounded-3xl p-4 md:p-8 border border-white/5 bg-[#0A0F1E]/50 w-full">
                            {[
                                { label: "MNCs Served", val: "50+" },
                                { label: "Capital Audited", val: "$2B+" },
                                { label: "Compliance", val: "100%" },
                                { label: "Experience", val: "25Y+" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center group cursor-default py-2">
                                    <div className="text-base md:text-4xl font-bold text-white mb-1 md:mb-2 tracking-tight group-hover:text-indigo-400 transition-colors duration-500">{stat.val}</div>
                                    <div className="text-[7px] md:text-xs text-slate-500 uppercase tracking-widest font-bold group-hover:text-white transition-colors">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Scrolling Sectors Marquee */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 md:mt-16 w-full max-w-full overflow-hidden relative"
                    >
                        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

                        <div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-12 py-4">
                            {[1, 2].map((loop) => (
                                <div key={loop} className="flex gap-8 md:gap-12 items-center">
                                    {["Banking Leaders", "Energy Leaders", "Telecom Leaders", "Textiles Leaders", "Fintech Leaders", "Manufacturing Giants", "Pharma Innovators"].map((sector, idx) => (
                                        <div key={idx} className="flex items-center gap-2 md:gap-3">
                                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                                            <span className="text-xs md:text-base font-medium text-slate-400/80 hover:text-white transition-colors cursor-default whitespace-nowrap">
                                                {sector}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};
