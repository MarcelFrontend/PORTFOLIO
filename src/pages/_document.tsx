import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased pt-3 bg-gray-900 text-white overflow-x-hidden select-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
