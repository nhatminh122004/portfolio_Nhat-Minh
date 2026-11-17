import { ExperienceItem, AchievementItem, SkillCategory, FocusArea } from '../types';

export const portfolioData = {
  personal: {
    name: 'Nguyễn Nhất Minh',
    englishName: 'Nguyen Nhat Minh',
    status: {
      vi: 'Sẵn sàng hợp tác cho các dự án AI & Công nghệ',
      en: 'Available for Applied AI & Tech Innovations',
    },
    taglines: {
      vi: 'KIẾN TẠO CÔNG NGHỆ. TẠO DỰNG GIÁ TRỊ.',
      en: 'ENGINEERING INTELLIGENCE. CREATING IMPACT.',
    },
    roles: {
      vi: [
        'Chuyên Viên Kỹ Thuật (ISIEE)',
        'Ứng Dụng AI & Prompt Engineering',
        'Nghiên Cứu Công Nghệ & Blockchain',
        'Chuyển Đổi Số & Vận Hành Hệ Thống',
      ],
      en: [
        'Technical Specialist (ISIEE)',
        'Applied AI & Prompt Engineer',
        'Blockchain & Tech Researcher',
        'Digital Transformation & Operations',
      ],
    },
    heroDesc: {
      vi: 'Định hướng phát triển chuyên sâu trong lĩnh vực AI ứng dụng và công nghệ hiện đại. Khát khao xây dựng, tối ưu hóa và vận hành các giải pháp công nghệ tiên tiến vào thực tiễn doanh nghiệp.',
      en: 'Specializing in Applied AI and modern technological frameworks. Driven to design, optimize, and operate high-impact technical solutions in real-world enterprise environments.',
    },
    aboutQuote: {
      vi: 'Tôi định hướng phát triển sự nghiệp trong lĩnh vực Công nghệ thông tin, tập trung vào ứng dụng trí tuệ nhân tạo (AI) và các giải pháp công nghệ hiện đại vào thực tiễn. Mục tiêu của tôi là trở thành một nhân sự kỹ thuật có khả năng phân tích, thiết kế và triển khai các hệ thống hiệu quả, góp phần tối ưu vận hành và gia tăng giá trị cho doanh nghiệp. Tôi luôn chủ động trau dồi kiến thức, cập nhật công nghệ mới và tích lũy kinh nghiệm dự án, hướng đến xây dựng nền tảng vững chắc trong AI ứng dụng, dữ liệu và tự động hóa, với mục tiêu dài hạn trở thành chuyên gia công nghệ tạo ra các giải pháp thực tiễn, bền vững.',
      en: 'I aim to develop my career in Information Technology, focusing on the application of Artificial Intelligence (AI) and modern technology solutions into practice. My goal is to become a technical professional capable of analyzing, designing, and deploying efficient systems, contributing to optimizing operations and adding value to businesses. I continuously enhance my knowledge, update new technologies, and accumulate project experience, aiming to build a solid foundation in applied AI, data, and automation, with the long-term goal of becoming a technology expert who creates practical, sustainable solutions.',
    },
    contact: {
      email: 'nhatminh122004@gmail.com',
      phone: '0364 244 786',
      location: {
        vi: 'Phường Vườn Lài, TPHCM',
        en: 'Vuon Lai Ward, HCMC',
      },
      linkedin: 'https://www.linkedin.com/in/nguyennhatminh1/',
      facebook: 'https://www.facebook.com/nhatminh19122004/',
    },
  },

  experiences: [
    {
      id: 'exp-1',
      isCurrent: true,
      tag: 'CURRENT POSITION',
      role: {
        vi: 'Chuyên Viên Kỹ Thuật',
        en: 'Technical Specialist',
      },
      company: {
        vi: 'Viện Nghiên Cứu Giáo Dục và Kinh Tế Quốc Tế (ISIEE)',
        en: 'Institute of Studies of International Education and Economics (ISIEE)',
      },
      time: {
        vi: '10/2025 - Hiện tại',
        en: '10/2025 - Present',
      },
      descriptions: {
        vi: [
          '<strong class="text-slate-100 font-semibold">Triển khai &amp; vận hành công nghệ giáo dục:</strong> Phụ trách khảo sát, lắp đặt, cấu hình, kiểm thử và bàn giao hệ thống thiết bị phục vụ mô hình lớp học OMO tại các trường đối tác, đảm bảo đáp ứng yêu cầu kỹ thuật trong quá trình giảng dạy.',
          '<strong class="text-slate-100 font-semibold">Hỗ trợ kỹ thuật &amp; quản lý thiết bị:</strong> Giám sát hoạt động lớp học trên nền tảng ClassIn; chẩn đoán và xử lý sự cố phần mềm, kết nối mạng, âm thanh, hình ảnh và thiết bị ngoại vi. Đồng thời kiểm tra, quản lý thiết bị và phối hợp với nhà trường, giáo viên để duy trì hoạt động giảng dạy ổn định.',
          '<strong class="text-slate-100 font-semibold">Ứng dụng AI &amp; phát triển học liệu số:</strong> Tham gia vận hành chương trình Ignite English, kiểm tra chất lượng học liệu, ứng dụng các công cụ AI trong xây dựng nội dung và sản xuất video giáo dục; phối hợp báo cáo kỹ thuật và hỗ trợ các hoạt động đào tạo của Viện.',
        ],
        en: [
          '<strong class="text-slate-100 font-semibold">Educational Technology Deployment &amp; Operations:</strong> Conduct technical surveys, install, configure, test, and hand over classroom equipment for Online-Merge-Offline (OMO) learning environments at partner schools, ensuring technical readiness for teaching activities.',
          '<strong class="text-slate-100 font-semibold">Technical Support &amp; Equipment Management:</strong> Monitor classes through the ClassIn platform; diagnose and troubleshoot software, network, audio, video, and peripheral issues. Manage equipment and coordinate with schools and teachers to maintain stable classroom operations.',
          '<strong class="text-slate-100 font-semibold">AI Applications &amp; Digital Learning Content:</strong> Support Ignite English program operations, review educational materials, and apply AI tools to content development and educational video production. Coordinate technical reporting and support the Institute\'s training activities.',
        ],
      },
    },
    {
      id: 'exp-2',
      tag: 'APPLIED AI & CONTENT',
      role: {
        vi: 'Intern AI Prompt',
        en: 'AI Prompt Engineering Intern',
      },
      company: {
        vi: 'Công ty Cổ Phần SELA HOLDINGS',
        en: 'SELA HOLDINGS JSC',
      },
      time: {
        vi: '07/2025 - 09/2025',
        en: '07/2025 - 09/2025',
      },
      descriptions: {
        vi: [
          'Phát triển nội dung học tập bằng AI: Sử dụng kỹ thuật Prompt Engineering nâng cao với ChatGPT để xây dựng kịch bản, cấu trúc lý thuyết, hệ thống hội thoại tương tác, tối ưu hóa và cá nhân hóa lộ trình học cho từng đối tượng.',
          'Sản xuất video bài giảng sinh động: Ứng dụng công nghệ AI sinh video (VEO3) kết hợp CapCut để biên tập, thêm visual effects, âm thanh đồng bộ nhằm tối đa hóa mức độ tương tác và trải nghiệm người học.',
          'Phân tích dữ liệu học tập: Khai thác AI phân tích hành vi và tiến độ học tập, tự động đề xuất bài học tiếp theo và linh hoạt điều chỉnh độ khó bài giảng theo năng lực cá nhân.',
        ],
        en: [
          'AI-Powered Curriculum Content: Employed advanced prompt engineering techniques with ChatGPT to craft interactive scripts, pedagogical outlines, and personalized learning pathways.',
          'Dynamic Video Production: Applied generative AI tools (VEO3) and CapCut to produce immersive video lectures with customized audiovisual effects, boosting user engagement.',
          'Data-Driven Learner Analytics: Leveraged AI models to track progress metrics, recommend tailored follow-up modules, and dynamically calibrate difficulty levels.',
        ],
      },
    },
    {
      id: 'exp-3',
      tag: 'STUDENT AFFAIRS OPERATIONS',
      role: {
        vi: 'Cộng Tác Viên CT-CTSV',
        en: 'Student Affairs Collaborator',
      },
      company: {
        vi: 'Phòng Chính Trị - Công Tác Sinh Viên HUFLIT',
        en: 'Office of Political & Student Affairs, HUFLIT',
      },
      time: {
        vi: '03/2025 - 10/2025',
        en: '03/2025 - 10/2025',
      },
      descriptions: {
        vi: [
          'Tiếp nhận, xử lý thông tin nghiệp vụ ban đầu, hỗ trợ tư vấn và giải đáp kịp thời các thắc mắc hành chính cho phụ huynh và sinh viên.',
          'Phối hợp tổ chức các chương trình chính trị - xã hội, sự kiện quy mô lớn của Nhà trường, thực hiện quy trình nghiệp vụ và ghi nhận, phản hồi các phản ánh của sinh viên.',
        ],
        en: [
          'Handled administrative inquiries, provided structured guidance, and resolved procedural concerns for students and parents.',
          'Coordinated major university events and student political-social initiatives, executing administrative procedures and synthesizing student feedback.',
        ],
      },
    },
    {
      id: 'exp-4',
      tag: 'TECH LEADERSHIP',
      role: {
        vi: 'Trưởng Phòng Technology',
        en: 'Head of Technology Department',
      },
      company: {
        vi: 'CLB Fintech và Đầu Tư Tài Chính HUFLIT',
        en: 'HUFLIT Fintech & Financial Investment Club',
      },
      time: {
        vi: '2023 - 06/2024',
        en: '2023 - 06/2024',
      },
      descriptions: {
        vi: [
          'Chịu trách nhiệm điều hành, hoạch định và quản lý toàn diện các vấn đề kỹ thuật IT của Câu lạc bộ trong các hội thảo, sự kiện quy mô lớn.',
          'Tư vấn định hướng công nghệ cho Ban Chấp hành, đào tạo và hướng dẫn các thành viên tiếp cận công cụ số và phần mềm mới.',
          'Xây dựng, thiết kế và tối ưu nội dung truyền thông cho các buổi workshop chia sẻ tri thức công nghệ tài chính.',
        ],
        en: [
          'Directed, managed, and troubleshot all IT operations and tech logistics for Club seminars, competitions, and large events.',
          'Advised the Executive Board on technical decisions, mentoring club members in adopting modern productivity software and digital tools.',
          'Designed and produced tech-focused digital media materials for workshops and knowledge-sharing symposiums.',
        ],
      },
    },
    {
      id: 'exp-5',
      tag: 'BLOCKCHAIN & WEB3 RESEARCH',
      role: {
        vi: 'IT Research - Blockchain',
        en: 'IT Research - Blockchain Specialist',
      },
      company: {
        vi: 'Mạng Lưới Thúc Đẩy Fintech và Tài Sản Số (FADA)',
        en: 'Fintech and Digital Asset Development Network (FADA)',
      },
      time: {
        vi: '06/2023 - 06/2024',
        en: '06/2023 - 06/2024',
      },
      descriptions: {
        vi: [
          'Nghiên cứu chuyên sâu các xu hướng công nghệ Blockchain cốt lõi: Tài chính phi tập trung (DeFi), Hạ tầng Layer 1 / Layer 2, NFT, GameFi, và Zero-Knowledge Proofs (ZKP) phục vụ định hướng chiến lược.',
          'Tổng hợp và xử lý dữ liệu On-Chain & Off-Chain (CoinMarketCap, Dune Analytics, DexScreener...) để lập báo cáo phân tích thị trường chuyên sâu và đề xuất giải pháp công nghệ thích ứng.',
        ],
        en: [
          'Conducted deep-dive research into foundational Blockchain frontiers: DeFi protocols, Layer 1/2 scaling, NFTs, GameFi, and Zero-Knowledge Proofs (ZKP).',
          'Synthesized and visualized on-chain and market data using platforms like CoinMarketCap and Dune Analytics to produce industry intelligence reports.',
        ],
      },
    },
  ] as ExperienceItem[],

  achievements: [
    {
      id: 'achv-7',
      isNew: true,
      title: {
        vi: 'Giải Thưởng Cuộc Thi Trực Tuyến "Tìm Hiểu Tình Hữu Nghị Việt Nam - Lào" Năm 2026',
        en: 'Award in "Vietnam - Laos Friendship" Online Knowledge Contest 2026',
      },
      organization: {
        vi: 'Ủy ban Mặt trận Tổ quốc Việt Nam Phường Vườn Lài (TP. Hồ Chí Minh)',
        en: 'Fatherland Front Committee of Vuon Lai Ward (Ho Chi Minh City)',
      },
      year: '11/2026',
      category: {
        vi: 'Ngoại Giao Nhân Dân & Văn Hóa',
        en: 'Culture & Diplomacy',
      },
      icon: 'sparkles',
      documentImage: './thiep-moi-giai-thuong-viet-lao.jpg',
      details: {
        vi: 'Được Ban Thường trực Ủy ban MTTQ Việt Nam Phường Vườn Lài trân trọng trao giải trong khuôn khổ chương trình giao lưu văn hóa, hữu nghị với sinh viên ký túc xá sinh viên Lào tại TP. Hồ Chí Minh chủ đề "Kết nối văn hóa - Thắm tình hữu nghị" (Tổ chức ngày 21/11/2026 tại Trường THPT Nguyễn An Ninh).',
        en: 'Honored by the Standing Committee of the Fatherland Front Committee of Vuon Lai Ward in the friendship exchange event with Lao dormitory students in HCMC under the theme "Cultural Connection - Friendship Bond" (Held on Nov 21, 2026 at Nguyen An Ninh High School).',
      },
    },
    {
      id: 'achv-1',
      title: {
        vi: 'Sinh Viên 5 Tốt Cấp Trường',
        en: 'University-Level "Student of 5 Merits"',
      },
      organization: {
        vi: 'Trường ĐH Ngoại Ngữ - Tin Học TPHCM (HUFLIT)',
        en: 'Ho Chi Minh City University of Foreign Languages - IT (HUFLIT)',
      },
      year: '2024 - 2025',
      category: {
        vi: 'Danh Hiệu Sinh Viên Toàn Diện',
        en: 'Comprehensive Student Merit',
      },
      icon: 'star',
      details: {
        vi: 'Danh hiệu cao quý dành cho sinh viên đáp ứng toàn diện 5 tiêu chí: Đạo đức tốt, Học tập tốt, Thể lực tốt, Tình nguyện tốt, Hội nhập tốt.',
        en: 'Prestigious award recognizing excellence across all 5 pillars: Moral Character, Academic Merit, Physical Fitness, Volunteerism, and Global Integration.',
      },
    },
    {
      id: 'achv-2',
      title: {
        vi: 'Đoàn Viên Xuất Sắc',
        en: 'Outstanding Youth Union Member',
      },
      organization: {
        vi: 'Đoàn Thanh Niên Trường ĐH Ngoại Ngữ - Tin Học TPHCM',
        en: 'Youth Union of HUFLIT',
      },
      year: '2024 - 2025',
      category: {
        vi: 'Hoạt Động Phong Trào & Đoàn Thể',
        en: 'Union Leadership',
      },
      icon: 'award',
      details: {
        vi: 'Ghi nhận những đóng góp nổi bật trong công tác Đoàn và phong trào thanh niên trường học năm học 2024 - 2025.',
        en: 'Recognized for distinguished contributions and leadership in school youth union programs during academic year 2024 - 2025.',
      },
    },
    {
      id: 'achv-3',
      title: {
        vi: 'Giấy Khen Cuộc Thi "Đảng Trong Tôi"',
        en: 'Certificate of Merit in "The Party in Me" Competition',
      },
      organization: {
        vi: 'Trường ĐH Ngoại Ngữ - Tin Học TPHCM (HUFLIT)',
        en: 'HUFLIT',
      },
      year: '2024',
      category: {
        vi: 'Chính Trị & Tư Tưởng',
        en: 'Ideology & Competition',
      },
      icon: 'file-text',
      details: {
        vi: 'Giấy khen cấp trường vì thành tích xuất sắc trong cuộc thi tìm hiểu chính trị và truyền thống lịch sử "Đảng trong tôi".',
        en: 'Institutional merit award for exemplary achievement in ideological and historical knowledge competition.',
      },
    },
    {
      id: 'achv-4',
      title: {
        vi: 'Bằng Khen Cuộc Thi "Đảng Trong Tôi"',
        en: 'Provincial Diploma of Merit in "The Party in Me"',
      },
      organization: {
        vi: 'Tỉnh Ủy Tiền Giang (trước khi sáp nhập)',
        en: 'Tien Giang Provincial Party Committee (prior to merger)',
      },
      year: '2024',
      category: {
        vi: 'Khen Thưởng Cấp Tỉnh',
        en: 'Provincial Distinction',
      },
      icon: 'trophy',
      details: {
        vi: 'Bằng khen do Ban Thường vụ Tỉnh Ủy Tiền Giang trao tặng cho bài thi và thành tích nổi bật tại hội thi chính trị cấp tỉnh.',
        en: 'Diploma of Merit bestowed by the Provincial Party Committee for outstanding performance in the provincial-level competition.',
      },
    },
    {
      id: 'achv-5',
      title: {
        vi: 'Thanh Niên Tiên Tiến Làm Theo Lời Bác',
        en: 'Advanced Youth Following Uncle Ho\'s Teachings',
      },
      organization: {
        vi: 'Cấp Khoa - Trường ĐH Ngoại Ngữ - Tin Học TPHCM',
        en: 'Faculty Level - HUFLIT',
      },
      year: '2024 - 2025',
      category: {
        vi: 'Gương Mặt Điển Hình',
        en: 'Role Model Recognition',
      },
      icon: 'medal',
      details: {
        vi: 'Tuyên dương tấm gương thanh niên tiên tiến tiêu biểu trong học tập và rèn luyện theo tấm gương đạo đức Bác Hồ.',
        en: 'Commendation for exemplary dedication in academic pursuit and continuous personal development.',
      },
    },
    {
      id: 'achv-6',
      title: {
        vi: 'Cán Bộ Đoàn - Hội Xuất Sắc',
        en: 'Outstanding Union & Student Association Cadre',
      },
      organization: {
        vi: 'Trường ĐH Ngoại Ngữ - Tin Học TPHCM (HUFLIT)',
        en: 'HUFLIT',
      },
      year: '2024 - 2025',
      category: {
        vi: 'Lãnh Đạo & Quản Trị Tổ Chức',
        en: 'Cadre Leadership',
      },
      icon: 'crown',
      details: {
        vi: 'Ghi nhận năng lực tổ chức, quản lý và dẫn dắt các hoạt động sinh viên đạt hiệu quả thực chất và sức lan tỏa cao.',
        en: 'Commended for organizational capability, guidance, and high-impact engagement across student body programs.',
      },
    },
  ] as AchievementItem[],

  education: {
    institution: {
      vi: 'Trường Đại Học Ngoại Ngữ - Tin Học TP.HCM (HUFLIT)',
      en: 'Ho Chi Minh City University of Foreign Languages - Information Technology (HUFLIT)',
    },
    degree: {
      vi: 'Cử Nhân Công Nghệ Thông Tin (Đã tốt nghiệp)',
      en: 'Bachelor of Science in Information Technology (Graduated)',
    },
    major: {
      vi: 'Công Nghệ Thông Tin',
      en: 'Information Technology',
    },
    specialization: {
      vi: 'Công Nghệ Phần Mềm',
      en: 'Software Engineering',
    },
    period: '2022 - 2026 (Đã tốt nghiệp)',
    periodEn: '2022 - 2026 (Graduated)',
    statusNote: {
      vi: 'Chương trình đào tạo chuẩn quốc tế, trang bị tư duy giải thuật, phát triển phần mềm chuyên sâu và phương pháp luận kỹ thuật phần mềm. Đã chính thức tốt nghiệp.',
      en: 'High-standard curriculum fostering software engineering principles, algorithm thinking, and scalable system design. Officially graduated.',
    },
  },

  certifications: [
    {
      id: 'cert-google-prompting',
      isNew: true,
      isGoogle: true,
      isFeatured: true,
      title: {
        vi: 'Chuyên ngành Google Prompting Essentials',
        en: 'Google Prompting Essentials Specialization',
      },
      issuer: 'Google',
      category: {
        vi: 'Kỹ Thuật Prompt & Ứng Dụng AI',
        en: 'Prompt Engineering & Generative AI',
      },
      year: '07/2026',
      badge: 'Chuyên ngành',
      badgeEn: 'Specialization',
      image: './images/certs/google-prompting-essentials.png',
      completedDate: {
        vi: 'Đã hoàn thành tháng 7 2026',
        en: 'Completed July 2026',
      },
      skills: ['Prompt Engineering', 'Generative AI Workflows', 'Chain-of-Thought', 'Context Framing', 'Gemini & LLMs'],
      description: {
        vi: 'Chuyên ngành đào tạo chuyên sâu của Google về phương pháp luận thiết kế prompt tối ưu, kỹ thuật chuỗi tư duy (Chain-of-Thought), tinh chỉnh ngữ cảnh cho các mô hình ngôn ngữ lớn (LLM) và tự động hóa quy trình nghiệp vụ.',
        en: 'Google advanced specialization covering rigorous prompt engineering methodologies, structured context framing, chain-of-thought orchestration, and LLM automation for enterprise tasks.',
      },
    },
    {
      id: 'cert-google-jobsearch',
      isNew: true,
      isGoogle: true,
      isFeatured: true,
      title: {
        vi: 'Chuyên ngành Accelerate Your Job Search with AI',
        en: 'Accelerate Your Job Search with AI Specialization',
      },
      issuer: 'Google',
      category: {
        vi: 'Tối Ưu Năng Suất Số Với AI',
        en: 'AI Productivity & Career Positioning',
      },
      year: '07/2026',
      badge: 'Chuyên ngành',
      badgeEn: 'Specialization',
      image: './images/certs/google-accelerate-job-search.png',
      completedDate: {
        vi: 'Đã hoàn thành tháng 7 2026',
        en: 'Completed July 2026',
      },
      skills: ['AI Career Strategy', 'Digital Portfolio Optimization', 'Professional AI Communication', 'Market Research'],
      description: {
        vi: 'Chứng nhận chuyên ngành của Google về ứng dụng trí tuệ nhân tạo để tăng tốc phân tích cơ hội nghề nghiệp, hoàn thiện hồ sơ kỹ thuật số và xây dựng thương hiệu cá nhân công nghệ chuẩn mực.',
        en: 'Google specialization focused on deploying AI productivity tools to accelerate career insights, optimize technical portfolios, and build impactful digital professional branding.',
      },
    },
    {
      id: 'cert-google-itsupport',
      isNew: true,
      isGoogle: true,
      isFeatured: true,
      title: {
        vi: 'Chứng chỉ Chuyên môn Google IT Support',
        en: 'Google IT Support Professional Certificate',
      },
      issuer: 'Google',
      category: {
        vi: 'Vận Hành Hệ Thống & Hỗ Trợ IT',
        en: 'IT Infrastructure & Operations',
      },
      year: '07/2026',
      badge: 'Chứng chỉ Chuyên môn',
      badgeEn: 'Professional Certificate',
      image: './images/certs/google-it-support.png',
      completedDate: {
        vi: 'Đã hoàn thành tháng 7 2026',
        en: 'Completed July 2026',
      },
      skills: ['Network Protocols (TCP/IP, DNS, DHCP)', 'Linux & Windows Administration', 'System Troubleshooting', 'Security & Infrastructure'],
      description: {
        vi: 'Chứng chỉ chuyên môn 5 phần uy tín toàn cầu của Google: Khắc phục sự cố kỹ thuật, Mạng máy tính, Hệ điều hành Linux & Windows, Quản trị hệ thống IT và An toàn thông tin mạng.',
        en: 'Prestigious 5-part Google Professional Certificate covering Technical Support Fundamentals, Computer Networking, Linux/Windows Administration, IT System Management, and Defense Security.',
      },
    },
    {
      id: 'cert-google-aiessentials',
      isNew: true,
      isGoogle: true,
      isFeatured: true,
      title: {
        vi: 'Chuyên ngành Google AI Essentials',
        en: 'Google AI Essentials Specialization',
      },
      issuer: 'Google',
      category: {
        vi: 'Nền Tảng AI & Ứng Dụng Thực Tiễn',
        en: 'Applied AI Foundations',
      },
      year: '07/2026',
      badge: 'Chuyên ngành',
      badgeEn: 'Specialization',
      image: './images/certs/google-ai-essentials.png',
      completedDate: {
        vi: 'Đã hoàn thành tháng 7 2026',
        en: 'Completed July 2026',
      },
      skills: ['Applied Artificial Intelligence', 'Generative AI Principles', 'Data Analysis with AI', 'Responsible AI Practices'],
      description: {
        vi: 'Chuyên ngành nền tảng trí tuệ nhân tạo toàn diện của Google, thực hành sử dụng các công cụ Generative AI để tăng tốc hiệu suất công việc, phân tích dữ liệu và tích hợp giải pháp AI có trách nhiệm.',
        en: 'Comprehensive Google foundational AI specialization covering generative AI principles, data augmentation, practical productivity boosts, and ethical responsible AI implementation.',
      },
    },
    {
      id: 'cert-1',
      title: {
        vi: 'Video Editing Basics',
        en: 'Video Editing Basics',
      },
      issuer: 'Creative Media Training',
      category: {
        vi: 'Sản Xuất Nội Dung & Multimedia',
        en: 'Multimedia & Content Production',
      },
      year: '2024',
      badge: 'Certified',
    },
    {
      id: 'cert-2',
      isGoogle: true,
      title: {
        vi: 'Google Analytics for Beginners',
        en: 'Google Analytics for Beginners',
      },
      issuer: 'Google Analytics Academy',
      category: {
        vi: 'Phân Tích Dữ Liệu Số',
        en: 'Digital Analytics & Data',
      },
      year: '2024',
      badge: 'Google Certified',
    },
    {
      id: 'cert-3',
      isGoogle: true,
      title: {
        vi: 'Advanced Google Analytics',
        en: 'Advanced Google Analytics',
      },
      issuer: 'Google Analytics Academy',
      category: {
        vi: 'Phân Tích Dữ Liệu Nâng Cao',
        en: 'Digital Analytics & Data',
      },
      year: '2024',
      badge: 'Google Certified',
    },
    {
      id: 'cert-4',
      isGoogle: true,
      title: {
        vi: 'Getting Started with Google Analytics 360',
        en: 'Getting Started with Google Analytics 360',
      },
      issuer: 'Google Analytics Academy',
      category: {
        vi: 'Phân Tích Dữ Liệu Doanh Nghiệp',
        en: 'Enterprise Analytics',
      },
      year: '2024',
      badge: 'Google Certified',
    },
  ],

  skillCategories: [
    {
      id: 'ai-prompt',
      title: {
        vi: 'Trí Tuệ Nhân Tạo & Prompt Engineering',
        en: 'Applied AI & Prompt Engineering',
      },
      skills: [
        { name: 'Applied AI (ChatGPT, VEO3, Claude, Gemini)', level: 'Advanced', highlight: true },
        { name: 'AI Prompt Engineering & Context Structuring', level: 'Advanced', highlight: true },
        { name: 'AI-assisted Educational Content Creation', level: 'Proficient', highlight: true },
        { name: 'Generative Video Workflow (CapCut + AI)', level: 'Proficient' },
      ],
    },
    {
      id: 'tech-operations',
      title: {
        vi: 'Vận Hành Hệ Thống IT & Chuyển Đổi Số',
        en: 'IT Operations & Digital Transformation',
      },
      skills: [
        { name: 'IT Infrastructure Operations & Support', level: 'Advanced', highlight: true },
        { name: 'System Troubleshooting & Technical Diagnostic', level: 'Advanced', highlight: true },
        { name: 'Data Analysis & Metric Reporting', level: 'Proficient' },
        { name: 'Process Digitization & Workflow Optimization', level: 'Proficient' },
      ],
    },
    {
      id: 'blockchain-web3',
      title: {
        vi: 'Nghiên Cứu Công Nghệ Mới & Blockchain',
        en: 'Emerging Tech & Blockchain Research',
      },
      skills: [
        { name: 'Blockchain Ecosystems (DeFi, L1/L2, ZKP)', level: 'In-depth', highlight: true },
        { name: 'On-chain & Market Data Analysis (Dune, CMC)', level: 'Proficient' },
        { name: 'Technology Feasibility Assessment', level: 'Proficient' },
      ],
    },
    {
      id: 'core-competencies',
      title: {
        vi: 'Năng Lực Cốt Lõi & Kỹ Năng Mềm',
        en: 'Core Competencies & Execution',
      },
      skills: [
        {
          name: {
            vi: 'Chủ động trong công việc (Proactive Execution)',
            en: 'Proactive Execution & Initiative',
          },
          level: 'Core',
          highlight: true,
        },
        {
          name: {
            vi: 'Khả năng học hỏi & thích ứng cực nhanh (Fast Learner)',
            en: 'Fast Learner & Rapid Adaptability',
          },
          level: 'Core',
          highlight: true,
        },
        {
          name: {
            vi: 'Giải quyết vấn đề phức tạp (Problem Solving)',
            en: 'Complex Problem Solving',
          },
          level: 'Core',
        },
        {
          name: {
            vi: 'Quản trị thời gian & tỉ mỉ (Detail-oriented)',
            en: 'Time Management & Detail-Oriented',
          },
          level: 'Core',
        },
        {
          name: {
            vi: 'Làm việc nhóm & điều phối sự kiện (Teamwork)',
            en: 'Teamwork & Event Coordination',
          },
          level: 'Core',
        },
        {
          name: {
            vi: 'Microsoft Office & Workspace Suite (Thành thạo)',
            en: 'Microsoft Office & Workspace Suite (Proficient)',
          },
          level: 'Proficient',
        },
      ],
    },
  ] as SkillCategory[],

  focusAreas: [
    {
      id: 'focus-2',
      title: {
        vi: 'Triển Khai & Vận Hành Hệ Thống Kỹ Thuật Giáo Dục',
        en: 'EdTech System Deployment & Operations',
      },
      tag: {
        vi: 'Vận Hành & Công Nghệ Giáo Dục',
        en: 'EdTech Operations & Support',
      },
      organization: {
        vi: 'Viện Nghiên Cứu Giáo Dục và Kinh Tế Quốc Tế (ISIEE)',
        en: 'Institute of Studies of International Education and Economics (ISIEE)',
      },
      period: {
        vi: '10/2025 – Hiện tại',
        en: '10/2025 – Present',
      },
      summary: {
        vi: 'Phụ trách triển khai, vận hành và hỗ trợ kỹ thuật cho mô hình lớp học trực tuyến kết hợp trực tiếp (OMO) tại các trường đối tác. Đồng thời tham gia ứng dụng công nghệ AI và các giải pháp số nhằm nâng cao chất lượng giảng dạy, tối ưu hóa quy trình vận hành và hỗ trợ hoạt động đào tạo của Viện.',
        en: 'Responsible for deploying, operating, and providing technical support for Online-Merge-Offline (OMO) classroom models across partner schools, while applying AI technologies and digital solutions to enhance teaching quality, streamline operations, and support institutional training.',
      },
      highlights: {
        vi: [
          'Triển khai hạ tầng lớp học: Khảo sát kỹ thuật, lắp đặt, cấu hình, kiểm thử và bàn giao các thiết bị phục vụ giảng dạy như máy tính, camera, loa, micro và hệ thống âm thanh tại các trường đối tác.',
          'Vận hành & hỗ trợ kỹ thuật: Giám sát hoạt động lớp học OMO trên nền tảng ClassIn; chẩn đoán và xử lý sự cố về phần mềm, kết nối mạng, âm thanh, hình ảnh và thiết bị ngoại vi, bảo đảm quá trình giảng dạy diễn ra ổn định.',
          'Quản lý thiết bị & phối hợp triển khai: Kiểm tra, cập nhật, theo dõi tình trạng thiết bị; phối hợp với nhà trường, giáo viên và các bộ phận liên quan để triển khai, xử lý sự cố và lập báo cáo kỹ thuật.',
          'Ứng dụng AI & phát triển học liệu số: Tham gia vận hành chương trình Ignite English, kiểm tra chất lượng học liệu và ứng dụng các công cụ AI trong xây dựng nội dung, sản xuất video giáo dục phục vụ hoạt động giảng dạy.',
        ],
        en: [
          'Classroom Infrastructure Deployment: Conduct technical surveys, install, configure, test, and hand over teaching hardware including PCs, cameras, speakers, microphones, and audio systems at partner schools.',
          'Operations & Technical Support: Monitor OMO classes on the ClassIn platform; diagnose and resolve software, network, audio, video, and peripheral issues to guarantee uninterrupted instruction.',
          'Equipment Management & Coordination: Inspect, update, and track hardware status; coordinate with partner schools, teachers, and internal teams for deployment, incident resolution, and technical reporting.',
          'AI Integration & Digital Learning Materials: Support operations for the Ignite English program, check material quality, and leverage AI tools to create educational content and instructional videos.',
        ],
      },
      technologies: [
        'IT Technical Support',
        'OMO & ClassIn Operations',
        'EdTech Deployment',
        'Hardware & AV Systems',
        'System Troubleshooting',
        'AI Content Production',
      ],
    },
    {
      id: 'focus-1',
      title: {
        vi: 'Ứng Dụng AI Vào Sản Xuất Nội Dung & Đào Tạo',
        en: 'AI-Driven Educational Content & Training Production',
      },
      tag: {
        vi: 'Trí Tuệ Nhân Tạo Ứng Dụng',
        en: 'Applied AI Innovation',
      },
      organization: {
        vi: 'Công ty Cổ phần SELA HOLDINGS (SELA HOLDINGS JSC)',
        en: 'SELA HOLDINGS JSC',
      },
      period: '07/2025 – 09/2025',
      summary: {
        vi: 'Tham gia xây dựng và triển khai quy trình ứng dụng trí tuệ nhân tạo tạo sinh (Generative AI) trong phát triển nội dung giáo dục số. Tập trung khai thác Prompt Engineering, sản xuất video bằng AI và phân tích dữ liệu học tập nhằm tối ưu quy trình biên soạn học liệu, cá nhân hóa nội dung đào tạo và nâng cao trải nghiệm học tập của học viên.',
        en: 'Designed and implemented Generative AI workflows for digital educational content development, leveraging Prompt Engineering, AI video synthesis, and learner analytics to streamline content authoring, personalize training, and elevate student learning experiences.',
      },
      highlights: {
        vi: [
          'Phát triển nội dung giáo dục bằng AI: Ứng dụng Prompt Engineering với ChatGPT để xây dựng hơn 100 kịch bản, cấu trúc bài học, nội dung lý thuyết và hội thoại tương tác, phù hợp với nhiều nhóm độ tuổi và trình độ học viên.',
          'Thiết kế & tối ưu quy trình sản xuất học liệu: Xây dựng quy trình kết hợp các công cụ Generative AI từ khâu lên ý tưởng, phát triển kịch bản đến hoàn thiện nội dung, góp phần rút ngắn thời gian biên soạn và nâng cao tính nhất quán của học liệu số.',
          'Sản xuất video giáo dục bằng AI: Kết hợp Google Veo 3 và CapCut để tạo dựng, biên tập video bài giảng, tích hợp hiệu ứng hình ảnh, âm thanh và các tình huống minh họa sinh động, góp phần tối ưu thời gian hậu kỳ và tăng tính tương tác.',
          'Phân tích dữ liệu & cá nhân hóa học tập: Khai thác công cụ AI để thu thập, phân tích tiến độ và mức độ tương tác của học viên; hỗ trợ đề xuất nội dung phù hợp, điều chỉnh độ khó và cải thiện trải nghiệm học tập theo nhu cầu của từng đối tượng.',
        ],
        en: [
          'AI-Powered Educational Content: Leveraged ChatGPT Prompt Engineering to author 100+ instructional scripts, lesson outlines, theory modules, and interactive dialogues tailored across age groups and proficiency levels.',
          'Learning Material Pipeline Optimization: Built an integrated Generative AI workflow spanning ideation, scripting, and final review, accelerating authoring turnaround and ensuring digital curriculum consistency.',
          'AI Educational Video Production: Combined Google Veo 3 and CapCut to produce and edit lecture videos with rich visual effects, synchronized audio, and dynamic illustrations, optimizing post-production time and engagement.',
          'Learner Analytics & Personalization: Deployed AI tools to capture and analyze learner progress and engagement metrics, recommending tailored lessons and dynamically adjusting difficulty levels.',
        ],
      },
      technologies: [
        'Generative AI',
        'ChatGPT',
        'Prompt Engineering',
        'Google Veo 3',
        'CapCut',
        'AI Content Development',
        'Learner Analytics',
      ],
    },
    {
      id: 'focus-3',
      title: {
        vi: 'Nghiên Cứu Chuyên Sâu Blockchain & Dữ Liệu On-Chain',
        en: 'Blockchain Research & Web3 Analytical Intelligence',
      },
      tag: {
        vi: 'Nghiên Cứu Công Nghệ Mới',
        en: 'Web3 & Financial Tech',
      },
      organization: {
        vi: 'Mạng Lưới Thúc Đẩy Fintech và Tài Sản Số (FADA)',
        en: 'Fintech and Digital Asset Development Network (FADA)',
      },
      period: '06/2023 – 06/2024',
      summary: {
        vi: 'Tham gia nghiên cứu, phân tích và tổng hợp thông tin về các công nghệ Blockchain và hệ sinh thái tài sản số, tập trung vào tài chính phi tập trung (DeFi), giải pháp mở rộng Layer 2 và Zero-Knowledge Proofs (ZKP). Khai thác dữ liệu On-Chain kết hợp các công cụ phân tích thị trường nhằm đánh giá xu hướng phát triển, nhận diện rủi ro công nghệ và xây dựng báo cáo nghiên cứu phục vụ hoạt động chia sẻ tri thức trong cộng đồng Fintech.',
        en: 'Researched, analyzed, and synthesized insights across Blockchain technologies and digital asset ecosystems, focusing on Decentralized Finance (DeFi), Layer 2 scaling solutions, and Zero-Knowledge Proofs (ZKP). Combined On-Chain telemetry with market analytics tools to evaluate tech trends, assess technical risks, and produce research briefings for the Fintech community.',
      },
      highlights: {
        vi: [
          'Nghiên cứu công nghệ Blockchain & Web3: Tìm hiểu và phân tích các nền tảng Blockchain, giao thức DeFi, giải pháp Layer 2 Rollups và Zero-Knowledge Proofs (ZKP), đánh giá đặc điểm công nghệ, tiềm năng ứng dụng và xu hướng phát triển của hệ sinh thái tài sản số.',
          'Phân tích Tokenomics & giải pháp Layer 2: Theo dõi cơ chế vận hành, mô hình kinh tế token và các yếu tố tác động đến hệ sinh thái Blockchain; nghiên cứu những giải pháp mở rộng Layer 2 nhằm tổng hợp thông tin về khả năng mở rộng và hiệu quả ứng dụng công nghệ.',
          'Khai thác & trực quan hóa dữ liệu On-Chain: Sử dụng Dune Analytics và CoinMarketCap để thu thập, tổng hợp, theo dõi dữ liệu thị trường; xây dựng biểu đồ trực quan phục vụ việc phân tích biến động giá, xu hướng giao dịch và hoạt động của các hệ sinh thái Blockchain.',
          'Tổng hợp báo cáo & đánh giá xu hướng công nghệ: Tham gia xây dựng báo cáo nghiên cứu định lượng và định tính, phân tích các cơ hội, rủi ro và xu hướng phát triển của DeFi, Layer 2 và công nghệ tài sản số, góp phần cung cấp thông tin chuyên môn cho cộng đồng Fintech.',
        ],
        en: [
          'Blockchain & Web3 Technology Research: Investigated Blockchain platforms, DeFi protocols, Layer 2 Rollups, and Zero-Knowledge Proofs (ZKP), evaluating technical architectures, practical adoption, and digital asset ecosystem trends.',
          'Tokenomics & Layer 2 Scaling Analysis: Examined protocol mechanics, token economic models, and ecosystem drivers alongside Layer 2 scaling solutions to evaluate throughput scalability and real-world tech utility.',
          'On-Chain Data Mining & Visualization: Used Dune Analytics and CoinMarketCap to aggregate and monitor market telemetry, building visual charts to analyze price movements, transaction trends, and ecosystem activity.',
          'Quantitative & Qualitative Trend Reporting: Authored quantitative and qualitative intelligence reports analyzing opportunities, technological risks, and emerging directions across DeFi, Layer 2, and digital assets for the Fintech community.',
        ],
      },
      technologies: [
        'Blockchain & DeFi',
        'Layer 2 Solutions',
        'Zero-Knowledge Proofs',
        'Dune Analytics',
        'CoinMarketCap',
        'On-Chain Analytics',
        'Market Research',
      ],
    },
    {
      id: 'focus-4',
      title: {
        vi: 'Lãnh Đạo Đội Ngũ Công Nghệ & Chuyển Đổi Số Sự Kiện',
        en: 'Tech Leadership & Event Digitalization',
      },
      tag: {
        vi: 'Tổ Chức & Điều Phối',
        en: 'Leadership & Community',
      },
      organization: {
        vi: 'CLB Fintech HUFLIT & Phòng Chính Trị – Công Tác Sinh Viên (CT-CTSV)',
        en: 'HUFLIT Fintech Club & Office of Political & Student Affairs (CT-CTSV)',
      },
      period: '2023 – 2025',
      summary: {
        vi: 'Tham gia tổ chức, điều phối và hỗ trợ vận hành kỹ thuật cho các chương trình học thuật, hội thảo chuyên đề Fintech và hoạt động sinh viên tại Trường Đại học Ngoại ngữ – Tin học TP.HCM (HUFLIT). Đồng thời hỗ trợ ứng dụng các công cụ số trong công tác hành chính, tiếp nhận thông tin và giải đáp thắc mắc của sinh viên, góp phần nâng cao hiệu quả phối hợp tổ chức sự kiện và chất lượng phục vụ người học.',
        en: 'Organized, coordinated, and supported technical operations for academic programs, Fintech symposiums, and campus events at HUFLIT. Applied digital workspace tools in student affairs administration, inquiry intake, and student support, enhancing cross-team coordination and service delivery.',
      },
      highlights: {
        vi: [
          'Lãnh đạo & điều phối đội ngũ công nghệ: Đảm nhiệm vai trò Trưởng phòng Technology tại CLB Fintech và Đầu tư Tài chính HUFLIT; tổ chức, phân công và phối hợp thực hiện các nhiệm vụ kỹ thuật, hỗ trợ Ban Chấp hành trong việc triển khai hoạt động và ứng dụng công nghệ phục vụ sự kiện.',
          'Triển khai kỹ thuật cho hội thảo & sự kiện: Phối hợp chuẩn bị, kiểm tra và vận hành các hạng mục công nghệ trong chương trình học thuật, workshop Fintech và sự kiện sinh viên có hàng trăm người tham dự, góp phần đảm bảo hoạt động diễn ra thông suốt và hạn chế các gián đoạn kỹ thuật.',
          'Hỗ trợ số hóa quy trình công tác sinh viên: Tham gia tiếp nhận, xử lý thông tin và giải đáp thắc mắc của phụ huynh, sinh viên tại Phòng CT-CTSV; hỗ trợ ứng dụng công cụ số trong quản lý thông tin, phối hợp xử lý yêu cầu và cải thiện hiệu quả thực hiện các nghiệp vụ hành chính.',
          'Phối hợp tổ chức & đóng góp hoạt động sinh viên: Hỗ trợ triển khai các chương trình, hoạt động Đoàn – Hội và sự kiện của Nhà trường; tham gia thiết kế nội dung truyền thông, điều phối công việc và thực hiện nhiệm vụ được giao, đồng thời đạt nhiều danh hiệu và khen thưởng ghi nhận những đóng góp trong hoạt động sinh viên.',
        ],
        en: [
          'Technology Team Leadership & Coordination: Served as Head of Technology Department at the HUFLIT Fintech & Financial Investment Club, delegating technical tasks and advising the Executive Board on event technology adoption.',
          'Event & Workshop Technical Operations: Prepared, tested, and operated audio-visual and technical setups across academic programs, Fintech workshops, and student events with hundreds of attendees, ensuring smooth delivery with minimal technical disruption.',
          'Student Affairs Workflow Digitalization: Handled inquiries from students and parents at the Office of Political & Student Affairs (CT-CTSV), utilizing digital tools to streamline record tracking, request resolution, and administrative efficiency.',
          'Program Coordination & Campus Engagement: Supported Youth Union, Student Association, and university-wide events with digital media design and task coordination, earning multiple institutional honors for outstanding student contributions.',
        ],
      },
      technologies: [
        'Technical Coordination',
        'Event Technology Operations',
        'IT Support',
        'Digital Workflow',
        'Team Leadership',
        'Event Management',
        'Community Engagement',
      ],
    },
  ] as FocusArea[],
};
