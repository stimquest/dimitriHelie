import React, { useState } from 'react';
import { Award, BadgeCheck, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import type { Diploma, HomePage } from '../types';

interface Props {
  diplomas: Diploma[];
  homePage: HomePage | null;
}

const FALLBACK_BODY = [
  "Ingénieur en recherche et développement de formation, j'ai d'abord évolué dans un univers analytique et structuré. Rapidement, le besoin de revenir au terrain et au sport s'est imposé comme une évidence. J'ai alors choisi de me réorienter en passant mes diplômes d'État d'éducateur sportif et d'entraîneur dans le domaine du nautisme.",
  "Depuis quelques années, j'ai accompagné des publics variés dans le cadre sportif. Cette expérience m'a permis de développer de solides compétences de terrain : personnalisation des programmes d'apprentissage, capacité d'analyse, compréhension fine des attentes, adaptabilité, pédagogie et relationnel. Des compétences que j'utilise aujourd'hui quotidiennement dans mon métier de préparateur mental.",
  "Au fil de ces années, j'ai également assumé des responsabilités de direction au sein de structures sportives. Gestion, organisation, management d'équipe : ces fonctions m'ont conduit à développer une vision globale du fonctionnement collectif et à apprendre à fédérer, motiver et faire grandir les personnes que j'accompagnais.",
];

const AboutSection: React.FC<Props> = ({ diplomas, homePage: hp }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const aboutImage    = hp?.aboutImage        ?? null;
  const eyebrow       = hp?.aboutEyebrow      ?? 'Mon parcours';
  const title         = hp?.aboutTitle        ?? "De l'ingénieur R&D à la";
  const titleGradient = hp?.aboutTitleGradient ?? 'performance humaine.';
  const quote         = hp?.aboutQuote        ?? "Mon parcours est marqué par un fil conducteur fort : l'humain et la performance.";
  const body          = hp?.aboutBody;

  return (
    <>
      <section id="about" className="py-24 bg-linear-to-b from-white to-brand-lighter/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">

            {/* Colonne Image */}
            <div className="w-full lg:w-5/12 relative">
               <div className="sticky top-32">
                  <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-3/4 bg-slate-100">
                    <img
                      src={aboutImage ?? '/images/dimitriLande2.jpg'}
                      alt="Dimitri Helie"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-light rounded-full -z-10 blur-3xl opacity-60"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-light rounded-full -z-10 blur-2xl opacity-60"></div>
               </div>
            </div>

            {/* Colonne Texte */}
            <div className="w-full lg:w-7/12 pt-4">
               <h3 className="text-brand font-semibold text-sm uppercase tracking-wider mb-2">{eyebrow}</h3>

               <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-8 leading-tight">
                  {title}<br/>
                  <span className="gradient-text">{titleGradient}</span>
               </h2>

               <div className="prose prose-lg text-slate-500 prose-headings:font-display prose-headings:text-slate-800 text-justify">
                  <p className="font-medium text-slate-700 border-l-4 border-brand pl-4 italic bg-brand-lighter/50 py-3 rounded-r-xl">
                     "{quote}"
                  </p>

                  {body && body.length > 0 ? (
                    <PortableText value={body as any} />
                  ) : (
                    FALLBACK_BODY.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))
                  )}
               </div>
            </div>
          </div>

          {/* Diplomas Section */}
          <div className="mb-24">
             <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-slate-800 flex items-center gap-3">
                   <Award className="text-brand" /> Diplômes & Certifications
                </h3>
                <p className="text-sm text-slate-400 mt-1 ml-9">Formations et accréditations professionnelles</p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {diplomas.map((diploma, idx) => (
                   <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col">
                      <div className="h-1 w-10 bg-brand rounded-full mb-5" />
                      <h4 className="font-bold text-slate-800 text-base leading-snug mb-2">{diploma.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed grow">{diploma.description}</p>
                      <div className="flex items-center gap-2 pt-4 mt-4 border-t border-slate-100">
                         <BadgeCheck className="text-brand shrink-0" size={15} />
                         <span className="text-xs font-semibold text-slate-600 truncate">{diploma.institution}</span>
                         <div className="ml-auto flex items-center gap-2 shrink-0">
                            {diploma.year && <span className="text-xs text-slate-400">{diploma.year}</span>}
                            <button
                               onClick={() => diploma.image && setSelectedImage(diploma.image)}
                               disabled={!diploma.image}
                               className={`flex items-center gap-1 text-xs font-semibold transition-colors ${diploma.image ? 'text-brand hover:text-brand-dark cursor-pointer' : 'text-slate-300 cursor-not-allowed'}`}
                            >
                               <Eye size={12} /> Voir
                            </button>
                         </div>
                      </div>
                   </div>
                ))}

             </div>
          </div>

        </div>
      </section>

      {/* Modal image diplôme / carte pro */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-90"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-8 z-100 flex items-center justify-center pointer-events-none"
            >
              <div className="relative pointer-events-auto">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-4 -right-4 z-10 p-2 rounded-full bg-white text-slate-600 hover:text-red-500 shadow-lg transition-colors"
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedImage}
                  alt="Diplôme"
                  className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection;
