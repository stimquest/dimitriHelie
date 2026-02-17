import React from 'react';
import MagnetButton from './ui/MagnetButton';
import { Mail, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto text-center mb-20 border-b border-slate-700 pb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Prêt à libérer votre <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-secondary">potentiel mental ?</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 font-light max-w-xl mx-auto">
            La performance commence par une décision. Discutons de vos objectifs et définissons votre stratégie.
          </p>
          <div className="flex justify-center">
             <MagnetButton 
               href="https://calendly.com/" 
               className="bg-brand text-white hover:bg-white hover:text-slate-800 border-none"
             >
               Prendre RDV maintenant
             </MagnetButton>
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
                <li><a href="#about" className="hover:text-brand hover:translate-x-1 transition-all inline-block">À propos</a></li>
                <li><a href="#services" className="hover:text-brand hover:translate-x-1 transition-all inline-block">Services & Offres</a></li>
                <li><a href="https://calendly.com/" target="_blank" className="hover:text-brand hover:translate-x-1 transition-all inline-block flex items-center gap-1">Prendre RDV <ArrowUpRight size={12}/></a></li>
              </ul>
           </div>

           {/* Column 3: Socials & Copyright */}
           <div>
               <h4 className="font-display font-semibold text-white text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand"></span> Réseaux
              </h4>
               <div className="flex gap-4 mb-8">
                 <a href="#" className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <Linkedin size={20} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <Instagram size={20} />
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