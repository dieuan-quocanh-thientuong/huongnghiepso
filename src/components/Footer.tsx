import React from 'react';
import { ActivePage } from '../types/admissions';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: School Identity */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">
                Trường THPT Châu Thị Tế
              </h3>
              <p className="text-xs text-emerald-400 font-medium mt-0.5">
                Ban Tư vấn Hướng nghiệp & Tuyển sinh 2027
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
              Ứng dụng hỗ trợ học sinh và phụ huynh THPT Châu Thị Tế (Phường Vĩnh Tế, Tỉnh An Giang)
              định hướng ngành học theo bài trắc nghiệm nghề nghiệp RIASEC chuẩn mực, nắm bắt
              phương án thi tốt nghiệp THPT 2027 mới nhất và tra cứu thông tin tuyển sinh các trường
              đại học trọng điểm miền Nam.
            </p>
            <div className="flex flex-col gap-2 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Phường Vĩnh Tế, Tỉnh An Giang</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hotline tư vấn tuyển sinh THPT: 0907.827.805</span>
              </div>
            </div>
            <div className="pt-2 text-xs text-emerald-400/90 border-t border-slate-800/80 space-y-1">
              <p>
                <strong>Giáo viên thực hiện phần mềm:</strong> Hồng Ngọc Diệu An – GV Tin học, THPT Châu Thị Tế
              </p>
              <p>
                <strong>Nhóm học sinh nghiên cứu:</strong> Lê Quốc Anh, Lê Thiên Tường
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Chức năng chính
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    setActivePage('quiz');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                >
                  Trắc nghiệm hướng nghiệp RIASEC
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('universities');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                >
                  Tra cứu trường đại học phía Nam
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('guide');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                >
                  Quy chế thi tốt nghiệp THPT 2027
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('guide');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                >
                  Kỳ thi ĐGNL ĐHQG-HCM tại An Giang
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Cổng thông tin liên kết
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://moet.gov.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  Bộ Giáo dục và Đào tạo
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://vnuhcm.edu.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  Đại học Quốc gia TP.HCM
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.agu.edu.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  Trường Đại học An Giang
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ctu.edu.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  Trường Đại học Cần Thơ
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet copyright & metadata */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 - 2027 Trường THPT Châu Thị Tế · Ban Tuyển sinh & Hướng nghiệp GDPT 2018</p>
          <div className="flex items-center gap-4">
            <span>Dữ liệu tuyển sinh tham khảo kỳ thi THPT 2027</span>
            <span aria-hidden="true">·</span>
            <span>Phiên bản dành cho học sinh & phụ huynh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
