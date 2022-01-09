import Layout from '../components/shared/Layout'
import { ThemeProvider } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
  const theme = {
    colors: {
      headerTextColor: 'rgba(14, 49, 15, 0.49)',
      footer: "#444",
      primary: "#11bbaa",
      darkGreen: "rgba(6, 131, 101, 0.63)",
      grey: "#C9D2CA"
    },
    breakPoints: {
      mobile: "600px",
      tablet: "991px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
