'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { Container } from '../ui/atoms';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks';

export const GlobalNetwork = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0f172a] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                <div className="w-[300px] md:w-[800px] h-[300px] md:h-[800px] border border-indigo-500/30 rounded-full animate-pulse-glow"></div>
                <div className="absolute w-[200px] md:w-[600px] h-[200px] md:h-[600px] border border-indigo-500/20 rounded-full"></div>
            </div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-violet-500/10 text-violet-300 font-bold text-xs uppercase tracking-widest mb-8 border border-violet-500/20">
                            Borderless Operations
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tight">
                            Global Standards. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Local Mastery.</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                            We operate at the intersection of local statutory requirements and international reporting frameworks (IFRS). Perfect for FDIs and multinational subsidiaries.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { label: "Cross-Border Tax", value: "Optimized" },
                                { label: "Transfer Pricing", value: "Compliant" },
                                { label: "FDI Reporting", value: "Streamlined" },
                                { label: "Forex Regulations", value: "Managed" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors"
                                >
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366F1]"></div>
                                    <div>
                                        <div className="text-white font-bold text-sm">{item.label}</div>
                                        <div className="text-xs text-indigo-300 font-mono mt-1">{item.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative mt-8 lg:mt-0"
                        initial={{ opacity: 0, rotateY: 20, x: 30 }}
                        whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <Globe className="text-indigo-400 mb-6 w-12 h-12" />
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">International Desk</h3>
                                </div>
                                <div className="px-3 py-1 bg-emerald-500/10 rounded-full text-emerald-400 text-xs font-mono border border-emerald-500/20 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    ACTIVE
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { l: "Jurisdictions", v: "BD / UK / US" },
                                    { l: "Reporting", v: "IFRS / IAS" },
                                    { l: "Advisory", v: "Inbound Investment" }
                                ].map((r, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 text-sm md:text-base last:border-0">
                                        <span className="text-slate-400 font-medium">{r.l}</span>
                                        <span className="text-white font-mono">{r.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ambient Glows */}
                        <div className="absolute -z-10 top-10 -right-10 w-48 h-48 bg-indigo-600 rounded-full blur-[100px] opacity-30"></div>
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-violet-600 rounded-full blur-[120px] opacity-30"></div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
