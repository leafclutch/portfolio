import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/HD_logo_only_png.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="LeafClutch.dev"
                className="h-15 w-20 drop-shadow-lg"
              />
              <span className="text-2xl font-bold">LeafClutch</span>
            </Link>
            <p className="text-base opacity-50">
              Transforming businesses through intelligent AI solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-7 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link
                  to="/"
                  className="hover:opacity-80 transition-opacity text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:opacity-80 transition-opacity text-base"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:opacity-80 transition-opacity text-base"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/case-studies"
                  className="hover:opacity-80 transition-opacity text-base"
                >
                  Case Studies
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>General: info@leafclutch.dev</li>
              <li>Careers: careers@leafclutch.dev</li>
              <li>Support: support@leafclutch.dev</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <div className="flex space-x-7">
            <a
              href="https://www.instagram.com/leafclutch.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://x.com/leafclutch_dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Twitter className="h-8 w-8" />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn (Coming Soon)"
            >
              <Linkedin className="h-8 w-8 opacity-50" />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="YouTube (Coming Soon)"
            >
              <Youtube className="h-8 w-8 opacity-50" />
            </a>
          </div>
          <p className="opacity-50">
            © 2025 LeafClutch.dev | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
