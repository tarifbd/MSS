'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShieldCheck } from 'lucide-react';
import { Container, Button } from '../ui/atoms';
import { NAVIGATION_ITEMS } from '@/app/config';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                    ? 'glass-panel-dark py-2 md:py-3 border-white/5'
                    : 'bg-transparent py-4 md:py-6 border-transparent'
                    }`}
            >
                <Container>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                            {/* Logo - Replace src with your actual logo path */}
                            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                                <img
                                    src="/images/logo.png"
                                    alt="M. S. Salekin & Co Logo"
                                    className="w-full h-full object-cover rounded-full border-2 border-white/10"
                                    onError={(e) => {
                                        // Fallback to gradient if image not found
                                        e.currentTarget.style.display = 'none';
                                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback gradient icon */}
                                <div className="hidden w-full h-full bg-gradient-to-br from-indigo-500 to-violet-600 items-center justify-center rounded-full shadow-lg shadow-indigo-500/30 absolute inset-0">
                                    <span className="text-white font-serif font-bold text-lg md:text-2xl">M</span>
                                </div>
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-serif font-bold text-base md:text-xl tracking-tight text-white/90">
                                    M. S. Salekin & Co
                                </span>
                                <span className="text-[8px] md:text-[10px] font-medium text-indigo-400/80 uppercase tracking-widest">
                                    Chartered Accountants
                                </span>
                            </div>
                        </div>

                        <nav className="hidden lg:flex items-center gap-8">
                            {NAVIGATION_ITEMS.map((item) => (
                                <div key={item.label} className="relative group">
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-indigo-300 transition-colors py-2"
                                    >
                                        {item.label}
                                        {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                                    </a>

                                    {item.children && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 hidden group-hover:block hover:block">
                                            <div className="glass-panel-dark rounded-xl border border-white/10 p-2 shadow-2xl animate-slide-up backdrop-blur-xl">
                                                {item.children.map((child) => (
                                                    <a
                                                        key={child.label}
                                                        href={child.href}
                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/child"
                                                    >
                                                        <div className="mt-1 text-indigo-400 group-hover/child:text-indigo-300">
                                                            <child.icon size={16} />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-slate-200 group-hover/child:text-white">{child.label}</div>
                                                            <div className="text-xs text-slate-500 group-hover/child:text-slate-400">{child.desc}</div>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                                </div>
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center gap-6">
                            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                                Client Portal
                            </a>
                            <Button variant="primary" className="h-10 px-6 rounded-md shadow-lg shadow-indigo-900/50">
                                Book Consultation
                            </Button>
                        </div>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95"
                            aria-label="Toggle Menu"
                        >
                            {mobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </Container>
            </header>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-[#020617] z-40 overflow-y-auto animate-slide-up pt-24 pb-10">
                    <div className="p-6 flex flex-col min-h-full">
                        <div className="flex flex-col gap-2 mb-8">
                            {NAVIGATION_ITEMS.map((item) => (
                                <div key={item.label} className="border-b border-white/5">
                                    <div
                                        className="flex justify-between items-center py-4 cursor-pointer"
                                        onClick={() => item.children ? toggleDropdown(item.label) : null}
                                    >
                                        <a href={item.href} className="text-xl md:text-2xl font-serif font-medium text-slate-300 hover:text-white transition-colors">
                                            {item.label}
                                        </a>
                                        {item.children && (
                                            <ChevronDown
                                                className={`text-indigo-500 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </div>

                                    {item.children && openDropdown === item.label && (
                                        <div className="pl-4 pb-4 flex flex-col gap-4 animate-fade-scale">
                                            {item.children.map((child) => (
                                                <a key={child.label} href={child.href} className="flex items-center gap-3 text-slate-400 hover:text-white">
                                                    <child.icon size={16} className="text-indigo-500" />
                                                    <span className="text-base">{child.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-4 px-2">
                            <Button variant="outline" className="w-full h-14 rounded-xl flex items-center justify-center gap-2 border-indigo-500/30 bg-indigo-500/5">
                                <ShieldCheck size={18} className="text-indigo-400" />
                                <span className="font-bold">Secure Client Portal</span>
                            </Button>
                            <Button variant="glow" className="w-full h-14 rounded-xl">
                                Book Strategic Call
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
