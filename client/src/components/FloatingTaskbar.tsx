import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Search, Bookmark, Scale, MessageCircle } from 'lucide-react';

const taskbarItems = [
  { name: 'Quick Search', icon: Search, count: 0 },
  { name: 'Bookmarks', icon: Bookmark, count: 3 },
  { name: 'Compare', icon: Scale, count: 2 },
  { name: 'Help Chat', icon: MessageCircle, count: 1 },
];

export function FloatingTaskbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    setActiveItem(activeItem === itemName ? null : itemName);
    console.log(`${itemName} clicked`);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-xl p-2 shadow-xl">
          <div className="flex flex-col space-y-2">
            {taskbarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.name;
              
              return (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <div className="relative">
                      <Button
                        variant={isActive ? 'default' : 'ghost'}
                        size="icon"
                        onClick={() => handleItemClick(item.name)}
                        className={`hover-elevate active-elevate-2 ${isActive ? 'bg-primary text-primary-foreground' : ''}`}
                        data-testid={`button-${item.name.toLowerCase().replace(' ', '-')}`}
                      >
                        <Icon className="w-5 h-5" />
                      </Button>
                      {item.count > 0 && (
                        <Badge 
                          variant="destructive"
                          className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs"
                          data-testid={`badge-count-${item.name.toLowerCase().replace(' ', '-')}`}
                        >
                          {item.count}
                        </Badge>
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}