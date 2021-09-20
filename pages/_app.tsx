import '../styles/scss/main.scss';
import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain='thibault-walters.com'>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
export default MyApp;
