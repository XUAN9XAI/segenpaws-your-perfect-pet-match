import { Link } from "react-router-dom";
import { PawPrint, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Pet Match Quiz", href: "/quiz" },
  { name: "Care Tips", href: "/care-tips" },
  { name: "Adopt", href: "/adopt" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const petCategories = [
  { name: "Dogs", href: "/pets/dogs" },
  { name: "Cats", href: "/pets/cats" },
  { name: "Birds", href: "/pets/birds" },
  { name: "Fish", href: "/pets/fish" },
  { name: "Small Pets", href: "/pets/small-pets" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="text-xl font-heading font-bold">
                SEGEN<span className="text-primary">PAWS</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Helping you find the perfect pet companion through smart matching and responsible adoption guidance. Every pet deserves a loving home.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pet Categories */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Pet Categories</h3>
            <ul className="space-y-2">
              {petCategories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">hello@segenpaws.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">123 Pet Lane, Animal City, AC 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SEGENPAWS. Made with{" "}
              <Heart className="inline h-4 w-4 text-accent" /> for pets and their humans.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-primary-foreground/40 text-xs text-center mt-4">
            Disclaimer: The information provided on SEGENPAWS is for educational purposes only and should not replace professional veterinary advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
