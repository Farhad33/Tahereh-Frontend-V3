import React from 'react'
import styled from 'styled-components'
import Menu from '../shared/Menu'
import { color } from '../../util/variables'
import Categories from './Categories'

export default function Collection() {
    return (
        <>
            <Menu />
            <Container>
                <Title>AVIOR DESIGN</Title>
                <LineContainer>
                    <Line />
                    <Diamond />
                    <Line />
                </LineContainer>
                <Follow>Follow your dreams</Follow>
                <Categories />
            </Container>
        </>
    )
}

const Container = styled.div`
    padding: 70px;
    @media only screen and (max-width: 600px) {
        padding: 40px;
    }
`

const Follow = styled.p`
    margin-top: 5px;
    color: ${color.secondary};
    font-size: 18px;
    font-weight: 400;
    opacity: 0.8;
    letter-spacing: 7px;
    text-align: center;
`

const LineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Diamond = styled.div`
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

const Line = styled.div`
    width: 260px;
    height: 1px;
    background-color: ${color.primary};
    @media only screen and (max-width: 600px) {
        width: 110px;
    }
`


const Title = styled.p`
    font-family: 'Abril Fatface';
    font-size: 4rem;
    font-weight: bold;
    color: #09321682;
    opacity: 0.9;
    white-space: nowrap;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
    }
    @media only screen and (max-width: 600px) {
        font-size: 2rem;
    }
`