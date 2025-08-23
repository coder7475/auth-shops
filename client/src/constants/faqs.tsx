import { Car, CreditCard, Shield, Users } from "lucide-react";

export const faqCategories = [
  { icon: <Users className="h-5 w-5" />, label: "General", value: "general" },
  { icon: <Car className="h-5 w-5" />, label: "Rides", value: "rides" },
  {
    icon: <CreditCard className="h-5 w-5" />,
    label: "Payments",
    value: "payments",
  },
  { icon: <Shield className="h-5 w-5" />, label: "Safety", value: "safety" },
];

export const faqs = [
  {
    category: "general",
    question: "How do I create a RideBook account?",
    answer:
      "You can create an account by downloading the RideBook app and signing up with your email address or phone number. You'll need to verify your account and choose whether you want to be a rider, driver, or both.",
  },
  {
    category: "general",
    question: "Is RideBook available in my city?",
    answer:
      "RideBook operates in over 500 cities worldwide. You can check availability by entering your location in the app or visiting our website's city list.",
  },
  {
    category: "general",
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team through the app's help section, by calling our support hotline, or using the live chat feature available 24/7.",
  },
  {
    category: "rides",
    question: "How do I book a ride?",
    answer:
      "Open the app, enter your pickup location and destination, select your preferred ride type, and tap 'Book Ride'. You'll be matched with a nearby driver and can track their arrival in real-time.",
  },
  {
    category: "rides",
    question: "Can I schedule a ride in advance?",
    answer:
      "Yes! You can schedule rides up to 30 days in advance. Simply select 'Schedule Later' when booking and choose your preferred pickup time.",
  },
  {
    category: "rides",
    question: "What if my driver doesn't show up?",
    answer:
      "If your driver doesn't arrive within 10 minutes of the estimated time, you can cancel the ride without penalty and request a new one. Our system will automatically find you another driver.",
  },
  {
    category: "rides",
    question: "Can I change my destination during the ride?",
    answer:
      "Yes, you can update your destination during the ride through the app. The fare will be adjusted automatically based on the new route.",
  },
  {
    category: "payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, debit cards, PayPal, Apple Pay, Google Pay, and cash (in select cities). You can add multiple payment methods to your account.",
  },
  {
    category: "payments",
    question: "How is the fare calculated?",
    answer:
      "Fares are calculated based on distance, time, and local market rates. You'll see an upfront price estimate before booking, and the final fare will be charged to your selected payment method.",
  },
  {
    category: "payments",
    question: "Can I get a receipt for my ride?",
    answer:
      "Yes, receipts are automatically sent to your email after each ride. You can also access all your ride receipts in the app's trip history section.",
  },
  {
    category: "payments",
    question: "What if I'm charged incorrectly?",
    answer:
      "If you notice an incorrect charge, you can dispute it through the app's help section or contact our support team. We'll review and adjust the fare if necessary.",
  },
  {
    category: "safety",
    question: "How do you ensure driver safety?",
    answer:
      "All drivers undergo comprehensive background checks, vehicle inspections, and identity verification. We also provide safety training and continuous monitoring.",
  },
  {
    category: "safety",
    question: "What is the SOS feature?",
    answer:
      "The SOS feature allows you to quickly contact emergency services and share your live location with trusted contacts. It's available during all rides and can be accessed with one tap.",
  },
  {
    category: "safety",
    question: "Can I share my ride details with someone?",
    answer:
      "Yes, you can share your ride status, driver details, and live location with family or friends through the app's share trip feature.",
  },
  {
    category: "safety",
    question: "What should I do if I feel unsafe during a ride?",
    answer:
      "If you feel unsafe, use the in-app SOS button, call emergency services, or ask the driver to end the trip immediately. You can also contact our 24/7 safety line.",
  },
];
