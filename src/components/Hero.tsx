import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Play, LayoutDashboard, Settings, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-sm font-medium text-muted-foreground">Streaming Expert & Systems Specialist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
          >
            I Build <span className="text-gradient">Systems</span><br />
            That Power Creators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            With over 7 years of experience, I deliver full-scale streaming solutions that go beyond basic setup. From professional graphics to Discord infrastructure and chatbot automation, I manage the backend so you can focus on creating.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white glow-primary h-14 px-8 text-lg rounded-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Setup <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white/20 hover:bg-white/10 h-14 px-8 text-lg rounded-xl backdrop-blur-sm"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5 text-secondary" /> View Systems
            </Button>
          </motion.div>
        </div>

        {/* Visual Content - Floating Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 relative w-full max-w-2xl lg:max-w-none"
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">
            {/* Main Dashboard Panel */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 m-auto w-[85%] h-[75%] glass-panel rounded-2xl overflow-hidden flex flex-col z-20 border border-white/20 shadow-2xl"
            >
              {/* Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto px-4 py-1 rounded-md bg-black/40 text-xs text-muted-foreground font-mono flex items-center gap-2">
                  <LayoutDashboard size={12} /> system-control.exe
                </div>
              </div>
              {/* Body */}
              <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Stream Status</span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    </div>
                    <div className="text-2xl font-bold text-white">LIVE</div>
                  </div>
                  <div className="h-32 rounded-xl bg-white/5 border border-white/10 p-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Engagement</span>
                    <div className="flex items-end gap-2 h-16">
                      {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-secondary/50 rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-40 rounded-xl bg-white/5 border border-white/10 p-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 block">Active Modules</span>
                    <div className="space-y-3">
                      {['OBS Integration', 'Chatbot AI', 'Discord Sync'].map((mod, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary">
                            <Settings size={12} />
                          </div>
                          <span className="text-sm text-gray-300">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-16 rounded-xl bg-gradient-to-r from-accent/20 to-transparent border border-accent/30 p-4 flex items-center gap-3">
                    <Zap className="text-accent" size={20} />
                    <span className="text-sm font-medium text-white">Automation Active</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute top-[10%] -left-[5%] w-48 h-32 glass-panel rounded-xl z-30 p-4 border border-white/20 shadow-xl flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Zap size={16} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Workflow</div>
                  <div className="text-sm font-bold text-white">Optimized</div>
                </div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                <div className="bg-secondary h-1.5 rounded-full w-[85%]"></div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[15%] -right-[5%] w-56 h-40 glass-panel rounded-xl z-10 p-4 border border-white/20 shadow-xl flex flex-col"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">System Load</span>
              <div className="relative flex-1 flex items-center justify-center">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                  <circle cx="48" cy="48" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="226" strokeDashoffset="60" className="text-primary" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-xl font-bold text-white">24%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
