'use client';

import React from 'react';
import { Container, Button } from '../ui/atoms';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks';

export const TalentPortal = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#1e1b4b] to-[#312e81] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <Container className="relative z-10">
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 text-center lg:text-left p-6 md:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6"
                        >
                            Join the Elite.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed font-light"
                        >
                            We don&apos;t just audit numbers; we engineer careers. Join a culture defined by high-stakes engagement and continuous technical evolution.
                        </motion.p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {['Articled Students', 'Qualified Affiliates', 'Legal Experts'].map((role, i) => (
                                <motion.span
                                    key={role}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="px-4 py-2 bg-white/10 rounded-full text-sm text-white border border-white/20 font-medium"
                                >
                                    {role}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        <Button variant="glow" className="h-16 px-10 text-indigo-950 font-bold text-lg rounded-full shadow-2xl shadow-white/10">
                            View Opportunities
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};
