import React from 'react';
import { Mail, Linkedin, Facebook, ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative text-white overflow-hidden">

      {/* Background Ambience - Light Blue */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Top Section: CTA */}
        <div className="max-w-4xl mx-auto text-center mb-16 pb-16 border-b border-slate-700">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Prêt à libérer votre <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-secondary">potentiel mental ?</span>
          </h2>
          <p className="text-lg text-slate-400 font-light max-w-xl mx-auto">
            La performance commence par une décision. Discutons de vos objectifs et définissons votre stratégie.
          </p>
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
                 <span className="text-slate-300 font-medium">de 9h à 18h du lundi au samedi</span>
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
                 1 rue de la foire, Montmartin-sur-Mer
              </p>
              <a
                 href="https://www.google.com/maps/search/?api=1&query=1+rue+de+la+foire+Montmartin+sur+Mer"
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
                 <a href="#" className="w-10 h-10 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                    <Linkedin size={20} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-0.5">
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
                 href="https://calendly.com/"
                 target="_blank"
                 className="inline-flex items-center justify-center gap-2 w-full bg-brand text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-brand-dark hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                 APPEL 30 MN
              </a>
           </div>
        </div>

        {/* Bottom Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

           {/* Column 1: Contact */}
           <div>
              <h4 className="font-display font-semibold text-white text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand"></span> Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contact@dimitrihelie.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                     <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center group-hover:bg-brand transition-colors">
                        <Mail size={18} />
                     </div>
                     <span className="text-sm">contact@dimitrihelie.com</span>
                  </a>
                </li>
              </ul>
           </div>

           {/* Column 2: Quick Links */}
           <div>
              <h4 className="font-display font-semibold text-white text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand"></span> Plan du site
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="/#about" className="hover:text-brand hover:translate-x-1 transition-all inline-block">À propos</a></li>
                <li><a href="/#services" className="hover:text-brand hover:translate-x-1 transition-all inline-block">Services & Offres</a></li>
                <li><a href="https://calendly.com/" target="_blank" className="hover:text-brand hover:translate-x-1 transition-all inline-block flex items-center gap-1">Prendre RDV <ArrowUpRight size={12}/></a></li>
              </ul>
           </div>

           {/* Column 3: Copyright */}
           <div>
              <h4 className="font-display font-semibold text-white text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand"></span> Réseaux
              </h4>
              <div className="flex gap-4 mb-8">
                 <a href="#" className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <Linkedin size={20} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <Facebook size={20} />
                 </a>
              </div>
              <div className="text-slate-500 text-xs leading-relaxed border-t border-slate-700 pt-6">
                 <p>© {new Date().getFullYear()} Dimitri Helie.</p>
                 <p>Préparation Mentale & Performance.</p>
                 <p>Tous droits réservés.</p>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;