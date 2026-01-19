'use client';

import React from 'react';
import { Code, Server, Layers, Activity, Smartphone } from 'lucide-react';
import { Container } from '../ui/atoms';
import { useScrollReveal } from '../hooks';

export const InnovationHub = () => {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section ref={ref} className={`py-20 md:py-32 bg-[#0f172a] relative transition-all duration-1000 ${isVisible ? 'opacity-100 animate-blur-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-noise opacity-20"></div>

            <Container className="relative z-10">
                <div className="bg-gradient-to-br from-indigo-900/50 to-violet-900/50 rounded-3xl p-8 md:p-20 border border-white/10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse-glow"></div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/20 mb-6">
                                <Code size={14} /> Digital Transformation
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                                Audit at the Speed of Data.
                            </h2>
                            <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                                We leverage proprietary AI tools and data analytics to move beyond sampling. Our digital audit suite analyzes 100% of transactions for anomalies, delivering absolute assurance.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Server, label: "Cloud Verification" },
                                    { icon: Layers, label: "Blockchain Audit" },
                                    { icon: Activity, label: "Predictive Risk AI" },
                                    { icon: Smartphone, label: "Paperless Portal" }
                                ].map((tech, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm">
                                        <tech.icon className="text-cyan-400 w-5 h-5" />
                                        <span className="text-sm font-bold text-white">{tech.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-black/40 border border-white/10 p-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-50"></div>

                                <div className="space-y-3 font-mono text-xs text-cyan-500/50 overflow-hidden h-full">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="flex gap-4 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                                            <span className="w-8 text-slate-600">0{i + 1}</span>
                                            <span className="w-24 bg-cyan-500/20 h-4 rounded"></span>
                                            <span className="w-full bg-indigo-500/10 h-4 rounded"></span>
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute bottom-6 right-6 p-4 bg-cyan-500 text-[#0f172a] rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/20">
                                    System Active
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
