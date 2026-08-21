import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TranslationAssignment } from '../../types';
import {
  Languages,
  CheckCircle2,
  Clock,
  FileText,
  UserCheck,
  ShieldCheck,
  Edit,
  ArrowRight,
  Eye,
} from 'lucide-react';

export const TranslationWorkflow: React.FC = () => {
  const { translations, updateTranslation, currentRole } = useApp();

  const [selectedAssignment, setSelectedAssignment] = useState<TranslationAssignment | null>(translations[0] || null);
  const [editorText, setEditorText] = useState<string>(selectedAssignment?.translatedText || '');

  const handleSelect = (item: TranslationAssignment) => {
    setSelectedAssignment(item);
    setEditorText(item.translatedText || '');
  };

  const handleSaveTranslation = () => {
    if (!selectedAssignment) return;
    updateTranslation(selectedAssignment.id, {
      translatedText: editorText,
      status: 'submitted_review',
    });
  };

  const handleApproveTranslation = () => {
    if (!selectedAssignment) return;
    updateTranslation(selectedAssignment.id, {
      status: 'approved',
      reviewNotes: 'Approved by European Translation & Content Office.',
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 12 • Controlled Academic Content
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Translation & Content Workflow</h1>
          <p className="text-xs text-slate-400">
            English master academic content pipeline with translation assignments, version control, review & approval.
          </p>
        </div>
      </div>

      {/* Workflow Pipeline Diagram Visualizer */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
        <h3 className="text-xs uppercase font-mono font-bold text-amber-400 tracking-wider">
          European Content Governance Flow
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center text-xs">
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-bold text-slate-200">
            1. Central Institute
          </div>
          <div className="p-2.5 bg-slate-950 rounded-lg border border-amber-800 font-bold text-amber-300">
            2. English Master
          </div>
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-bold text-slate-200">
            3. Content Office
          </div>
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-bold text-slate-200">
            4. Country Translators
          </div>
          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-bold text-slate-200">
            5. Quality Review
          </div>
          <div className="p-2.5 bg-emerald-950 rounded-lg border border-emerald-700 font-bold text-emerald-300">
            6. Approved & Published
          </div>
        </div>
      </div>

      {/* Main Grid: Queue & Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Translation Assignments Queue */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Languages className="h-4 w-4 text-amber-400" />
            Translation Queue
          </h3>

          <div className="space-y-2">
            {translations.map((item) => {
              const isSelected = selectedAssignment?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-amber-500 bg-amber-950/20 shadow-md ring-1 ring-amber-500/30'
                      : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-amber-400">{item.documentCode}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        item.status === 'approved'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-amber-950 text-amber-300 border border-amber-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-100 mb-2">{item.documentTitle}</h4>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-t border-slate-800 pt-2">
                    <span>
                      {item.sourceLanguage.toUpperCase()} → {item.targetLanguage.toUpperCase()} ({item.version})
                    </span>
                    <span>Due: {item.dueDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Translation Side-by-Side Editor */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
          {selectedAssignment ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <div className="text-[10px] font-mono font-bold text-amber-400">
                    {selectedAssignment.documentCode} • Version {selectedAssignment.version}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{selectedAssignment.documentTitle}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-300 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">
                    Target Language: <strong className="text-amber-300 uppercase">{selectedAssignment.targetLanguage}</strong>
                  </span>
                </div>
              </div>

              {/* Side-by-Side Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* English Master Text */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    English Master Text (Source)
                  </label>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-slate-300 min-h-[160px] leading-relaxed">
                    Foundational principles of Pentecostal hermeneutics. Interpretation must account for canonical context, pneumatological illumination, and application across 20 European nations.
                  </div>
                </div>

                {/* Target Translation Editor */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    {selectedAssignment.targetLanguage.toUpperCase()} Translated Text
                  </label>
                  <textarea
                    rows={6}
                    value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-slate-100 focus:outline-none focus:border-amber-500 leading-relaxed font-sans"
                  />
                </div>
              </div>

              {/* Action Bar */}
              <div className="border-t border-slate-800 pt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  Translator: <strong className="text-slate-200">{selectedAssignment.translatorName}</strong> • Reviewer:{' '}
                  <strong className="text-slate-200">{selectedAssignment.reviewerName}</strong>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveTranslation}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700"
                  >
                    Save Draft Translation
                  </button>

                  <button
                    onClick={handleApproveTranslation}
                    className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 shadow-md"
                  >
                    Approve for Student Publication
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs">
              Select an item from the queue to open the translation editor.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
