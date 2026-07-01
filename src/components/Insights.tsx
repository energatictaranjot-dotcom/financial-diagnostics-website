import React from "react";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "Investing",
    title: "SIP vs Lump Sum: Which is Better in Volatile Markets?",
    excerpt: "Understand the mathematical and psychological benefits of staggering your investments during market highs.",
    date: "Oct 12, 2023"
  },
  {
    tag: "Taxation",
    title: "Beyond 80C: Hidden Tax Saving Strategies for HNIs",
    excerpt: "You've exhausted your ₹1.5L limit. Here is how wealthy professionals optimize their tax brackets legally.",
    date: "Nov 05, 2023"
  },
  {
    tag: "Retirement",
    title: "Building a ₹5 Crore Retirement Corpus: The Blueprint",
    excerpt: "Step-by-step math to building a self-sustaining corpus that outlives you and beats inflation.",
    date: "Dec 18, 2023"
  }
];

export default function Insights() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-4 text-white">Financial Insights</h2>
            <p className="text-muted-foreground">Expert perspectives on wealth creation.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-[#F0D090] font-medium transition-colors">
            View All Articles <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="glass-card glass-card-hover rounded-xl overflow-hidden group cursor-pointer">
              <div className="h-48 bg-primary/10 w-full relative">
                {/* Abstract placeholder image effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-primary/20 backdrop-blur-sm" />
                <div className="absolute inset-4 border border-primary/20 rounded-lg" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{article.tag}</span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-xl font-serif text-white font-semibold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="text-primary font-medium text-sm flex items-center gap-2">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
