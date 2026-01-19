'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Container, Button } from '../ui/atoms';
import { useScrollReveal } from '../hooks';

export const ModernCTA = () => {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section ref={ref} className={`py-32 md:py-48 relative overflow-hidden bg-[#020617] transition-all duration-1000 ${isVisible ? 'opacity-100 animate-zoom-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>

            <Container className="relative z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 tracking-tight leading-[0.9]">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 italic">Scale?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto font-light">
                        Secure your financial foundation today. Partner with the firm that powers industry leaders.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
                        <Button variant="glow" className="h-16 px-10 rounded-full text-base shadow-xl shadow-indigo-500/20">
                            Book Strategic Call
                        </Button>
                        <button className="h-16 px-10 rounded-full border border-indigo-400/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-indigo-950 transition-all duration-300">
                            Download Firm Profile
                        </button>
                    </div>

                    <p className="mt-12 text-sm text-indigo-300/60 uppercase tracking-widest flex items-center justify-center gap-2 font-semibold">
                        <ShieldCheck size={16} /> Confidentiality Guaranteed • Response in 24 Hours
                    </p>
                </div>
            </Container>
        </section>
    );
};
