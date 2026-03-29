import { motion } from 'motion/react';
import { TrendingUp, Users, Clock, Activity } from 'lucide-react';

const metrics = [
  {
    label: 'Verified Reviews',
    value: '175+',
    icon: Users,
    color: 'text-green-400',
  },
  {
    label: 'Average Rating',
    value: '5.0',
    icon: TrendingUp,
    color: 'text-blue-400',
  },
  {
    label: 'Years Experience',
    value: '7+',
    icon: Clock,
    color: 'text-purple-400',
  },
  {
    label: 'Avg Response Time',
    value: '~1hr',
    icon: Activity,
    color: 'text-primary',
  },
];

export function Results() {
  return (
    <section className="py-24 relative bg-gradient-subtle border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="text-sm font-medium text-green-400 uppercase tracking-widest">Performance Metrics</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Data-Driven <span className="text-gradient">Impact</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              As a Fiverr Top Rated Seller with an international client base, I pride myself on delivering consistent quality, fast responses, and long-term support that drives high repeat collaboration.
            </motion.p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-6 w-full">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <metric.icon className={`w-8 h-8 ${metric.color} mb-4`} />
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-tighter">{metric.value}</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
