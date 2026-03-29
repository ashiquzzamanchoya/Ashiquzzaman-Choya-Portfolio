import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Verified Client',
    role: 'Content Creator',
    content: "One of the best partners to work with — continued support after delivery. The system they built completely changed how I stream.",
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    name: 'Verified Client',
    role: 'Twitch Streamer',
    content: "Everything is clean, professional, and works perfectly. They didn't just design a layout; they built an entire production pipeline.",
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    name: 'Verified Client',
    role: 'Agency Owner',
    content: "Highly responsive, knowledgeable, and easy to work with. We needed a robust infrastructure and they delivered a scalable solution that works flawlessly.",
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Social Proof</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Trusted by <span className="text-gradient">Elite Creators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Don't just take our word for it. Here's what the top 1% of creators say about our systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-card/40 backdrop-blur-sm border-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-primary" />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-gray-300 leading-relaxed mb-8 flex-1 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
