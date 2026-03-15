// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   ShoppingCart,
//   Menu,
//   X,
//   Home,
//   Package,
//   UtensilsCrossed,
//   Info,
//   Phone,
// } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import logo from "@/assets/logo.jpeg";

// const navLinks = [
//   { to: "/", label: "Home", icon: Home },
//   { to: "/products", label: "Products", icon: Package },
//   { to: "/services", label: "Services", icon: UtensilsCrossed },
//   { to: "/about", label: "About Us", icon: Info },
//   { to: "/contact", label: "Contact", icon: Phone },
// ];

// /* ✅ SAME SOCIAL ICONS STYLE AS YOUR HEADER */
// const socialLinks = [
//   {
//     name: "Instagram",
//     href: "https://www.instagram.com/chandalururuchulu?igsh=bDVmMTZvNXFwNzhu",
//     icon: () => (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
//       </svg>
//     ),
//   },
//   {
//     name: "WhatsApp",
//     href: "https://wa.me/919849578049",
//     icon: () => (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059z"/>
//       </svg>
//     ),
//   },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { totalItems, setIsCartOpen } = useCart();
//   const location = useLocation();

//   return (
//     <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
//       <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">

//         {/* ✅ LOGO (UNCHANGED) */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Chandaluru Ruchulu"
//             className="h-12 md:h-16 w-auto"
//           />
//         </Link>

//         {/* ✅ Desktop Nav with Icons */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.to}>
//               <Link
//                 to={link.to}
//                 className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
//                   location.pathname === link.to
//                     ? "text-primary font-semibold"
//                     : "text-foreground"
//                 }`}
//               >
//                 <link.icon className="w-4 h-4" />
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* ✅ Right Side Icons + Cart */}
//         <div className="flex items-center gap-4">

//           {/* Social Icons */}
//           <div className="hidden md:flex items-center gap-3">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.name}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-foreground/80 hover:text-primary transition-colors"
//               >
//                 <social.icon />
//               </a>
//             ))}
//           </div>

//           {/* Cart Button (UNCHANGED) */}
//           <button
//             onClick={() => setIsCartOpen(true)}
//             className="relative p-2 rounded-full hover:bg-secondary transition-colors"
//             aria-label="Open cart"
//           >
//             <ShoppingCart className="h-5 w-5 text-foreground" />
//             {totalItems > 0 && (
//               <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* ✅ Mobile Nav WITH ICONS */}
//       {mobileOpen && (
//         <div className="md:hidden bg-background border-t border-border animate-fade-in">
//           <ul className="flex flex-col py-4">
//             {navLinks.map((link) => (
//               <li key={link.to}>
//                 <Link
//                   to={link.to}
//                   onClick={() => setMobileOpen(false)}
//                   className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
//                     location.pathname === link.to
//                       ? "text-primary font-semibold bg-secondary"
//                       : "text-foreground"
//                   }`}
//                 >
//                   <link.icon className="w-5 h-5" />
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Social Icons */}
//           <div className="flex gap-4 px-6 pb-4">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.name}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-foreground/80 hover:text-primary"
//               >
//                 <social.icon />
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Home,
  Package,
  ClipboardList,
  Info,
  Phone,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/products", label: "Products", icon: Package },
  { to: "/how-to-order", label: "How to Order", icon: ClipboardList},
  { to: "/about", label: "About Us", icon: Info },
  { to: "/contact", label: "Contact", icon: Phone },
];

/* ✅ FIXED SOCIAL ICONS (FULL SVG PATHS) */
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/chandalururuchulu?igsh=bDVmMTZvNXFwNzhu",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm4.25 3.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 2a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm4.88-2.38a1.12 1.12 0 100 2.25 1.12 1.12 0 000-2.25z"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919849578049",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.754 5.707 2.184 8.196L0 32l7.63-2.162A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16.396C32 7.56 24.836.396 16 .396zm0 29.21a13.04 13.04 0 01-6.646-1.82l-.476-.282-4.53 1.282 1.21-4.414-.31-.454A13.03 13.03 0 013.01 16.4c0-7.174 5.816-12.99 12.99-12.99S28.99 9.226 28.99 16.4c0 7.174-5.816 12.99-12.99 12.99zm7.12-9.67c-.39-.196-2.304-1.136-2.662-1.266-.357-.13-.618-.196-.879.196-.26.39-1.01 1.266-1.237 1.527-.227.26-.455.293-.845.098-.39-.196-1.646-.607-3.136-1.935-1.16-1.035-1.943-2.31-2.172-2.7-.227-.39-.024-.6.172-.795.176-.175.39-.455.585-.683.196-.227.26-.39.39-.65.13-.26.065-.487-.033-.683-.098-.196-.879-2.12-1.205-2.9-.318-.763-.642-.66-.879-.673l-.75-.013c-.26 0-.683.098-1.04.487-.357.39-1.365 1.333-1.365 3.25 0 1.918 1.398 3.77 1.593 4.03.196.26 2.753 4.206 6.67 5.897.933.402 1.66.642 2.228.822.936.298 1.788.256 2.462.155.752-.112 2.304-.942 2.63-1.852.325-.91.325-1.69.227-1.852-.097-.163-.357-.26-.748-.455z"/>
      </svg>
    ),
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Chandaluru Ruchulu"
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center gap-2 text-sm font-medium hover:text-primary ${
                  location.pathname === link.to
                    ? "text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition"
              >
                <social.icon />
              </a>
            ))}
          </div>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full hover:bg-secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 hover:bg-secondary"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 px-6 pb-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank">
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
