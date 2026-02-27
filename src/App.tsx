import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Particles } from './components/Particles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CinematicSection } from './components/CinematicSection';
import { PremiumWhiteSection } from './components/PremiumWhiteSection';

const SECTIONS = [
  {
    id: 'strategy',
    number: '01',
    title: 'BESPOKE CONTENT MASTERY',
    description: 'Tailored production roadmaps meticulously crafted to elevate engagement and retention, blending refined cinematic storytelling with sharp trend analysis for the discerning creator.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pink-and-purple-ink-in-water-40343-large.mp4',
    imageUrl: 'https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/363081938_963561091574316_727691502030451980_n.webp',
    logData: {
      title: 'Strategic Elevation',
      quote: 'We don\'t just post content; we curate digital experiences that turn casual viewers into dedicated patrons.',
      stats: [
        { label: 'Avg. Growth', value: '420%' },
        { label: 'Retention', value: '88%' }
      ],
      results: [
        'Weekly production schedules',
        'Custom lighting & gear consultation',
        'Trend-reactive content hooks',
        'Professional editing & color grading'
      ]
    }
  },
  {
    id: 'marketing',
    number: '02',
    title: 'MARKETING & GROWTH',
    description: 'Aggressive cross-platform funneling and viral loops that drive high-intent traffic directly to your premium profile.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-pink-and-blue-smoke-background-40341-large.mp4',
    imageUrl: 'https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/321668193_200064589253755_8883311078046560340_n.webp',
    bgColor: '#012169',
    logData: {
      title: 'Growth Dynamics',
      quote: 'Visibility is the currency of the digital age. We ensure you are the most valuable creator in the room.',
      stats: [
        { label: 'Monthly Reach', value: '12M+' },
        { label: 'Conversion', value: '14.2%' }
      ],
      results: [
        'TikTok & IG Reels automation',
        'Reddit & Twitter funnel optimization',
        'Collaborative network access',
        'Paid media management'
      ]
    }
  },
  {
    id: 'engagement',
    number: '03',
    title: 'FAN ENGAGEMENT',
    description: '24/7 personalized interaction managed by our elite London-based team, ensuring no connection is missed and every fan feels seen.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-pink-and-purple-smoke-background-40342-large.mp4',
    logData: {
      title: 'Connection Logic',
      quote: 'True wealth in this industry is built on relationships, not just transactions.',
      stats: [
        { label: 'Response Time', value: '< 3min' },
        { label: 'Fan LTV', value: '£1.4k' }
      ],
      results: [
        '24/7 dedicated chat managers',
        'Personalized script development',
        'Upsell automation & tracking',
        'Fan sentiment analysis'
      ]
    }
  },
  {
    id: 'revenue',
    number: '04',
    title: 'REVENUE OPTIMIZATION',
    description: 'Data-driven pricing models and PPV strategies that extract maximum value from your existing fan base without burnout.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pink-and-blue-ink-in-water-40344-large.mp4',
    imageUrl: 'https://raw.githubusercontent.com/oliviabancroft0-prog/image/main/625956760_18146412925456285_752801370196229266_n.webp',
    logData: {
      title: 'Financial Thrust',
      quote: 'We turn creative passion into a scalable, high-margin business enterprise.',
      stats: [
        { label: 'Revenue Lift', value: '3.5x' },
        { label: 'PPV Sell-thru', value: '65%' }
      ],
      results: [
        'Dynamic pricing algorithms',
        'Subscription tier structuring',
        'Merchandise & external revenue streams',
        'Tax & financial planning assistance'
      ]
    }
  },
  {
    id: 'talent',
    number: '05',
    title: 'TALENT CONNECTIONS',
    description: 'Exclusive access to our network of top-tier UK creators, photographers, and high-net-worth brand partners.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-pink-and-purple-smoke-background-40342-large.mp4',
    logData: {
      title: 'Network Synergy',
      quote: 'Your network is your net worth. We provide the keys to the most exclusive rooms in London.',
      stats: [
        { label: 'Network Size', value: '250+' },
        { label: 'Collab ROI', value: '210%' }
      ],
      results: [
        'Monthly London creator mixers',
        'Professional studio access',
        'Brand sponsorship deals',
        'Legal & safety protection'
      ]
    }
  },
  {
    id: 'olivia',
    number: '06',
    title: 'MEET OLIVIA',
    description: 'Founded by Olivia Marella Bancroft, a former top 0.3% creator who built a seven-figure empire from the ground up.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pink-and-purple-ink-in-water-40343-large.mp4',
    logData: {
      title: 'Founder\'s Log',
      quote: 'I built Bramingham Barely because I wanted to provide the agency I wish I had when I started.',
      stats: [
        { label: 'Personal Rank', value: 'Top 0.3%' },
        { label: 'Years Exp.', value: '6+' }
      ],
      results: [
        'Direct mentorship sessions',
        'Industry-leading safety protocols',
        'Creator-first management philosophy',
        'London HQ operations'
      ]
    }
  }
];

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-black text-white selection:bg-pink-primary selection:text-white snap-y snap-mandatory">
      <CustomCursor />
      <Particles />
      <Navbar />
      
      <Hero />
      
      {/* First Section: Premium White Section */}
      <PremiumWhiteSection
        id={SECTIONS[0].id}
        number={SECTIONS[0].number}
        title={SECTIONS[0].title}
        description={SECTIONS[0].description}
        imageUrl={SECTIONS[0].imageUrl!}
        logData={SECTIONS[0].logData}
      />

      {/* Other Sections: Cinematic Section */}
      {SECTIONS.slice(1).map((section) => (
        <CinematicSection
          key={section.id}
          id={section.id}
          number={section.number}
          title={section.title}
          description={section.description}
          videoUrl={section.videoUrl}
          imageUrl={section.imageUrl}
          bgColor={section.id === 'marketing' ? '#012169' : undefined}
          logData={section.logData}
        />
      ))}

      <footer className="h-screen flex flex-col items-center justify-center snap-start relative overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-primary rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 text-center z-10">
            <h2 className="text-6xl md:text-9xl font-serif mb-12">READY TO <span className="text-pink-primary italic">ASCEND?</span></h2>
            
            <div className="grid md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto mb-20">
              <div className="space-y-4">
                <p className="text-pink-primary text-[10px] tracking-[0.3em] font-bold uppercase">London HQ</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Mayfair, London<br />
                  United Kingdom
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-pink-primary text-[10px] tracking-[0.3em] font-bold uppercase">Financials</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Seed Funding: $465k<br />
                  Min. Project: $5,000+
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-pink-primary text-[10px] tracking-[0.3em] font-bold uppercase">Contact</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  hello@braminghambarely.com<br />
                  @braminghambarely
                </p>
              </div>
            </div>

            <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase">
              © 2024 BRAMINGHAM BARELY • ALL RIGHTS RESERVED
            </p>
          </div>
        </footer>
    </main>
  );
}

