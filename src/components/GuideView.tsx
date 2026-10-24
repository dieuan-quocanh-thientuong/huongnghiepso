import React from 'react';
import { ADMISSIONS_GUIDE_2027 } from '../data/admissionsGuide2027';
import { ActivePage } from '../types/admissions';
import {
  BookOpen,
  Compass,
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Calendar,
  UserCheck,
  Users,
} from 'lucide-react';

interface GuideViewProps {
  setActivePage: (page: ActivePage) => void;
  onStartQuiz: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({
  setActivePage,
  onStartQuiz,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div>
        <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
          Cẩm nang tuyển sinh 2027 · THPT Châu Thị Tế
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Quy Chế Tuyển Sinh 2027 & Chiến Lược Cho Học Sinh Châu Đốc
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Tổng hợp toàn bộ thông tin quan trọng về kỳ thi tốt nghiệp THPT theo Chương trình GDPT 2018,
          kỳ thi Đánh giá Năng lực ĐHQG TP.HCM tại cụm thi An Giang và cẩm nang đồng hành cùng phụ huynh.
        </p>
      </div>

      {/* Guide Sections */}
      <div className="space-y-10">
        {ADMISSIONS_GUIDE_2027.map((sec) => (
          <div
            key={sec.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6"
          >
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Chuyên đề hướng dẫn
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                {sec.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">{sec.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sec.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    {item.badge && (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">
                      {item.heading}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Checklist Timeline 2027 for 10th, 11th, 12th graders */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Lộ trình từng năm chuẩn bị cho kỳ thi Tuyển sinh 2027
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Các mốc hành động thiết thực dành cho học sinh THPT Châu Thị Tế
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
          {/* Lớp 10 */}
          <div className="p-5 rounded-xl border border-slate-200 space-y-3 bg-slate-50">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Giai đoạn Lớp 10</span>
              <span className="text-[11px] text-emerald-800 font-semibold">Khám phá</span>
            </div>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Làm trắc nghiệm RIASEC nhận diện sở thích và năng khiếu cá nhân.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Chọn tổ hợp môn học lựa chọn lớp 10 bám sát thế mạnh (KHTN hay KHXH).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Giữ vững nền tảng 2 môn bắt buộc: Toán và Ngữ văn.</span>
              </li>
            </ul>
          </div>

          {/* Lớp 11 */}
          <div className="p-5 rounded-xl border border-slate-200 space-y-3 bg-slate-50">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Giai đoạn Lớp 11</span>
              <span className="text-[11px] text-teal-800 font-semibold">Định hình</span>
            </div>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Khoanh vùng top 3-5 trường đại học mục tiêu (ĐHQG, ĐH Cần Thơ, ĐH An Giang...).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Rèn luyện kỹ năng giải quyết vấn đề và tư duy logic cho kỳ thi ĐGNL.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Ôn tập chứng chỉ ngoại ngữ (IELTS/VSTEP) nếu ngành xét tuyển ưu tiên.</span>
              </li>
            </ul>
          </div>

          {/* Lớp 12 */}
          <div className="p-5 rounded-xl border border-slate-200 space-y-3 bg-slate-50">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Giai đoạn Lớp 12</span>
              <span className="text-[11px] text-sky-800 font-semibold">Bứt phá</span>
            </div>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Đăng ký thi ĐGNL ĐHQG-HCM đợt 1 tại cụm thi Long Xuyên (tháng 3-4).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Hoàn tất hồ sơ xét tuyển sớm theo học bạ kết hợp.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Tập trung cao độ cho kỳ thi tốt nghiệp THPT 2027 với 4 môn thi chính thức.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project Research & Author Team Card */}
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
              Xây dựng cấu trúc phần mềm, thuật toán phân loại trắc nghiệm RIASEC và dữ liệu hướng nghiệp số cho học sinh THPT năm 2027.
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

      {/* Call to action */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold">
            Sẵn sàng tìm hiểu nhóm ngành phù hợp với bản thân?
          </h3>
          <p className="text-xs text-slate-400">
            Chỉ mất 5 phút làm trắc nghiệm RIASEC để nhận bản báo cáo định hướng chi tiết.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onStartQuiz}
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white transition-colors cursor-pointer"
          >
            Bắt đầu trắc nghiệm ngay
          </button>
          <button
            onClick={() => {
              setActivePage('universities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 font-medium text-xs text-white transition-colors cursor-pointer"
          >
            Tra cứu trường đại học
          </button>
        </div>
      </div>
    </div>
  );
};
