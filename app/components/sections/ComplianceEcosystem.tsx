'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    FileText,
    Scale,
    Building2,
    Globe,
    BarChart3,
    Wallet,
    ArrowUpRight
} from 'lucide-react';
import { Container, SpotlightCard } from '../ui/atoms';

const complianceNodes = [
    {
        title: "Income Tax",
        subtitle: "National Board of Revenue",
        desc: "Precision-engineered corporate and personal tax strategies, NBR compliance audits, and strategic litigation support.",
        icon: Wallet,
        color: "from-blue-500 to-indigo-600",
        stats: "100% Filing Success"
    },
    {
        title: "VAT & Indirect Tax",
        subtitle: "Indirect Tax Excellence",
        desc: "Comprehensive VAT planning, digital VAT implementation, and sophisticated indirect tax dispute resolution.",
        icon: FileText,
        color: "from-indigo-500 to-violet-600",
        stats: "Tier-1 Advisory"
    },
    {
        title: "Customs & Trade",
        subtitle: "Cross-Border Compliance",
        desc: "Navigating Customs, Excise, and Duty complexities with port-to-boardroom regulatory clearance and trade optimization.",
        icon: Globe,
        color: "from-violet-500 to-purple-600",
        stats: "Zero-Delay Strategy"
    },
    {
        title: "RJSC",
        subtitle: "Corporate Secretarial",
        desc: "Seamless company formations, multi-entity corporate secretarial services, and end-to-end RJSC lifecycle management.",
        icon: Building2,
        color: "from-purple-500 to-fuchsia-600",
        stats: "Full Lifecycle"
    },
    {
        title: "BIDA",
        subtitle: "Investment Architecture",
        desc: "Strategic advisory for foreign investments, one-stop service facilitation, and institutional licensing for global giants.",
        icon: ShieldCheck,
        color: "from-fuchsia-500 to-pink-600",
        stats: "Global Ready"
    },
    {
        title: "Bangladesh Bank",
        subtitle: "Monetary Compliance",
        desc: "Expert guidance on Foreign Exchange (FE) regulations, outward/inward remittance, and Central Bank reporting.",
        icon: Scale,
        color: "from-pink-500 to-rose-600",
        stats: "FX-Compliant"
    },
    {
        title: "BSEC",
        subtitle: "Capital Market Readiness",
        desc: "Rigorous securities compliance, IPO advisory, and capital market structuring under Securities and Exchange Commission oversight.",
        icon: BarChart3,
        color: "from-rose-500 to-orange-600",
        stats: "Market Validated"
    }
];

export const ComplianceEcosystem = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#020617] overflow-hidden border-t border-white/5">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] -z-10"></div>

            <Container>
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-morphism border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        Regulatory Landscape
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
                    >
                        Mastering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Bangladesh Compliance</span> Ecosystem.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We navigate the intricate regulatory fabric of Bangladesh, transforming jurisdictional complexities into institutional competitive advantages.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {complianceNodes.map((node, i) => (
                        <motion.div
                            key={node.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <SpotlightCard className="h-full p-8 md:p-10 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden">
                                {/* Decorative Glow */}
                                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${node.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700`}></div>

                                <div className="flex justify-between items-start mb-10">
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${node.color} shadow-lg shadow-indigo-900/40 relative transform group-hover:-translate-y-1 transition-transform duration-500`}>
                                        <node.icon className="w-6 h-6 text-white" />
                                        <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-400/90 uppercase tracking-widest bg-indigo-500/5 px-2 py-1 rounded-md border border-indigo-500/10">
                                        <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
                                        {node.stats}
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                    {node.title}
                                </h3>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                                    {node.subtitle}
                                </div>

                                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                    {node.desc}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer group/link">
                                    Explore Framework
                                    <ArrowUpRight className="w-3 h-3 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
