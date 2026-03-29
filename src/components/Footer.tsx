import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:glow-primary transition-all">
                <span className="font-heading font-bold text-white text-lg">A</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">Ashiquzzaman Choya<span className="text-primary">.</span></span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Building reliable, scalable, and fully managed streaming systems that allow creators to focus on content while everything else runs smoothly.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.fiverr.com/s/BRVroPW" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors">
                <span className="font-bold text-sm">Fi</span>
              </a>
              <a href="mailto:Ashiquzzamanchoya@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-colors">
                <Mail size={18} />
              </a>
              <a href="tel:+8801768415197" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-colors">
                <Phone size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-colors">
                <MapPin size={18} />
              </a>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Jashore, Khulna, Bangladesh</p>
              <p>@stormezzz</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</a></li>
              <li><a href="#work" className="text-muted-foreground hover:text-primary transition-colors text-sm">Case Studies</a></li>
              <li><a href="#tech" className="text-muted-foreground hover:text-primary transition-colors text-sm">Tech Stack</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Ashiquzzaman Choya. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Built with <span className="text-accent">♥</span> for creators.
          </div>
        </div>
      </div>
    </footer>
  );
}
