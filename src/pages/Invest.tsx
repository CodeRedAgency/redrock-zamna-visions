import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InvestorForm from "@/components/InvestorForm";
import { Shield, TrendingUp, Users, Award, Target, Clock } from "lucide-react";

const Invest = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Invest With Us</h1>
            <p className="text-xl text-muted-foreground">
              Join us in creating the future of experiential luxury hospitality
            </p>
          </div>

          {/* Investment Philosophy */}
          <div className="max-w-5xl mx-auto space-y-16">
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Investment Philosophy</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground text-center space-y-4 mb-12">
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
                <div className="bg-card rounded-lg p-6 elegant-shadow text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Strategic Locations</h3>
                  <p className="text-sm text-muted-foreground">
                    Premier destinations with established tourism demand and strong growth potential
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 elegant-shadow text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Brand Partnership</h3>
                  <p className="text-sm text-muted-foreground">
                    Zamna Group's renowned brand and operational expertise elevate project positioning
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 elegant-shadow text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Multiple Returns</h3>
                  <p className="text-sm text-muted-foreground">
                    Development profits, operational cash flow, and long-term asset appreciation
                  </p>
                </div>
              </div>
            </section>

            {/* Why Invest */}
            <section className="bg-muted/30 rounded-lg p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Invest in Boutique Experiential Hospitality?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Growing Market Demand</h3>
                      <p className="text-sm text-muted-foreground">
                        Travelers increasingly seek unique, authentic experiences over traditional hotel stays. 
                        Boutique experiential properties command premium rates and strong occupancy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Tangible Asset Class</h3>
                      <p className="text-sm text-muted-foreground">
                        Real estate provides a tangible asset with intrinsic value, offering both income 
                        potential and inflation protection through property appreciation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Experienced Team</h3>
                      <p className="text-sm text-muted-foreground">
                        Leverage our proven track record in hospitality development and the operational 
                        excellence of the Zamna Group brand.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Premium Positioning</h3>
                      <p className="text-sm text-muted-foreground">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Investment Structure</h2>
              <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold mb-2">$250K+</p>
                    <p className="text-sm text-primary-foreground/80">Minimum Investment</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2">3-5 Years</p>
                    <p className="text-sm text-primary-foreground/80">Target Hold Period</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2">15-20%</p>
                    <p className="text-sm text-primary-foreground/80">Target IRR</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2">Quarterly</p>
                    <p className="text-sm text-primary-foreground/80">Distribution Frequency</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
                Investment structures are tailored to each project and investor preferences. Detailed offering 
                memoranda with complete financial projections, market analysis, and legal documentation are 
                provided to qualified accredited investors upon request.
              </p>
            </section>

            {/* Investment Process */}
            <section className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Investment Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Initial Inquiry</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit the form below to express interest and provide basic information
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Qualification</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team verifies accredited investor status and discusses investment objectives
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Due Diligence</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive detailed project documentation, financials, and schedule site visit
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-bold mb-2">Investment</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete subscription documents and fund your commitment
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin the Conversation</h2>
                  <p className="text-muted-foreground">
                    Complete the form below to request our investor deck and schedule a confidential consultation.
                  </p>
                </div>
                <InvestorForm />
              </div>
            </section>

            {/* Disclaimer */}
            <section className="animate-fade-in">
              <div className="bg-muted/30 rounded-lg p-6 text-sm text-muted-foreground">
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
