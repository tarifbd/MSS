'use client';

import React from 'react';
import { Container, Button } from '../ui/atoms';
import { useScrollReveal } from '../hooks';

export const TalentPortal = () => {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section ref={ref} className={`py-24 bg-gradient-to-r from-[#1e1b4b] to-[#312e81] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left p-8 md:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join the Elite.</h2>
                        <p className="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed font-light">
                            We don&apos;t just audit numbers; we engineer careers. Join a culture defined by high-stakes engagement and continuous technical evolution.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {['Articled Students', 'Qualified Affiliates', 'Legal Experts'].map((role) => (
                                <span key={role} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white border border-white/20 font-medium">
                                    {role}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button variant="glow" className="h-16 px-10 text-indigo-950 font-bold text-lg rounded-full shadow-2xl shadow-white/10">
                            View Opportunities
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
