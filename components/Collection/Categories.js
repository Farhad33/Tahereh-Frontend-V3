import React from 'react'
import styled from 'styled-components'
import { color } from '../../util/variables'


export default function Categories() {
    return (
        <Container>
            {[1, 2, 3, 4].map(category => (
                <Category key={category}>
                    <ImageContainer>
                        <Image src="./placeholder.png"/>
                    </ImageContainer>
                    <Line />
                    <Title>Women's dress</Title>
                </Category>
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4%;
`

const Image = styled.img`
    max-width:100%;
    max-height:100%;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: 300px;
    border: 1px solid ${color.secondary};
`

const Line = styled.div`
    width: 170px;
    height: 30px;
    margin: 50px 0 30px 0;
    background: rgb(237,237,237);
    background: linear-gradient(180deg, rgba(237,237,237,0.8561799719887955) 0%, rgba(255,255,255,1) 48%);
    border-radius: 1px;
`

const Title = styled.p`
    color: ${color.primary};
    font-size: 1.5rem;
`