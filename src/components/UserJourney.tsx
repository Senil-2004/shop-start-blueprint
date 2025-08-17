import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Eye, ShoppingCart, CreditCard, CheckCircle } from "lucide-react";

const UserJourney = () => {
  const journeySteps = [
    {
      id: 1,
      icon: Search,
      title: "Discovery",
      description: "Customer finds your store through search or social media",
      touchpoints: ["Homepage", "Search Results", "Social Media"],
      emotions: ["Curious", "Interested"]
    },
    {
      id: 2,
      icon: Eye,
      title: "Browse & Explore",
      description: "Customer browses categories and views product details",
      touchpoints: ["Category Pages", "Product Detail Page", "Search Bar"],
      emotions: ["Engaged", "Comparing"]
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: "Add to Cart",
      description: "Customer selects products and adds them to shopping cart",
      touchpoints: ["Product Page", "Cart Page", "Quantity Selector"],
      emotions: ["Decided", "Confident"]
    },
    {
      id: 4,
      icon: CreditCard,
      title: "Checkout",
      description: "Customer completes purchase with payment and shipping info",
      touchpoints: ["Checkout Form", "Payment Gateway", "Order Review"],
      emotions: ["Focused", "Cautious"]
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "Confirmation",
      description: "Customer receives order confirmation and tracking details",
      touchpoints: ["Confirmation Page", "Email", "SMS"],
      emotions: ["Satisfied", "Relieved"]
    }
  ];

  return (
    <section id="journey" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Journey Mapping</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understand your customers' path from discovery to purchase. Identify key touchpoints 
            and optimize their experience at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Journey Flow */}
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="flex flex-col lg:flex-row items-center">
                <Card className="p-6 w-full lg:w-80 shadow-medium hover:shadow-strong transition-all bg-card">
                  <div className="text-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="mb-2">
                      Step {step.id}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Touchpoints</h4>
                      <div className="flex flex-wrap gap-1">
                        {step.touchpoints.map((touchpoint) => (
                          <Badge key={touchpoint} variant="secondary" className="text-xs">
                            {touchpoint}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-1">Customer Emotions</h4>
                      <div className="flex flex-wrap gap-1">
                        {step.emotions.map((emotion) => (
                          <Badge key={emotion} variant="outline" className="text-xs">
                            {emotion}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {index < journeySteps.length - 1 && (
                  <div className="flex items-center justify-center lg:mx-4 my-4 lg:my-0">
                    <ArrowRight className="h-6 w-6 text-muted-foreground transform lg:transform-none rotate-90 lg:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;