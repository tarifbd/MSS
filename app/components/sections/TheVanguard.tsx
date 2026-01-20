'use client';

import React from 'react';
import { Users, Briefcase } from 'lucide-react';
import { Container } from '../ui/atoms';
import { motion } from 'framer-motion';

export const TheVanguard = () => {
    return (
        <section className="py-20 md:py-32 bg-[#F8FAFC]">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] mb-6">The Vanguard</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Architects of financial clarity. Led by industry veterans with deep-rooted regulatory relationships.
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-28 px-4 md:px-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {[
                        { name: "Khadimul Hasan FCA", role: "Managing Partner", spec: "Audit & Strategy" },
                        { name: "Partner Name FCA", role: "Senior Partner", spec: "Taxation & Legal" },
                        { name: "Partner Name FCA", role: "Partner", spec: "Corporate Advisory" },
                    ].map((leader, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="group bg-white p-3 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                        >
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
                        </motion.div>
                    ))}
                </motion.div>

                {/* Management Grid */}
                <div className="border-t border-slate-200 pt-16 md:pt-24">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Directors & Key Management</h3>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
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
                            { name: "Director Name FCA", role: "Director", spec: "Audit & Assurance" },
                            { name: "Director Name ACA", role: "Director", spec: "Taxation Services" },
                            { name: "Director Name FCS", role: "Director", spec: "Corporate Affairs" },
                            { name: "Manager Name", role: "Senior Manager", spec: "Advisory & Consulting" },
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group cursor-default"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    <Briefcase size={20} />
                                </div>
                                <h4 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-indigo-600 transition-colors">{m.name}</h4>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4 group-hover:text-indigo-400">{m.role}</div>
                                <p className="text-sm text-slate-500 font-medium border-t border-slate-100 pt-4">{m.spec}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
