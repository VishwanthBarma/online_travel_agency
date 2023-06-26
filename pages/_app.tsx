import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Layout from '@/components/Layout/Layout'
import { Session } from '@supabase/auth-helpers-react'
import { AgencyProvider } from '@/context/AgencyContext';

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {

  

  return (
    <AgencyProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AgencyProvider>
  )
}