import { Navigation } from '@/components/Navigation';
import { CollegeFilters } from '@/components/CollegeFilters';
import { CollegeGrid } from '@/components/CollegeGrid';
import { FloatingTaskbar } from '@/components/FloatingTaskbar';

export default function Colleges() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Government Colleges
            </h1>
            <p className="text-lg text-muted-foreground">
              Find and compare government colleges across Northern India
            </p>
          </div>
          <CollegeFilters />
          <CollegeGrid />
        </div>
      </main>
      <FloatingTaskbar />
    </div>
  );
}