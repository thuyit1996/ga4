import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>

    <Component {...pageProps} />
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-M1LCNXGQ5E"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-M1LCNXGQ5E');
            `}
    </Script>
  </>
}
