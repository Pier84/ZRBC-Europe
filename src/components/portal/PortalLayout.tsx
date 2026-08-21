import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ROLES_LIST } from '../../data/mockData';
import {
  LayoutDashboard,
  Users,
  Building2,
  BookOpen,
  CalendarCheck,
  Languages,
  FolderKanban,
  Award,
  CreditCard,
  ClipboardList,
  ShieldAlert,
  ChevronRight,
  Shield,
  UserCheck,
} from 'lucide-react';

interface PortalLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const PortalLayout: React.FC<PortalLayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const { currentRole, roleScopeCountry, countries } = useApp();

  const currentRoleMeta = ROLES_LIST.find((r) => r.role === currentRole) || ROLES_LIST[0];

  const scopeCountryName = countries.find((c) => c.id === roleScopeCountry)?.name || roleScopeCountry || 'France';

  // Navigation Items with RBAC visibility rules
  const navItems = [
    {
      id: 'dashboard',
      label: 'European Dashboard',
      icon: LayoutDashboard,
      allowedRoles: ['european_director', 'deputy_director', 'general_secretariat', 'academic_office', 'translation_office', 'technical_office'],
    },
    {
      id: 'students',
      label: 'Student Register',
      icon: Users,
      allowedRoles: ['european_director', 'deputy_director', 'general_secretariat', 'academic_office', 'country_coordinator', 'technical_office'],
    },
    {
      id: 'country',
      label: 'Country Management',
      icon: Building2,
      allowedRoles: ['european_director', 'deputy_director', 'general_secretariat', 'country_coordinator'],
    },
    {
      id: 'lms',
      label: 'Learning Portal / LMS',
      icon: BookOpen,
      allowedRoles: ['student', 'teacher', 'academic_office', 'general_secretariat', 'european_director', 'deputy_director'],
    },
    {
      id: 'attendance',
      label: 'Attendance Register',
      icon: CalendarCheck,
      allowedRoles: ['teacher', 'general_secretariat', 'academic_office', 'country_coordinator', 'european_director'],
    },
    {
      id: 'translation',
      label: 'Translation Workflow',
      icon: Languages,
      allowedRoles: ['translation_office', 'translator', 'academic_office', 'european_director', 'general_secretariat'],
    },
    {
      id: 'documents',
      label: 'Document Repository',
      icon: FolderKanban,
      allowedRoles: ['european_director', 'deputy_director', 'general_secretariat', 'academic_office', 'translation_office', 'technical_office', 'country_coordinator', 'teacher', 'student'],
    },
    {
      id: 'exams',
      label: 'Exams & Certificates',
      icon: Award,
      allowedRoles: ['academic_office', 'general_secretariat', 'european_director', 'teacher', 'student'],
    },
    {
      id: 'finance',
      label: 'Finance & Payments',
      icon: CreditCard,
      allowedRoles: ['general_secretariat', 'european_director', 'deputy_director', 'country_coordinator'],
    },
    {
      id: 'governance',
      label: 'Meetings & Issues',
      icon: ClipboardList,
      allowedRoles: ['european_director', 'deputy_director', 'general_secretariat', 'academic_office', 'translation_office', 'technical_office', 'country_coordinator'],
    },
    {
      id: 'audit',
      label: 'Audit & Security',
      icon: ShieldAlert,
      allowedRoles: ['technical_office', 'european_director', 'general_secretariat'],
    },
  ];

  // Filter tabs allowed for current role
  const visibleNavItems = navItems.filter((item) =>
    item.allowedRoles.includes(currentRole)
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r border-slate-800 bg-slate-900/90 shrink-0 flex flex-col">
        {/* Active Role Context Card */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/60">
          <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-1 flex items-center justify-between">
            <span>Secure Portal Access</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900 p-2.5 space-y-1">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${currentRoleMeta.badgeColor}`}>
                {currentRoleMeta.title}
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-200 flex items-center gap-1 mt-1">
              <UserCheck className="h-3.5 w-3.5 text-slate-400" />
              <span className="truncate">{currentRoleMeta.defaultUser}</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-800/80">
              Scope: {currentRole === 'country_coordinator' ? `Country (${scopeCountryName})` : currentRoleMeta.scope}
            </div>
          </div>
        </div>

        {/* Portal Nav Links */}
        <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
          {visibleNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <ChevronRight className="h-3.5 w-3.5 text-amber-400" />}
              </button>
            );
          })}
        </nav>

        {/* Bottom Security Info */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/80 text-[10px] text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Shield className="h-3 w-3" />
            <span>MFA & Audit Active</span>
          </div>
          <div>Headquarters: Italy (HQ)</div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl">
        {children}
      </main>
    </div>
  );
};
