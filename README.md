# CMI - Language Learning for Indonesian Migrant Workers

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18-green.svg)
![React](https://img.shields.io/badge/react-19-61dafb.svg)

**CMI (Calon Migran Indonesia)** adalah platform pembelajaran bahasa interaktif yang dirancang khusus untuk pekerja migran Indonesia. Platform ini membantu pengguna mempelajari Bahasa Inggris, Korea, dan Jepang dengan kurikulum berbasis CEFR yang disesuaikan untuk kebutuhan kerja di luar negeri.

## ✨ Fitur Utama

### 🎓 Pembelajaran Terstruktur
- **Kurikulum CEFR** (A1-C2) dengan mapping ke standar lokal (JLPT/TOPIK)
- Pelajaran yang fokus pada konteks kerja: pabrik, pertanian, kesehatan, konstruksi
- Kosakata dan skenario yang relevan untuk pekerja migran

### 🤖 AI Tutor Interaktif
- **Guided Lessons** - Sesi pembelajaran terbimbing dengan AI
- **Roleplay Scenarios** - Simulasi situasi kerja nyata
- **Grammar & Vocabulary Drills** - Latihan terstruktur
- Personalisasi berdasarkan progress dan industri pengguna

### 📊 Gamifikasi & Progress
- Sistem XP dan Streak untuk motivasi
- Leaderboard kompetitif
- Achievement badges
- Tracking progress detail

### 🌐 Lokalisasi Penuh
- Antarmuka berbahasa Indonesia
- Penjelasan dan instruksi dalam Bahasa Indonesia
- Romanisasi untuk karakter Korea/Jepang

## 🛠️ Tech Stack

### Frontend (Client)
| Teknologi | Kegunaan |
|-----------|----------|
| React 19 | UI Framework |
| Vite | Build Tool |
| TypeScript | Type Safety |
| Tailwind CSS 4 | Styling |
| Zustand | State Management |
| TanStack Query | Data Fetching |
| React Router 7 | Routing |

### Backend (Server)
| Teknologi | Kegunaan |
|-----------|----------|
| Express.js | API Framework |
| TypeScript | Type Safety |
| Prisma | ORM |
| PostgreSQL | Database |
| Google Gemini AI | AI Tutor |
| JWT | Authentication |
| Zod | Validation |

## 📁 Struktur Project

```
cmi-project-v2/
├── client/                 # Frontend React App
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── stores/         # Zustand stores
│   │   ├── types/          # TypeScript types
│   │   └── utils/          # Helper utilities
│   └── package.json
│
├── server/                 # Backend Express API
│   ├── src/
│   │   ├── config/         # Configuration (Gemini AI, etc)
│   │   ├── middleware/     # Express middlewares
│   │   ├── routes/         # API routes
│   │   └── types/          # TypeScript types
│   ├── prisma/
│   │   ├── schema.prisma   # Database schema
│   │   └── seed.ts         # Seed data
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL database
- Google AI API key (Gemini)

### 1. Clone Repository
```bash
git clone https://github.com/your-repo/cmi-project-v2.git
cd cmi-project-v2
```

### 2. Setup Server

```bash
cd server

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dan isi:
# - DATABASE_URL=postgresql://...
# - JWT_SECRET=your-secret-key
# - GEMINI_API_KEY=your-gemini-api-key

# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:push

# Seed database
npm run db:seed

# Start development server
npm run dev
```

Server akan berjalan di `http://localhost:3000`

### 3. Setup Client

```bash
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

Client akan berjalan di `http://localhost:5173`

## 📄 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user baru |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Courses & Lessons
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses` | Get all courses |
| GET | `/api/courses/:id` | Get course detail |
| GET | `/api/lessons/:id` | Get lesson detail |

### Progress
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/progress` | Get user progress |
| POST | `/api/progress/complete` | Mark lesson complete |

### AI Tutor
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai-tutor/chat` | Send message to AI |
| POST | `/api/guided-lesson/start` | Start guided session |
| POST | `/api/guided-lesson/continue` | Continue session |

## 🗂️ Database Schema

### Core Models
- **User** - Data pengguna dengan level dan progress
- **Course** - Kursus bahasa per level CEFR
- **Lesson** - Pelajaran dalam kursus
- **Quiz** - Soal latihan per pelajaran

### AI & Gamification
- **AIConversation** - Riwayat percakapan dengan AI
- **GuidedSession** - Sesi pembelajaran terbimbing
- **Topic & Scenario** - Topik dan skenario untuk AI tutor
- **Achievement** - Badges dan pencapaian

## 🔧 Available Scripts

### Server
```bash
npm run dev          # Development with hot reload
npm run build        # Build for production
npm run start        # Start production server
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database
```

### Client
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌍 Supported Languages

| Bahasa | Kode | Standar Lokal |
|--------|------|---------------|
| Inggris | `en` | - |
| Korea | `ko` | TOPIK 1-6 |
| Jepang | `ja` | JLPT N5-N1 |

## 📈 CEFR Level Mapping

| CEFR | JLPT | TOPIK | Deskripsi |
|------|------|-------|-----------|
| A1 | N5 | 1 | Pemula |
| A2 | N4 | 2 | Dasar |
| B1 | N3 | 3 | Menengah |
| B2 | N2 | 4 | Menengah Atas |
| C1 | N1 | 5 | Mahir |
| C2 | N1+ | 6 | Ahli |

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Project Link: [https://github.com/Stoic2002/cmi-v2](https://github.com/Stoic2002/cmi-v2)

---

<p align="center">
  Made with ❤️ for Indonesian Migrant Workers
</p>
