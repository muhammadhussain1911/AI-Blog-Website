# 🤖 AI Blog Website

<div align="center">

![AI Blog Website](https://img.shields.io/badge/AI%20Blog-Website-blue?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)

**A modern, AI-powered blog platform built with React and Node.js**

[🚀 Live Demo](https://ai-blog-client-rho.vercel.app/) • [🐛 Report Bug](#-contributing) • [💡 Request Feature](#-contributing)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [⚡ Quick Start](#-quick-start)
- [🔧 Installation](#-installation)
- [🌍 Environment Variables](#-environment-variables)
- [📱 Usage](#-usage)
- [🎨 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Features

### 🎯 Core Features
- **🤖 AI-Powered Content Generation** - Leverage Google Gemini AI for intelligent blog content creation
- **📝 Rich Text Editor** - Advanced Quill.js editor with formatting options
- **🎨 Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- **📱 Mobile Responsive** - Optimized for all device sizes
- **🔐 Admin Authentication** - Secure JWT-based admin panel
- **📊 Dashboard Analytics** - Real-time blog statistics and insights

### 🚀 Advanced Features
- **🖼️ Image Management** - ImageKit integration for optimized image handling
- **💬 Comment System** - Interactive commenting with moderation
- **🏷️ Category Management** - Organize blogs by categories (Technology, Startup, Lifestyle, Finance)
- **⚡ Fast Performance** - Optimized with Vite and modern React patterns
- **🔄 Real-time Updates** - Live content updates without page refresh

---

## 🛠️ Tech Stack

### Frontend
<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.7.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

</div>

### Backend
<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-9.0.2-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

</div>

### AI & Services
<div align="center">

![Google AI](https://img.shields.io/badge/Google_Gemini-AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-CDN-FF6B6B?style=for-the-badge&logo=image&logoColor=white)

</div>

### Development Tools
<div align="center">

![ESLint](https://img.shields.io/badge/ESLint-9.30.1-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.11.0-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Moment.js](https://img.shields.io/badge/Moment.js-2.30.1-47A248?style=for-the-badge&logo=moment&logoColor=white)

</div>

---

## 🏗️ Architecture

```
AI-Blog-Website/
├── 📁 client/                 # Frontend React Application
│   ├── 📁 public/            # Static assets
│   ├── 📁 src/
│   │   ├── 📁 assets/        # Images, icons, styles
│   │   ├── 📁 components/    # Reusable UI components
│   │   │   ├── 📁 admin/     # Admin-specific components
│   │   │   └── 📄 *.jsx      # General components
│   │   ├── 📁 context/       # React Context providers
│   │   ├── 📁 pages/         # Route components
│   │   │   ├── 📁 admin/     # Admin panel pages
│   │   │   └── 📄 *.jsx      # Public pages
│   │   └── 📄 App.jsx        # Main application component
│   └── 📄 package.json       # Frontend dependencies
│
└── 📁 server/                 # Backend Node.js Application
    ├── 📁 configs/           # Configuration files
    │   ├── 📄 db.js          # MongoDB connection
    │   ├── 📄 gemini.js      # Google AI configuration
    │   └── 📄 imagekit.js    # ImageKit setup
    ├── 📁 controllers/       # Business logic
    ├── 📁 middleware/        # Custom middleware
    ├── 📁 models/           # MongoDB schemas
    ├── 📁 routes/           # API endpoints
    └── 📄 server.js         # Express server entry point
```

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local or cloud instance)
- **Git**

### 🚀 One-Command Setup
```bash
git clone https://github.com/muhammadhussain1911/AI-Blog-Website.git
cd ai-blog-website
npm run setup
```

---

## 🔧 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/muhammadhussain1911/AI-Blog-Website.git
cd ai-blog-website
```

### 2️⃣ Backend Setup
```bash
cd server
npm install
```

### 3️⃣ Frontend Setup
```bash
cd ../client
npm install
```

### 4️⃣ Environment Configuration
Create `.env` files in both `server` and `client` directories:

#### Server `.env`
```env
# Database
MONGODB_URI=your_mongodb_uri

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# Google AI
GEMINI_API_KEY=your-gemini-api-key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your-imagekit-public-key
IMAGEKIT_PRIVATE_KEY=your-imagekit-private-key
IMAGEKIT_URL_ENDPOINT=your-imagekit-url-endpoint

# Admin Credentials
ADMIN_EMAIL="your_admin_email"
ADMIN_PASSWORD="adminEmail_password"

# Server
PORT=3000
```

#### Client `.env`
```env
VITE_API_URL=http://localhost:3000
```

### 5️⃣ Start Development Servers

#### Terminal 1 - Backend
```bash
cd server
npm start
```

#### Terminal 2 - Frontend
```bash
cd client
npm run dev
```

🎉 **Your application is now running!**
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000

---

## 🌍 Environment Variables

### Required API Keys

| Service | Purpose | How to Get |
|---------|---------|------------|
| **MongoDB** | Database | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) |
| **Google Gemini** | AI Content Generation | [Google AI Studio](https://makersuite.google.com/) |
| **ImageKit** | Image CDN & Optimization | [ImageKit.io](https://imagekit.io/) |

### 🔑 Getting API Keys

#### Google Gemini API
1. Visit [Google AI Studio](https://makersuite.google.com/)
2. Create a new project
3. Generate API key
4. Add to `GEMINI_API_KEY` in server `.env`

#### ImageKit Setup
1. Sign up at [ImageKit.io](https://imagekit.io/)
2. Get your URL endpoint, public key, and private key
3. Add to server `.env` file

---

## 📱 Usage

### 🏠 Public Features
- **Browse Blogs**: View all published blogs with category filtering
- **Read Articles**: Full blog posts with rich content
- **Newsletter**: Subscribe to updates
- **Responsive Design**: Works on all devices

### 🔐 Admin Features
- **Dashboard**: Overview of blog statistics
- **Create Blogs**: AI-assisted content creation with rich text editor
- **Manage Blogs**: Edit, delete, and publish/unpublish blogs
- **Comments**: Moderate user comments
- **Analytics**: Track blog performance

### 🤖 AI Integration
The platform uses Google Gemini AI to:
- Generate blog content based on Title and subtitle

---

## 🎨 Screenshots

<div align="center">

### 🏠 Homepage
![Homepage](https://ik.imagekit.io/ku1nab63e/AIBLOG1.png)

### 📝 Blog Editor
![Blog Editor](https://ik.imagekit.io/ku1nab63e/AIBlog5.png)

### 📊 Admin Dashboard
![Dashboard](https://ik.imagekit.io/ku1nab63e/AIBlog3.png)
![Dashboard](https://ik.imagekit.io/ku1nab63e/AIBlog4.png)

</div>

---

## 🚀 Deployment

### 🌐 Frontend (Vercel)
```bash
cd client
npm run build
# Deploy to Vercel
```

### ⚙️ Backend (Railway/Heroku)
```bash
cd server
# Deploy to your preferred platform
```

### 📦 Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up --build
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Bug Reports
1. Check existing issues
2. Create detailed bug report
3. Include steps to reproduce

### 💡 Feature Requests
1. Search existing requests
2. Create detailed feature request
3. Explain use case and benefits

### 🔧 Pull Requests
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📈 Roadmap

- [ ] **Multi-language Support** - Internationalization
- [ ] **Advanced Analytics** - Detailed blog metrics
- [ ] **Social Media Integration** - Share to platforms
- [ ] **Email Notifications** - Comment and blog alerts
- [ ] **Advanced SEO** - Schema markup and optimization
- [ ] **Mobile App** - React Native companion app

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

### **Muhammad Hussain**
*Full Stack Web and App Developer & AI Enthusiast*

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.hussainappdeveloper.site)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/muhammadhussain1911)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/muhammadhussain1911)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yourownwebdeveloper@gmail.com)

</div>

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Google** - For Gemini AI capabilities
- **Tailwind CSS** - For the utility-first CSS framework
- **MongoDB** - For the flexible database solution
- **ImageKit** - For image optimization services

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ by [Muhammad Hussain](https://www.hussainappdeveloper.site)**

</div>