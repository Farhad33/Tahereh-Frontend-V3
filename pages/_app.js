import Layout from '../components/shared/Layout'
import GlobasStyles from '../components/shared/GlobalStyles';
import { ThemeProvider } from 'styled-components'
export default function MyApp({ Component, pageProps }) {
  const theme = {
    colors: {
      headerTextColor: 'rgba(14, 49, 15, 0.49)',
      footer: '#444',
      primary: "#11bbaa"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobasStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}