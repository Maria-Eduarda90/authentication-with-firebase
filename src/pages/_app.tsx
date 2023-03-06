import '../styles/globals.scss';
import { AuhtProvider } from '../context/AuthContext';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <AuhtProvider>
        <Component {...pageProps} />
      </AuhtProvider>
    );
  }
}

export default MyApp
