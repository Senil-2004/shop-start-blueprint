import React, { useState } from 'react';
import { NotesPage } from '@/components/diary/NotesPage';
import { CalendarPage } from '@/components/diary/CalendarPage';
import { SettingsPage } from '@/components/diary/SettingsPage';
import { BottomNavigation } from '@/components/diary/BottomNavigation';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'notes' | 'calendar' | 'settings'>('notes');

  const renderActivePage = () => {
    switch (activeTab) {
      case 'notes':
        return <NotesPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <NotesPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className={`transition-all duration-300 ${
        activeTab === 'calendar' ? 'animate-slide-in-right' :
        activeTab === 'settings' ? 'animate-scale-up' :
        'animate-fade-in'
      }`}>
        {renderActivePage()}
      </div>
      
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default Index;
