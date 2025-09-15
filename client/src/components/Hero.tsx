import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import heroImage from '@assets/generated_images/Career_success_hero_image_74fefb17.png';

const statistics = [
  { label: '2000+ Verified Colleges', icon: BookOpen },
  { label: '50+ Major Entrance Exams', icon: Users },
  { label: '500+ Scholarship Opportunities', icon: Award },
  { label: '100+ Career Guidance Resources', icon: TrendingUp },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Gateway to{' '}
            <span className="text-blue-400">Top Colleges</span>{' '}
            and Career Success
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Discover government colleges, track exam deadlines, find scholarships, 
            and plan your academic journey
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover-elevate active-elevate-2"
              onClick={() => console.log('Navigate to colleges page')}
              data-testid="button-find-college"
            >
              Find Your College
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover-elevate active-elevate-2"
              onClick={() => console.log('Navigate to quiz page')}
              data-testid="button-take-quiz"
            >
              Take Career Quiz
            </Button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-elevate">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <p className="text-white font-semibold text-lg" data-testid={`stat-${stat.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}