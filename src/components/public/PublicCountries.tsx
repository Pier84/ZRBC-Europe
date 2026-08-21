import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe2, Building2, UserCheck, Search, Users, ShieldCheck } from 'lucide-react';

export const PublicCountries: React.FC<{ setCurrentView: (v: string) => void }> = ({ setCurrentView }) => {
  const { countries } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.coordinatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.localCentre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
          European Network & Local Execution
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100">
          Participating Countries & Satellite Communities
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Operational scope of 20 European nations. Each country has a designated Coordinator responsible for local student execution while governance and records remain centralized in Italy.
        </p>
      </div>

      {/* Search & Stats Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search country, coordinator, centre..."
            className="w-full rounded-lg border border-slate-800 bg-slate-900 pl-9 pr-4 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
          <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            <Globe2 className="h-4 w-4 text-amber-400" />
            20 European Nations
          </span>
          <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            <Users className="h-4 w-4 text-amber-400" />
            124 Enrolled Students
          </span>
        </div>
      </div>

      {/* Country Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((country) => (
          <div
            key={country.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                  <h3 className="text-lg font-extrabold text-slate-100">{country.name}</h3>
                </div>
                <span className="rounded bg-slate-800 px-2.5 py-0.5 text-xs font-mono font-bold text-amber-400">
                  {country.id}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1">
                    <UserCheck className="h-3.5 w-3.5 text-amber-400" />
                    Coordinator:
                  </span>
                  <span className="font-semibold text-slate-100">{country.coordinatorName}</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5 text-amber-400" />
                    Local Hub:
                  </span>
                  <span className="font-semibold text-slate-200">{country.localCentre}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <div className="text-slate-400 text-[10px]">Students</div>
                <div className="font-bold text-slate-100 text-sm">{country.studentsCount}</div>
              </div>

              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <div className="text-slate-400 text-[10px]">Payment %</div>
                <div className="font-bold text-amber-400 text-sm">{country.paymentRate}%</div>
              </div>

              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <div className="text-slate-400 text-[10px]">Attendance %</div>
                <div className="font-bold text-emerald-400 text-sm">{country.attendanceRate}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
