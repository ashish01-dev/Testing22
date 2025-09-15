import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, TrendingUp, Target, BookOpen, Clock } from 'lucide-react';

export function AboutPlatform() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About InnoVision Career Guidance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            InnoVision is your comprehensive digital companion for navigating the complex landscape 
            of higher education in Northern India. We bridge the gap between student aspirations 
            and educational opportunities through data-driven insights and personalized guidance.
          </p>
        </div>

        {/* Our Focus */}
        <div className="mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-4">Our Regional Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Northern India Coverage
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    We specialize in government colleges and educational opportunities across:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Delhi</Badge>
                    <Badge variant="outline">Punjab</Badge>
                    <Badge variant="outline">Haryana</Badge>
                    <Badge variant="outline">Uttar Pradesh</Badge>
                    <Badge variant="outline">Uttarakhand</Badge>
                    <Badge variant="outline">Himachal Pradesh</Badge>
                    <Badge variant="outline">Jammu & Kashmir</Badge>
                    <Badge variant="outline">Rajasthan</Badge>
                    <Badge variant="outline">Chandigarh</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    Why Government Colleges?
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Affordable, quality education for all backgrounds</li>
                    <li>• Recognized degrees with strong industry reputation</li>
                    <li>• Lower financial burden on families</li>
                    <li>• Merit-based admissions ensuring fair opportunities</li>
                    <li>• Established alumni networks and placement records</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">What Makes InnoVision Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Real-Time Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We provide up-to-date cutoff scores, application deadlines, and admission 
                  criteria directly from official sources, ensuring you never miss opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Personalized Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our scientific career assessment helps match your interests and abilities 
                  with the right career paths and college options.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Timeline Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Never miss important dates with our comprehensive tracking of exam schedules, 
                  application deadlines, and admission processes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="text-center bg-muted/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Our Commitment to Students</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Every student deserves access to quality education. InnoVision is committed to democratizing 
            career guidance by providing free, accurate, and comprehensive information about government 
            educational opportunities. We believe that the right information at the right time can 
            transform a student's future.
          </p>
        </div>
      </div>
    </section>
  );
}