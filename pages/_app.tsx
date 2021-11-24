import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { app } from '@/libs/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
