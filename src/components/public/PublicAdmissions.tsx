import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LanguageCode } from '../../types';
import { CheckCircle2, UserPlus, ShieldCheck, ArrowRight, Building2, Globe } from 'lucide-react';

export const PublicAdmissions: React.FC<{ setCurrentView: (v: string) => void }> = ({ setCurrentView }) => {
  const { countries, addStudent } = useApp();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryId: 'FR',
    localCentre: 'Paris Satellite',
    preferredLanguage: 'fr' as LanguageCode,
    gdprConsent: true,
  });

  const [submittedStudentId, setSubmittedStudentId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCountry = countries.find((c) => c.id === formData.countryId);

    const newStudent = addStudent({
      userId: `USR-APP-${Date.now().toString().slice(-4)}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      countryId: formData.countryId,
      localCentre: formData.localCentre || selectedCountry?.localCentre || 'Central Hub',
      preferredLanguage: formData.preferredLanguage,
      cohort: '2026-Autumn',
      admissionStatus: 'confirmed',
      feeAmount: 350,
      amountPaid: 0,
      currency: 'EUR',
      paymentStatus: 'pending',
      attendancePercentage: 100,
      enrolledCourses: ['THEO-101', 'BIBL-102', 'PRAC-103'],
      examResults: {},
      academicValidated: false,
      certificateIssued: false,
      gdprConsent: formData.gdprConsent,
    });

    setSubmittedStudentId(newStudent.id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
          European Central Application Portal 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100">
          Online Student Registration
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Register for the 2026 European Academic Cohort. Applications are centrally processed by the General Secretariat in Italy.
        </p>
      </div>

      {submittedStudentId ? (
        /* Application Submitted Success View */
        <div className="rounded-2xl border border-emerald-700 bg-emerald-950/30 p-8 sm:p-10 text-center space-y-6 animate-fade-in shadow-2xl">
          <div className="h-16 w-16 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-100">Application Successfully Submitted!</h2>
            <p className="text-xs text-slate-300">
              Your registration has been processed in the central European student database.
            </p>
          </div>

          <div className="rounded-xl border border-amber-800/60 bg-slate-900 p-6 max-w-md mx-auto space-y-2">
            <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Your Assigned Student Identifier</span>
            <div className="text-2xl font-mono font-black text-amber-400 tracking-widest">
              {submittedStudentId}
            </div>
            <p className="text-[11px] text-slate-400">
              Country-aware European format: <code>ZRBC-2026-[CC]-[SEQ]</code>
            </p>
          </div>

          <div className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed bg-slate-900/60 p-4 rounded-lg border border-slate-800">
            <strong>Next Steps:</strong> Your Country Coordinator will contact you regarding local satellite orientation and payment status.
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => {
                setSubmittedStudentId(null);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  countryId: 'FR',
                  localCentre: 'Paris Satellite',
                  preferredLanguage: 'fr',
                  gdprConsent: true,
                });
              }}
              className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      ) : (
        /* Application Form */
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-amber-400" />
              Applicant Information
            </h3>
            <span className="text-xs font-mono text-amber-400">2026 Academic Term</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">First Name *</label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="e.g. Jean"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Last Name *</label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="e.g. Dupont"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jean.dupont@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+33 6 12 34 56 78"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Participating Country *</label>
              <select
                value={formData.countryId}
                onChange={(e) => {
                  const country = countries.find((c) => c.id === e.target.value);
                  setFormData({
                    ...formData,
                    countryId: e.target.value,
                    localCentre: country?.localCentre || 'Local Centre',
                  });
                }}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              >
                {countries.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.id}) — Coordinator: {c.coordinatorName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Local Centre / Satellite</label>
              <input
                type="text"
                value={formData.localCentre}
                onChange={(e) => setFormData({ ...formData, localCentre: e.target.value })}
                placeholder="Paris Satellite / Rome Central"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Language *</label>
              <select
                value={formData.preferredLanguage}
                onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value as LanguageCode })}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              >
                <option value="en">English (Master Language)</option>
                <option value="fr">French (Français)</option>
                <option value="it">Italian (Italiano)</option>
                <option value="es">Spanish (Español)</option>
                <option value="ru">Russian (Русский)</option>
                <option value="de">German (Deutsch)</option>
                <option value="pt">Portuguese (Português)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Academic Fee Standard</label>
              <div className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-xs text-amber-300 font-bold flex items-center justify-between">
                <span>€350.00 EUR (Standard European Tuition)</span>
                <span className="text-[10px] text-slate-400 font-normal">Installment option available</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.gdprConsent}
                onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500"
              />
              <span className="text-xs text-slate-300 leading-relaxed">
                I agree to the processing of my personal registration metadata by ZRBC Europe under EU GDPR regulations. Data governance and central records remain centralized in Italy.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-extrabold text-slate-950 hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <span>SUBMIT APPLICATION TO GENERAL SECRETARIAT</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
};
