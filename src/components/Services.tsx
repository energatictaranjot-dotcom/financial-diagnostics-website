import React from "react";
import { motion } from "framer-motion";
import { LineChart, PiggyBank, Briefcase, Landmark, Umbrella, Shield, BarChart3, Calculator, GraduationCap } from "lucide-react";

const services = [
  { icon: LineChart, title: "Mutual Fund Advisory", desc: "Data-driven mutual fund selection tailored to your risk profile." },
  { icon: PiggyBank, title: "SIP Planning", desc: "Disciplined wealth creation through systematic investment plans." },
  { icon: Briefcase, title: "Wealth Management", desc: "Comprehensive management of your entire financial portfolio." },
  { icon: Landmark, title: "Financial Planning", desc: "Holistic roadmaps for your short and long-term life goals." },
  { icon: Umbrella, title: "Retirement Planning", desc: "Build a robust corpus for a stress-free, independent retirement." },
  { icon: Shield, title: "Insurance Planning", desc: "Protect your family and assets with optimal life and health cover." },
  { icon: BarChart3, title: "Portfolio Review", desc: "Objective restructuring of your existing underperforming assets." },
  { icon: Calculator, title: "Tax Saving Guidance", desc: "Legal strategies to minimize tax outflow and maximize returns." },
  { icon: GraduationCap, title: "Financial Education", desc: "Empowering you with knowledge to make informed decisions." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 gold-gradient-text inline-block">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive financial solutions tailored for the complex needs of wealthy Indian families and professionals.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="glass-card glass-card-hover rounded-lg p-8 h-full flex flex-col items-start text-left cursor-default">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
