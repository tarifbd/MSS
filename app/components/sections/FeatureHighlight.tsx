'use client';

import React from 'react';
import { Check, Activity } from 'lucide-react';
import { Container, Button } from '../ui/atoms';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks';

export const FeatureHighlight = () => {
    return (
        <section className="py-20 md:py-32 bg-[#020617] overflow-hidden relative">
            {/* Dark Angled Background */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#0a1025] transform skew-x-12 translate-x-48 z-0"></div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-bold text-xs uppercase tracking-widest mb-8 border border-indigo-500/20">
                            Audit 2.0
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
                            World-Class Compliance. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Local Expertise.</span>
                        </h2>
                        <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-10 leading-relaxed font-light">
                            Our workflow is designed for speed, accuracy, and absolute defensibility. We leverage tech-enabled audit tools to reduce turnaround time while increasing assurance levels.
                        </p>

                        <ul className="space-y-6 mb-12">
                            {[
                                { t: 'Partner-Led Engagement Model', d: 'Direct access to decision makers.' },
                                { t: 'Real-Time Regulatory Monitoring', d: 'Automated alerts for SRO changes.' },
                                { t: 'Tech-Enabled Audit Workflow', d: 'Paperless, secure, and transparent.' }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex gap-5"
                                >
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{item.t}</h4>
                                        <p className="text-slate-500 text-sm mt-1">{item.d}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>

                        <Button variant="primary" className="rounded-full h-14 w-full sm:w-auto shadow-lg shadow-indigo-900/50">Verify Our Credentials</Button>
                    </motion.div>

                    <motion.div
                        className="relative mt-12 lg:mt-0"
                        initial={{ opacity: 0, rotateY: -20, x: 30 }}
                        whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="glass-panel p-6 md:p-12 rounded-3xl border border-white/10 relative transform rotate-0 lg:rotate-2 transition-all hover:rotate-0 hover:scale-[1.02] bg-[#020617]/40 backdrop-blur-xl">
                            <div className="flex justify-between items-center mb-8 md:mb-10 border-b border-indigo-500/20 pb-6 md:pb-8">
                                <div>
                                    <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest mb-2 font-bold">Entity Status</div>
                                    <div className="text-xl md:text-3xl font-bold text-white font-serif">Multinational Ltd.</div>
                                </div>
                                <div className="px-3 md:px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold rounded-full uppercase border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                    Audit Ready
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[85, 92, 100].map((val, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm text-slate-300 mb-3 font-medium">
                                            <span>Control Set {String.fromCharCode(65 + i)}</span>
                                            <span className="text-white">{val}%</span>
                                        </div>
                                        <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 relative"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${val}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-5 bg-indigo-500/10 rounded-2xl flex items-center gap-5 border border-indigo-500/20">
                                <Activity className="text-indigo-400" size={32} />
                                <div className="text-sm">
                                    <div className="text-white font-bold text-lg">Risk Assessment Complete</div>
                                    <div className="text-indigo-300">0 Material Weaknesses Found</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-indigo-600 blur-[120px] opacity-20 -z-10"></div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
