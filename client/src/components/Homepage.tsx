import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { Features } from './Features';
import { AboutPlatform } from './AboutPlatform';
import { CareerQuiz } from './CareerQuiz';
import { FloatingTaskbar } from './FloatingTaskbar';

export function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <AboutPlatform />
        <CareerQuiz />
      </main>
      <FloatingTaskbar />
    </div>
  );
}