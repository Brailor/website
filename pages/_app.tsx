import { AppProps } from 'next/app';
import { appWithTranslation } from '../i18n';
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
