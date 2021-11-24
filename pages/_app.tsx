import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { app } from "@/libs/firebase";
import { PlayerProvider } from "@/contexts/player";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  );
}

export default MyApp;
