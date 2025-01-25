export default function Button({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {children}
    </button>
  );
}
