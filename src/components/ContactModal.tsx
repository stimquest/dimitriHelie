import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';

// ──────────────────────────────────────────────────────────────────────────────
// Remplacez cette valeur par votre clé API Web3Forms.
// Inscription gratuite sur https://web3forms.com  (250 envois/mois offerts)
// ──────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = '735af0b8-fb99-4206-b768-45e92a32b0e2';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Réinitialiser le formulaire après la fermeture
      const t = setTimeout(() => {
        setForm({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
        setErrorMsg('');
      }, 300);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...form }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.message ?? 'Une erreur est survenue.');
      }
    } catch {
      setStatus('error');
      setErrorMsg("Impossible d'envoyer le message. Vérifiez votre connexion.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-700">
          <h3 className="font-display text-xl font-bold text-white">Nous écrire</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
              <CheckCircle size={48} className="text-green-400" />
              <div>
                <p className="text-white font-semibold text-lg">Message envoyé !</p>
                <p className="text-slate-400 text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 bg-brand text-white font-bold px-6 py-2.5 rounded-xl hover:bg-brand-dark transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Nom *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder:text-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder:text-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Objet du message"
                  className="w-full bg-slate-700 border border-slate-600 text-white placeholder:text-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande..."
                  className="w-full bg-slate-700 border border-slate-600 text-white placeholder:text-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-brand text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-brand-dark hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
