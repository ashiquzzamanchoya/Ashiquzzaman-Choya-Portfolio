import { motion } from 'motion/react';
import { Layers, MonitorPlay, MessageSquare, Zap, Film, Video } from 'lucide-react';

const tools = [
  { name: 'OBS / Streamlabs', icon: MonitorPlay, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'TikTok Live Studio', icon: Video, color: 'text-pink-500', bg: 'bg-pink-500/10' },
  { name: 'Discord Infra', icon: MessageSquare, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { name: 'Restream / Botrix', icon: Zap, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { name: 'Video Editing', icon: Film, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { name: 'Adobe Photoshop', icon: Layers, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">Infrastructure</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            The <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We leverage industry-standard tools and custom APIs to build resilient, high-performance ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className={`glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 hover:border-${tool.color.split('-')[1]}-500/50 transition-colors duration-300 h-full`}>
                <div className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{tool.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
