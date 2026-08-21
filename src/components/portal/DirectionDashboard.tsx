import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  CreditCard,
  CalendarCheck,
  Languages,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Building2,
  TrendingUp,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

export const DirectionDashboard: React.FC<{ setActiveTab?: (tab: string) => void }> = ({ setActiveTab }) => {
  const { kpis, countries, issues, students } = useApp();

  const countryChartData = countries
    .slice(0, 8)
    .map((c) => ({ name: c.id, students: c.studentsCount, fullName: c.name }));

  const criticalIssuesCount = issues.filter((i) => i.severity === 'Critical' && i.status !== 'Resolved').length;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 7 • European Governance
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">European Direction Dashboard</h1>
          <p className="text-xs text-slate-400">Single Source of Truth across 20 European nations (HQ: Italy)</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-mono text-emerald-400 font-bold">2026 Operational Status: Active</span>
        </div>
      </div>

      {/* Primary KPI Grid Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Confirmed Students</span>
            <Users className="h-4 w-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-slate-100">{kpis.confirmedStudents}</div>
          <div className="text-[10px] text-slate-400">Across 20 European nations</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Payment Rate</span>
            <CreditCard className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-400">{kpis.paymentRate}%</div>
          <div className="text-[10px] text-slate-400">Target &gt; 95% before course start</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Attendance Rate</span>
            <CalendarCheck className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-2xl font-black text-blue-400">{kpis.attendanceRate}%</div>
          <div className="text-[10px] text-slate-400">Target ≥ 75% across cohort</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Critical Issues</span>
            <AlertTriangle className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-slate-100">{criticalIssuesCount}</div>
          <div className="text-[10px] text-emerald-400 font-semibold">Target 0 before launch</div>
        </div>
      </div>

      {/* Main KPI Targets Table vs Current Status */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
        <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-amber-400" />
          Management KPIs & Governance Targets
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">Governance KPI</th>
                <th className="p-3">Target / Requirement</th>
                <th className="p-3">Current European Value</th>
                <th className="p-3">Status Compliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              <tr>
                <td className="p-3 font-semibold text-slate-100">Applications Received</td>
                <td className="p-3 text-slate-400">By country tracking</td>
                <td className="p-3 font-mono text-slate-200">{kpis.totalApplications} Applications</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    On Track
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-100">Confirmed Enrolled Students</td>
                <td className="p-3 text-slate-400">By country tracking</td>
                <td className="p-3 font-mono text-slate-200">{kpis.confirmedStudents} Enrolled</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    On Track
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-100">Tuition Payment Rate</td>
                <td className="p-3 text-slate-400">&gt; 95% before course start</td>
                <td className="p-3 font-mono font-bold text-emerald-400">{kpis.paymentRate}%</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Target Met (96%)
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-100">Teaching Material Readiness</td>
                <td className="p-3 text-slate-400">100% readiness</td>
                <td className="p-3 font-mono text-slate-200">{kpis.teachingMaterialReadiness}%</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    100% Ready
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-100">Translation Readiness</td>
                <td className="p-3 text-slate-400">100% before relevant lesson</td>
                <td className="p-3 font-mono text-amber-300">{kpis.translationReadiness}%</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
                    In Progress (94%)
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-100">Platform Accounts Created</td>
                <td className="p-3 text-slate-400">100% created</td>
                <td className="p-3 font-mono text-slate-200">{kpis.platformAccountsCreated}%</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    100% Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-100">Attendance Rate</td>
                <td className="p-3 text-slate-400">≥ 75% minimum</td>
                <td className="p-3 font-mono text-blue-400">{kpis.attendanceRate}%</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Compliant (82%)
                  </span>
                </td>
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-100">Open Critical Issues</td>
                <td className="p-3 text-slate-400">0 before launch</td>
                <td className="p-3 font-mono text-emerald-400">0 Open Issues</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Clear (0)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart & Country Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-amber-400" />
            Students by Country Distribution
          </h3>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countryChartData}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', fontSize: '12px' }}
                />
                <Bar dataKey="students" radius={[4, 4, 0, 0]}>
                  {countryChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#f59e0b' : '#38bdf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Alerts */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              Direction Alerts
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="rounded-lg border border-amber-900/60 bg-amber-950/30 p-3 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400">Translation Review</span>
                <p className="text-slate-300">Biblical Hermeneutics notes pending French review.</p>
              </div>

              <div className="rounded-lg border border-cyan-900/60 bg-cyan-950/30 p-3 space-y-1">
                <span className="text-[10px] uppercase font-bold text-cyan-400">Attendance Warning</span>
                <p className="text-slate-300">1 student in France below 75% attendance threshold (72%).</p>
              </div>

              <div className="rounded-lg border border-emerald-900/60 bg-emerald-950/30 p-3 space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400">Finance Status</span>
                <p className="text-slate-300">European tuition reconciliation rate at 96%.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Governance HQ: Italy</span>
            <span className="font-mono text-amber-400">20 Nations Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
