# 💖 The Comprehensive Teddy Day Guide

Welcome to your personalized Teddy Day website! This guide will walk you through every feature and how to customize it to create the perfect surprise for your crush/girlfriend.

## 🌟 Overview of Features

1.  **Floating Hearts**: Animated hearts that drift upwards on the screen.
2.  **Hero Section**: The first thing she sees with your main "Happy Teddy Day" message.
3.  **Interactive Teddy**: A cute animated teddy bear that "hugs" back when clicked.
4.  **Love/Apology Message**: A typewriter-style animated message to express your feelings.
5.  **Love Letter Modal**: A hidden, full-screen letter that opens when she clicks "For You".
6.  **Responsive Design**: Looks amazing on mobile and desktop.

---

## 🛠️ How to Customize Everything

All text and major settings are stored in `src/utils/config.js`. You rarely need to touch the code itself!

### 1. Names

Open `src/utils/config.js` and change:

```javascript
export const config = {
  herName: "Rowdy", // Her nickname
  myName: "Bava", // Your nickname
  // ...
};
```

### 2. Dashboard / Hero Text

Change the main greeting and subtitle:

```javascript
heroTitle: "Happy Teddy Day ❤️",
heroSubtitle: "Even without a real teddy... my love is always with you.",
ctaText: "Open My Heart 💌", // The button text
```

### 3. The Apology / Main Message

This is the typewriter text that appears below the Teddy.

```javascript
apologyMessage: "I’m sorry I couldn’t give you a real teddy today...",
```

### 4. The Virtual Teddy

Customize what the Teddy says when hugged:

```javascript
teddyMessage: "This hug is from me 🤍",
teddyButton: "Hug Me",
```

### 5. The Love Letter

This is the most important part! Customize the letter that appears in the popup modal:

```javascript
loveLetter: {
    greeting: "Dearest Love,",
    body: "Write your heartfelt message here...",
    apology: "Optional apology line...",
    promise: "Your promise to her...",
    closing: "Forever Yours,",
    signature: "Me"
},
```

---

## 🎨 Changing Colors & Theme

If you want to change the colors (e.g., from Pink/Rose to Blue or Purple), you can edit `tailwind.config.js`.

**Example: Changing the primary color to Purple**

1.  Open `tailwind.config.js`.
2.  Find the `colors` section.
3.  Change `rosy` values to purple shades:
    ```javascript
    colors: {
      rosy: {
        100: '#f3e8ff', // light purple
        200: '#e9d5ff',
        300: '#d8b4fe',
        500: '#a855f7', // main purple
      },
      // ... keep other colors
    }
    ```

---

## 🚀 Deployment Guide

Share your website with the world for free!

### Option 1: Vercel (Easiest)

1.  Create a GitHub account if you don't have one.
2.  Push this code to a new repository.
3.  Go to [Vercel.com](https://vercel.com) and sign up.
4.  Click "Add New..." -> "Project".
5.  Select your GitHub repository.
6.  Click "Deploy". Vercel handles the rest!

### Option 2: Netlify Drop (No Account Needed)

1.  Run the build command in your terminal:
    ```bash
    npm run build
    ```
2.  A `dist` folder will be created in your project directory.
3.  Go to [Netlify Drop](https://app.netlify.com/drop).
4.  Drag and drop the **`dist` folder** into the circle.
5.  Your site is live! You can rename the generic URL in "Site Settings".

---

## ❓ Troubleshooting

- **"The text is too long!"**: Try shortening your messages in `config.js` or adding `\n` for line breaks.
- **"Hugging doesn't work!"**: Ensure JavaScript is enabled in the browser.
- **"Colors look weird!"**: Check your `tailwind.config.js` for valid hex codes.

---

Made with ❤️ by You (with a little help from AI!)
