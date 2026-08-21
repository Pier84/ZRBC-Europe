import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LanguageSelector } from './LanguageSelector';
import { RoleSwitcherModal } from './RoleSwitcherModal';
import { ROLES_LIST } from '../data/mockData';
import { Shield, BookOpen, GraduationCap, Menu, X, LogIn, LayoutDashboard, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isPortalView: boolean;
  setIsPortalView: (inPortal: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  isPortalView,
  setIsPortalView,
}) => {
  const { t, currentRole } = useApp();
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentRoleMeta = ROLES_LIST.find((r) => r.role === currentRole) || ROLES_LIST[0];

  const publicNavItems = [
    { id: 'home', label: t('navHome') },
    { id: 'programme', label: t('navProgramme') },
    { id: 'admissions', label: t('navAdmissions') },
    { id: 'countries', label: t('navCountries') },
    { id: 'about', label: t('navAbout') },
    { id: 'contact', label: t('navContact') },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur shadow-lg">
        {/* Top European Governance Banner */}
        <div className="bg-gradient-to-r from-amber-950/90 via-slate-900 to-amber-950/90 border-b border-amber-900/40 px-4 py-1 text-[11px] text-slate-300">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-medium">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-amber-300 font-bold">{t('shortName')}</span>
              <span className="text-slate-400 hidden md:inline">|</span>
              <span className="hidden sm:inline text-slate-300">{t('hqText')}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Role Switcher Button */}
              <button
                onClick={() => setIsRoleModalOpen(true)}
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold border transition-colors ${currentRoleMeta.badgeColor}`}
                title="Click to switch simulated role & governance scope"
              >
                <Shield className="h-3 w-3" />
                <span>{currentRoleMeta.title}</span>
                <span className="text-[9px] opacity-75 font-mono">({currentRoleMeta.scope})</span>
              </button>

              {/* Language Selector */}
              <LanguageSelector compact />
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo & Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => {
                setIsPortalView(false);
                setCurrentView('home');
              }}
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-100 tracking-tight flex items-center gap-1.5">
                  ZRBC EUROPE
                  <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/80 px-1.5 py-0.2 rounded border border-amber-800">
                    2026
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium truncate max-w-[220px] sm:max-w-xs md:max-w-md">
                  Zion Raju International Pentecostal Bible College
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            {!isPortalView && (
              <nav className="hidden lg:flex items-center gap-1">
                {publicNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsPortalView(false);
                      setCurrentView(item.id);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      currentView === item.id
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            )}

            {/* View Switcher CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              {isPortalView ? (
                <button
                  onClick={() => setIsPortalView(false)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-200 hover:bg-slate-800 transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5 text-amber-400" />
                  {t('backToWebsite')}
                </button>
              ) : (
                <button
                  onClick={() => setIsPortalView(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500 bg-amber-600 px-3.5 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-500 transition-colors shadow-md shadow-amber-600/20"
                >
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  {t('portalDashboard')}
                </button>
              )}

              {!isPortalView && (
                <button
                  onClick={() => {
                    setIsPortalView(false);
                    setCurrentView('admissions');
                  }}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-slate-700 transition-colors"
                >
                  <LogIn className="h-3.5 w-3.5" />
                  {t('applyNow')}
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 py-3 space-y-2">
            {!isPortalView ? (
              <div className="grid grid-cols-2 gap-1.5">
                {publicNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsPortalView(false);
                      setCurrentView(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left px-3 py-2 text-xs font-semibold rounded-md ${
                      currentView === item.id
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-xs text-amber-300 font-semibold mb-2">
                Currently in Authenticated Secure Portal
              </div>
            )}

            <div className="border-t border-slate-800 pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsPortalView(!isPortalView);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-center rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-slate-950 flex items-center justify-center gap-2"
              >
                {isPortalView ? (
                  <>
                    <BookOpen className="h-4 w-4" /> Switch to Public Website
                  </>
                ) : (
                  <>
                    <LayoutDashboard className="h-4 w-4" /> Enter Secure Back-Office Portal
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsRoleModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
              >
                <Shield className="h-4 w-4 text-amber-400" />
                Change Identity Role ({currentRoleMeta.title})
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Role Switcher Modal */}
      <RoleSwitcherModal isOpen={isRoleModalOpen} onClose={() => setIsRoleModalOpen(false)} />
    </>
  );
};
