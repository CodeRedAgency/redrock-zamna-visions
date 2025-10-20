import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import partnershipImage from "@/assets/partnership-vision.jpg";
import tulumImage from "@/assets/tulum-jungle-oasis.jpg";
import { Sparkles, Globe, Heart, ArrowRight } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sand">
              The <span className="text-transparent bg-gradient-to-r from-primary to-terracotta bg-clip-text">Zamna Partnership</span>
            </h1>
            <p className="text-xl text-sand/80">
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
            <section className="animate-fade-in glass-card p-8 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sand">
                More Than Hotels — <span className="text-primary">Cultural Destinations</span>
              </h2>
              <div className="prose prose-lg max-w-none text-sand/80 space-y-4">
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
            <section className="glass-card rounded-lg p-8 md:p-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-sand">
                    The <span className="text-terracotta">Zamna Aesthetic</span>
                  </h2>
                  <p className="text-sand/80 mb-6">
                    Drawing inspiration from Zamna's renowned Tulum properties, our projects embrace 
                    bohemian luxury: organic materials, open-air designs, lush natural integration, 
                    and spaces that blur the line between interior comfort and outdoor serenity.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sand/80">Immersive design celebrating natural surroundings</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-terracotta mt-1 flex-shrink-0" />
                      <span className="text-sand/80">Cultural integration and local authenticity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sand/80">Wellness-focused amenities and experiences</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-sand">
                Our Shared <span className="text-primary">Principles</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card rounded-lg p-6 elegant-shadow hover-lift">
                  <h3 className="text-xl font-bold mb-3 text-sand">Authentic Experiences</h3>
                  <p className="text-sm text-sand/80">
                    Every property tells a story rooted in its location, creating genuine connections 
                    between guests and place.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6 elegant-shadow hover-lift">
                  <h3 className="text-xl font-bold mb-3 text-sand">Sustainable Luxury</h3>
                  <p className="text-sm text-sand/80">
                    Beautiful design that respects and enhances the natural environment, ensuring 
                    long-term value for communities and investors.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6 elegant-shadow hover-lift">
                  <h3 className="text-xl font-bold mb-3 text-sand">Cultural Celebration</h3>
                  <p className="text-sm text-sand/80">
                    Spaces that host events, art, music, and experiences celebrating local and 
                    international culture.
                  </p>
                </div>
              </div>
            </section>

            {/* Quote Section */}
            <section className="relative overflow-hidden rounded-lg p-8 md:p-12 text-center animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-terracotta/20 to-primary/20" />
              <div className="absolute inset-0 gradient-radial opacity-40" />
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-serif italic mb-6 text-sand">
                  "Together with Zamna Group, we're not just building hotels—we're creating landmarks 
                  of culture and experience that will define the future of luxury hospitality."
                </blockquote>
                <p className="text-lg font-medium text-terracotta">— RedRockPMI Leadership Team</p>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sand">
                Be Part of This <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-sand/80 mb-8 max-w-2xl mx-auto">
                Join us in bringing these extraordinary projects to life and share in the success 
                of experiential hospitality's next evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-turquoise glow-turquoise hover:scale-105 transition-transform duration-300">
                  <Link to="/portfolio">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass border-primary/50 hover:bg-primary/10 text-sand hover:scale-105 transition-all duration-300">
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
