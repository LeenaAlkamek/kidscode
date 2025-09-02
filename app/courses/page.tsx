
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoursesHero from './CoursesHero';
import CoursesFilter from './CoursesFilter';
import CoursesList from './CoursesList';
import { useState } from 'react';

export default function CoursesPage() {
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CoursesHero />
        <CoursesFilter 
          selectedAge={selectedAge}
          selectedLevel={selectedLevel}
          onAgeChange={setSelectedAge}
          onLevelChange={setSelectedLevel}
        />
        <CoursesList selectedAge={selectedAge} selectedLevel={selectedLevel} />
      </main>
      <Footer />
    </div>
  );
}
