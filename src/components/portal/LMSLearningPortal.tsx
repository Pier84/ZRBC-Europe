import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Course, Session } from '../../types';
import {
  BookOpen,
  Video,
  FileText,
  PlayCircle,
  Calendar,
  Clock,
  ExternalLink,
  X,
  CheckCircle2,
  Users,
} from 'lucide-react';

export const LMSLearningPortal: React.FC = () => {
  const { courses, sessions, currentRole } = useApp();

  const [activeSessionModal, setActiveSessionModal] = useState<Session | null>(null);
  const [activeRecordingUrl, setActiveRecordingUrl] = useState<string | null>(null);

  const isTeacher = currentRole === 'teacher';

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header (Section 10 Mockup format) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
              Section 10 • Learning Portal / LMS
            </span>
            <h1 className="text-2xl font-black text-slate-100 mt-1">
              {isTeacher ? 'TEACHER WORKSPACE' : 'MY LEARNING'}
            </h1>
            <p className="text-xs text-slate-400">European Academic Programme 2026 • Term 1</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Academic Progress</span>
              <div className="text-xl font-mono font-black text-amber-400">82%</div>
            </div>
            <div className="h-10 w-24 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden relative p-1">
              <div className="h-full bg-amber-500 rounded" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>

        {/* Academic Period Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 font-mono bg-slate-950 p-3 rounded-xl border border-slate-800">
          <div>
            Term Duration: <span className="text-amber-300 font-bold">14 September 2026 – 15 December 2026</span>
          </div>
          <div>
            Weekly Model: <span className="text-amber-300 font-bold">Mon 3h, Thu 3h, Sat 4h</span> (130 guided + 60 autonomous)
          </div>
        </div>
      </div>

      {/* Schedule & Live Classes (Exact format from PDF Section 10) */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-amber-400" />
          Weekly Class Sessions & Live Broadcasts
        </h2>

        {/* MONDAY */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800">
              MONDAY • 18:30 – 21:30 CET (3 Hours)
            </span>
            <span className="text-xs text-slate-400">Introduction to Systematic Theology</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-100">THEO-101: Systematic Theology & Pneumatology</h3>
              <p className="text-xs text-slate-400">Faculty Lead: Dr. Michael Taylor • Session 1 & 2 Broadcast</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() =>
                  setActiveSessionModal({
                    id: 'SES-LIVE-MON',
                    courseId: 'THEO-101',
                    courseTitle: 'Introduction to Systematic Theology',
                    date: '2026-09-21',
                    dayOfWeek: 'Monday',
                    startTime: '18:30',
                    endTime: '21:30',
                    deliveryMode: 'central',
                    zoomLink: 'https://zoom.us/j/92837482910?pwd=ZRBC2026EuropeClass',
                    zoomMeetingId: '928 3748 2910',
                    status: 'live',
                  })
                }
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-extrabold text-slate-950 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/20"
              >
                <Video className="h-4 w-4" />
                <span>[JOIN LIVE CLASS]</span>
              </button>

              <a
                href="#materials"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <FileText className="h-4 w-4 text-amber-400" />
                <span>[COURSE MATERIAL]</span>
              </a>

              <button
                onClick={() => setActiveRecordingUrl('https://zrbc-europe.org/recordings/theo-101-ses1.mp4')}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <PlayCircle className="h-4 w-4 text-amber-400" />
                <span>[AUTHORIZED RECORDING]</span>
              </button>
            </div>
          </div>
        </div>

        {/* THURSDAY */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800">
              THURSDAY • 18:30 – 21:30 CET (3 Hours)
            </span>
            <span className="text-xs text-slate-400">Biblical Hermeneutics & Exposition</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-100">BIBL-102: Hermeneutical Principles & Exegesis</h3>
              <p className="text-xs text-slate-400">Faculty Lead: Prof. David Miller • Session 1 Exegetical Principles</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() =>
                  setActiveSessionModal({
                    id: 'SES-LIVE-THU',
                    courseId: 'BIBL-102',
                    courseTitle: 'Biblical Hermeneutics & Exposition',
                    date: '2026-09-24',
                    dayOfWeek: 'Thursday',
                    startTime: '18:30',
                    endTime: '21:30',
                    deliveryMode: 'central',
                    zoomLink: 'https://zoom.us/j/92837482911?pwd=ZRBC2026EuropeClass',
                    zoomMeetingId: '928 3748 2911',
                    status: 'upcoming',
                  })
                }
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-extrabold text-slate-950 hover:bg-emerald-500 transition-colors"
              >
                <Video className="h-4 w-4" />
                <span>[JOIN LIVE CLASS]</span>
              </button>

              <a
                href="#materials"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <FileText className="h-4 w-4 text-amber-400" />
                <span>[COURSE MATERIAL]</span>
              </a>
            </div>
          </div>
        </div>

        {/* SATURDAY */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold uppercase text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800">
              SATURDAY • 09:00 – 13:00 CET (4 Hours)
            </span>
            <span className="text-xs text-slate-400">Practical Ministry & Leadership</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-100">PRAC-103: Pastoral Ethics & Church Leadership</h3>
              <p className="text-xs text-slate-400">Faculty Lead: Rev. Dr. Samuel Raju • Practicum & Group Workshops</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() =>
                  setActiveSessionModal({
                    id: 'SES-LIVE-SAT',
                    courseId: 'PRAC-103',
                    courseTitle: 'Practical Ministry, Leadership & Ethics',
                    date: '2026-09-26',
                    dayOfWeek: 'Saturday',
                    startTime: '09:00',
                    endTime: '13:00',
                    deliveryMode: 'central',
                    zoomLink: 'https://zoom.us/j/92837482912?pwd=ZRBC2026EuropeClass',
                    zoomMeetingId: '928 3748 2912',
                    status: 'upcoming',
                  })
                }
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-extrabold text-slate-950 hover:bg-emerald-500 transition-colors"
              >
                <Video className="h-4 w-4" />
                <span>[JOIN LIVE CLASS]</span>
              </button>

              <a
                href="#materials"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <FileText className="h-4 w-4 text-amber-400" />
                <span>[COURSE MATERIAL]</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal Simulation */}
      {activeSessionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-emerald-400" />
                <h3 className="text-base font-bold text-slate-100">Zoom Live Class Launcher</h3>
              </div>
              <button onClick={() => setActiveSessionModal(null)} className="text-slate-400 hover:text-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">{activeSessionModal.courseTitle}</div>
                <div>Meeting ID: <code className="text-slate-100 font-mono font-bold">{activeSessionModal.zoomMeetingId}</code></div>
                <div>Schedule: {activeSessionModal.dayOfWeek} ({activeSessionModal.startTime} – {activeSessionModal.endTime} CET)</div>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Click below to launch the official Zoom videoconferencing session. Attendance metadata will be automatically captured for central attendance registers.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => setActiveSessionModal(null)}
                className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-bold text-slate-300 hover:bg-slate-700"
              >
                Cancel
              </button>
              <a
                href={activeSessionModal.zoomLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setActiveSessionModal(null)}
                className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 flex items-center gap-2"
              >
                <span>Launch Zoom Meeting</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Video Class Recording Modal */}
      {activeRecordingUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-amber-400" />
                <h3 className="text-base font-bold text-slate-100">Authorized Class Recording Player</h3>
              </div>
              <button onClick={() => setActiveRecordingUrl(null)} className="text-slate-400 hover:text-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="aspect-video bg-black rounded-xl border border-slate-800 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <PlayCircle className="h-16 w-16 text-amber-400 animate-pulse" />
              <div>
                <h4 className="text-base font-bold text-slate-100">Systematic Theology (THEO-101) - Session 1 Broadcast</h4>
                <p className="text-xs text-slate-400 mt-1">Authorized European Digital Archive • High-Definition Stream</p>
              </div>
              <span className="text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-800 px-3 py-1 rounded-full">
                Encrypted Stream Token Verified
              </span>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-800">
              <button
                onClick={() => setActiveRecordingUrl(null)}
                className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400"
              >
                Close Recording Player
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
