
# Mood Tracker

This is a [Next.js](https://nextjs.org) project for tracking moods, where users can log their mood with an optional note, and see a timeline of their entries. The project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app) and styled using [Tailwind CSS](https://tailwindcss.com/).

## Features

- Select mood from predefined options: Happy, Sad, Angry, Excited, Calm/Neutral, Anxious
- Add an optional note for each mood entry
- View a timeline of all mood entries, including date and note
- Simple, clean UI built with React and Next.js

## Getting Started

To get started, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/chrstncleofas/mood-tracker.git
cd mood-tracker
```

### 2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Edit and Customize:
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## How It Works

- **MoodForm**: Allows the user to select a mood and add an optional note. The form uses React state and validates that a mood is selected before submitting.
- **Timeline**: Displays all moods added, showing the mood, date, and note.
- **Header**: Displays the app's title dynamically.

The app also uses **Tailwind CSS** for styling, providing a responsive and modern design.

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js) for feedback and contributions.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

---

### Tailwind CSS Configuration

This project is styled with [Tailwind CSS](https://tailwindcss.com/). For customizations, you can edit the `tailwind.config.ts` file.

---

Enjoy your Mood Tracker app! 😊
