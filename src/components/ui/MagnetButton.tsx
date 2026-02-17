import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagnetButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline';
}

const MagnetButton: React.FC<MagnetButtonProps> = ({ children, className = "", onClick, href, variant = 'primary' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.1, y: y * 0.1 }); 
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden group";
  
  const variantStyles = variant === 'primary' 
    ? "bg-brand text-white hover:bg-brand-dark border border-transparent" 
    : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-brand";

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
};

export default MagnetButton;