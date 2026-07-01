export interface Testimonial {
  name: string;
  profession: string;
  quote: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  foundedYear: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapsQuery: string;
  amfiArn: string;
  irdaCertified: boolean;
  statAssets: string;
  statFamilies: string;
  statYears: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  testimonials: Testimonial[];
}

export const defaultConfig: SiteConfig = {
  companyName: "Financial Diagnostics",
  tagline: "Your Trusted Financial Partner",
  foundedYear: "2020",
  phone: "+919873200740",
  whatsapp: "919873200740",
  email: "harry.singh07@gmail.com",
  address: "Level 4, World Trade Tower, Sector 16, Noida, Delhi NCR 201301",
  mapsQuery: "Noida,Delhi+NCR",
  amfiArn: "ARN-187276",
  irdaCertified: true,
  statAssets: "20",
  statFamilies: "2000",
  statYears: "19",
  instagram: "https://instagram.com/financialdoctor13",
  linkedin: "",
  twitter: "",
  facebook: "",
  testimonials: [
    { name: "Rahul S.", profession: "Tech Entrepreneur, Bangalore", quote: "Financial Diagnostics completely restructured my chaotic portfolio. Their approach is analytical, transparent, and incredibly professional." },
    { name: "Priya & Amit", profession: "Doctors, Mumbai", quote: "Finally, advisors who don't just push products. They built a retirement plan that actually accounts for inflation and our lifestyle." },
    { name: "Vikram K.", profession: "CFO, Delhi", quote: "As a finance professional myself, I have high standards. The FD team exceeded them. Their tax-optimization strategies alone paid for their fee." },
    { name: "Anjali D.", profession: "Business Owner, Pune", quote: "I feel secure knowing my family's wealth is monitored by experts. The quarterly reviews are comprehensive and insightful." },
  ],
};

const STORAGE_KEY = "fd_site_config";

export function loadConfig(): SiteConfig {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultConfig, ...JSON.parse(stored) };
    }
  } catch {}
  return defaultConfig;
}

export function saveConfig(config: SiteConfig): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}
