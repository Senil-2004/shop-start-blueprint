import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Layout, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Plan Your Online Store<br />
            <span className="text-4xl">Like a Pro</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Complete wireframe planning solution for small businesses launching online stores. 
            Map customer journeys, design wireframes, and gather feedback all in one place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
            Start Planning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            View Examples
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 text-left shadow-medium hover:shadow-strong transition-shadow bg-gradient-card">
            <div className="mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Journey Mapping</h3>
              <p className="text-muted-foreground">
                Visualize customer paths from browsing to checkout with interactive journey maps.
              </p>
            </div>
          </Card>

          <Card className="p-6 text-left shadow-medium hover:shadow-strong transition-shadow bg-gradient-card">
            <div className="mb-4">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Layout className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Wireframes</h3>
              <p className="text-muted-foreground">
                Design professional wireframes for homepage, product pages, and cart functionality.
              </p>
            </div>
          </Card>

          <Card className="p-6 text-left shadow-medium hover:shadow-strong transition-shadow bg-gradient-card">
            <div className="mb-4">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-3">
                <MessageCircle className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Feedback Loop</h3>
              <p className="text-muted-foreground">
                Collect peer reviews and iterate on designs with built-in feedback tools.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;