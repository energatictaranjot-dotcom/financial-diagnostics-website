import React from "react";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

export default function Footer() {
  const { config } = useSiteConfig();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const registrationLine = [
    `AMFI Registration No: ${config.amfiArn}`,
    config.irdaCertified ? "IRDA Certified Advisor" : null,
  ].filter(Boolean).join(" | ");

  return (
    <footer className="bg-[#05081A] pt-20 pb-10 border-t border-primary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C9A84C] to-[#F0D090] flex items-center justify-center font-serif font-bold text-background text-xl">
                FD
              </div>
              <span className="font-serif font-semibold text-xl tracking-wide text-white">
                {config.companyName}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {config.tagline} Since {config.foundedYear}. We build resilient wealth strategies for generations.
            </p>
            <div className="flex gap-4 text-primary">
              {config.linkedin && (
                <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              )}
              {config.twitter && (
                <a href={config.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              )}
              {config.facebook && (
                <a href={config.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              )}
              {config.instagram && (
                <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              )}
              {!config.linkedin && !config.twitter && !config.facebook && !config.instagram && (
                <span className="text-muted-foreground text-xs">Add social links in admin panel</span>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Process', 'Testimonials', 'Insights', 'Contact'].map(link => (
                <li key={link}>
                  <button onClick={() => scrollTo(`#${link.toLowerCase()}`)} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Disclaimer</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Grievance Redressal</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">Subscribe to our weekly newsletter for exclusive market insights.</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-background/50 border border-primary/20 border-r-0 px-4 py-2 rounded-l-sm text-sm text-white w-full focus:outline-none focus:border-primary/50"
              />
              <button
                type="submit"
                className="bg-primary text-background px-4 py-2 rounded-r-sm font-semibold text-sm hover:opacity-90"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-xs">
            © {new Date().getFullYear()} {config.companyName}. All rights reserved.
          </p>
          <p className="text-[#64748B] text-xs">{registrationLine}</p>
        </div>
      </div>
    </footer>
  );
}
