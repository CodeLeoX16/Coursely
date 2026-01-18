<div align="center">

# 🎓 Coursely

### *Your Gateway to Quality Course Discovery*

[![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-4CAF50?style=for-the-badge&logo=render&logoColor=white)](https://coursely-5.onrender.com/listings)

**Coursely** is a beautiful, student-focused course listing and review marketplace that makes discovering the perfect course effortless. Browse, review, and share courses with a modern, responsive interface.

[✨ Features](#-features) • [🚀 Quick Start](#-quick-start) • [🛠️ Tech Stack](#️-tech-stack) • [🌐 Live Demo](https://coursely-5.onrender.com/listings) • [📸 Screenshots](#-screenshots) • [🤝 Contributing](#-contributing)

---

</div>

## 🌟 Why Choose Coursely?

<table>
<tr>
<td width="50%">

### 🎨 **Beautiful Design**
Clean, modern UI with responsive layout that works flawlessly on any device - from mobile to desktop.

### ⚡ **Lightning Fast**
Optimized performance with quick course discovery, instant search, and smooth navigation.

</td>
<td width="50%">

### ⭐ **Smart Reviews**
Comprehensive star-based rating system with detailed student reviews to help you make informed decisions.

### 🔒 **Secure & Reliable**
Built with industry-standard authentication and security practices to keep your data safe.

</td>
</tr>
</table>

---

## ✨ Features

### 🔍 **For Students**
- 📚 **Browse & Search** - Discover courses with powerful filtering and search capabilities
- 🎯 **Course Details** - In-depth information including price, duration, instructor, and syllabus
- ⭐ **Review System** - Read and write star ratings and detailed course reviews
- 📱 **Responsive Design** - Seamless experience across all devices
- 🖼️ **Rich Previews** - Eye-catching thumbnails and course previews

### 👨‍💼 **For Instructors/Admins**
- ➕ **Course Management** - Easy-to-use interface for adding and editing courses
- 🔐 **Admin Dashboard** - Protected routes with role-based access control
- 📊 **Course Analytics** - Track reviews and student engagement
- ✅ **Validation** - Robust form validation to ensure data quality

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) |
| **Frontend** | ![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white) |
| **Authentication** | ![Passport](https://img.shields.io/badge/Passport-34E27A?style=flat&logo=passport&logoColor=white) |
| **Validation** | ![Joi](https://img.shields.io/badge/Joi-0080FF?style=flat) |
| **Deployment** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white) |

</div>

### 📦 Key Dependencies

```json
{
  "express": "Web application framework",
  "mongoose": "MongoDB object modeling",
  "ejs": "Embedded JavaScript templating",
  "passport": "Authentication middleware",
  "joi": "Schema validation",
  "express-session": "Session management",
  "connect-flash": "Flash messages"
}
```

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- 📦 [Node.js](https://nodejs.org/) (v22+ recommended)
- 🍃 [MongoDB](https://www.mongodb.com/try/download/community) (v6.0+)
- 🐙 Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/CodeLeoX16/Coursely.git
cd Coursely

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your configuration
```

### ⚙️ Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
DB_URL=mongodb://127.0.0.1:27017/coursecritic

# Session & Security
SESSION_SECRET=your-super-secure-secret-key-change-this

# Optional: Cloud Database (MongoDB Atlas)
# DB_URL=mongodb+srv://username:password@cluster.mongodb.net/coursecritic
```

### 🎯 Running the Application

```bash
# Start MongoDB (if running locally)
mongod

# In a new terminal, start the application
node app.js
# or
npm start

# 🎉 Open your browser and visit:
# http://localhost:3000/listings
```

### 🌐 Live Demo

**Try it now:** [https://coursely-5.onrender.com/listings](https://coursely-5.onrender.com/listings)

> 💡 **Note**: The app is hosted on Render's free tier, so the first load might take a moment as the server spins up.

---

## 👤 Admin Setup

To manage courses, you need an admin account:

1. **Register a new account** through the UI at `/register`
2. **Update user role** in MongoDB:

```javascript
// In MongoDB shell or Compass
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

3. **Log in** and start adding courses!

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
<img width="1900" height="1079" alt="Screenshot 2026-01-18 181851" src="https://github.com/user-attachments/assets/d6ba258c-d0f4-4783-9329-78c6aa27976d" />


### 📚 Course Listings
<img width="1893" height="1079" alt="Screenshot 2026-01-18 182440" src="https://github.com/user-attachments/assets/6b3cfa5d-d49d-4b1e-a089-be39c8912892" />


### 📖 Course Details
<img width="1870" height="921" alt="Screenshot 2026-01-18 182246" src="https://github.com/user-attachments/assets/290af936-f9ff-4ce2-8d2a-943132ae37cc" />


### ⭐ Review System
<img width="1900" height="1079" alt="Screenshot 2026-01-18 182332" src="https://github.com/user-attachments/assets/d2617c52-cda0-49ac-8b7d-3d52349786dd" />


</div>

> 💡 **Tip**: Add screenshots to make your README even more attractive! Place images in an `assets` or `screenshots` folder.

---

## 🎨 Design Philosophy

### Core Principles

- **🎯 User-First**: Every design decision prioritizes the student experience
- **🧹 Minimalist**: Clean interface without clutter or distraction
- **📱 Mobile-Ready**: Responsive design that works beautifully on all screen sizes
- **♿ Accessible**: Following web accessibility best practices
- **🚀 Performance**: Optimized for speed and smooth interactions

### File Structure

```
Coursely/
├── 📁 public/
│   ├── css/
│   │   ├── style.css        # Global styles
│   │   └── rating.css       # Star rating styles
│   └── js/                  # Client-side scripts
├── 📁 views/
│   ├── layouts/
│   │   └── boilerplate.ejs  # Main layout wrapper
│   ├── includes/
│   │   └── navbar.ejs       # Navigation component
│   └── listings/            # Course views
├── 📁 models/               # Mongoose schemas
├── 📁 routes/               # Express routes
├── 📁 middleware/           # Custom middleware
└── app.js                   # Application entry point
```

---

## 🤝 Contributing

We love contributions! Here's how you can help make Coursely better:

### 🐛 Report Issues

Found a bug? [Open an issue](https://github.com/CodeLeoX16/Coursely/issues/new) with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

### 💡 Suggest Features

Have an idea? [Start a discussion](https://github.com/CodeLeoX16/Coursely/discussions/new) or open an issue!

### 🔧 Submit Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

#### 📋 Contribution Guidelines

- ✅ Keep changes focused and small
- ✅ Follow existing code style
- ✅ Maintain responsive design
- ✅ Test on multiple browsers/devices
- ✅ Update documentation as needed
- ✅ Write clear commit messages

---

## 🗺️ Roadmap

- [ ] 🔍 Advanced search with filters (category, price range, rating)
- [ ] 📊 Course analytics dashboard for instructors
- [ ] 💬 Real-time chat for student discussions
- [ ] 🔔 Email notifications for course updates
- [ ] 🎥 Video preview support
- [ ] 🌐 Multi-language support
- [ ] 🎨 Dark mode theme
- [ ] 📱 Progressive Web App (PWA)
- [ ] 🔗 Social sharing integration
- [ ] ⭐ Wishlist/favorites feature

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ by [CodeLeoX16](https://github.com/CodeLeoX16)
- Inspired by the need for a better course discovery experience
- Thanks to all contributors and the open-source community

---

<div align="center">

### ⭐ Star this repo if you find it useful!

**Made with 💙 and ☕ by CodeLeoX16**

[⬆ Back to Top](#-coursely)

</div>
