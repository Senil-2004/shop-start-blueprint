import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CalendarNote {
  date: string;
  notes: string[];
  hasEvents: boolean;
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data for notes on different dates
  const calendarNotes: CalendarNote[] = [
    {
      date: '2024-01-15',
      notes: ['Morning Thoughts', 'Yoga session notes'],
      hasEvents: true
    },
    {
      date: '2024-01-14',
      notes: ['Project Ideas', 'Meeting with team'],
      hasEvents: true
    },
    {
      date: '2024-01-13',
      notes: ['Weekend Plans'],
      hasEvents: true
    },
    {
      date: '2024-01-10',
      notes: ['Reading session'],
      hasEvents: true
    }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const formatDateKey = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getNotesForDate = (dateKey: string) => {
    return calendarNotes.find(note => note.date === dateKey);
  };

  const handleDateClick = (day: number) => {
    const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
    const noteData = getNotesForDate(dateKey);
    
    if (noteData?.hasEvents) {
      setSelectedDate(dateKey);
      setIsDialogOpen(true);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
      const noteData = getNotesForDate(dateKey);
      const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
      const isWeekend = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay() % 6 === 0;

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(day)}
          className={`
            aspect-square flex flex-col items-center justify-center rounded-2xl transition-all duration-300 cursor-pointer relative
            ${isToday ? 'bg-gradient-primary text-white shadow-glow' : 'hover:bg-gradient-glass hover:shadow-soft'}
            ${isWeekend && !isToday ? 'bg-gradient-to-br from-diary-coral/20 to-diary-pink/20' : ''}
            ${noteData?.hasEvents ? 'ring-2 ring-primary/30' : ''}
          `}
        >
          <span className={`text-lg font-medium ${isToday ? 'text-white' : 'text-foreground'}`}>
            {day}
          </span>
          
          {noteData?.hasEvents && (
            <div className="absolute bottom-1 flex gap-1">
              {noteData.notes.slice(0, 3).map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    isToday ? 'bg-white/80' : 'bg-primary/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const selectedNoteData = selectedDate ? getNotesForDate(selectedDate) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-muted/20 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Calendar
            </h1>
            <p className="text-muted-foreground">Track your daily thoughts and memories</p>
          </div>
          <CalendarIcon className="h-8 w-8 text-primary" />
        </div>

        {/* Calendar Card */}
        <Card className="bg-gradient-card backdrop-blur-sm border-border/20 shadow-medium rounded-3xl overflow-hidden">
          <CardContent className="p-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateMonth('prev')}
                className="rounded-full hover:bg-primary/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <h2 className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateMonth('next')}
                className="rounded-full hover:bg-primary/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center text-sm font-semibold text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {renderCalendarDays()}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                <span className="text-sm text-muted-foreground">Has notes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-coral"></div>
                <span className="text-sm text-muted-foreground">Weekend</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notes Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-gradient-glass backdrop-blur-xl border-border/20 rounded-3xl shadow-strong">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Notes for {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-3 mt-4">
              {selectedNoteData?.notes.map((note, index) => (
                <Card key={index} className="bg-gradient-card border-border/20 rounded-2xl">
                  <CardContent className="p-4">
                    <p className="text-foreground font-medium">{note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};