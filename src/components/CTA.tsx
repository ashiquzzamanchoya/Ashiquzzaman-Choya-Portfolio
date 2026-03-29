import { motion } from 'motion/react';
import { Button } from './ui-core/button';
import { Input } from './ui-core/input';
import { ArrowRight, Send } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/90 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to Upgrade Your <span className="text-gradient">Infrastructure?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop fighting with tech. Let us build a scalable, automated system that lets you focus on what you do best: creating content.
            </p>
          </div>

          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 relative">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="h-14 px-6 rounded-xl bg-white/5 border-white/20 text-white placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary w-full"
              />
            </div>
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white glow-primary w-full sm:w-auto flex items-center justify-center gap-2"
              onClick={() => window.location.href = 'mailto:Ashiquzzamanchoya@gmail.com?subject=System Setup Inquiry'}
            >
              Start Building <Send size={18} />
            </Button>
          </form>
          
          <div className="mt-8 text-center text-sm text-muted-foreground relative z-10">
            <p>Join 50+ elite creators who have already upgraded their systems.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
