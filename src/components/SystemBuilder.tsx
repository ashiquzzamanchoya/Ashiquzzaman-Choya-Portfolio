import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui-core/card';
import { Button } from './ui-core/button';
import { Check, Plus, Settings, Video, MessageSquare, Palette, Database } from 'lucide-react';

const modules = [
  { id: 'graphics', name: 'Dynamic Overlays', icon: Palette, price: '$500', color: 'text-primary' },
  { id: 'obs', name: 'OBS Architecture', icon: Video, price: '$800', color: 'text-secondary' },
  { id: 'bot', name: 'Custom Chatbot', icon: MessageSquare, price: '$600', color: 'text-accent' },
  { id: 'discord', name: 'Discord Hub', icon: Database, price: '$400', color: 'text-blue-400' },
];

export function SystemBuilder() {
  const [selectedModules, setSelectedModules] = useState<string[]>(['obs']);

  const toggleModule = (id: string) => {
    setSelectedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const total = selectedModules.reduce((sum, id) => {
    const mod = modules.find(m => m.id === id);
    return sum + parseInt(mod?.price.replace('$', '') || '0');
  }, 0);

  return (
    <section id="systems" className="py-24 relative bg-background overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="text-sm font-medium text-secondary uppercase tracking-widest">Interactive Demo</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Build Your <span className="text-gradient">Ecosystem</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Select the modules you need. Our systems are fully composable, meaning you only pay for the infrastructure you actually use.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modules.map((mod, index) => {
                const isSelected = selectedModules.includes(mod.id);
                return (
                  <motion.div
                    key={mod.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card 
                      className={`p-4 cursor-pointer transition-all duration-300 border ${isSelected ? 'bg-primary/10 border-primary/50' : 'bg-card/40 border-white/10 hover:border-white/30'}`}
                      onClick={() => toggleModule(mod.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-primary/20' : 'bg-white/5'}`}>
                            <mod.icon className={`w-5 h-5 ${isSelected ? mod.color : 'text-muted-foreground'}`} />
                          </div>
                          <div>
                            <h4 className={`font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>{mod.name}</h4>
                            <p className="text-xs text-muted-foreground">{mod.price}</p>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${isSelected ? 'bg-primary border-primary text-white' : 'border-white/20 text-transparent'}`}>
                          <Check size={14} />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-1 w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full"></div>
              
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                <Settings className="text-primary animate-spin-slow" />
                <h3 className="text-xl font-bold text-white">System Configuration</h3>
              </div>

              <div className="space-y-4 mb-8 min-h-[200px]">
                {selectedModules.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-muted-foreground py-12">
                    <Plus className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-sm">Select modules to build your system</p>
                  </div>
                ) : (
                  selectedModules.map(id => {
                    const mod = modules.find(m => m.id === id)!;
                    return (
                      <motion.div 
                        key={id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <mod.icon className={`w-4 h-4 ${mod.color}`} />
                          <span className="text-sm text-gray-200">{mod.name}</span>
                        </div>
                        <span className="text-sm font-mono text-muted-foreground">{mod.price}</span>
                      </motion.div>
                    );
                  })
                )}
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400">Estimated Total</span>
                  <span className="text-3xl font-bold text-white font-mono">${total}</span>
                </div>
                <Button 
                  className="w-full bg-white text-black hover:bg-gray-200 h-12 text-base font-semibold rounded-xl"
                  onClick={() => window.location.href = `mailto:Ashiquzzamanchoya@gmail.com?subject=System Setup Inquiry (Estimated Total: $${total})`}
                >
                  Initialize Setup
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
