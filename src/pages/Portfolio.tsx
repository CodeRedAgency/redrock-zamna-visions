import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import tulumImage from "@/assets/tulum-jungle-oasis.jpg";
import arizonaImage from "@/assets/arizona-desert-retreat.jpg";
import comfortSuitesImage from "@/assets/comfort-suites-project.jpg";
import { MapPin, DollarSign, Users, Calendar } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sand">
              <span className="text-transparent bg-gradient-to-r from-terracotta via-primary to-terracotta bg-clip-text">Portfolio</span>
            </h1>
            <p className="text-xl text-sand/80">
              From proven successes to visionary new projects defining the future of luxury hospitality
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="future" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="future" className="text-lg">Future Destinations</TabsTrigger>
              <TabsTrigger value="foundation" className="text-lg">Foundation Projects</TabsTrigger>
            </TabsList>

            {/* Future Projects */}
            <TabsContent value="future" className="space-y-16">
              {/* Tulum Project */}
              <section className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <img
                      src={tulumImage}
                      alt="Tulum Jungle Oasis"
                      className="rounded-lg shadow-2xl w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6 glass-card p-8 rounded-xl">
                    <div>
                      <div className="flex items-center space-x-2 text-terracotta mb-2">
                        <MapPin className="h-5 w-5" />
                        <span className="font-medium">Tulum, Mexico</span>
                      </div>
                      <h2 className="text-4xl font-bold mb-4 text-sand">The Tulum Jungle Oasis</h2>
                      <p className="text-lg text-sand/80 leading-relaxed">
                        An immersive luxury retreat nestled in the heart of Tulum's lush jungle. This property 
                        embodies the Zamna aesthetic: bohemian chic design with thatched roofs, open-air pavilions, 
                        natural materials, and seamless integration with the tropical landscape.
                      </p>
                    </div>

                    <div className="glass-card rounded-lg p-6 space-y-4">
                      <h3 className="text-xl font-bold text-sand">Project Vision</h3>
                      <p className="text-sand/80">
                        A destination that offers more than accommodation—guests will experience curated wellness 
                        programs, cultural events, and immersive nature experiences. The property will feature 
                        35 exclusive suites, a signature restaurant highlighting local cuisine, a jungle spa, 
                        and event spaces for music and cultural programming.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-card rounded-lg p-4 elegant-shadow hover-lift">
                        <Users className="h-6 w-6 text-primary mb-2" />
                        <p className="text-2xl font-bold text-sand">35</p>
                        <p className="text-sm text-sand/70">Luxury Suites</p>
                      </div>
                      <div className="glass-card rounded-lg p-4 elegant-shadow hover-lift">
                        <DollarSign className="h-6 w-6 text-terracotta mb-2" />
                        <p className="text-2xl font-bold text-sand">$450+</p>
                        <p className="text-sm text-sand/70">Target ADR</p>
                      </div>
                      <div className="glass-card rounded-lg p-4 elegant-shadow hover-lift">
                        <Calendar className="h-6 w-6 text-primary mb-2" />
                        <p className="text-2xl font-bold text-sand">Q4 2026</p>
                        <p className="text-sm text-sand/70">Target Opening</p>
                      </div>
                      <div className="glass-card rounded-lg p-4 elegant-shadow hover-lift">
                        <MapPin className="h-6 w-6 text-terracotta mb-2" />
                        <p className="text-2xl font-bold text-sand">5 Acres</p>
                        <p className="text-sm text-sand/70">Jungle Property</p>
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full gradient-turquoise glow-turquoise hover:scale-105 transition-transform duration-300">
                      <Link to="/invest">Inquire About This Project</Link>
                    </Button>
                  </div>
                </div>
              </section>

              {/* Arizona Project */}
              <section className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="order-2 lg:order-1 space-y-6 glass-card p-8 rounded-xl">
                    <div>
                      <div className="flex items-center space-x-2 text-terracotta mb-2">
                        <MapPin className="h-5 w-5" />
                        <span className="font-medium">Sedona, Arizona, USA</span>
                      </div>
                      <h2 className="text-4xl font-bold mb-4 text-sand">The Arizona Desert Retreat</h2>
                      <p className="text-lg text-sand/80 leading-relaxed">
                        A modern sanctuary of minimalist luxury set against Arizona's iconic red rock formations. 
                        This property marries contemporary architecture with natural stone and wood elements, 
                        creating an intimate escape for travelers seeking serenity and sophistication.
                      </p>
                    </div>

                    <div className="glass-card rounded-lg p-6 space-y-4">
                      <h3 className="text-xl font-bold text-sand">Project Vision</h3>
                      <p className="text-sand/80">
                        Designed for wellness-focused travelers and discerning guests, this 28-suite property 
                        will feature floor-to-ceiling windows showcasing desert vistas, an infinity pool overlooking 
                        red rocks, a desert botanical spa, and curated hiking and outdoor experiences led by 
                        local guides.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-card rounded-lg p-4 elegant-shadow hover-lift">
                        <Users className="h-6 w-6 text-primary mb-2" />
                        <p className="text-2xl font-bold text-sand">28</p>
                        <p className="text-sm text-sand/70">Luxury Suites</p>
                      </div>
                      <div className="glass-card rounded-lg p-4 elegant-shadow hover-lift">
                        <DollarSign className="h-6 w-6 text-terracotta mb-2" />
                        <p className="text-2xl font-bold text-sand">$380+</p>
                        <p className="text-sm text-sand/70">Target ADR</p>
                      </div>
                      <div className="glass-card rounded-lg p-4 elegant-shadow hover-lift">
                        <Calendar className="h-6 w-6 text-primary mb-2" />
                        <p className="text-2xl font-bold text-sand">Q2 2027</p>
                        <p className="text-sm text-sand/70">Target Opening</p>
                      </div>
                      <div className="glass-card rounded-lg p-4 elegant-shadow hover-lift">
                        <MapPin className="h-6 w-6 text-terracotta mb-2" />
                        <p className="text-2xl font-bold text-sand">12 Acres</p>
                        <p className="text-sm text-sand/70">Desert Property</p>
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full gradient-turquoise glow-turquoise hover:scale-105 transition-transform duration-300">
                      <Link to="/invest">Inquire About This Project</Link>
                    </Button>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img
                      src={arizonaImage}
                      alt="Arizona Desert Retreat"
                      className="rounded-lg shadow-2xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              </section>
            </TabsContent>

            {/* Foundation Projects */}
            <TabsContent value="foundation" className="space-y-12">
              <div className="animate-fade-in">
                <p className="text-lg text-sand/80 mb-12 text-center max-w-3xl mx-auto">
                  Our proven track record in hospitality and real estate investment demonstrates the 
                  expertise and execution capability that makes our future projects possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <ProjectCard
                    title="Comfort Suites Arizona"
                    description="A successful full-service hotel development showcasing our commercial hospitality expertise. 120+ rooms with consistent strong performance."
                    image={comfortSuitesImage}
                    location="Arizona, USA"
                  />
                  <div className="glass-card rounded-lg p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-sand">Residential Portfolio</h3>
                    <p className="text-sand/80 mb-6">
                      A diverse collection of 15+ single-family properties optimized as high-performing 
                      short-term rentals across Arizona. Each property delivers exceptional guest experiences 
                      and investor returns.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-sand/70">Portfolio Value</span>
                        <span className="font-bold text-primary">$8.5M+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-sand/70">Avg. Occupancy</span>
                        <span className="font-bold text-terracotta">92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-sand/70">Guest Rating</span>
                        <span className="font-bold text-primary">4.8★</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg p-8 text-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-terracotta/20 to-primary/20" />
                  <div className="absolute inset-0 gradient-radial opacity-40" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-sand">Ready to Learn More?</h3>
                    <p className="mb-6 text-sand/90">
                      Discover detailed investment information about our upcoming boutique hotel projects.
                    </p>
                    <Button asChild size="lg" className="gradient-turquoise glow-turquoise hover:scale-105 transition-transform duration-300">
                      <Link to="/invest">Explore Investment Opportunities</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
