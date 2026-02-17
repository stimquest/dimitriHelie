import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Star, Quote } from 'lucide-react';
import { services, partners } from '../data';
import ServiceDetail from './ServiceDetail';

const formatIds = ['flash-mental', 'ateliers', 'conferences'];

const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const selectedService = services.find(s => s.id === selectedServiceId);

  const formatServices = services.filter(s => formatIds.includes(s.id));
  const publicServices = services.filter(s => !formatIds.includes(s.id));

  const reviews = [
    { name: "Julien M.", role: "Athlète Haut Niveau", text: "Un accompagnement qui m'a permis de franchir un cap décisif dans ma carrière. La méthode est claire et efficace." },
    { name: "Sophie L.", role: "Dirigeante", text: "J'ai appris à gérer la pression et à prendre de meilleures décisions. Un vrai atout pour mon leadership." },
    { name: "Thomas D.", role: "Golfeur Amateur", text: "Dimitri a su identifier mes blocages rapidement. Je joue désormais avec beaucoup plus de sérénité." }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-brand-lighter/30 to-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-semibold text-xs uppercase tracking-wider mb-2 block">Offre d'accompagnement</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Des solutions adaptées à <br/>vos enjeux de performance
          </h2>
          <p className="text-slate-500 text-lg">
             Que vous soyez athlète, étudiant ou dirigeant, je vous propose des formats d'intervention ciblés et structurés.
          </p>
        </div>

        {/* Formats d'intervention */}
        <div className="mb-10">
           <h3 className="font-display text-lg font-bold text-slate-800 mb-1">Formats d'intervention</h3>
           <p className="text-sm text-slate-400 mb-6">Modules, ateliers et conférences adaptés à vos besoins</p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {formatServices.map((service, index) => (
               <motion.div
                 key={service.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 onClick={() => setSelectedServiceId(service.id)}
                 className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg hover:-translate-y-1 transform-gpu transition-[transform,box-shadow,border-color] duration-300 cursor-pointer group flex flex-col h-full border border-slate-200 hover:border-brand"
               >
                  <div className="mb-6">
                     <div className="w-12 h-12 bg-brand-lighter text-brand rounded-xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <Target size={24} />
                     </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-800 mb-3 group-hover:text-brand transition-colors">
                     {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                     {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm mt-auto">
                     En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Accompagnement par public */}
        <div className="mb-24">
           <h3 className="font-display text-lg font-bold text-slate-800 mb-1">Accompagnement par public</h3>
           <p className="text-sm text-slate-400 mb-6">Un suivi personnalisé selon votre profil et vos objectifs</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {publicServices.map((service, index) => (
               <motion.div
                 key={service.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 onClick={() => setSelectedServiceId(service.id)}
                 className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg hover:-translate-y-1 transform-gpu transition-[transform,box-shadow,border-color] duration-300 cursor-pointer group flex flex-col h-full border border-slate-200 hover:border-brand"
               >
                  <div className="mb-6">
                     <div className="w-12 h-12 bg-brand-lighter text-brand rounded-xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <Target size={24} />
                     </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-800 mb-3 group-hover:text-brand transition-colors">
                     {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                     {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm mt-auto">
                     En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-3xl p-10 md:p-16 border border-slate-200 shadow-card">
           <div className="text-center mb-12">
              <h3 className="font-display text-2xl font-bold text-slate-800 mb-4">Ce qu'ils disent de nous</h3>
              <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <p className="text-sm text-slate-400">Basé sur les avis Google</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                 <div key={idx} className="bg-brand-lighter/30 p-6 rounded-2xl relative">
                    <Quote className="text-brand/20 absolute top-4 left-4" size={40} />
                    <p className="text-slate-600 italic mb-4 relative z-10 pt-4">"{review.text}"</p>
                    <div>
                       <span className="block font-semibold text-slate-800">{review.name}</span>
                       <span className="text-xs text-slate-400 uppercase">{review.role}</span>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Partners Section */}
        <div className="mt-16 pt-16 border-t border-slate-100">
           <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-10">Ils nous font confiance</p>
           <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
              {partners.map((partner, idx) => (
	                 <div key={idx} className="text-center px-5 py-3 border border-slate-200 rounded-xl bg-white hover:border-brand hover:shadow-card hover:-translate-y-0.5 transform-gpu transition-[transform,box-shadow,border-color] duration-300">
                    <span className="font-display font-semibold text-slate-600 text-sm md:text-base">
                       {partner.name}
                    </span>
                 </div>
              ))}
           </div>
        </div>

      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceDetail 
            service={selectedService} 
            onClose={() => setSelectedServiceId(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;