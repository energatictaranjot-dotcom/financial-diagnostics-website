import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useSiteConfig } from "@/context/SiteConfigContext";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  city: z.string().min(2, "City is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional()
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { config } = useSiteConfig();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", phone: "", city: "", service: "", message: ""
    }
  });

  const onSubmit = async (_values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Request Received",
      description: "Our relationship manager will contact you within 24 hours.",
    });
    form.reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const displayPhone = config.phone.replace(/(\+91)(\d{5})(\d{5})/, "$1 $2 $3");

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4 gold-gradient-text">Let's Begin Your Journey</h2>
              <p className="text-muted-foreground text-lg">Confidential. Professional. Unbiased.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Corporate Office</h4>
                  <p className="text-muted-foreground">{config.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Direct Line</h4>
                  <a href={`tel:${config.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{displayPhone}</a>
                  <p className="text-muted-foreground text-sm">Mon-Sat, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Email</h4>
                  <a href={`mailto:${config.email}`} className="text-muted-foreground hover:text-primary transition-colors">{config.email}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 glass-card p-8 md:p-10 rounded-xl">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-serif text-white font-bold mb-2">Consultation Requested</h3>
                <p className="text-muted-foreground">Thank you. An expert advisor will reach out to you shortly to schedule your session.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                        <FormControl><Input placeholder="Rahul Sharma" className="bg-background/50 border-primary/20 text-white focus-visible:ring-primary" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                        <FormControl><Input placeholder="rahul@example.com" className="bg-background/50 border-primary/20 text-white focus-visible:ring-primary" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Phone Number</FormLabel>
                        <FormControl><Input placeholder="+91 90000 00000" className="bg-background/50 border-primary/20 text-white focus-visible:ring-primary" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="city" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">City</FormLabel>
                        <FormControl><Input placeholder="Delhi" className="bg-background/50 border-primary/20 text-white focus-visible:ring-primary" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="service" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Area of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-primary/20 text-white focus:ring-primary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background border-primary/20 text-white">
                          <SelectItem value="wealth">Comprehensive Wealth Management</SelectItem>
                          <SelectItem value="mutual">Mutual Fund / SIP Advisory</SelectItem>
                          <SelectItem value="retirement">Retirement Planning</SelectItem>
                          <SelectItem value="review">Existing Portfolio Review</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Briefly describe your goals..." className="bg-background/50 border-primary/20 text-white focus-visible:ring-primary min-h-[100px]" {...field} />
                      </FormControl>
                    </FormItem>
                  )} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#C9A84C] to-[#E2B96F] text-background font-bold text-lg rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Book Free Consultation"}
                  </button>
                </form>
              </Form>
            )}
          </div>
        </div>

        {/* Maps */}
        <div className="mt-16 w-full h-96 rounded-xl overflow-hidden glass-card p-2">
          <iframe
            src={`https://maps.google.com/maps?q=${config.mapsQuery}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '0.5rem' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
