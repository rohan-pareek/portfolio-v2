import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='h-full'>
      <Head>
        <link rel='icon' href = "/images/logo.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      </Head>
      <body className='h-full bg-slate-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}