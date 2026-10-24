import React from 'react';
import { University } from '../types/admissions';
import { X, ExternalLink, Trash2 } from 'lucide-react';

interface CompareModalProps {
  universities: University[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onSelect: (uni: University) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  universities,
  onClose,
  onRemove,
  onSelect,
}) => {
  if (universities.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              So sánh thông tin các trường đại học
            </h2>
            <p className="text-xs text-slate-500">
              Đang so sánh {universities.length} trường được chọn
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-3 text-left w-36 text-slate-500 font-bold uppercase tracking-wider bg-slate-50">
                  Tiêu chí
                </th>
                {universities.map((uni) => (
                  <th key={uni.id} className="p-3 text-left font-bold text-slate-900 min-w-56">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-mono text-xs text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          {uni.code}
                        </span>
                        <h3 className="text-sm font-bold mt-1 text-slate-900 leading-snug">
                          {uni.shortName}
                        </h3>
                      </div>
                      <button
                        onClick={() => onRemove(uni.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        title="Xóa khỏi danh sách so sánh"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3 font-semibold bg-slate-50 text-slate-900">Khu vực</td>
                {universities.map((uni) => (
                  <td key={uni.id} className="p-3">{uni.regionLabel} ({uni.city})</td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50 text-slate-900">Loại hình</td>
                {universities.map((uni) => (
                  <td key={uni.id} className="p-3">{uni.typeLabel}</td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50 text-slate-900">Điểm chuẩn tham khảo</td>
                {universities.map((uni) => (
                  <td key={uni.id} className="p-3 font-bold text-emerald-800 font-mono">
                    {uni.benchmarkRange}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50 text-slate-900">Học phí / năm</td>
                {universities.map((uni) => (
                  <td key={uni.id} className="p-3 font-medium text-slate-900">
                    {uni.tuitionPerYear}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50 text-slate-900">Các ngành thế mạnh</td>
                {universities.map((uni) => (
                  <td key={uni.id} className="p-3">
                    <ul className="space-y-1">
                      {uni.featuredMajors.slice(0, 4).map((m, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50 text-slate-900">Phương thức tuyển sinh 2027</td>
                {universities.map((uni) => (
                  <td key={uni.id} className="p-3">
                    <ul className="space-y-1">
                      {uni.admissionMethods2027.map((m, idx) => (
                        <li key={idx} className="text-slate-600">· {m}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50 text-slate-900">Ký túc xá & Chỗ ở</td>
                {universities.map((uni) => (
                  <td key={uni.id} className="p-3 text-slate-600">
                    {uni.dormitoryInfo}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold bg-slate-50 text-slate-900">Hành động</td>
                {universities.map((uni) => (
                  <td key={uni.id} className="p-3">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          onSelect(uni);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-md bg-emerald-700 text-white font-semibold hover:bg-emerald-800 text-xs transition-colors"
                      >
                        Xem chi tiết
                      </button>
                      <a
                        href={uni.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-500 hover:text-emerald-700 flex items-center gap-1 justify-center"
                      >
                        Website tuyển sinh <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Đóng bảng so sánh
          </button>
        </div>
      </div>
    </div>
  );
};
