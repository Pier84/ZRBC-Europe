import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Users,
  CreditCard,
  CalendarCheck,
  Languages,
  AlertTriangle,
  FileSpreadsheet,
  Lock,
} from 'lucide-react';

export const CountryManagement: React.FC = () => {
  const { countries, students, payments, issues, currentRole, roleScopeCountry } = useApp();

  const isCountryCoordinator = currentRole === 'country_coordinator';
  const defaultCountryId = isCountryCoordinator ? (roleScopeCountry || 'FR') : 'FR';

  const [selectedCountryId, setSelectedCountryId] = useState<string>(defaultCountryId);
  const [activeTab, setActiveTab] = useState<'students' | 'payments' | 'attendance' | 'translations' | 'issues' | 'reports'>('students');

  const selectedCountry = countries.find((c) => c.id === (isCountryCoordinator ? defaultCountryId : selectedCountryId)) || countries[0];

  const countryStudents = students.filter((s) => s.countryId === selectedCountry.id);
  const countryPayments = payments.filter((p) => p.countryId === selectedCountry.id);
  const countryIssues = issues.filter((i) => i.countryId === selectedCountry.id);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 9 • Local Execution & Governance
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Country Management Module</h1>
          <p className="text-xs text-slate-400">
            Local execution and student monitoring while maintaining centralized data in Italy.
          </p>
        </div>

        {/* Country Selector for Directors/Secretariat */}
        {!isCountryCoordinator ? (
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2 rounded-xl">
            <Building2 className="h-4 w-4 text-amber-400" />
            <select
              value={selectedCountryId}
              onChange={(e) => setSelectedCountryId(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 font-bold focus:outline-none"
            >
              {countries.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.id}) — {c.coordinatorName}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 bg-cyan-950 border border-cyan-800 px-3 py-1.5 rounded-xl text-xs font-bold text-cyan-200">
            <Lock className="h-4 w-4 text-cyan-400" />
            <span>Scope Locked: {selectedCountry.name} ({selectedCountry.id})</span>
          </div>
        )}
      </div>

      {/* Country Summary Header Box (Exact format from Section 9 Mockup) */}
      <div className="rounded-2xl border border-amber-800/60 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-black text-amber-400 text-lg">
              {selectedCountry.id}
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-100 uppercase tracking-tight">
                COUNTRY: {selectedCountry.name}
              </h2>
              <div className="text-xs text-slate-400">
                Coordinator: <strong className="text-slate-200">{selectedCountry.coordinatorName}</strong> ({selectedCountry.coordinatorEmail})
              </div>
            </div>
          </div>

          <div className="text-right text-xs">
            <span className="text-slate-400">Local Centre:</span>
            <div className="font-bold text-amber-300">{selectedCountry.localCentre}</div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Applications</span>
            <div className="text-lg font-black text-slate-100">{selectedCountry.studentsCount + 3}</div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Confirmed</span>
            <div className="text-lg font-black text-slate-100">{selectedCountry.confirmedCount}</div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Paid</span>
            <div className="text-lg font-black text-slate-100">{selectedCountry.paidCount}</div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Payment Rate</span>
            <div className="text-lg font-black text-amber-400">{selectedCountry.paymentRate}%</div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Attendance</span>
            <div className="text-lg font-black text-emerald-400">{selectedCountry.attendanceRate}%</div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Open Issues</span>
            <div className="text-lg font-black text-rose-400">{selectedCountry.openIssues}</div>
          </div>
        </div>

        {/* Section 9 Action Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-3">
          {(['students', 'payments', 'attendance', 'translations', 'issues', 'reports'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                activeTab === tab
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              [{tab}]
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
        {activeTab === 'students' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-400" />
              Local Students List for {selectedCountry.name}
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Student ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Payment</th>
                    <th className="p-3">Attendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {countryStudents.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-4 text-center text-slate-400">
                        No students enrolled in this country.
                      </td>
                    </tr>
                  ) : (
                    countryStudents.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-800/50">
                        <td className="p-3 font-mono font-bold text-amber-400">{s.id}</td>
                        <td className="p-3 font-semibold text-slate-100">{s.firstName} {s.lastName}</td>
                        <td className="p-3 text-slate-300">{s.email}</td>
                        <td className="p-3">
                          <span className="font-bold text-emerald-400 uppercase">{s.paymentStatus}</span>
                        </td>
                        <td className="p-3 font-mono text-blue-400 font-bold">{s.attendancePercentage}%</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-amber-400" />
              Country Payment Records
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Pay Ref</th>
                    <th className="p-3">Student</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Method</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {countryPayments.map((p) => (
                    <tr key={p.id}>
                      <td className="p-3 font-mono font-bold text-amber-400">{p.reference}</td>
                      <td className="p-3 font-semibold text-slate-100">{p.studentName} ({p.studentId})</td>
                      <td className="p-3 font-bold text-slate-200">{p.currency} {p.amount}</td>
                      <td className="p-3 text-slate-400">{p.method}</td>
                      <td className="p-3 text-emerald-400 font-bold uppercase">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <CalendarCheck className="h-5 w-5 text-amber-400" />
              Country Attendance Overview
            </h3>
            <p className="text-xs text-slate-300">
              Average local country attendance rate: <strong className="text-emerald-400 font-mono text-sm">{selectedCountry.attendanceRate}%</strong> (Target ≥ 75%).
            </p>
          </div>
        )}

        {activeTab === 'translations' && (
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Languages className="h-5 w-5 text-amber-400" />
              Teaching Material Readiness for {selectedCountry.name}
            </h3>
            <p className="text-xs text-slate-300">
              Translation readiness status: <strong className="text-amber-400 font-mono text-sm">{selectedCountry.translationReadiness}%</strong>. All teaching notes verified.
            </p>
          </div>
        )}

        {activeTab === 'issues' && (
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              Local Issues & Escalations
            </h3>
            {countryIssues.length === 0 ? (
              <p className="text-xs text-slate-400">No open issues reported for {selectedCountry.name}.</p>
            ) : (
              <div className="space-y-2">
                {countryIssues.map((i) => (
                  <div key={i.id} className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-100">
                      <span>{i.title}</span>
                      <span className="text-rose-400">{i.severity}</span>
                    </div>
                    <p className="text-slate-400">{i.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5 text-amber-400" />
              Country Management Reports
            </h3>
            <p className="text-xs text-slate-300">
              Downloadable audit report for {selectedCountry.name} Coordinator meeting.
            </p>
            <button className="rounded bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400">
              Export {selectedCountry.id} Country Summary (PDF)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
