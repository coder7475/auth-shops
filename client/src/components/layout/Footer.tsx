import { Star } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2 text-xl font-bold">
              <div className="bg-accent flex h-8 w-8 items-center justify-center rounded-lg">
                <Star className="text-accent-foreground h-5 w-5" />
              </div>
              <span>RideBook</span>
            </div>
            <p className="text-primary-foreground/80">
              The most trusted ride booking platform worldwide
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="text-primary-foreground/80 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="text-primary-foreground/80 space-y-2">
              <li>
                <Link
                  to="/ride"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Ride
                </Link>
              </li>
              <li>
                <Link
                  to="/drive"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Drive
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/freight"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Freight
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="text-primary-foreground/80 space-y-2">
              <li>
                <Link
                  to="/help"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/safety"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Safety
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-primary-foreground/20 text-primary-foreground/60 mt-8 border-t pt-8 text-center">
          <p>&copy; {year} RideBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
