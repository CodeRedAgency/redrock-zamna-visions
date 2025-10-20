import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import heroImage from "@/assets/hero-jungle-hotel.jpg";
import tulumImage from "@/assets/tulum-jungle-oasis.jpg";
import arizonaImage from "@/assets/arizona-desert-retreat.jpg";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury jungle hotel architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Engineering the Future of<br />
            <span className="text-gradient">Experiential Hospitality</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sand max-w-3xl mx-auto">
            A visionary partnership with Zamna Group to create iconic boutique hotel investment opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/portfolio">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20">
              <Link to="/invest">Invest With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">A New Chapter in Luxury Development</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RedRockPMI brings decades of proven expertise in real estate investment—from award-winning hotels 
              to high-performing rental portfolios—into an exciting new era. Our landmark partnership with the 
              Zamna Group positions us at the forefront of experiential hospitality, creating destinations that 
              blend luxury, culture, and unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p className="text-primary-foreground/80">Years Combined Experience</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-4xl font-bold mb-2">$50M+</h3>
              <p className="text-primary-foreground/80">In Successful Projects</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-4xl font-bold mb-2">2</h3>
              <p className="text-primary-foreground/80">Iconic Projects in Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Future Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our upcoming boutique hotel projects that redefine luxury experiential hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="animate-fade-in">
              <ProjectCard
                title="The Tulum Jungle Oasis"
                description="An immersive luxury retreat in the heart of Tulum's jungle, blending Zamna's experiential aesthetic with world-class accommodations."
                image={tulumImage}
                location="Tulum, Mexico"
                link="/portfolio"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <ProjectCard
                title="The Arizona Desert Retreat"
                description="A modern desert sanctuary featuring minimalist luxury against the stunning backdrop of Arizona's red rock formations."
                image={arizonaImage}
                location="Arizona, USA"
                link="/portfolio"
              />
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built on a Foundation of Success</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From developing award-winning hotels like the Comfort Suites in Arizona to transforming 
              single-family homes into thriving short-term rental properties, RedRockPMI has consistently 
              delivered exceptional returns for our partners. This proven track record positions us uniquely 
              to execute on our ambitious vision for boutique experiential hospitality.
            </p>
            <Button asChild size="lg">
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-jungle to-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Invest in the Future of Hospitality
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in">
            Join us in creating destinations that transcend traditional hospitality and become cultural landmarks.
          </p>
          <Button asChild size="lg" variant="secondary" className="animate-scale-in text-lg">
            <Link to="/invest">
              Explore Investment Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
