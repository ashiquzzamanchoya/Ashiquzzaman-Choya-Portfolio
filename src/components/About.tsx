import { motion } from 'motion/react';
import { MapPin, Briefcase, Award, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background border-y border-white/5">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10"></div>
              
              {/* Replace this image source with your actual photo */}
              <img 
                src="https://i.imgur.com/hsmSetT.jpeg" 
                alt="Ashiquzzaman Choya" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel p-4 rounded-xl border border-white/20 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Top Rated Seller</div>
                    <div className="text-xs text-muted-foreground">Fiverr Professional</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements behind image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/50 rounded-br-3xl -z-10"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ashiquzzaman <span className="text-gradient">Choya</span>
            </h2>
            
            <h3 className="text-xl text-gray-300 mb-8 font-medium">
              Streaming Expert, Technical Systems Specialist, and Content & Community Manager
            </h3>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
              <p>
                Starting as a streamer myself, I developed a deep understanding of both the technical backend and the creator experience. Since 2020, I've worked with clients worldwide, delivering full-scale streaming solutions that go beyond basic setup.
              </p>
              <p>
                Today, I operate at a system level, providing end-to-end services including professional graphics, streaming setup, chatbot automation, Discord infrastructure, content production, and long-term technical support.
              </p>
              <p>
                My focus is on building reliable, scalable, and fully managed streaming systems that allow creators to focus on content while everything else runs smoothly.
              </p>
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <Briefcase className="w-5 h-5 text-secondary" />
                <span className="text-sm text-gray-200">7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-200">Jashore, Bangladesh</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white glow-primary h-12 px-8 rounded-xl"
                onClick={() => window.open('https://www.fiverr.com/s/BRVroPW', '_blank')}
              >
                View Fiverr Profile
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/10 h-12 px-8 rounded-xl"
                onClick={() => window.location.href = 'mailto:Ashiquzzamanchoya@gmail.com'}
              >
                <Mail className="w-4 h-4 mr-2" /> Email Me
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
