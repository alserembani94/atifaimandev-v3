import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import useKonamiCode from '@/hooks/useKonamiCode';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {

  const easterEggSurprise = () => {
    alert("You are too late! The game is over. 😂");
  };

  useKonamiCode(easterEggSurprise);
  
  return (
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
    </QueryClientProvider>
  )
}
