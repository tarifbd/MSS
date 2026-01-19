'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Container, Button } from '../ui/atoms';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks';

export const ModernCTA = () => {
    return (
        <section className="py-32 md:py-48 relative overflow-hidden bg-[#020617]">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>

            <Container className="relative z-10 text-center">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 tracking-tight leading-[0.9]"
                    >
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 italic">Scale?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto font-light"
                    >
                        Secure your financial foundation today. Partner with the firm that powers industry leaders.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-6 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button variant="glow" className="h-16 px-10 rounded-full text-base shadow-xl shadow-indigo-500/20">
                            Book Strategic Call
                        </Button>
                        <button className="h-16 px-10 rounded-full border border-indigo-400/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-indigo-950 transition-all duration-300">
                            Download Firm Profile
                        </button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-sm text-indigo-300/60 uppercase tracking-widest flex items-center justify-center gap-2 font-semibold"
                    >
                        <ShieldCheck size={16} /> Confidentiality Guaranteed • Response in 24 Hours
                    </motion.p>
                </motion.div>
            </Container>
        </section>
    );
};
