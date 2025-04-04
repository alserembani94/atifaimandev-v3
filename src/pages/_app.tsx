import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

export default function App(props: AppProps) {
  
  return (
      <QueryClientProvider client={queryClient}>
          <ElevatedApp {...props} />
      </QueryClientProvider>
  )
}

const ElevatedApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
