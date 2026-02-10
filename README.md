# Happy Teddy Day ❤️

A romantic, interactive website built with React, Tailwind CSS, and Framer Motion to celebrate Teddy Day.

## 🌟 Features

- **Soft, Dreamy Aesthetic:** Pastel colors, glassmorphism, and gentle animations.
- **Interactive Teddy:** A cute SVG teddy that reacts to hugs.
- **Music Player:** Auto-plays romantic background music (configurable).
- **Love Letter Modal:** A beautiful full-screen letter experience.
- **Memory Lane:** A horizontal scrolling gallery for your photos.
- **Personalized:** Easy configuration file to change names, messages, and media.

## 🚀 Getting Started

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run Locally:**

    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## 💖 Customization

All text, images, and settings are stored in `src/utils/config.js`. Open this file to personalize the website.

- **Names:** Change `herName` and `myName`.
- **Messages:** Edit `heroTitle`, `apologyMessage`, and the `loveLetter` object.

## 📚 Feature Guide

Check out [GUIDE.md](./GUIDE.md) for a complete explanation of every feature and customization option.

## 📦 Deployment

### Deploy to Vercel (Recommended)

1.  Push this code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and import the project.
3.  Vercel will automatically detect Vite and deploy it.

### Deploy to Netlify

1.  Drag and drop the `dist` folder (created after running `npm run build`) to Netlify Drop.
    OR
2.  Connect your GitHub repo to Netlify for continuous deployment.

## 🎨 Tech Stack

- React.js
- Tailwind CSS
- Framer Motion
- Howler.js (Audio)
- Canvas Confetti

---

Made with ❤️
