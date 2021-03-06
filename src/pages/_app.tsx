import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
