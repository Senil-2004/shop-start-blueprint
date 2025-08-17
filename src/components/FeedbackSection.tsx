import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { MessageCircle, CheckCircle, Clock, AlertTriangle, Star } from "lucide-react";

const FeedbackSection = () => {
  const feedbackItems = [
    {
      id: 1,
      author: "Sarah Chen",
      role: "UX Designer",
      rating: 5,
      status: "approved",
      date: "2 days ago",
      feedback: "The homepage wireframe looks great! I love the clear navigation and prominent search bar. Consider adding a customer testimonials section below the featured products.",
      suggestions: ["Add testimonials section", "Increase CTA button size"]
    },
    {
      id: 2,
      author: "Mike Rodriguez",
      role: "Frontend Developer",
      status: "pending",
      date: "1 day ago",
      feedback: "Product detail page wireframe is well structured. The image gallery and reviews section are perfectly placed. However, we might want to consider mobile responsiveness for the product image area.",
      suggestions: ["Mobile optimization", "Add product comparison feature"]
    },
    {
      id: 3,
      author: "Jessica Wong",
      role: "Business Owner",
      rating: 4,
      status: "revision",
      date: "6 hours ago",
      feedback: "Shopping cart wireframe needs some adjustments. The checkout button should be more prominent, and we should add a 'Continue Shopping' option for better user experience.",
      suggestions: ["Enhance checkout button", "Add continue shopping link", "Show shipping calculator"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "revision":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <MessageCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "success";
      case "pending":
        return "warning";
      case "revision":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <section id="feedback" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Feedback & Iteration Loop</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborate with your team and stakeholders. Collect feedback, track suggestions, 
            and iterate on your wireframes to create the perfect user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-medium bg-card sticky top-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Add Feedback
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Select Wireframe</label>
                  <select className="w-full p-2 border border-input rounded-md bg-background">
                    <option>Homepage</option>
                    <option>Product Detail Page</option>
                    <option>Shopping Cart</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Rating</label>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-warning fill-current cursor-pointer hover:scale-110 transition-transform" />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Your Feedback</label>
                  <Textarea 
                    placeholder="Share your thoughts, suggestions, or concerns about the wireframe..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  Submit Feedback
                </Button>
              </div>
            </Card>
          </div>

          {/* Feedback List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {feedbackItems.map((item) => (
                <Card key={item.id} className="p-6 shadow-medium hover:shadow-strong transition-shadow bg-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-primary/10">
                        <span className="text-sm font-medium text-primary">
                          {item.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{item.author}</h4>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={getStatusColor(item.status) as any}
                        className="capitalize flex items-center gap-1"
                      >
                        {getStatusIcon(item.status)}
                        {item.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                  </div>

                  {item.rating && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${
                              star <= item.rating 
                                ? "text-warning fill-current" 
                                : "text-muted-foreground"
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({item.rating}/5)</span>
                    </div>
                  )}

                  <p className="text-foreground mb-4 leading-relaxed">
                    {item.feedback}
                  </p>

                  {item.suggestions && item.suggestions.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-sm font-medium mb-2">Suggestions:</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.suggestions.map((suggestion, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {suggestion}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Reply
                    </Button>
                    <Button variant="outline" size="sm">
                      Mark as Addressed
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Iteration Summary */}
        <Card className="mt-12 p-6 bg-gradient-card shadow-medium">
          <h3 className="text-lg font-semibold mb-4">Iteration Summary</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Total Feedback</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-1">8</div>
              <div className="text-sm text-muted-foreground">Approved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning mb-1">3</div>
              <div className="text-sm text-muted-foreground">Iterations</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeedbackSection;