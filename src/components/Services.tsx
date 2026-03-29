import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Palette, Video, Bot, MessageSquare, Film, MonitorPlay } from 'lucide-react';

const services = [
  {
    title: 'Complete Streaming Systems',
    description: 'End-to-end OBS & Streamlabs setups including audio engineering, multi-platform workflows, and performance optimization.',
    icon: Video,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    title: 'TikTok Live & Whatnot',
    description: 'Specialized streaming infrastructure tailored for vertical and live commerce platforms.',
    icon: MonitorPlay,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
  },
  {
    title: 'Discord Architecture',
    description: 'Server creation, security, role management, and automated community moderation systems.',
    icon: MessageSquare,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    title: 'Chatbot & Automation',
    description: 'Integration of Restream, Botrix, and custom Discord bots for automated viewer engagement.',
    icon: Bot,
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
  },
  {
    title: 'Content Production Pipelines',
    description: 'Podcast workflows, video editing, and content structuring (Edit → Optimize → Publish).',
    icon: Film,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    title: 'Graphics & Branding',
    description: 'Professional overlays and cohesive visual identity packages delivered via my dedicated design team.',
    icon: Palette,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-gradient-subtle">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Ecosystem Modules</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            System-Level <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We don't just provide services; we build interconnected modules that form a robust, scalable digital ecosystem for your brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-card/40 backdrop-blur-sm border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.bg} to-transparent pointer-events-none`} />
                
                <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.border} border flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                {/* Subtle glow effect on hover */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${service.bg}`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
