import Layout from '../components/shared/Layout'
import { ThemeProvider } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
  const theme = {
    colors: {
      headerTextColor: 'rgba(14, 49, 15, 0.49)',
      footer: "#444",
      primary: "#11bbaa",
      darkGreen: "rgba(6, 131, 101, 0.63)",
      grey: "#C9D2CA",
      midGrey: '#8a9b89',
      secondary: '#828282',
      hoverColor: '#FAEA8A',
      orangeColor: '#FFB546',
      blackColor: '#000',
      whiteColor: '#fff'
    },
    breakPoints: {
      mobile: "600px",
      tablet: "991px",
      desktop: "1494px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider >
  )
}
