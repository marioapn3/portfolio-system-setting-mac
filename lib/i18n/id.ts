import type {
  Profile,
  NavItem,
  Education,
  Experience,
  Achievement,
  SkillCategory,
  Project,
  Article,
  Contact,
} from "@/lib/data";

/** Indonesian content bundle. Proper nouns, tech, URLs, and role labels stay
 * in English (roles double as the Projects filter keys — see bucketOf). */

export const profile: Profile = {
  name: "Mario Aprilnino Prasetyo",
  role: "Backend Engineer",
  status: "Tersedia untuk bekerja",
  tagline:
    "Software Engineer passionate about scalable systems and reliable products.",
  cvUrl: "/mario-aprilnino-cv.pdf",
  location: "Semarang, Indonesia",
};

export const navItems: NavItem[] = [
  { id: "home", label: "Ikhtisar", icon: "home", color: "#007aff" },
  { id: "experience", label: "Pengalaman", icon: "briefcase", color: "#5e5ce6" },
  { id: "skills", label: "Keahlian", icon: "sparkles", color: "#bf5af2" },
  { id: "projects", label: "Proyek", icon: "folder", color: "#ff9500" },
];

export const education: Education[] = [
  {
    degree: "Sarjana Komputer (IPK: 3.96)",
    institution: "Universitas Dian Nuswantoro",
    detail: "IPK: 3.96",
    period: "Sep 2022 - Mar 2026",
  },
  {
    institution: "Loyola Senior High School",
  },
];

export const experiences: Experience[] = [
  {
    company: "PT. Macaroon Pte. Ltd. · YouApp AI",
    role: "Lead Backend Engineer",
    period: "Mar 2026 - sekarang",
    current: true,
    description:
      "Memimpin rekayasa backend untuk platform YouApp AI: arsitektur, pengiriman, dan arah teknis di seluruh layanan.",
    highlights: [
      "Memimpin desain dan pengembangan sistem backend skalabel berkinerja tinggi yang menopang aplikasi inti bisnis.",
      "Memberikan kepemimpinan teknis, termasuk keputusan arsitektur, code review, dan penegakan praktik terbaik.",
      "Berkolaborasi dengan tim lintas fungsi untuk menghadirkan solusi end-to-end yang andal, aman, dan efisien.",
      "Membimbing engineer dan mendorong peningkatan berkelanjutan pada proses pengembangan, alat, dan performa sistem.",
    ],
    tech: ["Golang", "NestJS", "MongoDB", "PostgreSQL", "RabbitMQ", "Firebase"],
  },
  {
    company: "PT. Macaroon Pte. Ltd. · YouApp AI",
    role: "Backend Engineer",
    period: "Agu 2025 - Feb 2026",
    description:
      "Mengembangkan layanan backend untuk platform YouApp AI — transaksi multi-mata uang, payment gateway, dan fitur fintech.",
    highlights: [
      "Membangun layanan backend yang menangani 18.000+ pengguna, memastikan ketersediaan tinggi dan pengelolaan data skalabel di seluruh platform.",
      "Menerapkan sistem transaksi multi-mata uang yang mendukung kurs global dengan konversi mata uang secara real-time.",
      "Mengintegrasikan beberapa payment gateway untuk mendukung beragam metode pembayaran dan merampingkan pemrosesan transaksi.",
      "Mengembangkan fitur fintech termasuk pengelolaan kartu Visa virtual & fisik, integrasi keuangan pihak ketiga, dan penanganan transaksi kripto.",
    ],
    tech: ["Golang", "NestJS", "MongoDB", "PostgreSQL", "RabbitMQ", "Firebase"],
  },
  {
    company: "PT Monago Teknologi Nusantara",
    role: "Backend Developer",
    period: "Nov 2024 - Jul 2025",
    description:
      "Membangun sistem pendukung keputusan dan integrasi chatbot menggunakan FastAPI, NestJS, MongoDB, dan LangChain.",
    highlights: [
      "Membangun sistem pendukung keputusan menggunakan FastAPI, NestJS, dan MongoDB untuk membuat aplikasi backend yang cepat, ringan, dan skalabel.",
      "Mengintegrasikan chatbot RAG/LLM dengan LangChain, ChromaDB, dan Redis Stack untuk solusi dinamis yang sadar konteks dan terhubung ke beragam sumber data.",
    ],
    tech: ["FastAPI", "NestJS", "MongoDB", "Langchain", "ChromaDB", "Redis"],
  },
  {
    company: "Bengkel Koding, Dian Nuswantoro University",
    role: "Backend Developer",
    period: "Agu 2024 - sekarang",
    current: true,
    description:
      "Mengembangkan REST API, mengoptimalkan database, dan men-deploy model machine learning.",
    highlights: [
      "Mengembangkan dan mengoptimalkan RESTful API menggunakan Laravel dan FastAPI, mengintegrasikan PostgreSQL, MySQL, dan MongoDB untuk arsitektur yang kokoh dan skalabel.",
      "Men-deploy Large Language Model (LLM) dan model TensorFlow sebagai API produksi.",
    ],
    tech: ["Laravel", "FastAPI", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Agu 2023 - sekarang",
    current: true,
    description:
      "Mengembangkan aplikasi web dan mobile yang disesuaikan dengan kebutuhan klien.",
    highlights: [
      "Mengembangkan dan memelihara aplikasi full-stack untuk platform web dan mobile.",
      "Berkolaborasi dengan klien dan anggota tim untuk memastikan keselarasan proyek dan terpenuhinya standar kualitas.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Hi-Technology Competition",
    place: "Juara 1",
    event: "Software Competition 2025",
    date: "Apr 2025",
  },
  {
    title: "ITC 2025",
    place: "Juara 1",
    event: "Website Development Competition",
    date: "Jan 2025",
  },
  {
    title: "Hi-Technology Competition",
    place: "Juara 2",
    event: "Software Competition 2024",
    date: "Apr 2024",
  },
  {
    title: "ITC 2024",
    place: "Juara 2",
    event: "Website Development Competition",
    date: "Jan 2024",
  },
  {
    title: "Programming Competition",
    place: "Juara 3",
    event: "Membangun aplikasi Jurnal Akuntansi menggunakan Laravel + Vue",
    date: "Okt 2023",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Backend",
    items: [
      { name: "NestJS", logo: "nestjs.svg" },
      { name: "Golang", logo: "golang.svg" },
      { name: "ExpressJS", logo: "expressjs.svg" },
      { name: "FastAPI", logo: "fastapi.svg" },
      { name: "Laravel", logo: "laravel.svg" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", logo: "react.svg" },
      { name: "NextJS", logo: "nextjs.svg" },
      { name: "Vue", logo: "vue.svg" },
      { name: "TailwindCSS", logo: "tailwindcss.svg" },
    ],
  },
  {
    name: "Basis Data",
    items: [
      { name: "MongoDB", logo: "mongodb.svg" },
      { name: "PostgreSQL", logo: "postgresql.svg" },
      { name: "MySQL", logo: "mysql.svg" },
      { name: "Firebase", logo: "firebase.svg" },
      { name: "ChromaDB", logo: "chroma.svg" },
    ],
  },
  {
    name: "AI & Pesan",
    items: [
      { name: "Langchain", logo: "langchain.svg" },
      { name: "RabbitMQ", logo: "rmq.png" },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "MyFusionPay",
    role: "Backend Web3 Developer",
    description:
      "FusionPay adalah konektor Web3 non-custodial yang menyederhanakan pembayaran lintas batas, akses dompet pintar, dan kegunaan kripto dunia nyata tanpa akun atau kerumitan.",
    tech: ["Golang", "PostgreSQL", "Redis", "OneSignal"],
    integrations: [
      "Web3: Simplex, Superex, Particle Network",
      "Pembayaran: Aleta Visa Card",
      "Blockchain: Etherscan, Alchemy",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.myfusionpay.app&hl=en",
    appStore:
      "https://apps.apple.com/my/app/fusionpay-digital-wallet/id6756575260",
  },
  {
    name: "YouApp: Trips & Experiences",
    role: "Backend Developer",
    description:
      "YouApp adalah platform pengalaman terpercaya yang memungkinkan Anda menemukan, memesan, dan mengikuti aktivitas lokal nyata yang diselenggarakan oleh lokal yang terverifikasi dan bersertifikat untuk pengalaman perjalanan dan gaya hidup yang bermakna dan otentik.",
    tech: [
      "NestJS",
      "MongoDB",
      "Socket.IO",
      "RabbitMQ",
      "Redis",
      "Firebase",
      "Stripe",
      "Betterpay",
      "Google Maps API",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.youapp.you_app&hl=en",
    appStore:
      "https://apps.apple.com/id/app/youapp-trips-experiences/id6444595490",
  },
  {
    name: "Maharbote Social",
    role: "Backend Developer",
    description:
      "Aplikasi media sosial global dengan chat real-time yang memadukan Maharbote Myanmar yang otentik dan AI modern untuk menghubungkan komunitas Myanmar di seluruh dunia melalui persahabatan yang bermakna, komunitas, dan acara kehidupan nyata.",
    tech: ["NestJS", "PostgreSQL", "Socket.IO", "Firebase", "Google Maps API"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.maharbote.ai&hl=id",
    appStore: "https://apps.apple.com/us/app/maharbote-social/id6753066582",
  },
  {
    name: "BeSTI Chatbot",
    role: "Backend Developer",
    description:
      "BeSTI Chatbot adalah chatbot yang dapat menjawab pertanyaan seputar program STI (Sarjana Teknik Informatika) di Udinus.",
    tech: ["FastAPI", "MongoDB", "Gemini", "Langchain", "ChromaDB"],
  },
  {
    name: "STI Apps Udinus",
    role: "Backend Developer",
    description:
      "STI Apps adalah aplikasi web untuk program STI (Sarjana Teknik Informatika) di Udinus.",
    tech: ["Laravel", "NextJS", "TailwindCSS", "MySQL"],
    url: "https://sti.dinus.id/",
  },
  {
    name: "Reservasi Udinus",
    role: "DevOps",
    description:
      "Reservasi Udinus adalah aplikasi web untuk program Udinus (Universitas Dian Nuswantoro) di Udinus.",
    tech: ["Laravel", "NextJS", "TailwindCSS", "PostgreSQL"],
    url: "https://reservasi.bengkelkoding.dinus.id/",
  },
  {
    name: "Konteks",
    role: "Backend Developer",
    description:
      "Konteks adalah aplikasi web rantai pasok B2B dengan integrasi AI.",
    tech: ["NestJS", "MongoDB", "OpenAI", "Langchain", "ChromaDB"],
    url: "https://konteks.biz/",
  },
  {
    name: "Monago",
    role: "Backend Developer",
    description:
      "Monago mempercepat bisnis Anda dengan data sintetis yang aman dan prediksi bertenaga AI, membantu Anda memperoleh wawasan dan mengambil keputusan yang lebih cerdas.",
    tech: [
      "FastAPI",
      "MongoDB",
      "OpenAI",
      "Langchain",
      "Deepseek-chat",
      "Redis Stack",
      "ChromaDB",
    ],
    url: "https://monago.io/",
  },
  {
    name: "BSP Tracking",
    role: "Fullstack Developer",
    description:
      "BSP Tracking adalah Sistem Manajemen Pengiriman Kendaraan yang dikembangkan oleh PT BSP Semarang. Termasuk aplikasi berbasis web untuk memantau pengiriman kendaraan dan aplikasi mobile yang digunakan pengemudi untuk mengirimkan laporan pengiriman.",
    tech: [
      "Laravel",
      "Vue",
      "InertiaJS",
      "TailwindCSS",
      "Firebase",
      "MySQL",
    ],
  },
  {
    name: "Senikita",
    role: "Backend Developer",
    description:
      "Senikita adalah marketplace yang menyediakan platform untuk seni dan budaya daerah Indonesia.",
    tech: [
      "Laravel",
      "React",
      "TailwindCSS",
      "MySQL",
      "TensorflowJS",
      "Xendit",
    ],
    url: "https://senikita-fe.vercel.app/",
  },
  {
    name: "Widya",
    role: "Backend Developer",
    description:
      "Widya adalah platform pembelajaran yang menyediakan konten dan sumber daya edukatif untuk siswa dan pendidik.",
    tech: [
      "Laravel",
      "Next JS",
      "TailwindCSS",
      "MySQL",
      "TensorflowJS",
      "Xendit",
    ],
    url: "https://widya-senikita.vercel.app/",
  },
  {
    name: "Sirekam Poltekes Yogyakarta",
    role: "Backend Developer",
    description:
      "Sirekam adalah aplikasi yang digunakan untuk mengelola satuan kredit aktivitas mahasiswa di Poltekkes Yogyakarta. Memfasilitasi pelacakan dan pengelolaan aktivitas ekstrakurikuler mahasiswa untuk tujuan kredit akademik.",
    tech: ["Laravel", "TailwindCSS", "MySQL"],
    url: "https://sirekampolkesyogya.my.id/",
  },
  {
    name: "Dinacom DNCC",
    role: "Fullstack Developer",
    description:
      "Situs web ini dirancang khusus untuk memfasilitasi pendaftaran peserta dan mengelola dokumentasi terkait kompetisi DINACOM yang diselenggarakan oleh DNCC.",
    tech: ["Laravel", "Alpine", "Flowbite", "TailwindCSS", "MySQL"],
  },
  {
    name: "Devlearn",
    role: "Fullstack Developer",
    description:
      "Devlearn adalah platform pembelajaran bagi siswa untuk membuat dan menjual konten video terkait pemrograman, menyediakan ruang untuk berbagi pengetahuan dan memperoleh pendapatan dari keahlian mereka.",
    tech: ["Laravel", "TailwindCSS", "MySQL"],
  },
  {
    name: "StudyNest",
    role: "Backend Developer",
    description:
      "StudyNest adalah platform pendamping belajar yang dirancang untuk meningkatkan pengalaman belajar dengan memanfaatkan teknik efektif yang terbukti.",
    tech: ["Laravel", "Alpine", "TailwindCSS", "MySQL"],
  },
  {
    name: "Jurnalin",
    role: "Fullstack Developer",
    description:
      "Jurnalin adalah aplikasi akuntansi lanjutan yang menyederhanakan pengelolaan catatan keuangan perusahaan. Memudahkan pencatatan, pelacakan, dan analisis seluruh transaksi buku besar — mulai dari pencatatan harian hingga pembuatan laporan dan memastikan kepatuhan.",
    tech: ["Laravel", "Vue", "InertiaJS", "TailwindCSS", "MySQL"],
  },
  {
    name: "Getasan Apps",
    role: "Fullstack Developer",
    description:
      "Getasan Apps adalah aplikasi yang digunakan oleh Kecamatan Getasan di Kabupaten Semarang untuk menerima laporan dari warga.",
    tech: ["Flutter", "BLOC", "Golang", "MySQL"],
  },
  {
    name: "Kompas Clone",
    role: "Mobile Developer",
    description:
      "Aplikasi mobile hasil slicing UI Flutter untuk klon Kompas News. Proyek ini hanya untuk tujuan pembelajaran.",
    tech: ["Flutter"],
  },
];

export const articles: Article[] = [
  {
    title: "Menguasai Context di Go: Tulang Punggung Microservice yang Tangguh",
    category: "backend",
    readTime: "12 menit baca",
    date: "Des 21, 2025",
    description:
      "Panduan komprehensif tentang pemanfaatan paket 'context' bawaan untuk menegakkan batas layanan, mengelola timeout, menerapkan pembatalan, dan menyebarkan nilai lingkup permintaan di seluruh sistem terdistribusi yang kompleks.",
  },
  {
    title: "Merancang untuk Testabilitas: Menerapkan Clean Architecture pada Layanan Go",
    category: "backend",
    readTime: "12 menit baca",
    date: "Des 21, 2025",
    description:
      "Adopsi prinsip Clean Architecture untuk memisahkan logika bisnis dari framework, memastikan maintainabilitas, testabilitas, dan viabilitas proyek jangka panjang pada aplikasi Go yang kompleks.",
  },
  {
    title: "Menyetel Go Runtime: Pendalaman Manajemen Memori dan Optimasi GC",
    category: "backend",
    readTime: "10 menit baca",
    date: "Des 21, 2025",
    description:
      "Eksplorasi tingkat tinggi terhadap scheduler dan garbage collector Go untuk meminimalkan latensi, mengurangi jejak memori, dan memastikan performa yang dapat diprediksi pada sistem produksi.",
  },
  {
    title: "Maksimalkan Konkurensi: Membangun Microservice Throughput Tinggi dengan Goroutine Go",
    category: "backend",
    readTime: "8 menit baca",
    date: "Des 21, 2025",
    description:
      "Pendalaman model konkurensi Go untuk merancang dan menerapkan microservice yang sangat efisien dan berlatensi rendah serta mampu menangani beban paralel masif.",
  },
  {
    title: "Menguasai React 19: Bangun Aplikasi Web Mutakhir",
    category: "react",
    readTime: "5 menit baca",
    date: "Jan 15, 2024",
    description:
      "Pelajari fitur terbaru React 19 dan cara membuat komponen dinamis yang ditingkatkan AI untuk aplikasi web modern.",
  },
  {
    title: "Revolusikan Styling dengan Tailwind CSS 4.0",
    category: "css",
    readTime: "8 menit baca",
    date: "Jan 10, 2024",
    description:
      "Buka potensi penuh Tailwind CSS 4.0 untuk membuat desain responsif yang memukau dengan kecepatan dan fleksibilitas tanpa tanding.",
  },
  {
    title: "Buat API Berkinerja Tinggi dengan Node.js dan Express",
    category: "backend",
    readTime: "12 menit baca",
    date: "Jan 5, 2024",
    description:
      "Bangun RESTful API yang skalabel dan siap AI menggunakan Node.js dan Express untuk mendukung aplikasi generasi berikutnya.",
  },
  {
    title: "Vue.js 3 vs React 19: Pertarungan Framework Terakhir",
    category: "frontend",
    readTime: "10 menit baca",
    date: "Des 28, 2023",
    description:
      "Bandingkan Vue.js 3 dan React 19 secara langsung untuk memilih framework yang sempurna bagi proyek web generasi berikutnya.",
  },
  {
    title: "Tingkatkan Backend Anda dengan API Express.js",
    category: "backend",
    readTime: "4 menit baca",
    date: "Jan 18, 2024",
    description:
      "Pelajari cara membangun RESTful API yang cepat dan skalabel dengan Express.js untuk mendukung aplikasi web dan mobile modern.",
  },
  {
    title: "FastAPI: Bangun API Python Super Cepat untuk 2025",
    category: "backend",
    readTime: "6 menit baca",
    date: "Feb 1, 2024",
    description:
      "Temukan kekuatan FastAPI untuk membuat API Python berkinerja tinggi yang terintegrasi AI dengan dokumentasi otomatis.",
  },
  {
    title: "Go untuk Kecepatan: Membangun API Skalabel dengan Golang",
    category: "backend",
    readTime: "5 menit baca",
    date: "Feb 10, 2024",
    description:
      "Manfaatkan kesederhanaan dan kecepatan Go untuk membuat API berkinerja tinggi bagi aplikasi cloud-native.",
  },
  {
    title: "NestJS: Rancang Backend Skalabel dengan TypeScript",
    category: "backend",
    readTime: "6 menit baca",
    date: "Mar 1, 2024",
    description:
      "Manfaatkan NestJS dan TypeScript untuk membangun API modular kelas enterprise bagi ekosistem cloud modern.",
  },
];

export const contact: Contact = {
  heading: "Hubungi saya untuk kolaborasi",
  body: "Hubungi saya untuk kolaborasi atau proyek apa pun. Saya selalu terbuka untuk peluang dan proyek baru. Mari bekerja sama dan ciptakan sesuatu yang luarbiasa!",
  ctaLabel: "Mulai proyek",
  email: "#",
  social: [
    { label: "GitHub", href: "https://github.com/marioapn3", icon: "github", color: "#24292f" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mario-aprilnino/", icon: "linkedin", color: "#0a66c2" },
    { label: "Instagram", href: "https://www.instagram.com/mario.apn/", icon: "instagram", color: "#d62976" },
    { label: "WhatsApp", href: "https://wa.me/6281247430546", icon: "whatsapp", color: "#25d366" },
    { label: "Telegram", href: "https://t.me/marioaprilnino", icon: "send", color: "#26a5e4" },
  ],
  footer: `© ${new Date().getFullYear()} ${profile.name}`,
};
