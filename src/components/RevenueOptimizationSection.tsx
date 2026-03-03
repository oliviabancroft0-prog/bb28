import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

interface SectionProps {
  id: string;
  number: string;
  title: string;
  description: string;
}

const GALLERY_ASSETS = [
  { type: 'video', url: "https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/Fukumean.mp4" },
  { type: 'image', url: "https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/SnapInsta.to_489469370_17855890125409644_9041447154341587107_n.jpg" },
  { type: 'image', url: "https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/SnapInsta.to_489717345_17855890098409644_7400222961476626345_n.jpg" },
  { type: 'image', url: "https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/SnapInsta.to_497225339_18339714799091757_7590942088672021832_n.jpg" },
  { type: 'image', url: "https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/SnapInsta.to_628369556_18559701118028176_3465633801652275506_n.jpg" },
  { type: 'image', url: "https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/SnapInsta.to_629297726_18559701109028176_3871816313489296432_n.jpg" },
];

export const RevenueOptimizationSection: React.FC<SectionProps> = ({ id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current || !containerRef.current) return;

    const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
    const totalItems = items.length;
    const itemHeight = 600; 
    const totalHeight = totalItems * itemHeight;

    // Set initial positions
    gsap.set(items, {
      y: (i) => i * itemHeight,
    });

    // Create the loop animation
    const loop = gsap.to(items, {
      y: `-=${totalHeight}`, // Move upwards
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((y) => {
          const val = parseFloat(y);
          // Wrap logic: ensure it stays within [ -itemHeight, totalHeight - itemHeight ]
          return gsap.utils.wrap(-itemHeight, totalHeight - itemHeight, val);
        })
      }
    });

    // Focal point effect (scale and fade)
    const updateFocalPoint = () => {
      if (!containerRef.current) return;
      const centerY = containerRef.current.offsetHeight / 2;
      const containerRect = containerRef.current.getBoundingClientRect();

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const relativeCenterY = itemCenterY - containerRect.top;
        
        const distanceFromCenter = Math.abs(relativeCenterY - centerY);
        const maxDistance = centerY * 1.2;
        const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
        
        // Scale from 1.3 (center) to 0.7 (edges)
        const scale = 1.3 - (normalizedDistance * 0.6);
        // Opacity from 1 (center) to 0.1 (edges)
        const opacity = 1 - (normalizedDistance * 0.9);
        // Blur effect for depth
        const blur = normalizedDistance * 10;
        
        gsap.set(item, { 
          scale, 
          opacity,
          filter: `grayscale(1) blur(${blur}px)`,
          zIndex: Math.round((1 - normalizedDistance) * 100)
        });
      });
    };

    gsap.ticker.add(updateFocalPoint);

    // Interaction (accelerate/decelerate)
    let currentVelocity = 1;
    const observer = Observer.create({
      target: containerRef.current,
      type: "wheel,touch,pointer",
      onChange: (self) => {
        // Increase speed based on scroll delta
        const delta = Math.abs(self.deltaY) > Math.abs(self.deltaX) ? self.deltaY : self.deltaX;
        currentVelocity = gsap.utils.clamp(-10, 10, delta * 0.02);
        
        gsap.to(loop, { 
          timeScale: currentVelocity, 
          duration: 0.3, 
          overwrite: true,
          onComplete: () => {
            // Gradually return to base speed
            gsap.to(loop, { timeScale: 1, duration: 2, ease: "power1.inOut" });
          }
        });
      }
    });

    return () => {
      loop.kill();
      gsap.ticker.remove(updateFocalPoint);
      observer.kill();
    };
  }, []);

  return (
    <section
      id={id}
      className="relative h-screen w-full bg-black overflow-hidden snap-start flex items-center justify-center"
    >
      <div 
        ref={containerRef}
        className="relative w-full h-full max-w-5xl flex flex-col items-center"
      >
        <div 
          ref={listRef}
          className="relative w-full h-full"
        >
          {GALLERY_ASSETS.map((asset, i) => (
            <div
              key={i}
              className="gallery-item absolute top-0 left-0 w-full h-[600px] flex items-center justify-center p-8"
            >
              <div className="w-full h-full overflow-hidden rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5 bg-zinc-900">
                {asset.type === 'video' ? (
                  <video
                    src={asset.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={asset.url}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]" />
      
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30 text-center">
        <span className="text-pink-primary text-[10px] font-bold tracking-[0.5em] uppercase">
          Infinite Gallery
        </span>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-center">
        <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase animate-pulse">
          Scroll or drag to navigate
        </p>
      </div>
    </section>
  );
};
