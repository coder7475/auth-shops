import {
  BarChart3,
  Car,
  CheckCircle,
  Clock,
  CreditCard,
  Globe,
  MapPin,
  Phone,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export const riderFeatures = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Quick Booking",
    description: "Book your ride in seconds with our intuitive app interface",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Live GPS Tracking",
    description:
      "Track your driver's location in real-time from pickup to destination",
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Multiple Payment Options",
    description: "Pay with cash, card, digital wallets, or ride credits",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Rate & Review",
    description: "Share feedback to help maintain service quality",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Ride History",
    description: "Access detailed history with search and filter options",
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Emergency SOS",
    description: "One-tap emergency assistance with live location sharing",
  },
];

export const driverFeatures = [
  {
    icon: <Car className="h-8 w-8" />,
    title: "Smart Ride Matching",
    description: "Get matched with nearby riders using intelligent algorithms",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Earnings Dashboard",
    description:
      "Track daily, weekly, and monthly earnings with detailed analytics",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Flexible Schedule",
    description: "Work when you want with easy online/offline toggle",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Driver Protection",
    description: "Comprehensive insurance coverage and safety features",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Route Optimization",
    description: "Get the fastest routes with real-time traffic updates",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Instant Payments",
    description: "Receive payments immediately after ride completion",
  },
];

export const adminFeatures = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "User Management",
    description:
      "Comprehensive rider and driver management with advanced controls",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Analytics Dashboard",
    description: "Real-time insights into platform performance and metrics",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Safety Monitoring",
    description: "Monitor rides and respond to safety incidents quickly",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Revenue Tracking",
    description: "Track platform revenue with detailed financial reports",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Quality Control",
    description: "Monitor service quality and driver performance metrics",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Fleet Management",
    description: "Oversee entire fleet operations from a single dashboard",
  },
];
