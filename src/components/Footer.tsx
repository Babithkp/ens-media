import { Link } from "react-router-dom";
import ensLogo from "@/assets/ens.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src={ensLogo} alt="ENS" className="h-20 w-80 mb-4 object-cover -translate-x-20 max-md:w-40 max-md:-translate-x-10" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A creative media studio specializing in video production, live broadcasting, and digital content.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-foreground/70">
              <a href="mailto:Contact@ensproductions.com">Contact@ensproductions.com</a>
              <span>+91 81029 84360</span>
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ENS Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Vimeo</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
