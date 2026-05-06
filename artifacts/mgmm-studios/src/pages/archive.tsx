import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const PRODUCTIONS = [
  { id: 1, title: "Video Killed the Radio Star", artist: "The Buggles", year: 1979, director: "Russell Mulcahy", era: "70s" },
  { id: 2, title: "Hungry Like the Wolf", artist: "Duran Duran", year: 1982, director: "Russell Mulcahy", era: "80s" },
  { id: 3, title: "Girls on Film", artist: "Duran Duran", year: 1981, director: "Russell Mulcahy", era: "80s" },
  { id: 4, title: "Do You Really Want to Hurt Me", artist: "Culture Club", year: 1982, director: "Julien Temple", era: "80s" },
  { id: 5, title: "Karma Chameleon", artist: "Culture Club", year: 1983, director: "James Yukich", era: "80s" },
  { id: 6, title: "Every Breath You Take", artist: "The Police", year: 1983, director: "Godley & Creme", era: "80s" },
  { id: 7, title: "Roxanne", artist: "The Police", year: 1978, director: "Brian Grant", era: "70s" },
  { id: 8, title: "Rio", artist: "Duran Duran", year: 1982, director: "Russell Mulcahy", era: "80s" },
  { id: 9, title: "Take On Me", artist: "A-Ha", year: 1985, director: "Steve Barron", era: "80s" },
  { id: 10, title: "West End Girls", artist: "Pet Shop Boys", year: 1985, director: "Eric Watson", era: "80s" }
];

const ERAS = ["All", "60s", "70s", "80s", "90s", "00s"];

export default function Archive() {
  const [activeEra, setActiveEra] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProductions = PRODUCTIONS.filter(prod => {
    const matchesEra = activeEra === "All" || prod.era === activeEra;
    const matchesSearch = 
      prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.director.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesEra && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 md:px-12">
      <div className="mb-16">
        <h1 className="font-display text-5xl md:text-7xl mb-6">The Archive</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
          Explore our foundational catalog of music videos. The visual blueprints of an industry.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div className="flex flex-wrap gap-2">
            {ERAS.map(era => (
              <button
                key={era}
                onClick={() => setActiveEra(era)}
                data-testid={`filter-era-${era.toLowerCase()}`}
                className={`px-6 py-2 uppercase tracking-widest text-xs font-medium border transition-colors ${
                  activeEra === era 
                    ? "bg-primary border-primary text-white" 
                    : "bg-transparent border-border text-muted-foreground hover:border-muted-foreground"
                }`}
              >
                {era}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder="Search archive..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-transparent border-border focus-visible:ring-primary rounded-none h-10"
              data-testid="input-search-archive"
            />
          </div>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProductions.map((prod) => (
            <motion.div
              key={prod.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-card border border-border p-6 overflow-hidden cursor-pointer"
            >
              {/* Filmstrip hover effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-0 w-4 border-r border-border border-dashed opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute top-0 bottom-0 right-0 w-4 border-l border-border border-dashed opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-primary font-mono text-sm">{prod.year}</span>
                  <span className="text-muted-foreground text-xs uppercase tracking-widest border border-border px-2 py-1">{prod.era}</span>
                </div>
                
                <div className="mt-auto">
                  <h3 className="font-display text-3xl mb-2 text-foreground group-hover:text-primary transition-colors">{prod.title}</h3>
                  <p className="text-xl text-muted-foreground mb-4">{prod.artist}</p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground/70">
                      Dir. <span className="text-foreground">{prod.director}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProductions.length === 0 && (
        <div className="text-center py-32 border border-border bg-card">
          <p className="text-xl text-muted-foreground">No archival footage found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
