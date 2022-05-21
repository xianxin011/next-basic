import { useEffect } from "react";
import "@@/globals.css";
import "animate.css";
import "antd/dist/antd.css";
import { isPCBrowser } from "utils";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if(!isPCBrowser()){
      import("amfe-flexible");
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
