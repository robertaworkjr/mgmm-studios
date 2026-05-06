import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import { Link } from "wouter";

const ARTISTS = [
  "The Beatles", "Duran Duran", "The Police", "Culture Club",
  "The Buggles", "A-Ha", "Pet Shop Boys", "Spandau Ballet", "John Lennon"
];

function StatCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-7xl text-primary mb-2">
        {count}+
      </div>
      <div className="text-muted-foreground uppercase tracking-widest text-sm font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden film-grain bg-black">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none text-white mb-6"
          >
            The Pioneers of<br />
            <span className="text-primary">Music Video</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10"
          >
            Defining the visual language of pop culture since 1975. An archival journey through the golden era of film and music.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link 
              href="/archive"
              className="inline-block border border-primary/50 text-white font-medium uppercase tracking-widest text-sm px-8 py-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              data-testid="link-enter-archive"
            >
              Enter Archive
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-0 w-full overflow-hidden z-20 flex"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...ARTISTS, ...ARTISTS, ...ARTISTS].map((artist, i) => (
              <span key={i} className="mx-8 font-display text-2xl text-muted-foreground/30 uppercase tracking-widest">
                {artist}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-background relative z-30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <StatCounter value={500} label="Music Videos" />
            <StatCounter value={60} label="Years Production" />
            <StatCounter value={4} label="Decades of Hits" />
            <StatCounter value={200} label="Artists" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-card border-y border-border relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl mb-8 text-foreground">
              A Legacy in Celluloid
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Before MTV, before the digital revolution, MGMM Studios was there. We didn't just record performances; we created visual mythologies. From the gritty clubs of Hamburg to the neon-drenched sets of the 80s, our archive is the history of modern music.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
