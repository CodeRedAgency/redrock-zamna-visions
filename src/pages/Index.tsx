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
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
          <div className="aurora-glow" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-sand">
            Where Music Meets<br />
            <span className="text-transparent bg-gradient-to-r from-terracotta via-primary to-terracotta bg-clip-text animate-shimmer bg-[length:200%_auto]">
              Sacred Spaces
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sand/90 max-w-3xl mx-auto">
            Channeling Zamna's legendary festival energy into immersive boutique destinations where luxury lives in rhythm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg gradient-turquoise glow-turquoise hover:scale-105 transition-transform duration-300">
              <Link to="/portfolio">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg glass border-white/30 hover:bg-white/20 text-sand hover:scale-105 transition-all duration-300">
              <Link to="/invest">Invest With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-deep-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sand">
              A New Chapter in <span className="text-terracotta">Luxury Development</span>
            </h2>
            <p className="text-lg text-sand/80 leading-relaxed">
              RedRockPMI brings decades of proven expertise in real estate investment—from award-winning hotels 
              to high-performing rental portfolios—into an exciting new era. Our landmark partnership with the 
              Zamna Group positions us at the forefront of experiential hospitality, creating destinations that 
              blend luxury, culture, and unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in glass-card p-8 rounded-xl hover-lift">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold mb-2 text-sand">20+</h3>
              <p className="text-sand/70">Years Combined Experience</p>
            </div>
            <div className="animate-scale-in glass-card p-8 rounded-xl hover-lift" style={{ animationDelay: "0.1s" }}>
              <Award className="h-12 w-12 mx-auto mb-4 text-terracotta" />
              <h3 className="text-4xl font-bold mb-2 text-sand">$50M+</h3>
              <p className="text-sand/70">In Successful Projects</p>
            </div>
            <div className="animate-scale-in glass-card p-8 rounded-xl hover-lift" style={{ animationDelay: "0.2s" }}>
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold mb-2 text-sand">2</h3>
              <p className="text-sand/70">Iconic Projects in Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sand">
              Future <span className="text-transparent bg-gradient-to-r from-primary to-terracotta bg-clip-text">Destinations</span>
            </h2>
            <p className="text-lg text-sand/80 max-w-2xl mx-auto">
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
            <Button asChild size="lg" variant="outline" className="glass border-primary/50 hover:bg-primary/10 text-sand hover:scale-105 transition-all duration-300">
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-gradient-to-b from-deep-charcoal to-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sand">
              Built on a Foundation of <span className="text-terracotta">Success</span>
            </h2>
            <p className="text-lg text-sand/80 mb-8 leading-relaxed">
              From developing award-winning hotels like the Comfort Suites in Arizona to transforming 
              single-family homes into thriving short-term rental properties, RedRockPMI has consistently 
              delivered exceptional returns for our partners. This proven track record positions us uniquely 
              to execute on our ambitious vision for boutique experiential hospitality.
            </p>
            <Button asChild size="lg" className="gradient-terracotta glow-terracotta hover:scale-105 transition-transform duration-300">
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-terracotta/20 to-primary/20" />
        <div className="absolute inset-0 gradient-radial opacity-40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-sand">
            Invest in the Future of <span className="text-transparent bg-gradient-to-r from-primary to-terracotta bg-clip-text">Hospitality</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-sand/90 animate-fade-in">
            Join us in creating destinations that transcend traditional hospitality and become cultural landmarks.
          </p>
          <Button asChild size="lg" className="animate-scale-in text-lg gradient-turquoise glow-turquoise hover:scale-105 transition-transform duration-300">
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
