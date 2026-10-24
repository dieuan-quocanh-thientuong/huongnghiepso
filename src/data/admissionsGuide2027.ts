export interface GuideSection {
  id: string;
  title: string;
  summary: string;
  icon: string;
  items: {
    heading: string;
    content: string;
    badge?: string;
  }[];
}

export const ADMISSIONS_GUIDE_2027: GuideSection[] = [
  {
    id: 'exam_structure',
    title: 'Quy chế Thi Tốt nghiệp THPT 2027 (Chương trình GDPT 2018)',
    summary: 'Phương án thi theo mô hình 2 + 2: Tối ưu áp lực thi cử, tăng tính định hướng chuyên sâu.',
    icon: 'BookOpen',
    items: [
      {
        heading: 'Mô hình thi 2 + 2 chuẩn hóa',
        content: 'Thí sinh chỉ phải thi 4 môn: 2 môn bắt buộc gồm Toán học và Ngữ văn; cùng 2 môn tự chọn trong số các môn học ở lớp 12 (Ngoại ngữ, Lịch sử, Vật lí, Hóa học, Sinh học, Địa lí, Giáo dục kinh tế và pháp luật, Tin học, Công nghệ).',
        badge: 'Điểm cốt lõi 2027'
      },
      {
        heading: 'Định dạng đề thi & tư duy vận dụng',
        content: 'Đề thi trắc nghiệm áp dụng 3 dạng thức câu hỏi: Trắc nghiệm nhiều lựa chọn; Trắc nghiệm Đúng/Sai đa ý; và Trắc nghiệm trả lời ngắn (yêu cầu điền kết quả số học). Điều này loại bỏ hoàn toàn việc "khoanh bừa" may rủi và đo lường chính xác năng lực thực tế.',
        badge: 'Cấu trúc đề mới'
      },
      {
        heading: 'Ý nghĩa với việc chọn ngành đại học',
        content: 'Học sinh không còn phải dàn trải 6 môn thi như trước. Việc chọn 2 môn tự chọn đúng với tổ hợp thế mạnh (ví dụ: Toán + Văn + Lý + Anh, hoặc Toán + Văn + Hóa + Sinh) giúp bạn tập trung toàn lực để đạt điểm số tối đa cho ngành học mơ ước.',
        badge: 'Chiến lược điểm số'
      }
    ]
  },
  {
    id: 'dgnl_vnuhcm',
    title: 'Kỳ thi ĐGNL ĐHQG TP.HCM tại cụm thi An Giang',
    summary: 'Cánh cửa vàng vào ĐHQG TP.HCM và hơn 100 trường đại học lớn mà không cần đi xa.',
    icon: 'Compass',
    items: [
      {
        heading: 'Địa điểm thi thuận lợi ngay tại Long Xuyên',
        content: 'Học sinh THPT Châu Thị Tế không cần vất vả lên TP.HCM để thi ĐGNL. Trường Đại học An Giang (ĐHQG-HCM) là cụm thi thường niên chính thức của kỳ thi này, chỉ cách Châu Đốc hơn 1 giờ di chuyển xe.',
        badge: 'Đặc quyền học sinh An Giang'
      },
      {
        heading: 'Gia tăng cơ hội trúng tuyển sớm',
        content: 'Hầu hết các trường thành viên ĐHQG-HCM (Bách Khoa, KHTN, KHXH&NV, Kinh tế - Luật, CNTT, An Giang) và các trường lớn như UEH, Sư phạm Kỹ thuật dành từ 40% đến 70% chỉ tiêu cho phương thức này.',
        badge: 'Chỉ tiêu lớn'
      },
      {
        heading: 'Cấu trúc bài thi ĐGNL mới',
        content: 'Bài thi đánh giá 3 phần: Sử dụng ngôn ngữ (Tiếng Việt & Tiếng Anh); Toán học, tư duy logic và phân tích số liệu; Giải quyết vấn đề (Khoa học tự nhiên & Khoa học xã hội). Đề thi tập trung đánh giá tư duy lập luận thay vì học vẹt.',
        badge: '1200 điểm tối đa'
      }
    ]
  },
  {
    id: 'chau_thi_te_advice',
    title: 'Góc tư vấn dành riêng cho học sinh THPT Châu Thị Tế',
    summary: 'Phát huy lợi thế vị trí địa lý, chế độ ưu tiên vùng và sự hỗ trợ từ nhà trường.',
    icon: 'GraduationCap',
    items: [
      {
        heading: 'Điểm ưu tiên khu vực (KV1 / KV2-NT)',
        content: 'Học sinh tốt nghiệp tại các trường THPT khu vực biên giới Châu Đốc - An Giang được hưởng chính sách điểm ưu tiên đối tượng và khu vực theo quy định hiện hành của Bộ GD&ĐT. Mức điểm cộng này là lợi thế cạnh tranh rất quan trọng khi nộp hồ sơ vào các ngành hot có điểm chuẩn sát sao.',
        badge: 'Ưu tiên khu vực'
      },
      {
        heading: 'Lựa chọn giữa học tập tại ĐBSCL hay TP.HCM',
        content: 'Nếu gia đình muốn tối ưu học phí và chi phí sinh hoạt, Trường ĐH An Giang (thuộc ĐHQG-HCM) và ĐH Cần Thơ là lựa chọn tuyệt vời với chất lượng kiểm định quốc tế. Nếu muốn trải nghiệm môi trường kinh tế năng động bậc nhất, TP.HCM chỉ cách An Giang 5-6 giờ xe khách với hệ thống ký túc xá rộng mở.',
        badge: 'Cân đối tài chính'
      },
      {
        heading: 'Lời khuyên cho phụ huynh đồng hành cùng con',
        content: 'Phụ huynh nên tôn trọng sở thích và năng khiếu tự nhiên của con thông qua kết quả trắc nghiệm RIASEC. Tránh áp đặt định kiến "ngành thời thượng" mà bỏ qua năng lực thực tế. Hãy cùng con dự trù chi phí học phí 4 năm và chuẩn bị tâm lý tự lập.',
        badge: 'Đồng hành cùng phụ huynh'
      }
    ]
  }
];
