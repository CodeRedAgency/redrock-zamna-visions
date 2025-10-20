import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, TrendingUp, Building2 } from "lucide-react";
import comfortSuitesImage from "@/assets/comfort-suites-project.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              Building exceptional real estate projects for over two decades
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Company Evolution */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Foundation to Future</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  RedRockPMI was founded on a simple principle: exceptional real estate investment requires 
                  vision, expertise, and unwavering commitment to quality. What began as a property management 
                  company has evolved into a comprehensive real estate investment and development firm with a 
                  track record of transforming opportunities into profitable, enduring projects.
                </p>
                <p>
                  Our journey includes the successful development of the Comfort Suites hotel in Arizona—a 
                  project that showcased our ability to navigate complex commercial development while delivering 
                  outstanding returns. We've also built a portfolio of high-performing single-family rental 
                  properties, each carefully selected and optimized for maximum yield.
                </p>
                <p>
                  Today, we stand at an exciting new chapter. Our partnership with the Zamna Group represents 
                  the evolution of everything we've learned: combining proven development expertise with the 
                  visionary aesthetic and experiential focus that defines the future of luxury hospitality.
                </p>
              </div>
            </section>

            {/* Past Projects Showcase */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Foundation Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src={comfortSuitesImage}
                    alt="Comfort Suites Arizona"
                    className="rounded-lg shadow-xl w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Comfort Suites - Arizona</h3>
                  <p className="text-muted-foreground">
                    A full-service hotel development project that demonstrated our capability to execute 
                    large-scale hospitality ventures. From site selection through construction management 
                    and operational launch, we delivered a property that continues to generate strong returns.
                  </p>
                  <div className="space-y-2 pt-4">
                    <div className="flex items-start space-x-3">
                      <Building2 className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">120+ Rooms</p>
                        <p className="text-sm text-muted-foreground">Full-service accommodations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Consistent Performance</p>
                        <p className="text-sm text-muted-foreground">Strong occupancy rates year-over-year</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Quality Recognition</p>
                        <p className="text-sm text-muted-foreground">Comfort Suites Gold Hospitality Award</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Residential Portfolio</h3>
                <p className="text-muted-foreground mb-6">
                  Beyond commercial hospitality, we've built a diverse portfolio of single-family properties 
                  converted into high-performing short-term rentals. Each property is strategically located 
                  and thoughtfully designed to maximize guest satisfaction and investor returns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">15+</p>
                    <p className="text-sm text-muted-foreground">Properties Managed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">92%</p>
                    <p className="text-sm text-muted-foreground">Average Occupancy</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">4.8★</p>
                    <p className="text-sm text-muted-foreground">Guest Rating Average</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Leadership Team */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">JD</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-sm text-accent font-medium mb-4">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">
                    With over 20 years in commercial real estate development, John has led projects 
                    totaling over $50M in value. His vision drives RedRockPMI's strategic expansion 
                    into experiential hospitality.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">SM</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sarah Martinez</h3>
                  <p className="text-sm text-accent font-medium mb-4">VP of Development</p>
                  <p className="text-sm text-muted-foreground">
                    Sarah brings 15 years of hospitality development experience, including boutique 
                    hotel projects across Mexico and the Southwest US. She leads our partnership 
                    initiatives with Zamna Group.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
