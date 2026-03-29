import { motion } from 'motion/react';
import { Search, PenTool, Code, Zap, RefreshCw } from 'lucide-react';

const steps = [
  {
    title: 'Audit & Analysis',
    description: 'Deep dive into your current workflow, identifying bottlenecks and growth opportunities.',
    icon: Search,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/30',
  },
  {
    title: 'System Design',
    description: 'Architecting a custom infrastructure tailored to your brand, audience, and goals.',
    icon: PenTool,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/30',
  },
  {
    title: 'Implementation',
    description: 'Building and integrating the tools, overlays, bots, and dashboards seamlessly.',
    icon: Code,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    title: 'Automation',
    description: 'Connecting the dots. Setting up triggers and workflows to eliminate manual tasks.',
    icon: Zap,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/30',
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous monitoring, updates, and optimization to keep your system running at peak performance.',
    icon: RefreshCw,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/30',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-widest">Methodology</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            How We Build <span className="text-gradient">Your System</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A structured, engineering-grade approach to scaling your digital presence.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`w-12 h-12 rounded-full ${step.bg} border ${step.border} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 rounded-full ${step.bg} animate-ping opacity-20`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="glass-panel p-8 rounded-2xl border-white/10 hover:border-white/20 transition-colors relative overflow-hidden group">
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-1 h-full ${step.bg.replace('/10', '')}`}></div>
                    <div className="text-sm font-mono text-muted-foreground mb-2">Phase 0{index + 1}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
