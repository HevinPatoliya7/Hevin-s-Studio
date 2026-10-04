import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    let rafId: number;
    const updateCursor = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        const target = e.target as HTMLElement;
        const isClickable = 
          window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button');
          
        setIsPointer(!!isClickable);
      });
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", updateCursor);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Outer loop/ring */}
      <div 
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-[var(--olive)] transition-all duration-300 ease-out hidden sm:block mix-blend-difference"
        style={{
          width: isPointer ? "48px" : "32px",
          height: isPointer ? "48px" : "32px",
          transform: `translate(${position.x - (isPointer ? 24 : 16)}px, ${position.y - (isPointer ? 24 : 16)}px)`,
          opacity: position.x === -100 ? 0 : 0.6,
        }}
      />
      
      {/* Inner solid dot */}
      <div 
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[var(--olive)] transition-transform duration-75 ease-out hidden sm:block mix-blend-difference"
        style={{
          width: "6px",
          height: "6px",
          transform: `translate(${position.x - 3}px, ${position.y - 3}px) scale(${isPointer ? 0 : 1})`,
          opacity: position.x === -100 ? 0 : 1,
        }}
      />
    </>
  );
}
