import Document from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { color } from '../util/variables'


const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Myriad Set Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    letter-spacing: .017em;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`



export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(
            <>
              <GlobalStyle />
              <App {...props} />

            </>
          )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}


export const Container = styled.div`
    padding: 70px;
    @media only screen and (max-width: 600px) {
        padding: 40px;
    }
`

export const Follow = styled.p`
    margin-top: 5px;
    color: ${color.secondary};
    font-size: 18px;
    font-weight: 400;
    opacity: 0.8;
    letter-spacing: 10px;
    text-align: center;
`

export const LineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Diamond = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${color.primary};
    transform: rotate(45deg);
    border-radius: 2px;
    @media only screen and (max-width: 600px) {
        width: 15px;
        height: 15px;
    }
`

export const Line = styled.div`
    width: 260px;
    height: 1px;
    background-color: ${color.primary};
    @media only screen and (max-width: 600px) {
        width: 110px;
    }
`


export const Header = styled.div`
    display: flex;
    align-items: baseline;
`

export const Title = styled.p`
    font-family: 'Abril Fatface';
    font-size: 4vw;
    font-weight: bold;
    color: #09321682;
    opacity: 0.9;
    white-space: nowrap;
    text-align: center;
    /* @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
    } */
    @media only screen and (max-width: 600px) {
        font-size: 6.6vw;
    }
`

export const GoToBackPage = styled.span`
  width: 0px;
  height: 0px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid ${color.primary};
  margin: 0 24px;
  ${({ left }) => left && 'transform: rotate(180deg);'}
  :hover { 
    border-left: 25px solid ${color.hoverColor};
  }
`

export const Chevron = styled.span`
padding: 13px;
  width: 30px;
  height: 30px;
  border-top: 1.6px solid ${color.darkGreen};
  border-left: 1.6px solid ${color.darkGreen};
  ${({ navigateTo }) => navigateTo === "previous" ? 'transform: rotate(-45deg);' : 'transform: rotate(135deg);'}
  cursor: pointer;
`