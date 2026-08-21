import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  Save,
  Building2,
  UserCheck,
} from 'lucide-react';

export const AttendanceModule: React.FC = () => {
  const { students, courses, saveAttendance, recordAuditLog, currentRole, roleScopeCountry } = useApp();

  const [selectedCourseId, setSelectedCourseId] = useState<string>('THEO-101');
  const [selectedSessionDate, setSelectedSessionDate] = useState<string>('2026-09-21');

  const isCountryCoordinator = currentRole === 'country_coordinator';

  // Filter students by country scope if coordinator
  const visibleStudents = students.filter((s) =>
    isCountryCoordinator ? s.countryId === roleScopeCountry : true
  );

  const [attendanceMap, setAttendanceMap] = useState<Record<string, 'present' | 'absent' | 'excused'>>(() => {
    const initial: Record<string, 'present' | 'absent' | 'excused'> = {};
    students.forEach((s) => {
      initial[s.id] = s.attendancePercentage < 75 ? 'absent' : 'present';
    });
    return initial;
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleToggle = (studentId: string, status: 'present' | 'absent' | 'excused') => {
    setAttendanceMap((prev) => ({ ...prev, [studentId]: status }));
    setIsSaved(false);
  };

  const handleSave = () => {
    const records = Object.entries(attendanceMap).map(([studentId, status]) => ({
      studentId,
      status,
    }));

    saveAttendance(`SES-${selectedCourseId}-${selectedSessionDate}`, records);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const currentCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 11 • Attendance Register
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Central Digital Attendance Register</h1>
          <p className="text-xs text-slate-400">
            Linked to student, course, session date, and recorded-by user. Dashboard target: ≥ 75%.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
        >
          <Save className="h-4 w-4" />
          <span>Save Attendance</span>
        </button>
      </div>

      {isSaved && (
        <div className="p-3 bg-emerald-950 border border-emerald-700 rounded-xl text-xs font-bold text-emerald-300 flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="h-4 w-4" />
          <span>Attendance records successfully saved and audited in the European database!</span>
        </div>
      )}

      {/* Session Selection Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Select Academic Course</label>
          <select
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:outline-none"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.code}: {c.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Session Date</label>
          <input
            type="date"
            value={selectedSessionDate}
            onChange={(e) => setSelectedSessionDate(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
          <Clock className="h-8 w-8 text-amber-400 shrink-0" />
          <div className="text-xs">
            <span className="text-slate-400 block">Class Schedule:</span>
            <strong className="text-slate-100">{currentCourse.scheduleDay} ({currentCourse.scheduleTime})</strong>
          </div>
        </div>
      </div>

      {/* Student Checklist Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-xl">
        <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <CalendarCheck className="h-4 w-4 text-amber-400" />
            ATTENDANCE - {currentCourse.title} - {selectedSessionDate}
          </h3>
          <span className="text-xs font-mono text-slate-400">
            Scope: {isCountryCoordinator ? `Country (${roleScopeCountry})` : 'All Europe'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">Student ID</th>
                <th className="p-3">Student Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Cumulative Attendance %</th>
                <th className="p-3 text-right">Attendance Status Toggle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {visibleStudents.map((s) => {
                const currentStatus = attendanceMap[s.id] || 'present';
                const isBelowThreshold = s.attendancePercentage < 75;

                return (
                  <tr key={s.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-3 font-mono font-bold text-amber-400">{s.id}</td>
                    <td className="p-3 font-semibold text-slate-100">{s.firstName} {s.lastName}</td>
                    <td className="p-3 font-mono text-slate-300">{s.countryId} ({s.localCentre})</td>
                    <td className="p-3 font-mono font-bold">
                      <div className="flex items-center gap-2">
                        <span className={isBelowThreshold ? 'text-rose-400' : 'text-blue-400'}>
                          {s.attendancePercentage}%
                        </span>
                        {isBelowThreshold && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] bg-rose-950 text-rose-300 border border-rose-800 font-bold flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" /> Warning &lt;75%
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                        <button
                          type="button"
                          onClick={() => handleToggle(s.id, 'present')}
                          className={`px-3 py-1 rounded text-[11px] font-bold transition-colors ${
                            currentStatus === 'present'
                              ? 'bg-emerald-600 text-slate-950'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          Present
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggle(s.id, 'absent')}
                          className={`px-3 py-1 rounded text-[11px] font-bold transition-colors ${
                            currentStatus === 'absent'
                              ? 'bg-rose-600 text-slate-100'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          Absent
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggle(s.id, 'excused')}
                          className={`px-3 py-1 rounded text-[11px] font-bold transition-colors ${
                            currentStatus === 'excused'
                              ? 'bg-amber-600 text-slate-950'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          Excused
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
