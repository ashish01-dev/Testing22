import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Home, 
  GraduationCap, 
  ClipboardList, 
  Calendar, 
  Brain, 
  Award, 
  Info, 
  Menu,
  ChevronDown 
} from 'lucide-react';
import logoImage from '@assets/image_1757937124754.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from './ThemeToggle';

const navigationItems = [
  { name: 'Home', icon: Home, path: '/', active: true },
  { 
    name: 'Colleges', 
    icon: GraduationCap, 
    path: '/colleges',
    dropdown: [
      'Engineering Colleges',
      'Medical Colleges', 
      'Law Colleges',
      'Management Colleges',
      'Compare Colleges'
    ]
  },
  { 
    name: 'Exams', 
    icon: ClipboardList, 
    path: '/exams',
    dropdown: [
      'JEE Main/Advanced',
      'NEET',
      'CLAT', 
      'CAT/MAT',
      'State Exams'
    ]
  },
  { name: 'Timeline', icon: Calendar, path: '/timeline' },
  { name: 'Career Quiz', icon: Brain, path: '/quiz' },
  { name: 'Scholarships', icon: Award, path: '/scholarships' },
  { name: 'About', icon: Info, path: '/about' },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
                <img 
                  src={logoImage} 
                  alt="InnoVision Logo" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-foreground">InnoVision</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location === item.path;
                  
                  if (item.dropdown) {
                    return (
                      <DropdownMenu key={item.name}>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className={`flex items-center space-x-2 hover-elevate ${isActive ? 'bg-accent' : ''}`}
                            data-testid={`button-${item.name.toLowerCase().replace(' ', '-')}-dropdown`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{item.name}</span>
                            <ChevronDown className="w-3 h-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          {item.dropdown.map((subItem) => (
                            <DropdownMenuItem 
                              key={subItem}
                              onClick={() => console.log(`Navigate to ${subItem}`)}
                              data-testid={`menu-item-${subItem.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            >
                              {subItem}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  }

                  return (
                    <Link key={item.name} href={item.path}>
                      <Button 
                        variant="ghost" 
                        className={`flex items-center space-x-2 hover-elevate ${isActive ? 'bg-accent' : ''}`}
                        data-testid={`button-${item.name.toLowerCase().replace(' ', '-')}`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Mobile menu button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location === item.path;
                      
                      if (item.dropdown) {
                        return (
                          <div key={item.name} className="space-y-2">
                            <div className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-foreground">
                              <Icon className="w-4 h-4" />
                              <span>{item.name}</span>
                            </div>
                            <div className="pl-10 space-y-1">
                              {item.dropdown.map((subItem) => (
                                <Button
                                  key={subItem}
                                  variant="ghost"
                                  className="w-full justify-start text-sm hover-elevate"
                                  onClick={() => {
                                    console.log(`Navigate to ${subItem}`);
                                    setIsOpen(false);
                                  }}
                                  data-testid={`mobile-menu-${subItem.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                >
                                  {subItem}
                                </Button>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link key={item.name} href={item.path}>
                          <Button 
                            variant="ghost" 
                            className={`w-full justify-start hover-elevate ${isActive ? 'bg-accent' : ''}`}
                            onClick={() => setIsOpen(false)}
                            data-testid={`mobile-menu-${item.name.toLowerCase().replace(' ', '-')}`}
                          >
                            <Icon className="w-4 h-4 mr-3" />
                            {item.name}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
}