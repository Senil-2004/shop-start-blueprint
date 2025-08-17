import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Package, ShoppingCart, Star, Heart, User } from "lucide-react";

const WireframeSection = () => {
  return (
    <section id="wireframes" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Wireframes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore wireframes for the three essential pages of your online store. 
            Click through different layouts and understand the user experience flow.
          </p>
        </div>

        <Tabs defaultValue="homepage" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="homepage" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Homepage
            </TabsTrigger>
            <TabsTrigger value="product" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Product Detail
            </TabsTrigger>
            <TabsTrigger value="cart" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Shopping Cart
            </TabsTrigger>
          </TabsList>

          <TabsContent value="homepage">
            <Card className="p-8 bg-wireframe-bg border-wireframe-border">
              <div className="bg-wireframe-element border border-wireframe-border rounded-lg p-6 mb-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-wireframe-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-primary/20 rounded"></div>
                    <div className="w-24 h-4 bg-muted rounded"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-16 h-4 bg-muted rounded"></div>
                    <div className="w-16 h-4 bg-muted rounded"></div>
                    <div className="w-20 h-8 bg-primary/20 rounded"></div>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-8 p-8 bg-muted/30 rounded-lg">
                  <div className="w-32 h-6 bg-primary/20 rounded mx-auto mb-4"></div>
                  <div className="w-48 h-4 bg-muted rounded mx-auto mb-6"></div>
                  <div className="w-24 h-8 bg-accent/20 rounded mx-auto"></div>
                </div>

                {/* Featured Products */}
                <div className="mb-6">
                  <div className="w-32 h-5 bg-muted rounded mb-4"></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="border border-wireframe-border rounded p-4 bg-wireframe-element">
                        <div className="w-full h-32 bg-muted rounded mb-3"></div>
                        <div className="w-20 h-4 bg-muted rounded mb-2"></div>
                        <div className="w-16 h-4 bg-success/20 rounded mb-2"></div>
                        <div className="w-full h-8 bg-primary/20 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <div className="w-24 h-5 bg-muted rounded mb-4"></div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="border border-wireframe-border rounded p-3 text-center bg-wireframe-element">
                        <div className="w-full h-20 bg-muted rounded mb-2"></div>
                        <div className="w-16 h-3 bg-muted rounded mx-auto"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-1">Homepage Wireframe</h3>
                  <p className="text-sm text-muted-foreground">
                    Navigation, hero section, featured products, and category grid
                  </p>
                </div>
                <Badge variant="outline">v1.0</Badge>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="product">
            <Card className="p-8 bg-wireframe-bg border-wireframe-border">
              <div className="bg-wireframe-element border border-wireframe-border rounded-lg p-6 mb-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-wireframe-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-primary/20 rounded"></div>
                    <div className="w-24 h-4 bg-muted rounded"></div>
                  </div>
                  <div className="flex gap-2">
                    <User className="h-6 w-6 text-muted-foreground" />
                    <ShoppingCart className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-12 h-3 bg-muted rounded"></div>
                  <span className="text-muted-foreground">/</span>
                  <div className="w-16 h-3 bg-muted rounded"></div>
                  <span className="text-muted-foreground">/</span>
                  <div className="w-20 h-3 bg-primary/20 rounded"></div>
                </div>

                {/* Product Detail */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div>
                    <div className="w-full h-64 bg-muted rounded-lg mb-4"></div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="w-full h-16 bg-muted/50 rounded border"></div>
                      ))}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div className="w-48 h-6 bg-muted rounded"></div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-warning fill-current" />
                        ))}
                      </div>
                      <div className="w-12 h-3 bg-muted rounded"></div>
                    </div>
                    <div className="w-20 h-8 bg-success/20 rounded"></div>
                    
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-muted/50 rounded"></div>
                      <div className="w-3/4 h-3 bg-muted/50 rounded"></div>
                      <div className="w-5/6 h-3 bg-muted/50 rounded"></div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <div className="w-32 h-10 bg-primary/20 rounded"></div>
                      <div className="w-10 h-10 bg-muted border border-wireframe-border rounded flex items-center justify-center">
                        <Heart className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-8 pt-6 border-t border-wireframe-border">
                  <div className="w-32 h-5 bg-muted rounded mb-4"></div>
                  <div className="space-y-4">
                    {[1, 2].map((review) => (
                      <div key={review} className="border border-wireframe-border rounded p-4 bg-wireframe-element">
                        <div className="flex justify-between items-start mb-2">
                          <div className="w-20 h-4 bg-muted rounded"></div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-3 w-3 text-warning fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-3 bg-muted/50 rounded"></div>
                          <div className="w-2/3 h-3 bg-muted/50 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-1">Product Detail Page</h3>
                  <p className="text-sm text-muted-foreground">
                    Product images, details, pricing, reviews, and add-to-cart
                  </p>
                </div>
                <Badge variant="outline">v1.0</Badge>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="cart">
            <Card className="p-8 bg-wireframe-bg border-wireframe-border">
              <div className="bg-wireframe-element border border-wireframe-border rounded-lg p-6 mb-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-wireframe-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-primary/20 rounded"></div>
                    <div className="w-24 h-4 bg-muted rounded"></div>
                  </div>
                  <div className="flex gap-2">
                    <User className="h-6 w-6 text-muted-foreground" />
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="w-32 h-6 bg-muted rounded mb-6"></div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Cart Items */}
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="border border-wireframe-border rounded p-4 bg-wireframe-element">
                          <div className="flex gap-4">
                            <div className="w-20 h-20 bg-muted rounded"></div>
                            <div className="flex-1">
                              <div className="w-32 h-4 bg-muted rounded mb-2"></div>
                              <div className="w-24 h-3 bg-muted/50 rounded mb-3"></div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 border border-wireframe-border rounded text-center text-xs">1</div>
                                  <div className="w-16 h-4 bg-success/20 rounded"></div>
                                </div>
                                <div className="w-12 h-4 bg-destructive/20 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div>
                    <div className="border border-wireframe-border rounded p-4 bg-wireframe-element sticky top-4">
                      <div className="w-24 h-5 bg-muted rounded mb-4"></div>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <div className="w-16 h-3 bg-muted/50 rounded"></div>
                          <div className="w-12 h-3 bg-muted/50 rounded"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="w-20 h-3 bg-muted/50 rounded"></div>
                          <div className="w-10 h-3 bg-muted/50 rounded"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="w-12 h-3 bg-muted/50 rounded"></div>
                          <div className="w-8 h-3 bg-muted/50 rounded"></div>
                        </div>
                        <hr className="border-wireframe-border" />
                        <div className="flex justify-between">
                          <div className="w-16 h-4 bg-muted rounded"></div>
                          <div className="w-16 h-4 bg-success/20 rounded"></div>
                        </div>
                      </div>
                      <div className="w-full h-10 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-1">Shopping Cart Page</h3>
                  <p className="text-sm text-muted-foreground">
                    Item list, quantity controls, pricing summary, and checkout button
                  </p>
                </div>
                <Badge variant="outline">v1.0</Badge>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WireframeSection;