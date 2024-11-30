interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header className="text-center py-6">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    </header>
  );
}
