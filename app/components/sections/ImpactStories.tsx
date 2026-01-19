'use client';

import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { Container } from '../ui/atoms';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks';

export const ImpactStories = () => {
    const [ref, isVisible] = useScrollReveal(0.1);
    const cases = [
        {
            client: "Multinational Textile Conglomerate",
            tag: "Audit & Assurance",
            challenge: "Complex cross-border transfer pricing disputes.",
            result: "Zero-penalty resolution & optimized tax structure.",
            stat: "$45M Saved"
        },
        {
            client: "Leading Fintech Provider",
            tag: "Advisory",
            challenge: "Pre-IPO valuation and due diligence readiness.",
            result: "Successful listing with 3x oversubscription.",
            stat: "IPO Ready"
        },
        {
            client: "Energy Sector Giant",
            tag: "Compliance",
            challenge: "Regulatory overhaul & internal control failure.",
            result: "100% compliance rating achieved in 6 months.",
            stat: "0 Risk"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section className="py-20 md:py-32 bg-[#020617] border-t border-white/5 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-4">Client Impact</div>
                        <h2 className="text-3xl md:text-5xl font-serif text-white">Stories of Scale.</h2>
                    </motion.div>
                    <div className="flex gap-2">
                        <button className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500 transition-colors">
                            <ArrowRight className="rotate-180 w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <motion.div
                    className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-8 lg:pb-0 snap-x snap-mandatory no-scrollbar"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {cases.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="snap-center flex-shrink-0 w-[85vw] md:w-[400px] lg:w-auto glass-panel p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <Quote className="text-indigo-500 w-8 h-8 opacity-50" />
                                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-slate-300 border border-white/10 uppercase tracking-wider">
                                    {item.tag}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                                {item.client}
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold mb-1">Challenge</div>
                                    <p className="text-sm text-slate-400">{item.challenge}</p>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold mb-1">Outcome</div>
                                    <p className="text-sm text-slate-300">{item.result}</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                                    {item.stat}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};
