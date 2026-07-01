import React from "react";
import { motion } from "framer-motion";

const reasons = [
  { num: "01", title: "SEBI Registered Advisor", desc: "Regulated and strictly compliant, ensuring your investments are in safe, qualified hands." },
  { num: "02", title: "Unbiased Advice", desc: "We sit on your side of the table. Our recommendations are driven by your goals, not commissions." },
  { num: "03", title: "Holistic Planning", desc: "We look at your entire financial life—taxes, insurance, investments, and estate—as one cohesive unit." },
  { num: "04", title: "Dedicated Relationship Manager", desc: "Direct access to a senior expert who intimately understands your family's financial history." },
  { num: "05", title: "Transparent Reporting", desc: "Crystal clear dashboarding and regular reviews. Know exactly where every rupee is deployed." },
  { num: "06", title: "Tax-Efficient Strategies", desc: "Optimizing for post-tax returns, because what you keep matters more than what you earn." }
];

export default function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="md:w-1/3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Why <br/><span className="gold-gradient-text">Financial Diagnostics?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We aren't just order-takers. We act as your personal CFO, 
              orchestrating every aspect of your wealth.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card p-6 rounded-lg border-l-4 border-l-primary"
              >
                <div className="text-primary font-serif text-3xl font-bold mb-2 opacity-50">{reason.num}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
