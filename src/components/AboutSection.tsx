import React, { useState } from 'react';
import { Award, BadgeCheck, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Diploma } from '../types';

interface Props {
  diplomas: Diploma[];
}

const AboutSection: React.FC<Props> = ({ diplomas }) => {
  const [showDiplomas, setShowDiplomas] = useState(false);

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
                      src="/images/dimitriLande2.jpg" 
                      alt="Dimitri Helie" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Element décoratif */}
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-light rounded-full -z-10 blur-3xl opacity-60"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-light rounded-full -z-10 blur-2xl opacity-60"></div>
               </div>
            </div>

            {/* Colonne Texte */}
            <div className="w-full lg:w-7/12 pt-4">
               <h3 className="text-brand font-semibold text-sm uppercase tracking-wider mb-2">Mon parcours</h3>
               
               <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-8 leading-tight">
                  De l'ingénieur R&D à la <br/>
                  <span className="gradient-text">performance humaine.</span>
               </h2>

               <div className="prose prose-lg text-slate-500 prose-headings:font-display prose-headings:text-slate-800 text-justify">
                  <p className="font-medium text-slate-700 border-l-4 border-brand pl-4 italic bg-brand-lighter/50 py-3 rounded-r-xl">
                     "Mon parcours est marqué par un fil conducteur fort : l'humain et la performance."
                  </p>

                  <p>
                     Ingénieur en recherche et développement de formation, j'ai d'abord évolué dans un univers analytique et structuré. Rapidement, le besoin de revenir au terrain et au sport s'est imposé comme une évidence. J'ai alors choisi de me réorienter en passant mes diplômes d'État d'éducateur sportif et d'entraîneur dans le domaine du nautisme.
                  </p>

                  <p>
                     Depuis quelques années, j'ai accompagné des publics variés dans le cadre sportif. Cette expérience m'a permis de développer de solides compétences de terrain : personnalisation des programmes d'apprentissage, capacité d'analyse, compréhension fine des attentes, adaptabilité, pédagogie et relationnel. Des compétences que j'utilise aujourd'hui quotidiennement dans mon métier de préparateur mental.
                  </p>

                  <p>
                     Au fil de ces années, j'ai également assumé des responsabilités de direction au sein de structures sportives. Gestion, organisation, management d'équipe : ces fonctions m'ont conduit à développer une vision globale du fonctionnement collectif et à apprendre à fédérer, motiver et faire grandir les personnes que j'accompagnais.
                  </p>
               </div>
            </div>
          </div>

          {/* Diplomas Section */}
          <div className="mb-24">
             <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-2xl font-bold text-slate-800 flex items-center gap-3">
                   <Award className="text-brand" /> Mes Diplômes & Certifications
                </h3>
                <button 
                   onClick={() => setShowDiplomas(true)}
                   className="flex items-center gap-2 px-4 py-2 bg-brand-lighter text-brand rounded-xl font-semibold text-sm hover:bg-brand hover:text-white hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow,background-color,color] duration-300"
                >
                   <FileText size={18} /> Voir les diplômes
                </button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {diplomas.map((diploma, idx) => (
                   	<div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand hover:shadow-card hover:-translate-y-1 transform-gpu transition-[transform,box-shadow,border-color] duration-300">
                      <BadgeCheck className="text-brand mb-4" size={32} />
                      <h4 className="font-bold text-slate-800 mb-2">{diploma.title}</h4>
                      <p className="text-xs font-semibold uppercase text-brand mb-3">{diploma.institution} {diploma.year && `- ${diploma.year}`}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                         {diploma.description}
                      </p>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* Modal Diplomas */}
      <AnimatePresence>
        {showDiplomas && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDiplomas(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-90"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-y-8 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl z-100 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h3 className="font-display text-xl font-bold text-slate-800 flex items-center gap-2">
                   <Award className="text-brand" /> Diplômes & Certifications
                </h3>
                <button 
                   onClick={() => setShowDiplomas(false)}
                   className="p-2 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-50 transition-colors"
                >
                   <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-auto p-6">
                {/* PDF Viewer - iframe pour afficher le PDF */}
                <div className="w-full h-full min-h-[60vh] bg-slate-50 rounded-2xl flex items-center justify-center">
                   <iframe 
                     src="/documents/diplomes.pdf" 
                     className="w-full h-full min-h-[60vh] rounded-2xl"
                     title="Diplômes"
                   />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection;