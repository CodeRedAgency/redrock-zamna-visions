import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12 mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-terracotta/20 to-primary/20" />
      <div className="absolute inset-0 gradient-radial opacity-40" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-terracotta to-primary bg-clip-text">RedRockPMI</h3>
            <p className="text-sm text-sand/80">
              Transforming festival energy into timeless destinations. Where sound becomes space, and luxury finds its rhythm.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sand">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-sand/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-sm text-sand/80 hover:text-primary transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-sand/80 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/invest" className="text-sm text-sand/80 hover:text-primary transition-colors">
                  Invest With Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sand">Projects</h4>
            <ul className="space-y-2">
              <li className="text-sm text-sand/80">Tulum Jungle Oasis</li>
              <li className="text-sm text-sand/80">Arizona Desert Retreat</li>
              <li className="text-sm text-sand/80">Foundation Portfolio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sand">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@redrockpmi.com" className="text-sm text-sand/80 hover:text-primary transition-colors">
                  info@redrockpmi.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a href="#" className="text-sm text-sand/80 hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand/20 pt-8 text-center">
          <p className="text-sm text-sand/70">
            © 2025 RedRockPMI. All rights reserved. (built by{" "}
            <a 
              href="https://www.coderedagency.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-terracotta transition-colors underline"
            >
              Code Red Agency
            </a>
            )
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
