import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { color } from '../../util/variables'
import ProductsList from './ProductsList'
import {
    Container,
    Follow,
    LineContainer,
    Diamond,
    Line,
    Title
} from '../shared'

export default function Products() {

    return (
        <Container>
            <Title>AVIOR DESIGN</Title>
            <LineContainer>
                <Line />
                <Diamond />
                <Line />
            </LineContainer>
            <Follow>Follow your dreams</Follow>
            <ProductsList />
        </Container>
    )
}