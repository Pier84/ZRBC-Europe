import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GovernanceIssue, GovernanceMeeting } from '../../types';
import {
  ClipboardList,
  Calendar,
  Video,
  AlertTriangle,
  Plus,
  ExternalLink,
  CheckCircle2,
  X,
  FileSpreadsheet,
} from 'lucide-react';

export const GovernanceAndMeetings: React.FC = () => {
  const { meetings, issues, addIssue, updateIssue } = useApp();

  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
  const [issueForm, setIssueForm] = useState({
    title: '',
    description: '',
    severity: 'Major' as any,
    countryId: 'FR',
    assignedTo: 'General Secretariat',
  });

  const handleCreateIssue = (e: React.FormEvent) => {
    e.preventDefault();
    addIssue({
      title: issueForm.title,
      description: issueForm.description,
      severity: issueForm.severity,
      status: 'Open',
      assignedTo: issueForm.assignedTo,
      countryId: issueForm.countryId,
      targetResolutionDate: '2026-10-15',
    });
    setIsIssueModalOpen(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 16 • Governance & Operational Support
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Meetings & Critical Issue Tracker</h1>
          <p className="text-xs text-slate-400">
            Scheduled governance meetings across 20 European nations and central issue escalation pipeline.
          </p>
        </div>

        <button
          onClick={() => setIsIssueModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
        >
          <Plus className="h-4 w-4" />
          <span>Log Governance Issue</span>
        </button>
      </div>

      {/* Governance Meetings Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-amber-400" />
          Scheduled European Governance Meetings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meetings.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3 shadow-xl hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                  {m.type}
                </span>
                <span className="text-xs font-mono text-slate-400">{m.frequency}</span>
              </div>

              <h3 className="text-base font-bold text-slate-100">{m.title}</h3>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div>
                  <strong className="text-slate-400">Date / Time:</strong> {m.date} ({m.time} CET)
                </div>
                <div>
                  <strong className="text-slate-400">Organized By:</strong> {m.organizer}
                </div>
                <div>
                  <strong className="text-slate-400">Agenda:</strong> {m.agenda}
                </div>
              </div>

              <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
                <a
                  href={m.zoomLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <Video className="h-4 w-4" />
                  <span>Join Zoom Governance Session</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                {m.minutesDocId && (
                  <span className="text-[10px] text-amber-300 font-mono">
                    Minutes: {m.minutesDocId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Issue Tracker Section */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-xl">
        <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            European Issue Tracker & Operational Escalations
          </h3>
          <span className="text-xs text-slate-400 font-mono">Target: 0 Critical Open Issues</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">Issue Code</th>
                <th className="p-3">Title & Summary</th>
                <th className="p-3">Country</th>
                <th className="p-3">Severity</th>
                <th className="p-3">Status</th>
                <th className="p-3">Assigned To</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {issues.map((i) => (
                <tr key={i.id} className="hover:bg-slate-800/50">
                  <td className="p-3 font-mono font-bold text-amber-400">{i.id}</td>
                  <td className="p-3">
                    <div className="font-bold text-slate-100">{i.title}</div>
                    <div className="text-[10px] text-slate-400">{i.description}</div>
                  </td>
                  <td className="p-3 font-mono text-slate-200">{i.countryId}</td>
                  <td className="p-3 font-bold">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        i.severity === 'Critical'
                          ? 'bg-rose-950 text-rose-300 border border-rose-800'
                          : i.severity === 'Major'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {i.severity}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                        i.status === 'Resolved'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                      }`}
                    >
                      {i.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-300">{i.assignedTo}</td>
                  <td className="p-3 text-right">
                    {i.status !== 'Resolved' && (
                      <button
                        onClick={() => updateIssue(i.id, { status: 'Resolved' })}
                        className="rounded bg-emerald-600 px-2.5 py-1 text-[10px] font-bold text-slate-950 hover:bg-emerald-500"
                      >
                        Mark Resolved
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log Issue Modal */}
      {isIssueModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100">Log Operational Governance Issue</h3>
              <button onClick={() => setIsIssueModalOpen(false)} className="text-slate-400 hover:text-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateIssue} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Issue Title *</label>
                <input
                  type="text"
                  required
                  value={issueForm.title}
                  onChange={(e) => setIssueForm({ ...issueForm, title: e.target.value })}
                  placeholder="e.g. French translation notes delay"
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={issueForm.description}
                  onChange={(e) => setIssueForm({ ...issueForm, description: e.target.value })}
                  placeholder="Provide technical or operational details..."
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Severity</label>
                  <select
                    value={issueForm.severity}
                    onChange={(e) => setIssueForm({ ...issueForm, severity: e.target.value as any })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Minor">Minor</option>
                    <option value="Major">Major</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Country Tag</label>
                  <select
                    value={issueForm.countryId}
                    onChange={(e) => setIssueForm({ ...issueForm, countryId: e.target.value })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="ALL">ALL (Europe Wide)</option>
                    <option value="FR">France (FR)</option>
                    <option value="IT">Italy (IT)</option>
                    <option value="DE">Germany (DE)</option>
                    <option value="ES">Spain (ES)</option>
                    <option value="UK">United Kingdom (UK)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsIssueModalOpen(false)}
                  className="rounded px-4 py-2 text-slate-300 bg-slate-800 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded px-4 py-2 font-bold text-slate-950 bg-amber-500 hover:bg-amber-400"
                >
                  Log & Escalate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
