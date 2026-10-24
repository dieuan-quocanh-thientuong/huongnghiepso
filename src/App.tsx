/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ActivePage, QuizResult, University } from './types/admissions';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { UniversitySearch } from './components/UniversitySearch';
import { UniversityDetailModal } from './components/UniversityDetailModal';
import { CompareModal } from './components/CompareModal';
import { GuideView } from './components/GuideView';
import { CounselingInquiryModal } from './components/CounselingInquiryModal';
import { Footer } from './components/Footer';
import { UNIVERSITIES_DATA } from './data/universitiesData';
import { AuthProvider, useAuth } from './context/AuthContext';
import {
  saveQuizResultToFirestore,
  fetchUserQuizHistory,
  saveUniversityToFirestore,
  removeUniversityFromFirestore,
  fetchUserSavedUniversities,
} from './services/firebaseService';

const STORAGE_KEY_SAVED_UNIS = 'chauthite_saved_universities_v1';
const STORAGE_KEY_LAST_RESULT = 'chauthite_last_quiz_result_v1';

function AppContent() {
  const { currentUser } = useAuth();
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [savedUniIds, setSavedUniIds] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<University[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryTargetMajor, setInquiryTargetMajor] = useState('');

  // Load saved universities and prior quiz result from localStorage on mount
  useEffect(() => {
    try {
      const savedRaw = localStorage.getItem(STORAGE_KEY_SAVED_UNIS);
      if (savedRaw) {
        setSavedUniIds(JSON.parse(savedRaw));
      }

      const resultRaw = localStorage.getItem(STORAGE_KEY_LAST_RESULT);
      if (resultRaw) {
        setQuizResult(JSON.parse(resultRaw));
      }
    } catch {
      // Ignore localStorage parse errors gracefully
    }
  }, []);

  // Sync with Firestore when user logs in
  useEffect(() => {
    if (!currentUser) return;

    let isMounted = true;
    const syncFromFirestore = async () => {
      try {
        // Fetch cloud-saved universities
        const cloudSaved = await fetchUserSavedUniversities(currentUser.uid);
        if (isMounted && cloudSaved && cloudSaved.length > 0) {
          setSavedUniIds((prev) => {
            const merged = Array.from(new Set([...prev, ...cloudSaved]));
            try {
              localStorage.setItem(STORAGE_KEY_SAVED_UNIS, JSON.stringify(merged));
            } catch {
              // ignore
            }
            return merged;
          });
        }

        // Fetch cloud quiz history if not present locally
        const quizHistory = await fetchUserQuizHistory(currentUser.uid);
        if (isMounted && quizHistory && quizHistory.length > 0) {
          const latest = quizHistory[0] as unknown as QuizResult;
          if (latest && latest.primaryType) {
            setQuizResult((current) => current || latest);
          }
        }
      } catch (err) {
        console.warn('Sync from Firestore:', err);
      }
    };

    syncFromFirestore();

    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  // Save favorites to localStorage and Firestore
  const handleToggleSave = useCallback(
    async (id: string) => {
      const isCurrentlySaved = savedUniIds.includes(id);
      const targetUni = UNIVERSITIES_DATA.find((u) => u.id === id);

      setSavedUniIds((prev) => {
        const updated = isCurrentlySaved
          ? prev.filter((item) => item !== id)
          : [...prev, id];
        try {
          localStorage.setItem(STORAGE_KEY_SAVED_UNIS, JSON.stringify(updated));
        } catch {
          // ignore
        }
        return updated;
      });

      // Sync with Firestore if logged in
      if (currentUser && targetUni) {
        try {
          if (isCurrentlySaved) {
            await removeUniversityFromFirestore(currentUser.uid, id);
          } else {
            await saveUniversityToFirestore(currentUser.uid, targetUni);
          }
        } catch (err) {
          console.warn('Firestore bookmark sync error:', err);
        }
      }
    },
    [currentUser, savedUniIds]
  );

  // Compare tray handlers
  const handleCompareToggle = (uni: University) => {
    setCompareList((prev) => {
      const exists = prev.some((item) => item.id === uni.id);
      if (exists) {
        return prev.filter((item) => item.id !== uni.id);
      } else {
        if (prev.length >= 3) {
          return [...prev.slice(1), uni];
        }
        return [...prev, uni];
      }
    });
  };

  const handleRemoveFromCompare = (id: string) => {
    setCompareList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  // Quiz completion handler
  const handleCompleteQuiz = async (result: QuizResult) => {
    setQuizResult(result);
    try {
      localStorage.setItem(STORAGE_KEY_LAST_RESULT, JSON.stringify(result));
    } catch {
      // ignore
    }

    // Persist to Firestore if user is logged in
    if (currentUser) {
      try {
        await saveQuizResultToFirestore(currentUser.uid, result);
      } catch (err) {
        console.warn('Failed to save quiz result to Firestore:', err);
      }
    }

    setActivePage('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setActivePage('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeQuiz = () => {
    setActivePage('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Universal Top Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedUniIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HeroSection
            setActivePage={setActivePage}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activePage === 'quiz' && (
          <QuizView
            onComplete={handleCompleteQuiz}
            onCancel={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'results' && (
          quizResult ? (
            <ResultView
              result={quizResult}
              onRetake={handleRetakeQuiz}
              onSelectUniversity={(uni) => setSelectedUniversity(uni)}
              setActivePage={setActivePage}
              onOpenInquiry={(targetMajor) => {
                setInquiryTargetMajor(targetMajor || '');
                setIsInquiryModalOpen(true);
              }}
            />
          ) : (
            <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Chưa có kết quả trắc nghiệm
              </h2>
              <p className="text-sm text-slate-600">
                Bạn chưa hoàn thành bài khảo sát định hướng RIASEC. Hãy bắt đầu ngay để nhận tư vấn phù hợp nhất.
              </p>
              <button
                onClick={handleStartQuiz}
                className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
              >
                Làm bài trắc nghiệm ngay
              </button>
            </div>
          )
        )}

        {activePage === 'universities' && (
          <UniversitySearch
            onSelectUniversity={(uni) => setSelectedUniversity(uni)}
            savedIds={savedUniIds}
            onToggleSave={handleToggleSave}
            compareList={compareList}
            onCompareToggle={handleCompareToggle}
            onOpenCompare={() => setIsCompareModalOpen(true)}
            onClearCompare={handleClearCompare}
          />
        )}

        {activePage === 'guide' && (
          <GuideView
            setActivePage={setActivePage}
            onStartQuiz={handleStartQuiz}
          />
        )}
      </main>

      {/* University Detail Modal */}
      <UniversityDetailModal
        university={selectedUniversity}
        onClose={() => setSelectedUniversity(null)}
        isSaved={selectedUniversity ? savedUniIds.includes(selectedUniversity.id) : false}
        onToggleSave={handleToggleSave}
        onCompareToggle={handleCompareToggle}
        isCompared={selectedUniversity ? compareList.some((c) => c.id === selectedUniversity.id) : false}
      />

      {/* Compare Modal */}
      {isCompareModalOpen && (
        <CompareModal
          universities={compareList}
          onClose={() => setIsCompareModalOpen(false)}
          onRemove={handleRemoveFromCompare}
          onSelect={(uni) => {
            setIsCompareModalOpen(false);
            setSelectedUniversity(uni);
          }}
        />
      )}

      {/* Counseling Inquiry Modal (Firebase Powered) */}
      <CounselingInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultTargetMajor={inquiryTargetMajor}
      />

      {/* Universal Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
