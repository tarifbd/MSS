'use client';

import React from 'react';
import { Leaf } from 'lucide-react';
import { Container } from '../ui/atoms';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks';

export const ESGCommitment = () => {
    return (
        <section className="py-20 md:py-32 bg-[#F8FAFC]">
            <Container>
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Leaf className="w-12 h-12 text-emerald-500 mb-6" />
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6">
                        Sustainable Integrity.
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We believe financial clarity goes hand-in-hand with environmental and social responsibility. Our practice is committed to carbon-neutral operations and ethical governance.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
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
                        { title: "Environmental", desc: "Paperless audit workflows and 100% digital reporting reduce our carbon footprint.", color: "bg-emerald-500" },
                        { title: "Social", desc: "Investing in the next generation of financial leaders through our Chartered scholarship program.", color: "bg-blue-500" },
                        { title: "Governance", desc: "Setting the industry standard for ethical transparency and conflict-of-interest policies.", color: "bg-purple-500" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="group p-6 md:p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-12 h-1 rounded-full ${item.color} mb-4 md:mb-6`}></div>
                            <h3 className="text-lg md:text-xl font-bold text-[#0f172a] mb-3 md:mb-4">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};
