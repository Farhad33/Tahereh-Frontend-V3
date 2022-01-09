import React from 'react'
import styled from 'styled-components'
import MainPicture from './MainPicture'
// Desktop
// https://www.figma.com/proto/dkXwcJKzgxsfnwKyJyO6Dx/Avior-Design-Web?node-id=32%3A3&scaling=scale-down-width

// Mobile
// https://www.figma.com/proto/SovDQOmTpOpGpA3nTva34m/Avior-Phone?node-id=1%3A2&scaling=contain

// Tablet
// https://www.figma.com/proto/J9UXuFa6weBz2mFI4o0igp/Avior-Ipad?node-id=48%3A32&scaling=contain
// what was the problem of my font addition?
export default function Homepage() {
    return (
        <Container>
            <MainPicture />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`
const Header = styled.h1`
    padding-top: 0.5rem;
    font-size: 5rem;
    text-align: center;
    color: white;
`

const Logo = styled.img`
    display: block;
    width: 10rem;
`
const ApartmentPhotos = styled.img`
    width: 80rem;
    height: 50rem;
    padding: 2rem;
    margin: 0 auto;
`


const dressPhotos = Array(19).fill().map((_, file) => {
    return {
        original: `./static/large/${file + 10}.png`,
        thumbnail: `/static/small/${file + 10}.png`
    }
})