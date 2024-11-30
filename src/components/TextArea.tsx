// components/Textarea.tsx
interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ value, onChange }: TextareaProps): JSX.Element {
  return (
    <textarea
      value={value}
      onChange={onChange}
      rows={4}
      placeholder="Why do you feel this way?"
      className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
  );
}
