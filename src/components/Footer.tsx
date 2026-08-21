import React from 'react';
import { useApp } from '../context/AppContext';
import { GraduationCap, ShieldCheck, Globe, Building2, Lock } from 'lucide-react';

export const Footer: React.FC<{ setCurrentView: (v: string) => void }> = ({ setCurrentView }) => {
  const { t } = useApp();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Institutional Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-md bg-amber-500 flex items-center justify-center text-slate-950 font-black">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-slate-100 text-sm tracking-tight">
                ZRBC EUROPE
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Zion Raju International Pentecostal Bible College - Europe. Centralized digital platform combining public institution, administrative back-office, and LMS.
            </p>
            <div className="rounded-lg border border-amber-900/50 bg-amber-950/20 p-2.5 text-[11px] text-amber-300 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-slate-200">European Headquarters:</strong>
                Italy | Central Governance & Single Source of Truth
              </div>
            </div>
          </div>

          {/* Central Departments */}
          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              {t('departmentsTitle')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span>{t('secDept')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span>{t('acadDept')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span>{t('transDept')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span>{t('techDept')}</span>
              </li>
            </ul>
          </div>

          {/* Scope & Academic Period */}
          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              European Operating Scope
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>20 European Countries & Communities</li>
              <li>{t('academicPeriod')}</li>
              <li>{t('workload')}</li>
              <li>Weekly Schedule: Mon (3h), Thu (3h), Sat (4h)</li>
            </ul>
          </div>

          {/* Security & GDPR */}
          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              Security & Data Governance
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">
              Role-Based Access Control (RBAC), country-level data isolation, auditable status histories, and mandatory MFA for privileged administrative roles.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 p-2 rounded">
              <Lock className="h-3.5 w-3.5 shrink-0" />
              <span>EU GDPR Data Compliance (EU Storage)</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 {t('institutionName')}. {t('footerRights')}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setCurrentView('about')} className="hover:text-amber-300">
              About Governance
            </button>
            <span>•</span>
            <button onClick={() => setCurrentView('admissions')} className="hover:text-amber-300">
              Student Admissions
            </button>
            <span>•</span>
            <button onClick={() => setCurrentView('contact')} className="hover:text-amber-300">
              Contact Secretariat
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
