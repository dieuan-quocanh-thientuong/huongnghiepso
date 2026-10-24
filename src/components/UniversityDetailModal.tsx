import React from 'react';
import { University } from '../types/admissions';
import {
  X,
  MapPin,
  Globe,
  Phone,
  Bookmark,
  Building2,
  GraduationCap,
  Home,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface UniversityDetailModalProps {
  university: University | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onCompareToggle: (uni: University) => void;
  isCompared: boolean;
}

export const UniversityDetailModal: React.FC<UniversityDetailModalProps> = ({
  university,
  onClose,
  isSaved,
  onToggleSave,
  onCompareToggle,
  isCompared,
}) => {
  if (!university) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800">
              <span className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                MÃ TRƯỜNG: {university.code}
              </span>
              <span>·</span>
              <span className="text-slate-600 font-sans font-medium">
                {university.regionLabel}
              </span>
              <span>·</span>
              <span className="text-slate-600 font-sans font-medium">
                {university.typeLabel}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
              {university.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-start gap-2 text-slate-700">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Địa chỉ:</span>{' '}
                {university.address}
              </div>
            </div>

            <div className="flex items-start gap-2 text-slate-700">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Hotline tư vấn:</span>{' '}
                {university.contactPhone}
              </div>
            </div>

            <div className="flex items-start gap-2 text-slate-700">
              <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Điểm chuẩn tham khảo:</span>{' '}
                {university.benchmarkRange}
              </div>
            </div>

            <div className="flex items-start gap-2 text-slate-700">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Học phí ước tính:</span>{' '}
                {university.tuitionPerYear}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Điểm nổi bật & Lợi thế cho học sinh miền Tây</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700">
              {university.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Admission Methods 2027 */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Phương thức tuyển sinh dự kiến năm 2027</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {university.admissionMethods2027.map((method, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center gap-2 text-slate-800"
                >
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-[11px] shrink-0">
                    {idx + 1}
                  </span>
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Majors Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Các ngành đào tạo tiêu biểu & Tổ hợp xét tuyển</span>
            </h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Ngành đào tạo</th>
                    <th className="p-3">Tổ hợp môn xét tuyển</th>
                    <th className="p-3">Điểm chuẩn tham khảo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {university.programs.map((prog, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3 font-medium text-slate-900">
                        {prog.name}
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          Mã ngành: {prog.code}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {prog.subjectCombinations.map((comb, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[11px] font-mono text-slate-800"
                            >
                              {comb}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 font-semibold text-emerald-800 font-mono">
                        {prog.benchmarkScore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dormitory Info */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700">
            <Home className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">
                Thông tin Ký túc xá & Chỗ ở sinh viên:
              </span>
              <p className="mt-1 leading-relaxed">{university.dormitoryInfo}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(university.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isSaved ? 'fill-emerald-700 text-emerald-700' : 'text-slate-500'
                }`}
              />
              <span>{isSaved ? 'Đã lưu yêu thích' : 'Lưu trường này'}</span>
            </button>

            <button
              onClick={() => onCompareToggle(university)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-colors cursor-pointer ${
                isCompared
                  ? 'bg-sky-50 border-sky-300 text-sky-800'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{isCompared ? 'Đang so sánh' : '+ Thêm vào so sánh'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={university.website}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Cổng tuyển sinh chính thức</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
