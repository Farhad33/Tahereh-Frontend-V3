import React, { useState } from 'react'
import Categories from './Categories'
import {
    Container,
    Follow,
    LineContainer,
    Diamond,
    Line,
    Title
} from '../shared'
export default function Collections() {


    return (
        // <p>salam</p>
        <Container>
            <Title>AVIOR COLLECTIONS</Title>
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