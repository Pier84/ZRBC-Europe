import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  LanguageCode,
  UserRole,
  Student,
  CountryData,
  Course,
  Session,
  DocumentItem,
  TranslationAssignment,
  PaymentRecord,
  GovernanceIssue,
  AuditLogItem,
  ManagementKPIs,
} from '../types';
import {
  INITIAL_COUNTRIES,
  INITIAL_COURSES,
  INITIAL_DOCUMENTS,
  INITIAL_ISSUES,
  INITIAL_PAYMENTS,
  INITIAL_SESSIONS,
  INITIAL_STUDENTS,
  INITIAL_TRANSLATIONS,
  INITIAL_AUDIT_LOGS,
  EUROPEAN_KPIS,
  ROLES_LIST,
} from '../data/mockData';
import { UI_TRANSLATIONS } from '../data/translations';

interface AppContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  roleScopeCountry: string | null; // e.g. "FR" for country coordinator
  setRoleScopeCountry: (country: string | null) => void;
  
  // Data State
  students: Student[];
  countries: CountryData[];
  courses: Course[];
  sessions: Session[];
  documents: DocumentItem[];
  translations: TranslationAssignment[];
  payments: PaymentRecord[];
  issues: GovernanceIssue[];
  auditLogs: AuditLogItem[];
  kpis: ManagementKPIs;
  
  // Translation Helper
  t: (key: string) => string;
  
  // Mutators
  addStudent: (student: Omit<Student, 'id' | 'registrationDate'>) => Student;
  updateStudent: (id: string, updates: Partial<Student>) => void;
  saveAttendance: (sessionId: string, records: { studentId: string; status: 'present' | 'absent' | 'excused' }[]) => void;
  addPaymentRecord: (payment: Omit<PaymentRecord, 'id' | 'paymentDate' | 'status'>) => void;
  addDocument: (doc: Omit<DocumentItem, 'id' | 'updatedAt'>) => void;
  updateTranslation: (id: string, updates: Partial<TranslationAssignment>) => void;
  addIssue: (issue: Omit<GovernanceIssue, 'id' | 'createdAt' | 'status'>) => void;
  updateIssue: (id: string, updates: Partial<GovernanceIssue>) => void;
  recordAuditLog: (action: string, objectType: string, objectId: string, securityStatus?: 'Success' | 'Warning' | 'MFA Verified') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('zrbc_lang');
    return (saved as LanguageCode) || 'en';
  });

  const [currentRole, setCurrentRoleState] = useState<UserRole>(() => {
    const saved = localStorage.getItem('zrbc_role');
    return (saved as UserRole) || 'european_director';
  });

  const [roleScopeCountry, setRoleScopeCountry] = useState<string | null>('FR');

  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [countries, setCountries] = useState<CountryData[]>(INITIAL_COUNTRIES);
  const [courses] = useState<Course[]>(INITIAL_COURSES);
  const [sessions, setSessions] = useState<Session[]>(INITIAL_SESSIONS);
  const [documents, setDocuments] = useState<DocumentItem[]>(INITIAL_DOCUMENTS);
  const [translations, setTranslations] = useState<TranslationAssignment[]>(INITIAL_TRANSLATIONS);
  const [payments, setPayments] = useState<PaymentRecord[]>(INITIAL_PAYMENTS);
  const [issues, setIssues] = useState<GovernanceIssue[]>(INITIAL_ISSUES);
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(INITIAL_AUDIT_LOGS);
  const [kpis, setKpis] = useState<ManagementKPIs>(EUROPEAN_KPIS);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('zrbc_lang', lang);
  };

  const setCurrentRole = (role: UserRole) => {
    setCurrentRoleState(role);
    localStorage.setItem('zrbc_role', role);
    const roleMeta = ROLES_LIST.find((r) => r.role === role);
    if (roleMeta?.defaultCountry) {
      setRoleScopeCountry(roleMeta.defaultCountry);
    } else {
      setRoleScopeCountry(null);
    }
    recordAuditLog(`Role Switched to ${roleMeta?.title}`, 'SystemAuth', role, 'MFA Verified');
  };

  const t = (key: string): string => {
    return UI_TRANSLATIONS[language]?.[key] || UI_TRANSLATIONS['en']?.[key] || key;
  };

  const recordAuditLog = (
    action: string,
    objectType: string,
    objectId: string,
    securityStatus: 'Success' | 'Warning' | 'MFA Verified' = 'Success'
  ) => {
    const currentRoleMeta = ROLES_LIST.find((r) => r.role === currentRole);
    const newLog: AuditLogItem = {
      id: `AUD-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      actor: `${currentRoleMeta?.defaultUser || 'User'} (${currentRoleMeta?.title || currentRole})`,
      role: currentRole,
      action,
      objectType,
      objectId,
      ipAddress: '185.220.101.4',
      securityStatus,
    };
    setAuditLogs((prev) => [newLog, ...prev]);
  };

  const addStudent = (studentData: Omit<Student, 'id' | 'registrationDate'>): Student => {
    const countryCode = studentData.countryId.toUpperCase();
    const countryStudents = students.filter((s) => s.countryId === countryCode);
    const seqNumber = (countryStudents.length + 1).toString().padStart(3, '0');
    const newId = `ZRBC-2026-${countryCode}-${seqNumber}`;

    const newStudent: Student = {
      ...studentData,
      id: newId,
      registrationDate: new Date().toISOString().split('T')[0],
    };

    setStudents((prev) => [newStudent, ...prev]);

    // Update country count
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryCode
          ? {
              ...c,
              studentsCount: c.studentsCount + 1,
              confirmedCount: c.confirmedCount + (studentData.admissionStatus === 'confirmed' ? 1 : 0),
            }
          : c
      )
    );

    recordAuditLog('Registered New Student', 'Student', newId, 'MFA Verified');
    return newStudent;
  };

  const updateStudent = (id: string, updates: Partial<Student>) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
    recordAuditLog('Updated Student Profile', 'Student', id);
  };

  const saveAttendance = (sessionId: string, records: { studentId: string; status: 'present' | 'absent' | 'excused' }[]) => {
    // Recalculate student attendance percentages
    const presentCountMap: Record<string, number> = {};
    const totalSessionMap: Record<string, number> = {};

    records.forEach((rec) => {
      setStudents((prev) =>
        prev.map((s) => {
          if (s.id === rec.studentId) {
            const currentP = s.attendancePercentage;
            let updatedP = currentP;
            if (rec.status === 'present') updatedP = Math.min(100, currentP + 2);
            if (rec.status === 'absent') updatedP = Math.max(0, currentP - 5);
            return { ...s, attendancePercentage: updatedP };
          }
          return s;
        })
      );
    });

    recordAuditLog('Recorded Session Attendance', 'Attendance', sessionId);
  };

  const addPaymentRecord = (paymentData: Omit<PaymentRecord, 'id' | 'paymentDate' | 'status'>) => {
    const newPay: PaymentRecord = {
      ...paymentData,
      id: `PAY-${Date.now().toString().slice(-4)}`,
      paymentDate: new Date().toISOString().split('T')[0],
      status: 'completed',
    };
    setPayments((prev) => [newPay, ...prev]);

    // Update student payment status
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === paymentData.studentId) {
          const newPaid = s.amountPaid + paymentData.amount;
          const status = newPaid >= s.feeAmount ? 'paid' : newPaid > 0 ? 'partial' : 'pending';
          return {
            ...s,
            amountPaid: newPaid,
            paymentStatus: status,
            paymentDate: newPay.paymentDate,
            paymentReference: paymentData.reference,
          };
        }
        return s;
      })
    );

    recordAuditLog('Added Payment Record', 'Payment', newPay.id, 'MFA Verified');
  };

  const addDocument = (docData: Omit<DocumentItem, 'id' | 'updatedAt'>) => {
    const newDoc: DocumentItem = {
      ...docData,
      id: `DOC-${Date.now().toString().slice(-4)}`,
      updatedAt: new Date().toISOString().split('T')[0],
    };
    setDocuments((prev) => [newDoc, ...prev]);
    recordAuditLog('Uploaded Document', 'Document', newDoc.code);
  };

  const updateTranslation = (id: string, updates: Partial<TranslationAssignment>) => {
    setTranslations((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
    recordAuditLog('Updated Translation Assignment', 'Translation', id);
  };

  const addIssue = (issueData: Omit<GovernanceIssue, 'id' | 'createdAt' | 'status'>) => {
    const newIssue: GovernanceIssue = {
      ...issueData,
      id: `ISS-2026-${(issues.length + 1).toString().padStart(2, '0')}`,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Open',
    };
    setIssues((prev) => [newIssue, ...prev]);

    // Update open issues in country
    setCountries((prev) =>
      prev.map((c) =>
        c.id === issueData.countryId ? { ...c, openIssues: c.openIssues + 1 } : c
      )
    );

    recordAuditLog('Raised Governance Issue', 'GovernanceIssue', newIssue.id);
  };

  const updateIssue = (id: string, updates: Partial<GovernanceIssue>) => {
    setIssues((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          const updated = { ...i, ...updates };
          if (updates.status === 'Resolved' && i.status !== 'Resolved') {
            setCountries((cPrev) =>
              cPrev.map((c) =>
                c.id === i.countryId ? { ...c, openIssues: Math.max(0, c.openIssues - 1) } : c
              )
            );
          }
          return updated;
        }
        return i;
      })
    );
    recordAuditLog('Updated Governance Issue', 'GovernanceIssue', id);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currentRole,
        setCurrentRole,
        roleScopeCountry,
        setRoleScopeCountry,
        students,
        countries,
        courses,
        sessions,
        documents,
        translations,
        payments,
        issues,
        auditLogs,
        kpis,
        t,
        addStudent,
        updateStudent,
        saveAttendance,
        addPaymentRecord,
        addDocument,
        updateTranslation,
        addIssue,
        updateIssue,
        recordAuditLog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
