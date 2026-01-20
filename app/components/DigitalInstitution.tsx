'use client';

import React from 'react';
import { useMousePosition } from './hooks';
import { Navbar } from './sections/Navbar';
import { HeroCinematic } from './sections/HeroCinematic';
import { ServicesCommandCenter } from './sections/ServicesCommandCenter';
import { ComplianceEcosystem } from './sections/ComplianceEcosystem';
import { InnovationHub } from './sections/InnovationHub';
import { SectorMatrix } from './sections/SectorMatrix';
import { GlobalNetwork } from './sections/GlobalNetwork';
import { FeatureHighlight } from './sections/FeatureHighlight';
import { TheVanguard } from './sections/TheVanguard';
import { IntelligenceFeed } from './sections/IntelligenceFeed';
import { ESGCommitment } from './sections/ESGCommitment';
import { TalentPortal } from './sections/TalentPortal';
import { ModernCTA } from './sections/ModernCTA';
import { Footer } from './sections/Footer';

export default function DigitalInstitution() {
    useMousePosition(); // Activate global mouse tracking

    return (
        <div className="min-h-screen font-sans selection:bg-indigo-500 selection:text-white bg-[#020617] text-slate-300 overflow-x-hidden">
            {/* The Quantum Field - Mouse Follower */}
            <div className="quantum-field"></div>

            <Navbar />
            <main className="overflow-x-hidden">
                <HeroCinematic />
                <ServicesCommandCenter />
                <ComplianceEcosystem />
                <InnovationHub />
                <SectorMatrix />
                <GlobalNetwork />
                <FeatureHighlight />
                <TheVanguard />
                <IntelligenceFeed />
                <ESGCommitment />
                <TalentPortal />
                <ModernCTA />
            </main>
            <Footer />
        </div>
    );
}
