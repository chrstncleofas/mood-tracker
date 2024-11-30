import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface MoodChartProps {
  moods: { mood: string; note: string; date: string }[];
}

export default function MoodChart({ moods }: MoodChartProps): JSX.Element {
  const moodCounts = moods.reduce((acc, { mood }) => {
    acc[mood] = (acc[mood] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        label: "Mood Frequency",
        data: Object.values(moodCounts),
        backgroundColor: [
          "#fbc02d",
          "#1976d2",
          "#d32f2f",
          "#388e3c",
          "#9e9e9e",
          "#8e24aa",
        ],
      },
    ],
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">Mood Analytics</h2>
      <Bar data={data} />
    </div>
  );
}
