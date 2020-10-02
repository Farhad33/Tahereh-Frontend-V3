import React from 'react'
import styled from 'styled-components'
import Menu from '../shared/Menu'
import MainPicture from './MainPicture'
import SideLine from '../shared/SideLine'


export default function Homepage() {
    return (
        <Container>
            <Menu />
            <MainPicture />
            <SideLine direction='bottom-left'/>
            <SideLine direction='top-right'/>
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