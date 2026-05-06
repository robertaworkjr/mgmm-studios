import { motion } from "framer-motion";

const TIMELINE = [
  { year: "1975", title: "MGMM Studios Founded", desc: "Established in London, laying the groundwork for a visual revolution in music.", era: "70s" },
  { year: "1979", title: "Video Killed the Radio Star", desc: "The production of the iconic Buggles video, which would later become the first ever video broadcast on MTV.", era: "70s" },
  { year: "1981", title: "Duran Duran Collaboration", desc: "A creative partnership begins that would define the extravagant aesthetic of the 1980s.", era: "80s" },
  { year: "1982", title: "Peak Production", desc: "Over 50 high-end music videos produced in a single year, establishing absolute dominance of the format.", era: "80s" },
  { year: "1983", title: "Defining the Era", desc: "Culture Club and The Police dominate the global airwaves with MGMM visuals.", era: "80s" },
  { year: "1987", title: "Documentary Expansion", desc: "The studio expands operations into long-form documentary filmmaking.", era: "80s" },
  { year: "1994", title: "500th Production", desc: "A monumental milestone reached, cementing the studio's legacy in music history.", era: "90s" },
  { year: "2014", title: "Soul Boys Premiere", desc: "Soul Boys of the Western World premieres at the prestigious BFI London Film Festival.", era: "10s" },
  { year: "2022", title: "No Hamburg No Beatles", desc: "Critically acclaimed documentary released, showcasing the studio's ongoing narrative power.", era: "20s" },
  { year: "2024", title: "The Archive Restored", desc: "The legendary celluloid archive is digitized, restored, and preserved for future generations.", era: "20s" }
];

export default function Timeline() {
  return (
    <div className="pt-32 pb-32 min-h-screen container mx-auto px-6 md:px-12">
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl mb-6">The Timeline</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A half-century of visual innovation. From our founding in London to the digitization of our legacy.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

        <div className="space-y-16">
          {TIMELINE.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-[28px] md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full -translate-x-1/2 mt-[6px] z-10 shadow-[0_0_15px_rgba(196,30,58,0.5)]" />

                {/* Content */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                  <div className="bg-card border border-border p-6 hover:border-primary/50 transition-colors">
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="font-mono text-2xl text-primary">{item.year}</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground border border-border px-2 py-1">
                        {item.era}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
