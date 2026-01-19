'use client';

import React from 'react';
import { Users, Briefcase } from 'lucide-react';
import { Container } from '../ui/atoms';
import { useScrollReveal } from '../hooks';

export const TheVanguard = () => {
    const leaders = [
        { name: "Khadimul Hasan FCA", role: "Managing Partner", spec: "Audit & Strategy" },
        { name: "Partner Name FCA", role: "Senior Partner", spec: "Taxation & Legal" },
        { name: "Partner Name FCA", role: "Partner", spec: "Corporate Advisory" },
    ];

    const management = [
        { name: "Director Name FCA", role: "Director", spec: "Audit & Assurance" },
        { name: "Director Name ACA", role: "Director", spec: "Taxation Services" },
        { name: "Director Name FCS", role: "Director", spec: "Corporate Affairs" },
        { name: "Manager Name", role: "Senior Manager", spec: "Advisory & Consulting" },
    ];

    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section ref={ref} className={`py-20 md:py-32 bg-[#F8FAFC] transition-all duration-1000 ${isVisible ? 'opacity-100 animate-zoom-in' : 'opacity-0'}`}>
            <Container>
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] mb-6">The Vanguard</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Architects of financial clarity. Led by industry veterans with deep-rooted regulatory relationships.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-28 px-4 md:px-0">
                    {leaders.map((leader, i) => (
                        <div key={i} className="group bg-white p-3 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                            <div className="aspect-[4/5] bg-slate-100 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                    <Users size={64} strokeWidth={1} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="font-serif text-2xl font-bold">{leader.name}</div>
                                        <div className="text-indigo-300 text-sm font-medium mt-1">{leader.role}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 pb-4 md:hidden">
                                <h3 className="text-lg font-bold text-[#0f172a]">{leader.name}</h3>
                                <p className="text-indigo-600 text-sm font-medium">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Management Grid */}
                <div className="border-t border-slate-200 pt-16 md:pt-24">
                    <div className="text-center mb-12 md:mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Directors & Key Management</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {management.map((m, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group cursor-default">
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    <Briefcase size={20} />
                                </div>
                                <h4 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-indigo-600 transition-colors">{m.name}</h4>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4 group-hover:text-indigo-400">{m.role}</div>
                                <p className="text-sm text-slate-500 font-medium border-t border-slate-100 pt-4">{m.spec}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
