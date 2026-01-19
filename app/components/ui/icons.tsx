import React from 'react';

export const IconAudit = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradAudit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <filter id="glowAudit" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#gradAudit)" opacity="0.05" />
        <path d="M50 20L80 35V55C80 75 50 90 50 90C50 90 20 75 20 55V35L50 20Z" stroke="url(#gradAudit)" strokeWidth="3" fill="rgba(79, 70, 229, 0.05)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 50L50 60L70 40" stroke="#C7D2FE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-draw" filter="url(#glowAudit)" />
        <circle cx="50" cy="50" r="38" stroke="url(#gradAudit)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" className="animate-spin-slow" />
    </svg>
);

export const IconTax = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradTax" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#gradTax)" opacity="0.05" />
        <rect x="28" y="28" width="44" height="54" rx="4" stroke="url(#gradTax)" strokeWidth="3" fill="rgba(124, 58, 237, 0.05)" />
        <path d="M38 42H62" stroke="#E9D5FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 56H52" stroke="#E9D5FF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="68" cy="68" r="14" fill="url(#gradTax)" />
        <path d="M63 73L73 63M63 63L73 73" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const IconAdvisory = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradAdv" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#DB2777" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#gradAdv)" opacity="0.05" />
        <path d="M50 20L60 45L85 50L65 65L70 90L50 75L30 90L35 65L15 50L40 45L50 20Z" stroke="url(#gradAdv)" strokeWidth="3" fill="rgba(219, 39, 119, 0.05)" strokeLinejoin="round" />
        <path d="M50 20V50" stroke="#FBCFE8" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const IconBPO = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradBPO" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#059669" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#gradBPO)" opacity="0.05" />
        <rect x="30" y="35" width="40" height="40" rx="4" stroke="url(#gradBPO)" strokeWidth="3" fill="rgba(16, 185, 129, 0.05)" />
        <rect x="25" y="25" width="40" height="40" rx="4" stroke="url(#gradBPO)" strokeWidth="3" fill="rgba(5, 150, 105, 0.05)" opacity="0.7" />
        <path d="M40 55L45 60L60 45" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const IconFintech = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradFin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
        </defs>
        <rect x="12" y="32" width="40" height="24" rx="2" stroke="url(#gradFin)" strokeWidth="2" fill="rgba(96, 165, 250, 0.1)" />
        <path d="M8 32L32 8L56 32" stroke="url(#gradFin)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="24" r="6" stroke="#60A5FA" strokeWidth="2" />
        <path d="M32 40V48" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 44H40" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const IconRMG = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradRMG" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#059669" />
            </linearGradient>
        </defs>
        <path d="M12 20H52V56H12V20Z" stroke="url(#gradRMG)" strokeWidth="2" fill="rgba(52, 211, 153, 0.1)" />
        <path d="M12 20L32 8L52 20" stroke="url(#gradRMG)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="36" r="8" stroke="#34D399" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M24 20V56" stroke="#34D399" strokeWidth="1" opacity="0.5" />
        <path d="M40 20V56" stroke="#34D399" strokeWidth="1" opacity="0.5" />
    </svg>
);

export const IconEnergy = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradEnergy" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
        </defs>
        <path d="M36 4L20 32H32L28 60L44 32H32L36 4Z" stroke="url(#gradEnergy)" strokeWidth="2" fill="rgba(251, 191, 36, 0.1)" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="28" stroke="#FBBF24" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
    </svg>
);

export const IconTelecom = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradTel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E879F9" />
                <stop offset="100%" stopColor="#C026D3" />
            </linearGradient>
        </defs>
        <path d="M32 56V32" stroke="url(#gradTel)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="28" r="4" fill="#E879F9" />
        <path d="M16 20C20 16 44 16 48 20" stroke="#E879F9" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path d="M8 12C20 2 44 2 56 12" stroke="#E879F9" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <path d="M32 56H48" stroke="url(#gradTel)" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 56H16" stroke="url(#gradTel)" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
