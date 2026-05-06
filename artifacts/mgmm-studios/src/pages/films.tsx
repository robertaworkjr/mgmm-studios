import { motion } from "framer-motion";
import soulBoys from "@/assets/poster-soul-boys.png";
import hamburg from "@/assets/poster-hamburg.png";
import lennon from "@/assets/poster-lennon.png";
import ravers from "@/assets/poster-ravers.png";

const FILMS = [
  {
    title: "Soul Boys of the Western World",
    artist: "Spandau Ballet",
    year: 2014,
    poster: soulBoys,
    desc: "A journey through the 1980s pop culture phenomenon, tracking the rise, fall, and eventual reunion of Spandau Ballet."
  },
  {
    title: "No Hamburg No Beatles",
    artist: "The Beatles",
    year: 2022,
    poster: hamburg,
    desc: "An uncompromising look at the gritty club scene that forged the most important band in history."
  },
  {
    title: "Lennon's Last Weekend",
    artist: "John Lennon",
    year: 1980,
    poster: lennon,
    desc: "Intimate, devastating footage from John Lennon's final days in New York City."
  },
  {
    title: "No Room for Ravers",
    artist: "Various",
    year: 2023,
    poster: ravers,
    desc: "The definitive chronicle of 90s underground rave culture and its lasting impact on modern music."
  }
];

export default function Films() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 md:px-12">
      <div className="mb-16 max-w-3xl">
        <h1 className="font-display text-5xl md:text-7xl mb-6">Feature Films</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Beyond the three-minute pop song. Immersive documentary and feature-length productions exploring the icons and eras that shaped our culture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {FILMS.map((film, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group"
          >
            <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-card border border-border">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${film.poster})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <h2 className="font-display text-4xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {film.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">{film.artist}</p>
                <p className="text-sm text-muted-foreground/80 max-w-md leading-relaxed">
                  {film.desc}
                </p>
              </div>
              <div className="text-primary font-mono text-xl border-b border-primary pb-1">
                {film.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
