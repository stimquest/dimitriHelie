import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

const CalendarModal: React.FC<Props> = ({ isOpen, onClose, url, title = 'Prendre rendez-vous' }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col"
           style={{ height: 'min(92vh, 760px)' }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
          <h3 className="font-display text-xl font-bold text-gray-800">{title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 border border-gray-300 hover:border-gray-500 rounded-lg px-3 py-1.5 transition-all duration-200"
            >
              Ouvrir <ExternalLink size={12} />
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* iframe */}
        <div className="flex-1 overflow-hidden rounded-b-2xl">
          <iframe
            src={url}
            className="w-full h-full border-0"
            title={title}
            allow="camera; microphone"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
