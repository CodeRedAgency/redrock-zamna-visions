import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  link?: string;
}

const ProjectCard = ({ title, description, image, location, link }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift elegant-shadow group glass-card border-white/10">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute top-4 right-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
        <div className="absolute bottom-4 left-4 text-sand">
          <p className="text-sm font-medium flex items-center gap-2">
            <span className="text-primary">●</span> {location}
          </p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-sand group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="text-base text-sand/70">{description}</CardDescription>
      </CardHeader>
      {link && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full group glass border-primary/50 hover:bg-primary/10 text-sand">
            <Link to={link}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
