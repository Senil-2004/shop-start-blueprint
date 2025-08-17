import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Plus, Edit3, Trash2, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  color: string;
}

const colorVariants = [
  'bg-gradient-coral',
  'bg-gradient-blue', 
  'bg-gradient-primary',
  'bg-diary-coral',
  'bg-diary-pink',
  'bg-diary-teal'
];

export const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Morning Thoughts',
      content: 'Today feels like a new beginning. The sun is shining and I have so many ideas flowing...',
      date: '2024-01-15',
      color: 'bg-gradient-coral'
    },
    {
      id: '2', 
      title: 'Project Ideas',
      content: 'Working on the new app design. The color palette should be vibrant yet calming...',
      date: '2024-01-14',
      color: 'bg-gradient-blue'
    },
    {
      id: '3',
      title: 'Weekend Plans',
      content: 'Visit the art gallery downtown, try that new coffee shop, and maybe start reading...',
      date: '2024-01-13',
      color: 'bg-gradient-primary'
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleSaveNote = () => {
    if (editingNote) {
      setNotes(notes.map(note => 
        note.id === editingNote.id 
          ? { ...editingNote, title: newNote.title, content: newNote.content }
          : note
      ));
    } else {
      const note: Note = {
        id: Date.now().toString(),
        title: newNote.title || 'Untitled',
        content: newNote.content,
        date: new Date().toISOString().split('T')[0],
        color: colorVariants[Math.floor(Math.random() * colorVariants.length)]
      };
      setNotes([note, ...notes]);
    }
    
    setNewNote({ title: '', content: '' });
    setEditingNote(null);
    setIsOpen(false);
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setNewNote({ title: note.title, content: note.content });
    setIsOpen(true);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-muted/30 p-4 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          My Notes
        </h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search your notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-background/80 backdrop-blur-sm border-border/50 rounded-2xl shadow-soft"
          />
        </div>
      </div>

      {/* Notes Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note, index) => (
          <Card 
            key={note.id}
            className={`${note.color} backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 animate-fade-in rounded-2xl overflow-hidden group`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg font-semibold line-clamp-1">
                {note.title}
              </CardTitle>
              <p className="text-white/80 text-sm">{note.date}</p>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="line-clamp-4 text-sm leading-relaxed mb-4">
                {note.content}
              </p>
              <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleEditNote(note)}
                  className="text-white hover:bg-white/20 rounded-xl"
                >
                  <Edit3 className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDeleteNote(note.id)}
                  className="text-white hover:bg-red-500/30 rounded-xl"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Floating Action Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              setEditingNote(null);
              setNewNote({ title: '', content: '' });
            }}
            className="fixed bottom-24 right-6 w-16 h-16 rounded-full bg-gradient-primary shadow-glow hover:shadow-strong transition-all duration-300 hover:scale-110 animate-float"
          >
            <Plus className="h-8 w-8 text-white" />
          </Button>
        </DialogTrigger>
        
        <DialogContent className="bg-gradient-glass backdrop-blur-xl border-border/20 rounded-3xl shadow-strong max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
              {editingNote ? 'Edit Note' : 'Create New Note'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 mt-6">
            <Input
              placeholder="Note title..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              className="bg-background/60 backdrop-blur-sm border-border/50 rounded-2xl text-lg font-medium"
            />
            
            <Textarea
              placeholder="What's on your mind?"
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              className="min-h-[200px] bg-background/60 backdrop-blur-sm border-border/50 rounded-2xl resize-none text-base leading-relaxed"
            />
            
            <div className="flex justify-end gap-3 pt-4">
              <Button 
                variant="ghost" 
                onClick={() => setIsOpen(false)}
                className="rounded-2xl"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSaveNote}
                className="bg-gradient-primary hover:opacity-90 rounded-2xl px-8"
              >
                {editingNote ? 'Update' : 'Save'} Note
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};