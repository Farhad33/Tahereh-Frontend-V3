import React, { useState } from 'react'
import Categories from './Categories'
import {
    Container,
    Follow,
    LineContainer,
    Diamond,
    Line,
    Title
} from '../../pages/_document'
export default function Collections() {


    return (
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
    )
}