
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import MissionSection from './MissionSection';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
