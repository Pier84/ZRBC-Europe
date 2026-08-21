import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DocumentItem } from '../../types';
import {
  FolderKanban,
  FileText,
  Lock,
  Download,
  Plus,
  Search,
  Folder,
  X,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export const DocumentRepository: React.FC = () => {
  const { documents, addDocument, currentRole } = useApp();

  const [selectedFolder, setSelectedFolder] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const folders = [
    'ALL',
    '01 - European Direction',
    '02 - Academic Programme',
    '03 - Teaching Materials',
    '04 - Translations',
    '05 - Finance',
    '06 - Teachers',
    '07 - Exams',
    '08 - Graduation',
    '09 - Countries',
  ];

  // Role-based visibility check
  const isFinanceRestricted = ['student', 'teacher', 'translator'].includes(currentRole);
  const isExamsRestricted = ['student', 'translator'].includes(currentRole);

  const filteredDocuments = documents.filter((doc) => {
    if (selectedFolder !== 'ALL' && doc.folder !== selectedFolder) return false;

    // RBAC restriction checks
    if (doc.category.includes('05 - Finance') && isFinanceRestricted) return false;
    if (doc.category.includes('07 - Exams') && isExamsRestricted) return false;

    const q = searchQuery.toLowerCase();
    return (
      doc.title.toLowerCase().includes(q) ||
      doc.code.toLowerCase().includes(q) ||
      doc.category.toLowerCase().includes(q)
    );
  });

  const [uploadForm, setUploadForm] = useState({
    code: '',
    title: '',
    category: '03 - Teaching Materials',
    version: 'v1.0',
    language: 'en' as any,
    countryScope: 'ALL',
    visibility: 'students' as any,
  });

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDocument({
      code: uploadForm.code || `DOC-2026-${Date.now().toString().slice(-4)}`,
      title: uploadForm.title,
      category: uploadForm.category,
      folder: uploadForm.category,
      version: uploadForm.version,
      language: uploadForm.language,
      owner: currentRole,
      countryScope: uploadForm.countryScope,
      visibility: uploadForm.visibility,
      status: 'published',
      fileSize: '1.5 MB',
      contentSnippet: 'Official uploaded European document file.',
    });
    setIsUploadModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
            Section 13 • Central Repository
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-1">Central Document Repository</h1>
          <p className="text-xs text-slate-400">
            Centralized document tree with metadata, version control, and role-based visibility restrictions.
          </p>
        </div>

        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
        >
          <Plus className="h-4 w-4" />
          <span>Upload Managed Document</span>
        </button>
      </div>

      {/* Directory Folders Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
        <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
          <FolderKanban className="h-4 w-4 text-amber-400" />
          Folders:
        </span>
        {folders.map((folder) => (
          <button
            key={folder}
            onClick={() => setSelectedFolder(folder)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              selectedFolder === folder
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Folder className="h-3.5 w-3.5" />
            <span>{folder}</span>
          </button>
        ))}
      </div>

      {/* Documents Grid / List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="rounded bg-amber-950 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-400 border border-amber-800">
                  {doc.code}
                </span>
                <span className="text-[10px] font-bold text-slate-400 font-mono">{doc.version}</span>
              </div>

              <h3 className="text-sm font-bold text-slate-100 leading-snug">{doc.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed italic">{doc.contentSnippet}</p>
            </div>

            <div className="border-t border-slate-800 pt-3 space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center justify-between">
                <span>Category:</span>
                <span className="font-semibold text-slate-200">{doc.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Language / Scope:</span>
                <span className="font-mono text-amber-300 uppercase">{doc.language} ({doc.countryScope})</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status / Updated:</span>
                <span className="text-emerald-400 font-bold uppercase">{doc.status} ({doc.updatedAt})</span>
              </div>

              <button
                onClick={() => alert(`Downloading official document file: ${doc.title}`)}
                className="w-full mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <Download className="h-3.5 w-3.5 text-amber-400" />
                <span>Download ({doc.fileSize})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100">Upload Managed Document</h3>
              <button onClick={() => setIsUploadModalOpen(false)} className="text-slate-400 hover:text-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Document Title *</label>
                <input
                  type="text"
                  required
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                  placeholder="e.g. Systematic Theology Lecture 2 Notes"
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Category / Folder *</label>
                <select
                  value={uploadForm.category}
                  onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                  className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                >
                  <option value="01 - European Direction">01 - European Direction</option>
                  <option value="02 - Academic Programme">02 - Academic Programme</option>
                  <option value="03 - Teaching Materials">03 - Teaching Materials</option>
                  <option value="04 - Translations">04 - Translations</option>
                  <option value="05 - Finance">05 - Finance</option>
                  <option value="06 - Teachers">06 - Teachers</option>
                  <option value="07 - Exams">07 - Exams</option>
                  <option value="08 - Graduation">08 - Graduation</option>
                  <option value="09 - Countries">09 - Countries</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Document Code</label>
                  <input
                    type="text"
                    value={uploadForm.code}
                    onChange={(e) => setUploadForm({ ...uploadForm, code: e.target.value })}
                    placeholder="DOC-2026-MAT-05"
                    className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Version</label>
                  <input
                    type="text"
                    value={uploadForm.version}
                    onChange={(e) => setUploadForm({ ...uploadForm, version: e.target.value })}
                    placeholder="v1.0"
                    className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="rounded px-4 py-2 text-slate-300 bg-slate-800 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded px-4 py-2 font-bold text-slate-950 bg-amber-500 hover:bg-amber-400"
                >
                  Upload & Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
