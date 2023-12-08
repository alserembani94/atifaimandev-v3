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
    alert("You found me! 🎉 \n Check out the console to get the surprise!");
    // Do something when Konami Code is entered
    console.log("Apa benda ni? 🤔");
    console.log("%c https://link.tngdigital.com.my/wnV6m4Rfuir5NFmg6", "background: #bada55; color: #222");
    console.log(
      "%cDon't tell others, yea? Let this be a secret. 👀",
      "background: #222; color: #bada55"
    );
  };

  useKonamiCode(easterEggSurprise);
  
  return (
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
    </QueryClientProvider>
  )
}
