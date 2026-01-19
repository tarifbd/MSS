'use client';

import React from 'react';
import { Landmark, Cpu, Zap, Network, ArrowRight } from 'lucide-react';
import { Container, SpotlightCard } from '../ui/atoms';
import { useScrollReveal } from '../hooks';

export const SectorMatrix = () => {
    const sectors = [
        { title: "Fintech & Banking", icon: <Landmark className="w-6 h-6" />, color: "text-blue-400" },
        { title: "RMG & Manufacturing", icon: <Cpu className="w-6 h-6" />, color: "text-emerald-400" },
        { title: "Energy & Power", icon: <Zap className="w-6 h-6" />, color: "text-yellow-400" },
        { title: "Telecommunications", icon: <Network className="w-6 h-6" />, color: "text-fuchsia-400" },
    ];
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section ref={ref} className={`py-24 bg-[#020617] border-t border-white/5 relative transition-all duration-1000 ${isVisible ? 'opacity-100 animate-flip-up' : 'opacity-0'}`}>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {sectors.map((s, i) => (
                        <SpotlightCard key={i} className="group p-8 cursor-pointer h-full">
                            <div className={`mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500 border border-white/5 ${s.color}`}>
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                Tailored compliance frameworks.
                            </p>
                            <div className="mt-auto flex items-center text-xs font-bold text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity group-hover:translate-x-2 duration-300">
                                View Case Studies <ArrowRight className="ml-2 w-3 h-3" />
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </Container>
        </section>
    );
};
