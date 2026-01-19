import { FileText, PieChart, Lightbulb, Headphones } from 'lucide-react';

export const SITE_CONFIG = {
    firmName: "K M Khadimul Hasan & Co.",
    regNumbers: { frc: "FRC-2024-001-X", icab: "ICAB-MEM-1234" },
};

export const NAVIGATION_ITEMS = [
    {
        label: 'Services',
        href: '#services',
        children: [
            { label: 'Audit & Assurance', desc: 'Financial certainty & verification', icon: FileText, href: '#audit' },
            { label: 'Tax Optimization', desc: 'Strategic compliance & structuring', icon: PieChart, href: '#tax' },
            { label: 'Corporate Advisory', desc: 'M&A and high-stakes consulting', icon: Lightbulb, href: '#advisory' },
            { label: 'BPO Services', desc: 'Payroll & operational efficiency', icon: Headphones, href: '#bpo' },
        ]
    },
    { label: 'Industries', href: '#industries' },
    { label: 'Insights', href: '#insights' },
    { label: 'About', href: '#about' },
];
