import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Moon, Sun, Type, Palette, Bell, Shield, Download, Upload } from 'lucide-react';

export const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState('medium');
  const [userName, setUserName] = useState('Alex Johnson');
  const [userEmail, setUserEmail] = useState('alex@example.com');

  const fontSizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'extra-large', label: 'Extra Large' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-muted/20 p-4 pb-20">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">Customize your diary experience</p>
        </div>

        {/* Profile Card */}
        <Card className="bg-gradient-card backdrop-blur-sm border-border/20 shadow-medium rounded-3xl overflow-hidden animate-scale-up">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <User className="h-6 w-6 text-primary" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20 ring-4 ring-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback className="bg-gradient-primary text-white text-xl font-semibold">
                  AJ
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Name</Label>
                  <Input
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="mt-1 bg-background/60 backdrop-blur-sm border-border/50 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="mt-1 bg-background/60 backdrop-blur-sm border-border/50 rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-xl">
                <Upload className="h-4 w-4 mr-2" />
                Change Photo
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 rounded-xl">
                Save Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card className="bg-gradient-card backdrop-blur-sm border-border/20 shadow-medium rounded-3xl overflow-hidden animate-scale-up" style={{ animationDelay: '100ms' }}>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Palette className="h-6 w-6 text-primary" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between p-4 bg-gradient-glass rounded-2xl">
              <div className="flex items-center gap-3">
                {darkMode ? <Moon className="h-5 w-5 text-diary-violet" /> : <Sun className="h-5 w-5 text-diary-coral" />}
                <div>
                  <h3 className="font-medium text-foreground">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                </div>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-gradient-primary"
              />
            </div>

            {/* Font Size */}
            <div className="flex items-center justify-between p-4 bg-gradient-glass rounded-2xl">
              <div className="flex items-center gap-3">
                <Type className="h-5 w-5 text-diary-blue" />
                <div>
                  <h3 className="font-medium text-foreground">Font Size</h3>
                  <p className="text-sm text-muted-foreground">Adjust text size for better readability</p>
                </div>
              </div>
              <Select value={fontSize} onValueChange={setFontSize}>
                <SelectTrigger className="w-40 bg-background/60 backdrop-blur-sm border-border/50 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background/80 backdrop-blur-xl border-border/20 rounded-xl">
                  {fontSizeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="rounded-lg">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notifications & Privacy */}
        <Card className="bg-gradient-card backdrop-blur-sm border-border/20 shadow-medium rounded-3xl overflow-hidden animate-scale-up" style={{ animationDelay: '200ms' }}>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Bell className="h-6 w-6 text-primary" />
              Notifications & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Notifications */}
            <div className="flex items-center justify-between p-4 bg-gradient-glass rounded-2xl">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-diary-teal" />
                <div>
                  <h3 className="font-medium text-foreground">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">Get reminders to write in your diary</p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-gradient-primary"
              />
            </div>

            {/* Privacy */}
            <div className="flex items-center justify-between p-4 bg-gradient-glass rounded-2xl">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-diary-purple" />
                <div>
                  <h3 className="font-medium text-foreground">Privacy Lock</h3>
                  <p className="text-sm text-muted-foreground">Enable app lock with biometrics</p>
                </div>
              </div>
              <Button variant="outline" className="rounded-xl">
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="bg-gradient-card backdrop-blur-sm border-border/20 shadow-medium rounded-3xl overflow-hidden animate-scale-up" style={{ animationDelay: '300ms' }}>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <Download className="h-6 w-6 text-primary" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="rounded-xl h-12">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" className="rounded-xl h-12">
                <Upload className="h-4 w-4 mr-2" />
                Import Data
              </Button>
            </div>
            <div className="p-4 bg-gradient-glass rounded-2xl">
              <p className="text-sm text-muted-foreground text-center">
                Your diary entries are stored locally and synced securely to your cloud account.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};