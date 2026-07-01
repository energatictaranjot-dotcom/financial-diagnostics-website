import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, Award } from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

function Counter({ end, prefix, suffix, duration = 2 }: { end: number; prefix: string; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return;
    let start = 0;
    const step = Math.ceil(end / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  if (end === 0) return null;
  return <span>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

export default function Hero() {
  const { config } = useSiteConfig();

  const badges = [
    { icon: TrendingUp, label: `₹${config.statAssets}Cr+ Assets Managed`, val: Number(config.statAssets), prefix: "₹", suffix: "Cr+" },
    { icon: Users, label: `${config.statFamilies}+ Happy Families`, val: Number(config.statFamilies), prefix: "", suffix: "+" },
    { icon: Award, label: `${config.statYears}+ Years Experience`, val: Number(config.statYears), prefix: "", suffix: "+" },
    { icon: ShieldCheck, label: config.irdaCertified ? "IRDA Certified" : "AMFI Registered", val: 0, prefix: "", suffix: "", staticText: config.irdaCertified ? "IRDA Certified" : "AMFI Registered" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #1a2560, transparent)" }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-8">
            AMFI Registered · {config.irdaCertified ? "IRDA Certified · " : ""}Trusted Since {config.foundedYear}
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
            <span className="text-white">Your Wealth.</span>
            <br />
            <span className="gold-gradient-text">Our Expertise.</span>
            <br />
            <span className="text-white">Your Future.</span>
          </h1>

          <p className="text-muted-foreground text-xl md:text-2xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Bespoke financial advisory for families, business owners, and HNIs who demand precision, transparency, and results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E2B96F] text-background font-semibold text-lg rounded-sm hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all"
              data-testid="button-hero-cta"
            >
              Start Your Financial Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 border border-primary/50 text-primary font-semibold text-lg rounded-sm hover:bg-primary/10 transition-all"
              data-testid="button-hero-explore"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {badges.map((badge, idx) => (
            <div key={idx} className="glass-card rounded-xl p-5 text-center" data-testid={`stat-badge-${idx}`}>
              <badge.icon className="mx-auto mb-2 text-primary" size={24} />
              <div className="font-serif font-bold text-2xl text-white mb-1">
                {badge.staticText ? badge.staticText : (
                  <Counter end={badge.val} prefix={badge.prefix} suffix={badge.suffix} />
                )}
              </div>
              <p className="text-muted-foreground text-xs">{badge.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
