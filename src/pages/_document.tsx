import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{backgroundColor: "rgb(244 244 245)"}}>
        <div className="hidden">
          Kena berusaha sikit nak dapat easter egg tu. Tekan-tekan sikit keyboard, nanti muncul la tu.
        </div>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  )
}
