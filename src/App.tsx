import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Public Website Views
import { PublicHome } from './components/public/PublicHome';
import { PublicProgramme } from './components/public/PublicProgramme';
import { PublicAdmissions } from './components/public/PublicAdmissions';
import { PublicCountries } from './components/public/PublicCountries';
import { PublicAbout } from './components/public/PublicAbout';
import { PublicContact } from './components/public/PublicContact';

// Internal Portal Shell & Components
import { PortalLayout } from './components/portal/PortalLayout';
import { DirectionDashboard } from './components/portal/DirectionDashboard';
import { StudentManagement } from './components/portal/StudentManagement';
import { CountryManagement } from './components/portal/CountryManagement';
import { LMSLearningPortal } from './components/portal/LMSLearningPortal';
import { AttendanceModule } from './components/portal/AttendanceModule';
import { TranslationWorkflow } from './components/portal/TranslationWorkflow';
import { DocumentRepository } from './components/portal/DocumentRepository';
import { ExamsAndCertificates } from './components/portal/ExamsAndCertificates';
import { FinanceTracking } from './components/portal/FinanceTracking';
import { GovernanceAndMeetings } from './components/portal/GovernanceAndMeetings';
import { AuditAndSecurity } from './components/portal/AuditAndSecurity';

function MainApp() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isPortalView, setIsPortalView] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const renderPortalContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DirectionDashboard setActiveTab={setActiveTab} />;
      case 'students':
        return <StudentManagement />;
      case 'country':
        return <CountryManagement />;
      case 'lms':
        return <LMSLearningPortal />;
      case 'attendance':
        return <AttendanceModule />;
      case 'translation':
        return <TranslationWorkflow />;
      case 'documents':
        return <DocumentRepository />;
      case 'exams':
        return <ExamsAndCertificates />;
      case 'finance':
        return <FinanceTracking />;
      case 'governance':
        return <GovernanceAndMeetings />;
      case 'audit':
        return <AuditAndSecurity />;
      default:
        return <DirectionDashboard setActiveTab={setActiveTab} />;
    }
  };

  const renderPublicContent = () => {
    switch (currentView) {
      case 'home':
        return <PublicHome setCurrentView={setCurrentView} setIsPortalView={setIsPortalView} />;
      case 'programme':
        return <PublicProgramme setCurrentView={setCurrentView} />;
      case 'admissions':
        return <PublicAdmissions setCurrentView={setCurrentView} />;
      case 'countries':
        return <PublicCountries setCurrentView={setCurrentView} />;
      case 'about':
        return <PublicAbout />;
      case 'contact':
        return <PublicContact />;
      default:
        return <PublicHome setCurrentView={setCurrentView} setIsPortalView={setIsPortalView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        isPortalView={isPortalView}
        setIsPortalView={setIsPortalView}
      />

      <div className="flex-1">
        {isPortalView ? (
          <PortalLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            {renderPortalContent()}
          </PortalLayout>
        ) : (
          <main className="min-h-[calc(100vh-200px)]">
            {renderPublicContent()}
          </main>
        )}
      </div>

      <Footer setCurrentView={(view) => {
        setIsPortalView(false);
        setCurrentView(view);
      }} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

