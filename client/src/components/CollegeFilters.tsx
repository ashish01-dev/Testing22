import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Filter, X } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const locations = [
  'Delhi', 'Punjab', 'Haryana', 'Uttar Pradesh', 'Uttarakhand',
  'Himachal Pradesh', 'Jammu & Kashmir', 'Chandigarh', 'Rajasthan'
];

const categories = [
  'Government Engineering Colleges', 'Government Medical Colleges', 'Government Law Colleges',
  'IITs', 'NITs', 'IIITs', 'AIIMS', 'IIMs'
];

const courses = [
  'B.Tech/B.E', 'MBBS', 'BDS', 'LLB', 'MBA', 'Integrated Programs'
];

export function CollegeFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location]);
    } else {
      setSelectedLocations(selectedLocations.filter(l => l !== location));
    }
    console.log('Location filters updated:', selectedLocations);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
    console.log('Category filters updated:', selectedCategories);
  };

  const handleCourseChange = (course: string, checked: boolean) => {
    if (checked) {
      setSelectedCourses([...selectedCourses, course]);
    } else {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    }
    console.log('Course filters updated:', selectedCourses);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedLocations([]);
    setSelectedCategories([]);
    setSelectedCourses([]);
    console.log('All filters cleared');
  };

  const activeFiltersCount = selectedLocations.length + selectedCategories.length + selectedCourses.length;

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter Colleges
          </CardTitle>
          <div className="flex items-center gap-2">
            {activeFiltersCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="hover-elevate"
                data-testid="button-clear-filters"
              >
                <X className="w-4 h-4 mr-1" />
                Clear ({activeFiltersCount})
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden hover-elevate"
              data-testid="button-toggle-filters"
            >
              {isOpen ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search colleges by name..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log('Search term:', e.target.value);
            }}
            className="pl-10"
            data-testid="input-search"
          />
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="lg:block">
          <CollapsibleTrigger asChild className="lg:hidden">
            <Button variant="ghost" className="w-full" data-testid="button-collapsible-trigger">
              {isOpen ? 'Hide' : 'Show'} Advanced Filters
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-6 lg:block">
            {/* Location Filter */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Location</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox
                      id={`location-${location}`}
                      checked={selectedLocations.includes(location)}
                      onCheckedChange={(checked) => handleLocationChange(location, checked as boolean)}
                      data-testid={`checkbox-location-${location.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    />
                    <Label
                      htmlFor={`location-${location}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {location}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Category</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      data-testid={`checkbox-category-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    />
                    <Label
                      htmlFor={`category-${category}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Filter */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Courses</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {courses.map((course) => (
                  <div key={course} className="flex items-center space-x-2">
                    <Checkbox
                      id={`course-${course}`}
                      checked={selectedCourses.includes(course)}
                      onCheckedChange={(checked) => handleCourseChange(course, checked as boolean)}
                      data-testid={`checkbox-course-${course.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    />
                    <Label
                      htmlFor={`course-${course}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {course}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}