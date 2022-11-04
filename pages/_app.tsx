import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
const inter = Roboto({ weight: ["300", "400", "500", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
