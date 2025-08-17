import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Settings } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: 'notes' | 'calendar' | 'settings';
  onTabChange: (tab: 'notes' | 'calendar' | 'settings') => void;
}

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    {
      id: 'notes' as const,
      icon: BookOpen,
      label: 'Notes',
      gradient: 'bg-gradient-coral'
    },
    {
      id: 'calendar' as const,
      icon: Calendar,
      label: 'Calendar',
      gradient: 'bg-gradient-blue'
    },
    {
      id: 'settings' as const,
      icon: Settings,
      label: 'Settings',
      gradient: 'bg-gradient-primary'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-background/80 backdrop-blur-xl border-t border-border/20 shadow-strong">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 relative overflow-hidden
                    ${isActive 
                      ? `${tab.gradient} text-white shadow-glow scale-110` 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }
                  `}
                >
                  <Icon className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                  <span className={`text-xs font-medium transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {tab.label}
                  </span>
                  
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};