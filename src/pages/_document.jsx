import { useState } from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const [bgColor, setBgColor] = useState("#fbf4ea");
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <main className="flex">
          <Main stateChangeColor={setBgColor} />
          <NextScript />
        </main>
      </body>
    </Html>
  );
}
