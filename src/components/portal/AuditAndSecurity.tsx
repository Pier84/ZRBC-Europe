import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Database,
  CheckCircle2,
  FileCode2,
  Clock,
  UserCheck,
} from 'lucide-react';

export const AuditAndSecurity: React.FC = () => {
  const { auditLogs } = useApp();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Sections 20 & 21 • Security & Compliance
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Audit Log & System Security Matrix</h1>
          <p className="text-xs text-slate-400">
            Immutable audit logging, MFA enforcement, GDPR compliance, and centralized database security.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-300">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>GDPR & ISO-27001 Standard Active</span>
        </div>
      </div>

      {/* Security Architecture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <Lock className="h-6 w-6 text-amber-400" />
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
              ENFORCED
            </span>
          </div>
          <h3 className="text-sm font-bold text-slate-100">Multi-Factor Authentication (MFA)</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            MFA is strictly mandatory for European Direction, General Secretariat, Academic Office, and Country Coordinators.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <Database className="h-6 w-6 text-amber-400" />
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
              CENTRAL HQ ITALY
            </span>
          </div>
          <h3 className="text-sm font-bold text-slate-100">Centralized European Database</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All 20 European nations execute locally but synchronize data to central encrypted cloud storage in Italy.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <ShieldCheck className="h-6 w-6 text-amber-400" />
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
              EU GDPR COMPLIANT
            </span>
          </div>
          <h3 className="text-sm font-bold text-slate-100">Data Isolation & Privacy</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Country Coordinators see only their own nation's data. Student privacy is protected across all 7 languages.
          </p>
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-xl">
        <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-400" />
            Central System Audit Log (Immutable Record)
          </h3>
          <span className="text-xs font-mono text-slate-400">Section 21 Standard</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">Timestamp (UTC)</th>
                <th className="p-3">User ID</th>
                <th className="p-3">Role & Scope</th>
                <th className="p-3">Action Executed</th>
                <th className="p-3">Resource Target</th>
                <th className="p-3">IP Address</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/50">
                  <td className="p-3 font-mono text-slate-400">{log.timestamp}</td>
                  <td className="p-3 font-mono font-bold text-amber-400">{log.userId}</td>
                  <td className="p-3 font-semibold text-slate-200">
                    {log.userRole} ({log.countryScope})
                  </td>
                  <td className="p-3 font-bold text-slate-100">{log.action}</td>
                  <td className="p-3 font-mono text-slate-300">{log.resource}</td>
                  <td className="p-3 font-mono text-slate-400">{log.ipAddress}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 uppercase">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
