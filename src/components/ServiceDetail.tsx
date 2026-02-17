import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Clock, Users, Calendar, Info } from 'lucide-react';
import type { ServiceModule } from '../types';

interface ServiceDetailProps {
  service: ServiceModule;
  onClose: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onClose }) => {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[90]"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed inset-4 md:inset-y-8 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl lg:max-w-4xl z-[100] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Close Button */}
        <button 
           onClick={onClose}
           className="absolute top-4 right-4 z-50 p-2 bg-white/90 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-50 transition-colors shadow-soft border border-slate-100"
        >
           <X size={24} />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-10 lg:p-12">
              
              {/* Header Image */}
              <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 shadow-soft bg-slate-100">
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                 />
              </div>

              {/* Title & Pitch */}
              <div className="mb-8">
                 <span className="bg-brand-lighter text-brand px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                    Module Expert
                 </span>
                 <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                    {service.title}
                 </h2>
                 <p className="text-lg text-slate-600 font-medium italic pl-4 border-l-4 border-brand bg-brand-lighter/30 py-3 rounded-r-xl">
                    "{service.pitch}"
                 </p>
              </div>

              <div className="grid gap-8">
                 
                 {/* Description & Why Choose */}
                 <div>
                    <div className="prose prose-slate max-w-none mb-6 text-slate-500">
                       <p>{service.shortDescription}</p>
                    </div>
                    
                    <h3 className="font-display font-semibold text-slate-800 mb-4 flex items-center gap-2">
                       <Check className="text-brand" size={20}/> Pourquoi choisir ce module ?
                    </h3>
                    <ul className="grid gap-2 mb-6">
                       {service.whyChoose.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                             <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></span>
                             {item}
                          </li>
                       ))}
                    </ul>
                 </div>

                 {/* Themes */}
                 <div>
                    <h3 className="font-display font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                       {service.themesTitle || "Axes de travail"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                       {service.themes.map((theme, i) => (
                          <span key={i} className="px-3 py-1.5 bg-brand-lighter border border-brand/20 rounded-full text-sm text-slate-600 font-medium">
                             {theme}
                          </span>
                       ))}
                    </div>
                 </div>

                 {/* Practical Infos */}
                 <div className="bg-brand-lighter/30 border border-brand/10 rounded-2xl p-6 relative">
                    <div className="absolute -top-3 left-6 bg-brand text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-soft">
                       Infos Pratiques
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                       {/* Format */}
                       <div>
                          <div className="flex items-center gap-2 text-slate-800 font-semibold mb-3">
                             <Clock size={18} className="text-brand" /> Format
                          </div>
                          <ul className="space-y-2">
                             {service.infosPratiques.format.map((l, i) => (
                                <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                                   <span className="w-1 h-1 bg-brand rounded-full mt-2 shrink-0"></span>
                                   {l}
                                </li>
                             ))}
                          </ul>
                       </div>

                       {/* Audience */}
                       <div>
                          <div className="flex items-center gap-2 text-slate-800 font-semibold mb-3">
                             <Users size={18} className="text-brand" /> Pour qui ?
                          </div>
                          <ul className="space-y-2">
                             {service.infosPratiques.audience.map((l, i) => (
                                <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                                   <span className="w-1 h-1 bg-brand rounded-full mt-2 shrink-0"></span>
                                   {l}
                                </li>
                             ))}
                          </ul>
                       </div>
                       
                       {/* Organization */}
                       <div>
                          <div className="flex items-center gap-2 text-slate-800 font-semibold mb-3">
                             <Info size={18} className="text-brand" /> Organisation
                          </div>
                          <ul className="space-y-2">
                             {service.infosPratiques.organization.map((l, i) => (
                                <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                                   <span className="w-1 h-1 bg-brand rounded-full mt-2 shrink-0"></span>
                                   {l}
                                </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                    
                    {/* Footer Pricing & CTA */}
                    <div className="mt-6 pt-6 border-t border-brand/10 flex flex-col md:flex-row items-center justify-between gap-4">
                       <div>
                          <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Tarification</span>
                          <span className="font-bold text-slate-800 text-lg">{service.infosPratiques.pricing}</span>
                       </div>
                       <a 
                          href="https://calendly.com/" 
                          target="_blank"
                          className="w-full md:w-auto bg-brand text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-brand-dark transition-colors shadow-soft flex items-center justify-center gap-2"
                       >
                          <Calendar size={18} /> Réserver
                       </a>
                    </div>
                 </div>

              </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceDetail;