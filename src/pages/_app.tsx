import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { EasterEggProvider, useEasterEgg } from '@/hooks/useEasterEgg';
import { useEffect, useState } from 'react';
import DragonDen from '@/components/sections/DragonDen';

const queryClient = new QueryClient();

export default function App(props: AppProps) {
  
  return (
    <EasterEggProvider>
      <QueryClientProvider client={queryClient}>
          <ElevatedApp {...props} />
      </QueryClientProvider>
    </EasterEggProvider>
  )
}

const ElevatedApp = ({ Component, pageProps }: AppProps) => {
  const { isOpenDen } = useEasterEgg();

  return (
    <>
      <Component {...pageProps} />
      { isOpenDen && <DragonDen /> }
    </>
  )
}
