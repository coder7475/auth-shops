import CTA from "@/components/CTA";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  adminFeatures,
  driverFeatures,
  riderFeatures,
} from "@/constants/features";
import {
  BarChart3,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  Shield,
  Users,
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-slide-up mb-6 text-5xl font-bold md:text-6xl dark:text-white">
              Powerful Features for Every User
            </h1>
            <p
              className="text-secondary/90 animate-slide-up mb-8 text-xl dark:text-white"
              style={{ animationDelay: "0.2s" }}
            >
              Discover how RideBook delivers exceptional experiences for riders,
              drivers, and administrators
            </p>
            <div
              className="animate-slide-up flex flex-wrap justify-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="mr-2 h-4 w-4" />
                Live GPS Tracking
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="mr-2 h-4 w-4" />
                Emergency SOS
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="mr-2 h-4 w-4" />
                Real-time Analytics
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="mr-2 h-4 w-4" />
                24/7 Support
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="rider" className="mx-auto max-w-6xl">
            <TabsList className="bg-grey mb-12 grid w-full grid-cols-3">
              <TabsTrigger
                value="rider"
                className="cursor-pointer border-2 py-3 text-lg"
              >
                <Car className="mr-2 h-5 w-5" />
                For Riders
              </TabsTrigger>
              <TabsTrigger
                value="driver"
                className="cursor-pointer py-3 text-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                For Drivers
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                className="cursor-pointer py-3 text-lg"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                For Admins
              </TabsTrigger>
            </TabsList>

            {/* Rider Features */}
            <TabsContent value="rider" className="space-y-8">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold">Rider Experience</h2>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                  Everything you need for a seamless, safe, and comfortable ride
                  experience
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {riderFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="card-gradient p-6 transition-transform duration-300 hover:scale-105"
                  >
                    <div className="bg-gradient-primary text-primary mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Driver Features */}
            <TabsContent value="driver" className="space-y-8">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold">Driver Experience</h2>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                  Tools and features designed to maximize your earnings and
                  efficiency
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {driverFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="card-gradient p-6 transition-transform duration-300 hover:scale-105"
                  >
                    <div className="bg-gradient-accent text-primary mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Admin Features */}
            <TabsContent value="admin" className="space-y-8">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold">Admin Dashboard</h2>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                  Comprehensive management tools for platform oversight and
                  optimization
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {adminFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="card-gradient p-6 transition-transform duration-300 hover:scale-105"
                  >
                    <div className="bg-gradient-primary text-primary mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Safety Features */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Safety & Security First</h2>
            <p className="text-muted-foreground text-xl">
              Your safety is our top priority with comprehensive security
              measures
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-gradient p-6 text-center">
              <Shield className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 font-semibold">Emergency SOS</h3>
              <p className="text-muted-foreground text-sm">
                One-tap emergency assistance
              </p>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <Users className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 font-semibold">Verified Drivers</h3>
              <p className="text-muted-foreground text-sm">
                Background checked professionals
              </p>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <MapPin className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 font-semibold">Live Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Real-time location sharing
              </p>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <Clock className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">
                Round-the-clock assistance
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title={"Ready to Experience These Features?"}
        description={
          "Join millions of users who trust RideBook for their daily transportation needs"
        }
        btnText={"Start Your Journey"}
      />
    </div>
  );
};

export default Features;
