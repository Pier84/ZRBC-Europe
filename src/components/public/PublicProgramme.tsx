import React from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, Clock, Calendar, CheckCircle2, Award, UserCheck, ShieldAlert, ArrowRight } from 'lucide-react';

export const PublicProgramme: React.FC<{ setCurrentView: (v: string) => void }> = ({ setCurrentView }) => {
  const { t, courses } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-800 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
          European Master Academic Programme 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100">
          Curriculum & Academic Model
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          One standardized theological curriculum delivered synchronously across 20 European countries under the oversight of the Academic Office in Italy.
        </p>
      </div>

      {/* Program Facts Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex items-start gap-4">
          <Calendar className="h-8 w-8 text-amber-400 shrink-0 mt-1" />
          <div>
            <h3 className="text-sm font-bold text-slate-100 mb-1">Academic Term</h3>
            <p className="text-xs text-slate-300">14 September 2026 to 15 December 2026</p>
            <p className="text-[11px] text-slate-400 mt-1">12 Intensive Study Weeks</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex items-start gap-4">
          <Clock className="h-8 w-8 text-amber-400 shrink-0 mt-1" />
          <div>
            <h3 className="text-sm font-bold text-slate-100 mb-1">Credit & Hours Breakdown</h3>
            <p className="text-xs text-slate-300">130 Guided Hours + 60 Autonomous Hours</p>
            <p className="text-[11px] text-slate-400 mt-1">Total Academic Load: 190 Hours</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex items-start gap-4">
          <Award className="h-8 w-8 text-amber-400 shrink-0 mt-1" />
          <div>
            <h3 className="text-sm font-bold text-slate-100 mb-1">Graduation Requirement</h3>
            <p className="text-xs text-slate-300">Attendance ≥ 75% + Exam Pass in All 3 Modules</p>
            <p className="text-[11px] text-slate-400 mt-1">Verifiable European Diploma Issued</p>
          </div>
        </div>
      </div>

      {/* Courses Detailed List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-slate-100">Core Academic Modules</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-amber-950 px-2.5 py-1 text-xs font-mono font-bold text-amber-400 border border-amber-800">
                    {course.code}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{course.hours} Hours</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100">{course.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{course.description}</p>
              </div>

              <div className="border-t border-slate-800/80 pt-4 space-y-2 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-300">Faculty Lead:</span>
                  <span className="text-amber-300">{course.teacherName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-300">Schedule:</span>
                  <span className="text-slate-200">{course.scheduleDay} ({course.scheduleTime})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Standards & Attendance Regulations */}
      <div className="rounded-2xl border border-amber-900/50 bg-amber-950/20 p-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <ShieldAlert className="h-6 w-6 text-amber-400" />
          Academic Standards & European Rules
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
          <div className="space-y-3">
            <h4 className="font-bold text-slate-100 text-sm">Attendance Target (≥ 75%)</h4>
            <p className="leading-relaxed">
              Every student attendance record is centrally logged by course session. Students falling below 75% receive automated warnings through their Country Coordinator.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-100 text-sm">Controlled Academic Translations</h4>
            <p className="leading-relaxed">
              Master academic teaching materials are authored in English and translated following the official ZRBC Europe Translation & Content Office approval workflow before publication.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-amber-900/40 flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs text-amber-200">Ready to enroll for the 2026 European Cohort?</span>
          <button
            onClick={() => setCurrentView('admissions')}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors"
          >
            <span>Complete Application Form</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
