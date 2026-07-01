import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Free Consultation", desc: "A 30-minute discovery call to understand your aspirations and current financial snapshot." },
  { title: "Financial Diagnosis", desc: "We deep-dive into your existing portfolio, identifying hidden risks and sub-optimal assets." },
  { title: "Custom Strategy", desc: "Presenting a tailored wealth blueprint designed specifically for your life goals." },
  { title: "Ongoing Support", desc: "Quarterly reviews, tactical rebalancing, and lifetime access to your dedicated advisor." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl font-bold mb-4 gold-gradient-text">Our 4-Step Process</h2>
          <p className="text-muted-foreground text-lg">A structured approach to transforming your wealth.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-primary/20 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center font-serif text-2xl font-bold text-primary mb-6 shadow-[0_0_15px_rgba(201,168,76,0.2)] group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                
                {/* Card */}
                <div className="glass-card p-6 rounded-lg w-full h-full">
                  <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
