import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Student } from '../../types';
import {
  Users,
  Search,
  Plus,
  UserCheck,
  CreditCard,
  CalendarCheck,
  Award,
  ShieldCheck,
  FileText,
  X,
  CheckCircle2,
  AlertTriangle,
  Building2,
} from 'lucide-react';

export const StudentManagement: React.FC = () => {
  const { students, countries, currentRole, roleScopeCountry, addStudent, updateStudent } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('ALL');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // RBAC scope check: Country Coordinators are technically restricted to their own country data!
  const isCountryCoordinator = currentRole === 'country_coordinator';
  const effectiveCountryScope = isCountryCoordinator ? (roleScopeCountry || 'FR') : selectedCountryFilter;

  const filteredStudents = students.filter((student) => {
    // Country isolation
    if (isCountryCoordinator && student.countryId !== roleScopeCountry) {
      return false;
    }
    if (!isCountryCoordinator && selectedCountryFilter !== 'ALL' && student.countryId !== selectedCountryFilter) {
      return false;
    }

    const q = searchQuery.toLowerCase();
    return (
      student.id.toLowerCase().includes(q) ||
      student.firstName.toLowerCase().includes(q) ||
      student.lastName.toLowerCase().includes(q) ||
      student.email.toLowerCase().includes(q) ||
      student.countryId.toLowerCase().includes(q)
    );
  });

  const [newForm, setNewForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryId: 'FR',
    localCentre: 'Paris Satellite',
    preferredLanguage: 'fr' as any,
    feeAmount: 350,
  });

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    const created = addStudent({
      userId: `USR-${Date.now().toString().slice(-4)}`,
      firstName: newForm.firstName,
      lastName: newForm.lastName,
      email: newForm.email,
      phone: newForm.phone,
      countryId: newForm.countryId,
      localCentre: newForm.localCentre,
      preferredLanguage: newForm.preferredLanguage,
      cohort: '2026-Autumn',
      admissionStatus: 'confirmed',
      feeAmount: newForm.feeAmount,
      amountPaid: 0,
      currency: 'EUR',
      paymentStatus: 'pending',
      attendancePercentage: 100,
      enrolledCourses: ['THEO-101', 'BIBL-102', 'PRAC-103'],
      examResults: {},
      academicValidated: false,
      certificateIssued: false,
      gdprConsent: true,
    });

    setIsAddModalOpen(false);
    setSelectedStudent(created);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 8 • Central Database
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Student Register</h1>
          <p className="text-xs text-slate-400">
            Central European database with country-aware unique identifiers (e.g. <code>ZRBC-2026-FR-001</code>)
          </p>
        </div>

        {/* Secretariat Actions */}
        {!isCountryCoordinator && (
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            <Plus className="h-4 w-4" />
            <span>Register New Student</span>
          </button>
        )}
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by ID, name, email..."
            className="w-full rounded-lg border border-slate-700 bg-slate-950 pl-9 pr-4 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!isCountryCoordinator ? (
            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-400 font-semibold">Country:</label>
              <select
                value={selectedCountryFilter}
                onChange={(e) => setSelectedCountryFilter(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-200 focus:outline-none"
              >
                <option value="ALL">All 20 European Countries</option>
                {countries.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.id})
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="text-xs text-cyan-300 font-bold bg-cyan-950 border border-cyan-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Restricted to Country Data ({roleScopeCountry})</span>
            </div>
          )}
        </div>
      </div>

      {/* Student Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">Student ID</th>
                <th className="p-3">Full Name</th>
                <th className="p-3">Country / Hub</th>
                <th className="p-3">Payment Status</th>
                <th className="p-3">Attendance %</th>
                <th className="p-3">Admission</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400 text-xs">
                    No student records found matching the current RBAC scope or query.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => {
                  const isAttendanceWarning = student.attendancePercentage < 75;
                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-800/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedStudent(student)}
                    >
                      <td className="p-3 font-mono font-bold text-amber-400">{student.id}</td>
                      <td className="p-3 font-semibold text-slate-100">
                        {student.firstName} {student.lastName}
                        <div className="text-[10px] text-slate-400 font-normal">{student.email}</div>
                      </td>
                      <td className="p-3">
                        <span className="font-semibold text-slate-200">{student.countryId}</span>
                        <div className="text-[10px] text-slate-400">{student.localCentre}</div>
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            student.paymentStatus === 'paid'
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                              : student.paymentStatus === 'partial'
                              ? 'bg-amber-950 text-amber-300 border border-amber-800'
                              : 'bg-rose-950 text-rose-300 border border-rose-800'
                          }`}
                        >
                          {student.paymentStatus} (€{student.amountPaid}/{student.feeAmount})
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono font-bold ${
                              isAttendanceWarning ? 'text-rose-400' : 'text-blue-400'
                            }`}
                          >
                            {student.attendancePercentage}%
                          </span>
                          {isAttendanceWarning && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-rose-950 text-rose-300 border border-rose-800 flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" /> &lt;75% Alert
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-200 uppercase">
                          {student.admissionStatus}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedStudent(student);
                          }}
                          className="rounded bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-amber-400 hover:bg-slate-700"
                        >
                          View Full Profile
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Profile Drawer Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl p-6 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  European Student Register Record
                </span>
                <h2 className="text-xl font-black text-amber-400 font-mono">{selectedStudent.id}</h2>
                <h3 className="text-lg font-bold text-slate-100">
                  {selectedStudent.firstName} {selectedStudent.lastName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Profile Grid Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Personal Information */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider border-b border-slate-800 pb-1.5">
                  Personal Information
                </h4>
                <div className="space-y-1.5 text-slate-300">
                  <div><strong className="text-slate-400">First / Last Name:</strong> {selectedStudent.firstName} {selectedStudent.lastName}</div>
                  <div><strong className="text-slate-400">Country / Local Centre:</strong> {selectedStudent.countryId} ({selectedStudent.localCentre})</div>
                  <div><strong className="text-slate-400">Preferred Language:</strong> {selectedStudent.preferredLanguage.toUpperCase()}</div>
                  <div><strong className="text-slate-400">Email:</strong> {selectedStudent.email}</div>
                  <div><strong className="text-slate-400">Phone:</strong> {selectedStudent.phone}</div>
                  <div><strong className="text-slate-400">GDPR Consent Record:</strong> {selectedStudent.gdprConsent ? 'Verified Active' : 'Pending'}</div>
                </div>
              </div>

              {/* Academic Overview */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider border-b border-slate-800 pb-1.5">
                  Academic Record
                </h4>
                <div className="space-y-1.5 text-slate-300">
                  <div><strong className="text-slate-400">Programme Cohort:</strong> {selectedStudent.cohort}</div>
                  <div><strong className="text-slate-400">Admission Status:</strong> {selectedStudent.admissionStatus}</div>
                  <div><strong className="text-slate-400">Enrolled Courses:</strong> {selectedStudent.enrolledCourses.join(', ')}</div>
                  <div><strong className="text-slate-400">Attendance %:</strong> <span className="font-mono text-blue-400 font-bold">{selectedStudent.attendancePercentage}%</span></div>
                  <div><strong className="text-slate-400">Academic Validation:</strong> {selectedStudent.academicValidated ? 'Validated by Academic Office' : 'Pending Validation'}</div>
                  <div><strong className="text-slate-400">Certificate Status:</strong> {selectedStudent.certificateIssued ? `Issued (${selectedStudent.certificateId})` : 'Not Issued'}</div>
                </div>
              </div>

              {/* Financial Status */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider border-b border-slate-800 pb-1.5">
                  Financial Status
                </h4>
                <div className="space-y-1.5 text-slate-300">
                  <div><strong className="text-slate-400">Fee Amount Due:</strong> {selectedStudent.currency} {selectedStudent.feeAmount}</div>
                  <div><strong className="text-slate-400">Amount Paid:</strong> {selectedStudent.currency} {selectedStudent.amountPaid}</div>
                  <div><strong className="text-slate-400">Payment Status:</strong> <span className="font-bold uppercase text-emerald-400">{selectedStudent.paymentStatus}</span></div>
                  <div><strong className="text-slate-400">Payment Ref / Date:</strong> {selectedStudent.paymentReference || 'N/A'} ({selectedStudent.paymentDate || 'Pending'})</div>
                </div>
              </div>

              {/* Authorized Documents */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider border-b border-slate-800 pb-1.5">
                  Authorized Student Documents
                </h4>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  <li>📄 Registration Confirmation Letter (PDF)</li>
                  <li>📄 Academic Timetable 2026 (EN/FR/IT)</li>
                  <li>📄 Course Material Access Token</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4 flex justify-between items-center">
              <span className="text-[10px] text-slate-400">Record audited by European General Secretariat</span>
              <button
                onClick={() => setSelectedStudent(null)}
                className="rounded-lg bg-amber-500 px-4 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-400"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100">Register New Student Record</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateStudent} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  value={newForm.firstName}
                  onChange={(e) => setNewForm({ ...newForm, firstName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Last Name *</label>
                <input
                  type="text"
                  required
                  value={newForm.lastName}
                  onChange={(e) => setNewForm({ ...newForm, lastName: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={newForm.email}
                  onChange={(e) => setNewForm({ ...newForm, email: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  value={newForm.phone}
                  onChange={(e) => setNewForm({ ...newForm, phone: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Country *</label>
                <select
                  value={newForm.countryId}
                  onChange={(e) => {
                    const c = countries.find((x) => x.id === e.target.value);
                    setNewForm({ ...newForm, countryId: e.target.value, localCentre: c?.localCentre || 'Central Hub' });
                  }}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.id})
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="rounded px-4 py-2 text-slate-300 bg-slate-800 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded px-4 py-2 font-bold text-slate-950 bg-amber-500 hover:bg-amber-400"
                >
                  Create Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
