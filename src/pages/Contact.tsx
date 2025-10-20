import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sand">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-sand/80">
              Let's discuss how we can work together
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 text-sand">Get In Touch</h2>
                <p className="text-sand/80 mb-8">
                  Whether you're an investor interested in our projects, a partner exploring collaboration 
                  opportunities, or simply want to learn more about RedRockPMI, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 glass-card p-6 rounded-xl hover-lift">
                  <div className="w-12 h-12 gradient-turquoise rounded-lg flex items-center justify-center flex-shrink-0 glow-turquoise">
                    <Mail className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sand">Email</h3>
                    <a href="mailto:info@redrockpmi.com" className="text-sand/80 hover:text-primary transition-colors">
                      info@redrockpmi.com
                    </a>
                    <p className="text-sm text-sand/70 mt-1">
                      For general inquiries and investor relations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-card p-6 rounded-xl hover-lift">
                  <div className="w-12 h-12 gradient-turquoise rounded-lg flex items-center justify-center flex-shrink-0 glow-turquoise">
                    <MapPin className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sand">Office</h3>
                    <p className="text-sand/80">
                      123 Main Street, Suite 500<br />
                      Phoenix, AZ 85001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-card p-6 rounded-xl hover-lift">
                  <div className="w-12 h-12 gradient-terracotta rounded-lg flex items-center justify-center flex-shrink-0 glow-terracotta">
                    <Linkedin className="h-6 w-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sand">LinkedIn</h3>
                    <a href="#" className="text-sand/80 hover:text-primary transition-colors">
                      Connect with us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-lg p-6 mt-8">
                <h3 className="font-bold mb-3 text-sand">Investor Inquiries</h3>
                <p className="text-sm text-sand/80 mb-4">
                  For detailed investment information and private consultations, please visit our 
                  dedicated investor page.
                </p>
                <Button asChild variant="outline" className="w-full glass border-primary/50 hover:bg-primary/10 text-sand">
                  <a href="/invest">Investor Information</a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="glass-card rounded-lg p-8 elegant-shadow">
                <h2 className="text-2xl font-bold mb-6 text-sand">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-turquoise glow-turquoise hover:scale-105 transition-transform duration-300" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
