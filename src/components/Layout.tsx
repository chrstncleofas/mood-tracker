import { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Mood Tracker</h1>
        <ThemeToggle />
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
