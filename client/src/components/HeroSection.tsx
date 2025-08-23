import heroImage from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { heroCards } from "@/constants/heroCards";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="from-primary via-primary/90 to-accent relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Animated background elements */}
      <div className="bg-primary-foreground/20 animate-pulse-glow absolute left-10 top-20 h-32 w-32 rounded-full shadow-2xl blur-3xl" />
      <div
        className="bg-primary-foreground/20 animate-float absolute bottom-32 right-16 h-40 w-40 rounded-full shadow-xl blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="bg-primary-foreground/10 animate-float absolute left-1/4 top-1/2 h-20 w-20 rounded-full shadow-lg blur-2xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="container relative z-10 mx-auto px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main heading */}
          <h1 className="text-primary-foreground animate-slide-up mb-8 text-5xl font-extrabold tracking-tight drop-shadow-xl md:text-7xl">
            Your Ride,
            <span className="from-primary-foreground to-primary-foreground/80 block bg-gradient-to-r bg-clip-text text-transparent drop-shadow-2xl">
              Your Way
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-primary-foreground/90 animate-slide-up mx-auto mb-14 max-w-2xl text-2xl font-medium leading-relaxed drop-shadow md:text-3xl"
            style={{ animationDelay: "0.2s" }}
          >
            Experience seamless, safe, and reliable transportation at your
            fingertips.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-slide-up mb-24 flex flex-col items-center justify-center gap-6 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="btn-hero from-primary-foreground via-primary-foreground/90 to-primary-foreground/80 text-primary group cursor-pointer bg-gradient-to-r px-8 py-4 font-semibold shadow-2xl transition-transform duration-200 hover:scale-105"
            >
              Book Your Ride
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary hover:bg-primary-foreground/20 hover:text-secondary cursor-pointer border-2 px-8 py-4 font-semibold shadow-lg transition-colors duration-200"
            >
              Become a Driver
            </Button>
          </div>

          {/* Feature cards */}
          <div
            className="animate-slide-up grid gap-8 sm:grid-cols-2 md:grid-cols-4"
            style={{ animationDelay: "0.6s" }}
          >
            {heroCards.map((feature) => (
              <Card
                key={feature.title}
                className="card-feature bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 cursor-pointer rounded-2xl border p-8 shadow-xl backdrop-blur-lg transition-all duration-200 hover:scale-105"
              >
                {feature.icon}
                <h3 className="text-primary-foreground mb-3 text-xl font-bold tracking-tight drop-shadow">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/80 text-base leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
