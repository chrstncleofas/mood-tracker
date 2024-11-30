import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="mt-12 max-w-2xl mx-auto p-10 bg-white rounded-lg shadow-xl">
      {children}
    </div>
  );
}
