import React from 'react';
import { ActivePage } from '../types/admissions';
import { Compass, Search, BookOpen, GraduationCap, Building2, CheckCircle2, ArrowRight, UserCheck, Users } from 'lucide-react';
import heroImage from '../assets/images/hero_admissions_guidance_1791642402572.jpg';

interface HeroSectionProps {
  setActivePage: (page: ActivePage) => void;
  onStartQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  setActivePage,
  onStartQuiz,
}) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold text-emerald-800 tracking-wide uppercase">
                Trường THPT Châu Thị Tế · Phường Vĩnh Tế · Tỉnh An Giang
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
                Trợ lý tra cứu tuyển sinh – THPT Châu Thị Tế – Tuyển sinh 2027
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Ứng dụng đồng hành cùng quý phụ huynh và các em học sinh THPT trong hành trình khám phá
                sở thích nghề nghiệp theo mô hình Holland RIASEC, nắm bắt quy chế thi tốt nghiệp THPT 2027
                mới nhất và tra cứu thông tin tuyển sinh 20+ trường đại học uy tín hàng đầu.
              </p>

              {/* Required Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onStartQuiz}
                  className="px-6 py-3.5 text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <Compass className="w-5 h-5" />
                  <span>Bắt đầu tư vấn ngành học</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => {
                    setActivePage('universities');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border border-slate-300 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                >
                  <Search className="w-5 h-5 text-emerald-700" />
                  <span>Tra cứu trường đại học</span>
                </button>
              </div>

              {/* Zero-Pill Unboxed Metadata strip */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 font-medium">
                <span>Chương trình GDPT 2018</span>
                <span aria-hidden="true">·</span>
                <span>Mô hình thi 2 + 2</span>
                <span aria-hidden="true">·</span>
                <span>Trắc nghiệm RIASEC chuẩn hóa</span>
                <span aria-hidden="true">·</span>
                <span>Dữ liệu tuyển sinh cập nhật 2027</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Photography */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-16/10 lg:aspect-4/3">
                <img
                  src={heroImage}
                  alt="Học sinh THPT Châu Thị Tế thảo luận chọn ngành đại học"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white space-y-1">
                    <p className="text-xs font-medium text-emerald-300">
                      Tự tin bước vào kỳ thi tuyển sinh 2027
                    </p>
                    <p className="text-sm font-semibold">
                      Định hướng đúng đam mê – Vững vàng chọn trường đại học
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Research & Development Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-800/40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-2 border-b md:border-b-0 md:border-r border-emerald-800/60 pb-5 md:pb-0 md:pr-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>Giáo viên thực hiện phần mềm</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Hồng Ngọc Diệu An
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed">
                Giáo viên bộ môn Tin học – Trường THPT Châu Thị Tế
              </p>
              <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                Chủ nhiệm đề tài ứng dụng công nghệ thông tin trong định hướng nghề nghiệp và tra cứu tuyển sinh đại học cho học sinh THPT năm 2027.
              </p>
            </div>

            <div className="md:col-span-6 space-y-2 md:pl-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Nhóm học sinh thực hiện nghiên cứu</span>
              </div>
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Lê Quốc Anh</h4>
                    <span className="text-[11px] text-slate-300">Học sinh nghiên cứu khảo sát & tổng hợp dữ liệu</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Lê Thiên Tường</h4>
                    <span className="text-[11px] text-slate-300">Học sinh nghiên cứu phương án tuyển sinh 2027 & RIASEC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Các tính năng cốt lõi hỗ trợ bạn
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Thiết kế riêng cho học sinh trường THPT Châu Thị Tế và phụ huynh tại khu vực An Giang & Miền Tây.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-semibold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Trắc nghiệm RIASEC
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              24 câu hỏi đánh giá trực quan 6 nhóm tính cách nghề nghiệp: Kỹ thuật, Nghiên cứu, Nghệ thuật, Xã hội, Quản trị và Nghiệp vụ.
            </p>
            <button
              onClick={onStartQuiz}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 pt-1"
            >
              Làm bài ngay <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all space-y-3">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-semibold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Tổ hợp môn & Ngành học 2027
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tư vấn môn thi tự chọn theo chương trình GDPT 2018 (Toán, Văn bắt buộc + 2 môn tự chọn), khớp với điểm mạnh của từng bạn.
            </p>
            <button
              onClick={() => {
                setActivePage('guide');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 pt-1"
            >
              Xem quy chế <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-semibold">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              20+ Đại học Trọng điểm
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cơ sở dữ liệu chi tiết các trường ĐHQG-HCM, ĐH Cần Thơ, ĐH An Giang, UEH, Y Dược, Bách Khoa kèm học phí, điểm chuẩn và ký túc xá.
            </p>
            <button
              onClick={() => {
                setActivePage('universities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 pt-1"
            >
              Tra cứu ngay <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-semibold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Cẩm nang thi ĐGNL & Vùng
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hướng dẫn kỳ thi ĐGNL ĐHQG-HCM tổ chức tại cụm thi An Giang (Long Xuyên) và chính sách ưu tiên khu vực dành riêng cho học sinh Châu Đốc.
            </p>
            <button
              onClick={() => {
                setActivePage('guide');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 pt-1"
            >
              Xem hướng dẫn <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Advisory Note from School Counselor Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                Thông điệp từ Nhóm Nghiên cứu Ứng dụng
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Chuẩn bị sớm là chìa khóa mở cánh cửa đại học năm 2027
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Năm 2027 là cột mốc then chốt khi học sinh thi tốt nghiệp THPT theo chương trình GDPT 2018.
                Nhà trường khuyến khích các em thực hiện bài trắc nghiệm hướng nghiệp ngay từ hôm nay,
                trao đổi cùng thầy cô và cha mẹ để lựa chọn tổ hợp môn tự chọn tối ưu nhất cho ước mơ tương lai của mình.
              </p>
              <div className="flex flex-wrap gap-y-1 gap-x-4 pt-2 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Định hướng không phó mặc may rủi
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Cân đối học phí và điều kiện gia đình
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Luyện thi ĐGNL tại điểm thi An Giang
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <button
                onClick={onStartQuiz}
                className="w-full md:w-auto px-6 py-3 font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Bắt đầu bài trắc nghiệm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
