import { RiasecCategory, QuizQuestion, RiasecType } from '../types/admissions';

export const RIASEC_CATEGORIES: Record<RiasecType, RiasecCategory> = {
  R: {
    id: 'R',
    name: 'Kỹ thuật - Thực tế (Realistic)',
    fullName: 'Nhóm Người Thực Tế & Thao Tác Kỹ Thuật',
    tagline: 'Thích hành động, thao tác máy móc, công nghệ và tiếp xúc vật thể thực',
    description: 'Bạn là người thực tế, thích làm việc với đồ vật, máy móc, công cụ, bản vẽ cơ khí hoặc môi trường tự nhiên. Bạn thích giải quyết vấn đề bằng hành động cụ thể, tư duy trực quan và trải nghiệm thực tiễn hơn là các lý thuyết trừu tượng.',
    iconName: 'Wrench',
    color: '#0284c7', // Sky Blue
    accentClass: 'text-sky-700 bg-sky-50 border-sky-200',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-800',
    personalityTraits: ['Thực tế & thẳng thắn', 'Khéo léo chân tay & công nghệ', 'Thích kết quả hữu hình', 'Kiên trì trước bài toán kỹ thuật'],
    recommendedMajors: [
      'Công nghệ Kỹ thuật Cơ điện tử',
      'Kỹ thuật Điện - Điện tử & Viễn thông',
      'Kỹ thuật Điều khiển & Tự động hóa',
      'Kỹ thuật Ô tô & Xe điện',
      'Kỹ thuật Xây dựng & Cầu đường',
      'Kỹ thuật Nông nghiệp & Công nghệ Sau thu hoạch',
      'Kỹ thuật Phần cứng & Mạng máy tính'
    ],
    suitableCareers: [
      'Kỹ sư Tự động hóa & Robot',
      'Kỹ sư Điện tử & Vi mạch bán dẫn',
      'Kỹ sư Xây dựng & Giám sát công trình',
      'Chuyên viên Kỹ thuật Ô tô hiện đại',
      'Chuyên viên Vận hành thiết bị công nghiệp cao'
    ],
    subjects2027: ['Toán', 'Vật lí', 'Hóa học', 'Tin học', 'Công nghệ']
  },
  I: {
    id: 'I',
    name: 'Nghiên cứu - Khám phá (Investigative)',
    fullName: 'Nhóm Người Tư Duy Khoa Học & Phân Tích',
    tagline: 'Đam mê khám phá quy luật, phân tích dữ liệu, giải mã câu hỏi khó',
    description: 'Bạn sở hữu tư duy phân tích nhạy bén, thích quan sát, học hỏi, tìm hiểu nguyên nhân gốc rễ của sự vật hiện tượng. Bạn thích làm việc độc lập hoặc trong phòng thí nghiệm, giải các bài toán phức tạp và khám phá công nghệ mới.',
    iconName: 'Microscope',
    color: '#0d9488', // Teal
    accentClass: 'text-teal-700 bg-teal-50 border-teal-200',
    badgeBg: 'bg-teal-100',
    badgeText: 'text-teal-800',
    personalityTraits: ['Tò mò khoa học', 'Tư duy logic & phản biện', 'Tập trung cao độ', 'Thích dữ liệu & chứng cứ xác thực'],
    recommendedMajors: [
      'Khoa học Dữ liệu & Trí tuệ Nhân tạo (AI)',
      'Khoa học Máy tính & Phần mềm',
      'Y khoa & Răng Hàm Mặt',
      'Dược học & Hóa dược',
      'Công nghệ Sinh học & Y sinh',
      'Khoa học Môi trường & Khí hậu',
      'Toán ứng dụng & Thống kê kinh tế'
    ],
    suitableCareers: [
      'Bác sĩ Đa khoa / Chuyên khoa',
      'Dược sĩ Lâm sàng & Nghiên cứu',
      'Kỹ sư Trí tuệ Nhân tạo & Dữ liệu',
      'Lập trình viên Giải thuật & Phần mềm',
      'Nhà nghiên cứu Sinh học ứng dụng & Môi trường'
    ],
    subjects2027: ['Toán', 'Vật lí', 'Hóa học', 'Sinh học', 'Tin học']
  },
  A: {
    id: 'A',
    name: 'Nghệ thuật - Sáng tạo (Artistic)',
    fullName: 'Nhóm Người Sáng Tạo & Đậm Chất Nghệ Thuật',
    tagline: 'Thích sáng tạo cái mới, giàu trí tưởng tượng, tự do thể hiện bản thân',
    description: 'Bạn là người giàu xúc cảm thẩm mỹ, trực giác tốt, thích sự đổi mới và tự do tư tưởng. Bạn bị thu hút bởi màu sắc, ngôn từ, âm thanh, không gian kiến trúc hoặc các phương tiện truyền thông sáng tạo.',
    iconName: 'Palette',
    color: '#9333ea', // Purple
    accentClass: 'text-purple-700 bg-purple-50 border-purple-200',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    personalityTraits: ['Giàu cảm hứng sáng tạo', 'Trực giác tinh tế', 'Thích tự do & phi khuôn mẫu', 'Đồng cảm và nhạy bén thẩm mỹ'],
    recommendedMajors: [
      'Thiết kế Đồ họa & Kỹ thuật số',
      'Truyền thông Đa phương tiện',
      'Kiến trúc & Thiết kế Nội thất',
      'Thiết kế Thời trang & Sản phẩm',
      'Báo chí & Sáng tạo Nội dung số',
      'Ngôn ngữ Anh / Ngôn ngữ Hàn / Trung Quốc'
    ],
    suitableCareers: [
      'Nhà thiết kế Đồ họa & UI/UX',
      'Chuyên viên Sáng tạo Nội dung (Content Creator/Producer)',
      'Kiến trúc sư Quy hoạch & Nội thất',
      'Biên tập viên Truyền thông & Báo chí',
      'Đạo diễn hình ảnh & Hoạt hình 3D'
    ],
    subjects2027: ['Ngữ văn', 'Toán', 'Tiếng Anh', 'Lịch sử', 'Tin học']
  },
  S: {
    id: 'S',
    name: 'Xã hội - Giúp đỡ (Social)',
    fullName: 'Nhóm Người Giao Tiếp & Phục Vụ Cộng Đồng',
    tagline: 'Thích giảng dạy, lắng nghe, chăm sóc sức khỏe và kết nối con người',
    description: 'Bạn yêu thích làm việc cùng con người, biết lắng nghe, thấu cảm và có mong muốn giúp đỡ, truyền cảm hứng cho người khác. Bạn phát huy tốt nhất năng lực trong môi trường tập thể, giáo dục, dịch vụ cộng đồng hoặc chăm sóc sức khỏe.',
    iconName: 'HeartHandshake',
    color: '#ea580c', // Orange
    accentClass: 'text-orange-700 bg-orange-50 border-orange-200',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-800',
    personalityTraits: ['Thấu cảm & lắng nghe tốt', 'Thích hỗ trợ cộng đồng', 'Kỹ năng giao tiếp truyền cảm', 'Kiên nhẫn & trách nhiệm cao'],
    recommendedMajors: [
      'Sư phạm (Toán, Văn, Anh, Tiểu học, Mầm non)',
      'Tâm lý học & Tham vấn học đường',
      'Điều dưỡng & Y tế Công cộng',
      'Công tác Xã hội & Phát triển Cộng đồng',
      'Quản trị Dịch vụ Du lịch & Lữ hành',
      'Quản trị Khách sạn & Nhà hàng Quốc tế'
    ],
    suitableCareers: [
      'Giáo viên / Giảng viên Trung học & Đại học',
      'Chuyên viên Tâm lý & Tư vấn hướng nghiệp',
      'Cử nhân Điều dưỡng Bệnh viện & Y tế',
      'Quản lý Tour du lịch & Sự kiện',
      'Cán bộ Dự án Xã hội & Phi chính phủ'
    ],
    subjects2027: ['Ngữ văn', 'Toán', 'Tiếng Anh', 'Sinh học', 'Địa lí', 'Lịch sử', 'GDKT&PL']
  },
  E: {
    id: 'E',
    name: 'Quản trị - Kinh doanh (Enterprising)',
    fullName: 'Nhóm Người Lãnh Đạo & Khởi Nghiệp Thuyết Phục',
    tagline: 'Năng động, thích thử thách kinh doanh, dẫn dắt đội ngũ và đàm phán',
    description: 'Bạn là người tự tin, thích chủ động dẫn dắt, có năng khiếu thuyết phục và nhạy bén với cơ hội kinh doanh. Bạn không ngại đối mặt với áp lực cạnh tranh, thích đề ra mục tiêu và thúc đẩy tập thể cùng đạt kết quả xuất sắc.',
    iconName: 'TrendingUp',
    color: '#059669', // Emerald
    accentClass: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    personalityTraits: ['Tự tin & quyết đoán', 'Kỹ năng lãnh đạo & thuyết phục', 'Nhạy bén kinh doanh', 'Chịu được áp lực cao'],
    recommendedMajors: [
      'Quản trị Kinh doanh',
      'Marketing & Digital Marketing',
      'Kinh doanh Quốc tế & Xuất nhập khẩu',
      'Tài chính - Ngân hàng',
      'Thương mại Điện tử',
      'Bất động sản & Thẩm định giá'
    ],
    suitableCareers: [
      'Chuyên viên Marketing / Quản lý Nhãn hàng',
      'Chuyên viên Phân tích Đầu tư & Ngân hàng',
      'Giám đốc Dự án & Quản lý Kinh doanh',
      'Chuyên viên Đàm phán & Thương mại Quốc tế',
      'Nhà khởi nghiệp (Startup Founder)'
    ],
    subjects2027: ['Toán', 'Ngữ văn', 'Tiếng Anh', 'GDKT&PL', 'Địa lí']
  },
  C: {
    id: 'C',
    name: 'Nghiệp vụ - Quy củ (Conventional)',
    fullName: 'Nhóm Người Chi Tiết, Cẩn Trọng & Quản Lý Dữ Liệu',
    tagline: 'Ngăn nắp, tỉ mỉ với con số, coi trọng quy trình và sự chính xác',
    description: 'Bạn là người làm việc có phương pháp, chu đáo, tỉ mỉ và đáng tin cậy. Bạn thích môi trường rõ ràng về quy trình, dữ liệu có cấu trúc, các bảng tính, số liệu tài chính hoặc văn bản pháp lý chính xác.',
    iconName: 'ClipboardCheck',
    color: '#475569', // Slate
    accentClass: 'text-slate-700 bg-slate-50 border-slate-200',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-800',
    personalityTraits: ['Cẩn thận & chính xác tuyệt đối', 'Tôn trọng quy trình chuẩn', 'Kỹ năng tổ chức sắp xếp cao', 'Đáng tin cậy & bảo mật tốt'],
    recommendedMajors: [
      'Kế toán - Kiểm toán',
      'Tài chính Doanh nghiệp & Thuế',
      'Logistics & Quản lý Chuỗi cung ứng',
      'Luật Kinh tế & Luật Dân sự',
      'Hệ thống Thông tin Quản lý (MIS)',
      'Thống kê Kinh tế & Phân tích Rủi ro'
    ],
    suitableCareers: [
      'Chuyên viên Kế toán / Kiểm toán viên độc lập',
      'Chuyên viên Điều phối Chuỗi cung ứng & Kho vận',
      'Chuyên viên Pháp chế Doanh nghiệp & Luật sư',
      'Chuyên viên Phân tích Rủi ro Tín dụng',
      'Quản trị viên Cơ sở Dữ liệu Doanh nghiệp'
    ],
    subjects2027: ['Toán', 'Tiếng Anh', 'Ngữ văn', 'Tin học', 'GDKT&PL']
  }
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Realistic (R) - 4 questions
  {
    id: 1,
    category: 'R',
    question: 'Tôi thích tự tay sửa chữa, lắp ráp máy tính, đồ điện tử hoặc đồ cơ khí trong gia đình.',
    context: 'Khả năng thao tác kỹ thuật thực tế'
  },
  {
    id: 2,
    category: 'R',
    question: 'Tôi hào hứng khi tìm hiểu nguyên lý hoạt động của động cơ, thiết bị tự động hoặc xe cộ.',
    context: 'Hứng thú với máy móc công nghệ'
  },
  {
    id: 3,
    category: 'R',
    question: 'Tôi thích các công việc có kết quả cụ thể nhìn thấy được hơn là thảo luận lý thuyết suông.',
    context: 'Tư duy thực tế hướng kết quả'
  },
  {
    id: 4,
    category: 'R',
    question: 'Tôi không ngại làm việc tại công trường, xưởng cơ khí, hoặc môi trường sản xuất thực tế.',
    context: 'Thích ứng môi trường kỹ thuật'
  },

  // Investigative (I) - 4 questions
  {
    id: 5,
    category: 'I',
    question: 'Tôi say mê tìm hiểu bản chất khoa học, nguồn gốc của các hiện tượng tự nhiên hoặc dữ liệu phức tạp.',
    context: 'Đam mê nghiên cứu khoa học'
  },
  {
    id: 6,
    category: 'I',
    question: 'Tôi thích giải các bài toán khó, viết thuật toán lập trình hoặc làm việc với các thí nghiệm thí nghiệm.',
    context: 'Tư duy logic & giải thuật'
  },
  {
    id: 7,
    category: 'I',
    question: 'Khi gặp một vấn đề mới, tôi thường tìm đọc tài liệu chuyên sâu, nghiên cứu các báo cáo và số liệu.',
    context: 'Năng lực tự học & nghiên cứu sâu'
  },
  {
    id: 8,
    category: 'I',
    question: 'Tôi quan tâm đến các tiến bộ y sinh, công nghệ trí tuệ nhân tạo (AI) và vật liệu mới.',
    context: 'Định hướng công nghệ tiên phong'
  },

  // Artistic (A) - 4 questions
  {
    id: 9,
    category: 'A',
    question: 'Tôi thích vẽ, thiết kế banner/video, chụp ảnh hoặc bài trí không gian theo phong cách riêng.',
    context: 'Năng khiếu thẩm mỹ thị giác'
  },
  {
    id: 10,
    category: 'A',
    question: 'Tôi thích viết lách, sáng tạo câu chuyện, kịch bản hoặc bày tỏ cảm xúc qua câu từ giàu hình ảnh.',
    context: 'Năng lực biểu đạt ngôn từ & cảm xúc'
  },
  {
    id: 11,
    category: 'A',
    question: 'Tôi cảm thấy khó chịu với những khuôn khổ gò bó, thích được tự do thể hiện phong cách cá nhân.',
    context: 'Tính độc lập sáng tạo'
  },
  {
    id: 12,
    category: 'A',
    question: 'Tôi thường xuyên theo dõi các xu hướng truyền thông mạng xã hội, nghệ thuật thị giác và thời trang.',
    context: 'Độ nhạy bén với văn hóa sáng tạo'
  },

  // Social (S) - 4 questions
  {
    id: 13,
    category: 'S',
    question: 'Tôi cảm thấy vui và có ý nghĩa khi giảng bài cho bạn bè hoặc hướng dẫn ai đó hiểu một bài học khó.',
    context: 'Tố chất sư phạm & chia sẻ tri thức'
  },
  {
    id: 14,
    category: 'S',
    question: 'Bạn bè thường tìm đến tôi để tâm sự vì tôi biết lắng nghe, giữ bí mật và đưa ra lời khuyên chân thành.',
    context: 'Khả năng thấu cảm & tư vấn'
  },
  {
    id: 15,
    category: 'S',
    question: 'Tôi nhiệt tình tham gia các hoạt động tình nguyện, phong trào Đoàn trường và các dự án vì cộng đồng.',
    context: 'Tinh thần phục vụ xã hội'
  },
  {
    id: 16,
    category: 'S',
    question: 'Tôi thích làm việc trong môi trường tập thể có nhiều sự tương tác giữa con người với con người.',
    context: 'Gắn kết đội nhóm & xã hội'
  },

  // Enterprising (E) - 4 questions
  {
    id: 17,
    category: 'E',
    question: 'Tôi tự tin đứng trước đám đông để thuyết trình, trình bày ý tưởng hoặc đại diện nhóm phát biểu.',
    context: 'Bản lĩnh thuyết trình & đàm phán'
  },
  {
    id: 18,
    category: 'E',
    question: 'Tôi thích lập kế hoạch kinh doanh nhỏ (bán hàng online, tổ chức gian hàng hội chợ trường).',
    context: 'Óc nhạy bén kinh doanh'
  },
  {
    id: 19,
    category: 'E',
    question: 'Tôi thích giữ vai trò nhóm trưởng (leader), phân công công việc và đốc thúc mọi người đạt mục tiêu.',
    context: 'Năng lực lãnh đạo & tổ chức'
  },
  {
    id: 20,
    category: 'E',
    question: 'Tôi thích thuyết phục người khác đồng ý với quan điểm hoặc dự án mà tôi tâm huyết.',
    context: 'Kỹ năng thuyết phục & truyền cảm hứng'
  },

  // Conventional (C) - 4 questions
  {
    id: 21,
    category: 'C',
    question: 'Tôi là người làm việc rất ngăn nắp, thích sắp xếp dữ liệu, thời khóa biểu và ghi chép rõ ràng.',
    context: 'Tính kỷ luật & tổ chức'
  },
  {
    id: 22,
    category: 'C',
    question: 'Tôi cẩn thận kiểm tra từng con số, dấu phẩy, văn bản để đảm bảo không xảy ra sai sót.',
    context: 'Sự tỉ mỉ & chuẩn xác'
  },
  {
    id: 23,
    category: 'C',
    question: 'Tôi thích làm việc theo các quy trình rõ ràng, có tiêu chuẩn và bảng hướng dẫn cụ thể.',
    context: 'Tôn trọng quy trình chuẩn mực'
  },
  {
    id: 24,
    category: 'C',
    question: 'Tôi hào hứng khi làm việc với các bảng tính Excel, sổ sách thống kê chi tiêu hoặc quản lý kho hàng.',
    context: 'Kỹ năng quản trị thông tin & nghiệp vụ'
  }
];

export const HIGH_SCHOOL_SUBJECTS_2027 = [
  { id: 'math', name: 'Toán học', compulsory: true, group: 'Bắt buộc' },
  { id: 'literature', name: 'Ngữ văn', compulsory: true, group: 'Bắt buộc' },
  { id: 'english', name: 'Tiếng Anh', compulsory: false, group: 'Ngoại ngữ' },
  { id: 'physics', name: 'Vật lí', compulsory: false, group: 'Khoa học Tự nhiên' },
  { id: 'chemistry', name: 'Hóa học', compulsory: false, group: 'Khoa học Tự nhiên' },
  { id: 'biology', name: 'Sinh học', compulsory: false, group: 'Khoa học Tự nhiên' },
  { id: 'history', name: 'Lịch sử', compulsory: false, group: 'Khoa học Xã hội' },
  { id: 'geography', name: 'Địa lí', compulsory: false, group: 'Khoa học Xã hội' },
  { id: 'economic_law', name: 'GD Kinh tế & Pháp luật', compulsory: false, group: 'Khoa học Xã hội' },
  { id: 'informatics', name: 'Tin học', compulsory: false, group: 'Công nghệ & Kỹ thuật số' },
  { id: 'technology', name: 'Công nghệ', compulsory: false, group: 'Công nghệ & Kỹ thuật số' }
];

export const ADMISSION_SCORE_RANGES = [
  { id: 'under_20', label: 'Dưới 20 điểm (Mục tiêu tốt nghiệp & Trường xét tuyển mức vừa)' },
  { id: '20_24', label: 'Từ 20 - 24 điểm (Mục tiêu các trường ĐH công lập uy tín khu vực ĐBSCL & TP.HCM)' },
  { id: '24_27', label: 'Từ 24 - 27 điểm (Mục tiêu các trường top đầu: Bách Khoa, UEH, Y Dược, Ngoại thương)' },
  { id: 'over_27', label: 'Trên 27 điểm (Mục tiêu các ngành tuyển sinh điểm cao kỷ lục: Y khoa, Khoa học Máy tính)' }
];
