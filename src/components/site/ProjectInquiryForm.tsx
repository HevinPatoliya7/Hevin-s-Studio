import { useState } from "react";
import { Send, MessageCircle, ArrowLeft, Quote, ArrowRight } from "lucide-react";

const BUSINESS_WHATSAPP = "919106011772";

type FormData = {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  services: string[];
  otherService: string;
  videos: string;
  posts: string;
  budget: string;
  projectDetails: string;
};

function generateWhatsAppMessage(formData: FormData): string {
  const needsStr = formData.services.includes("Other") 
    ? [...formData.services.filter(n => n !== "Other"), formData.otherService].join(", ")
    : formData.services.join(", ");

  const lines = [
    "🚀 NEW PROJECT INQUIRY — AI ADS",
    "",
    `👤 Name: ${formData.name}`,
    `🏢 Company: ${formData.company}`,
    `📱 WhatsApp: ${formData.whatsapp}`,
    `📧 Email: ${formData.email || "N/A"}`,
    "",
    `🎯 Services Required: ${needsStr || "Not specified"}`,
    `🎬 Videos: ${formData.videos || "N/A"}`,
    `📱 Posts: ${formData.posts || "N/A"}`,
    `💰 Budget: ${formData.budget || "N/A"}`,
    "",
    `📝 Project Details:`,
    formData.projectDetails || "None provided",
    "",
    "Please contact me regarding this project."
  ];

  return lines.join("\n");
}

function openWhatsApp(formData: FormData) {
  const text = generateWhatsAppMessage(formData);
  const encodedText = encodeURIComponent(text);
  window.open(`https://api.whatsapp.com/send?phone=${BUSINESS_WHATSAPP}&text=${encodedText}`, "_blank");
}

export function ProjectInquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    services: [],
    otherService: "",
    videos: "",
    posts: "",
    budget: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNeedToggle = (serviceId: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(serviceId);
      const newServices = isSelected 
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId];
      
      if (newServices.length > 0 && errors.services) {
        const newErrors = { ...errors };
        delete newErrors.services;
        setErrors(newErrors);
      }
      
      return { ...prev, services: newServices };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.company.trim()) newErrors.company = "Required";
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Required";
    } else if (!/^[+]?[\d\s-]{8,20}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Invalid format";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      openWhatsApp(formData);
    }
  };

  const hasVideoNeed = formData.services.includes("AI/Reels Videos");
  const hasPostNeed = formData.services.includes("Social Media Posts") || formData.services.includes("Ad Creatives");

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-5xl rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-elegant)] flex flex-col md:flex-row border border-border/50">
        {/* Left Olive/Cream Panel */}
        <div className="w-full md:w-2/5 bg-[var(--olive)]/5 text-foreground p-12 sm:p-16 flex flex-col items-center justify-center relative overflow-hidden text-center min-h-[400px]">
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[var(--olive)]/15 blur-[80px] pointer-events-none" />
          <h2 className="text-4xl sm:text-5xl font-display mb-4 relative z-10 text-foreground">Inquiry Ready</h2>
          <p className="text-muted-foreground relative z-10 text-sm font-medium tracking-wide">Proceed to WhatsApp to connect.</p>
        </div>
        {/* Right Light Panel */}
        <div className="w-full md:w-3/5 bg-card p-12 sm:p-16 flex flex-col items-center justify-center text-center">
          <p className="text-foreground/80 text-lg mb-10 max-w-sm leading-relaxed">
            Your brief is elegantly formatted and ready. Tap below to send it securely to our studio.
          </p>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <button 
              onClick={() => openWhatsApp(formData)}
              className="w-full bg-[var(--olive)] text-primary-foreground font-semibold rounded-2xl px-8 py-4 flex items-center justify-center gap-3 hover:bg-[var(--olive)]/90 hover:scale-[1.02] transition-all shadow-md text-[15px]"
            >
              <MessageCircle className="w-5 h-5" />
              Send on WhatsApp
            </button>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-secondary text-secondary-foreground font-medium rounded-2xl px-8 py-4 flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edit Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl rounded-[2.5rem] shadow-[var(--shadow-elegant)] border border-border/40 overflow-hidden flex flex-col lg:flex-row bg-card">
      
      {/* Left Elegant Panel - Matches website (cream + olive) */}
      <div className="w-full lg:w-[45%] bg-[var(--olive)]/5 text-foreground p-12 sm:p-16 flex flex-col relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[var(--olive)]/15 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex-1 flex flex-col">
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight mb-auto text-foreground leading-tight">
            Begin the <br /><em className="italic text-[var(--olive)]">conversation.</em>
          </h2>
          
          <div className="flex-1 flex items-center justify-center py-16">
            <div className="relative">
              <div className="w-32 h-32 rounded-[2rem] bg-background/60 backdrop-blur-md border border-border/60 flex items-center justify-center shadow-lg rotate-[-5deg]">
                <Quote className="w-12 h-12 text-[var(--olive)]/40" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[var(--olive)]/10 backdrop-blur-xl border border-[var(--olive)]/20 flex items-center justify-center shadow-lg rotate-[10deg]">
                <MessageCircle className="w-10 h-10 text-[var(--olive)]" />
              </div>
            </div>
          </div>
          
          <div className="mt-auto border-t border-[var(--olive)]/20 pt-8">
            <p className="font-display text-xl sm:text-2xl leading-relaxed text-foreground/90">
              A premium AI creative studio building high-converting, cinematic content that commands attention and elevates modern brands.
            </p>
          </div>
        </div>
      </div>

      {/* Right Light Panel */}
      <div className="w-full lg:w-[55%] bg-card p-10 sm:p-16">
        <form onSubmit={handleSubmit} className="space-y-7 flex flex-col h-full">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 block ml-1">Full Name *</label>
              <input type="text" className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-border/50'} rounded-2xl px-5 py-4 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/30 transition-all shadow-sm`} placeholder="Rahul Sharma" value={formData.name} onChange={e => { setFormData({...formData, name: e.target.value}); if (errors.name) setErrors({...errors, name: ""}) }} />
            </div>
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 block ml-1">Company *</label>
              <input type="text" className={`w-full bg-background border ${errors.company ? 'border-red-500' : 'border-border/50'} rounded-2xl px-5 py-4 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/30 transition-all shadow-sm`} placeholder="Acme Studio" value={formData.company} onChange={e => { setFormData({...formData, company: e.target.value}); if (errors.company) setErrors({...errors, company: ""}) }} />
            </div>
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 block ml-1">WhatsApp Number *</label>
              <input type="tel" className={`w-full bg-background border ${errors.whatsapp ? 'border-red-500' : 'border-border/50'} rounded-2xl px-5 py-4 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/30 transition-all shadow-sm`} placeholder="+91 90000 00000" value={formData.whatsapp} onChange={e => { setFormData({...formData, whatsapp: e.target.value}); if (errors.whatsapp) setErrors({...errors, whatsapp: ""}) }} />
            </div>
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 block ml-1">Email *</label>
              <input type="email" className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-border/50'} rounded-2xl px-5 py-4 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/30 transition-all shadow-sm`} placeholder="name@company.com" value={formData.email} onChange={e => { setFormData({...formData, email: e.target.value}); if (errors.email) setErrors({...errors, email: ""}) }} />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3 block ml-1">Services Needed *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["AI/Reels Videos", "Social Media Posts", "Ad Creatives", "Web Page", "AI Automation", "Other"].map((service) => {
                const isSelected = formData.services.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleNeedToggle(service)}
                    className={`py-3 px-2 rounded-2xl text-[13px] font-medium transition-all duration-300 ${
                      isSelected 
                        ? "bg-[var(--olive)] text-primary-foreground shadow-md scale-[1.02]" 
                        : "bg-background border border-border/50 text-muted-foreground hover:bg-secondary/50 hover:border-[var(--olive)]/30"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
            {errors.services && <p className="text-red-500 text-[11px] mt-2 ml-1">{errors.services}</p>}
            
            {formData.services.includes("Other") && (
              <input type="text" className="w-full mt-3 bg-background border border-border/50 rounded-2xl px-5 py-4 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/30 transition-all shadow-sm" placeholder="Please specify..." value={formData.otherService} onChange={e => setFormData({...formData, otherService: e.target.value})} />
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(hasVideoNeed || hasPostNeed) && (
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 block ml-1">Quantities</label>
                <select className="w-full appearance-none bg-background border border-border/50 rounded-2xl px-5 py-4 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/30 transition-all shadow-sm" value={formData.videos || formData.posts} onChange={e => setFormData({...formData, videos: e.target.value, posts: e.target.value})}>
                  <option value="">Select quantity...</option>
                  <option value="1-5">1-5 items</option>
                  <option value="6-15">6-15 items</option>
                  <option value="16-30">16-30 items</option>
                  <option value="30+">30+ items</option>
                </select>
              </div>
            )}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 block ml-1">Estimated Budget</label>
              <select className="w-full appearance-none bg-background border border-border/50 rounded-2xl px-5 py-4 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/30 transition-all shadow-sm" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                <option value="">Select budget...</option>
                <option value="₹1,000–₹3,000">₹1,000 – ₹3,000</option>
                <option value="₹3,000–₹5,000">₹3,000 – ₹5,000</option>
                <option value="₹5,000–₹10,000">₹5,000 – ₹10,000</option>
                <option value="₹10,000+">₹10,000+</option>
              </select>
            </div>
          </div>

          <div className="flex-1">
            <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 block ml-1">Details</label>
            <textarea 
              className="w-full h-[140px] bg-background border border-border/50 rounded-2xl px-5 py-4 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--olive)]/30 transition-all resize-y shadow-sm leading-relaxed" 
              placeholder="Tell us about your brand, vision, style, and goals..."
              value={formData.projectDetails}
              onChange={e => setFormData({...formData, projectDetails: e.target.value})}
            />
          </div>

          <div className="pt-4 relative group">
            <div className="absolute inset-0 bg-[var(--olive)]/20 blur-xl rounded-2xl transition-all duration-500 group-hover:bg-[var(--olive)]/40 group-hover:blur-2xl" />
            <button 
              type="submit" 
              className="relative w-full overflow-hidden bg-[var(--olive)] text-primary-foreground font-medium rounded-2xl px-8 py-5 flex items-center justify-between hover:bg-[var(--olive)]/90 transition-all text-[15px] shadow-[var(--shadow-elegant)]"
            >
              <span className="font-semibold tracking-wide">Initiate Project</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:translate-x-2">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full pointer-events-none" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
