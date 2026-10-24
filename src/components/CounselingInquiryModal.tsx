import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { submitCounselingInquiry } from '../services/firebaseService';

interface CounselingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTargetMajor?: string;
}

export const CounselingInquiryModal: React.FC<CounselingInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTargetMajor = '',
}) => {
  const { currentUser, signInWithGoogle } = useAuth();
  const [studentName, setStudentName] = useState(currentUser?.displayName || '');
  const [studentClass, setStudentClass] = useState('');
  const [phone, setPhone] = useState('');
  const [targetMajor, setTargetMajor] = useState(defaultTargetMajor);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      setErrorMsg('Vui lòng đăng nhập Google để gửi câu hỏi tư vấn.');
      return;
    }
    if (!studentName.trim() || !content.trim()) {
      setErrorMsg('Vui lòng điền họ tên và nội dung câu hỏi.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const id = await submitCounselingInquiry(currentUser.uid, {
        studentName: studentName.trim(),
        studentClass: studentClass.trim(),
        phone: phone.trim(),
        targetMajor: targetMajor.trim(),
        content: content.trim(),
      });
      setSubmittedId(id);
    } catch (err) {
      console.error(err);
      setErrorMsg('Có lỗi xảy ra khi gửi câu hỏi. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedId(null);
    setContent('');
    setErrorMsg(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Gửi câu hỏi tư vấn tuyển sinh
              </h3>
              <p className="text-xs text-slate-500">
                Ban Tư vấn Tuyển sinh 2027 · THPT Châu Thị Tế
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submittedId ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Đã gửi câu hỏi thành công!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Câu hỏi của bạn đã được lưu trữ an toàn trên cơ sở dữ liệu Firebase (Mã: <strong>{submittedId}</strong>).
                Thầy cô Ban tư vấn sẽ liên hệ giải đáp cho bạn trong thời gian sớm nhất.
              </p>
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                Đóng thông báo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {!currentUser && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-amber-800">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">Bạn cần đăng nhập để gửi câu hỏi</p>
                    <button
                      type="button"
                      onClick={() => signInWithGoogle()}
                      className="text-xs underline font-bold hover:text-amber-950 cursor-pointer"
                    >
                      Bấm vào đây để đăng nhập nhanh bằng Google
                    </button>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Họ và tên học sinh / phụ huynh: <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Lớp / Trường:
                  </label>
                  <input
                    type="text"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    placeholder="Ví dụ: 11A2 - THPT Châu Thị Tế"
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Số điện thoại liên hệ:
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ví dụ: 0912.xxx.xxx"
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Ngành hoặc trường đại học đang băn khoăn:
                </label>
                <input
                  type="text"
                  value={targetMajor}
                  onChange={(e) => setTargetMajor(e.target.value)}
                  placeholder="Ví dụ: Công nghệ thông tin ĐH An Giang / Bách Khoa"
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Nội dung câu hỏi cần tư vấn: <span className="text-rose-600">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Nhập chi tiết thắc mắc về tổ hợp môn, học phí, điểm chuẩn hoặc phương thức xét tuyển..."
                  className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !currentUser}
                  className={`px-5 py-2 rounded-lg font-semibold text-white flex items-center gap-1.5 cursor-pointer ${
                    isSubmitting || !currentUser
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-emerald-700 hover:bg-emerald-800'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Đang gửi...' : 'Gửi câu hỏi'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
