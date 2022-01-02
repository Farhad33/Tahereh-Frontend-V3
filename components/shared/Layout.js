import Head from 'next/head'
import Menu from './Menu'
import SideLine from './SideLine'

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>Tahereh</title>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
        </Head>
        <Menu />
        {children}
        <SideLine direction='bottom-left'/>
        <SideLine direction='top-right'/>
    </>
  )
}