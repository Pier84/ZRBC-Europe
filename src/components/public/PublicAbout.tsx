import React from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, ShieldCheck, FileText, Globe2, BookOpen, Cpu, Users } from 'lucide-react';

export const PublicAbout: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-800 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
          Institutional & Governance Context
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100">
          About ZRBC Europe
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Zion Raju International Pentecostal Bible College - Europe operates as a centralized digital platform combining an institutional website, administrative back-office, and learning portal.
        </p>
      </div>

      {/* Guiding Principle Card */}
      <div className="rounded-2xl border border-amber-800/60 bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-950 p-8 shadow-2xl space-y-4">
        <div className="flex items-center gap-3">
          <Building2 className="h-8 w-8 text-amber-400" />
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">CORE GUIDING PRINCIPLE</span>
            <h2 className="text-xl font-bold text-slate-100">Centralized Governance & Local Coordination</h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          &ldquo;Countries coordinate locally; governance and data remain centralized in Italy.&rdquo;
        </p>
        <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
          European Headquarters: Italy | Operational Scope: 20 European Countries & Communities
        </div>
      </div>

      {/* Four Central Departments */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-slate-100">Four Central European Departments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-3 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">{t('secDept')}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Single administrative point of reference for all Europe. Manages student registrations, central student database, payment status tracking, attendance registers, certificates, and official communications.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-3 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">{t('acadDept')}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Maintains European academic standards, course syllabi, faculty assignments, master timetable, examination rules, academic validation, and graduation requirements.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-3 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Globe2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">{t('transDept')}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Controls the English master academic content and manages translation assignments across French, Italian, Spanish, Russian, German, and Portuguese with version control and approval workflow.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-3 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">{t('techDept')}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Manages platform infrastructure, Zoom live class integration, user accounts & RBAC, LMS digital portal access, audit logging, system security, and backups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
