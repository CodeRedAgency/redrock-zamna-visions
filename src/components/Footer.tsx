import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RedRockPMI</h3>
            <p className="text-sm text-primary-foreground/80">
              Engineering the future of experiential hospitality through strategic partnerships and visionary development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-sm hover:text-accent transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/invest" className="text-sm hover:text-accent transition-colors">
                  Invest With Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Tulum Jungle Oasis</li>
              <li className="text-sm text-primary-foreground/80">Arizona Desert Retreat</li>
              <li className="text-sm text-primary-foreground/80">Foundation Portfolio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@redrockpmi.com" className="text-sm hover:text-accent transition-colors">
                  info@redrockpmi.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <a href="#" className="text-sm hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} RedRockPMI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
