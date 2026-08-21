/**
 * ZRBC Europe - Central Information System & Website
 * Types & Domain Interfaces
 */

export type LanguageCode = 'en' | 'fr' | 'it' | 'es' | 'ru' | 'de' | 'pt';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
}

export type UserRole =
  | 'european_director'
  | 'deputy_director'
  | 'general_secretariat'
  | 'academic_office'
  | 'translation_office'
  | 'technical_office'
  | 'country_coordinator'
  | 'teacher'
  | 'translator'
  | 'student';

export interface RoleInfo {
  role: UserRole;
  title: string;
  scope: string;
  capabilities: string;
  badgeColor: string;
  defaultUser: string;
  defaultCountry?: string;
}

export interface CountryData {
  id: string; // ISO code e.g. "IT", "FR"
  name: string;
  coordinatorName: string;
  coordinatorEmail: string;
  studentsCount: number;
  confirmedCount: number;
  paidCount: number;
  paymentRate: number; // percentage e.g. 93
  attendanceRate: number; // percentage e.g. 81
  translationReadiness: number; // percentage e.g. 92
  openIssues: number;
  localCentre: string;
  meetingDay: string;
}

export interface Student {
  id: string; // e.g. "ZRBC-2026-FR-001"
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryId: string;
  localCentre: string;
  preferredLanguage: LanguageCode;
  cohort: string;
  admissionStatus: 'pending' | 'confirmed' | 'rejected' | 'graduated';
  registrationDate: string;
  
  // Financial
  feeAmount: number;
  amountPaid: number;
  currency: string;
  paymentStatus: 'paid' | 'partial' | 'pending';
  paymentDate?: string;
  paymentReference?: string;
  
  // Academic
  attendancePercentage: number;
  enrolledCourses: string[];
  examResults: Record<string, number>; // courseId -> score
  academicValidated: boolean;
  certificateIssued: boolean;
  certificateId?: string;
  
  // Consent
  gdprConsent: boolean;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  hours: number;
  teacherId: string;
  teacherName: string;
  scheduleDay: 'Monday' | 'Thursday' | 'Saturday';
  scheduleTime: string;
  durationHours: number;
}

export interface Session {
  id: string;
  courseId: string;
  courseTitle: string;
  date: string; // YYYY-MM-DD
  dayOfWeek: 'Monday' | 'Thursday' | 'Saturday';
  startTime: string;
  endTime: string;
  deliveryMode: 'central' | 'satellite' | 'digital';
  zoomLink: string;
  zoomMeetingId: string;
  recordingUrl?: string;
  status: 'upcoming' | 'live' | 'completed';
}

export interface AttendanceRecord {
  id: string;
  sessionId: string;
  courseId: string;
  sessionDate: string;
  studentId: string;
  studentName: string;
  countryId: string;
  status: 'present' | 'absent' | 'excused';
  recordedBy: string;
  recordedAt: string;
  notes?: string;
}

export interface DocumentItem {
  id: string;
  code: string;
  title: string;
  category: string; // "01 - European Direction", "03 - Teaching Materials", etc.
  folder: string;
  version: string;
  language: LanguageCode;
  owner: string;
  countryScope: 'ALL' | string; // ALL or specific country code
  visibility: 'public' | 'students' | 'teachers' | 'coordinators' | 'secretariat' | 'admin';
  status: 'draft' | 'in_translation' | 'under_review' | 'approved' | 'published';
  translator?: string;
  reviewer?: string;
  approvedBy?: string;
  updatedAt: string;
  fileSize: string;
  contentSnippet?: string;
}

export interface TranslationAssignment {
  id: string;
  documentCode: string;
  documentTitle: string;
  sourceLanguage: LanguageCode;
  targetLanguage: LanguageCode;
  version: string;
  translatorName: string;
  reviewerName: string;
  status: 'assigned' | 'in_progress' | 'submitted_review' | 'approved' | 'published';
  dueDate: string;
  translatedText?: string;
  reviewNotes?: string;
}

export interface PaymentRecord {
  id: string;
  studentId: string;
  studentName: string;
  countryId: string;
  amount: number;
  currency: string;
  method: 'Bank Transfer' | 'Stripe / Card Token' | 'Local Collection';
  reference: string;
  paymentDate: string;
  status: 'completed' | 'pending' | 'reconciled' | 'failed';
  reconciliationNotes?: string;
}

export interface GovernanceIssue {
  id: string;
  title: string;
  countryId: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  owner: string;
  status: 'Open' | 'In Progress' | 'Escalated' | 'Resolved';
  dueDate: string;
  description: string;
  resolutionNotes?: string;
  createdAt: string;
}

export interface GovernanceMeeting {
  id: string;
  title: string;
  frequency: string;
  duration: string;
  participants: string;
  purpose: string;
  nextDate: string;
  zoomLink: string;
  agendaItems: string[];
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  action: string;
  objectType: string;
  objectId: string;
  ipAddress: string;
  securityStatus: 'Success' | 'Warning' | 'MFA Verified';
}

export interface ManagementKPIs {
  totalApplications: number;
  confirmedStudents: number;
  paymentRate: number; // %
  teachingMaterialReadiness: number; // %
  translationReadiness: number; // %
  platformAccountsCreated: number; // %
  attendanceRate: number; // %
  courseCompletionRate: number; // %
  examParticipationRate: number; // %
  coordinatorReportingRate: number; // %
  openCriticalIssues: number;
}
