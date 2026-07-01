import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a SEBI Registered Investment Advisor (RIA)?",
    a: "A SEBI RIA is a regulated professional bound by fiduciary duty to act in your best interest. Unlike distributors or bank relationship managers, we cannot earn hidden commissions from mutual fund houses, ensuring our advice is 100% unbiased."
  },
  {
    q: "How are your fees structured?",
    a: "We operate on a transparent, flat-fee or AUA (Assets Under Advice) model depending on portfolio size. There are no hidden charges, entry loads, or commissions baked into the products we recommend."
  },
  {
    q: "What is the minimum investment required to start?",
    a: "We typically work with families looking to invest ₹50,000+ monthly via SIP, or those with existing portfolios above ₹50 Lakhs. However, we are happy to consult motivated professionals starting their journey."
  },
  {
    q: "How is my portfolio monitored?",
    a: "We provide access to a premium digital dashboard to track your net worth in real-time. Additionally, your dedicated advisor conducts formal quarterly reviews to rebalance the portfolio as needed."
  },
  {
    q: "Do you only advise on mutual funds?",
    a: "No. While mutual funds form the core of equity strategies, our holistic plan covers direct equity, fixed income, bonds, insurance optimization, and tax-saving instruments."
  },
  {
    q: "How do you handle market downturns?",
    a: "We plan for downturns before they happen by ensuring proper asset allocation and maintaining adequate emergency funds. During crashes, we actively look for opportunities to rebalance and buy high-quality assets at lower valuations."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Clarity before commitment.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="glass-card rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-serif text-lg text-white hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
