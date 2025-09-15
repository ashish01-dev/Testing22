import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, CalendarCheck, UserSearch, Gift } from 'lucide-react';

const features = [
  {
    title: 'Comprehensive College Database',
    description: 'Access detailed information about government colleges across Northern India',
    icon: Database,
  },
  {
    title: 'Exam Timeline Tracker',
    description: 'Never miss important entrance exam deadlines and application dates',
    icon: CalendarCheck,
  },
  {
    title: 'Personalized Career Quiz',
    description: 'Discover your ideal career path through scientific assessment',
    icon: UserSearch,
  },
  {
    title: 'Scholarship Finder',
    description: 'Find and apply for relevant scholarships and financial aid',
    icon: Gift,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Career Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and resources to guide you through your academic journey
            and help you make informed decisions about your future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover-elevate transition-all duration-200"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}