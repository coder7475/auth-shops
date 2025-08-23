import { Clock, MapPin, Shield, Star } from "lucide-react";

export const heroCards = [
  {
    icon: (
      <MapPin className="text-primary-foreground mx-auto mb-6 h-12 w-12 drop-shadow-lg" />
    ),
    title: "Live Tracking",
    description: "Real-time GPS tracking for complete peace of mind",
  },
  {
    icon: (
      <Clock className="text-primary-foreground mx-auto mb-6 h-12 w-12 drop-shadow-lg" />
    ),
    title: "Quick Booking",
    description: "Book your ride in seconds with our smart app",
  },
  {
    icon: (
      <Shield className="text-primary-foreground mx-auto mb-6 h-12 w-12 drop-shadow-lg" />
    ),
    title: "Safe & Secure",
    description: "Verified drivers and secure payment options",
  },
  {
    icon: (
      <Star className="text-primary-foreground mx-auto mb-6 h-12 w-12 drop-shadow-lg" />
    ),
    title: "Top Rated",
    description: "4.9/5 rating from millions of satisfied riders",
  },
];
