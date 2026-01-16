# CourseCritic (Coursely)

An attractive, student-focused course listing and review marketplace built with Node.js, Express, EJS and MongoDB.

CourseCritic makes it easy for students to discover, review, and share online and in-person courses.

---

## Why students love it

- Clean, modern responsive UI designed for quick discovery and readability.
- Course previews with thumbnails, price, duration, category and instructor info.
- Fast reviews and star ratings to find the most useful courses at a glance.
- Simple account flow for students and admins (add/edit courses).

---

## Features

- Browse and search course listings.
- Course detail page with description, price, and reviews.
- Star-based review system and comments.
- Admin-protected course creation and editing.
- Responsive layout powered by Bootstrap and custom CSS.

---

## Tech stack

- Node.js (see `engines` in `package.json`)
- Express
- EJS + `ejs-mate` for layouts
- MongoDB + Mongoose
- Passport (local auth)
- Joi for server-side validation

---

## Quick start (run locally)

1. Install Node.js (recommended LTS) and MongoDB.
2. Clone the repository and install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and set environment variables used by the app (example):

```
PORT=3000
DB_URL=mongodb://127.0.0.1:27017/coursecritic
SESSION_SECRET=a-secure-secret
```

4. Start MongoDB (if running locally) and launch the app (use your node manager command for Node 22+):

```bash
node app.js
# or if you use npm scripts, add a start script and run `npm start`
```

5. Visit `http://localhost:3000/listings` in your browser.

---

## Admin account

To add listings from the UI you'll need an account with role `admin`. Create an account, then manually set the role in the database (or register a seeded admin in `init/` if provided).

---

## Design notes for contributors

- Global styles are in `public/css/style.css` and rating visuals in `public/css/rating.css`.
- Layout wrapper is `views/layouts/boilerplate.ejs`.
- Navbar is `views/includes/navbar.ejs`.
- Listings views live in `views/listings/`.

Design goals: friendly typography, clear CTAs, compact cards for mobile, and readable review content.

---

## Contributing

Contributions are welcome. Open an issue or send a PR with small, focused changes. Keep styles consistent and preserve responsive behavior.

---

## License

This project is provided as-is. Add a license file if you wish to publish or share commercially.
