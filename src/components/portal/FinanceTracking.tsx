import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Plus,
  Building2,
  X,
  FileSpreadsheet,
} from 'lucide-react';

export const FinanceTracking: React.FC = () => {
  const { payments, students, addPaymentRecord, kpis } = useApp();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const [payForm, setPayForm] = useState({
    studentId: students[0]?.id || 'ZRBC-2026-FR-001',
    amount: 350,
    currency: 'EUR',
    method: 'Stripe / Card Token' as any,
    reference: `STR-PAY-${Date.now().toString().slice(-4)}`,
    reconciliationNotes: 'Verified by General Secretariat.',
  });

  const handleAddPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const st = students.find((s) => s.id === payForm.studentId);
    if (!st) return;

    addPaymentRecord({
      studentId: st.id,
      studentName: `${st.firstName} ${st.lastName}`,
      countryId: st.countryId,
      amount: payForm.amount,
      currency: payForm.currency,
      method: payForm.method,
      reference: payForm.reference,
      reconciliationNotes: payForm.reconciliationNotes,
    });

    setIsPaymentModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 15 • European Tuition & Finance
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Finance & Payment Tracking</h1>
          <p className="text-xs text-slate-400">
            Centralized payment reconciliation per student. No raw card storage in database.
          </p>
        </div>

        <button
          onClick={() => setIsPaymentModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
        >
          <Plus className="h-4 w-4" />
          <span>Record Tuition Payment</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1 shadow-lg">
          <span className="text-[10px] text-slate-400 uppercase font-mono">European Payment KPI Rate</span>
          <div className="text-2xl font-black text-emerald-400">{kpis.paymentRate}%</div>
          <div className="text-[10px] text-slate-400">Target &gt; 95% before course start</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1 shadow-lg">
          <span className="text-[10px] text-slate-400 uppercase font-mono">Total Collected (EUR / GBP)</span>
          <div className="text-2xl font-black text-slate-100">€41,650.00</div>
          <div className="text-[10px] text-slate-400">Reconciled in General Secretariat</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1 shadow-lg">
          <span className="text-[10px] text-slate-400 uppercase font-mono">Payment Security Standard</span>
          <div className="text-xs font-bold text-emerald-400 pt-1">Tokenized PSP (Stripe)</div>
          <div className="text-[10px] text-slate-400">No raw card data stored in database</div>
        </div>
      </div>

      {/* Payments Register Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-xl">
        <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-amber-400" />
            Central Payment Register & Reconciliation Notes
          </h3>
          <span className="text-xs font-mono text-slate-400">General Secretariat Scope</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">Reference Code</th>
                <th className="p-3">Student Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Amount Paid</th>
                <th className="p-3">Payment Method</th>
                <th className="p-3">Status</th>
                <th className="p-3">Reconciliation Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {payments.map((p) => (
                <tr key={p.id} className="hover:bg-slate-800/50">
                  <td className="p-3 font-mono font-bold text-amber-400">{p.reference}</td>
                  <td className="p-3 font-semibold text-slate-100">{p.studentName} ({p.studentId})</td>
                  <td className="p-3 font-mono text-slate-300">{p.countryId}</td>
                  <td className="p-3 font-bold text-slate-100">{p.currency} {p.amount}</td>
                  <td className="p-3 text-slate-400">{p.method}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 uppercase">
                      {p.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400 text-[11px] italic">{p.reconciliationNotes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Entry Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100">Record Tuition Payment Transaction</h3>
              <button onClick={() => setIsPaymentModalOpen(false)} className="text-slate-400 hover:text-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddPayment} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Select Student *</label>
                <select
                  value={payForm.studentId}
                  onChange={(e) => setPayForm({ ...payForm, studentId: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                >
                  {students.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.id}: {s.firstName} {s.lastName} ({s.countryId}) — Paid: €{s.amountPaid}/{s.feeAmount}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Payment Amount *</label>
                  <input
                    type="number"
                    required
                    value={payForm.amount}
                    onChange={(e) => setPayForm({ ...payForm, amount: Number(e.target.value) })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Currency *</label>
                  <select
                    value={payForm.currency}
                    onChange={(e) => setPayForm({ ...payForm, currency: e.target.value })}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Payment Method</label>
                <select
                  value={payForm.method}
                  onChange={(e) => setPayForm({ ...payForm, method: e.target.value as any })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                >
                  <option value="Stripe / Card Token">Stripe / Card Token</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Local Collection">Local Collection Exception</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Transaction Reference Code *</label>
                <input
                  type="text"
                  required
                  value={payForm.reference}
                  onChange={(e) => setPayForm({ ...payForm, reference: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="rounded px-4 py-2 text-slate-300 bg-slate-800 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded px-4 py-2 font-bold text-slate-950 bg-amber-500 hover:bg-amber-400"
                >
                  Confirm & Reconcile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
