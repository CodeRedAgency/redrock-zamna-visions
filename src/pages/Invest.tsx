import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InvestorForm from "@/components/InvestorForm";
import { Shield, TrendingUp, Users, Award, Target, Clock } from "lucide-react";

const Invest = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sand">
              Invest <span className="text-transparent bg-gradient-to-r from-primary to-terracotta bg-clip-text">With Us</span>
            </h1>
            <p className="text-xl text-sand/80">
              Join us in creating the future of experiential luxury hospitality
            </p>
          </div>

          {/* Investment Philosophy */}
          <div className="max-w-5xl mx-auto space-y-16">
            <section className="animate-fade-in glass-card p-8 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-sand">
                Our Investment <span className="text-primary">Philosophy</span>
              </h2>
              <div className="prose prose-lg max-w-none text-sand/80 text-center space-y-4 mb-12">
                <p>
                  RedRockPMI offers accredited investors the opportunity to participate in boutique hotel 
                  development projects that combine proven real estate fundamentals with the high-growth 
                  potential of experiential hospitality. Our partnership with Zamna Group provides unique 
                  access to a proven brand and aesthetic that commands premium positioning in the market.
                </p>
                <p>
                  We focus on properties in premier locations with strong tourism fundamentals, ensuring 
                  both immediate appeal and long-term value appreciation. Each project is structured to 
                  provide multiple value creation opportunities: development profit, operational cash flow, 
                  and asset appreciation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card rounded-lg p-6 elegant-shadow text-center hover-lift">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3 text-sand">Strategic Locations</h3>
                  <p className="text-sm text-sand/80">
                    Premier destinations with established tourism demand and strong growth potential
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6 elegant-shadow text-center hover-lift">
                  <Award className="h-12 w-12 mx-auto mb-4 text-terracotta" />
                  <h3 className="text-xl font-bold mb-3 text-sand">Brand Partnership</h3>
                  <p className="text-sm text-sand/80">
                    Zamna Group's renowned brand and operational expertise elevate project positioning
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6 elegant-shadow text-center hover-lift">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3 text-sand">Multiple Returns</h3>
                  <p className="text-sm text-sand/80">
                    Development profits, operational cash flow, and long-term asset appreciation
                  </p>
                </div>
              </div>
            </section>

            {/* Why Invest */}
            <section className="glass-card rounded-lg p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sand">
                Why Invest in Boutique <span className="text-primary">Experiential Hospitality?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-sand">Growing Market Demand</h3>
                      <p className="text-sm text-sand/80">
                        Travelers increasingly seek unique, authentic experiences over traditional hotel stays. 
                        Boutique experiential properties command premium rates and strong occupancy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-terracotta mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-sand">Tangible Asset Class</h3>
                      <p className="text-sm text-sand/80">
                        Real estate provides a tangible asset with intrinsic value, offering both income 
                        potential and inflation protection through property appreciation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-sand">Experienced Team</h3>
                      <p className="text-sm text-sand/80">
                        Leverage our proven track record in hospitality development and the operational 
                        excellence of the Zamna Group brand.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-terracotta mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-sand">Premium Positioning</h3>
                      <p className="text-sm text-sand/80">
                        The Zamna brand aesthetic and experiential focus enable higher ADR and stronger 
                        guest loyalty compared to traditional boutique hotels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Investment Structure */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-sand">
                Investment <span className="text-primary">Structure</span>
              </h2>
              <div className="relative overflow-hidden rounded-lg p-8 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-terracotta/20 to-primary/20" />
                <div className="absolute inset-0 gradient-radial opacity-40" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold mb-2 text-sand">$250K+</p>
                    <p className="text-sm text-sand/70">Minimum Investment</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2 text-sand">3-5 Years</p>
                    <p className="text-sm text-sand/70">Target Hold Period</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2 text-sand">15-20%</p>
                    <p className="text-sm text-sand/70">Target IRR</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2 text-sand">Quarterly</p>
                    <p className="text-sm text-sand/70">Distribution Frequency</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-sand/70 max-w-3xl mx-auto">
                Investment structures are tailored to each project and investor preferences. Detailed offering 
                memoranda with complete financial projections, market analysis, and legal documentation are 
                provided to qualified accredited investors upon request.
              </p>
            </section>

            {/* Investment Process */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-sand">
                Investment <span className="text-primary">Process</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-turquoise rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 glow-turquoise text-charcoal">
                    1
                  </div>
                  <h3 className="font-bold mb-2 text-sand">Initial Inquiry</h3>
                  <p className="text-sm text-sand/80">
                    Submit the form below to express interest and provide basic information
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 gradient-turquoise rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 glow-turquoise text-charcoal">
                    2
                  </div>
                  <h3 className="font-bold mb-2 text-sand">Qualification</h3>
                  <p className="text-sm text-sand/80">
                    Our team verifies accredited investor status and discusses investment objectives
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 gradient-turquoise rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 glow-turquoise text-charcoal">
                    3
                  </div>
                  <h3 className="font-bold mb-2 text-sand">Due Diligence</h3>
                  <p className="text-sm text-sand/80">
                    Receive detailed project documentation, financials, and schedule site visit
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 gradient-turquoise rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 glow-turquoise text-charcoal">
                    4
                  </div>
                  <h3 className="font-bold mb-2 text-sand">Investment</h3>
                  <p className="text-sm text-sand/80">
                    Complete subscription documents and fund your commitment
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sand">
                    Begin the <span className="text-primary">Conversation</span>
                  </h2>
                  <p className="text-sand/80">
                    Complete the form below to request our investor deck and schedule a confidential consultation.
                  </p>
                </div>
                <InvestorForm />
              </div>
            </section>

            {/* Disclaimer */}
            <section className="animate-fade-in">
              <div className="glass-card rounded-lg p-6 text-sm text-sand/70">
                <p className="mb-2">
                  <strong>Important Disclosure:</strong> Investment opportunities are available only to accredited 
                  investors as defined under Regulation D of the Securities Act of 1933. All investments involve risk, 
                  including the potential loss of principal. Past performance does not guarantee future results. 
                  Target returns are projections only and not guarantees.
                </p>
                <p>
                  Information provided on this website does not constitute an offer to sell or a solicitation of an 
                  offer to buy securities. Such offers are made only through formal offering documents provided to 
                  qualified investors.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Invest;
