import { University } from '../types/admissions';

export const UNIVERSITIES_DATA: University[] = [
  {
    id: 'agu',
    code: 'QSA',
    name: 'Trường Đại học An Giang – Đại học Quốc gia TP.HCM',
    shortName: 'ĐH An Giang (AGU)',
    region: 'angiang_cantho',
    regionLabel: 'An Giang & ĐBSCL',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Long Xuyên, Tỉnh An Giang',
    address: 'Số 18 Ung Văn Khiêm, P. Đông Xuyên, TP. Long Xuyên, Tỉnh An Giang',
    website: 'https://www.agu.edu.vn',
    tuitionPerYear: '14 - 18 triệu VNĐ/năm (Chính sách ưu đãi ĐHQG-HCM)',
    benchmarkRange: '18.0 - 26.5 điểm',
    benchmarkMin: 18.0,
    featuredMajors: ['Sư phạm Toán', 'Sư phạm Tiếng Anh', 'Công nghệ Thông tin', 'Kinh tế Quốc tế', 'Nông nghiệp Công nghệ cao', 'Khoa học Môi trường'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Đánh giá năng lực ĐHQG-HCM (có điểm thi ngay tại Long Xuyên)',
      'Ưu tiên xét tuyển theo quy định ĐHQG-HCM',
      'Xét tuyển thẳng học sinh giỏi trường THPT trọng điểm'
    ],
    riasecMatches: ['S', 'I', 'E', 'R'],
    highlights: [
      'Thành viên chính thức của Đại học Quốc gia TP.HCM với bằng cấp chuẩn quốc gia',
      'Địa điểm học tập ngay tại tỉnh nhà An Giang, tiết kiệm tối đa chi phí sinh hoạt cho học sinh Châu Đốc',
      'Chế độ miễn học phí ngành Sư phạm và sinh hoạt phí 3.63 triệu/tháng theo Nghị định 116',
      'Có điểm thi Đánh giá năng lực ĐHQG-HCM thường niên'
    ],
    dormitoryInfo: 'Ký túc xá khang trang ngay trong khuôn viên trường với hơn 2.000 chỗ, chi phí sinh viên chỉ từ 150.000đ/tháng',
    contactPhone: '0296 6256 565 - 0797 222 555',
    programs: [
      { code: '7140209', name: 'Sư phạm Toán học', subjectCombinations: ['A00 (Toán, Lý, Hóa)', 'A01 (Toán, Lý, Anh)'], benchmarkScore: '24.5 - 26.0', employmentOutlook: 'Rất cao (Được tuyển thẳng viên chức giáo dục)' },
      { code: '7140231', name: 'Sư phạm Tiếng Anh', subjectCombinations: ['D01 (Toán, Văn, Anh)'], benchmarkScore: '25.0 - 26.8', employmentOutlook: 'Rất cao' },
      { code: '7480201', name: 'Công nghệ Thông tin', subjectCombinations: ['A00', 'A01', 'D01'], benchmarkScore: '21.0 - 23.5', employmentOutlook: 'Nhu cầu chuyển đổi số miền Tây rất lớn' },
      { code: '7340101', name: 'Quản trị Kinh doanh', subjectCombinations: ['A00', 'A01', 'D01', 'D07'], benchmarkScore: '20.0 - 22.5', employmentOutlook: 'Phát triển thương mại biên giới An Giang & ĐBSCL' },
      { code: '7620110', name: 'Khoa học Cây trồng / Nông nghiệp Công nghệ cao', subjectCombinations: ['B00 (Toán, Hóa, Sinh)', 'A00'], benchmarkScore: '18.0 - 20.0', employmentOutlook: 'Doanh nghiệp xuất khẩu lúa gạo & thủy sản săn đón' }
    ]
  },
  {
    id: 'ctu',
    code: 'TCT',
    name: 'Trường Đại học Cần Thơ',
    shortName: 'ĐH Cần Thơ (CTU)',
    region: 'angiang_cantho',
    regionLabel: 'Cần Thơ & ĐBSCL',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Ninh Kiều, TP. Cần Thơ',
    address: 'Khu II, Đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ',
    website: 'https://tuyensinh.ctu.edu.vn',
    tuitionPerYear: '18 - 24 triệu VNĐ/năm',
    benchmarkRange: '19.0 - 27.5 điểm',
    benchmarkMin: 19.0,
    featuredMajors: ['Công nghệ Thông tin', 'Kỹ thuật Phần mềm', 'Kinh doanh Quốc tế', 'Logistics', 'Kỹ thuật Cơ điện tử', 'Thú y', 'Luật'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Đánh giá năng lực V-SAT ĐH Cần Thơ',
      'Đánh giá năng lực ĐHQG-HCM',
      'Xét tuyển học bạ THPT kết hợp'
    ],
    riasecMatches: ['I', 'R', 'E', 'S', 'C'],
    highlights: [
      'Trung tâm đại học đào tạo đa ngành lớn nhất Đồng bằng Sông Cửu Long',
      'Cơ sở vật chất hiện đại chuẩn quốc tế JICA tài trợ, khuôn viên rộng rãi xanh mát',
      'Mạng lưới cựu sinh viên rộng khắp các tỉnh Tây Nam Bộ',
      'Giao thông thuận tiện di chuyển từ Châu Đốc (tuyến xe khách trực tiếp 2.5 giờ)'
    ],
    dormitoryInfo: 'Ký túc xá gần 10.000 chỗ ở với đầy đủ tiện ích thể thao, nhà ăn sinh viên, wifi',
    contactPhone: '0292 3872 728',
    programs: [
      { code: '7480103', name: 'Kỹ thuật Phần mềm (Chất lượng cao & Chuẩn)', subjectCombinations: ['A00', 'A01'], benchmarkScore: '24.0 - 26.0', employmentOutlook: 'Top ngành có mức lương khởi điểm cao nhất vùng' },
      { code: '7340120', name: 'Kinh doanh Quốc tế', subjectCombinations: ['A00', 'A01', 'D01'], benchmarkScore: '24.5 - 26.2', employmentOutlook: 'Rất cao tại các tập đoàn logistics & xuất nhập khẩu' },
      { code: '7520114', name: 'Kỹ thuật Cơ điện tử', subjectCombinations: ['A00', 'A01'], benchmarkScore: '22.5 - 24.5', employmentOutlook: 'Tự động hóa nhà máy chế biến nông thủy sản' },
      { code: '7380101', name: 'Luật (Chuyên ngành Luật Hành chính & Thương mại)', subjectCombinations: ['C00', 'D01', 'A01'], benchmarkScore: '24.0 - 26.5', employmentOutlook: 'Tòa án, sở ban ngành và doanh nghiệp' }
    ]
  },
  {
    id: 'ctump',
    code: 'YCT',
    name: 'Trường Đại học Y Dược Cần Thơ',
    shortName: 'ĐH Y Dược Cần Thơ (CTUMP)',
    region: 'angiang_cantho',
    regionLabel: 'Cần Thơ & ĐBSCL',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Ninh Kiều, TP. Cần Thơ',
    address: '179 Nguyễn Văn Cừ, P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ',
    website: 'https://ctump.edu.vn',
    tuitionPerYear: '42 - 55 triệu VNĐ/năm',
    benchmarkRange: '21.0 - 27.2 điểm',
    benchmarkMin: 21.0,
    featuredMajors: ['Y khoa (Bác sĩ)', 'Răng Hàm Mặt', 'Dược học', 'Y học Cổ truyền', 'Kỹ thuật Xét nghiệm Y học', 'Điều dưỡng'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027 (Tổ hợp B00 Toán, Hóa, Sinh)',
      'Xét tuyển thẳng học sinh giỏi quốc gia',
      'Đánh giá năng lực chuyên biệt khối ngành sức khỏe'
    ],
    riasecMatches: ['I', 'S'],
    highlights: [
      'Cái nôi đào tạo bác sĩ, dược sĩ hàng đầu cho toàn bộ 13 tỉnh Đồng bằng Sông Cửu Long',
      'Bệnh viện Trường ĐH Y Dược Cần Thơ quy mô lớn cho sinh viên thực tập lâm sàng',
      'Chính sách đào tạo theo địa chỉ cho các tỉnh thành như An Giang'
    ],
    dormitoryInfo: 'Ký túc xá nội trú sinh viên y khoa nằm gần bệnh viện thực hành',
    contactPhone: '0292 3739 730',
    programs: [
      { code: '7720101', name: 'Y khoa (Bác sĩ Đa khoa)', subjectCombinations: ['B00 (Toán, Hóa, Sinh)'], benchmarkScore: '25.5 - 27.2', employmentOutlook: '100% có việc làm tại các bệnh viện tỉnh và trung ương' },
      { code: '7720201', name: 'Dược học', subjectCombinations: ['A00', 'B00'], benchmarkScore: '24.0 - 25.8', employmentOutlook: 'Chuỗi nhà thuốc, viện kiểm nghiệm, hãng dược' },
      { code: '7720501', name: 'Điều dưỡng & Hộ sinh', subjectCombinations: ['B00'], benchmarkScore: '20.5 - 22.5', employmentOutlook: 'Nhu cầu cao tại các cơ sở y tế trong nước và xuất khẩu Đức, Nhật' }
    ]
  },
  {
    id: 'hcmut',
    code: 'QSB',
    name: 'Trường Đại học Bách Khoa – Đại học Quốc gia TP.HCM',
    shortName: 'Bách Khoa TP.HCM (HCMUT)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Quận 10 & TP. Thủ Đức, TP.HCM',
    address: '268 Lý Thường Kiệt, Phường 14, Quận 10, TP. Hồ Chí Minh',
    website: 'https://tuyensinh.hcmut.edu.vn',
    tuitionPerYear: '30 - 36 triệu VNĐ/năm (Chương trình tiêu chuẩn)',
    benchmarkRange: 'Đánh giá năng lực + THPT: Hệ số quy đổi 75 - 90/100',
    benchmarkMin: 24.5,
    featuredMajors: ['Khoa học Máy tính', 'Kỹ thuật Cơ điện tử', 'Kỹ thuật Điện tử - Viễn thông & Bán dẫn', 'Kỹ thuật Hóa học', 'Logistics'],
    admissionMethods2027: [
      'Phương thức xét tuyển kết hợp toàn diện (ĐGNL ĐHQG-HCM 70% + Điểm THPT 20% + Năng lực cá nhân 10%)',
      'Xét tuyển thẳng theo quy chế Bộ GD&ĐT',
      'Ưu tiên xét tuyển ĐHQG-HCM dành cho trường THPT đạt chuẩn'
    ],
    riasecMatches: ['R', 'I'],
    highlights: [
      'Trường đại học kỹ thuật hàng đầu Việt Nam, đạt chuẩn kiểm định quốc tế ABET (Hoa Kỳ)',
      'Mũi nhọn đào tạo công nghệ vi mạch bán dẫn và trí tuệ nhân tạo của quốc gia',
      'Ký túc xá Bách Khoa tại Q.10 và KTX ĐHQG TP.HCM quy mô lớn nhất Đông Nam Á'
    ],
    dormitoryInfo: 'Ký túc xá Q.10 trung tâm TP.HCM và Ký túc xá ĐHQG Thủ Đức hiện đại',
    contactPhone: '028 3865 1670',
    programs: [
      { code: '7480101', name: 'Khoa học Máy tính', subjectCombinations: ['A00', 'A01'], benchmarkScore: '27.5 - 29.0', employmentOutlook: 'Mức thu nhập và cơ hội toàn cầu cao nhất' },
      { code: '7520201', name: 'Kỹ thuật Điện tử - Viễn thông & Vi mạch', subjectCombinations: ['A00', 'A01'], benchmarkScore: '26.0 - 27.5', employmentOutlook: 'Ngành trọng điểm quốc gia về sản xuất chip và bán dẫn' },
      { code: '7520130', name: 'Kỹ thuật Ô tô', subjectCombinations: ['A00', 'A01'], benchmarkScore: '25.5 - 27.0', employmentOutlook: 'Cơ hội tại các hãng xe điện và tự động hóa' }
    ]
  },
  {
    id: 'ueh',
    code: 'KSA',
    name: 'Đại học Kinh tế TP. Hồ Chí Minh',
    shortName: 'UEH',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Quận 3, Quận 10 & Bình Chánh, TP.HCM',
    address: '59C Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh',
    website: 'https://tuyensinh.ueh.edu.vn',
    tuitionPerYear: '32 - 45 triệu VNĐ/năm',
    benchmarkRange: '23.0 - 28.2 điểm (hoặc kết hợp ĐGNL 800 - 950+ điểm)',
    benchmarkMin: 23.0,
    featuredMajors: ['Kinh doanh Quốc tế', 'Logistics và Chuỗi cung ứng', 'Marketing', 'Tài chính - Ngân hàng', 'Thương mại Điện tử', 'Khoa học Dữ liệu'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Xét tuyển kết hợp học bạ và chứng chỉ tiếng Anh quốc tế',
      'Điểm thi ĐGNL ĐHQG-HCM',
      'Xét tuyển thẳng học sinh trường chuyên và năng khiếu'
    ],
    riasecMatches: ['E', 'C', 'I'],
    highlights: [
      'Đại học đa ngành trọng điểm Quốc gia, xếp hạng Top 500 Đại học hàng đầu thế giới (QS/THE)',
      'Môi trường năng động, kết nối trực tiếp với 500+ tập đoàn đa quốc gia và ngân hàng lớn',
      'Có phân hiệu UEH Vĩnh Long ngay tại miền Tây giúp học sinh lựa chọn học gần nhà'
    ],
    dormitoryInfo: 'Ký túc xá tại Quận 5 và cơ sở Nam Thành phố khang trang, an ninh tuyệt đối',
    contactPhone: '028 7306 1976',
    programs: [
      { code: '7340120', name: 'Kinh doanh Quốc tế', subjectCombinations: ['A00', 'A01', 'D01', 'D07'], benchmarkScore: '26.8 - 28.0', employmentOutlook: 'Top ngành điểm chuẩn cao nhất khối kinh tế phía Nam' },
      { code: '7510605', name: 'Logistics và Quản lý Chuỗi cung ứng', subjectCombinations: ['A00', 'A01', 'D01', 'D07'], benchmarkScore: '27.0 - 28.2', employmentOutlook: 'Nhu cầu nhân lực bùng nổ trong thương mại điện tử' },
      { code: '7340115', name: 'Marketing', subjectCombinations: ['A00', 'A01', 'D01', 'D07'], benchmarkScore: '26.5 - 27.8', employmentOutlook: 'Rất cao tại các công ty agency và nhãn hàng tiêu dùng' }
    ]
  },
  {
    id: 'hcmus',
    code: 'QST',
    name: 'Trường Đại học Khoa học Tự nhiên – ĐHQG TP.HCM',
    shortName: 'KHTN TP.HCM (HCMUS)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Quận 5 & TP. Thủ Đức, TP.HCM',
    address: '227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP. Hồ Chí Minh',
    website: 'https://tuyensinh.hcmus.edu.vn',
    tuitionPerYear: '27 - 35 triệu VNĐ/năm',
    benchmarkRange: '20.0 - 28.5 điểm',
    benchmarkMin: 20.0,
    featuredMajors: ['Khoa học Máy tính', 'Trí tuệ Nhân tạo', 'Công nghệ Sinh học', 'Kỹ thuật Hạt nhân', 'Toán tin', 'Hóa học'],
    admissionMethods2027: [
      'Điểm thi ĐGNL ĐHQG-HCM (chiếm trên 50% chỉ tiêu)',
      'Điểm thi tốt nghiệp THPT 2027',
      'Ưu tiên xét tuyển theo quy định ĐHQG-HCM',
      'Xét tuyển thẳng học sinh giỏi quốc gia'
    ],
    riasecMatches: ['I', 'R'],
    highlights: [
      'Trung tâm nghiên cứu khoa học cơ bản và ứng dụng công nghệ hàng đầu Việt Nam',
      'Đào tạo nhân lực xuất sắc về Khoa học Máy tính và AI với nhiều huy chương Olympic quốc tế',
      'Cơ sở 1 nằm ngay trung tâm Quận 5 rất thuận tiện đi lại'
    ],
    dormitoryInfo: 'Học sinh được ưu tiên xếp chỗ tại Ký túc xá ĐHQG TP.HCM cơ sở Thủ Đức và KTX 135 Trần Hưng Đạo',
    contactPhone: '028 6288 4499',
    programs: [
      { code: '7480101', name: 'Khoa học Máy tính (Chương trình Tiên tiến)', subjectCombinations: ['A00', 'A01', 'B08'], benchmarkScore: '28.0 - 28.9', employmentOutlook: 'Top 1 mức lương IT tại Việt Nam và làm việc tại Thung lũng Silicon' },
      { code: '7420201', name: 'Công nghệ Sinh học', subjectCombinations: ['B00', 'A00'], benchmarkScore: '22.0 - 24.5', employmentOutlook: 'Nghiên cứu vắc-xin, nông nghiệp chính xác và y dược ứng dụng' }
    ]
  },
  {
    id: 'uit',
    code: 'QSC',
    name: 'Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM',
    shortName: 'ĐH CNTT (UIT)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'TP. Thủ Đức, TP.HCM',
    address: 'Khu phố 6, P. Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh',
    website: 'https://tuyensinh.uit.edu.vn',
    tuitionPerYear: '33 - 42 triệu VNĐ/năm',
    benchmarkRange: '25.0 - 28.3 điểm',
    benchmarkMin: 24.5,
    featuredMajors: ['Kỹ thuật Phần mềm', 'Khoa học Dữ liệu', 'An toàn Thông tin', 'Trí tuệ Nhân tạo', 'Thiết kế Vi mạch', 'Thương mại Điện tử'],
    admissionMethods2027: [
      'Điểm thi ĐGNL ĐHQG-HCM',
      'Điểm thi tốt nghiệp THPT 2027',
      'Ưu tiên xét tuyển ĐHQG-HCM và chứng chỉ quốc tế'
    ],
    riasecMatches: ['I', 'R', 'C'],
    highlights: [
      'Trường đại học chuyên ngành công nghệ thông tin và truyền thông duy nhất thuộc ĐHQG-HCM',
      'Tỉ lệ sinh viên có việc làm trước khi tốt nghiệp đạt hơn 95%',
      'Cơ sở vật chất hiện đại đặt ngay cạnh Làng Đại học Thủ Đức'
    ],
    dormitoryInfo: 'Sát cạnh Ký túc xá ĐHQG Khu B, đi bộ sang trường chỉ mất 5 phút',
    contactPhone: '028 3725 2002',
    programs: [
      { code: '7480202', name: 'An toàn Thông tin', subjectCombinations: ['A00', 'A01'], benchmarkScore: '26.5 - 27.8', employmentOutlook: 'Được các ngân hàng, tập đoàn viễn thông và cơ quan an ninh săn đón' },
      { code: '7480103', name: 'Kỹ thuật Phần mềm', subjectCombinations: ['A00', 'A01'], benchmarkScore: '27.0 - 28.2', employmentOutlook: 'Rất cao, cơ hội làm việc tại Nhật Bản, Singapore, Bắc Mỹ' }
    ]
  },
  {
    id: 'ussh',
    code: 'QSX',
    name: 'Trường ĐH Khoa học Xã hội và Nhân văn – ĐHQG TP.HCM',
    shortName: 'KHXH&NV (USSH)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Quận 1 & TP. Thủ Đức, TP.HCM',
    address: '10-12 Đinh Tiên Hoàng, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    website: 'https://hcmussh.edu.vn',
    tuitionPerYear: '22 - 32 triệu VNĐ/năm',
    benchmarkRange: '21.0 - 28.0 điểm',
    benchmarkMin: 21.0,
    featuredMajors: ['Báo chí', 'Truyền thông Đa phương tiện', 'Tâm lý học', 'Quan hệ Quốc tế', 'Ngôn ngữ Anh', 'Quản trị Dịch vụ Du lịch'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Điểm thi ĐGNL ĐHQG-HCM',
      'Ưu tiên xét tuyển theo quy định ĐHQG-HCM'
    ],
    riasecMatches: ['S', 'A', 'E'],
    highlights: [
      'Cái nôi đào tạo khoa học xã hội và nhân văn lớn nhất miền Nam',
      'Ngành Báo chí và Truyền thông đa phương tiện dẫn đầu cả nước về danh tiếng thực tế',
      'Cơ sở chính tọa lạc ngay trung tâm Quận 1 bên cạnh Thảo Cầm Viên'
    ],
    dormitoryInfo: 'Sinh viên năm 1-2 học tại Thủ Đức ở KTX ĐHQG, năm 3-4 học tại Q.1',
    contactPhone: '028 3829 3828',
    programs: [
      { code: '7320101', name: 'Báo chí & Truyền thông', subjectCombinations: ['C00', 'D01', 'D14'], benchmarkScore: '26.5 - 28.0', employmentOutlook: 'Đài truyền hình, cơ quan báo chí và agency truyền thông số' },
      { code: '7310401', name: 'Tâm lý học', subjectCombinations: ['C00', 'D01', 'B00'], benchmarkScore: '25.0 - 27.0', employmentOutlook: 'Nhu cầu tham vấn học đường, trị liệu tâm lý doanh nghiệp đang tăng mạnh' }
    ]
  },
  {
    id: 'uel',
    code: 'QSK',
    name: 'Trường Đại học Kinh tế – Luật – ĐHQG TP.HCM',
    shortName: 'Kinh tế - Luật (UEL)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'TP. Thủ Đức, TP.HCM',
    address: '669 Quốc lộ 1K, P. Linh Xuân, TP. Thủ Đức, TP. Hồ Chí Minh',
    website: 'https://tuyensinh.uel.edu.vn',
    tuitionPerYear: '28 - 36 triệu VNĐ/năm',
    benchmarkRange: '23.5 - 27.5 điểm',
    benchmarkMin: 23.0,
    featuredMajors: ['Luật Kinh tế', 'Kinh doanh Quốc tế', 'Tài chính - Ngân hàng', 'Kinh tế Đối ngoại', 'Thương mại Điện tử'],
    admissionMethods2027: [
      'Điểm thi ĐGNL ĐHQG-HCM',
      'Điểm thi tốt nghiệp THPT 2027',
      'Ưu tiên xét tuyển thẳng ĐHQG-HCM'
    ],
    riasecMatches: ['E', 'C'],
    highlights: [
      'Sự giao thoa hoàn hảo giữa kiến thức Kinh tế thực tiễn và Hành lang Pháp lý vững chắc',
      'Tòa nhà trung tâm và thư viện hiện đại tại cửa ngõ Thủ Đức',
      'Được các văn phòng luật sư quốc tế và ngân hàng thương mại đánh giá cao'
    ],
    dormitoryInfo: 'Thuận tiện ở tại Ký túc xá ĐHQG TP.HCM cơ sở Linh Trung',
    contactPhone: '028 3724 4555',
    programs: [
      { code: '7380107', name: 'Luật Kinh tế & Luật Thương mại Quốc tế', subjectCombinations: ['A00', 'A01', 'D01'], benchmarkScore: '25.8 - 27.2', employmentOutlook: 'Pháp chế doanh nghiệp, trọng tài thương mại' },
      { code: '7310106', name: 'Kinh tế Đối ngoại', subjectCombinations: ['A00', 'A01', 'D01'], benchmarkScore: '26.5 - 27.6', employmentOutlook: 'Tập đoàn đa quốc gia, cơ quan xúc tiến thương mại' }
    ]
  },
  {
    id: 'ump',
    code: 'YDS',
    name: 'Đại học Y Dược TP. Hồ Chí Minh',
    shortName: 'Y Dược TP.HCM (UMP)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Quận 5, TP.HCM',
    address: '217 Hồng Bàng, Phường 11, Quận 5, TP. Hồ Chí Minh',
    website: 'https://ump.edu.vn',
    tuitionPerYear: '46 - 84 triệu VNĐ/năm (tùy ngành Bác sĩ hay Điều dưỡng)',
    benchmarkRange: '22.0 - 28.5 điểm (Tổ hợp B00 / A00)',
    benchmarkMin: 22.0,
    featuredMajors: ['Y khoa', 'Răng Hàm Mặt', 'Dược học', 'Y học Cổ truyền', 'Kỹ thuật Phục hồi Chức năng', 'Dinh dưỡng'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027 (Khối B00, A00) kết hợp chứng chỉ tiếng Anh',
      'Xét tuyển thẳng học sinh đạt giải quốc tế/quốc gia'
    ],
    riasecMatches: ['I', 'S'],
    highlights: [
      'Cơ sở đào tạo y khoa danh giá bậc nhất miền Nam và cả nước với hơn 75 năm lịch sử',
      'Đội ngũ giáo sư, bác sĩ đầu ngành tại các bệnh viện lớn Chợ Rẫy, Từ Dũ, Nhi Đồng',
      'Cơ hội học tập chuyên sâu, nội trú và du học y khoa quốc tế'
    ],
    dormitoryInfo: 'Ký túc xá tại Quận 5 dành riêng cho sinh viên y dược',
    contactPhone: '028 3855 8411',
    programs: [
      { code: '7720101', name: 'Y khoa', subjectCombinations: ['B00 (Toán, Hóa, Sinh)'], benchmarkScore: '27.3 - 28.5', employmentOutlook: 'Bác sĩ tại các bệnh viện tuyến đầu cả nước' },
      { code: '7720201', name: 'Dược học', subjectCombinations: ['A00', 'B00'], benchmarkScore: '25.0 - 26.5', employmentOutlook: 'Dược sĩ lâm sàng, quản lý dược phẩm' }
    ]
  },
  {
    id: 'hcmue',
    code: 'SPS',
    name: 'Trường Đại học Sư phạm TP. Hồ Chí Minh',
    shortName: 'ĐH Sư phạm TP.HCM (HCMUE)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Quận 5, TP.HCM',
    address: '280 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh',
    website: 'https://tuyensinh.hcmue.edu.vn',
    tuitionPerYear: 'Miễn 100% học phí khối Sư phạm + Hỗ trợ 3.63 tr/tháng sinh hoạt phí (Nghị định 116)',
    benchmarkRange: '21.5 - 28.6 điểm',
    benchmarkMin: 21.5,
    featuredMajors: ['Sư phạm Toán', 'Sư phạm Tiếng Anh', 'Sư phạm Ngữ văn', 'Sư phạm Hóa học', 'Tâm lý học Giáo dục', 'Ngôn ngữ Hàn/Nhật'],
    admissionMethods2027: [
      'Kỳ thi Đánh giá năng lực chuyên biệt của HCMUE',
      'Điểm thi tốt nghiệp THPT 2027',
      'Xét tuyển kết hợp học bạ học sinh giỏi trường THPT',
      'Xét tuyển thẳng theo quy chế'
    ],
    riasecMatches: ['S', 'I', 'A'],
    highlights: [
      'Trường đại học trọng điểm quốc gia về đào tạo đội ngũ nhà giáo chất lượng cao',
      'Chính sách miễn học phí toàn phần và trợ cấp chi phí sinh hoạt hàng tháng theo NĐ 116',
      'Vị trí đắc địa ngay trung tâm đường An Dương Vương, Q.5'
    ],
    dormitoryInfo: 'Ký túc xá khang trang tại Quận 11 và Quận 5',
    contactPhone: '028 3835 2020',
    programs: [
      { code: '7140209', name: 'Sư phạm Toán học', subjectCombinations: ['A00', 'A01'], benchmarkScore: '26.8 - 28.2', employmentOutlook: 'Được tuyển dụng ưu tiên tại các trường THPT và trường quốc tế' },
      { code: '7140231', name: 'Sư phạm Tiếng Anh', subjectCombinations: ['D01'], benchmarkScore: '27.0 - 28.6', employmentOutlook: 'Giáo viên trường chuyên, trường quốc tế, trung tâm Anh ngữ lớn' }
    ]
  },
  {
    id: 'sgu',
    code: 'SGD',
    name: 'Trường Đại học Sài Gòn',
    shortName: 'ĐH Sài Gòn (SGU)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Quận 5, TP.HCM',
    address: '273 An Dương Vương, Phường 3, Quận 5, TP. Hồ Chí Minh',
    website: 'https://daotao.sgu.edu.vn',
    tuitionPerYear: '16 - 22 triệu VNĐ/năm (Miễn học phí với Sư phạm)',
    benchmarkRange: '20.0 - 26.5 điểm',
    benchmarkMin: 20.0,
    featuredMajors: ['Sư phạm Tiểu học', 'Sư phạm Mầm non', 'Công nghệ Thông tin', 'Kế toán', 'Quản trị Kinh doanh', 'Thiết kế Đồ họa'],
    admissionMethods2027: [
      'Điểm thi Đánh giá đầu vào V-SAT',
      'Điểm thi tốt nghiệp THPT 2027',
      'Điểm thi ĐGNL ĐHQG-HCM'
    ],
    riasecMatches: ['S', 'C', 'A', 'E'],
    highlights: [
      'Trường đại học công lập trực thuộc UBND TP.HCM với kiến trúc cổ kính tuyệt đẹp',
      'Mức học phí công lập rất dễ chịu, phù hợp với điều kiện kinh tế gia đình miền Tây',
      'Khối ngành Sư phạm Tiểu học & Mầm non được đánh giá rất cao'
    ],
    dormitoryInfo: 'Ký túc xá nằm tại Quận 8, đi xe buýt sang trường chỉ 15 phút',
    contactPhone: '028 3835 4409',
    programs: [
      { code: '7140202', name: 'Sư phạm Tiểu học', subjectCombinations: ['A00', 'C00', 'D01'], benchmarkScore: '25.0 - 26.5', employmentOutlook: 'Rất cần nhân lực tại TP.HCM và các tỉnh miền Tây' },
      { code: '7480201', name: 'Công nghệ Thông tin', subjectCombinations: ['A00', 'A01'], benchmarkScore: '23.5 - 25.0', employmentOutlook: 'Cao, chương trình bám sát nhu cầu doanh nghiệp' }
    ]
  },
  {
    id: 'hcmute',
    code: 'SPK',
    name: 'Trường Đại học Sư phạm Kỹ thuật TP. Hồ Chí Minh',
    shortName: 'SPKT TP.HCM (HCMUTE)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'TP. Thủ Đức, TP.HCM',
    address: '01 Võ Văn Ngân, P. Linh Chiểu, TP. Thủ Đức, TP. Hồ Chí Minh',
    website: 'https://tuyensinh.hcmute.edu.vn',
    tuitionPerYear: '29 - 36 triệu VNĐ/năm',
    benchmarkRange: '23.0 - 27.5 điểm',
    benchmarkMin: 23.0,
    featuredMajors: ['Kỹ thuật Ô tô', 'Cơ điện tử & Robot', 'Công nghệ Thông tin', 'Kỹ thuật Điều khiển & Tự động hóa', 'Thiết kế Thời trang'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Điểm thi ĐGNL ĐHQG-HCM',
      'Xét tuyển học bạ THPT kết hợp giải thưởng'
    ],
    riasecMatches: ['R', 'I', 'A'],
    highlights: [
      'Một trong những cái nôi đào tạo kỹ sư thực hành tốt nhất phía Nam',
      'Hệ thống xưởng thực hành, phòng thí nghiệm hiện đại được tài trợ bởi các tập đoàn lớn',
      'Cựu sinh viên giữ nhiều vị trí quản lý kỹ thuật then chốt tại các khu công nghiệp'
    ],
    dormitoryInfo: 'Ký túc xá ngay trong khuôn viên trường và KTX ĐHQG',
    contactPhone: '028 3722 1223',
    programs: [
      { code: '7520130', name: 'Công nghệ Kỹ thuật Ô tô', subjectCombinations: ['A00', 'A01', 'D01'], benchmarkScore: '25.5 - 27.2', employmentOutlook: 'Các tập đoàn sản xuất ô tô và linh kiện tuyển dụng liên tục' },
      { code: '7520216', name: 'Kỹ thuật Điều khiển và Tự động hóa', subjectCombinations: ['A00', 'A01'], benchmarkScore: '25.0 - 26.8', employmentOutlook: 'Tự động hóa nhà máy thông minh Smart Factory' }
    ]
  },
  {
    id: 'nlu',
    code: 'NLS',
    name: 'Trường Đại học Nông Lâm TP. Hồ Chí Minh',
    shortName: 'Nông Lâm TP.HCM (NLU)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'TP. Thủ Đức, TP.HCM',
    address: 'Khu phố 6, P. Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh',
    website: 'https://ts.hcmuaf.edu.vn',
    tuitionPerYear: '16 - 22 triệu VNĐ/năm',
    benchmarkRange: '18.0 - 25.0 điểm',
    benchmarkMin: 18.0,
    featuredMajors: ['Thú y (Bác sĩ thú y)', 'Công nghệ Thực phẩm', 'Công nghệ Sinh học', 'Cơ điện tử', 'Quản trị Kinh doanh', 'Bảo vệ Thực vật'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Điểm thi ĐGNL ĐHQG-HCM',
      'Xét tuyển học bạ THPT'
    ],
    riasecMatches: ['R', 'I', 'E'],
    highlights: [
      'Khuôn viên xanh hơn 118 ha rộng lớn nhất TP.HCM với viện nghiên cứu và trại thực nghiệm',
      'Ngành Thú y và Công nghệ thực phẩm danh tiếng hàng đầu, sinh viên ra trường được săn đón',
      'Học phí công lập dễ tiếp cận, mức sinh hoạt quanh trường phù hợp sinh viên'
    ],
    dormitoryInfo: 'Ký túc xá rộng lớn trong khuôn viên trường có thể đón hàng nghìn tân sinh viên',
    contactPhone: '028 3896 6780',
    programs: [
      { code: '7640101', name: 'Thú y (Bác sĩ Thú y 5 năm)', subjectCombinations: ['A00', 'B00', 'D07'], benchmarkScore: '23.0 - 25.0', employmentOutlook: 'Thu nhập cao tại các tập đoàn chăn nuôi CP, Japfa, Cargill' },
      { code: '7540101', name: 'Công nghệ Thực phẩm', subjectCombinations: ['A00', 'B00', 'D07'], benchmarkScore: '21.5 - 23.5', employmentOutlook: 'Các tập đoàn chế biến thực phẩm và đồ uống' }
    ]
  },
  {
    id: 'dthu',
    code: 'SPD',
    name: 'Trường Đại học Đồng Tháp',
    shortName: 'ĐH Đồng Tháp (DThU)',
    region: 'angiang_cantho',
    regionLabel: 'Đồng Tháp & ĐBSCL',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'TP. Cao Lãnh, Tỉnh Đồng Tháp',
    address: '783 Phạm Hữu Lầu, Phường 6, TP. Cao Lãnh, Tỉnh Đồng Tháp',
    website: 'https://tuyensinh.dthu.edu.vn',
    tuitionPerYear: '14 - 18 triệu VNĐ/năm (Khối Sư phạm miễn học phí)',
    benchmarkRange: '18.0 - 25.5 điểm',
    benchmarkMin: 18.0,
    featuredMajors: ['Sư phạm Toán', 'Sư phạm Ngữ văn', 'Giáo dục Tiểu học', 'Quản trị Kinh doanh', 'Khoa học Máy tính', 'Nuôi trồng Thủy sản'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Xét tuyển học bạ THPT',
      'Điểm thi ĐGNL ĐHQG-HCM'
    ],
    riasecMatches: ['S', 'I', 'E'],
    highlights: [
      'Vị trí láng giềng sát tỉnh An Giang (qua cầu Cao Lãnh), giao thông rất thuận lợi',
      'Trung tâm đào tạo giáo viên uy tín lâu đời của các tỉnh Bắc Sông Hậu và Tiền Giang',
      'Chi phí sinh hoạt tại TP. Cao Lãnh thuộc nhóm thấp nhất khu vực ĐBSCL'
    ],
    dormitoryInfo: 'Ký túc xá sinh viên hiện đại, an ninh, có sân vận động và nhà thi đấu thể thao',
    contactPhone: '0277 388 2258',
    programs: [
      { code: '7140202', name: 'Giáo dục Tiểu học', subjectCombinations: ['A00', 'C00', 'D01'], benchmarkScore: '24.0 - 25.5', employmentOutlook: 'Nhu cầu tuyển giáo viên tiểu học tại miền Tây rất cao' },
      { code: '7340101', name: 'Quản trị Kinh doanh', subjectCombinations: ['A00', 'A01', 'D01'], benchmarkScore: '18.5 - 20.5', employmentOutlook: 'Phù hợp doanh nghiệp địa phương' }
    ]
  },
  {
    id: 'ctut',
    code: 'KCC',
    name: 'Trường Đại học Kỹ thuật – Công nghệ Cần Thơ',
    shortName: 'ĐH KT-CN Cần Thơ (CTUT)',
    region: 'angiang_cantho',
    regionLabel: 'Cần Thơ & ĐBSCL',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Ninh Kiều, TP. Cần Thơ',
    address: '256 Nguyễn Văn Cừ, P. An Hòa, Q. Ninh Kiều, TP. Cần Thơ',
    website: 'https://ctuet.edu.vn',
    tuitionPerYear: '16 - 21 triệu VNĐ/năm',
    benchmarkRange: '18.0 - 23.5 điểm',
    benchmarkMin: 18.0,
    featuredMajors: ['Công nghệ Thông tin', 'Kỹ thuật Điều khiển & Tự động hóa', 'Kỹ thuật Cơ điện tử', 'Kỹ thuật Phần mềm', 'Khoa học Dữ liệu'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Xét học bạ THPT',
      'Điểm thi ĐGNL ĐHQG-HCM'
    ],
    riasecMatches: ['R', 'I'],
    highlights: [
      'Trường đại học công lập chuyên về kỹ thuật công nghệ trực thuộc UBND TP. Cần Thơ',
      'Học phí công lập hợp lý, thực hành nhiều, liên kết chặt chẽ với các khu công nghiệp Cần Thơ - Hậu Giang - An Giang'
    ],
    dormitoryInfo: 'Hỗ trợ giới thiệu Ký túc xá sinh viên TP. Cần Thơ quy mô lớn tại quận Ninh Kiều',
    contactPhone: '0292 3890 698',
    programs: [
      { code: '7480201', name: 'Công nghệ Thông tin', subjectCombinations: ['A00', 'A01'], benchmarkScore: '21.0 - 23.0', employmentOutlook: 'Lập trình viên và quản trị mạng' },
      { code: '7520216', name: 'Kỹ thuật Điều khiển & Tự động hóa', subjectCombinations: ['A00', 'A01'], benchmarkScore: '20.0 - 22.0', employmentOutlook: 'Vận hành dây chuyền sản xuất tự động' }
    ]
  },
  {
    id: 'ufm',
    code: 'DMS',
    name: 'Trường Đại học Tài chính – Marketing',
    shortName: 'UFM',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập',
    city: 'Quận 7, Phú Nhuận & Thủ Đức, TP.HCM',
    address: '778 Nguyễn Kiệm, Phường 4, Quận Phú Nhuận, TP. Hồ Chí Minh',
    website: 'https://tuyensinh.ufm.edu.vn',
    tuitionPerYear: '26 - 38 triệu VNĐ/năm',
    benchmarkRange: '22.0 - 26.0 điểm',
    benchmarkMin: 21.5,
    featuredMajors: ['Marketing', 'Kinh doanh Quốc tế', 'Tài chính - Ngân hàng', 'Quản trị Khách sạn', 'Bất động sản', 'Thương mại Điện tử'],
    admissionMethods2027: [
      'Điểm thi tốt nghiệp THPT 2027',
      'Điểm thi ĐGNL ĐHQG-HCM và V-SAT',
      'Xét tuyển học bạ học sinh giỏi'
    ],
    riasecMatches: ['E', 'C'],
    highlights: [
      'Thương hiệu đào tạo Marketing và Truyền thông thương hiệu hàng đầu khu vực phía Nam',
      'Môi trường sinh viên năng động, phong trào ngoại khóa phát triển mạnh',
      'Nhiều cơ sở hiện đại tại TP.HCM'
    ],
    dormitoryInfo: 'Ký túc xá cơ sở Quận 7 khang trang, đầy đủ tiện ích',
    contactPhone: '028 3872 6789',
    programs: [
      { code: '7340115', name: 'Marketing', subjectCombinations: ['A00', 'A01', 'D01', 'D07'], benchmarkScore: '25.0 - 26.2', employmentOutlook: 'Rất cao' },
      { code: '7340120', name: 'Kinh doanh Quốc tế', subjectCombinations: ['A00', 'A01', 'D01'], benchmarkScore: '24.5 - 25.8', employmentOutlook: 'Cao' }
    ]
  },
  {
    id: 'tdtu',
    code: 'DTT',
    name: 'Trường Đại học Tôn Đức Thắng',
    shortName: 'ĐH Tôn Đức Thắng (TDTU)',
    region: 'hcm',
    regionLabel: 'TP. Hồ Chí Minh',
    type: 'public',
    typeLabel: 'Công lập tự chủ',
    city: 'Quận 7, TP.HCM',
    address: '19 Nguyễn Hữu Thọ, P. Tân Phong, Quận 7, TP. Hồ Chí Minh',
    website: 'https://admission.tdtu.edu.vn',
    tuitionPerYear: '28 - 48 triệu VNĐ/năm',
    benchmarkRange: '22.0 - 27.0 điểm',
    benchmarkMin: 21.0,
    featuredMajors: ['Khoa học Máy tính', 'Quản trị Kinh doanh', 'Thiết kế Đồ họa', 'Kỹ thuật Xây dựng', 'Dược học', 'Ngôn ngữ Anh'],
    admissionMethods2027: [
      'Xét học bạ THPT (5 học kỳ)',
      'Điểm thi tốt nghiệp THPT 2027',
      'Điểm thi ĐGNL ĐHQG-HCM',
      'Ưu tiên xét tuyển theo quy định riêng'
    ],
    riasecMatches: ['R', 'E', 'A', 'I'],
    highlights: [
      'Khuôn viên chuẩn đại học quốc tế 5 sao QS Stars với thư viện thông minh truyền cảm hứng nhất Việt Nam',
      'Kỷ luật học tập nghiêm túc, rèn luyện kỹ năng mềm và tác phong công nghiệp',
      'Vị trí đắc địa tại Quận 7 giáp Phú Mỹ Hưng'
    ],
    dormitoryInfo: 'Ký túc xá 4 sao ngay trong khuôn viên trường với hồ bơi, sân bóng đá, máy lạnh',
    contactPhone: '1900 2024',
    programs: [
      { code: '7210403', name: 'Thiết kế Đồ họa', subjectCombinations: ['H00', 'H01', 'V00'], benchmarkScore: '24.0 - 26.0', employmentOutlook: 'Chuyên viên thiết kế thương hiệu và truyền thông' },
      { code: '7480101', name: 'Khoa học Máy tính', subjectCombinations: ['A00', 'A01'], benchmarkScore: '25.5 - 27.0', employmentOutlook: 'Lập trình viên, kỹ sư dữ liệu' }
    ]
  }
];
