📋 Overview

This repository contains the Gold Standard Holdings company website.
It is a full-stack web application built with:

Frontend: React.js

Backend: Node.js + Express

Email System: Nodemailer (via Gmail SMTP)

The website includes:

A Contact Form for general inquiries

An Apply Form for job applications (no file uploads, text-only)

Smooth animations, responsive design, and optimized SEO structure

The backend handles secure form submissions and sends messages directly to the company inbox.

gsh-website/
│
├── backend/
│   ├── server.js              # Express server configuration
│   ├── routes/
│   │   ├── contactRoutes.js   # Handles contact form submissions
│   │   └── applyRoutes.js     # Handles job application submissions
│   ├── package.json           # Backend dependencies
│   ├── .env                   # Environment variables (email credentials)
│   └── node_modules/
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── About/
│   │   ├── Portfolio/
│   │   ├── Apply/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── assets/                # Images, icons, and backgrounds
│   ├── App.js                 # Main React component
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── public/
│   └── index.html
│
├── package.json               # Frontend dependencies
└── README.md                  # Developer documentation

git clone https://github.com/<company-or-dev-account>/gsh-website.git
cd gsh-website

Frontend: 
npm install

Backend: 
cd backend
npm install

📬 Email Functionality (Backend Overview)

Both forms use Nodemailer to send structured emails via Gmail SMTP.

Contact Form

Sends:

Full name

Email address

Phone number

Message

Apply Form

Sends:

Full name

Email address

Phone number

Message (application details)
(CV upload functionality removed — text only)

All messages are sent to the EMAIL_TO address specified in .env.

🧠 Developer Notes
Validation

Both forms include frontend validation:

Required field checks

Email format validation

Phone number pattern check

Displays error messages under inputs in real time

After successful submission:

Form fields reset automatically

Success message appears briefly

Styling

All section-specific CSS is stored in their respective folders (e.g. /Contact/Contact.css).
Common visual elements like underlines and titles are handled separately to maintain consistency.

Animations

Uses wow animations for fade-in and scroll-triggered effects.
Ensure the wow.js or relevant library is initialized if modifying layout or animation behavior.

🛡️ License

This repository is private and owned by Gold Standard Holdings (Pty) Ltd.
Unauthorized copying, sharing, or redistribution of the codebase is strictly prohibited.