import 'styles/globals.css'
import Layout from 'components/layout'

// Font Awsome 設定(アイコンが一瞬大きくなってからサイズが変わるのを防ぐ)
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
