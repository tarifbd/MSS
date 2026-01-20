'use client';

import React from 'react';
import { Users, Briefcase } from 'lucide-react';
import { Container } from '../ui/atoms';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks';

export const TheVanguard = () => {
    return (
        <section className="py-24 md:py-40 bg-[#020617] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20 md:mb-32"
                >
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">The Vanguard</h2>
                    <div className="h-1.5 w-24 bg-indigo-500 mx-auto mb-8 rounded-full" />
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Architects of financial clarity. Led by industry veterans with deep-rooted regulatory relationships.
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-24 md:mb-40 px-4 md:px-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {[
                        { name: "Mohammad Sirajus Salekin FCA", role: "Managing Partner", spec: "Audit & Strategy", image: '/images/partner/fca.jpeg' },
                        { name: "Partner Name FCA", role: "Senior Partner", spec: "Taxation & Legal", image: null },
                        { name: "Partner Name FCA", role: "Partner", spec: "Corporate Advisory", image: null },
                    ].map((leader, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                                }
                            }}
                            className="group relative"
                        >
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                                <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-700">
                                    {leader.image ? (
                                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 forced-colors:grayscale-0" />
                                    ) : (
                                        <Users size={80} strokeWidth={0.5} />
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="font-serif text-3xl font-bold text-white mb-2">{leader.name}</div>
                                    <div className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">{leader.role}</div>
                                    <div className="h-0.5 w-0 group-hover:w-full bg-indigo-500 mt-4 transition-all duration-700 ease-out" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Management Grid */}
                <div className="border-t border-white/10 pt-24 md:pt-32">
                    <motion.div
                        className="text-center mb-16 md:mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Directors & Key Management</h3>
                        <p className="text-slate-500 text-lg uppercase tracking-[0.2em] font-medium">The Backbone of Excellence</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {[
                            { name: "Director Name FCA", role: "Director", spec: "Audit & Assurance", image: null },
                            { name: "Director Name ACA", role: "Director", spec: "Taxation Services", image: null },
                            { name: "Director Name FCS", role: "Director", spec: "Corporate Affairs", image: null },
                            { name: "Manager Name", role: "Senior Manager", spec: "Advisory & Consulting", image: null },
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                                    }
                                }}
                                className="group relative"
                            >
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 shadow-xl bg-slate-900/40 backdrop-blur-sm">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-800">
                                        {m.image ? (
                                            <img src={m.image} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                        ) : (
                                            <Briefcase size={64} strokeWidth={0.5} />
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="font-serif text-2xl font-bold text-white mb-1">{m.name}</div>
                                        <div className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{m.role}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{m.spec}</p>
                                        <div className="h-0.5 w-0 group-hover:w-full bg-indigo-500 mt-4 transition-all duration-700 ease-out" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
