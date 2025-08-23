import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { Button } from "./ui/button";

interface CTAProps {
  title: string;
  description: string;
  btnText: string;
}

const CTA = ({ title, description, btnText }: CTAProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/register">
            <Button size="lg" className="btn-hero group cursor-pointer">
              {btnText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/faq">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:text-secondary-foreground cursor-pointer"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
