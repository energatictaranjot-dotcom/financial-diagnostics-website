import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { config } = useSiteConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayPhone = config.phone.replace(/(\+91)(\d{5})(\d{5})/, "$1 $2 $3");

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      {/* Top bar with phone number */}
      <div className="hidden md:flex items-center justify-end px-12 py-2 border-b border-primary/10 bg-[#070c1f]/60">
        <a
          href={`tel:${config.phone}`}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-[#F0D090] transition-colors tracking-wide"
        >
          <Phone size={14} className="text-primary" />
          {displayPhone}
        </a>
      </div>

      <div className={`container mx-auto px-6 md:px-12 flex items-center justify-between ${isScrolled ? "py-4" : "py-5"} transition-all duration-300`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#hero")}>
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C9A84C] to-[#F0D090] flex items-center justify-center font-serif font-bold text-background text-xl">
            FD
          </div>
          <span className="font-serif font-semibold text-xl tracking-wide text-white hidden sm:block">
            {config.companyName}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-2.5 rounded-sm bg-gradient-to-r from-[#C9A84C] to-[#E2B96F] text-background font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full nav-glass border-t border-primary/10 flex flex-col py-6 px-6 gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-lg font-medium text-white text-left hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a href={`tel:${config.phone}`} className="flex items-center gap-2 text-primary text-base font-medium">
            <Phone size={16} /> {displayPhone}
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3 rounded-sm bg-gradient-to-r from-[#C9A84C] to-[#E2B96F] text-background font-semibold text-base mt-2"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </nav>
  );
}
