import React from 'react';
import { useApp } from '../context/AppContext';
import { ROLES_LIST } from '../data/mockData';
import { UserRole } from '../types';
import { ShieldCheck, UserCheck, X, CheckCircle, Globe2, Building2 } from 'lucide-react';

export const RoleSwitcherModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { currentRole, setCurrentRole, roleScopeCountry, setRoleScopeCountry, countries } = useApp();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-amber-400" />
            <div>
              <h2 className="text-base font-bold text-slate-100">Role & Access Control Simulator</h2>
              <p className="text-xs text-slate-400">Switch user identities and European governance scopes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="bg-amber-950/40 border border-amber-800/50 rounded-lg p-3 text-xs text-amber-200/90 flex items-start gap-2">
            <Globe2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Centralized Governance Principle:</span> One European College in Italy. Access rights and views adapt instantly based on the selected role below.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ROLES_LIST.map((roleItem) => {
              const isActive = currentRole === roleItem.role;
              return (
                <div
                  key={roleItem.role}
                  onClick={() => {
                    setCurrentRole(roleItem.role as UserRole);
                  }}
                  className={`cursor-pointer rounded-lg border p-4 transition-all ${
                    isActive
                      ? 'border-amber-500 bg-amber-950/20 shadow-md ring-1 ring-amber-500/30'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded border ${roleItem.badgeColor}`}>
                      {roleItem.title}
                    </span>
                    {isActive && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                        <CheckCircle className="h-3 w-3" /> Active Role
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-semibold text-slate-200 mb-1 flex items-center gap-1">
                    <UserCheck className="h-3.5 w-3.5 text-slate-400" />
                    <span>{roleItem.defaultUser}</span>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">
                    {roleItem.capabilities}
                  </p>

                  <div className="text-[10px] text-slate-500 font-mono border-t border-slate-800/80 pt-2 flex items-center justify-between">
                    <span>Scope: {roleItem.scope}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Country Selector for Country Coordinator */}
          {currentRole === 'country_coordinator' && (
            <div className="mt-4 rounded-lg border border-cyan-800/60 bg-cyan-950/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 text-cyan-400" />
                <h4 className="text-xs font-bold text-cyan-200">Country Coordinator Isolation Context</h4>
              </div>
              <p className="text-xs text-slate-300 mb-3">
                Country Coordinators are strictly restricted to their designated nation&apos;s data under European RBAC rules:
              </p>
              <div className="flex items-center gap-3">
                <label className="text-xs text-slate-300 font-medium">Select Country Scope:</label>
                <select
                  value={roleScopeCountry || 'FR'}
                  onChange={(e) => setRoleScopeCountry(e.target.value)}
                  className="rounded border border-cyan-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.id}) - Coordinator: {c.coordinatorName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-3 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Selected: <strong className="text-amber-400">{ROLES_LIST.find((r) => r.role === currentRole)?.title}</strong>
          </span>
          <button
            onClick={onClose}
            className="rounded-lg bg-amber-600 px-4 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-500 transition-colors"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
