import "@/styles/globals.scss";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import { DemoContext } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <DemoContext>
        <Component {...pageProps} />
      </DemoContext>
    </main>
  );
}
