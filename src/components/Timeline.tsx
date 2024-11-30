import { useEffect, useState } from 'react';

interface TimelineProps {
  moods: { mood: string; note: string; date: string }[];
}

const moodStyles: Record<string, string> = {
  Happy: "bg-yellow-100 border-yellow-400 text-yellow-800",
  Sad: "bg-blue-100 border-blue-400 text-blue-800",
  Angry: "bg-red-100 border-red-400 text-red-800",
  Excited: "bg-green-100 border-green-400 text-green-800",
  Calm: "bg-gray-100 border-gray-400 text-gray-800",
  Anxious: "bg-purple-100 border-purple-400 text-purple-800",
};

const moodIcons: Record<string, string> = {
  Happy: "😊",
  Sad: "😢",
  Angry: "😡",
  Excited: "😄",
  Calm: "😌",
  Anxious: "😰",
};

export default function Timeline({ moods }: TimelineProps): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="py-4">
      <button
        onClick={toggleDarkMode}
        className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded"
      >
        Toggle Dark Mode
      </button>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Your Mood Timeline</h2>
      <ul className="space-y-4">
        {moods.map((entry, index) => (
          <li
            key={index}
            className={`border-l-4 p-4 rounded ${moodStyles[entry.mood]} shadow`}
          >
            <span className="text-2xl">{moodIcons[entry.mood]}</span>
            <span className="ml-2 font-semibold">{entry.mood}</span>
            <span className="block text-sm text-gray-600 dark:text-gray-400">{entry.date}</span>
            {entry.note && <p className="mt-2">{entry.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
