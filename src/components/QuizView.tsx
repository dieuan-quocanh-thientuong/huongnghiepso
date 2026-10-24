import React, { useState } from 'react';
import {
  QUIZ_QUESTIONS,
  HIGH_SCHOOL_SUBJECTS_2027,
  ADMISSION_SCORE_RANGES,
  RIASEC_CATEGORIES,
} from '../data/riasecQuestions';
import { QuizResult, RiasecType } from '../types/admissions';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RotateCcw,
} from 'lucide-react';

interface QuizViewProps {
  onComplete: (result: QuizResult) => void;
  onCancel: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onComplete, onCancel }) => {
  // Store responses: questionId -> value (1 to 5)
  const [answers, setAnswers] = useState<Record<number, number>>({});
  // Selected elective subjects (up to 2 chosen)
  const [selectedElectives, setSelectedElectives] = useState<string[]>([
    'physics',
    'english',
  ]);
  // Selected target score
  const [targetScore, setTargetScore] = useState<string>('20_24');
  // Current active step/batch of questions
  const [currentStep, setCurrentStep] = useState<number>(0);
  const questionsPerPage = 4;
  const totalSteps = Math.ceil(QUIZ_QUESTIONS.length / questionsPerPage);

  const startIdx = currentStep * questionsPerPage;
  const currentQuestions = QUIZ_QUESTIONS.slice(
    startIdx,
    startIdx + questionsPerPage
  );

  const totalAnswered = Object.keys(answers).length;
  const progressPercent = Math.round(
    (totalAnswered / QUIZ_QUESTIONS.length) * 100
  );

  const handleSelectAnswer = (questionId: number, rating: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: rating,
    }));
  };

  const toggleElective = (subjectId: string) => {
    if (selectedElectives.includes(subjectId)) {
      setSelectedElectives((prev) => prev.filter((id) => id !== subjectId));
    } else {
      if (selectedElectives.length >= 2) {
        // replace earliest
        setSelectedElectives((prev) => [prev[1], subjectId]);
      } else {
        setSelectedElectives((prev) => [...prev, subjectId]);
      }
    }
  };

  const handleFinish = () => {
    // Calculate RIASEC scores
    const scores: Record<RiasecType, number> = {
      R: 0,
      I: 0,
      A: 0,
      S: 0,
      E: 0,
      C: 0,
    };

    QUIZ_QUESTIONS.forEach((q) => {
      const score = answers[q.id] || 3; // default neutral if somehow unanswered
      scores[q.category] += score;
    });

    // Sort categories by highest score
    const sorted = (Object.keys(scores) as RiasecType[]).sort(
      (a, b) => scores[b] - scores[a]
    );

    const primaryType = sorted[0];
    const secondaryType = sorted[1];
    const tertiaryType = sorted[2];
    const code = `${primaryType}${secondaryType}${tertiaryType}`;

    const electiveNames = selectedElectives.map(
      (id) =>
        HIGH_SCHOOL_SUBJECTS_2027.find((s) => s.id === id)?.name || id
    );

    const result: QuizResult = {
      scores,
      primaryType,
      secondaryType,
      tertiaryType,
      code,
      completedAt: new Date().toISOString(),
      selectedSubjects: ['Toán', 'Ngữ văn', ...electiveNames],
      targetScoreRange: targetScore,
    };

    onComplete(result);
  };

  const canProceedCurrentPage = currentQuestions.every(
    (q) => answers[q.id] !== undefined
  );

  const isFinalStep = currentStep === totalSteps - 1;

  const currentCategoryType = currentQuestions[0]?.category;
  const currentCategoryInfo = currentCategoryType
    ? RIASEC_CATEGORIES[currentCategoryType]
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wide uppercase">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Trắc nghiệm định hướng nghề nghiệp RIASEC chuẩn hóa</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Khám phá năng khiếu và nhóm ngành tương lai
            </h1>
          </div>
          <button
            onClick={onCancel}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 self-start sm:self-center font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Thoát về trang chủ</span>
          </button>
        </div>

        {/* Progress Bar & Counter */}
        <div className="pt-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
            <span>
              Phần {currentStep + 1} / {totalSteps}:{' '}
              <strong className="text-slate-900">
                {currentCategoryInfo?.name || 'Đánh giá'}
              </strong>
            </span>
            <span>
              Đã trả lời: {totalAnswered} / {QUIZ_QUESTIONS.length} câu (
              {progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 italic pt-1">
            * Hãy trả lời theo đúng sở thích tự nhiên và mong muốn thực tế nhất
            của bạn, không có câu trả lời nào là đúng hay sai.
          </p>
        </div>
      </div>

      {/* Category Context Banner */}
      {currentCategoryInfo && (
        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shrink-0">
            <HelpCircle className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              {currentCategoryInfo.fullName}
            </h2>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              {currentCategoryInfo.tagline}
            </p>
          </div>
        </div>
      )}

      {/* Questions Stack */}
      <div className="space-y-4 mb-8">
        {currentQuestions.map((q, idx) => {
          const currentVal = answers[q.id];
          const questionNumber = startIdx + idx + 1;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-xl border p-5 sm:p-6 transition-all ${
                currentVal !== undefined
                  ? 'border-emerald-300 ring-1 ring-emerald-100 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-800 text-xs font-bold shrink-0">
                    {questionNumber}
                  </span>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {q.question}
                    </p>
                    <span className="text-xs text-slate-500 mt-1 block">
                      Khía cạnh: {q.context}
                    </span>
                  </div>
                </div>
                {currentVal !== undefined && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
              </div>

              {/* 5-Level Rating Buttons */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 pt-2">
                {[
                  {
                    val: 1,
                    label: 'Rất không thích',
                    short: 'Hoàn toàn không',
                  },
                  { val: 2, label: 'Ít thích', short: 'Không thích' },
                  { val: 3, label: 'Bình thường', short: 'Trung lập' },
                  { val: 4, label: 'Khá thích', short: 'Có thích' },
                  { val: 5, label: 'Rất thích', short: 'Rất thích thú' },
                ].map((option) => {
                  const isSelected = currentVal === option.val;
                  return (
                    <button
                      key={option.val}
                      type="button"
                      onClick={() => handleSelectAnswer(q.id, option.val)}
                      className={`flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-lg border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span className="text-sm sm:text-base font-bold mb-0.5">
                        {option.val}
                      </span>
                      <span className="hidden sm:inline text-[11px] leading-tight text-center">
                        {option.label}
                      </span>
                      <span className="sm:hidden text-[10px] leading-tight text-center">
                        {option.short}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* On Final Step: High School GDPT 2018 Electives Selection */}
      {isFinalStep && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              Chọn tổ hợp môn tự chọn cho kỳ thi THPT 2027 (GDPT 2018)
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Theo quy chế thi tốt nghiệp 2027, bạn thi bắt buộc <strong>Toán & Ngữ văn</strong>, và chọn thêm <strong>2 môn tự chọn</strong> dưới đây:
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-2">
              <span>Môn tự chọn dự kiến (chọn tối đa 2 môn thế mạnh của bạn):</span>
              <span className="text-emerald-700 font-bold">
                Đã chọn: {selectedElectives.length}/2 môn
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {HIGH_SCHOOL_SUBJECTS_2027.filter((s) => !s.compulsory).map((subject) => {
                const isChecked = selectedElectives.includes(subject.id);
                return (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => toggleElective(subject.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-xs font-medium transition-all text-left cursor-pointer ${
                      isChecked
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span>{subject.name}</span>
                    {isChecked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Target Score Range */}
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-800 mb-2">
              Mục tiêu điểm thi tốt nghiệp THPT 2027 bạn kỳ vọng:
            </label>
            <div className="space-y-2">
              {ADMISSION_SCORE_RANGES.map((range) => (
                <label
                  key={range.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors text-xs ${
                    targetScore === range.id
                      ? 'bg-emerald-50 border-emerald-600 text-slate-900 font-semibold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="score_range"
                    value={range.id}
                    checked={targetScore === range.id}
                    onChange={() => setTargetScore(range.id)}
                    className="text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          type="button"
          disabled={currentStep === 0}
          onClick={() => {
            setCurrentStep((prev) => Math.max(0, prev - 1));
            window.scrollTo({ top: 120, behavior: 'smooth' });
          }}
          className={`px-5 py-2.5 rounded-lg border text-sm font-semibold flex items-center gap-2 transition-all ${
            currentStep === 0
              ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400 bg-white'
              : 'border-slate-300 text-slate-700 bg-white hover:bg-slate-50 cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại</span>
        </button>

        {!isFinalStep ? (
          <button
            type="button"
            disabled={!canProceedCurrentPage}
            onClick={() => {
              setCurrentStep((prev) => Math.min(totalSteps - 1, prev + 1));
              window.scrollTo({ top: 120, behavior: 'smooth' });
            }}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              canProceedCurrentPage
                ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Phần tiếp theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            disabled={totalAnswered < QUIZ_QUESTIONS.length}
            onClick={handleFinish}
            className={`px-7 py-3 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer ${
              totalAnswered >= QUIZ_QUESTIONS.length
                ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Hoàn thành & Xem kết quả tư vấn</span>
          </button>
        )}
      </div>

      {!canProceedCurrentPage && (
        <div className="flex items-center gap-2 text-xs text-amber-700 justify-end pt-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Vui lòng chọn mức độ cho cả 4 câu hỏi ở trên để tiếp tục.</span>
        </div>
      )}
    </div>
  );
};
