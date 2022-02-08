import React from 'react'
import styled from 'styled-components'
import { color } from '../../util/variables'


export default function SideLine({ direction }) {
    return (
        <Container direction={direction}>
            {direction === 'top-right' ? <Line /> : ''}
            <Content direction={direction}>Follow your dreams</Content>
            {direction === 'bottom-left' ? <Line /> : ''}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    height: 600px;
    width: 50px;
    position: fixed;
    ${({ direction }) =>
        direction === 'bottom-left' ?
            `bottom: 0;
            left: 2%;`
            :
            `top: 0;
            right: 2%;
            `
    }
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const Line = styled.div`
    background: ${color.secondary};
    height: 300px;
    width: 1px;
`

const Content = styled.p`
    color: ${color.secondary};
    writing-mode: vertical-lr;
    ${({ direction }) => direction === 'bottom-left' ? `transform: rotate(180deg);` : ''}
    font-size: 18.8px;
    font-weight: 300;
    letter-spacing: 7px; 
    ${({ direction }) => direction === 'bottom-left' ? `margin-bottom: 10px;` : `margin-top: 10px;`}
`