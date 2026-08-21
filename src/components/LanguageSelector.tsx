import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { LANGUAGES } from '../data/translations';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, setLanguage } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-colors ${
          compact ? 'px-2 py-1' : ''
        }`}
        aria-expanded={isOpen}
      >
        <Globe className="h-3.5 w-3.5 text-amber-400" />
        <span className="font-semibold text-amber-300 uppercase">{currentLangObj.code}</span>
        {!compact && <span className="hidden sm:inline text-slate-300">{currentLangObj.nativeLabel}</span>}
        <ChevronDown className="h-3 w-3 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1 w-48 rounded-md bg-slate-900 border border-slate-700 shadow-xl py-1 focus:outline-none">
          <div className="px-3 py-1.5 border-b border-slate-800 text-[10px] uppercase font-bold tracking-wider text-slate-400">
            Select Language / Langue
          </div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-amber-900/30 transition-colors ${
                language === lang.code ? 'bg-amber-950/60 font-semibold text-amber-300' : 'text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span>{lang.nativeLabel}</span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase font-mono">{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
