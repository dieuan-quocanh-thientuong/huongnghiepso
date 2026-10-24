import React, { useState, useMemo } from 'react';
import { University } from '../types/admissions';
import { UNIVERSITIES_DATA } from '../data/universitiesData';
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  MapPin,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Scale,
  Sparkles,
} from 'lucide-react';

interface UniversitySearchProps {
  onSelectUniversity: (uni: University) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  compareList: University[];
  onCompareToggle: (uni: University) => void;
  onOpenCompare: () => void;
  onClearCompare: () => void;
}

export const UniversitySearch: React.FC<UniversitySearchProps> = ({
  onSelectUniversity,
  savedIds,
  onToggleSave,
  compareList,
  onCompareToggle,
  onOpenCompare,
  onClearCompare,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'angiang_cantho' | 'hcm'>('all');
  const [selectedScoreTier, setSelectedScoreTier] = useState<string>('all');
  const [selectedMajorField, setSelectedMajorField] = useState<string>('all');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  // Filtered universities calculation
  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES_DATA.filter((uni) => {
      // Saved only filter
      if (showSavedOnly && !savedIds.includes(uni.id)) {
        return false;
      }

      // Region filter
      if (selectedRegion !== 'all' && uni.region !== selectedRegion) {
        return false;
      }

      // Score tier filter
      if (selectedScoreTier === 'under_20' && uni.benchmarkMin > 20) return false;
      if (selectedScoreTier === '20_24' && (uni.benchmarkMin < 20 || uni.benchmarkMin > 24)) return false;
      if (selectedScoreTier === '24_27' && (uni.benchmarkMin < 23 || uni.benchmarkMin > 27)) return false;
      if (selectedScoreTier === 'over_27' && uni.benchmarkMin < 25) return false;

      // Major field filter
      if (selectedMajorField !== 'all') {
        const matchesMajor = uni.featuredMajors.some((m) =>
          m.toLowerCase().includes(selectedMajorField.toLowerCase())
        );
        const matchesProgram = uni.programs.some((p) =>
          p.name.toLowerCase().includes(selectedMajorField.toLowerCase())
        );
        if (!matchesMajor && !matchesProgram) return false;
      }

      // Search keyword filter
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase().trim();
        const matchesName = uni.name.toLowerCase().includes(term);
        const matchesShort = uni.shortName.toLowerCase().includes(term);
        const matchesCode = uni.code.toLowerCase().includes(term);
        const matchesCity = uni.city.toLowerCase().includes(term);
        const matchesMajors = uni.featuredMajors.some((m) =>
          m.toLowerCase().includes(term)
        );
        const matchesPrograms = uni.programs.some((p) =>
          p.name.toLowerCase().includes(term) || p.code.includes(term)
        );

        if (!matchesName && !matchesShort && !matchesCode && !matchesCity && !matchesMajors && !matchesPrograms) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedRegion, selectedScoreTier, selectedMajorField, showSavedOnly, savedIds]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedRegion('all');
    setSelectedScoreTier('all');
    setSelectedMajorField('all');
    setShowSavedOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
          Cổng thông tin tuyển sinh 2027 · THPT Châu Thị Tế
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Tra Cứu Thông Tin Các Trường Đại Học
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Tổng hợp thông tin tuyển sinh, mức học phí, điểm chuẩn tham khảo và phương thức xét tuyển 2027
          của các trường đại học tại khu vực ĐBSCL (An Giang, Cần Thơ) và TP. Hồ Chí Minh.
        </p>
      </div>

      {/* Search & Filter Controls Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5">
        {/* Search bar row */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên trường, mã trường (QSA, TCT, KSA...), ngành học (CNTT, Kinh tế, Y khoa...)"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-700 px-2 py-1"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Filter bar - Segmented buttons for Region */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-md">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedRegion === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả khu vực
            </button>
            <button
              onClick={() => setSelectedRegion('angiang_cantho')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedRegion === 'angiang_cantho'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              An Giang & ĐBSCL
            </button>
            <button
              onClick={() => setSelectedRegion('hcm')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedRegion === 'hcm'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              TP. Hồ Chí Minh
            </button>
          </div>

          {/* Quick toggle for saved items */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSavedOnly((prev) => !prev)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-colors cursor-pointer ${
                showSavedOnly
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${
                  showSavedOnly ? 'fill-emerald-700 text-emerald-700' : 'text-slate-400'
                }`}
              />
              <span>Trường đã lưu ({savedIds.length})</span>
            </button>

            {(searchTerm || selectedRegion !== 'all' || selectedScoreTier !== 'all' || selectedMajorField !== 'all' || showSavedOnly) && (
              <button
                onClick={handleResetFilters}
                className="px-2.5 py-1.5 text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                title="Đặt lại bộ lọc"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Đặt lại</span>
              </button>
            )}
          </div>
        </div>

        {/* Dropdowns for Field & Benchmark */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-slate-100">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Khối ngành đào tạo trọng điểm:
            </label>
            <select
              value={selectedMajorField}
              onChange={(e) => setSelectedMajorField(e.target.value)}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            >
              <option value="all">Tất cả khối ngành</option>
              <option value="Công nghệ">Kỹ thuật & Công nghệ số (CNTT, Cơ điện tử, AI)</option>
              <option value="Kinh tế">Kinh tế, Quản trị & Logistics</option>
              <option value="Y">Y Dược & Chăm sóc Sức khỏe</option>
              <option value="Sư phạm">Sư phạm & Giáo dục</option>
              <option value="Nông nghiệp">Nông nghiệp, Thú y & Môi trường</option>
              <option value="Luật">Luật học & Khoa học Xã hội</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mức điểm chuẩn tham khảo:
            </label>
            <select
              value={selectedScoreTier}
              onChange={(e) => setSelectedScoreTier(e.target.value)}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            >
              <option value="all">Tất cả các mức điểm</option>
              <option value="under_20">Dưới 20 điểm</option>
              <option value="20_24">Từ 20 đến 24 điểm</option>
              <option value="24_27">Từ 24 đến 27 điểm</option>
              <option value="over_27">Trên 27 điểm (Trường top đầu)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result Count and Quick Stats */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
        <span>
          Tìm thấy <strong className="text-slate-900">{filteredUniversities.length}</strong> trường đại học phù hợp
        </span>
        <div className="flex items-center gap-3">
          <span>* Điểm chuẩn tham khảo các năm gần nhất</span>
        </div>
      </div>

      {/* Universities Grid */}
      {filteredUniversities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => {
            const isSaved = savedIds.includes(uni.id);
            const isCompared = compareList.some((c) => c.id === uni.id);

            return (
              <div
                key={uni.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 p-5 shadow-xs transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Top line metadata: unboxed text with · */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {uni.code}
                      </span>
                      <span>{uni.typeLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{uni.regionLabel}</span>
                    </div>

                    <button
                      onClick={() => onToggleSave(uni.id)}
                      className="p-1 text-slate-400 hover:text-emerald-700 transition-colors"
                      title={isSaved ? 'Bỏ lưu' : 'Lưu trường'}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isSaved ? 'fill-emerald-700 text-emerald-700' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* University Name */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {uni.name}
                  </h3>

                  {/* Location & Key figures */}
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">{uni.city}</span>
                    </div>

                    <div className="flex items-baseline justify-between pt-1 border-t border-slate-100">
                      <span className="text-slate-500">Điểm chuẩn:</span>
                      <span className="font-bold text-emerald-800 font-mono">
                        {uni.benchmarkRange}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-500">Học phí:</span>
                      <span className="font-medium text-slate-800 text-right line-clamp-1">
                        {uni.tuitionPerYear.split('(')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Highlighted Majors */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mb-1.5">
                      Ngành tiêu biểu:
                    </div>
                    <div className="flex flex-wrap gap-1 text-xs text-slate-700">
                      {uni.featuredMajors.slice(0, 3).map((major, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[11px]"
                        >
                          {major}
                        </span>
                      ))}
                      {uni.featuredMajors.length > 3 && (
                        <span className="text-[11px] text-slate-400 self-center">
                          +{uni.featuredMajors.length - 3} ngành
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions bottom row */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectUniversity(uni)}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onCompareToggle(uni)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                        isCompared
                          ? 'bg-sky-50 border-sky-300 text-sky-800 font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {isCompared ? '✓ Đang so sánh' : '+ So sánh'}
                    </button>

                    <a
                      href={uni.website}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                      title="Website tuyển sinh"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Không tìm thấy trường nào phù hợp với bộ lọc
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Vui lòng thử tìm kiếm với từ khóa khác hoặc bấm nút đặt lại bộ lọc để xem toàn bộ danh sách trường.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Đặt lại tất cả bộ lọc
          </button>
        </div>
      )}

      {/* Floating Compare Tray (when 1 or more schools added to compare) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 max-w-xl w-[92%] sm:w-full bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700 flex items-center justify-between gap-4 animate-in slide-in-from-bottom-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold">
                Đã chọn {compareList.length}/3 trường để so sánh
              </div>
              <div className="text-[11px] text-slate-400 line-clamp-1">
                {compareList.map((c) => c.shortName).join(' · ')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClearCompare}
              className="text-xs text-slate-400 hover:text-white px-2 py-1"
            >
              Hủy
            </button>
            <button
              onClick={onOpenCompare}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              So sánh ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
