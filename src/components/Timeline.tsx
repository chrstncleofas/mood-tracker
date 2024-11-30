interface TimelineProps {
  moods: { mood: string; note: string; date: string }[];
}

export default function Timeline({ moods }: TimelineProps): JSX.Element {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Your Mood Timeline</h2>
      <ul className="space-y-4 mt-4">
        {moods.map((entry, index) => (
          <li key={index} className="p-4 border rounded-md border-gray-300">
            <div className="font-semibold">{entry.mood} ({entry.date})</div>
            {entry.note && <p className="text-gray-700 mt-2">{entry.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
