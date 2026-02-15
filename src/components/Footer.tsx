import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  Home,
  Package,
  UtensilsCrossed,
  Info,
  Candy,
  Cookie,
  Archive,
  Heart,
  Leaf,
} from "lucide-react";

import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Brand */}
      <div>
        <img
          src={logo}
          alt="Chandaluru Ruchulu"
          className="h-16 w-auto mb-4 rounded bg-background p-1"
        />
        <p className="text-sm opacity-80">
          Authentic homemade pickles and traditional Andhra snacks made with love,
          natural ingredients, and age-old recipes.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm opacity-80">
          <li>
            <Link to="/" className="flex items-center gap-2 hover:opacity-100">
              <Home className="h-4 w-4" /> Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="flex items-center gap-2 hover:opacity-100">
              <Package className="h-4 w-4" /> Products
            </Link>
          </li>

          <li>
            <Link to="/services" className="flex items-center gap-2 hover:opacity-100">
              <UtensilsCrossed className="h-4 w-4" /> Services
            </Link>
          </li>

          <li>
            <Link to="/about" className="flex items-center gap-2 hover:opacity-100">
              <Info className="h-4 w-4" /> About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" className="flex items-center gap-2 hover:opacity-100">
              <Phone className="h-4 w-4" /> Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-heading text-lg font-bold mb-4">Categories</h3>
        <ul className="space-y-2 text-sm opacity-80">

          <li>
            <Link to="/products?category=sweets" className="flex items-center gap-2 hover:opacity-100">
              <Candy className="h-4 w-4" /> Sweets
            </Link>
          </li>

          <li>
            <Link to="/products?category=snacks" className="flex items-center gap-2 hover:opacity-100">
              <Cookie className="h-4 w-4" /> Snacks
            </Link>
          </li>

          <li>
            <Link to="/products?category=pickles" className="flex items-center gap-2 hover:opacity-100">
              <Archive className="h-4 w-4" /> Pickles
            </Link>
          </li>

          <li>
            <Link to="/products?category=spices" className="flex items-center gap-2 hover:opacity-100">
              <Leaf className="h-4 w-4" /> Spice Powders
            </Link>
          </li>

        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>

        <ul className="space-y-3 text-sm opacity-80">

          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+919849578049" className="hover:opacity-100">
              +91 9849578049
            </a>
          </li>

          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:chandalururuchulu@gmail.com"
              className="hover:opacity-100"
            >
              chandalururuchulu@gmail.com
            </a>
          </li>

          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5" />
            <span>Andhra Pradesh, India</span>
          </li>

        </ul>

        {/* Social Icons */}
        <div className="mt-4 flex gap-3">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/chandalururuchulu"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
  >
    <Instagram size={20} />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919849578049"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
  >
    <MessageCircle size={20} />
  </a>
        </div>
      </div>
    </div>
{/* STAFFARC CREDIT SECTION */}
          <div className="flex justify-center items-center gap-1 flex-wrap">
            Made with
            <Heart className="inline h-4 w-4 text-red-500 mx-1" />
            by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline ml-1"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
    {/* Bottom */}
    <div className="text-center py-4 text-sm opacity-60">
      © 2026 Chandaluru Ruchulu. All rights reserved.
    </div>
  </footer>
);

export default Footer;
