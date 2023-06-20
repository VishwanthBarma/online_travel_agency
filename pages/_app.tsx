import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Layout from '@/components/Layout/Layout'
import { Provider } from 'react-redux';
import store from '@/store';


export default function App({ Component, pageProps }: AppProps) {
  return(
  <div>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </div>
  )
}
