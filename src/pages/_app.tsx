import '../styles/globals.scss';
import { AuhtProvider } from '../context/AuthContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuhtProvider>
      <Component {...pageProps} />
    </AuhtProvider>
  );
}

export default MyApp
