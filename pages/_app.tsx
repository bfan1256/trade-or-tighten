import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { app } from "@/libs/firebase";
import { PlayerProvider } from "@/contexts/player";
import { useEffect } from "react";
import { getAnalytics } from "@firebase/analytics";


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      getAnalytics(app);
    }
  }, [])
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  );
}

export default MyApp;
