import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import { Link } from "react-router";

import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
