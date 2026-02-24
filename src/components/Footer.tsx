import { Link } from "react-router-dom";import ensLogo from "@/assets/ens.jpeg";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src={ensLogo}
              alt="ENS"
              className="h-20 w-80 mb-4 object-cover -translate-x-20 max-md:w-40 max-md:-translate-x-10"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Broadcasting Excellence & Producing Impact.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-foreground/70">
              <div className="flex items-center gap-3">
                <Mail className=" mt-1 shrink-0" size={18} />
                <a href="mailto:contact@ensproductions.com">
                  contact@ensproductions.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className=" mt-1 shrink-0" size={18} />
                <span>+91 81029 84360</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className=" mt-1 shrink-0" size={18} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ENS Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/ens.productionss?igsh=MWJ0Z3NxZWN0YjRrbQ=="
              className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
