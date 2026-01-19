'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container, SpotlightCard } from '../ui/atoms';
import { useScrollReveal } from '../hooks';

export const IntelligenceFeed = () => {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section ref={ref} className={`py-24 md:py-32 bg-[#0f172a] border-t border-white/5 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-flip-up' : 'opacity-0'}`}>
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-4">Market Intelligence</div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Critical Updates</h2>
                    </div>
                    <a href="#" className="group flex items-center text-sm font-bold text-white hover:text-indigo-400 transition-colors bg-white/5 px-6 py-3 rounded-full hover:bg-white/10">
                        View All Analysis <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { tag: "Taxation", date: "Oct 12", title: "Finance Act 2024: Corporate Surcharge Implications", bg: "from-blue-500/10 to-indigo-500/10" },
                        { tag: "Compliance", date: "Sep 08", title: "New Transfer Pricing Documentation Guidelines", bg: "from-emerald-500/10 to-teal-500/10" },
                        { tag: "Advisory", date: "Aug 22", title: "FDI Checklist: Navigating Inbound Investment", bg: "from-purple-500/10 to-pink-500/10" }
                    ].map((item, i) => (
                        <SpotlightCard key={i} className="group p-8 cursor-pointer h-full">
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-indigo-200 text-xs font-bold rounded-full uppercase tracking-wider">{item.tag}</span>
                                    <span className="text-slate-500 text-xs font-mono">{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-indigo-300 transition-colors leading-snug">
                                    {item.title}
                                </h3>
                                <div className="mt-auto flex items-center text-sm font-bold text-slate-400 group-hover:text-white transition-colors">
                                    Read Analysis <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </Container>
        </section>
    );
};
