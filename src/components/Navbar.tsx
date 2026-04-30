import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "The Protocol", href: "#protocol" },
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-site flex items-center justify-between h-16 px-6 md:px-12">
        <a href="#" className="font-serif text-xl font-bold tracking-tight text-foreground">
          NSWT
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="signal" size="sm" asChild>
            <a href="#donate">Donate</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground border-b border-border"
            >
              {link.label}
            </a>
          ))}
          <Button variant="signal" size="sm" className="mt-4 w-full" asChild>
            <a href="#donate">Donate</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
