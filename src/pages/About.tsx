import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, TrendingUp, Building2 } from "lucide-react";
import comfortSuitesImage from "@/assets/comfort-suites-project.jpg";
import cavanHeadshot from "@/assets/cavan headshot suit red tie.JPG";
import seanHeadshot from "@/assets/Sean Tsai headshot.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sand">
              Our <span className="text-terracotta">Story</span>
            </h1>
            <p className="text-xl text-sand/80">
              Building exceptional real estate projects for over two decades
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Company Evolution */}
            <section className="animate-fade-in glass-card p-8 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sand">
                From Foundation to <span className="text-primary">Future</span>
              </h2>
              <div className="prose prose-lg max-w-none text-sand/80 space-y-4">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sand">
                Foundation <span className="text-terracotta">Projects</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src={comfortSuitesImage}
                    alt="Comfort Suites Arizona"
                    className="rounded-lg shadow-xl w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 glass-card p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-sand">Comfort Suites - Arizona</h3>
                  <p className="text-sand/80">
                    A full-service hotel development project that demonstrated our capability to execute 
                    large-scale hospitality ventures. From site selection through construction management 
                    and operational launch, we delivered a property that continues to generate strong returns.
                  </p>
                  <div className="space-y-2 pt-4">
                    <div className="flex items-start space-x-3">
                      <Building2 className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-sand">120+ Rooms</p>
                        <p className="text-sm text-sand/70">Full-service accommodations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-sand">Consistent Performance</p>
                        <p className="text-sm text-sand/70">Strong occupancy rates year-over-year</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-terracotta mt-1" />
                      <div>
                        <p className="font-semibold text-sand">Quality Recognition</p>
                        <p className="text-sm text-sand/70">Comfort Suites Gold Hospitality Award</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 glass-card rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-sand">Residential Portfolio</h3>
                <p className="text-sand/80 mb-6">
                  Beyond commercial hospitality, we've built a diverse portfolio of single-family properties 
                  converted into high-performing short-term rentals. Each property is strategically located 
                  and thoughtfully designed to maximize guest satisfaction and investor returns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">15+</p>
                    <p className="text-sm text-sand/70">Properties Managed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-terracotta mb-2">92%</p>
                    <p className="text-sm text-sand/70">Average Occupancy</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">4.8★</p>
                    <p className="text-sm text-sand/70">Guest Rating Average</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Leadership Team */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-sand">
                Leadership <span className="text-primary">Team</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card rounded-lg p-8 text-center hover-lift">
                  <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary glow-turquoise">
                    <img 
                      src={cavanHeadshot} 
                      alt="Cavan Mitchell Chan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sand">Cavan Mitchell Chan</h3>
                  <p className="text-sm text-terracotta font-medium mb-4">Founder & CEO</p>
                  <p className="text-sm text-sand/80">
                    Seasoned real estate investor and property management expert with extensive experience 
                    in optimizing rental portfolios and developing high-performing hospitality assets. 
                    Cavan's strategic vision combines operational excellence with innovative investment strategies 
                    to unlock value in experiential real estate.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-8 text-center hover-lift">
                  <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-terracotta glow-terracotta">
                    <img 
                      src={seanHeadshot} 
                      alt="Sean Tsai"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sand">Sean Tsai</h3>
                  <p className="text-sm text-terracotta font-medium mb-4">Founder & President of Development</p>
                  <p className="text-sm text-sand/80">
                    Accomplished real estate investor and developer with proven success in hospitality ventures. 
                    Sean brings hands-on experience from operating multiple successful restaurants and curating 
                    large-scale events, perfectly positioning him to lead our experiential hospitality developments 
                    with Zamna Group.
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
