import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

export default function Calculator() {
  const [monthlySip, setMonthlySip] = useState([10000]);
  const [returnRate, setReturnRate] = useState([12]);
  const [years, setYears] = useState([15]);

  const calculateReturns = () => {
    const p = monthlySip[0];
    const r = returnRate[0] / 12 / 100;
    const n = years[0] * 12;
    
    const totalInvested = p * n;
    const maturityValue = Math.round(p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const estimatedReturns = maturityValue - totalInvested;

    return { totalInvested, estimatedReturns, maturityValue };
  };

  const { totalInvested, estimatedReturns, maturityValue } = calculateReturns();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-white">SIP Wealth Calculator</h2>
          <p className="text-muted-foreground">Discover the power of compounding over time.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="glass-card p-8 rounded-xl space-y-10">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-medium">Monthly Investment</label>
                <span className="text-primary font-bold">{formatCurrency(monthlySip[0])}</span>
              </div>
              <Slider
                value={monthlySip}
                onValueChange={setMonthlySip}
                max={100000}
                min={500}
                step={500}
                className="py-4"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-medium">Expected Annual Return</label>
                <span className="text-primary font-bold">{returnRate[0]}%</span>
              </div>
              <Slider
                value={returnRate}
                onValueChange={setReturnRate}
                max={20}
                min={6}
                step={0.5}
                className="py-4"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-medium">Investment Period</label>
                <span className="text-primary font-bold">{years[0]} Years</span>
              </div>
              <Slider
                value={years}
                onValueChange={setYears}
                max={30}
                min={1}
                step={1}
                className="py-4"
              />
            </div>
          </div>

          {/* Results */}
          <div className="bg-primary/10 rounded-xl p-8 border border-primary/20 flex flex-col justify-center">
            <h3 className="font-serif text-2xl text-white mb-8 text-center border-b border-primary/20 pb-4">
              Estimated Projection
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Invested</span>
                <span className="text-xl text-white font-medium">{formatCurrency(totalInvested)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Estimated Returns</span>
                <span className="text-xl text-green-400 font-medium">+{formatCurrency(estimatedReturns)}</span>
              </div>
              <div className="pt-6 border-t border-primary/20">
                <div className="flex flex-col items-center text-center">
                  <span className="text-muted-foreground mb-2">Total Value</span>
                  <motion.span 
                    key={maturityValue}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-5xl font-serif font-bold gold-gradient-text"
                  >
                    {formatCurrency(maturityValue)}
                  </motion.span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 w-full py-4 bg-primary text-background font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Start Investing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
