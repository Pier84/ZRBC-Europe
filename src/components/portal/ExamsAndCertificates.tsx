import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Student } from '../../types';
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
  ShieldCheck,
  FileCheck,
  QrCode,
  Printer,
  X,
} from 'lucide-react';

export const ExamsAndCertificates: React.FC = () => {
  const { students, updateStudent } = useApp();

  const [selectedStudentForCert, setSelectedStudentForCert] = useState<Student | null>(null);

  const handleIssueCertificate = (student: Student) => {
    const certId = `CERT-ZRBC-2026-${student.countryId}-${Date.now().toString().slice(-4)}`;
    updateStudent(student.id, {
      academicValidated: true,
      certificateIssued: true,
      certificateId: certId,
    });
    setSelectedStudentForCert({
      ...student,
      academicValidated: true,
      certificateIssued: true,
      certificateId: certId,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 14 • Academic Certification
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Examination & Certification Workflow</h1>
          <p className="text-xs text-slate-400">
            Attendance eligibility check (≥ 75%), exam grade logging, academic validation, and traceable certificate issuance.
          </p>
        </div>
      </div>

      {/* Workflow Diagram */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
        <h3 className="text-xs uppercase font-mono font-bold text-amber-400 tracking-wider">
          European Examination & Graduation Pipeline
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-bold text-slate-300">
            1. Course Completed
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-amber-800 font-bold text-amber-300">
            2. Attendance Check (≥ 75%)
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-bold text-slate-300">
            3. Exam Result Input
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-bold text-slate-300">
            4. Academic Validation
          </div>
          <div className="p-3 bg-emerald-950 rounded-lg border border-emerald-700 font-bold text-emerald-300">
            5. Certificate Issuance
          </div>
        </div>
      </div>

      {/* Student Eligibility & Certificate Status Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-xl">
        <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Award className="h-4 w-4 text-amber-400" />
            European Graduation Eligibility Register
          </h3>
          <span className="text-xs text-slate-400 font-mono">2026 Academic Term</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">Student ID</th>
                <th className="p-3">Student Name</th>
                <th className="p-3">Attendance %</th>
                <th className="p-3">Exam Scores</th>
                <th className="p-3">Eligibility Status</th>
                <th className="p-3 text-right">Certificate Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {students.map((student) => {
                const isAttendanceEligible = student.attendancePercentage >= 75;
                const hasExamResults = Object.keys(student.examResults).length > 0;

                return (
                  <tr key={student.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-3 font-mono font-bold text-amber-400">{student.id}</td>
                    <td className="p-3 font-semibold text-slate-100">
                      {student.firstName} {student.lastName} ({student.countryId})
                    </td>
                    <td className="p-3 font-mono">
                      <span className={isAttendanceEligible ? 'text-blue-400 font-bold' : 'text-rose-400 font-bold'}>
                        {student.attendancePercentage}%
                      </span>
                    </td>
                    <td className="p-3 text-slate-300">
                      {hasExamResults ? (
                        <span className="text-emerald-400 font-mono font-bold">
                          THEO: {student.examResults['THEO-101'] || 'N/A'}, BIBL: {student.examResults['BIBL-102'] || 'N/A'}
                        </span>
                      ) : (
                        <span className="text-slate-500 italic">Pending Exam Log</span>
                      )}
                    </td>
                    <td className="p-3">
                      {isAttendanceEligible ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1 w-max">
                          <CheckCircle2 className="h-3 w-3" /> Eligible
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800 flex items-center gap-1 w-max">
                          <AlertTriangle className="h-3 w-3" /> Ineligible (&lt;75%)
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      {student.certificateIssued ? (
                        <button
                          onClick={() => setSelectedStudentForCert(student)}
                          className="rounded bg-slate-800 px-3 py-1 text-xs font-bold text-emerald-400 hover:bg-slate-700 flex items-center gap-1.5 ml-auto"
                        >
                          <Printer className="h-3.5 w-3.5" />
                          <span>View Diploma</span>
                        </button>
                      ) : (
                        <button
                          disabled={!isAttendanceEligible}
                          onClick={() => handleIssueCertificate(student)}
                          className={`rounded px-3 py-1 text-xs font-bold transition-colors ${
                            isAttendanceEligible
                              ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          }`}
                        >
                          Issue Certificate
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Certificate Preview Modal */}
      {selectedStudentForCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl border-2 border-amber-500 bg-slate-950 p-8 space-y-6 shadow-2xl text-center">
            <button
              onClick={() => setSelectedStudentForCert(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-100"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Certificate Branding Header */}
            <div className="space-y-2 border-b-2 border-amber-500/40 pb-6">
              <div className="h-12 w-12 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 font-black mx-auto">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h2 className="text-lg font-black text-slate-100 uppercase tracking-widest">
                ZION RAJU INTERNATIONAL PENTECOSTAL BIBLE COLLEGE - EUROPE
              </h2>
              <p className="text-xs font-mono text-amber-400 font-bold">
                EUROPEAN HEADQUARTERS: ITALY • CENTRAL ACADEMIC CERTIFICATE
              </p>
            </div>

            {/* Body */}
            <div className="space-y-4">
              <p className="text-xs uppercase font-serif text-slate-400 tracking-wider">This is to certify that</p>
              <h3 className="text-2xl font-black text-amber-300 font-serif tracking-wide">
                {selectedStudentForCert.firstName} {selectedStudentForCert.lastName}
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                has successfully fulfilled all academic curriculum requirements, attendance standards (≥ 75%), and examinations for the <strong>2026 European Theological Program</strong>.
              </p>
            </div>

            {/* Verification Footer */}
            <div className="border-t border-slate-800 pt-6 grid grid-cols-3 gap-4 items-center text-left text-[10px] text-slate-400">
              <div>
                <strong className="block text-slate-200">Rev. Dr. Samuel Raju</strong>
                European Director
              </div>

              <div className="text-center">
                <QrCode className="h-12 w-12 text-amber-400 mx-auto mb-1" />
                <span className="font-mono text-[9px]">Verified Audit QR</span>
              </div>

              <div className="text-right">
                <strong className="block font-mono text-amber-400">{selectedStudentForCert.certificateId}</strong>
                Issued: {new Date().toISOString().split('T')[0]}
              </div>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="rounded-lg bg-amber-500 px-5 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 flex items-center gap-2"
              >
                <Printer className="h-4 w-4" />
                <span>Print / Export PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
