import React from 'react';
import Head from 'next/head'
import HomePage from '../components/Homepage'

const Pages = () => (
    <>
        <Head>
            <title>Tahereh</title>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
        </Head>
        <HomePage />
    </>
)

export default Pages;