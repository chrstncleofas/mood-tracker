// pages/_app.tsx
import '../styles/globals.css'; // Import global CSS
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
