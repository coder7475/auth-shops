import { useEffect } from "react";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import {
  Car,
  CreditCard,
  MapPin,
  Quote,
  Shield,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router";

const Index = () => {
  const { data } = useUserInfoQuery(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data?.email) {
      navigate("/dashboard");
    }
  }, [data?.data?.email, navigate]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              How{" "}
              <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
                RideBook
              </span>{" "}
              Works
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Getting your ride is simple, fast, and secure - in just a few taps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="bg-primary shadow-glow mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                  <Smartphone className="text-primary-foreground h-10 w-10" />
                </div>
                <div className="bg-accent text-accent-foreground absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Request Your Ride</h3>
              <p className="text-muted-foreground">
                Open the app, enter your destination, and choose your preferred
                ride type. Get upfront pricing instantly.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="bg-accent shadow-glow mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                  <Car className="text-accent-foreground h-10 w-10" />
                </div>
                <div className="bg-accent text-accent-foreground absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Get Matched</h3>
              <p className="text-muted-foreground">
                We connect you with a nearby verified driver. Track their
                arrival in real-time and see vehicle details.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="bg-primary shadow-glow mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                  <CreditCard className="text-primary-foreground h-10 w-10" />
                </div>
                <div className="bg-accent text-accent-foreground absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Enjoy & Pay</h3>
              <p className="text-muted-foreground">
                Enjoy your comfortable ride with live tracking. Payment is
                seamless through your preferred method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Why Choose{" "}
              <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
                RideBook
              </span>
              ?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Experience the future of transportation with our cutting-edge
              platform
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <Card className="card-gradient p-8 text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Users className="text-primary-foreground h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Trusted Community</h3>
              <p className="text-muted-foreground">
                Join millions of satisfied riders and verified professional
                drivers worldwide
              </p>
            </Card>

            <Card className="card-gradient p-8 text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-accent mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <MapPin className="text-accent-foreground h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Live GPS Tracking</h3>
              <p className="text-muted-foreground">
                Real-time location updates and route optimization for the
                fastest, safest journey
              </p>
            </Card>

            <Card className="card-gradient p-8 text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Shield className="text-primary-foreground h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Safety First</h3>
              <p className="text-muted-foreground">
                24/7 support, emergency assistance, and comprehensive insurance
                coverage
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="animate-slide-up">
              <div className="mb-2 text-4xl font-bold md:text-5xl">50M+</div>
              <div className="text-primary-foreground/80">Happy Riders</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-2 text-4xl font-bold md:text-5xl">1M+</div>
              <div className="text-primary-foreground/80">Active Drivers</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-2 text-4xl font-bold md:text-5xl">500+</div>
              <div className="text-primary-foreground/80">Cities Covered</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="mb-2 text-4xl font-bold md:text-5xl">4.9★</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              What Our{" "}
              <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
                Users
              </span>{" "}
              Say
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Real experiences from millions of satisfied riders and drivers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="card-gradient p-8">
              <div className="mb-4 flex items-center">
                <Quote className="text-primary mb-4 h-8 w-8" />
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "RideBook has completely transformed my daily commute. The
                drivers are always professional, and the app is incredibly
                user-friendly. I can't imagine using any other service!"
              </p>
              <div className="flex items-center">
                <div className="bg-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-primary-foreground font-semibold">
                    SM
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Martinez</h4>
                  <p className="text-muted-foreground text-sm">
                    Marketing Executive
                  </p>
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card-gradient p-8">
              <div className="mb-4 flex items-center">
                <Quote className="text-primary mb-4 h-8 w-8" />
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "As a driver, RideBook has given me the flexibility to earn on
                my own schedule. The platform is reliable, payments are instant,
                and the support team is always helpful."
              </p>
              <div className="flex items-center">
                <div className="bg-accent mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-accent-foreground font-semibold">
                    MJ
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Johnson</h4>
                  <p className="text-muted-foreground text-sm">
                    Professional Driver
                  </p>
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card-gradient p-8">
              <div className="mb-4 flex items-center">
                <Quote className="text-primary mb-4 h-8 w-8" />
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "The safety features and real-time tracking give me peace of
                mind. Whether it's a late-night ride or a business trip, I
                always feel secure with RideBook."
              </p>
              <div className="flex items-center">
                <div className="bg-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-primary-foreground font-semibold">
                    EC
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">Emily Chen</h4>
                  <p className="text-muted-foreground text-sm">
                    Software Engineer
                  </p>
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title={"Ready to Start Your Journey?"}
        description={
          "Join millions of users who trust RideBook for their daily transportation needs"
        }
        btnText={" Get Started Today"}
      />
    </div>
  );
};

export default Index;
