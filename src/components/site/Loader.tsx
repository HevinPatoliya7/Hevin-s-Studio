import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const shown = sessionStorage.getItem("Hevin-loader-shown");
    if (shown) return;
    setShouldShow(true);
    sessionStorage.setItem("Hevin-loader-shown", "1");
    const t = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(t);
  }, []);

  if (!shouldShow) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-1000 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[var(--olive)]/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
        
        <div className="animate-fade-up relative z-10 flex flex-col items-center">
          <img 
            src="/logo.png" 
            alt="Hevin Logo" 
            className="w-28 h-28 object-contain transition-transform duration-1000 hover:scale-105"
            style={{ 
              animation: "float 3s ease-in-out infinite",
              filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.06))" 
            }}
          />
          <span
            className="mt-6 font-display text-4xl tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hevin
          </span>
        </div>
        
        <div className="h-px w-24 origin-left animate-[shimmer_1.5s_ease-out_forwards] bg-gradient-to-r from-transparent via-[var(--olive)] to-transparent relative z-10" />
        <div className="text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground relative z-10">
          Creative Studio
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
