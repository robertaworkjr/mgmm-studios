import { motion } from "framer-motion";

const DIRECTORS = [
  {
    name: "Russell Mulcahy",
    role: "Architect of the MTV Era",
    desc: "Created the visual language of the pop video. His pioneering work with Duran Duran defined the aesthetic of the 1980s, introducing cinematic production values to short-form music promos.",
    films: ["Video Killed the Radio Star (1979)", "Rio (1982)", "Hungry Like the Wolf (1982)", "Girls on Film (1981)"]
  },
  {
    name: "Julien Temple",
    role: "Punk Visionary",
    desc: "Raw, irreverent, politically charged filmmaking. Brought the chaotic energy of the UK punk and new wave scenes to the screen with unmatched authenticity.",
    films: ["The Great Rock 'n' Roll Swindle (1980)", "Do You Really Want to Hurt Me (1982)", "Absolute Beginners (1986)"]
  },
  {
    name: "Godley & Creme",
    role: "Experimental Innovators",
    desc: "Former musicians turned visionary directors who pioneered groundbreaking morphing effects and conceptual storytelling in the music video format.",
    films: ["Every Breath You Take (1983)", "Two Tribes (1984)", "Cry (1985)"]
  },
  {
    name: "Brian Grant",
    role: "The Emotional Lens",
    desc: "Known for cinematic warmth and emotional resonance. Mastered the art of translating complex musical narratives into compelling visual stories.",
    films: ["Roxanne (1978)", "Let's Get Physical (1981)", "Private Dancer (1981)"]
  }
];

export default function Directors() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 md:px-12">
      <div className="mb-20 max-w-3xl">
        <h1 className="font-display text-5xl md:text-7xl mb-6">The Directors</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The visionaries behind the lens. Our directors didn't just point a camera at a band; they invented a completely new medium of visual expression.
        </p>
      </div>

      <div className="space-y-24">
        {DIRECTORS.map((dir, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <h2 className="font-display text-5xl text-foreground mb-4">{dir.name}</h2>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 border border-primary/20 uppercase tracking-widest text-xs font-medium mb-6">
                  {dir.role}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {dir.desc}
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-card border border-border p-8 md:p-12">
              <h3 className="font-display text-2xl mb-8 text-foreground pb-4 border-b border-border">Selected Filmography</h3>
              <ul className="space-y-6">
                {dir.films.map((film, j) => (
                  <motion.li 
                    key={j}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (j * 0.1) }}
                    className="group flex items-center gap-4 cursor-default"
                  >
                    <div className="h-[1px] w-8 bg-border group-hover:bg-primary transition-colors" />
                    <span className="text-xl text-muted-foreground group-hover:text-white transition-colors">
                      {film}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
