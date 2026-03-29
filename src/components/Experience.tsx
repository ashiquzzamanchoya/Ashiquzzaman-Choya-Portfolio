import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Head of Team | Streaming Systems Specialist',
    company: 'Hoodreport Bangladesh',
    date: 'April 2025 – Present',
    description: 'Leading full-scale streaming, content, and community operations. Managing a team responsible for graphics production, system setup, and content delivery.',
    highlights: [
      'Overseeing professional graphics pipelines and branding consistency',
      'Designing and maintaining complete Discord server infrastructure',
      'Building and optimizing streaming systems and automation workflows',
      'Successfully formatted and published 2 books based on content output'
    ]
  },
  {
    role: 'Freelance Streaming Systems Specialist',
    company: 'Fiverr – Top Rated Seller',
    date: '2020 – Present',
    description: 'Delivered complete streaming ecosystems, not just setups. Provided full-service packages including graphics, overlays, branding, automation, and system configuration.',
    highlights: [
      'Specialized in TikTok Live, Whatnot, Twitch, and YouTube streaming systems',
      'Designed and managed Discord communities with full automation',
      'Implemented chatbots and automated engagement tools (Restream, Botrix)',
      'Maintained 5.0 rating across 175+ reviews with a ~1 hour response time'
    ]
  },
  {
    role: 'Streaming Support & Technical Assistance',
    company: 'Collaboration with Robert Sweeting',
    date: 'Previous',
    description: 'Assisted in professional streaming setup and live production environments. Supported technical workflows, infrastructure setup, and execution.',
    highlights: [
      'Contributed to high-quality production-level streaming systems',
      'Provided ongoing technical support and system improvements'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Over 7 years of hands-on experience building, optimizing, and managing complete streaming environments.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 ml-4 md:ml-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 relative pl-8 md:pl-12"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(123,97,255,0.5)]"></div>
                
                <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
