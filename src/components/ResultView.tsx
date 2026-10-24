import React from 'react';
import { QuizResult, RiasecType, University, ActivePage } from '../types/admissions';
import { RIASEC_CATEGORIES } from '../data/riasecQuestions';
import { UNIVERSITIES_DATA } from '../data/universitiesData';
import {
  Compass,
  CheckCircle2,
  Printer,
  RotateCcw,
  ArrowRight,
  ExternalLink,
  BookOpen,
  School,
  GraduationCap,
  MapPin,
  Calendar,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

interface ResultViewProps {
  result: QuizResult;
  onRetake: () => void;
  onSelectUniversity: (uni: University) => void;
  setActivePage: (page: ActivePage) => void;
  onOpenInquiry?: (targetMajor?: string) => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRetake,
  onSelectUniversity,
  setActivePage,
  onOpenInquiry,
}) => {
  const primaryCat = RIASEC_CATEGORIES[result.primaryType];
  const secondaryCat = RIASEC_CATEGORIES[result.secondaryType];
  const tertiaryCat = RIASEC_CATEGORIES[result.tertiaryType];

  // Find matching universities based on primary and secondary RIASEC tags
  const matchedUniversities = UNIVERSITIES_DATA.filter((uni) =>
    uni.riasecMatches.some(
      (m) => m === result.primaryType || m === result.secondaryType
    )
  );

  // Maximum possible score per RIASEC category is 20 (4 questions * 5 max)
  const maxCategoryScore = 20;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Top Banner / Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
            Báo cáo kết quả hướng nghiệp · THPT Châu Thị Tế Tuyển sinh 2027
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Kết Quả Tư Vấn Định Hướng Ngành Học
          </h1>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              Thực hiện ngày: {new Date(result.completedAt).toLocaleDateString('vi-VN')}
            </span>
            <span aria-hidden="true">·</span>
            <span>Mã định hướng: <strong>{result.code}</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 print:hidden">
          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>In / Lưu PDF</span>
          </button>
          <button
            onClick={onRetake}
            className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-slate-600" />
            <span>Làm lại trắc nghiệm</span>
          </button>
        </div>
      </div>

      {/* Main Profile Summary Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mã tính cách nghề nghiệp chủ đạo: {result.code}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              Bạn thuộc nhóm nổi trội nhất:{' '}
              <span className="text-emerald-700">{primaryCat.name}</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {primaryCat.description}
            </p>

            {/* Trait highlights */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                Đặc điểm nổi bật của bạn:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {primaryCat.personalityTraits.map((trait, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Breakdown side column */}
          <div className="lg:col-span-4 bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
            <h3 className="text-xs font-bold uppercase text-slate-700 tracking-wider">
              Tổ hợp 3 nhóm nổi trội:
            </h3>

            <div className="space-y-2.5">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">
                    1. {primaryCat.id} – {primaryCat.name.split('(')[0]}
                  </span>
                  <span className="font-bold text-emerald-700 font-mono">
                    {result.scores[primaryCat.id]} / {maxCategoryScore} đ
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Động lực và thế mạnh tự nhiên lớn nhất
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">
                    2. {secondaryCat.id} – {secondaryCat.name.split('(')[0]}
                  </span>
                  <span className="font-bold text-slate-700 font-mono">
                    {result.scores[secondaryCat.id]} / {maxCategoryScore} đ
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Kỹ năng bổ trợ quan trọng
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">
                    3. {tertiaryCat.id} – {tertiaryCat.name.split('(')[0]}
                  </span>
                  <span className="font-bold text-slate-700 font-mono">
                    {result.scores[tertiaryCat.id]} / {maxCategoryScore} đ
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Môi trường làm việc ưa thích
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Score Breakdown for all 6 RIASEC categories */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Biểu đồ phân bố điểm số cả 6 nhóm RIASEC
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Thể hiện mức độ hứng thú tương đối của bạn đối với từng lĩnh vực nghề nghiệp theo chuẩn tâm lý học Holland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(['R', 'I', 'A', 'S', 'E', 'C'] as RiasecType[]).map((type) => {
            const cat = RIASEC_CATEGORIES[type];
            const score = result.scores[type] || 0;
            const percentage = Math.round((score / maxCategoryScore) * 100);
            const isTop = type === result.primaryType;

            return (
              <div
                key={type}
                className={`p-4 rounded-xl border transition-all ${
                  isTop
                    ? 'border-emerald-300 bg-emerald-50/40 ring-1 ring-emerald-200'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-900">
                    {cat.name}
                  </span>
                  <span className="font-mono font-bold text-slate-700">
                    {score}/{maxCategoryScore} điểm ({percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isTop ? 'bg-emerald-600' : 'bg-slate-500'
                    }`}
                    style={{ width: `${Math.max(8, percentage)}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {cat.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended Majors & Careers Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Recommended Majors */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <GraduationCap className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base font-bold text-slate-900">
              Nhóm ngành học đại học phù hợp nhất
            </h2>
          </div>
          <p className="text-xs text-slate-600">
            Các ngành đào tạo có nội dung học tập và phương pháp nghiên cứu tương thích cao với kiểu tư duy của bạn:
          </p>
          <ul className="space-y-2.5">
            {primaryCat.recommendedMajors.map((major, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-800 p-2.5 rounded-lg bg-slate-50 border border-slate-100"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{major}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Suitable Future Careers */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Compass className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base font-bold text-slate-900">
              Vị trí nghề nghiệp & Cơ hội việc làm đến 2030
            </h2>
          </div>
          <p className="text-xs text-slate-600">
            Các chức danh công việc đang có nhu cầu nhân lực cao tại TP.HCM và khu vực Đồng bằng Sông Cửu Long:
          </p>
          <ul className="space-y-2.5">
            {primaryCat.suitableCareers.map((career, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-800 p-2.5 rounded-lg bg-slate-50 border border-slate-100"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="font-medium">{career}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suggested 2027 Subject Combinations based on chosen subjects */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <BookOpen className="w-5 h-5 text-emerald-700" />
          <h2 className="text-base font-bold text-slate-900">
            Tổ hợp môn thi tốt nghiệp THPT 2027 gợi ý cho bạn
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
          <span>Các môn bạn đã chọn theo chương trình GDPT 2018:</span>
          {result.selectedSubjects.map((sub, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded font-semibold text-xs border border-slate-200"
            >
              {sub}
            </span>
          ))}
        </div>

        <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-2">
          <div className="font-bold flex items-center gap-1.5 text-emerald-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Tổ hợp xét tuyển đại học lý tưởng cho nhóm {primaryCat.id}:</span>
          </div>
          <p className="leading-relaxed">
            Các môn học liên quan: <strong>{primaryCat.subjects2027.join(', ')}</strong>. Các tổ hợp xét tuyển phổ biến của nhóm ngành này tại các trường đại học gồm:{' '}
            <strong>A00 (Toán, Lý, Hóa)</strong>, <strong>A01 (Toán, Lý, Anh)</strong>, <strong>B00 (Toán, Hóa, Sinh)</strong>, <strong>D01 (Toán, Văn, Anh)</strong>, <strong>C00 (Văn, Sử, Địa)</strong> hoặc tổ hợp mới tích hợp Tin học/Công nghệ.
          </p>
        </div>
      </div>

      {/* Top Matching Universities */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <School className="w-5 h-5 text-emerald-700" />
              <span>Các trường Đại học tiêu biểu đào tạo nhóm ngành này</span>
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Chọn lọc từ các trường ĐHQG-HCM, ĐH Cần Thơ, ĐH An Giang và các trường công lập uy tín hàng đầu.
            </p>
          </div>
          <button
            onClick={() => {
              setActivePage('universities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
          >
            Xem tất cả 20+ trường <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matchedUniversities.slice(0, 6).map((uni) => (
            <div
              key={uni.id}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Mã: {uni.code}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {uni.regionLabel}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {uni.name}
                </h3>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{uni.city}</span>
                  </div>
                  <div>
                    Điểm chuẩn tham khảo: <strong>{uni.benchmarkRange}</strong>
                  </div>
                  <div>
                    Học phí: <strong>{uni.tuitionPerYear}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectUniversity(uni)}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                >
                  Xem chi tiết trường <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={uni.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
                >
                  Website <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Advice for Chau Thi Te Students & Parents */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900">
            Chiến lược hướng nghiệp dành riêng cho học sinh THPT Châu Thị Tế
          </h2>
          {onOpenInquiry && (
            <button
              onClick={() => onOpenInquiry(primaryCat.recommendedMajors[0])}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 self-start sm:self-center transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Gửi câu hỏi tới thầy cô Ban tuyển sinh</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">
              1. Lộ trình ôn luyện 2+2
            </h3>
            <p className="leading-relaxed text-slate-600">
              Tập trung ôn sâu 2 môn bắt buộc (Toán, Văn) kết hợp 2 môn tự chọn đúng thế mạnh. Đề thi 2027 có phần trắc nghiệm trả lời ngắn, cần rèn luyện tính toán chính xác và tránh học vẹt.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">
              2. Thi ĐGNL ĐHQG-HCM
            </h3>
            <p className="leading-relaxed text-slate-600">
              Đăng ký dự thi ĐGNL ĐHQG TP.HCM tại điểm thi Long Xuyên (ĐH An Giang). Kết quả này mở ra cơ hội vào Bách Khoa, KHTN, Kinh tế - Luật, ĐH An Giang từ rất sớm trước kỳ thi tốt nghiệp.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">
              3. Dự trù chi phí & Ký túc xá
            </h3>
            <p className="leading-relaxed text-slate-600">
              ĐH An Giang và ĐH Cần Thơ có mức học phí và sinh hoạt phí hợp lý, gần nhà. Nếu lên TP.HCM, đăng ký Ký túc xá ĐHQG TP.HCM (Thủ Đức) để tiết kiệm và an ninh tốt.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 print:hidden">
        <button
          onClick={onRetake}
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
        >
          Làm lại bài trắc nghiệm
        </button>

        <button
          onClick={() => {
            setActivePage('universities');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          <span>Khám phá & Tra cứu danh sách trường đại học</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
