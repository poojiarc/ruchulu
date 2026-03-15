import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  Home,
  Package,
  ClipboardList,
  Info,
  Candy,
  Cookie,
  Archive,
  Heart,
  Leaf,
  Facebook, 
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
      {/* Quick Links */}
<div>
  <h3 className="font-heading text-lg font-bold mb-4 text-white">Quick Links</h3>
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
            <Link to="/how-to-order" className="flex items-center gap-2 hover:opacity-100">
              <ClipboardList className="h-4 w-4" /> How to Order
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
        <h3 className="font-heading text-lg font-bold mb-4 text-white">Categories</h3>
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
        <h3 className="font-heading text-lg font-bold mb-4 text-white">Contact Us</h3>

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
      <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.754 5.707 2.184 8.196L0 32l7.63-2.162A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16.396C32 7.56 24.836.396 16 .396zm0 29.21a13.04 13.04 0 01-6.646-1.82l-.476-.282-4.53 1.282 1.21-4.414-.31-.454A13.03 13.03 0 013.01 16.4c0-7.174 5.816-12.99 12.99-12.99S28.99 9.226 28.99 16.4c0 7.174-5.816 12.99-12.99 12.99zm7.12-9.67c-.39-.196-2.304-1.136-2.662-1.266-.357-.13-.618-.196-.879.196-.26.39-1.01 1.266-1.237 1.527-.227.26-.455.293-.845.098-.39-.196-1.646-.607-3.136-1.935-1.16-1.035-1.943-2.31-2.172-2.7-.227-.39-.024-.6.172-.795.176-.175.39-.455.585-.683.196-.227.26-.39.39-.65.13-.26.065-.487-.033-.683-.098-.196-.879-2.12-1.205-2.9-.318-.763-.642-.66-.879-.673l-.75-.013c-.26 0-.683.098-1.04.487-.357.39-1.365 1.333-1.365 3.25 0 1.918 1.398 3.77 1.593 4.03.196.26 2.753 4.206 6.67 5.897.933.402 1.66.642 2.228.822.936.298 1.788.256 2.462.155.752-.112 2.304-.942 2.63-1.852.325-.91.325-1.69.227-1.852-.097-.163-.357-.26-.748-.455z"/>
    </svg>
  </a>
  {/* Facebook */}
<a
  href="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
>
  <Facebook size={20} />
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
