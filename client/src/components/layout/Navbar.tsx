import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 border-border fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <div className="bg-gradient-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <Car className="text-primary h-5 w-5" />
            </div>
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text">
              RideBook
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground dark:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center space-x-3 md:flex">
            <ModeToggle />
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="default" asChild>
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-md p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-border bg-background/95 animate-slide-up border-t backdrop-blur-md md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent dark:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="space-y-2 pt-4">
                <ModeToggle />
                <Button variant="default" className="w-full" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="default" className="w-full" asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
