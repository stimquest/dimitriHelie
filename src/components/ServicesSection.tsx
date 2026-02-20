import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Star, Quote,
  Zap, Brain, Target, Trophy, Medal, Users, User, Mic,
  BookOpen, GraduationCap, Briefcase, Heart, TrendingUp, Flame,
  Lightbulb, Shield, Compass, Mountain, Clock, Presentation, Smile,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import ServiceDetail from './ServiceDetail';
import type { ServiceModule, Partner, Review, HomePage } from '../types';

type LucideIcon = React.FC<LucideProps>;

const ICON_MAP: Record<string, LucideIcon> = {
  Zap, Brain, Target, Trophy, Medal, Users, User, Mic,
  BookOpen, GraduationCap, Briefcase, Heart, TrendingUp, Flame,
  Lightbulb, Shield, Compass, Mountain, Clock, Presentation, Smile,
};

function ServiceIcon({ name }: { name: string | null }) {
  const Icon = (name && ICON_MAP[name]) ? ICON_MAP[name] : Target;
  return <Icon size={24} />;
}

const FALLBACK_REVIEWS: Review[] = [
  { name: "Marc D.", role: "Athlète Haut Niveau", text: "Dimitri est un super préparateur mental. Il m'aide pour être meilleur dans mon sport le concours hippique. Depuis que nous travaillons ensembles mes performances ne cessent de s'améliorer. Je suis régulièrement dans le top 8. Il m'a apporté une nouvelle façon d'aborder les difficultés avec plus de sérénité." },
  { name: "Katy B.", role: "Manager", text: "Une belle rencontre ! Dimitri a su m'accompagner avec beaucoup de bienveillance et de professionnalisme. Des conseils avisés, des recherches personnalisées pertinentes et des mises en pratiques très concrètes. Dimitri fait parti des personnes qui marque votre chemin de vie. Je vous le recommande sans hésitation." },
  { name: "Richard D.", role: "Sportif", text: "Dimitri est très à l'écoute et m'a permis d'appréhender différemment la gestion du stress avant et pendant les compétitions. Il m'a permis de reprendre du plaisir dans la pratique de mon sport et donc d'être plus performant." },
];

interface Props {
  services: ServiceModule[];
  partners: Partner[];
  reviews: Review[];
  homePage: HomePage | null;
}

const formatIds = ['flash-mental', 'ateliers', 'conferences'];

const ServicesSection: React.FC<Props> = ({ services, partners, reviews: sanityReviews, homePage: hp }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const selectedService = services.find(s => s.id === selectedServiceId);

  const formatServices = services.filter(s => formatIds.includes(s.id));
  const publicServices = services.filter(s => !formatIds.includes(s.id));

  const reviews = sanityReviews.length > 0 ? sanityReviews : FALLBACK_REVIEWS;

  const bannerImage    = hp?.servicesBannerImage    ?? '/images/voile-visuel.jpeg';
  const bannerBadge    = hp?.servicesBannerBadge    ?? "Offre d'accompagnement";
  const bannerTitle    = hp?.servicesBannerTitle    ?? "Des solutions adaptées à vos enjeux de performance";
  const bannerSubtitle = hp?.servicesBannerSubtitle ?? "Que vous soyez athlète, étudiant ou dirigeant, je vous propose des formats d'intervention ciblés et structurés.";
  const publicTitle    = hp?.publicSectionTitle    ?? "Accompagnement par public";
  const publicSubtitle = hp?.publicSectionSubtitle ?? "Un suivi personnalisé selon votre profil et vos objectifs";
  const formatsTitle   = hp?.formatsSectionTitle   ?? "Formats d'intervention";
  const formatsSubtitle = hp?.formatsSectionSubtitle ?? "Modules, ateliers et conférences adaptés à vos besoins";
  const reviewsTitle   = hp?.reviewsSectionTitle   ?? "Témoignages de mes coachés";
  const partnersTitle  = hp?.partnersSectionTitle  ?? "Ils me font confiance";

  return (
    <section id="services" className="relative">

      {/* Hero visuel — image voile */}
      <div className="relative h-72 md:h-96 overflow-hidden">
         <img
           src={bannerImage}
           alt="Préparation mentale et performance"
           className="w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
         <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6">
               <span className="text-brand-light font-semibold text-xs uppercase tracking-wider mb-3 block">{bannerBadge}</span>
               <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                 {bannerTitle}
               </h2>
               <p className="text-slate-300 text-lg max-w-xl mx-auto">
                  {bannerSubtitle}
               </p>
            </div>
         </div>
      </div>

      {/* Contenu services */}
      <div className="py-20 bg-linear-to-b from-white to-brand-lighter/20">
      <div className="container mx-auto px-6">

        {/* Accompagnement par public */}
        <div className="mb-10">
           <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-800 mb-2">{publicTitle}</h3>
           <p className="text-base text-slate-500 mb-8">{publicSubtitle}</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {publicServices.map((service, index) => (
               <motion.div
                 key={service.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 onClick={() => setSelectedServiceId(service.id)}
                 className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transform-gpu transition-[transform,box-shadow,border-color] duration-300 cursor-pointer group flex flex-col h-full border border-slate-700/60 hover:border-brand/60"
               >
                  <div className="mb-6">
                     <div className="w-14 h-14 bg-brand/20 text-brand rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <ServiceIcon name={service.icon} />
                     </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                     {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 grow">
                      {service.shortDescription}
                   </p>
                   <div className="flex items-center gap-2 text-brand font-semibold text-sm mt-auto">
                      En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </motion.div>
              ))}
            </div>
         </div>

         {/* Formats d'intervention */}
         <div className="mt-16 mb-24">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-800 mb-2">{formatsTitle}</h3>
            <p className="text-base text-slate-500 mb-8">{formatsSubtitle}</p>
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
                         <ServiceIcon name={service.icon} />
                      </div>
                   </div>
                   <h3 className="font-display text-xl font-bold text-slate-800 mb-3 group-hover:text-brand transition-colors">
                      {service.title}
                   </h3>
                   <p className="text-slate-500 text-sm leading-relaxed mb-6 grow">
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
              <h3 className="font-display text-2xl font-bold text-slate-800 mb-4">{reviewsTitle}</h3>
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
          <div className="mt-20 pt-16 border-t border-slate-200">
             <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-12">{partnersTitle}</p>
             <div className="flex flex-nowrap justify-center gap-x-12 items-center max-w-7xl mx-auto overflow-x-auto pb-4">
                {partners.map((partner, idx) => (
                   <div key={idx} className="flex items-center justify-center shrink-0">
                      {partner.logoUrl ? (
                         <img
                           src={partner.logoUrl}
                           alt={partner.name}
                           title={partner.name}
                           className="h-24 md:h-28 w-auto object-contain grayscale hover:grayscale-0 transition-[filter] duration-300"
                         />
                      ) : (
                         <span className="font-display font-semibold text-slate-600 text-lg md:text-xl text-center whitespace-nowrap">
                            {partner.name}
                         </span>
                      )}
                   </div>
                ))}
             </div>
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
