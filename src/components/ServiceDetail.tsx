import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Clock, Users, Calendar, Info, Star } from 'lucide-react';
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
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-90"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed inset-4 md:inset-y-8 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl lg:max-w-4xl z-100 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Close Button */}
        <button 
           onClick={onClose}
	   	   className="absolute top-4 right-4 z-50 p-2 bg-white/90 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-50 shadow-soft border border-slate-100 hover:-translate-y-0.5 transition-[transform,box-shadow,background-color,color] duration-300"
        >
           <X size={24} />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">

              {/* Header Image — edge to edge in scroll area */}
              {service.image && (
                <div className="w-full h-52 md:h-72 overflow-hidden bg-slate-200">
                  <img
                     src={service.image}
                     alt={service.title}
                     className="w-full h-full object-cover"
                  />
                </div>
              )}

           <div className="p-6 md:p-10 lg:p-12">

              {/* Title & Pitch */}
              <div className="mb-8">
                 <span className="inline-flex items-center gap-1.5 bg-brand text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest mb-4">
                    Module Expert
                 </span>
                 <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {service.title}
                 </h2>
                 <p className="text-[15px] leading-relaxed text-slate-600 mb-6">{service.shortDescription}</p>
                 <blockquote className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 text-[15px] text-slate-700 italic leading-relaxed relative">
                    <span className="absolute -top-3 left-4 bg-brand text-white text-xs font-bold px-2 py-0.5 rounded">"</span>
                    {service.pitch}
                 </blockquote>
              </div>

              {/* Why Choose — fond gris clair, icônes pleines */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 mb-8">
                 <h3 className="font-display font-bold text-slate-900 text-[15px] mb-4 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                       <Check size={14} strokeWidth={3} />
                    </span>
                    Pourquoi choisir ce module ?
                 </h3>
                 <div className="space-y-0 divide-y divide-slate-200">
                    {service.whyChoose.map((item, i) => (
                       <div key={i} className="flex items-start gap-3 py-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                          <span className="text-[14px] leading-relaxed text-slate-800">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Themes — BLOC SOMBRE pour vrai contraste */}
              <div className="bg-slate-800 rounded-2xl p-5 md:p-6 mb-8">
                 <h3 className="font-display font-bold text-white text-[15px] mb-4 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                       <Star size={14} />
                    </span>
                    {service.themesTitle || "Axes de travail"}
                 </h3>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0 divide-y divide-slate-700 sm:divide-y-0">
                    {service.themes.map((theme, i) => (
                       <li key={i} className="flex items-start gap-2.5 py-2.5 border-b border-slate-700 last:border-b-0 text-[14px] leading-snug text-slate-300">
                           <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span className="flex-1">{theme}</span>
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Practical Infos — cartes visibles */}
              <div className="mb-4">
                 <h3 className="font-display font-bold text-slate-900 text-[15px] mb-4 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                       <Info size={14} />
                    </span>
                    Infos Pratiques
                 </h3>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Format */}
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                       <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-3">
                          <Clock size={16} className="text-brand" /> Format
                       </div>
                       <ul className="space-y-2">
                          {service.infosPratiques.format.map((l, i) => (
                              <li key={i} className="text-[13px] leading-snug text-slate-700 flex items-start gap-2">
                                 <span className="mt-1.5 w-1.5 h-1.5 bg-brand rounded-full shrink-0" />
                                {l}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Audience */}
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                       <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-3">
                          <Users size={16} className="text-brand" /> Pour qui ?
                       </div>
                       <ul className="space-y-2">
                          {service.infosPratiques.audience.map((l, i) => (
                              <li key={i} className="text-[13px] leading-snug text-slate-700 flex items-start gap-2">
                                 <span className="mt-1.5 w-1.5 h-1.5 bg-brand rounded-full shrink-0" />
                                {l}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Organization */}
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                       <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-3">
                          <Info size={16} className="text-brand" /> Organisation
                       </div>
                       <ul className="space-y-2">
                          {service.infosPratiques.organization.map((l, i) => (
                              <li key={i} className="text-[13px] leading-snug text-slate-700 flex items-start gap-2">
                                 <span className="mt-1.5 w-1.5 h-1.5 bg-brand rounded-full shrink-0" />
                                {l}
                             </li>
                          ))}
                       </ul>
                    </div>
                 </div>

                 {/* Footer Pricing & CTA */}
                 <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                       <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Tarification</span>
                       <span className="font-bold text-slate-900 text-lg">{service.infosPratiques.pricing}</span>
                    </div>
                    <a
                       href="https://calendly.com/"
                       target="_blank"
                       className="w-full md:w-auto bg-brand text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-brand-dark hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transform-gpu transition-[transform,box-shadow,background-color] duration-300 flex items-center justify-center gap-2"
                    >
                       <Calendar size={18} /> Réserver
                    </a>
                 </div>
              </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceDetail;