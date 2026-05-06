import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        <div>
          <h1 className="font-display text-5xl md:text-7xl mb-6">Connect</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            For archival licensing, documentary inquiries, or press, reach out to the studio directly.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="font-display text-xl mb-2 text-foreground">London HQ</h4>
              <p className="text-muted-foreground">
                MGMM Studios Archive<br />
                Soho, London<br />
                United Kingdom
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl mb-2 text-foreground">Licensing</h4>
              <p className="text-primary font-mono">archive@mgmm.studio</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Name</label>
              <Input 
                type="text" 
                className="bg-background border-border rounded-none h-12 focus-visible:ring-primary"
                data-testid="input-contact-name" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Email</label>
              <Input 
                type="email" 
                className="bg-background border-border rounded-none h-12 focus-visible:ring-primary"
                data-testid="input-contact-email" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Message</label>
              <Textarea 
                className="bg-background border-border rounded-none min-h-[150px] focus-visible:ring-primary"
                data-testid="input-contact-message" 
              />
            </div>
            <Button 
              type="submit"
              className="w-full rounded-none h-12 bg-foreground text-background hover:bg-primary hover:text-white uppercase tracking-widest text-xs font-bold transition-all"
              data-testid="button-contact-submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
