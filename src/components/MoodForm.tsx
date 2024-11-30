// components/MoodForm.tsx
import { useState } from 'react';
import Select from './Select';
import Textarea from './TextArea';
import Button from './Button';

interface MoodFormProps {
  onAddMood: (mood: string, note: string) => void;
}

export default function MoodForm({ onAddMood }: MoodFormProps): JSX.Element {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mood) {
      alert('Please select a mood!');
      return;
    }
    onAddMood(mood, note);
    setMood('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Mood Selector */}
      <div>
        <label htmlFor="mood" className="block font-semibold text-gray-700">Select your mood:</label>
        <Select value={mood} onChange={(e) => setMood(e.target.value)} />
      </div>

      {/* Note Textarea */}
      <div>
        <label htmlFor="note" className="block font-semibold text-gray-700">Add a note (optional):</label>
        <Textarea value={note} onChange={(e) => setNote(e.target.value)} />
      </div>

      {/* Submit Button */}
      <Button> Add Mood </Button>
    </form>
  );
}
