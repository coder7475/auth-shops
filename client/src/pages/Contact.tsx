import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Car,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router"; // Add Link import for navigation
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(1, "Please select a subject"),
  userType: z.string().min(1, "Please select your user type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours.",
      );
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Get instant help from our support team",
      value: "+1 (555) 123-4567",
      action: "Call Now",
      link: "tel:+15551234567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Send us detailed inquiries",
      value: "support@ridebook.com",
      action: "Send Email",
      link: "mailto:support@ridebook.com",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our team in real-time",
      value: "Available 24/7",
      action: "Start Chat",
      link: "/chat", // Placeholder, adjust as needed
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Come to our headquarters",
      value: "123 Tech Street, San Francisco, CA",
      action: "Get Directions",
      link: "https://maps.google.com/?q=123+Tech+Street,+San+Francisco,+CA",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-slide-up mb-6 text-5xl font-bold md:text-6xl">
              Get in Touch
            </h1>
            <p
              className="text-secondary animate-slide-up mb-8 text-xl dark:text-white"
              style={{ animationDelay: "0.2s" }}
            >
              We're here to help with any questions about RideBook. Reach out to
              our friendly support team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold">How Can We Help You?</h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              // Use <a> for external links, <Link> for internal
              const isExternal =
                method.link?.startsWith("http") ||
                method.link?.startsWith("mailto:") ||
                method.link?.startsWith("tel:");
              const ButtonContent = (
                <Button variant="outline" size="sm" className="w-full" asChild>
                  {isExternal ? (
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.action}
                    </a>
                  ) : (
                    <Link to={method.link}>{method.action}</Link>
                  )}
                </Button>
              );
              return (
                <Card
                  key={index}
                  className="card-gradient p-6 text-center transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-primary text-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    {method.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{method.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {method.description}
                  </p>
                  <p className="mb-4 font-medium">{method.value}</p>
                  {ButtonContent}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-4xl font-bold">Send us a Message</h2>
              <p className="text-muted-foreground text-xl">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <Card className="card-gradient p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Enter your full name"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="Enter your phone number"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="userType">I am a *</Label>
                      <Select
                        onValueChange={(value) => setValue("userType", value)}
                        value={undefined}
                      >
                        <SelectTrigger
                          className={
                            errors.userType ? "border-destructive" : ""
                          }
                        >
                          <SelectValue placeholder="Select user type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rider">Rider</SelectItem>
                          <SelectItem value="driver">Driver</SelectItem>
                          <SelectItem value="business">
                            Business Client
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.userType && (
                        <p className="text-destructive text-sm">
                          {errors.userType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      onValueChange={(value) => setValue("subject", value)}
                      value={undefined}
                    >
                      <SelectTrigger
                        className={errors.subject ? "border-destructive" : ""}
                      >
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="billing">
                          Billing & Payments
                        </SelectItem>
                        <SelectItem value="safety">Safety Concerns</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-destructive text-sm">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <Card className="card-gradient p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 font-semibold">Response Time</h3>
                      <p className="text-muted-foreground">
                        We typically respond to inquiries within 2-4 hours
                        during business hours and within 24 hours on weekends.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-gradient p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="text-accent mt-1 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 font-semibold">Emergency Support</h3>
                      <p className="text-muted-foreground">
                        For urgent safety concerns or emergencies during rides,
                        use the in-app SOS feature or call our 24/7 emergency
                        line.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-gradient p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 font-semibold">Driver Support</h3>
                      <p className="text-muted-foreground">
                        Drivers can access dedicated support through the driver
                        app or call our driver support hotline for immediate
                        assistance.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-gradient p-6">
                  <div className="flex items-start space-x-4">
                    <Car className="text-accent mt-1 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 font-semibold">Business Inquiries</h3>
                      <p className="text-muted-foreground">
                        For corporate accounts, partnership opportunities, or
                        business solutions, our business team will connect with
                        you within one business day.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
