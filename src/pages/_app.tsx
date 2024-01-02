import { useState } from "react";
import type { AppProps } from "next/app";
import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  const [bgColor, setBgColor] = useState("#fbf4ea");
  return (
    <>
      <Component {...pageProps} stateChangeColor={setBgColor} />
      <style jsx global>{`
        body {
          background: ${bgColor};
        }
      `}</style>
    </>
  );
}
