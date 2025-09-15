import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MapPin, Trophy, Star } from 'lucide-react';

interface CollegeCardProps {
  name: string;
  location: string;
  ranking?: number;
  category: string;
  courses: string[];
  cutoff?: string;
  fees?: string;
  applyUrl?: string;
}

export function CollegeCard({
  name,
  location,
  ranking,
  category,
  courses,
  cutoff,
  fees,
  applyUrl
}: CollegeCardProps) {
  const handleApplyClick = () => {
    if (applyUrl) {
      window.open(applyUrl, '_blank');
    } else {
      console.log(`Apply to ${name}`);
    }
  };

  return (
    <Card className="hover-elevate transition-all duration-200 h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold mb-2" data-testid={`title-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              {name}
            </CardTitle>
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span data-testid={`location-${location.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                {location}
              </span>
            </div>
          </div>
          {ranking && (
            <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full">
              <Trophy className="w-4 h-4 mr-1" />
              <span className="text-sm font-semibold" data-testid="text-ranking">
                #{ranking}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" data-testid="badge-category">
            {category}
          </Badge>
          {courses.slice(0, 2).map((course, index) => (
            <Badge key={index} variant="outline" data-testid={`badge-course-${course.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              {course}
            </Badge>
          ))}
          {courses.length > 2 && (
            <Badge variant="outline" data-testid="badge-more-courses">
              +{courses.length - 2} more
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {cutoff && (
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-2">Latest Cutoff (2024):</h4>
            <CardDescription data-testid="text-cutoff">{cutoff}</CardDescription>
          </div>
        )}

        {fees && (
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-2">Annual Fees:</h4>
            <CardDescription className="font-medium text-foreground" data-testid="text-fees">
              {fees}
            </CardDescription>
          </div>
        )}

        <div className="pt-4">
          <Button 
            onClick={handleApplyClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold hover-elevate active-elevate-2"
            data-testid="button-apply"
          >
            Apply Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}