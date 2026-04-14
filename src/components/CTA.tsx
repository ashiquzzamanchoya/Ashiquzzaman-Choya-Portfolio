import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ashiquzzamanchoya@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New Order Inquiry from ${formData.name}`,
          _template: "table"
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if required fields are filled
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert("Please fill out all fields before ordering via WhatsApp.");
      return;
    }

    const text = encodeURIComponent(`Hi Ashiquzzaman,\n\nI would like to place an order.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n\n*Project Details:*\n${formData.message}`);
    window.open(`https://wa.me/8801570201514?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/90 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Place an <span className="text-gradient">Order?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below with your project details, and I'll get back to you as soon as possible to start building your system.
            </p>
          </div>

          <form className="max-w-2xl mx-auto flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="h-12 px-4 rounded-xl bg-white/5 border-white/20 text-white placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary w-full"
                />
              </div>
              <div className="space-y-2 text-left">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com" 
                  className="h-12 px-4 rounded-xl bg-white/5 border-white/20 text-white placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary w-full"
                />
              </div>
            </div>
            
            <div className="space-y-2 text-left">
              <label htmlFor="service" className="text-sm font-medium text-white/80">Service Requested</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="flex h-12 w-full items-center justify-between rounded-xl border border-white/20 bg-white/5 px-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-background [&>option]:text-foreground"
              >
                <option value="" disabled>Select a service</option>
                <option value="Stream Setup">Stream Setup</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Thumbnail Design">Thumbnail Design</option>
                <option value="Full Infrastructure">Full Infrastructure</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="message" className="text-sm font-medium text-white/80">Project Details</label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, goals, and timeline..." 
                className="min-h-[120px] p-4 rounded-xl bg-white/5 border-white/20 text-white placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary w-full resize-y"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                type="submit"
                size="lg" 
                disabled={isSubmitting}
                className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white glow-primary flex-1 flex items-center justify-center gap-2 text-lg font-medium disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 size={20} className="animate-spin" /></>
                ) : (
                  <>Order via Email <Send size={20} /></>
                )}
              </Button>
              <Button 
                type="button"
                size="lg" 
                onClick={handleWhatsAppSubmit}
                className="h-14 px-8 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex-1 flex items-center justify-center gap-2 text-lg font-medium shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                Order via WhatsApp 
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </Button>
            </div>

            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mt-2 rounded-xl bg-green-500/20 border border-green-500/30 flex items-start gap-3 text-left"
              >
                <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-green-100 font-medium">Message sent successfully!</p>
                  <p className="text-green-200/80 text-sm mt-1">
                    I'll get back to you at {formData.email || 'your email'} as soon as possible.
                  </p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mt-2 rounded-xl bg-red-500/20 border border-red-500/30 text-left"
              >
                <p className="text-red-200 font-medium">Oops! Something went wrong.</p>
                <p className="text-red-200/80 text-sm mt-1">
                  Please try again or use the WhatsApp button instead.
                </p>
              </motion.div>
            )}
          </form>
          
        </motion.div>
      </div>
    </section>
  );
}
