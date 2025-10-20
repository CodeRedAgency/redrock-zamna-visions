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
    <Card className="overflow-hidden hover-lift elegant-shadow group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium">{location}</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      {link && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full group">
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
