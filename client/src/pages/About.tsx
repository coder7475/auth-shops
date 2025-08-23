import CTA from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { leaders } from "@/constants/leaders";
import { Award, Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-slide-up mb-6 text-5xl font-bold md:text-6xl">
              About{" "}
              <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent dark:text-white">
                RideBook
              </span>
            </h1>
            <p
              className="text-muted-foreground animate-slide-up mb-8 text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              We're revolutionizing transportation by connecting riders and
              drivers through innovative technology, creating safer, more
              reliable, and accessible mobility solutions for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                To provide safe, reliable, and affordable transportation
                solutions that connect communities and empower people to move
                freely and efficiently in their daily lives.
              </p>
              <p className="text-muted-foreground text-lg">
                We believe transportation should be accessible to everyone,
                which is why we're committed to building technology that makes
                getting around easier, safer, and more sustainable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="card-gradient p-6 text-center">
                <Users className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 font-semibold">Community First</h3>
                <p className="text-muted-foreground text-sm">
                  Building stronger communities through better transportation
                </p>
              </Card>

              <Card className="card-gradient p-6 text-center">
                <Target className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 font-semibold">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Leveraging technology to solve real-world problems
                </p>
              </Card>

              <Card className="card-gradient p-6 text-center">
                <Award className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 font-semibold">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Setting the highest standards in service quality
                </p>
              </Card>

              <Card className="card-gradient p-6 text-center">
                <Heart className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 font-semibold">Care</h3>
                <p className="text-muted-foreground text-sm">
                  Putting people and safety at the heart of everything we do
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-4xl font-bold">Our Impact</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="animate-slide-up">
              <div className="mb-2 text-5xl font-bold">50M+</div>
              <div className="text-primary-foreground/80">Rides Completed</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-2 text-5xl font-bold">1M+</div>
              <div className="text-primary-foreground/80">Active Drivers</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-2 text-5xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Cities Worldwide</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="mb-2 text-5xl font-bold">99.9%</div>
              <div className="text-primary-foreground/80">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold">Leadership Team</h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Meet the passionate team behind RideBook's mission to transform
              transportation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {leaders.map((member, index) => (
              <Card
                key={index}
                className="card-gradient p-8 text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-gradient-primary mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 dark:border-white">
                  <span className="text-primary text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
                <p className="text-primary mb-2 font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm">
                  {member.experience}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Join Our Journey"
        description="Be part of the transportation revolution. Whether as a rider, driver, or team member."
        btnText="Start Riding"
      />
    </div>
  );
};

export default About;
