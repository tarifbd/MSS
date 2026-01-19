'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Container, Button } from '../ui/atoms';
import { useScrollReveal } from '../hooks';
import { IconAudit, IconTax, IconAdvisory, IconBPO } from '../ui/icons';

export const ServicesCommandCenter = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [ref, isVisible] = useScrollReveal(0.1);

    const services = [
        {
            id: 0,
            title: "Audit & Assurance",
            shortTitle: "Audit",
            category: "Verification",
            icon: <IconAudit />,
            desc: "Data-driven verification using advanced analytics for absolute financial certainty.",
            features: ["Statutory Audit", "Internal Control Review", "Forensic Investigation", "Regulatory Compliance"]
        },
        {
            id: 1,
            title: "Tax Optimization",
            shortTitle: "Tax",
            category: "Structuring",
            icon: <IconTax />,
            desc: "Strategic structuring to navigate complex landscapes and maximize efficiency.",
            features: ["Corporate Tax Filing", "Transfer Pricing", "VAT & SD Consulting", "Tax Litigation Support"]
        },
        {
            id: 2,
            title: "Corporate Advisory",
            shortTitle: "Advisory",
            category: "Growth",
            icon: <IconAdvisory />,
            desc: "M&A support, valuation, and due diligence for high-stakes capital decisions.",
            features: ["Business Valuation", "Mergers & Acquisitions", "Due Diligence", "Investment Structuring"]
        },
        {
            id: 3,
            title: "BPO Services",
            shortTitle: "BPO",
            category: "Efficiency",
            icon: <IconBPO />,
            desc: "Streamlined operations. Payroll, bookkeeping, and HR management optimized for efficiency.",
            features: ["Payroll Management", "Bookkeeping & Accounts", "HR Solutions", "Virtual CFO"]
        }
    ];

    return (
        <section ref={ref} className={`py-20 md:py-32 bg-[#020617] relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} id="services">
            <Container>
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                        Precision Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Performance.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        Select a specialized practice area to explore our capabilities.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Controls (Tabs) */}
                    <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-3">
                        {services.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveTab(s.id)}
                                className={`text-left p-5 rounded-2xl transition-all duration-500 group relative overflow-hidden border flex flex-col items-start ${activeTab === s.id
                                        ? 'bg-indigo-900/20 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)] scale-[1.02]'
                                        : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10 text-slate-500'
                                    }`}
                            >
                                <div className="relative z-10 w-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-xs font-bold uppercase tracking-wider ${activeTab === s.id ? 'text-indigo-400' : 'text-slate-500'}`}>
                                            0{s.id + 1}
                                        </span>
                                        {activeTab === s.id && <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>}
                                    </div>
                                    <span className={`block text-lg md:text-xl font-bold ${activeTab === s.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                                        <span className="lg:hidden">{s.shortTitle}</span>
                                        <span className="hidden lg:inline">{s.title}</span>
                                    </span>
                                </div>
                                {activeTab === s.id && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-transparent opacity-50"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Display (Card) */}
                    <div className="lg:col-span-8">
                        {services.map((s) => (
                            activeTab === s.id && (
                                <div key={s.id} className="h-full glass-morphism rounded-[2rem] p-8 md:p-12 relative overflow-hidden animate-fade-scale bg-[#0A0F1E]/80">
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-xl">
                                                {s.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-wider mb-4 border border-indigo-500/20">
                                                    {s.category} Capability
                                                </div>
                                                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
                                                    {s.title}
                                                </h3>
                                                <p className="text-slate-300 text-lg leading-relaxed max-w-xl font-light">
                                                    {s.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                            {s.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors group cursor-default">
                                                    <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_10px_#6366F1]">
                                                        <Check size={10} strokeWidth={4} />
                                                    </div>
                                                    <span className="font-medium text-slate-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                                            <Button variant="primary" className="rounded-full w-full sm:w-auto h-12 shadow-lg shadow-indigo-500/20">
                                                Explore {s.category}
                                            </Button>
                                            <button className="px-8 py-3 rounded-full border border-white/20 text-slate-300 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-indigo-950 transition-all w-full sm:w-auto h-12">
                                                Download Brochure
                                            </button>
                                        </div>
                                    </div>

                                    {/* Atmospheric Glow */}
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
