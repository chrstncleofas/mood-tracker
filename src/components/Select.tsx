interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options = [
  "Happy", "Sad", "Angry", "Excited", "Calm", "Anxious"
];

export default function Select({ value, onChange }: SelectProps): JSX.Element {
  return (
    <select
      value={value}
      onChange={onChange}
      required
      className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    >
      <option value="">-- Choose a mood --</option>
      {options.map((mood) => (
        <option key={mood} value={mood}>
          {mood}
        </option>
      ))}
    </select>
  );
}
