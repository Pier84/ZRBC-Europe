import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';

export const PublicContact: React.FC = () => {
  const { t } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [msgData, setMsgData] = useState({ name: '', email: '', country: 'Italy', subject: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
          European Administration Contact
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100">
          Contact General Secretariat
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          The European General Secretariat in Italy is the single administrative point of reference for student inquiries, registration assistance, and coordinator support.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* HQ Contact Info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-amber-400" />
              European Headquarters (Italy)
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-100">Address:</strong>
                  ZRBC Europe General Secretariat<br />
                  Via Central Campus 45, Rome, Italy
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-100">Official Email:</strong>
                  secretariat@zrbc-europe.org
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-100">Central Telephone:</strong>
                  +39 06 8765 4321 (Mon – Fri, 09:00 – 17:00 CET)
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-2 text-xs text-slate-400">
            <h4 className="font-bold text-amber-300 text-sm">Technical & LMS Support</h4>
            <p>For student login issues or Zoom live link assistance, contact Technical Office at <code>support@zrbc-europe.org</code>.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-700 bg-emerald-950/30 p-8 text-center space-y-4 shadow-2xl">
              <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-slate-100">Message Delivered to General Secretariat</h3>
              <p className="text-xs text-slate-300">
                Thank you for contacting ZRBC Europe. Our administrative staff in Italy will respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-slate-100">Inquiry Form</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={msgData.name}
                    onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={msgData.email}
                    onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Subject *</label>
                <input
                  type="text"
                  required
                  value={msgData.subject}
                  onChange={(e) => setMsgData({ ...msgData, subject: e.target.value })}
                  placeholder="e.g. Enrollment Inquiry / Student Document Verification"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={msgData.message}
                  onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                  placeholder="Please state your inquiry..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-amber-500 px-6 py-3 text-xs font-extrabold text-slate-950 hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                <span>Send Message to Secretariat</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
