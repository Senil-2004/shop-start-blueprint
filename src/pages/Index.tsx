import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UserJourney from "@/components/UserJourney";
import WireframeSection from "@/components/WireframeSection";
import FeedbackSection from "@/components/FeedbackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <UserJourney />
        <WireframeSection />
        <FeedbackSection />
      </main>
      
      <footer className="py-8 px-4 border-t bg-card/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 WireframePro. Empowering small businesses to launch successful online stores.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
