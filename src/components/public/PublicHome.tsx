import React from 'react';
import { useApp } from '../../context/AppContext';
import { GraduationCap, ArrowRight, ShieldCheck, Globe2, BookOpen, Clock, Users, Building2, Calendar, CheckCircle2 } from 'lucide-react';

interface PublicHomeProps {
  setCurrentView: (view: string) => void;
  setIsPortalView: (portal: boolean) => void;
}

export const PublicHome: React.FC<PublicHomeProps> = ({ setCurrentView, setIsPortalView }) => {
  const { t, countries } = useApp();

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-12 pb-20 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.12),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* European Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/40 px-4 py-1.5 text-xs font-bold text-amber-300 shadow-lg">
              <Globe2 className="h-4 w-4 text-amber-400" />
              <span>CENTRAL INFORMATION SYSTEM & INSTITUTIONAL PLATFORM</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-100 tracking-tight leading-tight">
              {t('institutionName')}
            </h1>

            {/* Slogan */}
            <p className="text-lg sm:text-2xl font-bold text-amber-400/90 tracking-wide">
              {t('slogan')}
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Serving 20 European countries from European Headquarters in Italy. A unified academic programme with local satellite coordination and certified digital access.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentView('admissions')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-extrabold text-slate-950 hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25"
              >
                <span>APPLY NOW FOR 2026</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setIsPortalView(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-bold text-slate-100 hover:bg-slate-800 transition-all"
              >
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>STUDENT / PORTAL LOGIN</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* European Operating Model Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
            <Calendar className="h-8 w-8 text-amber-400 mb-3" />
            <h3 className="text-sm font-bold text-slate-100 mb-1">Academic Period</h3>
            <p className="text-xs text-slate-400">14 September 2026 – 15 December 2026</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
            <Clock className="h-8 w-8 text-amber-400 mb-3" />
            <h3 className="text-sm font-bold text-slate-100 mb-1">Workload Structure</h3>
            <p className="text-xs text-slate-400">130 Guided Hours + 60 Autonomous Study Hours</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
            <Building2 className="h-8 w-8 text-amber-400 mb-3" />
            <h3 className="text-sm font-bold text-slate-100 mb-1">Central Headquarters</h3>
            <p className="text-xs text-slate-400">Italy (Governance & Data Centralized)</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
            <Globe2 className="h-8 w-8 text-amber-400 mb-3" />
            <h3 className="text-sm font-bold text-slate-100 mb-1">European Scope</h3>
            <p className="text-xs text-slate-400">20 Participating Countries & Communities</p>
          </div>
        </div>
      </section>

      {/* Hybrid Learning & Study Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-900/40 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 p-8 sm:p-10 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              European Study Model
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Combining live central European lectures with local satellite classes and authorized remote digital access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-slate-100">Central European Teaching</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live interactive broadcasts delivered in English by European master professors, with simultaneous localized translation.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-slate-100">Satellite Classes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Local country centers across 20 European nations bring students together for class fellowship, group discussions, and local support.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-slate-100">Authorized Digital Access</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Secure portal access to class timetable, course materials in 7 languages, Zoom live links, attendance tracking, and exam results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-100">{t('weeklyScheduleTitle')}</h2>
              <p className="text-xs text-slate-400">10 hours of guided weekly instruction</p>
            </div>
            <button
              onClick={() => setCurrentView('programme')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
            >
              <span>View Full Academic Syllabus</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
              <span className="inline-block rounded bg-amber-950/80 border border-amber-800 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                MONDAY • 3 Hours
              </span>
              <h4 className="text-sm font-bold text-slate-100">{t('monClasses')}</h4>
              <p className="text-xs text-slate-400">18:30 – 21:30 CET • Live Zoom Stream + Satellite Hubs</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
              <span className="inline-block rounded bg-amber-950/80 border border-amber-800 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                THURSDAY • 3 Hours
              </span>
              <h4 className="text-sm font-bold text-slate-100">{t('thuClasses')}</h4>
              <p className="text-xs text-slate-400">18:30 – 21:30 CET • Live Exegetical Studies</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
              <span className="inline-block rounded bg-amber-950/80 border border-amber-800 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                SATURDAY • 4 Hours
              </span>
              <h4 className="text-sm font-bold text-slate-100">{t('satClasses')}</h4>
              <p className="text-xs text-slate-400">09:00 – 13:00 CET • Leadership & Ministry Practicum</p>
            </div>
          </div>
        </div>
      </section>

      {/* 20 Countries Quick Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          Participating European Scope (20 Nations)
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {countries.map((c) => (
            <span
              key={c.id}
              onClick={() => setCurrentView('countries')}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:border-amber-500/50 hover:text-amber-300 transition-colors"
            >
              <span>{c.name}</span>
              <span className="text-[10px] text-slate-500 font-mono">({c.studentsCount} students)</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
