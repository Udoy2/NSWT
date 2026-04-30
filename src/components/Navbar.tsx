import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const programLinks = [
  { label: "Healthcare", href: "/programs/healthcare" },
  { label: "Education", href: "/programs/education" },
  { label: "Empowering Communities", href: "/programs/empowering-communities" },
  { label: "Community Support", href: "/programs/community-support" },
];

const aboutLinks = [
  { label: "Mission", href: "/#mission-vision" },
  { label: "Vision", href: "/#mission-vision" },
  { label: "Board & Governance", href: "/#about" },
  { label: "Annual & Financial Reports", href: "/reports" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigates to a hash on the homepage, regardless of current page.
  const goToHomeSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const homeSections = [
    { label: "OVERVIEW", id: "protocol" },
    { label: "Impact", id: "impact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-site flex items-center justify-between h-16 px-6 md:px-12">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight text-foreground">
          NSWT
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {homeSections.map((s) => (

          <div className="relative group">
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={goToHomeSection(s.id)}
              className="font-mono text-xs uppercase tracking-[0.15em] leading-none text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
            >
              {s.label}
            </a>
          </div>
          ))}

          {/* Programs dropdown */}
          <div className="relative group">
            <a
              href="/#programs"
              onClick={goToHomeSection("programs")}
              className="font-mono text-xs uppercase tracking-[0.15em] leading-none text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              Programs
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="min-w-[260px] bg-background border border-border shadow-lg">
                {programLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground hover:bg-muted border-b border-border last:border-b-0 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About dropdown */}
          <div className="relative group">
            <a
              href="/#about"
              onClick={goToHomeSection("about")}
              className="font-mono text-xs uppercase tracking-[0.15em] leading-none text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              About
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="min-w-[260px] bg-background border border-border shadow-lg">
                {aboutLinks.map((link) =>
                  link.href.startsWith("/#") ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={goToHomeSection(link.href.replace("/#", ""))}
                      className="block px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground hover:bg-muted border-b border-border last:border-b-0 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground hover:bg-muted border-b border-border last:border-b-0 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          <a
            href="/#contact"
            onClick={goToHomeSection("contact")}
            className="font-mono text-xs uppercase tracking-[0.15em] leading-none text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
          >
            Contact
          </a>

          <Button variant="signal" size="sm" asChild>
            <a href="/#donate" onClick={goToHomeSection("donate")}>Donate</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6">
          {homeSections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={goToHomeSection(s.id)}
              className="block py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground border-b border-border"
            >
              {s.label}
            </a>
          ))}

          {/* Programs collapse */}
          <div className="border-b border-border">
            <div className="flex items-center justify-between">
              <a
                href="/#programs"
                onClick={goToHomeSection("programs")}
                className="flex-1 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
              >
                Programs
              </a>
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="p-2 text-muted-foreground"
                aria-label="Toggle programs"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileProgramsOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {mobileProgramsOpen && (
              <div className="pl-4 pb-2">
                {programLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About collapse */}
          <div className="border-b border-border">
            <div className="flex items-center justify-between">
              <a
                href="/#about"
                onClick={goToHomeSection("about")}
                className="flex-1 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
              >
                About
              </a>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="p-2 text-muted-foreground"
                aria-label="Toggle about"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {mobileAboutOpen && (
              <div className="pl-4 pb-2">
                {aboutLinks.map((link) =>
                  link.href.startsWith("/#") ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={goToHomeSection(link.href.replace("/#", ""))}
                      className="block py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          <a
            href="/#contact"
            onClick={goToHomeSection("contact")}
            className="block py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground border-b border-border"
          >
            Contact
          </a>

          <Button variant="signal" size="sm" className="mt-4 w-full" asChild>
            <a href="/#donate" onClick={goToHomeSection("donate")}>Donate</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
