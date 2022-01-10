import React from 'react'
import styled from 'styled-components'
import MainPicture from './MainPicture'

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