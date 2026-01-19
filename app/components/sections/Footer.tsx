'use client';

import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Container } from '../ui/atoms';
import { SITE_CONFIG } from '@/app/config';

export const Footer = () => {
    const socialLinks = [
        { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
        { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
        { icon: <Instagram size={20} />, href: "#", label: "Instagram" }
    ];

    return (
        <footer className="bg-[#020617] py-20 border-t border-white/5 text-slate-400">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-3xl font-serif font-bold text-white block mb-8">M. S. Salekin & Co.</span>
                        <p className="max-w-xs leading-relaxed mb-8 text-base font-light text-slate-400">
                            The premier audit and advisory firm for the modern enterprise. Defining the standard of financial clarity in Bangladesh.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer border border-white/10 hover:border-indigo-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 text-indigo-400">Services</h4>
                        <ul className="space-y-4 text-sm">
                            {['Statutory Audit', 'Tax Optimization', 'Advisory', 'Forensic Analysis'].map(item => (
                                <li key={item}><a href="#" className="hover:text-indigo-300 hover:translate-x-1 transition-all inline-block">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 text-indigo-400">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            {['Privacy Policy', 'Terms of Engagement', 'Disclaimer', 'Client Portal'].map(item => (
                                <li key={item}><a href="#" className="hover:text-indigo-300 hover:translate-x-1 transition-all inline-block">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4 md:gap-0 font-medium">
                    <p>&copy; {new Date().getFullYear()} M. S. Salekin & Co. All rights reserved.</p>
                    <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">FRC: {SITE_CONFIG.regNumbers.frc}</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">ICAB: {SITE_CONFIG.regNumbers.icab}</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
