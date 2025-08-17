import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-primary flex items-center justify-center">
              <span className="text-sm font-bold text-white">W</span>
            </div>
            <span className="text-xl font-bold">WireframePro</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            Beta
          </Badge>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#journey" className="text-sm font-medium hover:text-primary transition-colors">
            User Journey
          </a>
          <a href="#wireframes" className="text-sm font-medium hover:text-primary transition-colors">
            Wireframes
          </a>
          <a href="#feedback" className="text-sm font-medium hover:text-primary transition-colors">
            Feedback
          </a>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;