import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import partnershipImage from "@/assets/partnership-vision.jpg";
import tulumImage from "@/assets/tulum-jungle-oasis.jpg";
import { Sparkles, Globe, Heart, ArrowRight } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">The Zamna Partnership</h1>
            <p className="text-xl text-muted-foreground">
              A visionary collaboration redefining experiential luxury hospitality
            </p>
          </div>

          {/* Partnership Image */}
          <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
            <img
              src={partnershipImage}
              alt="Partnership vision"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Partnership Story */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">More Than Hotels — Cultural Destinations</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  The partnership between RedRockPMI and Zamna Group represents a convergence of expertise 
                  and vision. Zamna Group has captivated the world with its immersive music festivals and 
                  stunning hotel experiences in Tulum, creating destinations where culture, music, and luxury 
                  converge seamlessly.
                </p>
                <p>
                  RedRockPMI brings decades of proven real estate development and investment success to this 
                  partnership. Together, we're creating boutique hotel projects that transcend traditional 
                  hospitality—each property will be a destination in its own right, offering guests not just 
                  a place to stay, but an experience they'll never forget.
                </p>
                <p>
                  Our shared vision: develop properties that honor their natural surroundings, celebrate local 
                  culture, and provide immersive experiences that resonate with the modern luxury traveler 
                  seeking authenticity and connection.
                </p>
              </div>
            </section>

            {/* Zamna Aesthetic */}
            <section className="bg-muted/30 rounded-lg p-8 md:p-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Zamna Aesthetic</h2>
                  <p className="text-muted-foreground mb-6">
                    Drawing inspiration from Zamna's renowned Tulum properties, our projects embrace 
                    bohemian luxury: organic materials, open-air designs, lush natural integration, 
                    and spaces that blur the line between interior comfort and outdoor serenity.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Immersive design celebrating natural surroundings</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Cultural integration and local authenticity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Wellness-focused amenities and experiences</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src={tulumImage}
                    alt="Zamna-inspired design"
                    className="rounded-lg shadow-xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Shared Values */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Shared Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-lg p-6 elegant-shadow">
                  <h3 className="text-xl font-bold mb-3">Authentic Experiences</h3>
                  <p className="text-sm text-muted-foreground">
                    Every property tells a story rooted in its location, creating genuine connections 
                    between guests and place.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 elegant-shadow">
                  <h3 className="text-xl font-bold mb-3">Sustainable Luxury</h3>
                  <p className="text-sm text-muted-foreground">
                    Beautiful design that respects and enhances the natural environment, ensuring 
                    long-term value for communities and investors.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 elegant-shadow">
                  <h3 className="text-xl font-bold mb-3">Cultural Celebration</h3>
                  <p className="text-sm text-muted-foreground">
                    Spaces that host events, art, music, and experiences celebrating local and 
                    international culture.
                  </p>
                </div>
              </div>
            </section>

            {/* Quote Section */}
            <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
                "Together with Zamna Group, we're not just building hotels—we're creating landmarks 
                of culture and experience that will define the future of luxury hospitality."
              </blockquote>
              <p className="text-lg font-medium">— RedRockPMI Leadership Team</p>
            </section>

            {/* CTA */}
            <section className="text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of This Vision</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us in bringing these extraordinary projects to life and share in the success 
                of experiential hospitality's next evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/portfolio">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/invest">Investment Opportunities</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vision;
