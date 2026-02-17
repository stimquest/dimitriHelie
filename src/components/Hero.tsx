import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      
      {/* Background gradient - Light and airy */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-lighter to-secondary-light opacity-60"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-lighter/40 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-brand-light text-brand-dark rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                Performance & Bien-être
              </div>
              
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-slate-800 leading-[1.1] mb-6">
                Libérez votre <br/>
                <span className="gradient-text">plein potentiel.</span>
              </h1>
              
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                La performance ne se joue pas que sur le terrain. Développez un mental solide, lucide et confiant pour atteindre vos objectifs, que vous soyez sportif, étudiant ou dirigeant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/" 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-brand-dark hover:shadow-glow"
                >
                  <Calendar size={18} />
                  Prendre un RDV
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-xl font-semibold transition-all hover:border-brand hover:text-brand hover:shadow-soft"
                >
                  Découvrir mes services
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual Right */}
          <div className="lg:w-1/2 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative rounded-3xl overflow-hidden shadow-soft bg-slate-100"
             >
                <img 
                  src="/images/IMG_7808_carre.jpg" 
                  alt="Dimitri Helie - Préparateur Mental" 
                  className="w-full h-[500px] object-cover object-top"
                />
                {/* Overlay gradient subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-soft max-w-xs">
                   <p className="font-bold text-slate-800 text-lg mb-1">Architecture Cognitive</p>
                   <p className="text-sm text-slate-500">Une méthode structurée pour des résultats concrets.</p>
                </div>
             </motion.div>
             
             {/* Decorative elements */}
             <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-light rounded-full -z-10 blur-3xl opacity-60"></div>
             <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary-light rounded-full -z-10 blur-2xl opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;