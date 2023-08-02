import Footer from '@/Components/Shared/Footer';
import Navbar from '@/Components/Shared/Navbar';
import Meta from '@/Layout/Meta';
import { store } from '@/Redux/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
const rootStyle: React.CSSProperties = {
  minHeight: "70vh",
  background: "#6191b3",
};
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Provider store={store}>
    <Meta />
    <Navbar />
    <div style={rootStyle}>
    <Component {...pageProps} />
    </div>
    <Footer />
  </Provider>
</>
}
