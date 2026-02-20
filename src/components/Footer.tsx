import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react';
import ContactModal from './ContactModal';
import type { HomePage } from '../types';

interface Props {
  homePage: HomePage | null;
}

const Footer: React.FC<Props> = ({ homePage: hp }) => {
  const [contactOpen, setContactOpen] = useState(false);

  const ctaTitle         = hp?.footerCtaTitle         ?? 'Prêt à libérer votre';
  const ctaTitleGradient = hp?.footerCtaTitleGradient  ?? 'potentiel mental ?';
  const ctaSubtitle      = hp?.footerCtaSubtitle       ?? 'La performance commence par une décision. Discutons de vos objectifs et définissons votre stratégie.';
  const scheduleText     = hp?.footerScheduleText      ?? 'de 9h à 18h du lundi au samedi';
  const address          = hp?.footerAddress           ?? '1 rue de la foire, Montmartin-sur-Mer';
  const mapUrl           = hp?.footerMapUrl            ?? 'https://www.google.com/maps/search/?api=1&query=1+rue+de+la+foire+Montmartin+sur+Mer';
  const linkedinUrl      = hp?.footerLinkedinUrl       ?? '#';
  const facebookUrl      = hp?.footerFacebookUrl       ?? '#';
  const calendlyUrl      = hp?.footerCalendlyUrl       ?? 'https://calendly.com/';
  const calendlyBtnText  = hp?.footerCalendlyButtonText ?? 'APPEL 30 MN';

  return (
    <>
    <footer id="contact" className="py-20 bg-linear-to-b from-slate-800 to-slate-900 relative text-white overflow-hidden">

      {/* Background Ambience - Light Blue */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Top Section: CTA */}
        <div className="max-w-4xl mx-auto text-center mb-16 pb-16 border-b border-slate-700">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {ctaTitle}<br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-secondary">{ctaTitleGradient}</span>
          </h2>
          <p className="text-lg text-slate-400 font-light max-w-xl mx-auto mb-8">
            {ctaSubtitle}
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center gap-2 bg-brand text-white font-bold px-8 py-3.5 rounded-xl hover:bg-brand-dark hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Mail size={18} />
            M'écrire un message
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 pb-16 border-b border-slate-700">

           {/* Horaires */}
           <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-4">
                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Clock size={18} />
                 </span>
                 <h4 className="font-display font-bold text-white text-[15px]">Horaires</h4>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                 Je vous accueille à mon cabinet ou en visio<br/>
                 <span className="text-slate-300 font-medium">{scheduleText}</span>
              </p>
           </div>

           {/* Cabinet */}
           <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-4">
                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <MapPin size={18} />
                 </span>
                 <h4 className="font-display font-bold text-white text-[15px]">Cabinet</h4>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 mb-3">
                 <span className="text-slate-300 font-medium">Dimitri Helie</span> – Préparateur Mental<br/>
                 {address}
              </p>
              <a
                 href={mapUrl}
                 target="_blank"
                 className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-white border border-slate-600 hover:border-brand hover:bg-brand rounded-lg px-3 py-1.5 transition-all duration-200"
              >
                 Voir sur la carte <ArrowUpRight size={12} />
              </a>
           </div>

           {/* Réseaux */}
           <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-4">
                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Mail size={18} />
                 </span>
                 <h4 className="font-display font-bold text-white text-[15px]">Mes réseaux</h4>
              </div>
              <div className="flex gap-3">
                 <a href={linkedinUrl} target="_blank" className="w-10 h-10 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                    <Linkedin size={20} />
                 </a>
                 <a href={facebookUrl} target="_blank" className="w-10 h-10 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                    <Facebook size={20} />
                 </a>
              </div>
           </div>

           {/* Prendre RDV */}
           <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-4">
                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Phone size={18} />
                 </span>
                 <h4 className="font-display font-bold text-white text-[15px]">Prendre RDV</h4>
              </div>
              <a
                 href={calendlyUrl}
                 target="_blank"
                 className="inline-flex items-center justify-center gap-2 w-full bg-brand text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-brand-dark hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                 {calendlyBtnText}
              </a>
           </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Dimitri Helie — Préparation Mentale & Performance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>

    <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Footer;
