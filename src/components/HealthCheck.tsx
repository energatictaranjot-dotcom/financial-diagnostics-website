import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  "Do you have an emergency fund covering 6 months of expenses?",
  "Are you systematically investing for your retirement?",
  "Do you have adequate life and health insurance coverage?",
  "Have you fully optimized your tax saving under all sections?",
  "Do you have a written, documented financial plan?"
];

export default function HealthCheck() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (qIdx: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [qIdx]: answer }));
  };

  const calculateScore = () => {
    let score = 0;
    Object.values(answers).forEach(ans => {
      if (ans === 'Yes') score += 20;
      if (ans === 'Unsure') score += 10;
    });
    return score;
  };

  const isComplete = Object.keys(answers).length === questions.length;

  const score = calculateScore();
  let recommendation = "";
  if (score >= 80) recommendation = "Excellent! Your financial foundation is strong. A professional review can help optimize further.";
  else if (score >= 50) recommendation = "Good, but there are critical gaps. You need a structured plan to secure your wealth.";
  else recommendation = "Your finances need immediate attention. Let's build a secure foundation together.";

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4 text-white">Check Your Financial Health</h2>
          <p className="text-muted-foreground">Take this 1-minute assessment to identify gaps in your wealth strategy.</p>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-12 gold-glow">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {questions.map((q, idx) => (
                  <div key={idx} className="space-y-4">
                    <p className="text-lg text-white font-medium">{idx + 1}. {q}</p>
                    <div className="flex gap-3">
                      {['Yes', 'No', 'Unsure'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => handleAnswer(idx, opt)}
                          className={`px-6 py-2 rounded-full text-sm font-medium border transition-all ${
                            answers[idx] === opt 
                              ? 'bg-primary border-primary text-background' 
                              : 'bg-transparent border-primary/30 text-white hover:border-primary/60'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-primary/10">
                  <button
                    disabled={!isComplete}
                    onClick={() => setShowResult(true)}
                    className={`w-full py-4 rounded-sm font-bold text-lg transition-all ${
                      isComplete 
                        ? 'bg-gradient-to-r from-[#C9A84C] to-[#E2B96F] text-background hover:opacity-90'
                        : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                    }`}
                  >
                    View My Score
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="88" stroke="rgba(201,168,76,0.1)" strokeWidth="16" fill="none" />
                    <circle 
                      cx="96" cy="96" r="88" 
                      stroke="url(#goldGradient)" 
                      strokeWidth="16" fill="none" 
                      strokeDasharray="553" 
                      strokeDashoffset={553 - (553 * score) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A84C" />
                        <stop offset="100%" stopColor="#F0D090" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-serif font-bold text-primary">{score}%</span>
                  </div>
                </div>

                <h3 className="text-2xl font-serif text-white mb-4">Financial Health Score</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">{recommendation}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-[#C9A84C] to-[#E2B96F] text-background font-semibold rounded-sm"
                  >
                    Get Full Analysis
                  </button>
                  <button 
                    onClick={() => {
                      setAnswers({});
                      setShowResult(false);
                    }}
                    className="px-8 py-3 border border-primary/30 text-white font-medium rounded-sm hover:bg-primary/5"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
