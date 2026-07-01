import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  const { config } = useSiteConfig();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-white">Voices of Trust</h2>
          <p className="text-muted-foreground text-lg">Don't just take our word for it.</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {config.testimonials.map((test, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-6">
                <div className="glass-card p-8 rounded-xl h-full flex flex-col">
                  <div className="flex gap-1 text-primary mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-white text-lg italic mb-8 flex-grow">"{test.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#F0D090] flex items-center justify-center text-background font-bold text-lg font-serif">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{test.name}</h4>
                      <p className="text-muted-foreground text-sm">{test.profession}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
