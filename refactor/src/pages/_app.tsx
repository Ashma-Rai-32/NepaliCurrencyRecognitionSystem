import "@/src/styles/globals.scss";
import "lenis/dist/lenis.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import Cursor from "../components/Cursor";
import ContextMenu from "../components/ContextMenu";
import Lenis from "lenis";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Provider store={store}>
      <Cursor />
      <ContextMenu />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
