import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui-core/button';

const projects = [
  {
    title: 'Streaming Setup',
    tags: ['OBS Studio', 'Audio Routing', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Graphics Creation',
    tags: ['Overlays', 'Branding', 'Alerts'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
  },
  {
    title: 'Discord Management',
    tags: ['Server Architecture', 'Bots', 'Security'],
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Full Management',
    tags: ['End-to-End', 'Support', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
];

export function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section id="work" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="relative flex flex-col items-center justify-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] md:text-[10vw] font-black text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none pointer-events-none"
          >
            PORTFOLIO
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight relative z-10"
          >
            /SYSTEMS DEPLOYED
          </motion.h3>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 relative z-10">
          <div className="flex gap-6 text-sm font-medium">
            <button 
              onClick={() => setActiveFilter('All')}
              className={activeFilter === 'All' ? "text-white border-b border-white pb-1" : "text-muted-foreground hover:text-white transition-colors pb-1"}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('Real Project')}
              className={activeFilter === 'Real Project' ? "text-white border-b border-white pb-1" : "text-muted-foreground hover:text-white transition-colors pb-1"}
            >
              Real Project
            </button>
            <button 
              onClick={() => setActiveFilter('Exploration')}
              className={activeFilter === 'Exploration' ? "text-white border-b border-white pb-1" : "text-muted-foreground hover:text-white transition-colors pb-1"}
            >
              Exploration
            </button>
          </div>
          <Button 
            variant="outline" 
            className="rounded-full border-white/20 hover:bg-white/10 bg-transparent text-white"
            onClick={() => window.open('https://www.fiverr.com/s/BRVroPW', '_blank')}
          >
            View All Work <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/3] bg-white/5 border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium px-4 py-1.5 rounded-full bg-white/5 text-muted-foreground border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
